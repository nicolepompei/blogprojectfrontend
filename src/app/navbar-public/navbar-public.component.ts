import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar-public',
  templateUrl: './navbar-public.component.html',
  styleUrls: ['./navbar-public.component.css']
})
export class NavbarPublicComponent implements OnInit {
  tagName = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateTagName(event: Event): void {
    this.tagName = (event.target as HTMLInputElement).value;
  }

  navigateToSearchPostsByTag(): void {
    this.router.navigate(['/search/' + this.tagName]);
  }
}
