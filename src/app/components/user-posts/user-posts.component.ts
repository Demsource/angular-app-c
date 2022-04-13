import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';
import { PostInterface } from 'src/app/types/posts.interface';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  posts?: PostInterface[] = [];
  userName: string = '';

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let userIdSegment = this.route.snapshot.paramMap.get('id');

    // catch emmitted users posts and set to posts property
    userIdSegment &&
      this.postsService
        .getPosts(userIdSegment)
        .subscribe((posts: PostInterface[]) => {
          this.posts = posts;
          console.log(posts);
        });

    // catch emmitted user data and set to user name property
    userIdSegment &&
      this.userService
        .getUser(userIdSegment)
        .subscribe((user: UserInterface) => {
          this.userName = user.name;
        });
  }
}
