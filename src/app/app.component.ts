import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service.service';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	//icons fontawesome
	faHome = faHome;
	faChartLine = faChartLine;
	faPowerOff = faPowerOff;

	//auth service binnenhalen + maakt routing mogelijk met verschillende componenten
	constructor(private router: Router, private authService: AuthService) {}
	ngOnInit() {
		if (!this.authService.isLoggedIn) {
			this.router.navigate([ '/login' ]);
		}
	}
}
