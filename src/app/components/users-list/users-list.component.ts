import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: UserInterface[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // catch emmitted users data and set to users property
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      this.users = users;
    });
  }
}
