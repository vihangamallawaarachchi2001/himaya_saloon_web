import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Scissors, Lock, Mail } from 'lucide-angular';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    LucideAngularModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent {
  readonly ScissorsIcon = Scissors;
  readonly Lock = Lock;
  readonly Mail = Mail;

  formdata = signal({
    email: '',
    password: '',
  });

  isLoading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const userData = this.formdata(); // Prepare the form data
    this.isLoading = true; 
    this.errorMessage = ''; 
  
    this.authService.login(userData).subscribe({
      next: (response) => {
        const { token, role } = response; // Destructure token and role from the response
        localStorage.setItem('token', token); // Store the token in local storage
        localStorage.setItem('role', role); // Store the role in local storage
  
        this.isLoading = false;
  
        // Navigate based on the user's role
        if (role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.isLoading = false;
      },
    });
  }
  

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.formdata.set({
      ...this.formdata(),
      [target.name]: target.value,
    });
  }


  navigate() {
    this.router.navigateByUrl('/signup')
  }

}
