import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.sass']
})
export class NameComponent implements OnInit {
    info: FormGroup;
    @Output() renderName: EventEmitter<string[]>;
    @Output() nameLength: EventEmitter<number>;
    letters:Array<string>;

    constructor(private builder: FormBuilder){
        this.initForm();
        this.renderName = new EventEmitter();
        this.nameLength = new EventEmitter();
    }
    ngOnInit():void{}

    initForm(){
        this.info = this.builder.group({name: ['']});
    }

    processName(){
        this.letters = this.info.value.name.split('');
        this.renderName.emit(this.letters);
        this.nameLength.emit(this.letters.length);
    }
}
