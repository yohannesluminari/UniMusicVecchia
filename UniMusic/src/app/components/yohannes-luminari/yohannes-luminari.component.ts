import { Component } from '@angular/core';

@Component({
  selector: 'app-yohannes-luminari',
  templateUrl: './yohannes-luminari.component.html',
  styleUrl: './yohannes-luminari.component.scss'
})
export class YohannesLuminariComponent {
  roles: string[] = ['Full Stack Developer', 'Front-end Developer', 'Back-end Developer'];
  currentRole: string = this.roles[0];
  currentIndex: number = 0;

  animatedArtists: number = 0;
  animatedTracks: number = 0;

  private maxArtists: number = 188;
  private maxTracks: number = 600;

  constructor() { }

  ngOnInit(): void {
    this.startRoleRotation();
    this.animateNumbers();
  }

  startRoleRotation() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.currentIndex];
    }, 3000); // Cambia ogni 3 secondi
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.style.display = 'block'; // Mostra la sezione di contatto
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  animateNumbers() {
    const duration = 2000; // Durata dell'animazione in millisecondi
    const steps = 60; // Numero di passaggi nell'animazione
    const artistIncrement = this.maxArtists / steps;
    const trackIncrement = this.maxTracks / steps;

    let currentArtist = 0;
    let currentTrack = 0;
    let stepCount = 0;

    const interval = setInterval(() => {
      if (stepCount >= steps) {
        clearInterval(interval);
        this.animatedArtists = this.maxArtists;
        this.animatedTracks = this.maxTracks;
      } else {
        currentArtist += artistIncrement;
        currentTrack += trackIncrement;
        this.animatedArtists = Math.floor(currentArtist);
        this.animatedTracks = Math.floor(currentTrack);
        stepCount++;
      }
    }, duration / steps);
  }
}
