import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ItemComponent } from './controller/crud/item/item.component';
import { MenuComponent } from './controller/menu/menu.component';
import { ItemGaleryComponent } from './controller/crud/item-galery/item-galery.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './controller/home/home.component';
import { FooterComponent } from './controller/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MenuComponent,
    ItemGaleryComponent,
    HomeComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        AppRoutingModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
