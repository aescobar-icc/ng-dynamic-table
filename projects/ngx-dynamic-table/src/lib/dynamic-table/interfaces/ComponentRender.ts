import { TableItemRender } from './TableItemRender';

export interface ComponentRender{
    //itemRender:TableItemRender          //setting by table
    //optionsRender:{[key:string]:any}    //setting by TableColumn
    setItemRender(itemRender:TableItemRender)
}