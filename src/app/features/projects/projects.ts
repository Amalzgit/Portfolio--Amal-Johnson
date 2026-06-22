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
      title: 'Eduvy ERP System',
      description: 'Robust frontend systems optimized for institutional data management ecosystems, building responsive dashboards with granular role-based authentication rules.',
      techStack: ['Angular', 'RxJS', 'SCSS'],
      liveLink: 'https://institution-erp.eduvy.in'
    },
    {
      title: 'Samaya E-commerce Platform',
      description: 'Full-stack digital storefront emphasizing highly intuitive UI flows, custom checkout sequences, and stable server routing via Nginx reverse-proxies.',
      techStack: ['Angular', 'Node.js', 'MongoDB', 'Nginx'],
      githubLink: 'https://github.com/amaljohnson/Samaya'
    },
    {
      title: 'Enterprise Admin Dashboard',
      description: 'Internal user management interface integrating clean UI elements for massive data visualization matrices and real-time web reporting graphs.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/amaljohnson/MERN-UMS'
    },
    {
      title: 'Student Onboarding Portal',
      description: 'Multi-step dynamic admission workflow tracking engine built specifically for fast performance and reliability on web and mobile devices.',
      techStack: ['Angular', 'RxJS', 'Tailwind'],
    }
  ];
}
