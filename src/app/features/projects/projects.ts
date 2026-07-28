import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
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
  imports: [NgFor, NgClass, NgIconComponent],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Eduvy – College Panel',
      description: 'Built a full-stack college management system (Angular / Node.js / Express.js / MongoDB) covering student management, hostel management, timetable scheduling, inventory tracking, staff management, and EMI management. Designed RESTful APIs and built clean, reusable component code.',
      techStack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'REST APIs']
    },
    {
      title: 'Eduvy – Super Admin Panel',
      description: 'Built a centralized administration platform managing multiple colleges – institution oversight, user/role management, and system configuration. Designed backend API services, MongoDB schemas, reusable Angular UI components, and performance optimizations.',
      techStack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'REST APIs']
    },
    {
      title: 'Eduvy – Web App',
      description: 'Built a responsive Angular/TypeScript web application replicating the functionality and UI of an existing Flutter mobile app. Integrated REST APIs, managed application state, and ensured consistent experience across desktop and mobile browsers.',
      techStack: ['Angular', 'TypeScript', 'REST APIs', 'RxJS', 'HTML5/CSS3']
    },
    {
      title: 'Samaya – E-Commerce Platform',
      description: 'Built a full-stack e-commerce application supporting product browsing, cart management, and order/checkout flows. Implemented JWT authentication, product/order management RESTful APIs, and MongoDB integration.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'JWT Auth', 'HTML5/CSS3'],
      githubLink: 'https://github.com/Amalzgit/Samaya'
    },
    {
      title: 'Admin Dashboard',
      description: 'Built a MERN stack admin panel for managing users, products, and application data through a centralized dashboard. Implemented secure JWT authentication, CRUD operations, REST API integration, and cross-browser responsive UI.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
      githubLink: 'https://github.com/Amalzgit/Adminpanel'
    }
  ];
}
