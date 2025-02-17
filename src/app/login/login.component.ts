import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    this.apiService.loginUser(this.credentials).subscribe(response => {
      localStorage.setItem('token', response.token); // Guardar el token en localStorage
      this.router.navigate(['/catalogs']);
    }, error => {
      console.error('Error en login:', error);
    });
  }
}
