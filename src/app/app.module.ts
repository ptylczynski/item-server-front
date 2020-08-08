import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ItemComponent } from './controller/crud/item/show/item/item.component';
import { MenuComponent } from './controller/menu/menu.component';
import { ItemGaleryComponent } from './controller/crud/item/show/item-galery/item-galery.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './controller/home/home.component';
import { FooterComponent } from './controller/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ItemAddComponent } from './controller/crud/item/show/item-add/item-add.component';
import { AddItemComponent } from './controller/crud/item/add/add-item/add-item.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MenuComponent,
    ItemGaleryComponent,
    HomeComponent,
    FooterComponent,
    ItemAddComponent,
    AddItemComponent
  ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        AppRoutingModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
