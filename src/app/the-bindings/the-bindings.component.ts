import { Component } from '@angular/core';

@Component({
  selector: 'app-the-bindings',
  standalone: true,
  imports: [],
  templateUrl: './the-bindings.component.html',
  styleUrl: './the-bindings.component.css',
})
export class TheBindingsComponent {
  currentCustomer = 'Maria';
  title = 'Featured product';

  getVal(): number {
    return 2;
  }
}
