import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from "../shared/shared.module";

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
        HttpClientModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
        ])
    ],
    providers: [ProductService, ProductGuardService]
})
export class ProductModule {
}
