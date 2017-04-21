import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule ,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WikipediaService} from "./wikipedia.service";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
