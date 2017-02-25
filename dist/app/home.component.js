"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_1 = require('./json/user');
var HomeComponent = (function () {
    function HomeComponent() {
        this.user_data = user_1.USER_DATA;
        this.tabs = [];
        this.selectedIndex = 0;
        this.selectedRows = [];
        this.selectedRowCount = 0;
        this.showButton = false;
        this.showAutoSuggest = false;
        this.googleGeoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
        this.from = 1;
        this.to = 10;
        this.totalPages = 100;
        this.tabs = [{
                "name": "tab1",
                "title": "Bread Wall",
                "id": 1,
                "selectedRowCount": 0,
                "selectedRows": [],
                "selecteAllRows": false,
                "gridOptions": {}
            },
            {
                "name": "tab2",
                "title": "Bread sdfsdf",
                "id": 2,
                "selectedRowCount": 0,
                "selectedRows": [],
                "gridOptions": {}
            }];
        this.tabs[0].gridOptions = {
            "columnDefs": this.createColumnDefs(),
            "rowData": this.createRowData(1),
            "rowHeight": 90
        };
        this.tabs[1].gridOptions = {
            "columnDefs": this.createColumnDefs(),
            "rowData": this.createRowData(1),
            "rowHeight": 90
        };
    }
    HomeComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Row", field: "row", width: 135, checkboxSelection: true, suppressSizeToFit: true,
                headerCellTemplate: "<span class=\"pan_thumb\">Thumb</span>",
                cellRendererFramework: {
                    template: '<img src="dist/images/food.jpg" alt="Smiley face" height="42" width="42">'
                }
            },
            { headerName: 'Featured', field: "value", width: 90 },
            { headerName: 'Name', field: "value", width: 160 },
            { headerName: 'Description', field: "value", width: 260 },
            { headerName: 'Unit Cost', field: "value", width: 90 },
            { headerName: 'Template Name', field: "value", width: 140 },
            { headerName: 'Weight', field: "value", width: 70 },
            { headerName: 'Kit Type', field: "value", width: 90 },
            { headerName: 'Over Start Date', field: "value", width: 130 },
            { headerName: 'Over End Date', field: "value", width: 130 },
            { headerName: 'Assembly', field: "value", width: 80 },
        ];
    };
    HomeComponent.prototype.changeBtn = function (showButton) {
        showButton ? this.showButton = true : this.showButton = false;
    };
    HomeComponent.prototype.showAutoSuggestText = function () {
        this.showAutoSuggest = true;
    };
    HomeComponent.prototype.selectAllRow = function (flag, tab) {
        if (flag == true) {
            tab.gridOptions.api.forEachNode(function (node) {
                node.setSelected(false);
            });
        }
        else {
            tab.gridOptions.api.forEachNode(function (node) {
                node.setSelected(true);
            });
        }
    };
    HomeComponent.prototype.addTabs = function () {
        this.tabs.push({
            "name": "Tab",
            "title": "Bread",
            "id": this.tabs.length + 1,
            "selectedRowCount": 0,
            "selectedRows": [],
            "gridOptions": {}
        });
        this.tabs[this.tabs.length - 1].gridOptions = {
            "columnDefs": this.createColumnDefs(),
            "rowData": this.createRowData(this.tabs.length + 1),
            "rowHeight": 90
        };
        this.selectedIndex = this.tabs.length - 1;
    };
    HomeComponent.prototype.prevPage = function (event) {
        if (this.from == 1) {
            event.target.parentNode.parentNode.setAttribute("class", "disabled");
        }
        else {
            this.from = this.from - 10;
            this.to = this.to - 10;
        }
    };
    HomeComponent.prototype.nextPage = function (event) {
        if (this.to == this.totalPages) {
            event.target.parentNode.parentNode.setAttribute("class", "disabled");
        }
        else {
            this.from = this.from + 10;
            this.to = this.to + 10;
        }
    };
    HomeComponent.prototype.tabSwap = function (tabGroupIndex) {
        this.selectedIndex = tabGroupIndex;
        if (this.selectedIndex == this.tabs.length) {
            this.addTabs();
        }
    };
    HomeComponent.prototype.onGridReady = function (tab) {
        console.log(tab.selectedRows);
        var selectedRowData = [];
        for (var i = 0; i < tab.selectedRows.length; i++) {
            selectedRowData.push(tab.selectedRows[i].row);
        }
        tab.gridOptions.api.forEachNode(function (node) {
            for (var i_1 = 0; i_1 < selectedRowData.length; i_1++) {
                if (node.data.row == selectedRowData[i_1]) {
                    node.setSelected(true);
                }
            }
        });
    };
    HomeComponent.prototype.onSelectionChanged = function (tab) {
        tab.selectedRows = tab.gridOptions.api.getSelectedRows();
        tab.selectedRowCount = tab.selectedRows.length;
    };
    HomeComponent.prototype.createRowData = function (id) {
        var rowData = [];
        for (var i = 0; i < 15; i++) {
            rowData.push({
                row: "Row " + i,
                value: i + id
            });
        }
        return rowData;
    };
    HomeComponent.prototype.actionForm = function () {
        console.log(this);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: './dist/view/home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map