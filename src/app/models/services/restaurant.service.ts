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
        avgMealPrice: 4,
        location: {
          streetNumber: 12,
          apartment: 'a',
          streetName: 'Decarie',
          city: 'Montreal',
          province: 'Quebec',
          postalCode: 'h3s 1g9',
          country: 'Canada'
        }
      }),
      new Restaurant({
        name: 'Cafe Tav',
        phone: '0987654321',
        rating: 2,
        avgMealPrice: 3,
        location: {
          streetName: 'Decarie',
          city: 'Montreal',
          province: 'Quebec',
          country: 'Canada'
        }
      }),
      new Restaurant({
        name: 'Mozart',
        phone: '1231231234',
        rating: 5,
        avgMealPrice: 5,
        location: {
          streetNumber: 30,
          apartment: 'a',
          streetName: 'Queen Mary',
          city: 'Montreal',
          province: 'Quebec',
          postalCode: 'h3s 1g9',
          country: 'Canada'
        }
      }),
      new Restaurant({
        name: 'Bennys',
        phone: '3213214321',
        website: 'https://google.ca',
        rating: 1,
        avgMealPrice: 1
      }),
      new Restaurant({
        name: 'Chiyoko',
        rating: 5,
        avgMealPrice: 1
      }),
      new Restaurant()
    ];
  }
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
}
}
