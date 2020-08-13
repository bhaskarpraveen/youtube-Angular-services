import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private myService:HeroServiceService) { }
  all_heroes;
  hero;
  avengers;
  ngOnInit(): void {
    this.all_heroes = this.myService.getHeroes();
    this.avengers = this.myService.getAvengers();
  }

  addHero(){
    let id= this.myService.countOfAllHeroes()
  let temp=  {
    id:id+1,
    name:this.hero
    }
    this.myService.addHero(temp);
  }


  addAvenger(hero){
    this.myService.addHeroToAvengers(hero);
  }
}
