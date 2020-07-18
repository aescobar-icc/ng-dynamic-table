import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableRoutingModule } from './dynamic-table-routing.module';
import { TableComponent } from './components/table/table.component';
import { NestedArrayComponent } from './renders/nested-array/nested-array.component';
import { TableCellRenderDirective } from './directives/table-cell-render.directive';

@NgModule({
  declarations: [TableComponent, NestedArrayComponent, TableCellRenderDirective],
  imports: [
    CommonModule,
    DynamicTableRoutingModule
  ],
  entryComponents:[NestedArrayComponent],
  exports:[TableComponent]
})
export class DynamicTableModule { }
