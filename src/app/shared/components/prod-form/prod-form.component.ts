import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { Iproduct, ProductsStatus } from '../../model/products';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {
productform ! : FormGroup
  constructor(private _uuidService :UuidService,
    private _productServvice : ProductsService) { }

  ngOnInit(): void {
    this.createproductform()
  }
createproductform(){
 this.productform = new FormGroup ({
  pname : new FormControl(null,[Validators.required]),
  pdetails : new FormControl(null,[Validators.required]),
 })
}

onProductAdd(){
  if(this.productform.valid){
   // console.log(this.productform.value);
    let product : Iproduct = {...this.productform.value,id :this._uuidService.uuid(),
                      Pstatus :  ProductsStatus.InProgress }
          this.productform.reset
    console.log(product);
    this._productServvice.addProduct(product)
    
    
  }
}
}
