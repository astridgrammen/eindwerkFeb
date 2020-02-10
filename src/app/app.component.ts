import { Component, OnInit } from '@angular/core';
import { CostService } from './shared/services/cost.service' ;

import { Costs } from './shared/model/costs.model' ;
import { Observable } from 'rxjs';

import { Router } from "@angular/router"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  costs$: Observable<Costs[]>;
  currentcost$: Observable<Costs>
  constructor(private costService: CostService, private router: Router) { }
  ngOnInit() {
      this.costs$ = this.costService.getCosts();
  }

  // Land toevoegen --> doorgeven aan de service
  addCost(costDescription: string, costCost: number, costCategory: string, costType: string) {
      // id === null, omdat deze auto wordt ingevuld door de json server
      const newCost = new Costs(null, costDescription, costCost, costCategory, costType);
      this.costService.addCost(newCost)
          .subscribe((addedCost: Costs) => {
              // countries opnieuw ophalen in de subscription
              this.costs$ = this.costService.getCosts();
          });
  }
    deleteCost(value){
        this.costService.deleteCost(value).subscribe();

    }/*
    editCost(value) {
        this.costService.editCost(value);
    }*/

}