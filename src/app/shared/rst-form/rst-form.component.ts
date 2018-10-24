import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'rst-send-input',
  templateUrl: './rst-form.component.html',
  styleUrls: ['./rst-form.component.css'],
})

export class RstForm {
  private _listOrder : Array<String>;

  @Input()
  placeholder : String;

  @Input()
  textButton: String;

  @Input()
  name: String;

  onSubmit(f: NgForm) : void {
    console.log(f.value); 
    alert('fui clicado');
  }
}
