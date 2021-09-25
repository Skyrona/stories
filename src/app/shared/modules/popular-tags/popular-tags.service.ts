import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { GetAllPopularTagsResponseInterface } from "./types/popularTags.interface";

@Injectable()
export class PopularTagsService {
    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<string[]> {
        const url = environment.apiUrl + "/tags";
        return this.http.get(url)
            .pipe(
                map((response: GetAllPopularTagsResponseInterface) => {
                return response.tags;
            })
        )
    }
}