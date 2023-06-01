import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from 'src/app/routing/logging.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  constructor(private svc: LoggingService, private router:Router) {}

  public logout() {
    alert('Settings changed succesfully.');
    this.svc.logout();
    this.router.navigate(['home']);
  }
}
