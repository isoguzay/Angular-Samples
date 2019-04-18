import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers: Customer[] = []
  selectedCustomer: Customer;
  @Input() city: string;


  /* on load event */
  ngOnInit() {
    this.customers = [
      { id: 1, name: "isoguzay", surname: "ay", age: 32 },
      { id: 2, name: "ioay", surname: "ay", age: 28 }
    ]
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

}
