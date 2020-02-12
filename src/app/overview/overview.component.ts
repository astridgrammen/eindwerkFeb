import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    /*if ( !this.authService.isLoggedIn) { this.router.navigate ([ '/login' ])}*/
  }

}
