import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  artist: any;
  isLoading: boolean;
  topTracks: any[] = [];

  constructor(private actRouter: ActivatedRoute, private spotify: SpotifyService) {
    this.isLoading = true;

    this.actRouter.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  private getArtist(id: string) {
    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.isLoading = false;
    });
  }

  private getTopTracks(idArtist: string) {
    this.spotify.getTopTracks(idArtist)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }

}
