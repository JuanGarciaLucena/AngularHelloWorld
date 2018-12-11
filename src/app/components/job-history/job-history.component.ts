import { Component, OnInit } from '@angular/core';
import { Experience } from './../../model/experience';

export const EXPERIENCES: Experience[] = [
  { id: 1, companyName: "SDOS", startDate: "01/07/2017", endDate: "current", positionName: "Android Developer", description: "Desarrollo de DIA BR"},
  { id: 2, companyName: "ExperienceIT", startDate: "01/02/2017", endDate: "30/06/2017", positionName: "Android Developer", description: "Desarrollo app para el control de crecimiento de árboles en Colombia"},
  { id: 3, companyName: "1eEurope", startDate: "01/09/2015", endDate: "31/08/2016", positionName: "Android Developer", description: "Appyshopper"},
  { id: 4, companyName: "ElitechLab", startDate: "01/02/2014", endDate: "30/03/2015", positionName: "Android Developer", description: "TouristTab"},
  { id: 5, companyName: "Cobre Las Cruces", startDate: "01/07/2013", endDate: "31/12/2013", positionName: "SCADA Developer", description: "Mantenimiento sistema SCADA de la mina"},
  { id: 6, companyName: "Viafirma", startDate: "01/01/2012", endDate: "01/01/2013", positionName: "Android Developer", description: "Contrato en prácticas"}
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
