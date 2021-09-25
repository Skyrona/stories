import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedModule } from '../shared/modules/feed/feed.module';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "feed",
    component: HomeComponent
  },
  {
    path: "tags/:slug",
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    FeedTogglerModule,
    PopularTagsModule
  ]
})
export class HomeModule { }
