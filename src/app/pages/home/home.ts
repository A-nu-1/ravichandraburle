import {
  Component,
  HostListener,
} from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { Profile } from '../../components/profile/profile';
import { Expertise } from '../../components/expertise/expertise';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Profile,
    Expertise,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  showBackToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 500;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}