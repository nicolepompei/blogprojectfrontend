import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-panels',
  templateUrl: './search-panels.component.html',
  styleUrls: ['./search-panels.component.css']
})
export class SearchPanelsComponent implements OnInit {
  @Input() blogPost;
  constructor() { }

  ngOnInit(): void {
  }

}
