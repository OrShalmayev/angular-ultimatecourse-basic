import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./detail.component.scss'],
  template: `
  <div>
    <span class="status" [class.checked-in]="passenger.checkedIn"></span>
    <ng-container [ngSwitch]="editing">
      <div *ngSwitchCase="false">
        {{passenger.fullname}}
      </div>
      <div *ngSwitchCase="true">
        <input
        type="text"
        [value]="passenger.fullname"
        (input)="onNameChange(name.value)"
        *ngIf="editing"
        #name>
      </div>
    </ng-container>
    <div class="date">
      check in date:
      {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMM' | uppercase) : 'not checked in'}}
    </div>
    <!-- children -->
    <div class="children">
      children: {{ passenger.children?.length || 0 }}
    </div>
    <button (click)="handleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
    <button (click)="handleDelete()">Delete</button>
  </div>
`,
})
export class DetailComponent implements OnInit, OnChanges {
  public editing: boolean = false;
  @Input() public passenger: Passenger;
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() public edit: EventEmitter<DetailComponent> = new EventEmitter<DetailComponent>();
  constructor() { }
  ngOnInit() {
    console.log('DetailComponent::OnInit')
  }
  ngOnChanges(changes) {
    console.log('DetailComponent::OnChanges', changes)
    if (changes.passenger) {
      this.passenger = {...changes.passenger.currentValue}
    }
  }
  onNameChange(value:string):void{
    this.passenger.fullname = value;
  }
  handleEdit():void{
    this.editing = !this.editing;
    this.edit.emit(this)
  }
  handleDelete():void {
    this.delete.emit(this.passenger.id)
  }
}
