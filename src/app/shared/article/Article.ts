import { Component } from '@angular/core';
@Component({
  selector: 'rst-article',
  templateUrl: './Article.html'
})

export class Article {

  constructor(private _title: String, private _text: String) { }

  get title() : String {
    return this._title;
  }

  get text() :String {
    return this._text;
  }

}