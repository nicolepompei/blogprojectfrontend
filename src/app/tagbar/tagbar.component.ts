import { Component, OnInit } from '@angular/core';
import {BlogpostPanelListComponent} from '../blogpost-panel-list/blogpost-panel-list.component';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-tagbar',
  templateUrl: './tagbar.component.html',
  styleUrls: ['./tagbar.component.css']
})
export class TagbarComponent implements OnInit {
  blogposts = [];
  tagSet = new Set();

  constructor(
    private blogpostPanelListComponent: BlogpostPanelListComponent,
    private postService: PostService) {
    this.blogposts = this.blogpostPanelListComponent.getBlogpostList();
  }

  ngOnInit(): void {
    this.getTagsList();
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
}

