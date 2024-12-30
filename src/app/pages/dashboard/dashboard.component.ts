import { Component } from '@angular/core';
import { RecentAppoitmentsComponent } from "../../components/recent-appoitments/recent-appoitments.component";
import { RateComponent } from "../../components/rate/rate.component";
import { RecentPurchasesComponent } from "../../components/recent-purchases/recent-purchases.component";

@Component({
  selector: 'app-dashboard',
  imports: [ RecentAppoitmentsComponent, RateComponent, RecentPurchasesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
