import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { 
    this._activatedRoute.parent?.params.subscribe(parametro => {
      console.log('PARAMETROS RECIBIDOS EN RUTA HIJA');
      console.log(parametro);
    });
  }

  ngOnInit(): void {
  }

}
