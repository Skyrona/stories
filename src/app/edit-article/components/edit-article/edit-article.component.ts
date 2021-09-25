import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ArticleInputInterface } from 'src/app/shared/modules/types/articleInput.interface';
import { ArticleService } from 'src/app/shared/services/ArticleService';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit, OnDestroy {

  slug: string;
  articleSubscription: Subscription;
  initialValues: ArticleInputInterface;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get("slug");
    this.articleSubscription = this.articleService.getArticle(this.slug)
      .subscribe((article: ArticleInterface) => {
        this.initialValues = {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        }
      });
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.articleSubscription = this.articleService.updateArticle(this.slug, articleInput)
      .subscribe();
  }

}
