import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuari',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuari.component.html',
  styleUrl: './usuari.component.css'
})
export class UsuariComponent {
  nom! : string;
  email! : string;
  password! : string;
  repeatpassword! : string;
  idioma! : string;
  checkbox!: boolean;
  
  submit () {
    console.log('Nom:', this.nom, 'Email:', this.email, 'Password:', this.password, 'Repeat:', this.repeatpassword, 'Idioma:', this.idioma, 'Checkbox:', this.checkbox);
  }
}
