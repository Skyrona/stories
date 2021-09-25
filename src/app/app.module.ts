import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavBarModule } from './shared/modules/nav-bar/nav-bar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateArticleModule } from './create-article/create-article.module';
import { HomeModule } from './home/home.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { ArticleModule } from './article/article.module';
import { EditArticleModule } from './edit-article/edit-article.module';
import { BannerModule } from './shared/modules/banner/banner.module';
import { MarkdownModule } from 'ngx-markdown';
import { FooterModule } from './shared/modules/footer/footer.module';


import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    NavBarModule,
    CreateArticleModule,
    UserProfileModule,
    ArticleModule,
    EditArticleModule,
    BannerModule,
    FooterModule,
    MarkdownModule,
    SettingsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
