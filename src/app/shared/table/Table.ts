import { Component, Input } from '@angular/core';
@Component({
  selector: 'rst-table',
  templateUrl: './Table.html',
  styleUrls: ['./Table.css'],
})

export class Table {
  @Input()
  table: Object;

}
