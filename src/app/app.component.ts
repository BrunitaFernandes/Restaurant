import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restaurant';

  tableOptions = {
    tableTitle: "menu option",
    columsName: ['Number option', 'Dish Type', 'morning', 'night'],
    rows: [
      [1, '(entrée)', 'eggs', 'steak'],
      [2, '(side)', 'Toast', 'potato'],
      [3, '(drink)', 'coffee', 'wine'],
      [4, '(dessert)', 'Not Applicable', 'cake']
    ]
  }
}
