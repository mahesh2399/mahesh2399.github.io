import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Mahesh R'],
    ['DOB', '02/03/1999'],
    ['Work Exp', '1 Year'],
    ['Education', 'BCA(CTIS) (2023)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1 year of experience in software industry.',
    'I have worked on various projects and technologies , gaining valuable experience in the software industry. My goal is to continue learning and growing in this field,',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
