
import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    window: any;

    constructor(@Inject(DOCUMENT) private _document: any) {
        this.window = this._document.defaultView
        console.log('document', this.window)
      }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


  
    if(this.window && this.window.keycloak && this.window.keycloak.token) {
        const token =  this.window?.keycloak?.token ;

        // Ajout du token dans les entêtes de la requête
        const authReq = request.clone({
            headers: request.headers.append('Authorization', `Bearer ${token}`)
        
        });

        // Envoi de la requête avec les nouvelles entêtes
        return next.handle(authReq);
    }

    return next.handle(request);
  }

}