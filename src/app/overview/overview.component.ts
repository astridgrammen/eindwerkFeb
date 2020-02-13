import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { CostService } from '../shared/services/cost.service';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from '../auth/auth.service.service';
import { Router } from '@angular/router';

import { Costs } from '../shared/model/costs.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  costs$: Observable<Costs[]>;
  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'October',
    'November',
    'December'
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  datachar = [];

  barChartData: ChartDataSets[] = [
    { data: this.datachar, label: 'Overview Costs' }
  ];

  constructor(private router: Router, private authService: AuthService, private costService: CostService
  ) { }

  ngOnInit() {
    this.costs$ = this.costService.getCosts()
    this.costs$.subscribe(res => {
      for (let i = 0, l = res.length; i < l; i++) {
        this.datachar.push(res[i].cost);
    }}  
      );
console.log(this.datachar)
    }
  }
