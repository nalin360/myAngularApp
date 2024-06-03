import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { TheBindingsComponent } from './the-bindings/the-bindings.component';
/* 
The object passed to the @Component decorator is
 called the component's metadata.
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheBindingsComponent],
  template: ` <main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <!-- <app-home></app-home> -->
      <app-the-bindings></app-the-bindings>
    </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myAngularApp';
}
