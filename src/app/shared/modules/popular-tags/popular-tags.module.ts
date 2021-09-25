import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { RouterModule } from '@angular/router';
import { PopularTagsService } from './popular-tags.service';



@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PopularTagsComponent
  ],
  providers: [
    PopularTagsService
  ]
})
export class PopularTagsModule { }
