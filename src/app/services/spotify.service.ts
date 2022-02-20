import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private _http:HttpClient
  ) { }

  // se crea una sola instacia del servicio en el toda la app

  getNewRealeses() {
    // se modifican los headers de la peticion
    const headers =  new HttpHeaders({
      'Authorization' :"Bearer BQDIUQddSYfuaOY_JmUMy9kOBfbStEjaac8aX0V05l6YVTftY6GxRjoQiWqW_xGTu6TTbHG91Xx3XtipyO8"  
    });

    // se agregan los headers para la aplicacion
    return this._http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista( termino: string ) {

    termino.trim();

    const headers =  new HttpHeaders({
      'Authorization' :"Bearer BQDIUQddSYfuaOY_JmUMy9kOBfbStEjaac8aX0V05l6YVTftY6GxRjoQiWqW_xGTu6TTbHG91Xx3XtipyO8"  
    });

    return this._http.get('https://api.spotify.com/v1/search?q='+ termino +'&type=artist', { headers});
  }

}
