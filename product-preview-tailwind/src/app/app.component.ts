import { Component, signal } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly title = signal('product-preview-tailwind');
}