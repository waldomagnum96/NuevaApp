import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsgeneralPageRoutingModule } from './tabsgeneral-routing.module';

import { TabsgeneralPage } from './tabsgeneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsgeneralPageRoutingModule
  ],
  declarations: [TabsgeneralPage]
})
export class TabsgeneralPageModule {}