import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { SharedModule } from '../shared/shared.module';
import { SpinnerComponent } from "../shared/components/spinner/spinner.component";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    SpinnerComponent,
    FormsModule
]
})
export class HeroesModule { }
