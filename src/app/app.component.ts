import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './feature/home/home.component';
// import { TheBindingsComponent } from './feature/tempate-syntax/bindings-in-angular/';
import { BindingsInAngularComponent } from './feature/tempate-syntax/bindings-in-angular/bindings-in-angular.component';
/* 
The object passed to the @Component decorator is
 called the component's metadata.
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingsInAngularComponent],
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
      <app-bindings-in-angular></app-bindings-in-angular>
    </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myAngularApp';
}
