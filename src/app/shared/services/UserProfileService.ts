import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { GetUserProfileResponseInterface } from "../types/getUserProfileResponse.interface";
import { ProfileInterface } from "../types/profile.interface";
import { PutUserProfileInterface } from "../types/putUserProfile.interface";

@Injectable()
export class UserProfileService {

    constructor(
        private http: HttpClient
    ) {}

    getUserProfile(slug: string): Observable<ProfileInterface> {
        const url = `${environment.apiUrl}/profiles/${slug}`;

        return this.http
            .get(url)
            .pipe(
                map((response: GetUserProfileResponseInterface) => response.profile)
            )
    }

    followUser(username: string) {
        const url = `${environment.apiUrl}/profiles/${username}/follow`;

        return this.http.post(url, {});
    }

    unFollowUser(username: string) {
        const url = `${environment.apiUrl}/profiles/${username}/follow`;

        return this.http.delete(url);
    }

    updateProfile(data: PutUserProfileInterface) {
        const url = `${environment.apiUrl}/user`;

        console.log(data);
        
        return this.http
            .put(url, {user: data})
            .pipe(
                map((response: GetUserProfileResponseInterface) => response.profile)
            )

    }
}