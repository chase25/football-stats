import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppMasthead } from './components/masthead/masthead.component';
import { AppFooter } from './components/app-footer/app-footer.component';
import { SkiplinksComponent } from './components/skiplinks/skiplinks.component';
import { PrimaryNavComponent } from './components/primary-nav/primary-nav.component';
import { SecondaryNavComponent } from './components/secondary-nav/secondary-nav.component';
import { DefaultLeagueTableComponent } from './components/default-league-table/default-league-table.component';

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
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
