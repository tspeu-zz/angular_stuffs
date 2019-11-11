import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { SearchResult } from '../Models/SearchResult';
//import { map } from 'rxjs/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchPedidoService {

  constructor(private http: HttpClient) { }
  URL: string;

  searchPedido(query: string): Observable<any[]> {

    alert('HAS BUSCADO ESTo' + query);
    console.log('HAS BUSCADO ESTO' + query);

    //const _URL = URL; add params

    return this.http.get(this.URL).map(response => {
      return <any>response['items']
        .map(item => {
          console.log("raw item", item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
    });


  }

}
