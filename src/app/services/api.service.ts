import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/models/Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  updatePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(
      `${this.postsUrl}/${post.id}`,
      post,
      httpOptions
    );
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.postsUrl}/${id}`);
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}`);
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.postsUrl}/${id}`, httpOptions);
  }

}
