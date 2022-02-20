import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artists: any[] = [];
  constructor(
    private _Spotify: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  searchAnArtist( termino: string){
    this._Spotify.getArtista( termino )
    .subscribe( (artists: any) => {

        console.log(artists.artists)
        this.artists = artists.artists.items
    })
  }
}
