import { Component, OnInit, Input } from '@angular/core';
import {Blogpost} from './Blogpost Models/blogpost.model';


@Component({
  selector: 'app-blogpost-panel',
  templateUrl: './blogpost-panel.component.html',
  styleUrls: ['./blogpost-panel.component.css']
})
export class BlogpostPanelComponent implements OnInit {
  @Input() blogpost: Blogpost;
  // @Input() imgPath = 'libreshot.com/wp-content/uploads/2016/07/programming.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
