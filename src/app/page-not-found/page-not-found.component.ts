import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  @HostBinding('class.app-component') isAppComponent = true;

  constructor() {
  }

  ngOnInit() {
  }

}
