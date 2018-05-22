import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { APP_ROUTES } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { SessionDetailsResolver } from './resolvers/sessiondetails-resolver';

@NgModule({
  declarations: [AppComponent, SessionListComponent, SessionDetailsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
