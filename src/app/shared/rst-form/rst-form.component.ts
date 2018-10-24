import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'rst-send-input',
  templateUrl: './rst-form.component.html',
  styleUrls: ['./rst-form.component.css'],
})

export class RstForm {
  private _listOrder : Array<String>;

  model: any = {};

  @Input()
  placeholder : String;

  @Input()
  textButton: String;

  @Input()
  name: String;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
