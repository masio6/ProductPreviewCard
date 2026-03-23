import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  @Input() disabled = false;

  get classes() {
  switch (this.variant) {
    case 'secondary':
      return 'bg-gray-500 text-white hover:bg-gray-600';
    case 'ghost':
      return 'bg-transparent text-[#3c8067] border border-[#3c8067] hover:bg-[#f2f2f2]';
    default:
      return 'bg-[#3c8067] text-white hover:bg-[#1a4032]';
  }
}
}