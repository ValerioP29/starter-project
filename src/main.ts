import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';

// Definiamo qui le rotte
const routes: Route[] = [
  {
    path: 'users',
    loadChildren: () => import('./app/users/users.routes').then((mod) => mod.USERS_ROUTES),
  },
  {
    path: 'posts',
    loadChildren: () => import('./app/posts/posts.routes').then((mod) => mod.POSTS_ROUTES),
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
