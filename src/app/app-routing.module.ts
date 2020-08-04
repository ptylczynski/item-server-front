import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ItemGaleryComponent} from './crud/item-galery/item-galery.component';
import {ItemComponent} from './crud/item/item.component';
import {HomeComponent} from './home/home.component';

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
