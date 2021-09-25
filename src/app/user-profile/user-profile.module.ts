import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { UserProfileService } from '../shared/services/UserProfileService';
import { FollowUserComponent } from './components/follow-user/follow-user.component';

const routes: Routes = [
  {
    path: "profiles/:slug",
    component: UserProfileComponent
  },
  {
    path: "profiles/:slug/favorites",
    component: UserProfileComponent
  }
]

@NgModule({
  declarations: [
    UserProfileComponent,
    FollowUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule
  ],
  exports: [
    FollowUserComponent
  ],
  providers: [
    UserProfileService
  ]
})
export class UserProfileModule { }
