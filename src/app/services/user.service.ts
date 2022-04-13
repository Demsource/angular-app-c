import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // user data emmitter observable
  getUser(routeSegment: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.apiUrl + '/' + routeSegment);
  }
}
