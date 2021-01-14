import { Component, OnInit } from '@angular/core';
import {BlogpostPanelListComponent} from '../blogpost-panel-list/blogpost-panel-list.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Blogpost} from "../blogpost-panel-list/blogpost-panel/Blogpost Models/blogpost.model";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-blogpost-fullview',
  templateUrl: './blogpost-fullview.component.html',
  styleUrls: ['./blogpost-fullview.component.css']
})
export class BlogpostFullviewComponent implements OnInit {
  blogpost: Blogpost;

  constructor(route: ActivatedRoute, postService: PostService) {}

  ngOnInit(): void {
    this.blogpost =
  }

}
