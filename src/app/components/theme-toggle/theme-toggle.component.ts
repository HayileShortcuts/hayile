import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Theme } from 'src/app/models/Theme';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  theme: Theme = 'light-theme';
  hayileLogo = this.document.getElementById('hayile-logo');
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (
      localStorage.getItem('theme') != undefined ||
      localStorage.getItem('theme') != null
    ) {
      this.initializeTheme(localStorage.getItem('theme'));
    } else {
      this.initializeTheme(this.theme);
    }
  }

  initializeTheme(themevalue: any) {
    this.theme = themevalue;
    this.toggleHayileLogo();
    this.themeIcon();
    this.renderer.addClass(this.document.body, themevalue);
  }

  toggleTheme() {
    if (this.theme === 'light-theme') {
      this.document.body.classList.replace(this.theme, 'dark-theme');
      localStorage.removeItem('theme');
      this.theme = 'dark-theme';
      localStorage.setItem('theme', 'dark-theme');
    } else {
      this.document.body.classList.replace(this.theme, 'light-theme');
      localStorage.removeItem('theme');
      this.theme = 'light-theme';
      localStorage.setItem('theme', 'light-theme');
    }
    this.toggleHayileLogo();
  }

  toggleHayileLogo() {
    this.theme === 'light-theme'
      ? this.renderer.setAttribute(
          this.hayileLogo,
          'src',
          '../../../assets/icons/hayile-dark.svg'
        )
      : this.renderer.setAttribute(
          this.hayileLogo,
          'src',
          '../../../assets/icons/hayile-light.svg'
        );
  }

  themeIcon() {
    return this.theme === 'light-theme'
      ? '../../../assets/icons/moon.svg'
      : '../../../assets/icons/sun.svg';
  }
}
