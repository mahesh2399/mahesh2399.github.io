import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
   
    {
      institute: 'Vels Institute of Science, Technology & Advanced Studies (VISTAS))',
      course: 'BCA (Cloud Technology and Information Security)',
      duration: '2020-2023',
      score: '85%',
    },
    {
      institute: 'velammal matriculation higher secondary school',
      course: 'HSC',
      duration: '2015-2016',
      score: '60%',
    },
    {
      institute: 'velammal matriculation higher secondary school',
      course: 'SSC',
      duration: '2013-2014',
      score: '71%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
