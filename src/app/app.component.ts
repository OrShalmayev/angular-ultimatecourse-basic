import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  public title: string = 'Airline Passengers';
  constructor(){ }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('AppComponent::ngonoinit')
  }
}
