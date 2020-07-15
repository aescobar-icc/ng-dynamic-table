import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableRoutingModule } from './dynamic-table-routing.module';
import { TableComponent } from './components/table/table.component';
@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    DynamicTableRoutingModule
  ],
  exports:[TableComponent]
})
export class DynamicTableModule { }
