import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  GetMovie(moviename) {
    return this.http.get(`http://www.omdbapi.com/?apikey=8266bbff&t=${moviename}`);
  }
}
