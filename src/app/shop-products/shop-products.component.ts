import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShopProductComponent } from '../shop-product/shop-product.component';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {
  public products;

  constructor(
    private productList: ProductsService,
    public dialog: MatDialog
  ) { 
  }

  ngOnInit() {
    this.products = this.productList.products;
  }

  openDialog(product): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;
    this.dialog.open(ShopProductComponent, dialogConfig);
  }

}
