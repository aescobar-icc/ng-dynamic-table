import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ComponentRender } from '../../interfaces/ComponentRender';
import { TableItemRender } from '../../interfaces/TableItemRender';

@Component({
  selector: 'ngx-dt-nested-array',
  templateUrl: './nested-array.component.html',
  styleUrls: ['./nested-array.component.css']
})
export class NestedArrayComponent implements OnInit, ComponentRender{
  private _data:Array<any>;
  private _headers:Array<String>;
  private _columns:Array<any>;
  @Input() set data(val){
    console.log(val)
    this._data= val
  };
  get data(){
    return this._data
  }
  @Input() set columns(val){
    console.log(val)
    this._columns= val
  };
  get columns(){
    return this._columns
  }
  @Input() set headers(val){
    console.log(val)
    this._headers= val
  };
  get headers(){
    return this._headers
  }


  constructor(){
  }
  ngOnInit() {
  }
  setItemRender(item:TableItemRender){
    this.data = item.value
    this.columns = item.options['columns']
    
    if(item.options['headers']){
      this.headers = item.options['headers']
    }
  }

}
