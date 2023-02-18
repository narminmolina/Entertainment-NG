import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

email!:string;
password!:string;


  constructor(private router:Router, private authService:AuthService ){}
  ngOnInit():void{}
  navigateToRegistration() {
    this.router.navigate(['/register']);
  }


//  SignOut() {
//  this.angularFireAuth
//  .auth
//  .signOut();
//  }

login():void{

  this.authService.signIn(this.email, this.password).then(res=>{
    this.authService.getAuthState().subscribe(user=>{
      if (user){
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['movies'])
      }
    })
  })
}



}
