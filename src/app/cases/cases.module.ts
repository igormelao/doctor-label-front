import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { ListCasesComponent } from './list-cases/list-cases.component';
import { CasesComponent } from './cases.component';


@NgModule({
  declarations: [ListCasesComponent, CasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule
  ]
})
export class CasesModule { }
