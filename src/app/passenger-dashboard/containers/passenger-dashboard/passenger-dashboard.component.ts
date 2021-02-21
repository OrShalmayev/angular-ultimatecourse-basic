import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [passengers]="passengers"
        [title]="title"
      >
      </passenger-count>
      <passenger-detail></passenger-detail>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
        <span
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}:
          {{passenger.fullname}}
          <!-- <p>{{passenger | json}}</p> -->
          <div class="date">
            check in date:
            {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMM' | uppercase) : 'not checked in'}}
          </div>
          <!-- children -->
          <div class="children">
            <!-- ? safe navigation operator (if  this exists then continue to the next step) -->
            children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  public passengers: Passenger[];
  public title: string = 'Airline Passengers!';
  constructor() { }

  /**
   * Life Cycles
   */
  ngOnInit() {
    console.log('PassengerDashboardComponent::ngonoinit')
    this.passengers = [
      {
        id: 1,
        fullname: 'Or',
        checkedIn: true,
        checkedInDate: 1233211233214,
        children: [{name: 'Ted', age: 1}]
      },
      {
        id: 2,
        fullname: 'Or2',
        checkedIn: true,
        checkedInDate: 1233211283214,
        children: [{name: 'Ted2', age: 2}]
      },
      {
        id: 3,
        fullname: 'Or3',
        checkedIn: false,
        checkedInDate: null,
        children: [{name: 'Ted3', age: 3}]
      },
      {
        id: 4,
        fullname: 'Or4',
        checkedIn: true,
        checkedInDate: null,
        children: null
      },
      {
        id: 5,
        fullname: 'Or5',
        checkedIn: false,
        checkedInDate: 1233211283184,
        children: [{name: 'Ted5', age: 5}]
      },
    ];
  }

}
