import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Media, PaginatedResponse } from '../interface/media';
import { Observable } from 'rxjs';
import { Tv } from '../interface/tv';
import { People } from '../interface/people';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  _httpClient = inject(HttpClient);
  private readonly apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTZjYTY3ZDQ0ODU1NjBiMGYyNzgzYTMxOWM0NWQ5YiIsIm5iZiI6MTc0NTYxOTg1OS4zOTgwMDAyLCJzdWIiOiI2ODBjMGI5M2U1YzEwNWM4YTU2ZTE3NTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lpLE2nhriZD6YPOFM_gB5sTO9mqZb6MzknxjBAG09xc';
  private readonly baseUrl = 'https://api.themoviedb.org/3';

  getHeaders() {
    return {
      accept: 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };
  }

  getTrending(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this._httpClient.get<PaginatedResponse<Media>>(
      `${this.baseUrl}/trending/all/${timeWindow}`,
      { headers: this.getHeaders() }
    );
  }

  getMovies(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this._httpClient.get<PaginatedResponse<Movie>>(
      `${this.baseUrl}/trending/movie/${timeWindow}`,
      { headers: this.getHeaders() }
    );
  }

  getPeople(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this._httpClient.get<PaginatedResponse<People>>(
      `${this.baseUrl}/trending/person/${timeWindow}`,
      { headers: this.getHeaders() }
    );
  }

  getTV(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this._httpClient.get<PaginatedResponse<Tv>>(
      `${this.baseUrl}/trending/tv/${timeWindow}`,
      { headers: this.getHeaders() }
    );
  }

  getDetails(type: string, id: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/${type}/${id}`,
      { headers: this.getHeaders() }
    );
  }
}
