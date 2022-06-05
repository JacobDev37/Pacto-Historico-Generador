import { Component, OnInit, Input } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.sass']
})
export class RenderComponent implements OnInit {
    @Input() letters:Array<string>;
    @Input() lengthName:number;
    @Input() pic:string | ArrayBuffer | null;
    colors:Array<string> = ['warning', 'info', 'danger', 'success', 'primary'];
    items:number = this.colors.length;
    step:boolean = false;

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

    generatePic(){
        var render = document.getElementById('render')!;
        var final = document.getElementById('final')!;
        var link = document.getElementById('link') as HTMLAnchorElement;
        html2canvas(render).then(function(canvas) {
            final.appendChild(canvas);
            link.href = canvas.toDataURL("image/png");
        });
    }
}
