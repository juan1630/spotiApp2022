import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newSongs:any[] = [];

  constructor(
    private _SpotifyService: SpotifyService
  ) {

    //this._http.get(  )

   }

  ngOnInit(): void {
    this._SpotifyService.getNewRealeses()
    .subscribe( (albums:any) => {
      console.log(albums)
        this.newSongs = albums.albums.items
        console.log(this.newSongs)
    });

  }

}
