import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Artist {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists(): void {
    this.http.get<Artist[]>('./assets/artisti.json')
      .subscribe(data => {
        this.artists = data;
      });
  }
}
