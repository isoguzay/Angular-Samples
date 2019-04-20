import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService: PostService
  ) { }

  path = 'https://jsonplaceholder.typicode.com/';

  posts: Post[];
  users: User[];
  filterText: string;
  today = new Date(2019, 3, 21);

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params['userId']);
    });
  }

  getPosts(userId) {
    this.postService.getPosts(userId).subscribe(data => {
      this.posts = data
    });
  }

  getUsers() {
    this.postService.getUsers().subscribe(data => {
      this.users = data
    });
  }

  addToFavourites(post) {
    this.alertifyService.success("Added to Favourites: " + post.title);
  }
}
