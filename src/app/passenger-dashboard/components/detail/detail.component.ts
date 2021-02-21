import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./detail.component.scss'],
  template: `
  <div>
    <span class="status" [class.checked-in]="passenger.checkedIn"></span>
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
  </div>
`,
})
export class DetailComponent implements OnInit {
  @Input() public passenger: Passenger;

  constructor() { }

  ngOnInit() {
    console.log('DetailComponent::ngonoinit')
  }

}
