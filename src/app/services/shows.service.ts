import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../Trending';
import { Genre } from '../Genre';
@Injectable({
	providedIn: 'root',
})
export class ShowsService {
	constructor(private http: HttpClient) {}
    apiKey = 'a80a542b56f41ce4cf0eecf573c01985';

	fetchTrendingShows(pageNumber: number): Observable<Data> {
		const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}&page=${pageNumber}`;
		const headers=new HttpHeaders().set('authorization', 'Bearer ${apiKey}')
		const params = new HttpParams().set('page', pageNumber.toString());
		return this.http.get<Data>(url, { headers, params });
	}

  fetchMoviesTvSeries(mediaType: string, pageNumber: number, selectedGenreIds: number[] = []): Observable<Data> {
  
    let url = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`;
		if (selectedGenreIds.length > 0) {
    const genreIds = selectedGenreIds.join(',');
    url += `&with_genres=${genreIds}`;
  }
    const headers=new HttpHeaders().set('authorization', 'Bearer ${apiKey}')
		const params = new HttpParams().set('page', pageNumber.toString());
		return this.http.get<Data>(url, { headers, params });
	}

   fetchGenres(type: string): Observable<Genre> {
		const url = `https://api.themoviedb.org/3/genre/list?api_key=${this.apiKey}&language=en-US&type=${type}`;
		const headers=new HttpHeaders().set('authorization', 'Bearer ${apiKey}')
		const params = new HttpParams().set('type', type);
		return this.http.get<Genre>(url, { headers, params });
	}
}
