import { Inject, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Post } from '../models/Post';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.css'],
})
export class AddPostModalComponent {
  @ViewChild('f') addPost: NgForm;
  alert: string = 'Please enter title and body';
  alertShow: boolean = false;
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddPostModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) {}
  onSubmit(f: NgForm) {
    if (!f.valid) {
      //alert validation error
      this.alertShow = true;
    } else {
      //add new post
      const post: any = {
        title: this.addPost.value.post.title,
        body: this.addPost.value.post.body,
        id: 0,
      };
      this.apiService.addPost(post).subscribe((res: any) => {
        res.id = this.generateRandomNumber();
        this.dialogRef.close(res);
      });
    }
  }
  generateRandomNumber() {
    // generate a random number
    const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
    return randomNumber;
  }
  closeModal() {
    //close modal
    this.dialogRef.close();
  }
}
