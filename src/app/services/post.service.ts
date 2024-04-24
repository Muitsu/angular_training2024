import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http:HttpClient) { }

  getAllPosts() {
    return  this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
 async getAllPostsAsync() {
  const result =  this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return await lastValueFrom(result);
  }
}
