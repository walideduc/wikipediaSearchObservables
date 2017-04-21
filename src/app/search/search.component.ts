import { Component, OnInit } from '@angular/core';
import {WikipediaService} from "../wikipedia.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items:Array<string>;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
  }

  search(term){
    console.log('send a request for '+term);
    this.wikipediaService.search(term).then(items => this.items = items);
  }



}
