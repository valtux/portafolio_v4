import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductosService}  from "../../services/productos.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  termino:string = undefined;
  constructor(private route: ActivatedRoute,
              public _ps:ProductosService) {

      route.params.subscribe(parametros => {

        this.termino = parametros['termino'];
        console.log(this.termino);
        console.log("antes de entrar al buscar_producto");

        _ps.buscar_producto(this.termino);

      });


      // buscar_producto();
  }


}
