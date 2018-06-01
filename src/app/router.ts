import {Routes} from '@angular/router';
import {CounterComponent} from './common/counter/counter.component';
import {ChildComponent} from './common/child/child.component';
import {AuthComponent} from './common/auth/auth.component';
import {ExchangeComponent} from './common/exchange/exchange.component';
import {EntryComponent} from './admin/entry/entry.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/entry', pathMatch: 'full' },
  { path: 'entry',  component: EntryComponent},
  { path: 'child', component: ChildComponent},
  { path: 'counter', canActivate: [AuthComponent], component: CounterComponent},
  { path: 'exchange',  component: ExchangeComponent},
];
