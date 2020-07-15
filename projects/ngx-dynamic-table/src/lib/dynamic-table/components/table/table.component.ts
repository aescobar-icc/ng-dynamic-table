import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-dt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  fields = [
    {field:'name',title:'Nombre' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
