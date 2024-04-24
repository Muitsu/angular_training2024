import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})

export class PostListComponent implements OnInit {
  columnToDisplay = ['User','Id','Title','Body'];
  listAllPosts:Post[] = [];
    constructor(private postService:PostService){}
    ngOnInit(): void {
      this.postService.getAllPosts().subscribe(
        {
          next: (response) => {
            this.listAllPosts = response;
            console.log('Successfully loaded all posts');
          },
          error: (err: any) => {
            console.error('Error:', err);
          },
          complete: () => {
            console.log('Complete');
           }
        }
    );
    }
}
