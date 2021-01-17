import {Component, OnInit} from '@angular/core';
import {AuthserviceService} from "./service/authservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blrb';

  constructor() {
  }

  ngOnInit(): void {
  }
}


