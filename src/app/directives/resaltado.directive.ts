import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  
  //recibo un parámtro desde el objeto
  @Input("appResaltado") nuevoColor!: string;
   
  constructor(
    private el: ElementRef
  ) {    
    console.log(this.nuevoColor);
   }

   //método que modifica el estilo del elemento
   private resaltar(color: string){
     if(color===""){
      this.el.nativeElement.style.backgroundColor = null;  
     }else{
       this.el.nativeElement.style.backgroundColor = color;
     }
   }

   //evento que llama al método principal
    @HostListener('mouseenter')
    mouseEntro(){
      this.resaltar(this.nuevoColor)
    //console.log(this.nuevoColor);
    }

   @HostListener('mouseleave')
   mouseSalio(){
     this.resaltar('');
   }








}
