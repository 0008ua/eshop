import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-redirection-after-oauth',
  templateUrl: './redirection-after-oauth.component.html',
  styleUrls: ['./redirection-after-oauth.component.scss']
})
export class RedirectionAfterOauthComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      take(1)
    )
      .subscribe((event) => this.router.navigate(['/user', 'profile']),
        (err) => console.log('err', err)
      );
  }

  ngOnInit() { }

}
