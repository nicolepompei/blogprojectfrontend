import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {AuthserviceService} from "../service/authservice.service";

@Component({
  selector: 'app-navbar-logged-in',
  templateUrl: './navbar-logged-in.component.html',
  styleUrls: ['./navbar-logged-in.component.css']
})
export class NavbarLoggedInComponent implements OnInit {
  tagName = '';
  isLoggedIn;
  toggle = true;
  status = 'Enable';

  constructor(private router: Router, private authService: AuthserviceService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    console.log(this.isLoggedIn);
  }

  updateTagName(event: Event): void {
    this.tagName = (event.target as HTMLInputElement).value;
  }

  navigateToSearchPostsByTag(): void {
    this.router.navigate(['/search/' + this.tagName]);
  }

  logOut(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.toastr.success("Logout successful. Bye!");
    this.router.navigate(['/home']);
  }

}
