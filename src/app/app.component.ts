import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  filas = new Array(7).fill(null);
  columnas = new Array(7).fill(null);

  title = 'hundirFlota';
}
