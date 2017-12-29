import {Component, OnInit} from '@angular/core';
import {FeedApi} from '../shared/api/feed-api';
import {Referral} from '../shared/models/referrals';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  host: {'class': 'app-component'}
})
export class FeedComponent implements OnInit {

  items: Referral[] = [];

  constructor(feedApi: FeedApi) {
    this.items = feedApi.getFeed();
  }

  ngOnInit() {
  }
}
