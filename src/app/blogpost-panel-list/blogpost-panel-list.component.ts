import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost-panel/Blogpost Model/blogpost.model';

@Component({
  selector: 'app-blogpost-panel-list',
  templateUrl: './blogpost-panel-list.component.html',
  styleUrls: ['./blogpost-panel-list.component.css']
})
export class BlogpostPanelListComponent implements OnInit {
  blogposts: Blogpost[] = [
    new Blogpost('A New Post', new Date(),
      'An example blog post for testing purposes',
      'https://mymodernmet.com/wp/wp-content/uploads/2018/05/free-image-downloads.jpg')
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
