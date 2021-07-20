import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/data/search/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  auxQuery:string = '';

  constructor(public search: SearchService) { }

  ngOnInit(): void {
  }

  tab(query: string): void{
    if(this.auxQuery !== query){
      this.auxQuery = query;
      this.search.GetQuery(query);
      this.search.carShopOnOff = false;
    }
  }

}
