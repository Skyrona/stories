import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ArticleInterface } from "../types/article.interface";
import { GetArticleResponseInterface } from "../types/getArticleResponse.interface";

@Injectable()
export class FavoritesService {

    constructor(
        private http: HttpClient
    ) {}

    getUrl(slug: string): string {
        return `${environment.apiUrl}/articles/${slug}/favorite`;
    }

    getArticle(response: GetArticleResponseInterface): ArticleInterface {
        return response.article;
    }

    addToFavorites(slug: string): Observable<ArticleInterface> {
        const url = this.getUrl(slug);
        return this.http
            .post(url, {})
            .pipe(
                map(this.getArticle)
            );
    }

    removeFromFavorites(slug: string): Observable<ArticleInterface> {
        const url = this.getUrl(slug);
        return this.http
            .delete(url)
            .pipe(
                map(this.getArticle)
            );
    }
}