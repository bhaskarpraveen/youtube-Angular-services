import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  heroes=[];
  allHeroes=[];
  avengers=[];
  constructor() { 
  }
  
  countOfAllHeroes(){
    return this.allHeroes.length
  }
  getHeroes(){
    return this.heroes;
  }

  addHero(hero){
    this.heroes.push(hero);
    this.allHeroes.push(hero);
  }
  addHeroToAvengers(hero){
    this.avengers.push(hero)
    let index = this.heroes.indexOf(hero)
    this.heroes.splice(index,1)
  }

  getAvengers(){
    return this.avengers;
  }
}
