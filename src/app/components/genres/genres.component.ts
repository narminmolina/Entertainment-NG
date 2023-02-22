import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Genre } from 'src/app/Genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
 @Input() genres: {id: number, name: string}[] = [];
  @Output() selectedGenres = new EventEmitter<number[]>();

   selectedGenreIds: number[] = [];
  toggleGenre(genreId: number, event: any) {
    if (event.target.checked) {
      this.selectedGenreIds.push(genreId);
      
    } else {
      const index = this.selectedGenreIds.indexOf(genreId);
      if (index >= 0) {
        this.selectedGenreIds.splice(index, 1);
      }
    }
   this.selectedGenres.emit(this.selectedGenreIds);
  }


}
