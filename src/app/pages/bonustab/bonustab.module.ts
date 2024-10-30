import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonustabPageRoutingModule } from './bonustab-routing.module';

import { BonustabPage } from './bonustab.page';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonustabPageRoutingModule,
    MatCardModule
  ],
  declarations: [BonustabPage]
})
export class BonustabPageModule {}

