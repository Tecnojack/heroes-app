import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero, HeroDetail } from '../models/hero.model';
import { environment } from 'src/environments/enviroments';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHeroes(page: number, size: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/heroes?page=${page}&size=${size}`);
  }

  getHeroById(id: number): Observable<HeroDetail> {
    return this.http.get<HeroDetail>(`${this.baseUrl}/hero?id=${id}`);
  }
}
