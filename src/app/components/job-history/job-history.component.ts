import { Component, OnInit } from '@angular/core';
import { Experience } from './../../model/experience';

export const EXPERIENCES: Experience[] = [
  { id: 1, companyName: "SDOS", startDate: "01/07/2017", endDate: "current", positionName: "Android Developer", description: "Soy un patan medio"},
  { id: 2, companyName: "ExperienceIT", startDate: "01/07/2017", endDate: "current", positionName: "Android Developer", description: "Soy un patan medio"},
  { id: 3, companyName: "1eEurope", startDate: "01/07/2017", endDate: "current", positionName: "Android Developer", description: "Soy un patan medio"},
  { id: 4, companyName: "ElitechLab", startDate: "01/07/2017", endDate: "current", positionName: "Android Developer", description: "Soy un patan medio"},
];

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent implements OnInit {

  experiences = EXPERIENCES;

  constructor() { }

  ngOnInit() {
  }

}
