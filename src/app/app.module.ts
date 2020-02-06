import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'overview', component: OverviewComponent }
];

@NgModule({
	declarations: [ AppComponent, HomeComponent, OverviewComponent ],
	imports: [ BrowserModule, AppRoutingModule, RouterModule.forRoot(routes) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
