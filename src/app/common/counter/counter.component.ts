import { Component, OnInit, Input } from '@angular/core';
import {AuthComponent} from '../auth/auth.component';
import {CounterService} from '../../service/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [AuthComponent]
})
export class CounterComponent {
  counter = 0;
  constructor(private authComponent: AuthComponent, private counterService: CounterService) {
    console.log(`CounterComponent ${authComponent.name}`);
    this.counter = counterService.getCounter();
  }
  increment() {
    this.counter++;
    this.save();
  }

  decrement() {
    this.counter--;
    this.save();
  }

  save() {
    this.counterService.save(this.counter);
  }
  onLeave(val) {
    console.log(val);
  }
}
