import { Component } from '@angular/core';
import { Passenger } from './models/passenger';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <h1>{{title}}</h1>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
        <span
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}:
          {{passenger.fullname}}
        </li>
      </ul>
      <!-- multiple class names -->
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
        <span
          class="status"
          [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out': !passenger.checkedIn
          }"></span>
          {{ i }}:
          {{passenger.fullname}}
        </li>
      </ul>
    </div>
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
