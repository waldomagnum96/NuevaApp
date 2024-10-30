import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteoapiPageRoutingModule } from './testeoapi-routing.module';

import { TesteoapiPage } from './testeoapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteoapiPageRoutingModule
  ],
  declarations: [TesteoapiPage]
})
export class TesteoapiPageModule {}