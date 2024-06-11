import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  ngOnInit() {
    const themeSwitch = document.getElementById('theme') as HTMLInputElement;

    if (localStorage.getItem('theme') === 'light') {
      this.applyLightTheme();
      themeSwitch.checked = false;
    } else {
      this.applyDarkTheme();
      themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', () => {
      if (themeSwitch.checked) {
        this.applyDarkTheme();
        localStorage.setItem('theme', 'dark');
      } else {
        this.applyLightTheme();
        localStorage.setItem('theme', 'light');
      }
    });
  }

  applyLightTheme() {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }

  applyDarkTheme() {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }
}
