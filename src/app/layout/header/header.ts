import { Component, signal, HostListener } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  templateUrl: './header.html',
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }
}
