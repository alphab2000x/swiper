import { Component } from '@angular/core';

interface Slide {
  url: string;
}

@Component({
  selector: 'app-slider-basic',
  templateUrl: './slider-basic.component.html',
  styleUrls: ['./slider-basic.component.scss']
})
export class SliderBasicComponent {
  slides: Slide[] = [
    { url: '../assets/image-1.jpeg' },
    { url: '../assets/image-2.jpeg' },
    { url: '../assets/image-3.jpeg' },
    { url: '../assets/image-4.jpeg' },
  ];

  currentIndex = 0;

  goToPrevious(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }
  goToNext(): void {
    this.currentIndex =
      this.currentIndex === this.slides.length - 1
        ? 0
        : this.currentIndex + 1;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
