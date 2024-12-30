import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LucideAngularModule, Scissors, Lock, Mail } from 'lucide-angular';


@Component({
  selector: 'app-login',
  imports: [
    LucideAngularModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly ScissorsIcon = Scissors;
  readonly Lock = Lock;
  readonly Mail = Mail;
}
