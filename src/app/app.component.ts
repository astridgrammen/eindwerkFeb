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
	
	//TEST INPUT TYPE
	
	selectedOption: string;
	  printedOption: string;
/*	  
	  options = [
		{ name: "option1", value: 1 },
		{ name: "option2", value: 2 }
	  ]

	  print() {
		this.printedOption = this.selectedOption;
		console.log("My input: ", this.selectedOption);
	  }
*/
	  //////////////////////////////////////

	costs$: Observable<Costs[]>;
	currentcost$: Observable<Costs>;
	constructor(private costService: CostService, private router: Router, private authService: AuthService) {}
	ngOnInit() {
		this.costs$ = this.costService.getCosts();
		if ( !this.authService.isLoggedIn) { this.router.navigate ([ '/login' ])};
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
