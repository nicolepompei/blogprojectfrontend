import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {Blogpost} from '../blogpost-panel-list/blogpost-panel/Blogpost Models/blogpost.model';
import {AuthserviceService} from '../service/authservice.service';




@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  myPostsList = [];
  constructor(private postService: PostService, private authservice: AuthserviceService) { }

  ngOnInit(): void {
    this.getMyPosts();
  }

  getMyPosts(): any[]{
    this.postService.getPosts()
      .subscribe( response => {
        for (const post of response){
          if (post.userName === this.authservice.getUserName()) {
            const postObject = new Blogpost(
              post.id,
              post.userName,
              post.title,
              post.imageLink,
              post.blurb,
              post.fullText,
              post.creationTimestamp
            );
            this.myPostsList.push(postObject);
          }
        }
      });
    return this.myPostsList;
  }

}
