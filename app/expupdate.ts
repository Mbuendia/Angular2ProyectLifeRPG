import { Component, Input, Output, EventEmitter } from '@angular/core';

export class LevelComponent {
    @Input() lvl: number;
    @Output() anadircart: EventEmitter<any> = new EventEmitter();
    @Output() complete: EventEmitter<any> = new EventEmitter();
    numbercard: number;
    progressnumer: number;
    value: number;
    card: string;
    cardlist: Array<any>;
    constructor() {
        this.progressnumer = 0;
        this.lvl = 1;
        this.numbercard = 1;
        this.cardlist = [];
    }


    addCard(): void {
        this.card = "<div   class='card-content' ><span  class='card-title activator grey-text text-darken-4'>Card Title<i class='material-icons right'>Some information</i></span><p><a >Click to done</a> value= " + this.numbercard + "</p></div>";
        this.numbercard++;
        this.cardlist.push(this.card);
        //this.cardlist.join("");
        this.anadircart.emit(this.cardlist);

    }

    onClickcard(): void {
        if ( this.cardlist.length>0){


            this.complete.emit(null);
            this.progressnumer += 25/(this.lvl*2);

            if (this.progressnumer >= 100) {
                this.progressnumer = 0;
                this.lvl++;

            }
            this.cardlist.pop();
            console.log(this.progressnumer);
        }
    }


    /*('#add').click(function () {
        var progress = parseInt($('.determinate').attr('style').slice(6, 9));
        var value = 10;
        var classname = "card";
        var text = "";
        d = document.createElement('div');
        Materialize.showStaggeredList('.card');
        $(d).addClass(classname)
            .html(text)
            .appendTo($(".card"))
            //main div
            .click(function () {
    
                progress = parseInt($('.determinate').attr('style').slice(6, 9)) + value;
    
                if (progress <= 95) {
    
    
    
                    console.log(progress);
                    $('.determinate').attr('style', 'width: ' + progress + '%');
                    $(this).remove();
                } else {
                    console.log(Lvl);
                    value = 0;
                    Lvl = Lvl + 1;
    
                    $('#Level').text(Lvl);
                    $('.determinate').attr('style', 'width: 0%');
                }
            });
    
    });*/


}