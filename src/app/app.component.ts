import { Component, OnInit } from '@angular/core';
import { CostService } from './shared/services/cost.service';
import { AuthService } from './auth/auth.service.service';

import { Costs } from './shared/model/costs.model';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	costs$: Observable<Costs[]>;
	currentcost$: Observable<Costs>;
	constructor(private costService: CostService, private router: Router, private authService: AuthService) {}
	ngOnInit() {
		this.costs$ = this.costService.getCosts();
		if (!this.authService.isLoggedIn) {
			this.router.navigate([ '/login' ]);
		}
	}

	addCost(costDescription: string, costCost: number, costCategory: string, costType: string, costDate: string) {
		// id === null, omdat deze auto wordt ingevuld door de json server
		const newCost = new Costs(null, costDescription, costCost, costCategory, costType, costDate);
		this.costService.addCost(newCost).subscribe((addedCost: Costs) => {
			this.costs$ = this.costService.getCosts();
		});
	}
	deleteCost(value) {
		this.costService.deleteCost(value).subscribe();
	}

	editCost(
		costId: number,
		costDescription: string,
		costCost: number,
		costCategory: string,
		costType: string,
		costDate: string
	) {
		const newCost = new Costs(costId, costDescription, costCost, costCategory, costType, costDate);
		this.costService.editCost(newCost).subscribe((addedCost: Costs) => {
			this.costs$ = this.costService.getCosts();
		});
	}
}
