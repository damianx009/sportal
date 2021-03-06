import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';

@Injectable()
export class HttpHeadersConfigInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthenticateService,
                private router: Router,
                private routerService: RouterService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.authService.getToken();

        const reqUrl: string = 'http://'+window.location.host + req.url;
        req = req.clone({ url: reqUrl });

        if (req.url.includes('/api/protected/')) {
            if (token) {
                req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            } else {               
                this.routerService.loginAndRedirectToUrl(this.router.url);
                return throwError('request interrupted');
            }
        }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.authService.logout();
                }
                return throwError(error);
            })
        );
    }
    
}