import { Component, Input } from '@angular/core';

@Component({
  selector: 'rst-send-input',
  templateUrl: './SendInput.html',
  styleUrls: ['./SendInput.css'],
})

export class SendInput {
  private _listOrder : Array<String>;

  @Input()
  placeholder : String;

  @Input()
  textButton: String;

  @Input()
  name: String;

  addOnList() : void {
    alert('fui clicado');
  }
}
