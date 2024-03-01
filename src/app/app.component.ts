import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/service/products.service';
import { Iproduct } from './shared/model/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProductsService';
  prodArr ! : Array<Iproduct>
  constructor(private _productsService:ProductsService){

  }
  ngOnInit(): void {
    this.prodArr = this._productsService.fetchALiProducts()
  }
}
