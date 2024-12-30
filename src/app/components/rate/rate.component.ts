import { Component } from '@angular/core';
import { LucideAngularModule, Star, StarHalf } from 'lucide-angular';

@Component({
  selector: 'app-rate',
  imports: [LucideAngularModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent {
  readonly StarIcon = Star;
  readonly StarHalfIcon = StarHalf;
}
