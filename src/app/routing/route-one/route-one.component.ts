import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css']
})
export class RouteOneComponent {

  constructor(private logsvc: LoggingService) {}

  public loginBtn() {
    this.logsvc.login();
  }

  public logoutBtn() {
    this.logsvc.logout();
  }

}
