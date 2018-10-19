# Restaurant
This is a test from a international business

# Discribe

# -  Expecting to evaluate
-  Object Oriented Design 
-  Respect SOLID Principles 
-  Readability 
-  Maintainability 
-  Testability 

# -  Frontend Requirements
- Create SPA website using any JavaScript framework (e.g. Angular, ReactJs etc.)
- Main Page must have 4 components :  input textbox, output textbox, button( send order) and grid  
- The grid must keep history of inputs and outputs that user had requested before 
- Website can(optional) have unit tests 5. Push your solution in a GitHub repository, and send us a link when done 

# -  Backend Requirements
- Create this solution as a web API application 
- Solution must have unit tests 
- Push your solution in a GitHub repository, and send us a link when done 

# -  Rules: 
 1. You must enter time of day as “morning” or “night”  
 2. You must enter a comma delimited list of dish types with at least one selection 
 3. The output must print food in the following order: entrée, side, drink, dessert 
 4. There is no dessert for morning meals 
 5. Input is not case sensitive 
 6. If invalid selection is encountered, display valid selections up to the error, then print error 
 7. In the morning, you can order multiple cups of coffee 
 8. At night, you can have multiple orders of potatoes 
 9. Except for the above rules, you can only order 1 of each dish type 
 
 # - Dishes for Each time of day 
 
 <table>
       <thead>
         <tr>
             <th>Dish Type</th>
             <th>morning </th>
             <th>night </th>
         </tr>
       </thead>
       <tbody>
          <tr>
              <td>1 (entrée)</td>
              <td>eggs</td>
              <td>steak </td>
          </tr>
          <tr>
              <td>2 (side) </td>
              <td>Toast</td>
              <td>potato</td>
          </tr>
          <tr>
              <td>3 (drink) </td>
              <td>coffee </td>
              <td>wine </td>
          </tr>
         <tr>
              <td>4 (dessert) </td>
              <td>Not Applicable </td>
              <td>cake  </td>
          </tr>
       </tbody>
 </table>
 
 
# Sample Input and Output: 
- Input: morning, 1, 2, 3     Output: eggs, toast, coffee 
- Input: morning, 2, 1, 3  Output: eggs, toast, coffee 
- Input: morning, 1, 2, 3, 4 Output: eggs, toast, coffee, error 
- Input: morning, 1, 2, 3, 3, 3 Output: eggs, toast, coffee(x3) 
- Input: night, 1, 2, 3, 4 Output:  steak, potato, wine, cake 
- Input: night, 1, 2, 2, 4 Output steak, potato(x2), cake 
- Input: night, 1, 2, 3, 5 Output:  steak, potato, wine, error 
- Input: night, 1, 1, 2, 3, 5 Output:  steak, error 


# Restaurant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
