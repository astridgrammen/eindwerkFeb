import { Injectable } from '@angular/core';
import { Router } from "@angular/router" ;
import { auth } from "firebase/app" ;
import { AngularFireAuth } from "@angular/fire/auth" ;
import { User } from "firebase" ;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {                                 //Dit is een Observable
      if (user) {                                                             //If user is true dan ...
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));              //Van boject een .json bestand maken
      } else {
        localStorage.setItem("user", null);                                   //Anders, local storage = 0 => geen toegang
      }
    });
  }
  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['/']);
    } catch (e) {
      //alert("Error!" + e.message);
      console.log("inlog error");
      document.getElementById("error").innerHTML = "<p>Login fail, please try again...</p>";
    }
  }
  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  get isLoggedOut(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user == null;
  }
}