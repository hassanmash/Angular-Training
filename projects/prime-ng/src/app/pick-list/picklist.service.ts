import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return firstValueFrom(this.http.get<any>('assets/products-small.json'))
            .then(res => <Product>res.data)
            .then(data=>{
                // console.log(data);
                return data;
            });
    }

}