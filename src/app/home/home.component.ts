import { Component, OnInit } from '@angular/core';
import { CostService } from '../shared/services/cost.service';

import { Costs } from '../shared/model/costs.model';
import { Observable, from } from 'rxjs';

import { AuthService } from '../auth/auth.service.service';
import { Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	//fontawesome icon
	faTrashAlt = faTrashAlt;
	faCheck = faCheck;

	costs$: Observable<Costs[]>;
	currentcost$: Observable<Costs>;

	constructor(private router: Router, private authService: AuthService, private costService: CostService) {}

	ngOnInit() {
		this.costs$ = this.costService.getCosts();
	}

	addCost(costDescription: string, costCost: number, costCategory: string, costType: string, costDate: string) {
		// id === null, omdat deze auto wordt ingevuld door de json server
		const newCost = new Costs(null, costDescription, costCost, costCategory, costType, costDate);
		this.costService.addCost(newCost).subscribe((addedCost: Costs) => {
			this.costs$ = this.costService.getCosts();
			console.log(costCost[1].value);
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

	today: number = Date.now();
}
