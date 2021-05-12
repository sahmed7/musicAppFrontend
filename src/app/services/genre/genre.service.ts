import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const herokuUrl = 'https://damp-refuge-90630.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  constructor(private http: HttpClient) { }

  createGenre(newGenre): any {
    console.log(newGenre);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/genres/`, newGenre, requestOptions);
  }
  getGenres(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/genres`, requestOptions);
  }
}
