import {Injectable} from '@angular/core';
import {Referral} from '../models/referrals';

@Injectable()
export class FeedApi {

  getFeed(): Referral[] {
    return [
      Referral.fromJson({
        description: 'Some kind of description',
        name: 'John Doe',
        title: 'Whoa',
        url: 'http://google.com'
      }),
      Referral.fromJson({
        description: 'Some other kind of description',
        name: 'Jane Doe',
        title: 'Yeah yeah this',
        url: 'http://google.in'
      })
    ];
  }
}
