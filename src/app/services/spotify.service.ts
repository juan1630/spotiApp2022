import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private _http:HttpClient
  ) { }

  //refactor de las peticiones
  getQuery(  query: string ){
       query.trim();

       // se modifican los headers de la peticion
    const headers =  new HttpHeaders({
      'Authorization' :"Bearer BQDnezJRrbz_7lkLsitfFkL0upRjn13RuNgb3MZAy-lGV3DeHFdhA5QRFZVoOgmY71mOlxinU8xa3boXD3g"  
    });

    // se agregan los headers para la aplicacion
    return this._http.get('https://api.spotify.com/v1/'+ query, {headers});

  }

  // se crea una sola instacia del servicio en el toda la app
  getNewRealeses() {
    return this.getQuery('browse/new-releases');
  }

  getArtista( termino: string ) {

    termino.trim();

    return this.getQuery('search?q='+ termino +'&type=artist');
  }

}
