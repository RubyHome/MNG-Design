import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MdTabGroup } from '@angular/material/tabs';
import {USER_DATA, USER } from './json/user';

@Component({
  selector: 'my-home',
  templateUrl: './dist/view/home.component.html'
})
export class HomeComponent  {

public user_data = USER_DATA;

private tabs:any[] = [];
private selectedIndex = 0;
private gridOptions:GridOptions;
private selectedRows:any[] = [];
private selectedRowCount = 0;
private showButton:boolean = false;
private showAutoSuggest:boolean=false;
googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
from:number=1;
to:number=10;
totalPages:number=100;

    constructor() {
        this.tabs = [{
          "name"    :"tab1",
          "title"   : "Bread Wall",
          "id"      : 1,
          "selectedRowCount" : 0,
          "selectedRows" : [],
          "selecteAllRows": false,
          "gridOptions" : <GridOptions>{}
        },
        {
          "name"    :"tab2",
          "title"   : "Bread sdfsdf",
          "id"      : 2,
          "selectedRowCount" : 0,
          "selectedRows" : [],
          "gridOptions" : <GridOptions>{}
        }];
        this.tabs[0].gridOptions = {
            "columnDefs" : this.createColumnDefs(),
            "rowData" : this.createRowData(1),
            "rowHeight"  : 90
        };
       this.tabs[1].gridOptions = {
            "columnDefs" : this.createColumnDefs(),
            "rowData" : this.createRowData(1),
            "rowHeight"  : 90
        };
    }
    private createColumnDefs() {
    return [
               {headerName: "Row", field: "row", width: 135 ,checkboxSelection: true,suppressSizeToFit: true,
               headerCellTemplate: `<span class="pan_thumb">Thumb</span>`,
             cellRendererFramework: {
                    template: '<img src="dist/images/food.jpg" alt="Smiley face" height="42" width="42">'
                    }
              },
               {headerName: 'Featured', field: "value", width: 90},
               {headerName: 'Name', field: "value", width: 160},
               {headerName: 'Description', field: "value", width: 260},
               {headerName: 'Unit Cost', field: "value", width: 90},
               {headerName: 'Template Name', field: "value", width: 140},
               {headerName: 'Weight', field: "value", width: 70},
               {headerName: 'Kit Type', field: "value", width: 90},
               {headerName: 'Over Start Date', field: "value", width: 130},
               {headerName: 'Over End Date', field: "value", width: 130},
               {headerName: 'Assembly', field: "value", width: 80},

           ];
    }

    changeBtn(showButton: boolean) {
        showButton ? this.showButton=true :  this.showButton=false;
    }

    showAutoSuggestText() {
      this.showAutoSuggest=true;      
    }
selectAllRow(flag:boolean,tab:any){
  if(flag == true){
  tab.gridOptions.api.forEachNode( function (node:any) {
      node.setSelected(false);
    })
  }else{
  tab.gridOptions.api.forEachNode( function (node:any) {
      node.setSelected(true);
    })
  }
}

    private addTabs() {
      this.tabs.push({
      "name" :`Tab`,
      "title": "Bread",
      "id"   : this.tabs.length+1,
      "selectedRowCount" : 0,
      "selectedRows" : [],
      "gridOptions" : <GridOptions>{}
      });
      this.tabs[this.tabs.length-1].gridOptions =  {
                        "columnDefs" : this.createColumnDefs(),
                        "rowData" : this.createRowData(this.tabs.length+1),
                        "rowHeight"  : 90
                      }
      this.selectedIndex = this.tabs.length-1;
    }
    prevPage(event:any){

        if(this.from==1){
             event.target.parentNode.parentNode.setAttribute("class","disabled");
        }else{
            this.from = this.from-10;
            this.to = this.to-10;
        }

    }

    nextPage(event:any){

        if(this.to==this.totalPages){
            event.target.parentNode.parentNode.setAttribute("class","disabled");
        }else{
            this.from = this.from+10;
            this.to = this.to+10;
        }
    }

    private tabSwap(tabGroupIndex:number) {
        this.selectedIndex = tabGroupIndex;
        if(this.selectedIndex == this.tabs.length){
          this.addTabs();
      }
    }
    private onGridReady(tab:any) {
      console.log(tab.selectedRows);
      let selectedRowData:any[] = [];
      for(var i=0;i<tab.selectedRows.length;i++){
        selectedRowData.push(tab.selectedRows[i].row)
      }
      tab.gridOptions.api.forEachNode( function (node:any) {
          for(let i=0;i<selectedRowData.length;i++){
            if (node.data.row == selectedRowData[i]) {
              node.setSelected(true);
            }
          }
        })

    }
    private onSelectionChanged(tab:any) {
    tab.selectedRows = tab.gridOptions.api.getSelectedRows();
    tab.selectedRowCount = tab.selectedRows.length;
    }

    private createRowData(id:number) {
        let rowData:any[] = [];
        for (var i = 0; i < 15; i++) {
            rowData.push({
                row: "Row " + i ,
                value: i+id
            });
        }

        return rowData;
    }

    private actionForm() {
      console.log(this);
    }
}
