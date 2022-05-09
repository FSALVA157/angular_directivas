import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  alerta: string = 'alert-danger';
  ejecutando: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clases: string[] = [
    "alert-primary",
    "alert-secondary",
    "alert-success",
    "alert-danger",
  ];

  claseSelected: string="";

  procesar(){
    this.ejecutando = true;
    setTimeout(() => {
            this.ejecutando = false;
    }, 3000);
  }

}
