import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../service/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { PipesModule } from '../pipes/pipes.module';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule,
            PipesModule,
            ExploreContainerComponent,
            CommonModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page {
  
  textoBuscar = '';
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spiderman', 'Avengers', 'Señor de los anillos', 'La vida es bella']
  buscando = false;

  constructor(  private movieS: MoviesService,
                private modalCtrl : ModalController){}

  buscar( event: any ){
    
    const valor = event.detail.value;


    // console.log(valor);
    this.buscando = true;

    this.movieS.BuscarPeliculas( valor )
      .subscribe( resp =>{
        console.log(resp);
        this.peliculas = resp.results;
        this.buscando = false;
      });
  };

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