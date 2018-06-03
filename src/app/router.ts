import {Routes} from '@angular/router';
import {ChildComponent} from './common/child/child.component';
import {ExchangeComponent} from './common/exchange/exchange.component';
import {EntryComponent} from './admin/entry/entry.component';

export const router: Routes = [
  {path: '', redirectTo: '/child', pathMatch: 'full' },
  { path: 'child', component: ChildComponent},
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];
