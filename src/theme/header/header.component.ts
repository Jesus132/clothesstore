import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/data/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public search: SearchService) { }

  ngOnInit(): void {
  }

  searchinput(e: any): void{
    this.search.GetQuery(e.target.value);
  }

}
