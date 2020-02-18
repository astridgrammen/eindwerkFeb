import { Injectable } from '@angular/core';
import { Incomes } from '../model/incomes.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class IncomeService {
    url = 'http://localhost:3000/incomes';

    constructor(private http: HttpClient) {}

    getIncomes(): Observable<Incomes[]> {
		return this.http.get<Incomes[]>(this.url);
	}

	addIncome(newIncome: Incomes): Observable<any> {
		const headers = new HttpHeaders().set('Content-type', 'application/json');
		return this.http.post(this.url, newIncome, { headers: headers });
	}
/*
	deleteIncome(value) {
		return this.http.delete(this.url + '/' + value);
	}
*/
/*
	editIncome(newIncome: Incomes): Observable<any> {

		const headers = new HttpHeaders().set('Content-type', 'application/json');
		return this.http.put(this.url + '/' + newIncome.id, newIncome, {
			headers: headers
		});
	}
*/
}