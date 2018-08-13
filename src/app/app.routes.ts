import {Routes, Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {FavorComponent} from './favor/favor.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail', component: DetailComponent },
  {path: 'favor', component: FavorComponent}
];
