import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[]

  constructor() { }

  ngOnInit() {
  }

  deleteProduct(id) {
  }
}