import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  constructor(private router: Router, public authService: AuthenticationService) {}

  logout() {
    this.authService.clearLoginToken();
    this.router.navigate(['#']);
  }
}
