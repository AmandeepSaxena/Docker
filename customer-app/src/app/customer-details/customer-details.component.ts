import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../shared/restaurant/restaurant.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit, OnDestroy {

  restaurant: any = {};

  sub: Subscription;
  id;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.restaurantService.get(id).subscribe((restaurant: any) => {
        this.restaurant = restaurant;
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
