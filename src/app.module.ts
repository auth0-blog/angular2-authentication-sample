import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './common/auth.guard';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { SignupComponent } from './components/signup';
import { AppComponent } from './components/app';

import { routes } from './app.routes';
import { AUTH_TOKEN } from './common/token';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    HomeComponent, LoginComponent, SignupComponent, AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(AUTH_TOKEN);
        },
        whitelistedDomains: ['localhost:3001']
      }
    }),
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    AuthGuard
  ]
})
export class AppModule {}
