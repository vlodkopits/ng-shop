import { Component, OnInit, Input, Inject } from '@angular/core';
import { Product } from '../models/product';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {
  product: Product;

  constructor(
    private dialogRef: MatDialogRef<ShopProductComponent>,
    @Inject(MAT_DIALOG_DATA) product
  ) { 
    this.product = product;
  }

  ngOnInit() {
    console.log(this.product);
  }

  closeDialog() {
    this.dialogRef.close();
}

}
