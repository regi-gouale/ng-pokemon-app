import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class LoginComponent implements OnInit{
  message: string = "Vous êtes déconnecté. (admin/admin)";
  name: string = "";
  password: string = "";
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage() {
    this.message = this.auth.isLoggedIn ?
      "Vous êtes connecté." : "Identifiant ou mot de passe incorrect.";
  }

  login() {
    this.message = "Tentative de connexion en cours ...";

    this.auth.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.auth.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
        const redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/pokemons';
        // Redirige l'utilisateur
        this.router.navigate([redirect]);
      } else {
        this.password = '';
        this.setMessage();
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.auth.logout();
    this.message = "Vous êtes déconnecté.";
  }

}
