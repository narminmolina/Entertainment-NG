import { Component } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
	movies: {}[] = [];
  mediaType = 'Movie';

	public currentPage: number = 1;
	public totalPages:number= 20;
public movieGenres: {id: number, name: string}[] = [];

	constructor(private shows: ShowsService) {}

	ngOnInit(): void {
this.loadMovies()
this.shows.fetchGenres('movie').subscribe(data => {
			this.movieGenres = data.genres;
		});
}

	loadMovies() {
		this.shows.fetchMoviesTvSeries('movie', this.currentPage).subscribe(data => {
			this.movies = data.results;
		});
	}


setPage(pageNumber: number) {
		this.currentPage = pageNumber;
		this.loadMovies();
	}
	public onGoTo(page: number): void {
		this.setPage(page);
	}
	public onNext(page: number): void {
		this.setPage(page + 1);
	}
	public onPrevious(page: number): void {
		this.setPage(page - 1);
	}
onMovieTvGenresSelected(selectedGenreIds: number[]) {
    this.shows.fetchMoviesTvSeries('movie', this.currentPage, selectedGenreIds).subscribe(data => {
        this.movies = data.results;
    });
}
}
