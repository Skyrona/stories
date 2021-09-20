import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "./types/authResponse.interface";
import { LoginRequestInterface } from "./types/loginRequest.interface";
import { RegisterRequestInterface } from "./types/registerRequest.interface";
import { User } from "./types/user.interface";

@Injectable()
export class AuthService {

    userTokenSubject: BehaviorSubject<string>;
    isLoggedIn: BehaviorSubject<boolean>;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        let token = localStorage.getItem("accessToken");
        
        if (!token) {
            token = "";            
        }
        
        this.userTokenSubject = new BehaviorSubject<string>(
            token
        );

        this.isLoggedIn = new BehaviorSubject<boolean>(
            false
        );
    }

    public get tokenValue(): string {
        return this.userTokenSubject.value;
    }

    getUser(response: AuthResponseInterface): User {
        return response.user;
    }


    login(data: LoginRequestInterface) {
        const url = `${environment.apiUrl}/users/login`;
        
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(
                map((response: AuthResponseInterface) => {
                    const token = this.getUser(response).token;                    
                    localStorage.setItem("accessToken", token);
                    this.isLoggedIn.next(true);
                    this.userTokenSubject.next(token);
                    return token;
                })
            );
    }

    register(data: RegisterRequestInterface) {
        const url = `${environment.apiUrl}/users/register`;

        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(
                map((response: AuthResponseInterface) => {
                    const token = this.getUser(response).token;                    
                    localStorage.setItem("accessToken", token);
                    this.isLoggedIn.next(true);
                    this.userTokenSubject.next(token);
                    return token;
                })
            )
    }

    logout(): void {
        localStorage.removeItem("accessToken");
        this.userTokenSubject.next("");
        this.isLoggedIn.next(false);
        this.router.navigate(['/login'])
    }
}