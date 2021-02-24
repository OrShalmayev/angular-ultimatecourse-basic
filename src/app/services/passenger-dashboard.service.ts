import { Injectable } from '@angular/core';
import { Passenger } from '../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor() { }

  getPassengers(): Passenger[]  {
    return [
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
