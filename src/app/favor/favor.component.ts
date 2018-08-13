import { Component, OnInit } from '@angular/core';
import { FavorService } from './favor.service';
import { Favor } from './favor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'po-favor',
  templateUrl: './favor.component.html'
})
export class FavorComponent implements OnInit {

  list: Favor[];

  constructor(private favorService: FavorService,
              private route: Router) {
    this.list = this.favorService.items;
   }

  ngOnInit() {
  }

  viewPokemonEvent(event: Event, url: string) {
    event.preventDefault();
    this.route.navigate(['detail', { url: url }]);
  }

  removeAllFavorEvent() {
    this.favorService.clear();
    this.list = this.favorService.items;
  }
}
