import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { Hero, HeroDetail } from '../../models/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes: HeroDetail[] = [];
  page = 1;
  size = 10;
  total = 0;
  loading = false;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.fetchHeroes();
  }

  fetchHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes(this.page, this.size).subscribe((data) => {
      this.heroes = data.items;
      this.total = data.length;
      this.loading = false;
      console.log('Heroes fetched:', this.heroes);
    });
  }
  getGeneroIcon(genero: string): string {
    const gen = genero?.toLowerCase();
    if (gen.includes('female')) return '♀';
    if (gen.includes('male')) return '♂';
    return 'N/A';
  }

  getGeneroClass(genero: string): string {
    const gen = genero?.toLowerCase();
    if (gen.includes('female')) return 'female';
    if (gen.includes('male')) return 'male';
    return 'none';
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex + 1;
    this.size = event.pageSize;
    this.fetchHeroes();
  }

  openDetail(id: number): void {
    this.router.navigate(['/heroes/detail', id]);
  }
}
