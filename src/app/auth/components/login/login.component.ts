import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isLoading: boolean = false;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  onSubmit(): void {    
    const request = {
      user: this.form.value
    };

    this.authService.login(request).subscribe(
      (data) => {
        this.router.navigate(['/']);
    })

  }

}
