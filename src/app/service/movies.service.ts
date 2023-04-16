import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query : string ) {

    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    // console.log('Consulta a la API:', query);

    return this.http.get<T>( query );

  }

  getPopulares(){

    this.popularesPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;

    return this.ejecutarQuery<RespuestaMDB>(query);

  }


  // Data de peliculas con la fecha de hoy
  getFeature(){
   
    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;
    
    let mesString;
    
    if (mes < 10) {
        mesString = '0' + mes;
      }else{
          mesString = mes;
        }
        
        const inicio = `${ hoy.getFullYear()}-${mesString}-01`
        const fin    = `${ hoy.getFullYear()}-${mesString}-${ultimoDia}`
        
        // console.log('URL de la API:', URL);

        return  this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`)
        
        
      }
      
    }
    // return  this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2023-01-30`)
    // return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2023-01-30&api_key=0c3b93edbf0a1190420e56ac218fd1e1&language=es&include_image_language=es`)