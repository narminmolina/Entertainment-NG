import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trending } from '../Trending';

@Injectable({
	providedIn: 'root',
})
export class ShowsService {
	constructor(private http: HttpClient) {}

	fetchTrendingShows(pageNumber: number): Observable<Trending> {
    		const apiKey = 'a80a542b56f41ce4cf0eecf573c01985';
		const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${pageNumber}`;
		const headers=new HttpHeaders().set('authorization', 'Bearer ${apiKey}')
		const params = new HttpParams().set('page', pageNumber.toString());
		return this.http.get<Trending>(url, { headers, params });
	}
}
