import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ItemGaleryComponent} from './controller/crud/item-galery/item-galery.component';
import {ItemComponent} from './controller/crud/item/item.component';
import {HomeComponent} from './controller/home/home.component';

const appRoutes: Routes = [
  { path: 'items', component: ItemGaleryComponent },
  { path: 'login', component: ItemComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent}
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
