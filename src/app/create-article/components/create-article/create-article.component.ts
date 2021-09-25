import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleInputInterface } from 'src/app/shared/modules/types/articleInput.interface';
import { ArticleService } from 'src/app/shared/services/ArticleService';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  createArticle$: Subscription;

  initialValues: ArticleInputInterface = {
    title: "",
    description: "",
    body: "",
    tagList: []
  }

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(articleInput: ArticleInputInterface): void {  
    this.createArticle$ = this.articleService.create(articleInput).subscribe((response) => {      
      this.router.navigate(['/'])
    }

    );
  }

}
