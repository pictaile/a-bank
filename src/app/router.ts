import {Routes} from '@angular/router';
import {CounterComponent} from './common/counter/counter.component';
import {ChildComponent} from './common/child/child.component';
import {AuthComponent} from './common/auth/auth.component';
import {ExchangeComponent} from './common/exchange/exchange.component';

export const appRoutes: Routes = [
  {path: '', component: ChildComponent },
  { path: 'child', component: ChildComponent},
  { path: 'counter', canActivate: [AuthComponent], component: CounterComponent},
  { path: 'exchange',  component: ExchangeComponent},
];
