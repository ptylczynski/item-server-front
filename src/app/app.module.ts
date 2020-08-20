import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ItemComponent } from './controller/crud/item/show/item/item.component';
import { MenuComponent } from './controller/common/menu/menu.component';
import { ItemGaleryComponent } from './controller/crud/item/show/item-galery/item-galery.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './controller/home/home.component';
import { FooterComponent } from './controller/common/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ItemAddComponent } from './controller/crud/item/show/item-add/item-add.component';
import { AddItemComponent } from './controller/crud/item/add/add-item/add-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ItemModifyComponent } from './controller/crud/item/modify/item-modify/item-modify.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LocationGalleryComponent } from './controller/locations/show/location-gallery/location-gallery.component';
import { LocationAddComponent } from './controller/locations/show/location-add/location-add.component';
import { AddLocationComponent } from './controller/locations/add/add-location/add-location.component';
import { LocaitonModifyComponent } from './controller/locations/modify/locaiton-modify/locaiton-modify.component';
import {LocationComponent} from './controller/locations/show/location/location.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MenuComponent,
    ItemGaleryComponent,
    HomeComponent,
    FooterComponent,
    ItemAddComponent,
    AddItemComponent,
    ItemModifyComponent,
    LocationComponent,
    LocationGalleryComponent,
    LocationAddComponent,
    AddLocationComponent,
    LocaitonModifyComponent,
  ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
