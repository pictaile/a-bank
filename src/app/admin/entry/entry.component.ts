import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { NgModel} from '@angular/forms';

class Phone {
  title: string;
  price: number;
  company: string;
  constructor(title, price, company) {
    this.title  = title;
    this.price  = price;
    this.company  = company;

  }
}

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent  {
  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'userName': ['Tom', [Validators.required]],

      'userEmail': ['', [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]],

      'phones': formBuilder.array([
        ['+3', Validators.required]
      ])
    });
  }

  submit() {
    console.log(this.myForm);
  }

}
