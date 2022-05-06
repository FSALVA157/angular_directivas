import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size': tamano + 'px', 'color': color }">
           Probando ngStyle!!!!
    </p>  
    <button class="btn btn-primary" (click)="tamano = tamano + 5"><i class="fa fa-plus"></i></button>
    
    <button class="btn btn-primary" (click)="tamano = tamano - 5"><i class="fa fa-minus"></i></button>

    
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano:number = 50;
  color: string = "red";

  constructor() { }

  ngOnInit(): void {
  }

}
