import { Component, OnInit } from '@angular/core';

import { LabelsService } from './labels.service';
import { Labels } from './model/labels';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {
  labels?:Labels;

  constructor(private labelsService: LabelsService) { }

  ngOnInit(): void {
    this.labelsService.labels()
    .subscribe( labels => {
      this.labels = labels as Labels;
    },
    (error) => {
      this.labels = [];
      if(error.status != 404)
        alert('Some error happens. Please try again or contact Suport Team. Error status ' + error.status);
    }
    )
  }

}
