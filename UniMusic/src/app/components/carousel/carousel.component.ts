import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    { src: '/assets/artistiImg/1.jpg', alt: 'Artista 1' },
    { src: '/assets/artistiImg/2.jpg', alt: 'Artista 2' },
    { src: '/assets/artistiImg/3.jpg', alt: 'Artista 3' },
    // Add more images as needed
  ];
}
