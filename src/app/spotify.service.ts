import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
      // tslint:disable-next-line:max-line-length
        'Bearer BQCrWIPy0drzaWmG97tq1zJ7irqyMDSuLLDnvlI-F3AukRfdpveqUu5wuHwjUlEixZFBgI0F5yAok34Bjx4be_INoV4JE_fFbtepQKwCsPTT5YDpF2SFE4DOTtj5SP4NNcVncWTe7GdGe6gWVb7gJcwUkqPpLbqJCW4Z&refresh_token=AQAm6tEGcQwIXf8RLn2McnZBRubMdlgqZpxXlUxr8OWRCGsELibWTIMPpFfWnn3HUXYMXUF3z8I8QMJ9swHn0uYu8XkaRm7GrYnyAimDUH9gNKzFBmyCBtFhrcOD6cEZ4LM'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map(data => data.albums.items)
    );
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map(data => data.artists.items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getAlbum(id: string) {
    return this.getQuery(`albums/{id}/tracks`)
      .pipe(map(data => data.album));
  }

  getTopTracks(idArtist: string) {
    return this.getQuery(`artists/${idArtist}/top-tracks?country=us`)
      .pipe(map(data => data.tracks));

  }
}
