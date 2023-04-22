import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter, } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { PipesModule } from '../../pipes/pipes.module';
import { register } from 'swiper/element/bundle';
import { DetalleComponent } from '../detalle/detalle.component';

register();

@Component({
  selector: 'app-slides-show-pares',
  templateUrl: './slides-show-pares.component.html',
  styleUrls: ['./slides-show-pares.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, PipesModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidesShowParesComponent  implements OnInit  {

   
  @Input() peliculas: Pelicula[] = [];
  
  @Output() cargarMas = new EventEmitter();
  

  constructor( private modalCtrl : ModalController ) { }

  ngOnInit() {    
  }

  onClick(){
    this.cargarMas.emit();
  }

  
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