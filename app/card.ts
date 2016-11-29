import { Component, Input, Output, EventEmitter ,ElementRef, Renderer  } from '@angular/core';

export class Card{

 cardbase: string;
constructor(private elementRef:ElementRef, private renderer:Renderer) {
this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => { 
    this.handleClick();
     this.cardbase = "<div  class='card-content' ><span  class='card-title activator grey-text text-darken-4'>Card Title<i class='material-icons right'>Some information</i></span><p><a >Click to done</a> value= 4</p></div>";  
});


}
   handleClick(){
        console.log("has llamado a una carta")
    }
}