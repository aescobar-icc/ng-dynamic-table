import { Component, OnInit, Input, ViewChild, ElementRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { TableColumn } from '../../interfaces/TableColumn';
import { TableCellRenderDirective } from '../../directives/table-cell-render.directive';
import { NestedArrayComponent } from '../../renders/nested-array/nested-array.component';
import { ComponentRender } from '../../interfaces/ComponentRender';
import { TableItemRender } from '../../interfaces/TableItemRender';
import { TableColumnRender } from '../../interfaces/TableColumnRender';

declare const $: any;

@Component({
  selector: 'ngx-dt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @ViewChild('dt_table', {static: true}) table:ElementRef;
  @ViewChild('dt_table_head', {static: true}) head:ElementRef;
  @ViewChild('dt_table_body', {static: true}) body:ElementRef;

  @ViewChild('dt_table_tr_template', {static: true}) tr:ElementRef;
  @ViewChild('dt_table_th_template', {static: true}) th:ElementRef;
  @ViewChild('dt_table_td_template', {static: true}) td:ElementRef;

  @ViewChild(TableCellRenderDirective, {static: true}) renders: TableCellRenderDirective;

  @Input() columns:TableColumn[] = null
  @Input() data:Array<any> = null

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) { 
  }

  ngOnInit() {
    
    var table = $(this.table.nativeElement)
    var head = $(this.head.nativeElement)
    var body = $(this.body.nativeElement)
    var tr = $(this.tr.nativeElement)
    var th = $(this.th.nativeElement)
    var td = $(this.td.nativeElement)

    table.resize(() => this.onTableResize)
    $(window).resize((e) => {
      this.onTableResize(e)
    })


    // CREATE HEADERS
    var tri = $(tr.html()) // copy template
    head.append(tri)
    for(var f of this.columns){
      var thi = $(th.html())// copy template
      tri.append(thi.append(f.columnTitle))
    }

    document.documentElement.style.setProperty('--dt-col-width', table.width()/this.columns.length+'px');


    //CREATE DATA
    for(var item of this.data){
      var tri = $(tr.html()) // copy template
      body.append(tri)
      for(var f of this.columns){
        var tdi = $(td.html())// copy template
        var val = $.getField(item,f.dataField)

        if(f.columnRender ){
          var itemRender:TableItemRender = {item:item, dataField:f.dataField, value:val}
          if($.isFunction(f.columnRender)){
            if(f.columnRender.toString().indexOf('class')==0){

            }else{
              val = (<CallableFunction>f.columnRender)(itemRender)
            }
          }else{
            var tableColumn:TableColumnRender = (<TableColumnRender>f.columnRender)
            val = this.createRender(itemRender,tableColumn)
            console.log(val)
            
          }
        }
        
        tri.append(tdi.append(val))
      }
    }
  }
  createRender(itemRender:TableItemRender,tableColumn:TableColumnRender){

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tableColumn.render);
    const viewContainerRef = this.renders.viewContainerRef;
    //viewContainerRef.clear();

    const componentRef:ComponentRef<any> = viewContainerRef.createComponent(componentFactory,0);
    var nativeElement = componentRef.hostView['_view']['nodes'][0]['renderElement']
    
    var render:ComponentRender = (<ComponentRender>componentRef.instance);
    itemRender.options = tableColumn.options
    render.setItemRender(itemRender)
    return nativeElement
  }

  onTableResize(e){
    //console.log('onTableResize')
    var table = $(this.table.nativeElement)
    document.documentElement.style.setProperty('--dt-col-width', table.width()/this.columns.length+'px');
  }

}
