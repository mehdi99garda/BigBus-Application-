import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcursionsPageRoutingModule } from './excursions-routing.module';

import { ExcursionsPage } from './excursions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcursionsPageRoutingModule
  ],
  declarations: [ExcursionsPage]
})
export class ExcursionsPageModule {}
