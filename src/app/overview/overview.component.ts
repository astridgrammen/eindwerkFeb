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
      let jan:number = 0;
      let feb:number = 0;
      let mar:number = 0;
      let apr:number = 0;
      let may:number = 0;
      let jun:number = 0;
      let jul:number = 0;
      let aug:number = 0;
      let sep:number = 0;
      let oct:number = 0;
      let nov:number = 0;
      let dec:number = 0;

        for (let i = 0, l = res.length; i < l; i++) {
        console.log(new Date(res[i].date).getMonth());
        // checken welke maand de data van afkomstig is en deze aan een maand var toekennen
        // 0 = januari, 1 = februari etc...
        if (new Date(res[i].date).getMonth() == 0) {
          jan = jan + parseInt(res[i].cost)
               }
        if (new Date(res[i].date).getMonth() == 1) {
          feb = feb + parseInt(res[i].cost)
        }
        if (new Date(res[i].date).getMonth() == 2) {
          mar = mar + parseInt(res[i].cost)
               }
               if (new Date(res[i].date).getMonth() == 3) {
                apr = apr + parseInt(res[i].cost)
                     }
                     if (new Date(res[i].date).getMonth() == 4) {
                      may = may + parseInt(res[i].cost)
                           }
                           if (new Date(res[i].date).getMonth() == 5) {
                            jun = jun + parseInt(res[i].cost)
                                 }
                                 if (new Date(res[i].date).getMonth() == 6) {
                                  jul = jul + parseInt(res[i].cost)
                                       }
                                       if (new Date(res[i].date).getMonth() == 7) {
                                        aug = aug + parseInt(res[i].cost)
                                             }
                                             if (new Date(res[i].date).getMonth() == 8) {
                                              sep = sep + parseInt(res[i].cost)
                                                   }
                                                   if (new Date(res[i].date).getMonth() == 9) {
                                                    oct = oct + parseInt(res[i].cost)
                                                         }
                                                         if (new Date(res[i].date).getMonth() == 10) {
                                                          nov = nov + parseInt(res[i].cost)
                                                               }
                                                               if (new Date(res[i].date).getMonth() == 11) {
                                                                dec = dec + parseInt(res[i].cost)
                                                                     }                              
    }
    // de maanden pushen naar de array voor de char, nog aanvullen met andere maanden.
    this.datachar.push(jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec);
    
  });
console.log(this.datachar)
    }
}
