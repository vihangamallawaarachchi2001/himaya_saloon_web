import { Component } from '@angular/core';
import { RecentAppoitmentsComponent } from "../../components/recent-appoitments/recent-appoitments.component";
import { RateComponent } from "../../components/rate/rate.component";
import { RecentPurchasesComponent } from "../../components/recent-purchases/recent-purchases.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ RecentAppoitmentsComponent, RateComponent, RecentPurchasesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  token = localStorage.getItem('token');

  constructor(private router: Router){
    this.authCheck();
  }

  authCheck(){
    if(this.token == null) {
      this.router.navigateByUrl('/unautherized_access');
    } else {
      
    }
  }
}
