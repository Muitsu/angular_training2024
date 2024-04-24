import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../app.component';
@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent implements OnInit{
  heroes:Hero[] =[];
    //auto-injection
    constructor(private heroService:HeroService){}
    ngOnInit(): void {
      this.heroes = this.heroService.getHeroes();
    }
}
