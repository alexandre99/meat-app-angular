import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from './../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItem: Observable<MenuItem[]>;

  constructor(private restaurantService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menuItem = this.restaurantService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(menuItem: MenuItem) {
    console.log(menuItem);
  }


}
