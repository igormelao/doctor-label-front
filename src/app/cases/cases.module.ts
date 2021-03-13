import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { ListCasesComponent } from './list-cases/list-cases.component';
import { CasesComponent } from './cases.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule } from '@angular/forms';
import { LabelsModule } from './labels/labels.module';


@NgModule({
  declarations: [ListCasesComponent, CasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    LabelsModule
  ]
})
export class CasesModule { }
