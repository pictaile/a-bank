import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20180524&json';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private httpClient: HttpClient) { }

  public getCurrencies() {
    return this.httpClient.get(URL);
  }
}
