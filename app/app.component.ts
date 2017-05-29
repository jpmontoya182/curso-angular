import {Component} from 'angular2/core';
import { Pelicula } from './models/pelicula';

@Component({
    selector : 'my-app', 
    templateUrl : 'app/views/peliculas.html',
    styleUrls : ['../assets/css/styles.css']
})

export class AppComponent{
    public pelicula : Pelicula;

    constructor (){
        this.pelicula = new Pelicula(1,'Peliculas con Angular 2',  'Batman vs Superman', 'Zack Snider', 2016 );
        this.debug();
    }

    debug(){
        console.log(this.pelicula);
    }
}