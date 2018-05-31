import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counter = 100;
  constructor() { }
  save(counter) {
    this.counter = counter;
  }
  public getCounter() {
    return this.counter;
  }
}
