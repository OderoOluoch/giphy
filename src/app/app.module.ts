import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GiphComponent } from './giph/giph.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphComponent,
    GiphySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
