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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
var material_1 = require('@angular/material');
var main_1 = require('ag-grid-ng2/main');
var ng2_modal_1 = require("ng2-modal");
var ng2_dnd_1 = require('ng2-dnd');
var md2_accordion_1 = require('md2-accordion');
var md2_menu_1 = require('md2-menu');
var ng2_auto_complete_1 = require('ng2-auto-complete');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login.component');
var mainhome_component_1 = require('./mainhome.component');
var home_component_1 = require('./home.component');
var header_component_1 = require('./header.component');
var left_nav_component_1 = require('./left-nav.component');
var accordion_demo_component_1 = require('./accordion-demo.component');
var filterletter_1 = require('./filterletter');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                main_1.AgGridModule.withNg2ComponentSupport(),
                ng2_modal_1.ModalModule,
                ng2_dnd_1.DndModule.forRoot(),
                md2_accordion_1.Md2AccordionModule,
                md2_menu_1.Md2MenuModule,
                ng2_auto_complete_1.Ng2AutoCompleteModule,
                angular2_infinite_scroll_1.InfiniteScrollModule,
                material_1.MaterialModule.forRoot(),
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/login',
                        pathMatch: 'full'
                    },
                    {
                        path: 'login',
                        component: login_component_1.LoginComponent
                    },
                    {
                        path: 'home',
                        component: mainhome_component_1.MainHomeComponent
                    },
                    {
                        path: 'accordion',
                        component: accordion_demo_component_1.AccordionDemo
                    },
                ])
            ],
            declarations: [
                filterletter_1.myfilterletter,
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                mainhome_component_1.MainHomeComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                left_nav_component_1.LeftNavComponent,
                accordion_demo_component_1.AccordionDemo
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map