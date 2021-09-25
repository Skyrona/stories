import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { CurrentUserInterface } from 'src/app/auth/types/currentUserInterface';
import { ArticleService } from 'src/app/shared/services/ArticleService';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../types/comment.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<ArticleInterface>;
  currentUser$: Observable<CurrentUserInterface>;

  slug: string;


  constructor(
    private articleService: ArticleService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get("slug");
    this.article$ = this.articleService.getArticle(this.slug);
    this.currentUser$ = this.authService.getCurrentUser();
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.slug).subscribe(()=>{}).unsubscribe();
  }

}
