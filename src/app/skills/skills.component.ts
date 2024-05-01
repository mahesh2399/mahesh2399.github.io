import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
  
    {
      name: 'Flutter',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
    },
  
    {
      name: 'Nodejs',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'PostgreSQL',
      level: 'Intermidiate',
      rating: 70,
    },
  
  ];
  constructor() {}

  ngOnInit(): void {}
}
