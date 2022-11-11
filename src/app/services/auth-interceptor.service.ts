import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    const token = sessionStorage.getItem('token');

    let request = req;

    // si ya hay un token hace la request para con header autorizados por el token
    if(token){
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      })
    }

    // la request que obtiene el interceptor se la para al handle
    return next.handle(request).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        let err_msg = ''
        if (err.status === 401 || 403) {
          err_msg = 'NO AUTORIZADO'
        }

        return throwError(() => err_msg );
      })
    );
  }
}
