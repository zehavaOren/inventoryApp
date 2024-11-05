import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Product } from '../../../models/Product';

import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-inventory-histogram',
  standalone: true,
  imports: [
    NgChartsModule
  ],
  templateUrl: './inventory-histogram.component.html',
  styleUrls: ['../inventory.component.css']
})
export class InventoryHistogramComponent implements OnInit {
  @Input() products: Product[] = [];

  public histogramData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'כמות מוצרים',
        data: [],
        backgroundColor: '#3f51b5'
      }
    ]
  };

  public histogramOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: { beginAtZero: true }
    }
  };

  public histogramType: 'bar' = 'bar';

  ngOnInit(): void {
    this.updateHistogramData();
  }

  updateHistogramData() {
    this.histogramData.labels = this.products.map(product => product.description);
    this.histogramData.datasets[0].data = this.products.map(product => product.quantity);
  }
}
