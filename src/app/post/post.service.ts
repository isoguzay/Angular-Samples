import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  path = 'https://jsonplaceholder.typicode.com/';


  getPosts(userId): Observable<Post[]> {
    if (userId) {
      const newPath = this.path + 'posts?userId=' + userId;
      return this.http.get<Post[]>(newPath);
    } else {
      return this.http.get<Post[]>(this.path + 'posts');
    }
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + 'users');
  }
}
