
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  posts : any[];

  constructor(private service: PostsService){}

  ngOnInit(){
    this.service.getPosts().subscribe((response: any) => {
      console.log(response);
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post: any = {title: input.value};
    input.value = '';           // if not written then after pressing enter previous value is shown...
    this.service.createPosts(post).subscribe((response) =>{
      console.log(response);
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post: any){
    post.title = "harsh";
    this.service.updatePosts(post).subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post: any){
    this.service.deletePosts(post).subscribe(response => {
      console.log(response);
      this.posts.splice(this.posts.indexOf(post), 1);
    });
  }
}
