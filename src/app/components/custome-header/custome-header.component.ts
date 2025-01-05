import { Component, signal } from '@angular/core';
import { LucideAngularModule, Bell, User } from 'lucide-angular';
import { ProfileComponent } from '../profile/profile.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-custome-header',
  imports: [LucideAngularModule, ProfileComponent, FormsModule, NgIf,],
  templateUrl: './custome-header.component.html',
  styleUrl: './custome-header.component.css'
})
export class CustomeHeaderComponent {

  ngOnInit(): void {
    this.getProfile()
  }


  readonly Bell = Bell
  readonly User = User;
  profileName: any;
  
  display = signal(false);


  displayProfile() {
    this.display.set(!this.display())
  }

  constructor(private authService: AuthService, private router: Router) {}

  
  handleAuth() {
    if (this.profileName == '' || this.profileName == null || this.profileName == undefined) {
      this.router.navigateByUrl('/')
    }
  }

  getProfile() {
    this.authService.getUserProfile().subscribe({
      next: (data) => {
        this.profileName = data.fullname;
        console.log("mother fucker ", data)
      },
      error: (err) => {
        console.error('Failed to fetch user', err);
        
      }
    })
  }
  
}
