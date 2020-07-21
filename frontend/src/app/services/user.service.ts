import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private user: IUser;
private environment = environment;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private store: Store<State>,
  ) {
    this.store.select('auth')
      .subscribe(storeState => this.user = storeState.user);
  }

  getUser(): Observable<IUser | null> {
    const cookie = this.cookieService.get('es');
    if (cookie) {
      const helper = new JwtHelperService();
      const user = helper.decodeToken(cookie).sub;
      return of(user);
    }
    return of(null);
  }

  logout(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.get<string>(
      'api/user/logout',
      httpOptions
    );
  }

  /** Session
   * Used for router guard (canActivate)
   *
   */
  userCheckAuthorization(requiredRoleForAuthentication: string): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({ fromString: `role=${requiredRoleForAuthentication}` })

    };
    return this.http.get<boolean>(
      'api/user/checkAuthorization',
      httpOptions
    );
  }

  /**
   * Helper for frontend authorization
   * Check user permittion for some restricted actions
   * like menu displaying..
   *
   */
  allowTo(permitedRole: string): boolean {
    const permissions = this.environment.permissions;
    if (!this.user._id && permitedRole === 'notUser') {
      return true;
    }
    if (!this.user._id) {
      return false;
    }
    const roleFromCookie = this.user.role;
    if (permissions[roleFromCookie].indexOf(permitedRole) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  restrictTo(restrictedRoles: string[]): boolean {
    if (!this.user) {
      return true;
    }
    const roleFromCookie = this.user.role;
    if (restrictedRoles.indexOf(roleFromCookie) >= 0) {
      return false;
    } else {
      return true;
    }
  }

}


