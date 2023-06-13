import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroImgPipe } from './filtro-img.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    ParesPipe,
    FiltroImgPipe,
    
  ],
  exports:[
    ImagenPipe,
    ParesPipe,
    FiltroImgPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
