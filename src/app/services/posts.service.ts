import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(){
    return this.http.get(this.url);
  }

  createPosts(post: any){
    return this.http.post(this.url, post);
  }

  updatePosts(post: any){
    return this.http.delete(this.url + '/' + post.id);
  }

  deletePosts(post: any){
    return this.http.delete(this.url + '/' + post.id);
  }
}
