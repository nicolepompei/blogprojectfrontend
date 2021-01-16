import {Component, OnInit} from '@angular/core';
import {BlogpostPanelListComponent} from '../blogpost-panel-list/blogpost-panel-list.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Blogpost} from '../blogpost-panel-list/blogpost-panel/Blogpost Models/blogpost.model';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-blogpost-fullview',
  templateUrl: './blogpost-fullview.component.html',
  styleUrls: ['./blogpost-fullview.component.css']
})
export class BlogpostFullviewComponent implements OnInit {
  blogpost: Blogpost;
  id;

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data.id;
    });
    this.getBlog();
    // console.log(this.blogpost);
  }

  getBlog(): void {
    this.postService.getPostById(this.id)
      .subscribe(response => {
        // this.blogpost = JSON.parse(response);
        const obj = response;
        this.blogpost = new Blogpost(
          obj.id,
           obj.userName,
            obj.title,
          obj.imageLink,
           obj.blurb,
            obj.fullText,
            obj.creationTimestamp
        );

        // console.log(response);
        console.log(this.blogpost);
      });
  }
}
