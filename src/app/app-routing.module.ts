import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '',
    component: PostsPageComponent,
    children: [{ path: 'post/:id', component: EditPostComponent }],
  }
  ,
   { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
