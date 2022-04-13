import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../types/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?';

  constructor(private http: HttpClient) {}

  // user posts emmitter observable
  getPosts(routeSegment: string): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(
      this.apiUrl + 'userId=' + routeSegment
    );
  }
}
