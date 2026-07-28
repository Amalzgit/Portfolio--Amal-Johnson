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
      company: 'Eduvy Technologies Pvt Ltd',
      role: 'Software Developer',
      duration: 'March 2025 – Present',
      location: 'Bangalore',
      achievements: [
        'Developed front-end applications using Angular and JavaScript (TypeScript) for a multi-module college ERP platform, covering hostel management, inventory, timetable, and EMI modules.',
        'Built and integrated REST APIs using Node.js/Express.js, ensuring smooth data flow between frontend and backend across production modules used by multiple institutions.',
        'Debugged and resolved application issues, monitored feature stability, and optimized performance for a growing production user base.',
        'Collaborated with cross-functional teams under Agile/Scrum (Jira, sprint planning, stand-ups), using Git for version control and communicating progress clearly across the team.'
      ]
    },
    {
      company: 'Brototype',
      role: 'Software Developer Trainee',
      duration: 'Jan 2024 – Feb 2025',
      location: 'Kochi',
      achievements: [
        'Completed an intensive full-stack development program covering JavaScript, TypeScript, Angular, and Node.js fundamentals.',
        'Built front-end and full-stack applications end-to-end, strengthening programming fundamentals and problem-solving skills through project-based coursework.'
      ]
    }
  ];
}
