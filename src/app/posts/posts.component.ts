import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  imports: [CommonModule]
})
export class PostsComponent {
  posts = [
    { id: 1, title: 'Post One', body: 'This is the content of post one.' },
    { id: 2, title: 'Post Two', body: 'This is the content of post two.' },
    { id: 3, title: 'Post Three', body: 'This is the content of post three.' }
  ];

  viewPost(id: number) {
    console.log(`Viewing post ID: ${id}`);
  }
}
