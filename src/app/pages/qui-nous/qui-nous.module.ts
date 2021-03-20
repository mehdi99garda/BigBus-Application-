import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuiNousPageRoutingModule } from './qui-nous-routing.module';

import { QuiNousPage } from './qui-nous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuiNousPageRoutingModule
  ],
  declarations: [QuiNousPage]
})
export class QuiNousPageModule {}
