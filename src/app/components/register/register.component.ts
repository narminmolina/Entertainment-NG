import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	name!: string;
	email!: string;
	password!: string;
	confirmPassword!: string;

	constructor(private router:Router, private authService: AuthService) {}

	ngOnInit(): void {}

	// validateEmail(email: string) {
	//   // Email validation regex pattern
	//   const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	//   return pattern.test(email);
	// }

	register(): void {
		this.authService.signUp(this.email, this.password).then(res =>
			this.authService.setUserDate(res.user, this.name).then(result => {
				this.name = '';
				this.email = '';
				this.password = '';
				this.confirmPassword = '';
			})
		);
            this.router.navigate(['login'])

	}
}
