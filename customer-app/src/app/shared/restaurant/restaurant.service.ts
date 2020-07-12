import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestaurantService {

  public API = 'http://ncbubuntu.eastus.cloudapp.azure.com:8081/api/v1/customer';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }

  get(id: string) {
    return this.http.get(this.API + '/' + id);
  }

  save(restaurants: any): Observable<any> {
    let result: Observable<Object> = this.http.post(this.API, restaurants);
    return result;
  }
  update(restaurants: any,id: string): Observable<any> {
    let result: Observable<Object> = this.http.put(this.API + '/' + id, restaurants, this.httpOptions);
    return result;
  }
  delete(id: string) {
    return this.http.delete(this.API + '/' + id);
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
