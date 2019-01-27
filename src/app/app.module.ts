import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AppMasthead } from './components/masthead/masthead.component';
import { AppFooter } from './components/app-footer/app-footer.component';
import { SkiplinksComponent } from './components/skiplinks/skiplinks.component';
import { PrimaryNavComponent } from './components/primary-nav/primary-nav.component';
import { SecondaryNavComponent } from './components/secondary-nav/secondary-nav.component';
import { DefaultLeagueTableComponent } from './components/default-league-table/default-league-table.component';
import { AppRouter } from './app.router.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMasthead,
    AppFooter,
    SkiplinksComponent,
    PrimaryNavComponent,
    SecondaryNavComponent,
    DefaultLeagueTableComponent
  ],
  imports: [
    AppRouter,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
