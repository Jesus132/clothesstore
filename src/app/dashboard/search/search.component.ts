import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/data/search/search.service';

import { Results } from 'src/data/search/search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listItem = [
    {
      name:'A'
    },
    {
      name:'B'
    },
    {
      name:'B'
    },
    {
      name:'B'
    },
    {
      name:'B'
    },
    {
      name:'B'
    },
    {
      name:'B'
    }
  ];

  constructor(public search: SearchService) { }

  ngOnInit(): void {
  }

  addCarShop(item:Results): void{
    this.search.listCarShop.push(item);
  }

  deletCarShop(id: string): void{
    this.search.listCarShop = this.search.listCarShop.filter( item => item.id !== id);
  }

}
