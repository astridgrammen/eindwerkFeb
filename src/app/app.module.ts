import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'overview', component: OverviewComponent }
];

var config = {
    apiKey: "AIzaSyDQ8BdsSU7VuIQzNblGwU83lnBvJpO3DEg",
    authDomain: "eindproef-februari.firebaseapp.com",
    databaseURL: "https://eindproef-februari.firebaseio.com",
    projectId: "eindproef-februari",
    storageBucket: "eindproef-februari.appspot.com",
    messagingSenderId: "940164973892",
    appId: "1:940164973892:web:627af097551d0301e44311"
  };

@NgModule({
	declarations: [ AppComponent, HomeComponent, OverviewComponent, LoginComponent ],
	imports: [ BrowserModule, AppRoutingModule, RouterModule.forRoot(routes), AngularFireModule.initializeApp(config),
		AngularFireAuthModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
