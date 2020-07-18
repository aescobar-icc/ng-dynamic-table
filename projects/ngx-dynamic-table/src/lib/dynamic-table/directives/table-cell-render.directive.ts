import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxDtTableCellRender]'
})
export class TableCellRenderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
