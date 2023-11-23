import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '../models/Post';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddPostModalComponent } from '../add-post-modal/add-post-modal.component';
@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css'],
})
export class PostsPageComponent implements OnInit {
  posts: Post[] = [];
  postId: any = null;
  toggleEditBtn: boolean = false;
  @ViewChild('filterValue') filterValue: ElementRef;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private store: Store<{ post: any }>
  ) {}
  ngOnInit() {
    this.getPosts();
    //get edited post item from store
    this.store.select('post').subscribe((data) => {
      let postEdit = data.post;
      this.toggleEditBtn = false;
      this.postId = postEdit.id;
      this.posts = this.posts.map((item) =>
        item.id != postEdit.id ? item : postEdit
      );
    });
    let id = window.location.href.split('/').pop();
    if (id) this.postId = id;
  }
  getPosts() {
    //get post list from API
    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  filterPost(event: any) {}
  expandPost(id: any) {
    //click on expand post
    this.toggleEditBtn = false;
    if (this.postId == id) {
      this.postId = null;
      this.router.navigate(['']);
    } else {
      this.postId = id;
      this.router.navigate(['post', id]);
    }
  }
  editPost() {
    //click on edit post
    this.toggleEditBtn = true;
  }
  deletePost(id: any) {
    //click on delete post
    this.apiService.deletePost(id);
    this.posts = this.posts.filter((item) => item.id != id);
  }
  addPost() {
    //click on add post and open add post modal
    let _popup = this.dialog.open(AddPostModalComponent, {
      height: '300px',
      width: '600px',
    });
    _popup.afterClosed().subscribe((result) => {
      if (result) this.posts = [result, ...this.posts];
    });
  }
}
