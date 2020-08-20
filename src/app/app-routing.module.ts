import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ItemGaleryComponent} from './controller/crud/item/show/item-galery/item-galery.component';
import {ItemComponent} from './controller/crud/item/show/item/item.component';
import {HomeComponent} from './controller/home/home.component';
import {AddItemComponent} from './controller/crud/item/add/add-item/add-item.component';
import {ItemModifyComponent} from './controller/crud/item/modify/item-modify/item-modify.component';
import {LocationGalleryComponent} from './controller/locations/show/location-gallery/location-gallery.component';

const appRoutes: Routes = [
  { path: 'items', component: ItemGaleryComponent },
  { path: 'login', component: ItemComponent},
  { path: 'home', component: HomeComponent},
  { path: 'location', component: LocationGalleryComponent},
  { path: 'item-modify', component: ItemModifyComponent},
  { path: '', component: HomeComponent},
  { path: 'addItem', component: AddItemComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
