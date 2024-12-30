import { Component } from '@angular/core';
import { LucideAngularModule, Scissors } from 'lucide-angular';


@Component({
  selector: 'app-login',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly ScissorsIcon = Scissors;
}
