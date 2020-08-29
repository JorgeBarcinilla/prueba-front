import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrarRoutingModule } from './administrar-routing.module';
import { AdministrarComponent } from './administrar.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [AdministrarComponent, ModalComponent],
  imports: [
    CommonModule,
    AdministrarRoutingModule
  ]
})
export class AdministrarModule { }
