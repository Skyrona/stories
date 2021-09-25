import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { RouterModule } from '@angular/router';
import { FavoritesButtonModule } from '../favorites-button/favorites-button.module';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FavoritesButtonModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
