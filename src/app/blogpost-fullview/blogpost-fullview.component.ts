import { Component, OnInit } from '@angular/core';
import {BlogpostPanelListComponent} from '../blogpost-panel-list/blogpost-panel-list.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blogpost-fullview',
  templateUrl: './blogpost-fullview.component.html',
  styleUrls: ['./blogpost-fullview.component.css']
})
export class BlogpostFullviewComponent implements OnInit {
  blogposts = [];

  constructor(
    private blogpostPanelListComponent: BlogpostPanelListComponent, private router: Router) {
    this.blogposts = this.blogpostPanelListComponent.getBlogpostList();
  }

  ngOnInit(): void {
  }

}
