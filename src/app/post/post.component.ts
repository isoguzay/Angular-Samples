import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  path = 'https://jsonplaceholder.typicode.com/';

  posts: Post[];
  users: User[];

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params['userId']);
    });
  }

  getPosts(userId) {
    if (userId) {
      const newPath = this.path + 'posts?userId=' + userId;
      this.http.get<Post[]>(newPath).subscribe(response => {
        this.posts = response;
      });
    } else {
      this.http.get<Post[]>(this.path + 'posts').subscribe(response => {
        this.posts = response;
      });
    }
  }

  getUsers() {
    this.http.get<User[]>(this.path + 'users').subscribe(response => {
      this.users = response;
    });
  }
}
