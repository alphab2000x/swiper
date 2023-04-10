import { Component } from '@angular/core';

interface Slide {
  url: string;
}

@Component({
  selector: 'app-slider-advanced',
  templateUrl: './slider-advanced.component.html',
  styleUrls: ['./slider-advanced.component.scss']
})
export class SliderAdvancedComponent {
  slides: Slide[] = [
    { url: '../assets/image-1.jpeg' },
    { url: '../assets/image-2.jpeg' },
    { url: '../assets/image-3.jpeg' },
    { url: '../assets/image-4.jpeg' },
  ];

  currentIndex = 0;
  timeoutId?: number; // Stocke l'identifiant de la fonction setTimeout

  startX: number = 0;
  currentX: number = 0;
  isDragging: boolean = false;

  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId); // Efface le timer précédent s'il existe
    }
    // Définit un nouveau timer pour appeler la méthode goToNext après 4 secondes (4000 ms)
    this.timeoutId = window.setTimeout(() => this.goToNext(), 4000);
  }

  // ngOnInit est un lifecycle hook appelé lorsque le composant est initialisé
  ngOnInit(): void {
    this.resetTimer(); // Réinitialise le timer lors de l'initialisation du composant
  }

  // ngOnDestroy est un lifecycle hook appelé lorsque le composant est détruit
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId); // Efface le timer lorsque le composant est détruit
  }

  goToPrevious(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
      this.resetTimer();
  }
  goToNext(): void {
    this.currentIndex =
      this.currentIndex === this.slides.length - 1
        ? 0
        : this.currentIndex + 1;
    this.resetTimer();
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.resetTimer();
  }

  onMouseDown(event: MouseEvent): void {
    this.startX = event.clientX;
    this.isDragging = true;
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      this.currentX = event.clientX;
      const diff = this.startX - this.currentX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.goToNext();
        } else {
          this.goToPrevious();
        }
        this.isDragging = false;
      }
    }
  }

  onMouseUp(): void {
    this.isDragging = false;
  }
}
