import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {ChildComponent} from './common/child/child.component';
import {LazyModule} from './lazy/lazy.module';
import { router } from './router';
import { ModalDirective } from './lazy/lazy/directives/modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ModalDirective,
  ],
  imports: [

    BrowserModule,
    FormsModule,
	RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
