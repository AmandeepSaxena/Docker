import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../shared/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Array<any>;
  id;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAll().subscribe(data => {
      this.restaurants = data;
    });
  }

}
