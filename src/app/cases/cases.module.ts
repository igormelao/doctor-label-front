import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { ListCasesComponent } from './list-cases/list-cases.component';


@NgModule({
  declarations: [ListCasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule
  ]
})
export class CasesModule { }
