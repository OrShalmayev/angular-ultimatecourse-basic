import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <ng-container>
      <passenger-count
        [passengers]="passengers"
        [title]="title"
      >
      </passenger-count>
      <div *ngFor="let passenger of passengers;">
      {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [passenger]="passenger"
        (delete)="handleDelete($event)"
        (edit)="handleEdit($event)"
      ></passenger-detail>
    </ng-container>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  public passengers: Passenger[];
  public title: string = 'Airline Passengers!';
  constructor() { }
  ngOnInit():void {
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
  handleDelete(passengerID: number):void {
    this.passengers = this.passengers.filter( (p: Passenger) => p.id !== passengerID)
  }
  handleEdit(detailComponent: DetailComponent):void{
    if (detailComponent.editing===true) {
      console.log('were editing passenger:', detailComponent.passenger)
    } else {
      this.passengers = this.passengers.map((p: Passenger) => {
        if( detailComponent.passenger.id === p.id ){
          p = {...detailComponent.passenger};
        }
        return p;
      })
    }
  }
}
