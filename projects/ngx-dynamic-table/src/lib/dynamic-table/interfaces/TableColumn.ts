import { TableItemRender } from './TableItemRender';
import { ComponentRender } from './ComponentRender';
import { TableColumnRender } from './TableColumnRender';

export interface TableColumn {
    dataField:string,
    columnTitle:string,
    headRender?:TableColumnRender  | {(e:TableItemRender):any}
    columnRender?:TableColumnRender | {(e:TableItemRender):any}
    //optionsRender?:{[key:string]:any}
}
