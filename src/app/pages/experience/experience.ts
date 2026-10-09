import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const timelineItems =
      this.elementRef.nativeElement.querySelectorAll<HTMLElement>(
        '.timeline-item',
      );

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            // Animate each item only once.
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      },
    );

    timelineItems.forEach((item) => {
      this.observer?.observe(item);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}