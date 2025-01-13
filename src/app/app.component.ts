import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fontAwesomeIcons } from '../shared/font-awesome-icons';
import { faCoffee, faHeadphones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wac-root',
  //  you need to add FontAwesomeModule to the imports of every module/component where you want to use fa-icon component, because of Angular module encapsulation
  imports: [FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'whatsapp-front';

  // We need to initialize the fontawesome library
  constructor(library: FaIconLibrary) {

    library.addIcons(...fontAwesomeIcons);
  }
}
