import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const herokuUrl = 'https://damp-refuge-90630.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class GenreService {
  constructor(private http: HttpClient) { }
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
  getGenre(genreId): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/genres/${genreId}`, requestOptions);
  }
  createSong(genre, newSong): any {
    console.log('service: ', genre, newSong);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/genres/${genre.id}/songs`, newSong, requestOptions);
  }
  deleteGenre(genre): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .delete(`${herokuUrl}/api/genres/${genre.id}`, requestOptions);
  }
  deleteSong(genre, songId): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .delete(`${herokuUrl}/api/genres/${genre.id}/songs/${songId}`, requestOptions);
  }
}
