import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Database & Cloud';
  color: string;
  bgColor: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.html',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular (5+ / 15-19)', level: 95, category: 'Frontend', color: '#a3e635', bgColor: '#130c21' },
    { name: 'TypeScript / JavaScript (ES6+)', level: 95, category: 'Frontend', color: '#fbbf24', bgColor: '#130c21' },
    { name: 'React.js', level: 90, category: 'Frontend', color: '#06b6d4', bgColor: '#130c21' },
    { name: 'HTML5 / CSS3 / Tailwind / Bootstrap', level: 95, category: 'Frontend', color: '#f43f5e', bgColor: '#130c21' },
    { name: 'Node.js / Express.js', level: 92, category: 'Backend', color: '#a3e635', bgColor: '#130c21' },
    { name: 'RESTful API Design & Development', level: 95, category: 'Backend', color: '#06b6d4', bgColor: '#130c21' },
    { name: 'JWT Authentication & Authorization', level: 90, category: 'Backend', color: '#a855f7', bgColor: '#130c21' },
    { name: 'CRUD Operations & Business Logic', level: 92, category: 'Backend', color: '#fbbf24', bgColor: '#130c21' },
    { name: 'MongoDB / Mongoose Schema Optimization', level: 88, category: 'Database & Cloud', color: '#10b981', bgColor: '#130c21' },
    { name: 'PostgreSQL / SQL Databases', level: 85, category: 'Database & Cloud', color: '#3b82f6', bgColor: '#130c21' },
    { name: 'CI/CD Pipelines & DevOps', level: 82, category: 'Database & Cloud', color: '#f97316', bgColor: '#130c21' },
    { name: 'Git & GitHub / GitLab CI', level: 92, category: 'Tools', color: '#f43f5e', bgColor: '#130c21' },
    { name: 'Postman / Hoppscotch API Testing', level: 90, category: 'Tools', color: '#fbbf24', bgColor: '#130c21' },
    { name: 'Agile/Scrum & Jira Management', level: 88, category: 'Tools', color: '#06b6d4', bgColor: '#130c21' },
  ];
}

