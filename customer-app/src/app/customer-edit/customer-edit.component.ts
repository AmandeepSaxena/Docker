import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../shared/restaurant/restaurant.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class RestaurantEditComponent implements OnInit, OnDestroy {

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
      this.id = id;
      if (id) {
        this.restaurantService.get(id).subscribe((restaurant: any) => {
          if (restaurant) {
            this.restaurant = restaurant;
            this.restaurant.href = restaurant._links.self.href;
          } else {
            console.error(`Restaurant with id '${id}' not found, returning to list`);
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

  save(form: NgForm) {
   if (this.id){
   this.restaurantService.update(form,this.id).subscribe(result => {
    this.gotoList();
   }, error => console.error(error))
  } else {
    this.restaurantService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error))
  }
  }

  remove(href) {
    this.restaurantService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
