import { TableItemRender } from './TableItemRender';
import { ComponentRender } from './ComponentRender';

export interface TableColumnRender {
    render?:any // | {(e:TableEvent):any}
    options?:{[key:string]:any}
}
