import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormControl } from '@angular/forms';
import {SearchService} from './search.service';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  isLoading: boolean;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  find(artist: string) {
    this.isLoading = true;

    if (artist === '') {
      this.isLoading = false;
      this.artists = [];

      return;
    }

    this.spotifyService.getArtists(artist).subscribe((data: any) => {
      this.artists = data;

      this.isLoading = false;
    });
  }
}
