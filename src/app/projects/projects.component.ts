import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'E-commerce Website',
      technologies: 'Angular 17, RxJS',
      description: [
        'Developed an E-commerce website with a modern and responsive design.',
        'Implemented frontend functionalities using Angular 17 and utilized RxJS for state management.',
        'Designed user-friendly interfaces to facilitate seamless shopping experiences.',
        'Implemented various features including product browsing, cart management, and user authentication.',
        'Connected with APIs to fetch and manage data from the server.',
        'Implemented API functionalities for tasks like product listing, user authentication, and order management.',
        'Added shopping cart functionality for users to add and manage items before checkout.',
        'Integrated Stripe payment gateway for secure and convenient online payments.',
        'Developed admin functionalities including user management, product management, and order processing.',
        'Integrated necessary APIs for admin tasks such as user creation and data management.',
      ],
    },
    
    
    {
      title: 'QuickServe - Food Instant Delivery Mobile Application',
      technologies: 'Flutter, Node.js, PostgreSQL',
      description: [
        'Worked on the development of "QuickServe" - a food instant delivery mobile application.',
        'Focused mainly on frontend development with Flutter, implementing user interfaces and functionalities to enhance user experience.',
        'Contributed to backend tasks, including API implementations using Node.js.',
        'Utilized PostgreSQL for database management to ensure efficient data storage and retrieval.',
      ],
    },
    
    
    {
      title: 'Matrimony Website',
      technologies: 'Angular 14, Node.js, PostgreSQL',
      description: [
        'Worked on the development of a Matrimony website, involving both frontend and backend tasks.',
        'Learned multiple technologies to build the product.',
      ],
    }
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
