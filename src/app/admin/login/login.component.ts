import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service.service' ;

import { AuthService } from '../auth/auth.service.service' ;
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    if ( !this.authService.isLoggedIn) { this.router.navigate ([ '/login' ])}
  }

}
