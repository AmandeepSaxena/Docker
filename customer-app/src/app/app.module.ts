import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestaurantService } from './shared/restaurant/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './customer-list/customer-list.component';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantEditComponent } from './customer-edit/customer-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './customer-details/customer-details.component';
import { RestaurantDeleteComponent } from './customer-delete/customer-delete.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/customer-list', pathMatch: 'full' },
  {
    path: 'customer-list',
    component: RestaurantListComponent
  },
  {
    path: 'customer-details/:id',
    component: RestaurantDetailsComponent
  },
  {
    path: 'customer-delete/:id',
    component: RestaurantDeleteComponent
  },
  {
    path: 'customer-add',
    component: RestaurantEditComponent
  },
  {
    path: 'customer-edit/:id',
    component: RestaurantEditComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantEditComponent,
    RestaurantDetailsComponent,
    RestaurantDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [
    RestaurantService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
