import { Component, OnInit } from '@angular/core';
import { GenreService} from '../services/genre/genre.service';
declare const M;
@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  // public genres: [];
  public genres: any[];
  public genreName: string;
  public genreDescription: string;
  public songName: string;
  constructor(private genreService: GenreService) { }
  getGenres(): any {
    this.genreService.getGenres().subscribe(response => {
      this.genres = response;
    }, err => console.log(err));
  }
  createGenre(): any {
    const newGenre = {
      name: this.genreName,
      description: this.genreDescription
    };
    this.genreService.createGenre(newGenre).subscribe(response => {
      this.genres = [...this.genres, response];
    }, err => console.log(err));
  }
  // createSong(genre): any {
  //   console.log('component: ', genre, this.songName);
  //   const newSong = {name: this.songName};
  //   this.genreService.createSong(genre, newSong).subscribe(response => {
  //     console.log(response);
  //   });
  // }
  deleteGenre(genre): any {
    const index = this.genres.indexOf(genre);
    console.log(index);
    this.genreService.deleteGenre(genre).subscribe(response => {
      this.genres.splice(index, 1);
    });
  }
  ngOnInit(): void {
    this.getGenres();
    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your genres</span>';
      M.toast({html: toastHTML});
    }
  }
}
