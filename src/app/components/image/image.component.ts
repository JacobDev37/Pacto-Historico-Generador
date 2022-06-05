import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {
    info:FormGroup;
    pic:string | ArrayBuffer | null;
    @Output() renderPic: EventEmitter<string | ArrayBuffer | null>;

    constructor(private builder: FormBuilder){
        this.initForm();
        this.renderPic = new EventEmitter();
    }
    ngOnInit(): void {}

    initForm(){
        this.info = this.builder.group({pic: ['']});
    }

    processImage(event:any){
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: ProgressEvent) => {
                this.pic = (<FileReader>event.target).result;
                this.renderPic.emit(this.pic);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

}
