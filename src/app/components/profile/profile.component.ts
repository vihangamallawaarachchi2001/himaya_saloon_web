import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { LucideAngularModule, Calendar, Mail, Phone, MapPin, Bell, Home, Paintbrush2, Trash2, X } from 'lucide-angular';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [FormsModule,LucideAngularModule,NgIf]
})
export class ProfileComponent implements OnInit {
  readonly CalendarIcon = Calendar;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapPinIcons = MapPin;
  readonly BellIcon = Bell;
  readonly HomeIcon = Home;
  readonly Paintbrush2 = Paintbrush2;
  readonly Trash2 = Trash2;
  readonly X = X;

  profile: any = {};
  isEditModalOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  @Input() openCloseProfile: any;
  @Output() closeProfile = new EventEmitter<void>();

  handleCloseProfile(): void {
    this.closeProfile.emit(); // Notify parent
  }

  // Fetch user profile from backend
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

  // Open the edit profile modal
  openEditProfileModal(): void {
    this.isEditModalOpen = true;
  }

  // Close the edit profile modal
  closeEditProfileModal(): void {
    this.isEditModalOpen = false;
  }

  // Save the profile changes
  saveProfileChanges(): void {
    this.authService.updateUserProfile(this.profile).subscribe({
      next: () => {
        this.getUserProfile();  // Refresh the profile data
        this.closeEditProfileModal();  // Close the modal
      },
      error: (err) => {
        console.error('Failed to update profile', err);
      }
    });
  }

  // Delete user account
  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      this.authService.deleteUserProfile().subscribe({
        next: () => {
          localStorage.removeItem('token');  // Remove token from local storage
          this.router.navigate(['/login']);  // Redirect to login page
        },
        error: (err) => {
          console.error('Failed to delete account', err);
        }
      });
    }
  }
}
