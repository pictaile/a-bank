import { Component, ViewChild } from '@angular/core';
import {AuthComponent} from './common/auth/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authComponent: AuthComponent) {
    authComponent.name = 'Piter';
    console.log(`AppComponent ${authComponent.name}`);
  }
  public name = 'Tom';
}
