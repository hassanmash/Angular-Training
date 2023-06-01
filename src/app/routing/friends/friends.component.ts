import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  public FriendList: string[] = ['PersonA','PersonB','PersonC','PersonD','PersonE','PersonF']

}
