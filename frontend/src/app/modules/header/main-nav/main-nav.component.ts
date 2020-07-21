import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { ICatalog, IUser } from 'src/app/interfaces';
import { Observable, combineLatest } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { GetUser } from 'src/app/actions/user.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  mainNavCommon$: Observable<ICatalog[]>;
  mainNavSystem$: Observable<ICatalog[]>;
  mainNavCommon: ICatalog[];
  mainNavSystem: ICatalog[];
  user: IUser;

  @Input() navType: 'top' | 'aside';

  constructor(
    private catalogService: CatalogService,
    private userService: UserService,
    private router: Router,
    private store: Store<State>,

  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetUser());
    this.store.select('auth')
      .subscribe(store => this.user = store.user);

    this.mainNavCommon$ = this.catalogService.getChildren('common');
    this.mainNavSystem$ = this.catalogService.getChildren('system');
    combineLatest(this.mainNavCommon$, this.mainNavSystem$)
      .subscribe(data => {
        this.mainNavCommon = data[0];
        this.mainNavSystem = data[1];
      });
  }

  allowTo(permittedRole: string) {
    return this.userService.allowTo(permittedRole);
  }

  restrictTo(restrictedRoles: string[]) {
    return this.userService.restrictTo(restrictedRoles);
  }

  logout() {
    this.userService.logout().subscribe(_ => this.router.navigate(['/']));
  }

}
