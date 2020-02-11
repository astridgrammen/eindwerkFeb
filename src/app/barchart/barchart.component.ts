import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service.service';

@Component({
	selector: 'app-barchart',
	templateUrl: './barchart.component.html',
	styleUrls: [ './barchart.component.css' ]
})
export class BarChartComponent {
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

	barChartData: ChartDataSets[] = [
		{ data: [ 45, 37, 60, 70, 46, 33, 22, 33, 55, 96, 44 ], label: 'Overview Costs' }
	];
	constructor(private router: Router, private authService: AuthService) {}
	ngOnInit() {
		if (!this.authService.isLoggedIn) {
			this.router.navigate([ '/login' ]);
		}
	}
}
