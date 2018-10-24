import { Component, Input } from '@angular/core';
@Component({
  selector: 'rst-article',
  templateUrl: './rst.article.component.html',
  styleUrls: ['./rst.article.component.css'],
})

export class RstArticle {
  @Input()
  title: String;

  @Input()
  text: String;
}
