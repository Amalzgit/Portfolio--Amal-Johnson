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
      title: 'Portfolio – Amal Johnson',
      description: 'Designed and developed a modern, responsive developer portfolio to showcase my projects, technical skills, work experience, and contact information. Built with Angular, featuring smooth animations, reusable components, responsive layouts, and GitHub integration.',
      techStack: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Bootstrap'
      ],
      githubLink: 'https://github.com/Amalzgit/Portfolio--Amal-Johnson'
    },
    {
      title: 'Samaya – E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform with secure JWT authentication, product management, shopping cart, order processing, and payment workflow. Developed RESTful APIs and integrated MongoDB for scalable data management.',
      techStack: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'JavaScript',
        'JWT',
        'REST APIs'
      ],
      githubLink: 'https://github.com/Amalzgit/Samaya'
    },
    {
      title: 'Admin Dashboard',
      description: 'Developed a MERN stack admin dashboard featuring secure authentication, user management, product management, CRUD operations, and responsive UI. Designed REST APIs and implemented role-based access control.',
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'REST APIs'
      ],
      githubLink: 'https://github.com/Amalzgit/Adminpanel'
    },
    {
      title: 'MERN User Management System',
      description: 'Created a complete user management system with authentication, authorization, profile management, and CRUD operations. Focused on scalable backend architecture and responsive frontend development.',
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'REST APIs'
      ],
      githubLink: 'https://github.com/Amalzgit/MERN--UMS'
    },
    {
      title: 'Angular API Fetcher',
      description: 'Built an Angular application demonstrating API integration, reusable services, RxJS observables, component communication, and efficient state management using TypeScript.',
      techStack: [
        'Angular',
        'TypeScript',
        'RxJS',
        'REST APIs',
        'HTML5',
        'CSS3'
      ],
      githubLink: 'https://github.com/Amalzgit/Angular-api-fetcher'
    },
    {
      title: 'Uber Clone',
      description: 'Developed a responsive ride-booking application inspired by Uber, featuring modern UI components, routing, responsive layouts, and interactive user experience.',
      techStack: [
        'React.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap'
      ],
      githubLink: 'https://github.com/Amalzgit/Uber-clone'
    }
  ];
}
