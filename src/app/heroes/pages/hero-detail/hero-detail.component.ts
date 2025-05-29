import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { HeroDetail } from '../../models/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: HeroDetail;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.fetchHero(id);
  }

  fetchHero(id: number): void {
    this.loading = true;
    this.heroService.getHeroById(id).subscribe((data) => {
      this.hero = data;
      this.loading = false;
    });
  }

  parseStat(value: any): number {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
  }

  display(value: any): string {
    return value && value !== '-' ? value : 'No disponible';
  }
  
  goBack() {
    window.history.back();
  }
}
