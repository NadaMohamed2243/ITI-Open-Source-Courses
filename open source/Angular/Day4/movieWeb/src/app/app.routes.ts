import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './feature/pages/home/home.component';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent ,title:'Home'},

  {path:"movie",loadComponent:()=> import('./feature/pages/movie/movie.component').then(m=>m.MovieComponent) ,title: 'Movie'},
  {path:"people",loadComponent:()=> import('./feature/pages/people/people.component').then(m=>m.PeopleComponent) ,title: 'People'},
  {path:"tv",loadComponent:()=> import('./feature/pages/tv/tv.component').then(m=>m.TvComponent) ,title: 'Tv'},
  {
    path: 'details/:type/:id',
    loadComponent: () => import('./feature/pages/details/details.component').then(m => m.DetailsComponent)
  },


  {path:'**', component: NotfoundComponent , title:'404 Not Found'}
];
