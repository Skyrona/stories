import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { CurrentUserInterface } from 'src/app/auth/types/currentUserInterface';
import { UserProfileService } from 'src/app/shared/services/UserProfileService';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  form: FormGroup;

  currentUser: CurrentUserInterface;
  currentUserSubscription: Subscription;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userProfileService: UserProfileService
  ) { }

  ngOnInit(): void {


    this.currentUserSubscription = this.authService.getCurrentUser()
      .subscribe((res) => {
        this.currentUser = res;
        this.initializeForm();
      })
  }

  initializeForm(): void {
    this.form = this.fb.group({
      image: "",
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: ""
    });
  }

  onSubmit(): void {

    this.form.value.image = this.base64output;
    console.log(this.form.value);
    
    this.userProfileService.updateProfile(this.form.value)
      .subscribe((res) => {}).unsubscribe();
  }

  base64output: string;

  onFileSelect(event) {
    this.convertFile(event.target.files[0])
    .subscribe(base64 => this.base64output = base64);
    
    
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }
}
