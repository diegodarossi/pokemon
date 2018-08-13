import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';
import { Pokemon } from './pokemon.model';
import { FavorService } from '../favor/favor.service';
import { Favor } from '../favor/favor.model';

@Component({
  selector: 'po-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  pokemon: Pokemon;
  url: string;
  favor: Favor;
  isFavor: boolean;

  constructor(private appService: AppService,
              private favorService: FavorService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.route.snapshot.params['url'];

    this.appService.pokemon(this.url)
                   .subscribe(pokemon => {
                     this.pokemon = pokemon;
                     this.favor = new Favor(this.pokemon.name, this.url);
                     this.isFavor = this.favorService.exist(this.favor);
                    });

  }

  attachFavorEvent() {
    this.favorService.attachItem(this.favor);
    this.isFavor = this.favorService.exist(this.favor);
  }
}
