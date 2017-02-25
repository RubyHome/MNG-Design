import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MaterialModule } from '@angular/material';
import {AgGridModule} from 'ag-grid-ng2/main';
import {ModalModule} from "ng2-modal";
import {DndModule} from 'ng2-dnd';
import {DropdownModule} from 'ng2-dropdown';
import {Md2AccordionModule} from 'md2-accordion';
import {Md2MenuModule} from 'md2-menu';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent }        from './app.component';
import { LoginComponent }      from './login.component';
import { MainHomeComponent }      from './mainhome.component';
import { HomeComponent }  from './home.component';
import { HeaderComponent }  from './header.component';
import { LeftNavComponent }  from './left-nav.component';
import { AccordionDemo }  from './accordion-demo.component';
import { myfilterletter } from './filterletter';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withNg2ComponentSupport(),
    ModalModule,
    DndModule.forRoot(),
    Md2AccordionModule,
    Md2MenuModule,
    Ng2AutoCompleteModule,
    InfiniteScrollModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: MainHomeComponent
      },
      {
        path: 'accordion',
        component: AccordionDemo
      },
    ])
  ],
  declarations: [
    myfilterletter,
    AppComponent,
    LoginComponent,
    MainHomeComponent,
    HomeComponent,
    HeaderComponent,
    LeftNavComponent,
    AccordionDemo
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
