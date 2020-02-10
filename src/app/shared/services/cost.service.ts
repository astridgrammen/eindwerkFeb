import { Injectable } from "@angular/core";
import { Costs } from '../model/costs.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { tap } from "rxjs/operators";
import { Observable, from } from "rxjs";

@Injectable ()

export class CostService {
    url = "http://localhost:3000/costs";


    constructor(private http: HttpClient) { }

    getCosts(): Observable<Costs[]> {
        return this.http
            .get<Costs[]>(this.url)
            .pipe(tap(result => console.log("via json-server: ", result)));
    }
    /*
    getCost(id: number) {
        return this.http.get<Costs>(`${this.url}/${id}`);
    }
    */
    addCost(newCost: Costs): Observable<any> {
        const headers = new HttpHeaders().set("Content-type", "application/json");
        return this.http.post(this.url, newCost, { headers: headers });
    }

  deleteCost(value){
    return this.http.delete(this.url + "/" + value)
  }

  /*
  editCost(i: number, costDescription: string, costCost: number, costCategory: string, costType: string){
    this.http.costs.i = costDescription;
    this.http.costs$.costDescription = costDescription;
    this.http.costs$.costCost = costCost;
    this.costs$
  }
*/

}