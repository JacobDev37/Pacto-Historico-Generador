import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.sass']
})
export class RenderComponent implements OnInit {
    @Input() letters:Array<string>;
    @Input() pic:string | ArrayBuffer | null;
    colors:Array<string> = ['warning', 'info', 'danger', 'success', 'primary'];
    items:number = this.colors.length;
    counter: 0;

    constructor(){}
    ngOnInit():void{}

    colorCalculator(index:number){
        if (index >= this.items) {
            let color = index - (Math.floor(index / this.items) * this.items);
            return this.colors[color];
        }else{
            return this.colors[index];
        }
    }
}
