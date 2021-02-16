import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      {{ title + '!' }}
      <p>
      {{ isHappy ? ':)' : ':(' }}
      </p>
      <button (click)="toggleHappy()">Toggle Happy</button>
    </div>
  `,
})
export class AppComponent {
  public title: string;
  public isHappy: boolean = true;

  constructor(){
    this.title = 'ultimatecourse-basic';
  }

  public toggleHappy() {
    this.isHappy = !this.isHappy;
  }
}
