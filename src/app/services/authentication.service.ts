import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: any;

  constructor(public afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
   }

  signIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log('logou');
      localStorage.setItem('user', JSON.stringify(response.user));
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    });
  }

  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.user));
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    });
  }
  signOut() {
    this.afAuth.signOut();
  }
}
