import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from "./product-detail.component";
import { ProductGuardService } from './product-guardservice';
import { ProductService } from './product.service';


@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent
    ],
    imports: [
        SharedModule,
        ProductRoutingModule,
        HttpClientModule
    ],
    providers: [ProductService, ProductGuardService]
})
export class ProductModule {
}
