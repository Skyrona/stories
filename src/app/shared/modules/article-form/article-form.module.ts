import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    ArticleFormComponent
  ]
})
export class ArticleFormModule { }
