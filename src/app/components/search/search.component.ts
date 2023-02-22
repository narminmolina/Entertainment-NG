import { Component } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
	movies: {}[] = [];
searchText!:string
type:string='movie'
	public currentPage: number = 1;
	public totalPages: number = 20;

	constructor(private shows: ShowsService) {}

	ngOnInit(): void {}

  loadSearchResults(){
  this.shows.fetchSearchedShows(this.type, this.searchText, this.currentPage).subscribe(data => {
			this.movies = data.results;
      console.log(this.movies);
    })
    
}
onTabButtonClick(type:string){
  this.type=type
}

onSearchInputChange(){
      console.log('Search text changed to:', this.searchText);
this.loadSearchResults()
  }

  setPage(pageNumber: number) {
		this.currentPage = pageNumber;
		this.loadSearchResults();
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

