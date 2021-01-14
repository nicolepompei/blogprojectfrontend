import { Component, OnInit, Input } from '@angular/core';
import {Blogpost} from './Blogpost Models/blogpost.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-blogpost-panel',
  templateUrl: './blogpost-panel.component.html',
  styleUrls: ['./blogpost-panel.component.css']
})
export class BlogpostPanelComponent implements OnInit {
  @Input() blogpost: Blogpost;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fullPost(): void {
    // this.router.navigate(['/fullPost']);
  }
}

