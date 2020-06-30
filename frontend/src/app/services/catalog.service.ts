import { Injectable } from '@angular/core';
import { ICatalog } from '../interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient,
  ) { }

  getChildren(id: string): Observable<ICatalog[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<ICatalog[]>(
      'api/catalog/get-children/' + id,
      httpOptions
    );
  }

  getScrollableChildren(id: string): Observable<ICatalog[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<ICatalog[]>(
      'api/catalog/get-scrollable-children/' + id,
      httpOptions
    );
  }
}
