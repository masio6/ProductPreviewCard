import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {}