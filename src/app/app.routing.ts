import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DeletePostComponent }   from './delete-post/delete-post.component';
import { HomePageComponent }   from './home-page/home-page.component';
import { CommentsComponent }   from './comments/comments.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
  {
    path: 'update-post',
    component: UpdatePostComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'delete-post',
    component: DeletePostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
