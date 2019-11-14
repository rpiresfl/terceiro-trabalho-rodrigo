import { Component, OnInit } from '@angular/core';
import { Money } from '../money';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  newMoney: Money;
  moneys: Money[];
  firstInsert: boolean = true;

  title = "Money";
  type = "LineChart";
  data = [["", 0]];
  columnNames = ['value', 'Valor'];
  options = { };
  width = 500;
  height = 400;

  constructor() { }

  ngOnInit() {
    this.newMoney = new Money();
    this.moneys = [];
  }

  save() {
    this.moneys.push(this.newMoney);
    this.data.push([this.newMoney.date.toString(), this.newMoney.value]);
    this.data = Object.assign([], this.data);
    this.newMoney = new Money();    
  }

}
