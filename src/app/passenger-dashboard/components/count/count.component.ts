import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';

@Component({
  selector: 'passenger-count',
  styleUrls: ['./count.component.scss'],
  template: `
    <div>
      <h1>{{title}}</h1>
      <p>total checked in: {{ checkedInCount }}/{{passengers.length}}</p>
    </div>
  `,
})
export class CountComponent implements OnInit {
  @Input() public passengers: Passenger[];
  @Input() public title: string;

  constructor() { }

  ngOnInit(): void {
    console.log('CountComponent::ngonoinit')
  }

  public get checkedInCount(): number {
    if (!this.passengers) return;
    return this.passengers.filter( (passenger: Passenger) => passenger.checkedIn ).length;//END filter
  }//END checkedInCount

}
