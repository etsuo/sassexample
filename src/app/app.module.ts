import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeedModule} from './feed/feed.module';
import {HomeModule} from './home/home.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FeedApi} from './shared/api/feed-api';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeedModule,
    HomeModule,
    AppRoutingModule // keep last
  ],
  providers: [
    FeedApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
