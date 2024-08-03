import { Component } from '@angular/core';
import { BackgroundComponent } from '../../shared/background/background.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [BackgroundComponent,
    RouterModule
  ],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

}
