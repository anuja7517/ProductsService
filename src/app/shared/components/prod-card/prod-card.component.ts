import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, ProductsStatus } from '../../model/products';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {
@Input() product !: Iproduct
  constructor(private _productsService : ProductsService) { }

  ngOnInit(): void {
  }
  onprogressUpdate(){
    this._productsService.updateStatus(this.product.id, ProductsStatus.InProgress)
  }
  onDisptchedUpdate(){
    this._productsService.updateStatus(this.product.id,ProductsStatus.Dispatched)
  }
  onDeliveredUpdate(){
    this._productsService.updateStatus(this.product.id,ProductsStatus.Delivered)
  }
}
