import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './common/child/child.component';
import { CounterComponent } from './common/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
