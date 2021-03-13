import { User } from './../authentication/user/user';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import { CasesService } from './cases.service';
import { Case, Cases } from './model/cases';
import { UserService } from '../authentication/user/user.service';
import { LabelsService } from './labels/labels.service';
import { Label, Labels } from './labels/model/labels';

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
  keyword = 'description';
  user$ = this.userService.returnUser();
  idUser?: number;
  labels: Labels = [];

  constructor(private casesService: CasesService,
    private userService: UserService,
    private labelsService: LabelsService) { }

  ngOnInit(): void {
    this.casesService.getNextCase()
    .subscribe( nextCase => {
      this.nextCase = nextCase as Case;
      this.selectedLabels = this.nextCase.labels;
    });

    this.labelsService.labels().subscribe(labels => {
      this.labels = labels as Labels;
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
      id: labelObject.get('id'),
      description: labelObject.get('description')
    }
    this.selectedLabels.push(lbl as Label);
    this.user$.subscribe(val => this.idUser = val.id!);
    this.casesService.saveLabel(this.nextCase?.caseId as number,
      lbl.id as number,
      this.idUser as number).subscribe();
  }

  selectEvent(item: any) {
  }
}
