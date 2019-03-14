import { Injectable } from '@angular/core';
import {Restaurant} from '../restaurant';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];
  constructor() {
    // TODO Replace with Api call
    this.restaurants = [
      new Restaurant({
        name: 'Pizza Pita',
        phone: '1234567890',
        website: 'https://google.ca',
        rating: 3,
        avgMealPrice: 4
      }),
      new Restaurant({
        name: 'Cafe Tav',
        phone: '0987654321',
        rating: 2,
        avgMealPrice: 3
      }),
      new Restaurant({
        name: 'Mozart',
        phone: '1231231234',
        website: 'https://google.ca',
        rating: 5,
        avgMealPrice: 5
      }),
      new Restaurant({
        name: 'Bennys',
        phone: '3213214321',
        website: 'https://google.ca',
        rating: 1,
        avgMealPrice: 1
      })
    ];
  }
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
}
}
