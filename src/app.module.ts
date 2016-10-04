import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { App } from './app';

import { routes } from './app.routes';

@NgModule({
  bootstrap: [App],
  declarations: [
    Home, Login, Signup, App
  ],
  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    AuthGuard, ...AUTH_PROVIDERS
  ]
})
export class AppModule {}
