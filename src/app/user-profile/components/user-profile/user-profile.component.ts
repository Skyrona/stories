import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { CurrentUserInterface } from 'src/app/auth/types/currentUserInterface';
import { UserProfileService } from 'src/app/shared/services/UserProfileService';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  slug: string;
  isCurrentUserProfile$: Observable<boolean>;
  userProfile$: Observable<ProfileInterface>;
  currentUser$: Observable<CurrentUserInterface>;
  queryParamsSubscription: Subscription;

  constructor(
    private userProfileService: UserProfileService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.params.subscribe((params: Params) => {      
      this.slug = params.slug;
      this.fetchUserProfile();
    })
    
    this.currentUser$ = this.authService.getCurrentUser();
  }

  fetchUserProfile(): void {
    this.userProfile$ = this.userProfileService.getUserProfile(this.slug);
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes("favorites");
    
    return isFavorites 
      ? `/articles?favorited=${this.slug}` 
      : `/articles?author=${this.slug}`;
  }

}
