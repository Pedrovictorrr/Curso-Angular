import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-angular';
  userName = 'Pedro';
  userData = {
    name : 'Pedro',
    email : 'pedro.teste@gmail.com'
  };
}
