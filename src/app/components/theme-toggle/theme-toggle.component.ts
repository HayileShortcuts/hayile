import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Theme } from 'src/app/models/Theme';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  theme: Theme = 'light-theme';
  hayileLogo = this.document.getElementById('hayile-logo');

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit() {
    this.initializeTheme();
  }

  initializeTheme() {
    this.renderer.addClass(this.document.body, this.theme);
  }

  toggleTheme() {
    if (this.theme === 'light-theme') {
      this.document.body.classList.replace(this.theme, 'dark-theme');
      this.theme = 'dark-theme';
    } else {
      this.document.body.classList.replace(this.theme, 'light-theme');
      this.theme = 'light-theme';
    }
    this.toggleHayileLogo();
  }

  toggleHayileLogo() {
    this.theme === 'light-theme'
      ? this.renderer.setAttribute(this.hayileLogo, 'src', '../../../assets/icons/hayile-dark.svg')
      : this.renderer.setAttribute(this.hayileLogo, 'src', '../../../assets/icons/hayile-light.svg');
  }

  themeIcon() {
    return this.theme === 'light-theme'
      ? '../../../assets/icons/moon.svg'
      : '../../../assets/icons/sun.svg';
  }
}
