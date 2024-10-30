import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsgeneralPage } from './tabsgeneral.page';

const routes: Routes = [
  {
    path: '',
    component: TabsgeneralPage,
    children: [
      {
        path:'home',
        loadChildren:()=>import('./../../pages/home/home.module').then(m=>m.HomePageModule)
      },
      {
        path:'bonustab',
        loadChildren:()=>import('./../../pages/bonustab/bonustab.module').then(m=>m.BonustabPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsgeneralPageRoutingModule {}