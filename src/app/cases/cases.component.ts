import { Component, OnInit } from '@angular/core';

import { CasesService } from './cases.service';
import { Cases } from './model/cases';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: Cases = [];
  index: number = 1;

  constructor(private casesService: CasesService) { }

  ngOnInit(): void {
    this.casesService.getCases()
    .subscribe( cases => {
      console.log(cases);
      this.cases = cases as Cases;
      console.log(this.cases);
    })
  }

  next() {
    if (this.cases.length >= this.index) {
        this.index++;
    }
  }
}
