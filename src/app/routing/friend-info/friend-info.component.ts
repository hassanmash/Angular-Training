import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivateGuard } from '../../guards/route-guard.service';

@Component({
  selector: 'app-friend-info',
  templateUrl: './friend-info.component.html',
  styleUrls: ['./friend-info.component.css']
})
export class FriendInfoComponent implements OnInit, IDeactivateGuard{

  private userName: string = "";
  public editName: string = "";

  // public friendname: string = "";

  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe({
      // next: (p) => this.friendname = p['friendName']
      next: (p) => { 
        this.userName = p['friendName'];
        this.editName = p['friendName'];
      }
    })
  }

  CanExit(): boolean {
    // return confirm('Are you sure want to exit?') ? true : false;
    return this.userName !== this.editName ? confirm('Are you sure want do not want to save changes?') ? true : false : true;
  }
}
