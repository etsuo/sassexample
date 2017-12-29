import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FeedListItemComponent} from './feed-list-item/feed-list-item.component';
import {FeedRoutingModule} from './feed-routing.module';
import {FeedComponent} from './feed.component';

@NgModule({
  declarations: [
    FeedComponent,
    FeedListItemComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class FeedModule {
}
