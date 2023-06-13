import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImg'
})
export class FiltroImgPipe implements PipeTransform {

  transform(peliculas: any[] ): any[] {

    


    return peliculas.filter(peli => {
      return peli.backdrop_path;
    });
  }

}
