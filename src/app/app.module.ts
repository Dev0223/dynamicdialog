import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicDialogDemoComponent } from './components/dynamic-dialog-demo/dynamic-dialog-demo.component';
import { ProductListDemoComponent } from './components/product-list-demo/product-list-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicDialogDemoComponent,
    ProductListDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
