import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonustabPage } from './bonustab.page';

const routes: Routes = [
  {
    path: '',
    component: BonustabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonustabPageRoutingModule {}
