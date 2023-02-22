import { Component } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.scss']
})
export class TvseriesComponent {
data!: Data;
	tvSeries: {}[] = [];
    mediaType = 'TV Series';

	public currentPage: number = 1;
	public totalPages:number= 20;

public tvGenres: {id: number, name: string}[] = [];

	constructor(private shows: ShowsService) {}

	ngOnInit(): void {
this.loadTvSeries()
this.shows.fetchGenres('tv').subscribe(data => {
			this.tvGenres = data.genres;
			console.log(this.tvGenres);
		});
}

	loadTvSeries() {
		this.shows.fetchMoviesTvSeries('tv', this.currentPage).subscribe(data => {
			this.data = data;
			this.tvSeries = data.results;
			console.log(data);
		});
	}


setPage(pageNumber: number) {
		this.currentPage = pageNumber;
		this.loadTvSeries();
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
        this.data = data;
        this.tvSeries = data.results;
        console.log(data);
    });
}

}
