// diccionario de datos 002

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ToastrModule.forRoot(
      {
        autoDismiss: true,
        timeOut: 5000, 
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        iconClasses: {
          success: 'toast-success fa fa-check-circle',  // Ícono para éxito
          error: 'toast-error fa fa-times-circle',      // Ícono para error
        },
        progressAnimation: 'increasing',
        easeTime: 500
      }
    )),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch())]
};
