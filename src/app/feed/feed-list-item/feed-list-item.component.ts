import {Component, Input, OnInit} from '@angular/core';
import {Referral} from '../../shared/models/referrals';

@Component({
  selector: 'app-feed-list-item',
  templateUrl: './feed-list-item.component.html',
  styleUrls: ['./feed-list-item.component.scss']
})
export class FeedListItemComponent implements OnInit {

  @Input('item') item: Referral;

  constructor() {
  }

  ngOnInit() {
  }

}
