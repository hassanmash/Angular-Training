import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './picklist.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css'],
  providers: [ProductService]
})
export class PickListComponent {
  public sourceProducts: any;
  public doneSelection: boolean = false;
  public targetProducts: Product[] = [];
  
  constructor(private carService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    // console.log(this.carService.getProductsSmall().then(products => { console.log(products) }));
      this.carService.getProductsSmall().then(products => {
        console.log(products);
        this.sourceProducts = products;
      });
      this.targetProducts = [];
      this.primengConfig.ripple = true;
  }

  public ShowSelected() {
    this.doneSelection = !this.doneSelection;
  }
}
