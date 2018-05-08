import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IProduct } from './product';
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";


@Injectable()
export class ProductService {
    private _productUrl: string = 'api/products/products.json';

    constructor(private _httpClient: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

   
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    };
}
