
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {throwError as observableThrowError,  Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators'

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl: string = './assets/products/products.json';

    constructor(private _httpClient: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
                    .pipe(
                      catchError(this.handleError)
                    );
    }

    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
                   .pipe(
                     map(products => products.find(p => p.productId === id))
                    );
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return observableThrowError(err.message);
    };
}
