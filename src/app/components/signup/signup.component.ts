import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Scissors, User, Mail,Phone, Lock } from 'lucide-angular';

@Component({
  selector: 'app-signup',
  imports: [LucideAngularModule, RouterOutlet],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  readonly ScissorsIcon = Scissors;
  readonly UserIcon = User;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly LockIcon = Lock;

}
