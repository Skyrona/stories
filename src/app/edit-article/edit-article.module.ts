import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';

const routes: Routes = [
  {
    path: "articles/:slug/edit",
    component: EditArticleComponent
  }
]

@NgModule({
  declarations: [
    EditArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule
  ]
})
export class EditArticleModule { }
