import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../shared/restaurant/restaurant.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-restaurant-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class RestaurantDeleteComponent implements OnInit, OnDestroy {

  restaurant: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.restaurantService.delete(id).subscribe((restaurant: any) => {
          if (restaurant) {
            this.restaurant = restaurant;
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/customer-list']);
  }

}
