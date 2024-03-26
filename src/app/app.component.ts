import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Emergencias',
      url: '/folder/Emergencias-María-Teresa',
      icon: 'call',
    },
  ];
  constructor() {}
}
