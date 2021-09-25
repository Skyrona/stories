import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { MarkdownModule } from 'ngx-markdown';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './services/comments.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "articles/:slug",
    component: ArticleComponent
  }
]

@NgModule({
  declarations: [
    ArticleComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TagListModule,
    MarkdownModule,
    ReactiveFormsModule
  ],
  providers: [
    CommentsService
  ]
})
export class ArticleModule { }
