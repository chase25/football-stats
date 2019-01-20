import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppMasthead } from './masthead/masthead.component';
import { AppFooter } from './app-footer/app-footer.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SkiplinksComponent } from './skiplinks/skiplinks.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';
import { DefaultLeagueTableComponent } from './default-league-table/default-league-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMasthead,
    AppFooter,
    ServerComponent,
    ServersComponent,
    SkiplinksComponent,
    PrimaryNavComponent,
    SecondaryNavComponent,
    DefaultLeagueTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
