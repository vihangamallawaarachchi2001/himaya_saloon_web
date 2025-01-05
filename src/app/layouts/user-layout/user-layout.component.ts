import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CustomeHeaderComponent } from '../../components/custome-header/custome-header.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, SidebarComponent, CustomeHeaderComponent,],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
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
