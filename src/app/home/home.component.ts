import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  isLoading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.isLoading = true;

    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      this.isLoading = false;
    });
  }
  ngOnInit() {
  }

}
