import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/data.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any ;
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  async getProducts(){
    this.products = await this.dataService.getProducts().toPromise();
    console.log(this.products);
  }

}
