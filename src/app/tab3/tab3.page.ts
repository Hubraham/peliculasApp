import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { SlidesshowPosterComponent } from '../components/slidesshow-poster/slidesshow-poster.component';
import { DataLocalService } from '../service/data-local.service';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../service/movies.service';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule,
            CommonModule,
            ExploreContainerComponent,
            SlidesshowPosterComponent,
            ],
})
export class Tab3Page {
  
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  favGenero: any[] = [];

  constructor( private dataLocal: DataLocalService,
               private moviesService: MoviesService  ) { }


  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.cargarFavorito();
    this.generos = await this.moviesService.cargarGeneros();

    this.pelisPorGenero( this.generos, this.peliculas );
  }


  pelisPorGenero( generos: Genre[], peliculas: PeliculaDetalle[]  ) {


    this.favGenero = [];

    generos.forEach( genero => {

      this.favGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( (peli:any) => {
          return peli.genres.find( (genre:any) => genre.id === genero.id );
        })
      });

    });

    console.log(this.favGenero);


  }

}
