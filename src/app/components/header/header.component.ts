import { Component} from '@angular/core';
import {InformacionService} from "../../services/informacion.service";
// import {RouterModule} from "@angular.router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor (public _is:InformacionService,
              public route:Router){}

  public buscar_producto(termino:string){

    console.log(termino);
    this.route.navigate(['buscar'], termino);
  }


}
