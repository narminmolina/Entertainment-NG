import { Component } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Data } from '../../Trending';
@Component({
	selector: 'app-trending',
	templateUrl: './trending.component.html',
	styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent {
	data!: Data;
	trendingShows: {}[] = [];
	public currentPage: number = 1;
	public totalPages:number= 20;

	constructor(private shows: ShowsService) {}

	ngOnInit(): void {
		this.loadTrendingShows();
	}

	loadTrendingShows() {
		this.shows.fetchTrendingShows(this.currentPage).subscribe(data => {
			this.data = data;
			this.trendingShows = data.results;
			// this.totalPages = data.total_pages;
			console.log(this);
		});
	}
	setPage(pageNumber: number) {
		this.currentPage = pageNumber;
		this.loadTrendingShows();
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
	
}
