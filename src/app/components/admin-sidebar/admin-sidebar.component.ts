import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, Home, User, Calendar, MessageSquare, Sparkles, ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'app-admin-sidebar',
  imports: [LucideAngularModule,NgFor, RouterLink],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  
  constructor(private router: Router){}

  readonly HomeIcons= Home;
  readonly UserIcon = User;
  readonly CalendarIcon = Calendar;
  readonly MessageSquareIcon = MessageSquare;
  readonly SparklesIcon = Sparkles;
  readonly ShoppingBagIcon = ShoppingBag;

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/')
  }

  role = localStorage.getItem('role');

   navItems = [
    { icon: Home, label: 'Dashboard', href: '/admin-panel' },
    { icon: User, label: 'User Management', href: '/admin-panel/users' },
    { icon: ShoppingBag, label: 'Product Management', href: '/dashboard/chat' },
    { icon: Sparkles, label: 'Order Management', href: '/dashboard/ai' },
    { icon: ShoppingBag, label: 'Appoitment Management', href: '/dashboard/products' },
    { icon: Calendar, label: 'Chats', href: '/dashboard/appointments' },
    { icon: MessageSquare, label: 'Employee Management', href: '/dashboard/chat' },
    { icon: Sparkles, label: 'Review Management', href: '/dashboard/ai' },
    { icon: ShoppingBag, label: 'Settings ', href: '/dashboard/products' },
  ]

}
