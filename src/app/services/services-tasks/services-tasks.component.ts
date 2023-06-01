import { Component, OnInit } from '@angular/core';
import { jsonDataService } from '../json.service';
import { ComponentLevelService } from '../componentlevel.service';
import { AppLevelService } from '../../applevel.service';

@Component({
  selector: 'app-services-tasks',
  templateUrl: './services-tasks.component.html',
  styleUrls: ['./services-tasks.component.css'],
  providers:[ jsonDataService , ComponentLevelService]
})
export class ServicesTasksComponent implements OnInit{

  public jData: any;

  constructor(private jsonSvc: jsonDataService, private applevel: AppLevelService, private complevel: ComponentLevelService){}
  
  ngOnInit(): void {
    this.applevel.callMe();
    this.complevel.callMe();
  }

  public getJsonData(){
    this.jData = this.jsonSvc.jsonData;
  }

}
