import { Component, OnInit } from '@angular/core';
import { CostService } from '../shared/services/cost.service';

import { Costs } from '../shared/model/costs.model';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	costs$: Observable<Costs[]>;
	currentcost$: Observable<Costs>;
	constructor(private router: Router, private authService: AuthService, private costService: CostService) {}

	ngOnInit() {
		/*if (!this.authService.isLoggedIn) {
			this.router.navigate([ '/login' ]);
		}*/
		this.costs$ = this.costService.getCosts();
	}
	addCost(costDescription: string, costCost: number, costCategory: string, costType: string, costDate: string) {
		// id === null, omdat deze auto wordt ingevuld door de json server
		const newCost = new Costs(null, costDescription, costCost, costCategory, costType, costDate);
		this.costService.addCost(newCost).subscribe((addedCost: Costs) => {
			// countries opnieuw ophalen in de subscription
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
