import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/register';
  private loginUrl = 'http://localhost:8080/api/auth/login';
  private getUserProfileUrl = 'http://localhost:8080/api/auth/profile';
  private updateUserProfileUrl = 'http://localhost:8080/api/auth';
  private deleteUserProfileUrl = 'http://localhost:8080/api/auth/delete-user';

  
  private getUsersUrl = 'http://localhost:8080/api/auth/register';
  private updateUserUrl = 'http://localhost:8080/api/auth/register';
  private forgotPasswordUrl = 'http://localhost:8080/api/auth/register';

  constructor(private http: HttpClient) { }

  register( userData: {email: string, password: string, fullname: string} ): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  };

  login (userData: {email: string, password: string}): Observable<any> {
    return this.http.post(this.loginUrl, userData);
  }
  
  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token); 
        const userId = decodedToken?.sub; 

        return this.http.get(`${this.getUserProfileUrl}?userId=${userId}`); // Send userId as query parameter
      } catch (error) {
        throw new Error('Invalid token format');
      }
    } else {
      throw new Error('Token not found');
    }
  }

   updateUserProfile(profileData: any): Observable<any> {
    const token = localStorage.getItem('token') as string;
    const decodedToken: any = jwtDecode(token); 
        const userId = decodedToken?.sub; 
    return this.http.put(`${this.updateUserProfileUrl}/${userId}`, profileData);
  }

// Delete user profile
deleteUserProfile(): Observable<any> {
  const token = localStorage.getItem('token') as string;
  const decodedToken: any = jwtDecode(token); 
  const id = decodedToken?.sub; 

  // Ensure `id` is passed as a query parameter
  return this.http.delete(`${this.deleteUserProfileUrl}?id=${id}`);
}

}
