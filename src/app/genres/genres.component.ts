import { GenreService } from 'src/app/services/genre/genre.service';
import { Component, OnInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  public genres: any[];
  public genreName: string;
  public genreDescription: string;
  constructor(private genreService: GenreService) { }

  createGenre(): any {
    const newGenre = {
      name: this.genreName,
      description: this.genreDescription
    };
    this.genreService.createGenre(newGenre).subscribe(response => {
      this.genres = [...this.genres, response];
      console.log(response);
    }, err => console.log(err));
  }
  getGenres(): any {
    this.genreService.getGenres().subscribe(response => {
      this.genres = response;
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getGenres();

    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your genres</span>';
      M.toast({html: toastHTML});
    }
  }

}
