import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { LoginRequestPayload } from './login.request.payload';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private authService: AuthserviceService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    }; 
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.activatedRoute.queryParams
    .subscribe(params => {
      if (params.registered !== undefined && params.registered === 'true')

          this.toastr.success('Signup Successful');
          this.registerSuccessMessage = 'Please login to continue!';
    }
    );
  }

  login(){
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe(data => {
      //if(data) {
        this.isError = false;
        this.router.navigateByUrl('');
        this.toastr.success('Login Successful!');
      }, error => {
        this.toastr.error('Credentials Incorrect, try again!')
        this.isError = true;
        throwError(error);
      }); 
      //else{
       // this.isError = true;
   //}
  }

}
