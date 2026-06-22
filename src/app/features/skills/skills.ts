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
    { name: 'Angular / Material', level: 95, category: 'Frontend' },
    { name: 'React.js / Redux', level: 90, category: 'Frontend' },
    { name: 'TypeScript / JS', level: 95, category: 'Frontend' },
    { name: 'HTML / CSS / Bootstrap', level: 95, category: 'Frontend' },
    { name: 'RxJS / NgRx', level: 85, category: 'Frontend' },
    { name: 'Node.js / Express.js', level: 85, category: 'Backend' },
    { name: 'MongoDB / PostgreSQL', level: 80, category: 'Backend' },
    { name: 'Java / C++', level: 75, category: 'Backend' },
    { name: 'REST APIs / JSON / AJAX', level: 90, category: 'Backend' },
    { name: 'Git / GitLab', level: 90, category: 'Tools' },
    { name: 'AWS Cloud', level: 75, category: 'Tools' },
    { name: 'OOP / Data Structures', level: 85, category: 'Tools' },
  ];
}
