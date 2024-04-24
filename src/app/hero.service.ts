import { Injectable } from '@angular/core';
import { Hero } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Hero[]{
    return [
      {id:1,name: 'Superman',team:'avenger'},
      {id:2,name: 'Batman',team:'avenger'},
      {id:3,name: 'Thanos',team:'villain'},
    ]
  }
}
