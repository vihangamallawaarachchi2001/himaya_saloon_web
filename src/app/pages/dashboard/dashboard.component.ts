import { Component } from '@angular/core';
import { ProfileComponent } from "../../components/profile/profile.component";
import { RecentAppoitmentsComponent } from "../../components/recent-appoitments/recent-appoitments.component";
import { RecentNotificationsComponent } from "../../components/recent-notifications/recent-notifications.component";
import { RateComponent } from "../../components/rate/rate.component";
import { RecentPurchasesComponent } from "../../components/recent-purchases/recent-purchases.component";

@Component({
  selector: 'app-dashboard',
  imports: [ProfileComponent, RecentAppoitmentsComponent, RecentNotificationsComponent, RateComponent, RecentPurchasesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
