import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { GetUser } from '../actions/user.actions';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private store: Store<State>,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    // to modify request
    // req = req.clone();
    // return next.handle(req);


    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

          // fire action to check user auth
          this.store.dispatch(new GetUser());

          // to modify response
          // event = event.clone({ body: this.modifyBody(event.body) });
        }
        return event;
      }
      ));

  }
  private modifyBody(body: any) {
    /*
    * write your logic to modify the body
    * */
    return body;
  }

}


