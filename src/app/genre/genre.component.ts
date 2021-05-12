import { Component, OnInit } from '@angular/core';
import {GenreService} from '../services/genre/genre.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genreId: string;
  genre: any;
  title: string;
  songName: string;
  artistName: string;
  year: any;
  songList: any;
  constructor(private route: ActivatedRoute, private genreService: GenreService) { }
  createSong(): any {
    console.log('component: ', this.genre, this.songName);
    const newSong = {
      title: this.songName,
      artistFullName: this.artistName,
      year: this.year
    };
    this.songName = '';
    this.genreService.createSong(this.genre, newSong).subscribe(response => {
      this.genre.songList = [...this.genre.songList, response];
      console.log(this.genre.songList);
    });
  }
  deleteSong(song): any {
    const index = this.genre.songList.indexOf(song);
    console.log(index);
    this.genreService.deleteSong(this.genre, song.id).subscribe(response => {
      this.genre.songList.splice(index, 1);
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.genreId = params.get('id');
        this.genreService.getGenre(this.genreId).subscribe(response => {
          this.genre = response;
          console.log(this.genre);
        });
      });
  }
}
