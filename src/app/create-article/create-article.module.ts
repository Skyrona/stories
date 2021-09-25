import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { ArticleService } from '../shared/services/ArticleService';

const routes: Routes = [
  {
    path: "articles/new",
    component: CreateArticleComponent
  }
]

@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule
  ],
  providers: [
    ArticleService
  ]
})
export class CreateArticleModule { }
