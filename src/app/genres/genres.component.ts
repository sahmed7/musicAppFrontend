import { GenreService } from 'src/app/services/genre/genre.service';
import { Component, OnInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-categories',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  public categories: any[];
  public categoryName: string;
  public categoryDescription: string;
  constructor(private categoryService: GenreService) { }

  createCategory(): any {
    const newCategory = {
      name: this.categoryName,
      description: this.categoryDescription
    };
    this.categoryService.createCategory(newCategory).subscribe(response => {
      this.categories = [...this.categories, response];
      console.log(response);
    }, err => console.log(err));
  }
  getCategories(): any {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getCategories();

    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your categories</span>';
      M.toast({html: toastHTML});
    }
  }

}
