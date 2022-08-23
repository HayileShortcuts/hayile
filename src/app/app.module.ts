import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { TitleComponent } from './components/title/title.component';
import { BodyComponent } from './components/body/body.component';
import { ShortcutsBoxComponent } from './components/shortcuts-box/shortcuts-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SearcherComponent,
    TitleComponent,
    BodyComponent,
    ShortcutsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
