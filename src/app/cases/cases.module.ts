import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { ListCasesComponent } from './list-cases/list-cases.component';
import { CasesComponent } from './cases.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListCasesComponent, CasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule,
    AutocompleteLibModule,
    FormsModule,
  ]
})
export class CasesModule { }
