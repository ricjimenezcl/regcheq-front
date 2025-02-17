import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule]
})
export class RegisterComponent {

  user = {
    username: '',
    email: '',
    password: '',
    role: 'admin'
  };

  constructor(private apiService: ApiService) {}

  register() {
    this.apiService.registerUser(this.user).subscribe(response => {
      console.log('Usuario registrado:', response);
    }, error => {
      console.error('Error en registro:', error);
    });
  }
}
