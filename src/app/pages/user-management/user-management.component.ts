import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { LucideAngularModule, Eye,Paintbrush2, Trash2, X } from 'lucide-angular';

@Component({
  selector: 'app-user-management',
  imports: [FormsModule, NgFor, NgIf, LucideAngularModule, NgClass],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css',
})
export class UserManagementComponent {
  readonly Eye = Eye;
  readonly PaintBrush2 = Paintbrush2;
  readonly Trash2 = Trash2;
  readonly X = X;

  users: any[] = [];
  currentPage = signal(0);
  totalPages: number = 1;
  searchQuery: string = '';
  isLoading: boolean = false;
  selectedUser: any = null;
  editUserModal: any = null; // Added for editing user details
  addUserModal: boolean = false; // Flag to control the "Add User" modal visibility
  newUser: any = { // Object to store new user details
    fullname: '',
    email: '',
    address: '',
    contact: '',
    password: '',
    roles: 'USER' // Default role is 'USER'
  };

  // Open the "Add User" modal
  openAddUserModal() {
    this.addUserModal = true;
    this.newUser = { // Reset the form fields when opening the modal
      fullname: '',
      email: '',
      address: '',
      contact: '',
      password: '',
      roles: 'USER'
    };
    this.searchQuery = ''
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.fetchUsers(this.currentPage());
  }

  fetchUsers(page: number) {
    this.isLoading = true;
    this.authService.getAllUsers(page, 10).subscribe({
      next: (response) => {
        this.users = response.users;
        this.totalPages = response.totalPages;
        this.isLoading = false;
        console.log(response);
      },
      error: () => {
        console.error('Failed to fetch users');
        this.isLoading = false;
      },
    });
  }

  searchUsers() {
    if (this.searchQuery) {
      this.users = this.users.filter(
        (user) =>
          user.fullname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.fetchUsers(this.currentPage());
    }
  }

  viewUser(user: any) {
    this.selectedUser = user;
    // Display modal or popup with full user details
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.authService.deleteUserById(userId).subscribe({
        next: () => {
          alert('User deleted successfully');
          this.selectedUser = null;
          this.fetchUsers(this.currentPage());
        },
        error: () => {
          alert('Failed to delete user');
        },
      });
    }
  }

  openEditPopup(user: any) {
    // Open the edit user modal
    this.editUserModal = { ...user }; // Clone the user object to prevent changes directly
    this.selectedUser = null
  }

  saveUser() {
    // Call API to update the user
    this.authService.updateUserById(this.editUserModal).subscribe({
      next: () => {
        alert('User updated successfully');
        this.editUserModal = null;
        this.fetchUsers(this.currentPage()); // Refresh users
      },
      error: () => {
        alert('Failed to update user');
      },
    });
  }

  editUser(user: any) {
    this.openEditPopup(user); // Open edit modal
  }

  changePage(page: number) {
    this.currentPage.set(page - 1)
    this.fetchUsers(this.currentPage());
  }

  changePageByButton(page: number) {
    this.currentPage.set(page);  // No need for subtraction here
    this.fetchUsers(page);
  }



      // Method to add admin role
  addAdminRole(user: any) {
    user.roles = 'ADMIN'; // Add 'ADMIN' role to the user
    this.authService.updateUserById(user).subscribe({
      next: () => {
        alert(`${user.fullname} is now an Admin!`);
        this.fetchUsers(this.currentPage()); // Refresh users
      },
      error: () => {
        alert('Failed to update user role');
      },
    });
  }

  onSubmit() {
    const userData = this.newUser;
    this.authService.register(userData).subscribe({
      next: (response) => {
        this.addUserModal = false;
      },
      error: (error) => {
        console.error('Registration failed', error);
        alert('Registration failed');
      }
    })
  }

}
