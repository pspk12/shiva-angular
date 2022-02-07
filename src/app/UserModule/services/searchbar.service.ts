import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  constructor(private http: HttpClient) { }
  getAllFunctionHalls():Observable<any>
  {
    return this.http://13.233.231.174/api/functionhalls/');
  }
  
  findFunctionhallByNameAndCity(city):Observable<any>
  {
    return this.http.get('http://vedikaload-972979603.us-east-1.elb.amazonaws.com/api/functionhallsBy/?city='+city);
  }
 
}

