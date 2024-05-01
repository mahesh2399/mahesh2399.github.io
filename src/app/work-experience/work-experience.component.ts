import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'FirstC Global Software Systems Private LTD',
      duration: 'May 2024 - Now',
      description: [
        'Work on mobile projects with Flutter, focusing on restaurant-based themes.',
        'Experience with Angular, Node.js, and Flutter for development.',
        'Currently developing e-commerce solutions with Angular state management.'
      ],
    },
    {
      role: 'Intern',
      company: 'FirstC Global Software Systems Private LTD',
      duration: 'Nov 2022 - April 2023',
      description: [
        'Internship focused on cloud computing, particularly AWS EC2.',
        'Practical experience in setting up, configuring, and managing virtual servers.',
        'Learned about cloud deployment and scaling using AWS services like Auto Scaling.',
        'Enhanced skills in cloud-based infrastructure management.'
      ],
    }
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
