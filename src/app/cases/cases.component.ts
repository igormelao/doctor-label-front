import { element } from 'protractor';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import { CasesService } from './cases.service';
import { Case, Cases } from './model/cases';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  nextCase?: Case;
  selectedLabels: any[] = [];
  index: number = 1;
  idLabel = '';
  nameLabel = '';
  public placeholder: string = 'Select one label';
  keyword = 'name';

  public labels = [
    {
      id: 'A90',
      name:'A90',
    },
    {
      id: 'GRSDMC',
      name:'GRSDMC',
    }
  ];

  constructor(private casesService: CasesService) { }

  ngOnInit(): void {
    this.casesService.getNextCase()
    .subscribe( nextCase => {
      this.nextCase = nextCase as Case;
    })
  }

  getNextCase() {
    console.log(this.selectedLabels);
  }

  addLabel(label: Object[]) {
    const labelMap = new Map(Object.entries(label));
    const labelMapObject = labelMap.get('label') as Object[];
    const labelObject = new Map(Object.entries(labelMapObject));
    const lbl = {
      idLabel: labelObject.get('id'),
      nameLabel: labelObject.get('name')
    }
    this.selectedLabels.push(lbl);
    this.casesService.saveLabel(this.nextCase?.caseId as number, lbl.idLabel as number).subscribe();
  }

  selectEvent(item: any) {
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any){
    // do something when input is focused
  }
}
