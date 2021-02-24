import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';
import { PassengerDashboardService } from 'src/app/services/passenger-dashboard.service';
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

  constructor(
    /**
     * angular will use the type and inject it to the private variable
     * similar to:
     * this.passengerService = PassengerDashboardService
     */
    private passengerService$: PassengerDashboardService
  ) { }//END constructor

  ngOnInit():void {
    console.log('PassengerDashboardComponent::ngonoinit')
    this.passengers = this.passengerService$.getPassengers();
  }//END ngOnInit

  handleDelete(passengerID: number):void {
    this.passengers = this.passengers.filter( (p: Passenger) => p.id !== passengerID)
  }//END handleDelete

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
  }//END handleEdit
}//END COMPONENT
