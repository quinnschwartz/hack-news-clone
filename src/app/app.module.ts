import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NewPostComponent } from './new-post/new-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    UpdatePostComponent,
    DeletePostComponent,
    HomePageComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
