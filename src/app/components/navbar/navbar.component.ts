import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  darkTheme: boolean;

  constructor(private renderer: Renderer2) {
    this.darkTheme = false;
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    if(!this.darkTheme) {
      this.darkTheme = true;
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.darkTheme = false;
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
