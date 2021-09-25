import { Component, Input, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/shared/services/UserProfileService';

@Component({
  selector: 'app-follow-user',
  templateUrl: './follow-user.component.html',
  styleUrls: ['./follow-user.component.scss']
})
export class FollowUserComponent implements OnInit {

  @Input("isFollowed") isFollowedProps: boolean;
  @Input("username") usernameProps: string;
  @Input("isSameUser") isSameUserProps: boolean;
  isFollowed: boolean

  constructor(
    private userProfileService: UserProfileService
  ) { }

  ngOnInit(): void {
    this.isFollowed = this.isFollowedProps;
  }

  handleFollow(): void {
    if (this.isFollowed) {
      this.userProfileService.unFollowUser(this.usernameProps)
        .subscribe(res => this.isFollowed = false)
    } else {
      this.userProfileService.followUser(this.usernameProps)
        .subscribe(res => this.isFollowed = true)
    }
  }

}
