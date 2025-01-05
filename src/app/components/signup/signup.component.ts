import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LucideAngularModule, Scissors, User, Mail,Phone, Lock } from 'lucide-angular';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [LucideAngularModule, RouterOutlet, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  readonly ScissorsIcon = Scissors;
  readonly UserIcon = User;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly LockIcon = Lock;

    formdata = signal({
      email: '',
      password: '',
      fullname: ''
    })
  
    constructor(private authService: AuthService, private router:  Router) { }
  
    onSubmit() {
      const userData = this.formdata();
      this.authService.register(userData).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Registration failed', error);
          alert('Registration failed');
        }
      })
    }
  
    onChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.formdata.set({
        ...this.formdata(),
        [target.name]: target.value
      });
    }

}
