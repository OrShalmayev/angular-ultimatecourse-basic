import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';

@Component({
  selector: 'app-classandstyle',
  templateUrl: './classandstyle.component.html',
  styleUrls: ['./classandstyle.component.scss']
})
export class ClassandstyleComponent implements OnInit {
  @Input() passengers: Passenger[];
  constructor() { }
  ngOnInit() {
  }

}
