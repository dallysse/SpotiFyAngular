import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private clientId: any = 'f18eff79f81247f29dce37425d4273dd';
  private artistsUrl = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=f18eff79f81247f29dce37425d4273dd';
  constructor(private http: HttpClient) {}
  searchArtist(searchTerm: string) {
    const url = this.artistsUrl + this.searchArtist;
    return  this.http.get(url).map(res => res.json());
  }
}
