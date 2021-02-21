import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
// components
import { CountComponent } from './components/count/count.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [PassengerDashboardComponent, CountComponent, DetailComponent],
  imports: [CommonModule],
  providers: [],
  exports: [PassengerDashboardComponent]
})
export class PassengerDashboardModule {}
