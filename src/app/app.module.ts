import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopNavComponent } from './shop-nav/shop-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule , 
  MatMenuModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCardModule
} from '@angular/material';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ShopContactsComponent } from './shop-contacts/shop-contacts.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    ShopNavComponent,
    ShopProductsComponent,
    ShopContactsComponent,
    ShopProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule
  ],
  entryComponents: [ShopProductComponent],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
