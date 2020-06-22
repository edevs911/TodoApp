import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  products: Array<any>;
  productId: string;
  images: Array<any>;

  constructor(
    private dataService:DataService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('index');
    this.onGetProduct();
  }

  async onGetProduct(){
    console.log("onGetProduct", this.productId);
    if(this.productId){
      this.products = await this.dataService.getProducts().toPromise();
      this.product = this.products['listPostings'][this.productId];

      this.images = this.product.pictures.map(image => {
        return {source: image.url730x532, alt:'', title: image.title}
      })
      console.log(this.product);
    }
  }
  
}
