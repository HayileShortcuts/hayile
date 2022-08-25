import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { TitleComponent } from './components/title/title.component';
import { ShortcutsBoxComponent } from './components/shortcuts-box/shortcuts-box.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SearcherComponent,
    TitleComponent,
    ShortcutsBoxComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
