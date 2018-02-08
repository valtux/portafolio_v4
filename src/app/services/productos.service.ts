import { Injectable } from '@angular/core';

import {Http} from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean=true;

  constructor(private http:Http) {

    this.cargar_productos();
  }

  public buscar_producto(termino:string){

    console.log("buscando producto");
    console.log(this.productos.length);

    this.productos.forEach(prod =>{
      console.log( prod );
    })
  }

  public cargar_producto(cod:string){

    return this.http.get(`https://paginaweb-d7ee5.firebaseio.com/productos/${ cod }.json`);
  }

  public cargar_productos(){
      this.cargando=true;

    // if (this.productos.length === 0){

        this.http.get('https://paginaweb-d7ee5.firebaseio.com/productos_idx.json')
                .subscribe( res =>{
                  // console.log(res.json());

                  // setTimeout( () => {
                  this.cargando=false;
                  this.productos = res.json();

                // }, 1500)
              });

  // }
  }
}
