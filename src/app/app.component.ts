import { Component } from '@angular/core';
import { Passenger } from './models/passenger';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <h1>{{title}}</h1>
      <!-- the template way -->
      <ul>
        <ng-template [ngForOf]="passengers" ngFor let-passenger let-i="index" >
          <li>
            {{ i }}:
            {{passenger.fullname}}
          </li>
        </ng-template>
      </ul>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
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
