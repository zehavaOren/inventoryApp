import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-inventory-table',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatTableModule
  ],
  templateUrl: './inventory-table.component.html',
  styleUrls: ['../inventory.component.css']
})
export class InventoryTableComponent {
  @Input() products: Product[] = [];
  filterDate: Date | null = null;
  filterWarehouse: string = '';

  filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchDate = this.filterDate ? new Date(product.date).toDateString() === this.filterDate.toDateString() : true;
      const matchWarehouse = this.filterWarehouse ? product.warehouse.toLowerCase().includes(this.filterWarehouse.toLowerCase()) : true;
      return matchDate && matchWarehouse;
    });
  }
}
