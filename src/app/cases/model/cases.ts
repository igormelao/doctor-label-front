import { Labels } from "../labels/model/labels";

export interface Cases extends Array<Case> {}

export interface Case{
  caseId:number;
  electronicHealthRecord:string;
  labels:Labels[];
}
