import { Component } from '@angular/core';
import { Passenger } from './models/passenger';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <h1>{{title}}</h1>
      <h3>Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
        <span
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}:
          {{passenger.fullname}}
        </li>
      </ul>
      <app-classandstyle [passengers]="passengers"></app-classandstyle>
  `
})
export class AppComponent {
  public title: string = 'Airline Passengers';
  public passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Or',
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'Or2',
      checkedIn: true
    },
    {
      id: 3,
      fullname: 'Or3',
      checkedIn: false
    },
    {
      id: 4,
      fullname: 'Or4',
      checkedIn: true
    },
    {
      id: 5,
      fullname: 'Or5',
      checkedIn: false
    },
  ];
  constructor(){ }
}
