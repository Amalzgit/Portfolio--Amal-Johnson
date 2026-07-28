import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Tools';
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.html',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular (5+)', level: 95, category: 'Frontend' },
    { name: 'TypeScript / JavaScript', level: 95, category: 'Frontend' },
    { name: 'HTML5 / CSS3 / Bootstrap', level: 90, category: 'Frontend' },
    { name: 'Responsive Web Design', level: 90, category: 'Frontend' },
    { name: 'Node.js / Express.js', level: 85, category: 'Backend' },
    { name: 'REST API Integration', level: 90, category: 'Backend' },
    { name: 'JWT Authentication', level: 85, category: 'Backend' },
    { name: 'CRUD Operations', level: 85, category: 'Backend' },
    { name: 'Git & GitHub / GitLab', level: 90, category: 'Tools' },
    { name: 'Postman / Hoppscotch', level: 90, category: 'Tools' },
    { name: 'Agile/Scrum', level: 85, category: 'Tools' },
    { name: 'Jira', level: 85, category: 'Tools' },
  ];
}
