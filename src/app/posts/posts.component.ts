import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {

  url = 'https://jsonplaceholder.typicode.com/posts';
  posts : any[];

  constructor(private http: HttpClient){
    http.get(this.url)
      .subscribe((response: any) => {
          console.log(response);
          this.posts = response;
      });
  }

  createPost(input: HTMLInputElement){
    let post: any = {title: input.value};
    input.value = '';           // if not written then after pressing enter previous value is shown...

      this.http.post(this.url, post)
        .subscribe((response) =>{
          console.log(response);
          this.posts.splice(0, 0, post);
        });
  }

  updatePost(post: any){
      post.title = "harsh";
      this.http.put(this.url + '/' + post.id, post)
        .subscribe(response => {
          console.log(response);
        });
  }
}
