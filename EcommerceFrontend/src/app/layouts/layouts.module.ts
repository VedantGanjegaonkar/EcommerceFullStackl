import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    LayoutsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutsModule { }
