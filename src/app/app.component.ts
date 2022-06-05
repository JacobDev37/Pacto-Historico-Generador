import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'Pacto-historico-generador';
    letters:Array<string>;
    pic:string | ArrayBuffer | null;
    lengthName:number;
    renderName(letters:Array<string>){
        this.letters = letters;
    }
    renderPic(pic:string | ArrayBuffer | null){
        this.pic = pic;
    }
    nameLength(length:number){
        this.lengthName = length;
    }
}
