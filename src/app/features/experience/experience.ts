import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

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
  imports: [NgFor, NgIconComponent],
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Eduvy Technology Pvt Ltd',
      role: 'Software Developer (Frontend Focus)',
      duration: 'Mar. 2025 – Present',
      location: 'Bangalore',
      achievements: [
        'Led front-end development and architecture strategies for modern, large-scale web panels (College Panel and Super Admin Panel).',
        'Spearheaded a critical platform migration, building a high-performance alternative to the existing mobile app using Angular.',
        'Architected and delivered production-ready modules, including a complex, multi-step dynamic Admission Form.',
        'Designed and implemented a modular library of reusable UI components and shared data services.',
        'Enforced application level safety by introducing enterprise JWT authentications and custom client-side Angular HTTP Interceptors.'
      ]
    }
  ];
}
