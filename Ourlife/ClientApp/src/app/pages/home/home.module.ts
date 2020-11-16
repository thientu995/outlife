import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { LazyImageModule } from 'ng-lazy-image';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    LazyLoadImageModule,
    // LazyImageModule
  ],
})
export class HomeModule { }