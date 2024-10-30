import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentevilzeroPage } from './residentevilzero.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentevilzeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentevilzeroPageRoutingModule {}
