import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list-demo',
  templateUrl: './product-list-demo.component.html',
  styleUrls: ['./product-list-demo.component.css']
})
export class ProductListDemoComponent {
  public products : Product[] = [
    {
      "price" : 5000,
      "name" : "5000",
    }
  ]
  constructor(
      public ref: DynamicDialogRef,
      public config: DynamicDialogConfig
  ) {
    console.log(this.config.data)
  }

  ngOnInit() { }
}
