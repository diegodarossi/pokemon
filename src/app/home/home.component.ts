import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Home } from './home.model';
import { AppService } from '../app.service';

@Component({
  selector: 'po-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  home: Home;
  pages: number[];
  url: string;

  constructor(private appService: AppService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {}

  ngOnInit() {
    this.appService.pokemons().subscribe(home => this.home = home);
  }

  viewPokemonEvent(event: Event, url: string) {
    event.preventDefault();
    this.route.navigate(['detail', { url: url }]);
  }

  changePageEvent(event: Event, url: string) {
    event.preventDefault();
    this.appService.pokemons(url).subscribe(home => this.home = home);
  }
}
