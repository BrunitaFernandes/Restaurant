import { Component, Input } from '@angular/core';
@Component({
  selector: 'rst-article',
  templateUrl: './Article.html',
  styleUrls: ['./Article.css'],
})

export class Article {
  @Input()
  title: String;

  @Input()
  text: String;
}
