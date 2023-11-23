import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPostModalComponent } from './add-post-modal/add-post-modal.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './store/post-store.reducer';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FilterPostsPipe } from './filter-posts.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    AddPostModalComponent,
    NavBarComponent,
    EditPostComponent,
    PageNotFoundComponent,
    FilterPostsPipe,
  ],
  imports: [
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {
        post: postReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
