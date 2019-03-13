import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kosher';
  rests: Restaurant[];
  constructor() {
    this.rests = [];
    let temp = new Restaurant();
    temp.name = 'Tav Cafe';
    temp.phone = '(514) 112-3581';
    temp.rating = 3;
    temp.priceRange = 3;
    temp.website = 'http://cafetav.com/';
    this.rests.push(temp);

    temp = new Restaurant();
    temp.name = 'Pizza Pita';
    temp.phone = '(514) 231-1111';
    temp.rating = 4;
    temp.priceRange = 2;
    this.rests.push(temp);

    temp = new Restaurant();
    temp.name = 'Mozart';
    temp.rating = 2;
    temp.priceRange = 2;
    temp.website = 'http://restomozart.com/';
    this.rests.push(temp);
  }
}
