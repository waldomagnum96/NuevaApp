import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentevilzeroPageRoutingModule } from './residentevilzero-routing.module';

import { ResidentevilzeroPage } from './residentevilzero.page';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentevilzeroPageRoutingModule,
    MatButtonModule
  ],
  declarations: [ResidentevilzeroPage]
})
export class ResidentevilzeroPageModule {}
