// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { BidiModule } from '@angular/cdk/bidi';
import { InventoryTableComponent } from './components/inventory/inventoryTable/inventory-table.component';
import { InventoryHistogramComponent } from './components/inventory/inventoryHistogram/inventory-histogram.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    InventoryComponent ,
    BidiModule,
    InventoryTableComponent,
    InventoryHistogramComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventoryApp';
}
