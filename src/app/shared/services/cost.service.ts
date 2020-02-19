import { Injectable } from '@angular/core';
import { Costs } from '../model/costs.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Injectable()
export class CostService {
	//link json-server
	url = 'http://localhost:3000/costs';

	//http-request aanvragen
	constructor(private http: HttpClient) {}

	//haalt kosten van de json-server binnen
	getCosts(): Observable<Costs[]> {
		return this.http.get<Costs[]>(this.url).pipe(map((res) => res.reverse()));
	}

	//voegt kosten to aan de json-server
	addCost(newCost: Costs): Observable<any> {
		const headers = new HttpHeaders().set('Content-type', 'application/json');
		return this.http.post(this.url, newCost, { headers: headers });
	}

	//verwijderd kosten van de json-server
	deleteCost(value) {
		return this.http.delete(this.url + '/' + value);
	}

	//aanpassen van kosten van de json-server
	editCost(newCost: Costs): Observable<any> {
		const headers = new HttpHeaders().set('Content-type', 'application/json');
		return this.http.put(this.url + '/' + newCost.id, newCost, {
			headers: headers
		});
	}
}
