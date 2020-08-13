import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

  constructor(private myService:HeroServiceService) { }
  avengers;
  ngOnInit(): void {
    this.avengers = this.myService.getAvengers();
  }

}
