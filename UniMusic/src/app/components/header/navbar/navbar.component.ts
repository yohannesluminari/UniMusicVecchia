import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  // Utilizza l'hook AfterViewInit per accedere al DOM dopo che la vista è stata inizializzata
  ngAfterViewInit() {
    // Abilita lo scrollspy di Bootstrap
    $('body').scrollspy({ target: '.navbar-fixed-top' });

    // Chiude il menu responsivo quando viene cliccato un link del menu
    $('.navbar-collapse ul li a').on('click', function() {
      $('.navbar-toggle:visible').click();
    });
  }
}
