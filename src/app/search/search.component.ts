import { Component, OnInit } from '@angular/core';
import {WikipediaService} from "../wikipedia.service";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/mergeMap";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items:Array<string>;
  term = new FormControl();
  constructor(private wikipediaService: WikipediaService) {
    this.term.valueChanges.debounceTime(400).distinctUntilChanged().mergeMap( term =>  this.wikipediaService.search(term) ).subscribe(items => this.items = items);
  }

  ngOnInit() {
  }

}
