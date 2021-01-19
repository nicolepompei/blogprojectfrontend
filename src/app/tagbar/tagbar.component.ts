import { Component, OnInit } from '@angular/core';
import {BlogpostPanelListComponent} from '../blogpost-panel-list/blogpost-panel-list.component';
import {PostService} from '../service/post.service';
import { ActivatedRoute } from '@angular/router';
import {Blogpost} from "../blogpost-panel-list/blogpost-panel/Blogpost Models/blogpost.model";

@Component({
  selector: 'app-tagbar',
  templateUrl: './tagbar.component.html',
  styleUrls: ['./tagbar.component.css']
})
export class TagbarComponent implements OnInit {
  blogposts = [];
  tagSet = new Set();
  tagName;
  blogPostListByTag = [];
  

  constructor(
    private blogpostPanelListComponent: BlogpostPanelListComponent,
    private postService: PostService, 
    private activatedRoute: ActivatedRoute) {
    this.blogposts = this.blogpostPanelListComponent.getBlogpostList();
  }

  ngOnInit(): void {
    this.getTagsList();
    this.retrieveTagName();
  }

  getTagsList(): void {
    this.postService.getPosts()
      .subscribe(response => {
        for (const post of response) {
          post.tags.forEach(((val) => {
            this.tagSet.add(val.tagName);
          }));
        }
      });
    console.log(this.tagSet);
  }

  retrieveTagName(): void {
    this.tagName = this.activatedRoute.snapshot.params.tag;
  }

  getPostsByTag(): void {
    this.postService.getAllByTag(this.tagName)
      .subscribe(response => {
        console.log(response);
        for (const post of response) {
          const postObject = new Blogpost(
            post.id, post.userName, post.title,
            post.imageLink, post.blurb, post.fullText, post.creationTimestamp
          );
          this.blogposts.push(postObject);
        }
      });
      console.log(this.blogposts);
  }

}