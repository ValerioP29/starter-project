import { Route } from '@angular/router';
import { inject } from '@angular/core';
import { PostsComponent } from './posts.component';
import { AuthService } from '../auth/auth.service';

export const POSTS_ROUTES: Route[] = [
  {
    path: '',
    component: PostsComponent,
    canActivate: [() => inject(AuthService).isAuthenticated()]  // Protezione della rotta
  }
];
