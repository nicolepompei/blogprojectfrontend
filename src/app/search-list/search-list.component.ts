import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../service/post.service";
import {Blogpost} from "../blogpost-panel-list/blogpost-panel/Blogpost Models/blogpost.model";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  tagName;
  blogPostList = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.retrieveTagName();
    this.getPostsByTag();
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
          this.blogPostList.push(postObject);
          // Object.assign(postObject, response);
        }
      });
  }

}
