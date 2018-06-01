import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './common/child/child.component';
import { CounterComponent } from './common/counter/counter.component';
import {appRoutes} from './router';
import {AuthComponent} from './common/auth/auth.component';
import { BoldDirective } from './common/directive/bold.directive';
import {CounterService} from './service/counter.service';
import { ExchangeComponent } from './common/exchange/exchange.component';
import {ExchangeService} from './common/services/exchange.service';
import { FactorialPipe } from './common/pipes/factorial.pipe';
import { EntryComponent } from './admin/entry/entry.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CounterComponent,
    BoldDirective,
    ExchangeComponent,
    FactorialPipe,
    EntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthComponent, CounterService, ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
