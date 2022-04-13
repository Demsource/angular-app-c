import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user?: UserInterface;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let userIdSegment = this.route.snapshot.paramMap.get('id');

    // catch emmitted user data and set to user property
    userIdSegment &&
      this.userService
        .getUser(userIdSegment)
        .subscribe((user: UserInterface) => {
          this.user = user;
        });
  }
}
