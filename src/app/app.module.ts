import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { TitleComponent } from './components/title/title.component';
import { ShortcutsBoxComponent } from './components/shortcuts-box/shortcuts-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UsersComponent } from './components/users/users.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SearcherComponent,
    TitleComponent,
    ShortcutsBoxComponent,
    ThemeToggleComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
