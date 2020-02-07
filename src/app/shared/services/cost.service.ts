import { Injectable } from "@angular/core";
//import { Costs } from './shared/model/costs.model' ;
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { Costs} from './shared/model/costs.model';

@Injectable ()

export class CostService {
    
    constructor ( private http : HttpClient ) {}
}