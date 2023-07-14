import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemoComponent } from '../product-list-demo/product-list-demo.component';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-dynamic-dialog-demo',
  templateUrl: './dynamic-dialog-demo.component.html',
  styleUrls: ['./dynamic-dialog-demo.component.css'],
  providers: [DialogService,MessageService]
})

export class DynamicDialogDemoComponent {
  ref: DynamicDialogRef | undefined;
    
  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  show() {
      this.ref = this.dialogService.open(ProductListDemoComponent, {
          header: 'Select a Product',
          width: '70%',
          height: '80vh',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10000,
          maximizable: false,
          data : {
            'test' : 5000
          }
      });

      this.ref.onClose.subscribe((product: Product) => {
          if (product) {
              this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
          }
      });
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }
}
