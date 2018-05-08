import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {

    product: IProduct;
    pageTitle: string = "Product Detail";

    constructor(private _productService: ProductService,
                private _route: ActivatedRoute,
                private _router: Router) {

    }

    ngOnInit(): void {
        let id = parseInt(String(this._route.snapshot.paramMap.get("id")));
        this._productService.getProduct(id).subscribe(product => this.product = ((product) as IProduct));
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}