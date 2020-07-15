import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableModule } from 'projects/ngx-dynamic-table/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
