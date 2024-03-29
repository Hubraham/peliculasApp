import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { register } from 'swiper/element/bundle';
import { DetalleComponent } from '../detalle/detalle.component';


register();

@Component({
  selector: 'app-slidesshow-poster',
  templateUrl: './slidesshow-poster.component.html',
  styleUrls: ['./slidesshow-poster.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, PipesModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidesshowPosterComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  constructor(private modalCtrl : ModalController) { }

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
