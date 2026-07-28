import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Eduvy Technologies Pvt Ltd',
      role: 'Software Developer',
      duration: 'March 2025 – Present',
      location: 'Bangalore',
      achievements: [
        'Designed and developed RESTful APIs and full-stack features using Node.js, Express.js (TypeScript), and Angular across hostel management, inventory, timetable, staff, and EMI modules for a multi-module college ERP platform.',
        'Designed and optimized MongoDB & PostgreSQL database schemas and queries for high performance and scalability.',
        'Implemented secure JWT-based authentication and authorization, and integrated CI/CD pipelines for automated builds and deployments.',
        'Ensured cross-browser compatibility and optimized front-end performance for applications actively used across multiple production institutions.',
        'Collaborated within an Agile/Scrum environment (Jira, sprint planning, daily stand-ups) using Git for multi-developer version control.'
      ]
    },
    {
      company: 'Brototype',
      role: 'Software Developer Trainee',
      duration: 'Jan 2024 – Feb 2025',
      location: 'Kochi',
      achievements: [
        'Completed an intensive full-stack development program covering Node.js, Express.js, TypeScript, JavaScript, Angular, React.js, and MongoDB fundamentals.',
        'Built and deployed end-to-end production-style applications, strengthening core data structures, algorithms, API design, and debugging skills.'
      ]
    }
  ];
}
