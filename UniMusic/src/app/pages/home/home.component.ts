import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corretto 'styleUrl' in 'styleUrls'
})
export class HomeComponent {
  // Array of audio file paths (relative to the `assets` directory)
  audioFiles: string[] = [
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3',
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3',
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3',
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3',
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3'
  ];

  // Current playing audio
  currentAudio: HTMLAudioElement | null = null;

  // Index of the currently playing audio
  currentAudioIndex: number | null = null;

  // Function to toggle audio play and pause
  toggleAudio(index: number): void {
    const audioSrc = this.getAudioSrc(index);

    // Log the audio source to verify the path
    console.log('Playing audio from source:', audioSrc);

    // If the same audio is clicked again, pause it
    if (this.currentAudio && this.currentAudioIndex === index) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0; // Reset the time
      this.currentAudio = null;
      this.currentAudioIndex = null;
    } else {
      // If there's an audio currently playing, pause it
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0; // Reset the time
      }

      // Play the new audio
      this.currentAudio = new Audio(audioSrc);
      this.currentAudio.load();
      this.currentAudio.play();
      this.currentAudioIndex = index;
    }
  }

  // Helper function to get the full audio source path
  getAudioSrc(index: number): string {
    return `./assets/${this.audioFiles[index]}`;
  }
}
