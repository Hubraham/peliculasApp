import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../../pipes/pipes.module';
import { DetalleComponent } from '../detalle/detalle.component';

// SWIPER
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-slidesshow-backdrop',
  templateUrl: './slidesshow-backdrop.component.html',
  styleUrls: ['./slidesshow-backdrop.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, PipesModule, DetalleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class SlidesshowBackdropComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle( id : number ){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
  

}
