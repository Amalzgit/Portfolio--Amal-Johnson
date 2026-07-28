import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIconComponent],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Eduvy – College Panel',
      description: 'Built a responsive Angular front-end application for a college management system covering student management, hostel management, timetable scheduling, inventory tracking, staff management, and EMI management. Integrated REST APIs and contributed to testing, debugging, and performance improvements.',
      techStack: ['Angular', 'TypeScript', 'REST APIs']
    },
    {
      title: 'Eduvy – Super Admin Panel',
      description: 'Built a responsive Angular front-end for a centralized administration platform managing multiple colleges – institution oversight, user/role management, and system configuration. Integrated REST APIs and contributed to performance optimization.',
      techStack: ['Angular', 'TypeScript', 'REST APIs']
    },
    {
      title: 'Eduvy – Web App',
      description: 'Built a responsive Angular/TypeScript web application replicating the functionality and UI of an existing Flutter mobile app. Integrated REST APIs, managed application state, and ensured a consistent experience across desktop and mobile browsers.',
      techStack: ['Angular', 'TypeScript', 'REST APIs']
    },
    {
      title: 'Samaya – E-Commerce Platform',
      description: 'Built a full-stack e-commerce application supporting product browsing, cart management, and order/checkout flows. Implemented user authentication, REST APIs, and database integration.',
      techStack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/Amalzgit/Samaya'
    },
    {
      title: 'Admin Dashboard',
      description: 'Built a MERN stack admin panel for managing users, products, and application data through a centralized dashboard. Implemented secure authentication, CRUD operations, and REST API integration.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/Amalzgit/Adminpanel'
    }
  ];
}
