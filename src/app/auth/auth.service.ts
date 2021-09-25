import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "./types/authResponse.interface";
import { CurrentUserInterface } from "./types/currentUserInterface";
import { LoginRequestInterface } from "./types/loginRequest.interface";
import { RegisterRequestInterface } from "./types/registerRequest.interface";
import { User } from "./types/user.interface";

@Injectable()
export class AuthService {

    userTokenSubject: BehaviorSubject<string>;
    private isLoggedInSubject: BehaviorSubject<boolean>;
    isLoggedIn: Observable<boolean>;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        let token = localStorage.getItem("accessToken");
        let isLoggedIn = !!token;        
        
        if (!token) {
            token = "";            
        }
        
        this.userTokenSubject = new BehaviorSubject<string>(
            token
        );

        this.isLoggedInSubject = new BehaviorSubject<boolean>(
            isLoggedIn
        );

        this.isLoggedIn = this.isLoggedInSubject.asObservable();


    }

    public get tokenValue(): string {
        return this.userTokenSubject.value;
    }

    getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user;
    }


    login(data: LoginRequestInterface) {
        const url = `${environment.apiUrl}/users/login`;
        
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(
                map((response: AuthResponseInterface) => {
                    return this.logInUser(response);
                })
            );
    }

    register(data: RegisterRequestInterface) {
        const url = `${environment.apiUrl}/users/register`;

        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(
                map((response: AuthResponseInterface) => {
                    return this.logInUser(response);
                })
            )
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = `${environment.apiUrl}/user`;

        return this.http
            .get(url)
            .pipe(map(this.getUser));
    }

    logout(): void {
        localStorage.removeItem("accessToken");
        this.userTokenSubject.next("");
        this.isLoggedInSubject.next(false);
        this.router.navigate(['/login'])
    }

    private logInUser(data: AuthResponseInterface): string {
        const token = this.getUser(data).token;                    
        localStorage.setItem("accessToken", token);
        this.isLoggedInSubject.next(true);
        this.userTokenSubject.next(token);
        return token;
    }
}