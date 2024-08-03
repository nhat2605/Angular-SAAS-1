import { Component } from '@angular/core';
import { BackgroundComponent } from '../../shared/background/background.component';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BackgroundComponent,RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthenticationService) {}

  login() {
    const currentDateTime = new Date().toISOString();
    this.authService.setLoginToken(currentDateTime);
    this.router.navigate(['/dashboard']);
    console.log(this.authService.isLoggedIn())
  }
}
