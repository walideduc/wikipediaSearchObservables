import { Component, OnInit } from '@angular/core';
import {WikipediaService} from "../wikipedia.service";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items:Array<string>;
  term = new FormControl();
  constructor(private wikipediaService: WikipediaService) {
    this.term.valueChanges.debounceTime(400).distinctUntilChanged().subscribe( term => this.wikipediaService.search(term).then(items => { console.log(term);this.items = items } ));
  }

  ngOnInit() {
  }

}
