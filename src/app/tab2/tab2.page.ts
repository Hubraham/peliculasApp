import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page {

  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Avengers', 'Señor de los anillos', 'La vida es bella']

  constructor( private movieS: MoviesService){}

  buscar( event: any ){
    
    const valor = event.detail.value;
    console.log(valor);
    // this.movieS.BuscarPeliculas( valor )
    //   .subscribe( resp =>{
    //     console.log(resp)
    //   });
  }

}