import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';
import { MatSidenavModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { MatIconModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../shared/restaurant/restaurant.service';
import { ImageService } from '../shared/image/image.service';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantEditComponent } from './customer-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
describe('RestaurantEditComponent', () => {
//  let component;
//  const route: ActivatedRoute;
//  const router: Router;
//  const restaurantService: RestaurantService;
//  const imageService: ImageService;
//  beforeEach(async(() => {
//    TestBed.configureTestingModule({
//      imports: [
//      RouterTestingModule,
//      MatToolbarModule,
//      HttpClientModule,
//      BrowserAnimationsModule,
//      MatButtonModule,
//      MatCardModule,
//      MatInputModule,
//      MatListModule,
//      MatToolbarModule,
//      MatIconModule,
//      MatSidenavModule,
//      FormsModule,
//      FlexLayoutModule,
//      MatFormFieldModule,
//    ],
//    providers: [
//      RestaurantService,
//      ImageService
//  ],
//      declarations: [ RestaurantEditComponent ]
//    })
//    .compileComponents();
//    component = new RestaurantEditComponent(route, router, restaurantService, imageService);
//  }));
// it( 'should create', () => {
//    expect(component).toBeTruthy();
//  });
});
