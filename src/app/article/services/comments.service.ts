import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { CommentInterface } from "../types/comment.interface";
import { GetCommentsResponseInterface } from "../types/getCommentsResponse.interface";

@Injectable()
export class CommentsService {

    constructor(
        private http: HttpClient
    ) {}

    getCommentsByArticles(slug: string): Observable<CommentInterface[]>{
        const url = `${environment.apiUrl}/articles/${slug}/comments`;

        return this.http
            .get<GetCommentsResponseInterface>(url)
            .pipe(
                map(
                    res => res.comments.sort(this.sortCommentsById)
                )
            )
    }

    postComment(slug: string, commentInput: {}) {
        const url = `${environment.apiUrl}/articles/${slug}/comments`;
        
        return this.http
            .post(url, commentInput);
    }

    sortCommentsById(a: CommentInterface, b: CommentInterface) {
        return b.id - a.id;
    }
}