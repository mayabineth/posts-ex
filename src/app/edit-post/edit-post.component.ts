import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { editPost } from '../store/post-store.actions';
import { InputFocusService } from '../services/input-focus.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  @ViewChild('f') editPost: NgForm;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private inputFocusService: InputFocusService,
    private store: Store
  ) {}
  ngOnInit() {
    //get the specific post to edit
    this.id = +this.route.snapshot.params['id'];
    this.apiService.getPost(this.id).subscribe((post) => {
      this.editPost.form.patchValue({
        edit: { title: post.title, body: post.body },
      });
    });
  }
  onFocus() {
    //focus title or body input element
    this.inputFocusService.setValue(true);
  }
  onBlur() {
    //blur title or body input element
    this.inputFocusService.setValue(false);
  }
  onSubmit() {
    //on submit edited title and body
    const post: any = {
      title: this.editPost.form.value.edit.title,
      body: this.editPost.form.value.edit.body,
      id: this.id,
    };
    this.apiService.updatePost(post).subscribe((res: any) => {
      this.store.dispatch(editPost({ post: res }));
    });
  }
}
