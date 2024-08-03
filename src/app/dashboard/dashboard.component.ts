import { Component } from '@angular/core';
import { BackgroundComponent } from "../shared/background/background.component";
import { HeaderComponent } from '../shared/header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { StatComponent } from './stat/stat.component';
import { PricingComponent } from './pricing/pricing.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BackgroundComponent, 
    HeaderComponent,
    HeroComponent,
    FeatureComponent,
    StatComponent,
    PricingComponent,
    NewsletterComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  title = "NexaCompute"
}
