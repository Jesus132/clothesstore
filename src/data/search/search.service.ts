import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MercadoLibre, Results} from 'src/data/search/search.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private API = environment.api;
  private id_category = environment.id_category;

  routerOnOff = false;
  carShopOnOff = false;
  listProduct: Results[] = [];
  listCarShop: Results[] = [];

  constructor(private http: HttpClient) { }

  public GetQuery(Query: string): void {
    let params = new HttpParams();
    params= params.append('category', this.id_category);
    params= params.append('q', Query);
    this.http.get<MercadoLibre>(`${this.API}/search`, { params }).subscribe(
      (resp) => {
        console.log(resp);
        this.listProduct = resp.results;
        if(Query.length <= 0){
          this.listProduct = [];
        }
      },
      (err) => {
        console.log(err);
      });
  }

}
