import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  // Accesso agli elementi del DOM
  @ViewChild('playpausebtn', { static: true }) playBtn!: ElementRef;
  @ViewChild('nextbtn', { static: true }) nextBtn!: ElementRef;
  @ViewChild('prevbtn', { static: true }) prevBtn!: ElementRef;
  @ViewChild('seekslider', { static: true }) seekSlider!: ElementRef;
  @ViewChild('currenttimetext', { static: true }) currentTimeText!: ElementRef;
  @ViewChild('durationtimetext', { static: true }) durationTimeText!: ElementRef;
  @ViewChild('playlist_status', { static: true }) playlistStatus!: ElementRef;
  @ViewChild('playlist_artist', { static: true }) playlistArtist!: ElementRef;
  @ViewChild('repeat', { static: true }) repeatBtn!: ElementRef;
  @ViewChild('random', { static: true }) randomBtn!: ElementRef;
  @ViewChild('image', { static: true }) image!: ElementRef;

  audio = new Audio();
  playlist: string[] = [
    "Cartoon - On & On",
    "Diviners-X-Riell-Slow",
    "InfiNoise-Sunlight",
    "Jone - Everything",
    "Last Heroes x TwoWorldsApart - Eclipse",
    "Lost Sky - Fearless pt.II",
    "Xaia, Rain Man, Oly - Breakdown"
  ];

  titles: string[] = [
    "Cartoon - On & On",
    "Slow",
    "Sunlight",
    "Everything",
    "Last Heroes",
    "Fearless",
    "Breakdown"
  ];

  posters: string[] = [
    "assets/imagesPlayer/1.jpg",
    "assets/imagesPlayer/2.jpg",
    "assets/imagesPlayer/3.jpg",
    "assets/imagesPlayer/4.jpg",
    "assets/imagesPlayer/5.jpg",
    "assets/imagesPlayer/6.jpg",
    "assets/imagesPlayer/7.jpg"
  ];

  artists: string[] = [
    "Daniel Levi",
    "Diviners-X-Riell",
    "Nilka",
    "Jone",
    "AERYN",
    "Chris Linton",
    "Xaia, Rain Man, Oly"
  ];

  playlistIndex = 0;
  dir = "assets/songsPlayer/";
  ext = ".mp3";
  seeking = false;
  seekTo = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.audio.src = `${this.dir}${this.playlist[0]}${this.ext}`;
    this.audio.loop = false;

    this.updatePlayerDetails();

    this.renderer.listen(this.playBtn.nativeElement, 'click', () => this.playPause());
    this.renderer.listen(this.nextBtn.nativeElement, 'click', () => this.nextSong());
    this.renderer.listen(this.prevBtn.nativeElement, 'click', () => this.prevSong());
    this.renderer.listen(this.seekSlider.nativeElement, 'mousedown', (event) => { this.seeking = true; this.seek(event); });
    this.renderer.listen(this.seekSlider.nativeElement, 'mousemove', (event) => this.seek(event));
    this.renderer.listen(this.seekSlider.nativeElement, 'mouseup', () => { this.seeking = false; });
    this.renderer.listen(this.audio, 'timeupdate', () => this.seektimeupdate());
    this.renderer.listen(this.audio, 'ended', () => this.switchTrack());
    this.renderer.listen(this.repeatBtn.nativeElement, 'click', () => this.loop());
    this.renderer.listen(this.randomBtn.nativeElement, 'click', () => this.random());
  }

  updatePlayerDetails(): void {
    this.renderer.setAttribute(this.image.nativeElement, 'src', this.posters[this.playlistIndex]);
    this.playlistStatus.nativeElement.innerHTML = this.titles[this.playlistIndex];
    this.playlistArtist.nativeElement.innerHTML = this.artists[this.playlistIndex];
    this.audio.src = `${this.dir}${this.playlist[this.playlistIndex]}${this.ext}`;
    this.audio.play();
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  random(): void {
    const randomIndex = this.getRandomNumber(0, this.playlist.length - 1);
    this.playlistIndex = randomIndex;
    this.updatePlayerDetails();
    this.renderer.addClass(this.playBtn.nativeElement, 'active');
  }

  loop(): void {
    if (this.audio.loop) {
      this.audio.loop = false;
      this.renderer.removeClass(this.repeatBtn.nativeElement, 'active');
    } else {
      this.audio.loop = true;
      this.renderer.addClass(this.repeatBtn.nativeElement, 'active');
    }
  }

  nextSong(): void {
    this.renderer.addClass(this.playBtn.nativeElement, 'active');
    this.playlistIndex = (this.playlistIndex + 1) % this.playlist.length;
    this.updatePlayerDetails();
  }

  prevSong(): void {
    this.renderer.addClass(this.playBtn.nativeElement, 'active');
    this.playlistIndex = (this.playlistIndex - 1 + this.playlist.length) % this.playlist.length;
    this.updatePlayerDetails();
  }

  playPause(): void {
    if (this.audio.paused) {
      this.audio.play();
      this.renderer.addClass(this.playBtn.nativeElement, 'active');
    } else {
      this.audio.pause();
      this.renderer.removeClass(this.playBtn.nativeElement, 'active');
    }
  }

  switchTrack(): void {
    this.playlistIndex = (this.playlistIndex + 1) % this.playlist.length;
    this.updatePlayerDetails();
  }

  seek(event: MouseEvent): void {
    if (this.audio.duration) {
      if (this.seeking) {
        const seekSlider = this.seekSlider.nativeElement as HTMLInputElement;
        const value = event.offsetX / seekSlider.clientWidth * 100;
        seekSlider.value = value.toString();
        this.seekTo = this.audio.duration * (seekSlider.valueAsNumber / 100);
        this.audio.currentTime = this.seekTo;
      }
    }
  }

  seektimeupdate(): void {
    if (this.audio.duration) {
      const nt = this.audio.currentTime * (100 / this.audio.duration);
      (this.seekSlider.nativeElement as HTMLInputElement).value = nt.toString();

      const curmins = Math.floor(this.audio.currentTime / 60);
      const cursecs = Math.floor(this.audio.currentTime - curmins * 60);
      const durmins = Math.floor(this.audio.duration / 60);
      const dursecs = Math.floor(this.audio.duration - durmins * 60);

      this.currentTimeText.nativeElement.innerHTML = `${this.formatTime(curmins)}:${this.formatTime(cursecs)}`;
      this.durationTimeText.nativeElement.innerHTML = `${this.formatTime(durmins)}:${this.formatTime(dursecs)}`;
    } else {
      this.currentTimeText.nativeElement.innerHTML = "00:00";
      this.durationTimeText.nativeElement.innerHTML = "00:00";
    }
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }
}
