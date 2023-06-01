import { Component } from '@angular/core';
import { AppLevelService } from '../../applevel.service';

@Component({
  selector: 'app-service-tasks2',
  templateUrl: './service-tasks2.component.html',
  styleUrls: ['./service-tasks2.component.css']
})
export class ServiceTasks2Component {

  constructor(private applevel: AppLevelService){
    setTimeout(() => {
      console.log("This is second tasks: ");
      applevel.callMe();
    }, 0);
  }

}
