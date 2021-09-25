import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesButtonComponent } from './components/favorites-button/favorites-button.component';
import { FavoritesService } from '../../services/FavoritesService';



@NgModule({
  declarations: [
    FavoritesButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FavoritesButtonComponent
  ],
  providers: [
    FavoritesService
  ]
})
export class FavoritesButtonModule { }
