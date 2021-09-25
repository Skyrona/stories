import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ArticleInputInterface } from "../modules/types/articleInput.interface";
import { ArticleInterface } from "../types/article.interface";
import { CreateArticleResponseInterface } from "../types/createArticleResponse.interface";
import { GetArticleResponseInterface } from "../types/getArticleResponse.interface";
import { GetFeedResponseInterface } from "../types/GetFeedResponse.interface";

@Injectable()
export class ArticleService {

    apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {}

    create(data: ArticleInputInterface) {
        const url = this.apiUrl + "/articles";
        return this.http
            .post<CreateArticleResponseInterface>(url, {article: data})
            .pipe(
                map((response: CreateArticleResponseInterface) => {
                    return response.article;
                })
            )
    }

    getAll(urlProps: string): Observable<GetFeedResponseInterface> {
        const url = this.apiUrl + urlProps;
        return this.http
            .get<GetFeedResponseInterface>(url);
    }

    getArticle(slug: string): Observable<ArticleInterface> {
        const url = `${this.apiUrl}/articles/${slug}`;

        return this.http
            .get<GetArticleResponseInterface>(url)
            .pipe(
                map((response: GetArticleResponseInterface) => response.article)
            );
    }

    updateArticle(slug: string, articleInput: ArticleInputInterface): Observable<ArticleInterface> {
        const url = `${this.apiUrl}/articles/${slug}`;

        return this.http
            .put<CreateArticleResponseInterface>(url, {article: articleInput})
            .pipe(
                map((response: CreateArticleResponseInterface) => {
                    return response.article;
                })
            )
    } 

    deleteArticle(slug: string): Observable<{}> {
        const url = `${this.apiUrl}/articles/${slug}`;

        return this.http.delete<{}>(url);
    }
}