import { Injectable } from '@angular/core';
import { Iproduct, ProductsStatus, } from '../model/products';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArray: Array<Iproduct>= [
    {
      pname: 'Samsung 31',
      pdetails: 'Mobile 128 6',
      pstatus: ProductsStatus.InProgress,
      id: 'qwerty3456wertyu',
    },
    {
      pname: 'Redmi 5G',
      pdetails: 'Mobile 128 6',
      pstatus: ProductsStatus.Delivered,
      id: 'ghjkl5678rtyui',
},
];
  constructor(private _snackBarService : SnackbarService) { }

  fetchALiProducts(){
    // API call to get all products
    return this.productArray
  }
  addProduct(product:Iproduct){
    //ApI call to new product   // ApI call service kartho
    this.productArray.push(product);
    this._snackBarService.openSnackBar(` The Product ${product.pname} is added !!!`)
  }
  updateStatus(id: string, updateStatus:ProductsStatus){
    for (const obj of this.productArray) {
      if(obj.id === id){
        let oldStart = obj.pstatus;
        obj.pstatus = updateStatus;
        this._snackBarService.openSnackBar(`The Status of product ${obj.pname} is changed  from ${oldStart}to ${updateStatus}`)
        break;
      }
    }
  }
}
