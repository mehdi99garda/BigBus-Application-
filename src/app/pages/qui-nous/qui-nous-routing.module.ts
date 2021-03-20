import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuiNousPage } from './qui-nous.page';

const routes: Routes = [
  {
    path: '',
    component: QuiNousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuiNousPageRoutingModule {}
