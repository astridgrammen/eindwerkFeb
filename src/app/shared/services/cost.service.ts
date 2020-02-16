import { Injectable } from '@angular/core';
import { Costs } from '../model/costs.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CostService {
	url = 'http://localhost:3000/costs';

	constructor(private http: HttpClient) {}

	getCosts(): Observable<Costs[]> {
		return this.http.get<Costs[]>(this.url);
	}

	addCost(newCost: Costs): Observable<any> {
		const headers = new HttpHeaders().set('Content-type', 'application/json');
		return this.http.post(this.url, newCost, { headers: headers });
	}

	deleteCost(value) {
		return this.http.delete(this.url + '/' + value);
	}

	editCost(newCost: Costs): Observable<any> {
		//console.log(newCost.id);
		const headers = new HttpHeaders().set('Content-type', 'application/json');
		return this.http.put(this.url + '/' + newCost.id, newCost, {
			headers: headers
		});
	}
}
