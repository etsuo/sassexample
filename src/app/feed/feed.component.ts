import {Component, HostBinding, OnInit} from '@angular/core';
import {FeedApi} from '../shared/api/feed-api';
import {Referral} from '../shared/models/referrals';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @HostBinding('attr.class') defaultClass = 'app-component';
  items: Referral[] = [];

  constructor(feedApi: FeedApi) {
    this.items = feedApi.getFeed();
  }

  ngOnInit() {
  }
}
