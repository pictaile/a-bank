import { Component, OnInit } from '@angular/core';
import {ExchangeService} from '../services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  public currencies: any[] = [];
  myDate = new Date(1961, 3, 12);

  pi: number = 3.1415;


  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.exchangeService.getCurrencies().subscribe((items: any[]) => {
      this.currencies = items;
    });
  }

}
