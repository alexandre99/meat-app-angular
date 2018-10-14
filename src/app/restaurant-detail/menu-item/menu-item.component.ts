import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-10px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]

})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}