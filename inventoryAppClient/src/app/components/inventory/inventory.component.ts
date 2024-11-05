import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../models/Product';
import { InventoryTableComponent } from "./inventoryTable/inventory-table.component";
import { InventoryHistogramComponent } from "./inventoryHistogram/inventory-histogram.component";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    InventoryTableComponent,
    InventoryHistogramComponent
],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  products: Product[] = [];
  view: 'table' | 'histogram' = 'table';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  toggleView() {
    this.view = this.view === 'table' ? 'histogram' : 'table';
  }
}
