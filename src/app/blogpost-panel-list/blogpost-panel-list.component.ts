import { Component, OnInit } from '@angular/core';
import {Blogpost} from './blogpost-panel/Blogpost Models/blogpost.model';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../service/post.service';


@Component({
  selector: 'app-blogpost-panel-list',
  templateUrl: './blogpost-panel-list.component.html',
  styleUrls: ['./blogpost-panel-list.component.css']
})
export class BlogpostPanelListComponent implements OnInit {
  blogpostList = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getBlogpostList();
  }

  getBlogpostList(): any[] {
    this.postService.getPosts()
      .subscribe(response => {
        // console.log(response);
        //response.title wasn't working here b/c this is receiving an array
        for (const post of response) {
          const postObject = new Blogpost(
            post.id,
             post.userName,
              post.title,
            post.imageLink,
             post.blurb,
              post.fullText,
              post.creationTimestamp
          );
          this.blogpostList.push(postObject);
        }
      });
    console.log(this.blogpostList);
    return this.blogpostList;
  }
}
