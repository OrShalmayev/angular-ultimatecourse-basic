import { Component } from '@angular/core';
import { Passenger } from './models/passenger';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <h1>{{title}}</h1>
      <passenger-dashboard></passenger-dashboard>
    </div>
      <!-- <app-classandstyle [passengers]="passengers"></app-classandstyle> -->
  `
})
export class AppComponent {
  public title: string = 'Airline Passengers';
  constructor(){ }
}
