import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { CustomeHeaderComponent } from '../../components/custome-header/custome-header.component';
import { AdminSidebarComponent } from '../../components/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AdminSidebarComponent, CustomeHeaderComponent,],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  constructor(private authService: AuthService, private router: Router){
  }

  profile: any = {}
  NgOnInit(){
    this.getUserProfile();

  }

  getUserProfile(): void {
    this.authService.getUserProfile().subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (err) => {
        console.error('Failed to fetch profile', err);
      }
    });
  }

}
