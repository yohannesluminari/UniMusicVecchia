
import { Component } from '@angular/core';
import { AudioService } from '../../service/audio.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  currentAudioIndex: number | null = null;

  audioFiles: string[] = [
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3',
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3',
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3',
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3',
    'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3', 'RELAX.mp3'
  ];

  constructor(private audioService:AudioService) {}

  toggleAudio(index: number): void {
    // Verifica se lo stesso cubo è stato premuto di nuovo senza premere altri cubi prima
    if (this.currentAudioIndex === index) {
      // Se sì, interrompi la riproduzione dell'audio corrente
      this.audioService.pause();
      this.currentAudioIndex = null; // Resetta l'indice dell'audio corrente
    } else {
      const audioSrc = `./assets/${this.audioFiles[index]}`;

      // Avvia la riproduzione dell'audio desiderato
      this.audioService.play(audioSrc);
      this.currentAudioIndex = index; // Salva l'indice dell'audio corrente
    }
  }
}
