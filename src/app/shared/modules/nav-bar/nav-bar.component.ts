import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { CurrentUserInterface } from 'src/app/auth/types/currentUserInterface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface>;
  toggleNavbar: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.currentUser$ = this.authService.getCurrentUser();    
  }

  logout(): void {
    this.authService.logout();
  }

}
