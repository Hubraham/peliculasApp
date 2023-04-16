import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MoviesService } from '../service/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { PipesModule } from '../pipes/pipes.module';

import { SlidesshowBackdropComponent } from '../components/slidesshow-backdrop/slidesshow-backdrop.component';
import { SlidesshowPosterComponent } from '../components/slidesshow-poster/slidesshow-poster.component';
import { SlidesShowParesComponent } from '../components/slides-show-pares/slides-show-pares.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    PipesModule,
    SlidesshowBackdropComponent,
    SlidesshowPosterComponent,
    SlidesShowParesComponent
  ],
  
})

export class Tab1Page implements OnInit{


  peliculasRecientes: Pelicula[]=[];
  populares: Pelicula[]=[];
   

  constructor( private movieService: MoviesService) {}

  ngOnInit(){

    this.movieService.getFeature()
      .subscribe( resp  =>{
        this.peliculasRecientes =  resp.results;
      });
    this.getPopulares(); 
  }

  cargarMas(){
    this.getPopulares(); 
  }

  getPopulares(){
    this.movieService.getPopulares()
    .subscribe(resp =>{
      // console.log('Populares', resp.results);
      const arrTemp = [...this.populares, ...resp.results] 

      this.populares = arrTemp;
  });
  };
  
  

}

