import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { MoviesService } from '../../service/movies.service';
import { Cast, PeliculaDetalle } from '../../interfaces/interfaces';
import { PipesModule } from '../../pipes/pipes.module';

import { register } from 'swiper/element/bundle';

import { DataLocalService } from 'src/app/service/data-local.service';
import { IonicStorageModule } from '@ionic/storage-angular';

register();

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, PipesModule, IonicStorageModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class DetalleComponent  implements OnInit {

  @Input() id: any;

  
  pelicula: PeliculaDetalle = {};
  actores:  Cast[] = [];
  oculto =  150; 
  estrella = 'star-outline'

  constructor( private movieS : MoviesService,
               private modalCtrl : ModalController,
               private dataLocal : DataLocalService) { }

   ngOnInit() {
    // console.log('ID', this.id)

    this.dataLocal.existePelicula ( this.id)
    .then(existe => this.estrella = ( existe )? 'star' : 'star-outline');
    
    this.movieS.getPeliculaDetalle(this.id)
    .subscribe( resp =>{
      console.log(resp);
      this.pelicula = resp;
    });
    
    this.movieS.getActoresPeliculas(this.id)
        .subscribe( resp =>{
          console.log(resp)
          
          this.actores = resp.cast;
        });
      
      }
      
      regresar(){
        this.modalCtrl.dismiss();
      }
      
      favorito(){
        const existe = this.dataLocal.guardarPelicula( this.pelicula)
         this.estrella = ( existe )? 'star' : 'star-outline';
      }
      
      
      
}
