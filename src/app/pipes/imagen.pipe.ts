import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string= 'w500'): string {
    // AL RETURN SE LE AGREGA '' asegurarte de que siempre haya un valor de retorno de tipo string para la función 
    // transform(). Puedes hacer esto definiendo un valor de retorno predeterminado cuando la variable img es falsy, 
    // como por ejemplo una cadena vacía (''), de la siguiente manera:
    
    if (!img) {
      return './assets/no-image-banner.jpg';
    }
    const imgUrl = `${ URL }/${ size }${ img}`;

    return imgUrl;
  }

}
