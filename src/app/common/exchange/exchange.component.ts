import { Component, OnInit } from '@angular/core';
import {ExchangeService} from '../services/exchange.service';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  public currencies: any[] = [];

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.exchangeService.getCurrencies()
      .subscribe((items: any[]) => {
        this.currencies = items.filter(item => item.cc === 'EUR' || item.cc === 'USD');
    });
  }

}
