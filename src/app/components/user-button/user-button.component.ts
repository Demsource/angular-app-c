import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css'],
})
export class UserButtonComponent implements OnInit {
  // placing passed user name
  @Input() name?: string;
  // placing passed user id
  @Input() id?: string;

  constructor() {}

  ngOnInit(): void {}
}
