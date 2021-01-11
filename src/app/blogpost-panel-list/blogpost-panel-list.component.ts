import { Component, OnInit } from '@angular/core';
import {Blogpost} from './blogpost-panel/Blogpost Models/blogpost.model';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-blogpost-panel-list',
  templateUrl: './blogpost-panel-list.component.html',
  styleUrls: ['./blogpost-panel-list.component.css']
})
export class BlogpostPanelListComponent implements OnInit {
  blogpostList = [];
  // imageSrc: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllBlogposts();
  }

  getAllBlogposts(): void {
    this.httpClient.get<any>('http://localhost:3000/blogpostsList')
      .subscribe(response => {
        console.log(response);
        for (const post of response) {
          const postObject = new Blogpost();
          Object.assign(postObject, post);
          // this.imageSrc = post.imagelink;
          this.blogpostList.push(postObject);
          console.log(postObject);
          console.log(post.imageLink);
        }
      });
    // console.log(this.blogpostList);
  }
}
