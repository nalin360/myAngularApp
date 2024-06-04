import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings-in-angular',
  standalone: true,
  imports: [],
  templateUrl: './bindings-in-angular.component.html',
  styleUrl: './bindings-in-angular.component.css',
})
/* 
text interpolations
property binding
event binding
two-way binding

////

*Angular's Change Detection algorithm is responsible for keeping the view and the model in sync.
*Change detection is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated.
*Angular walks your components from top to bottom, looking for changes.
*Angular runs its change detection mechanism periodically so that changes to the data model are reflected in an application’s view.

* Change detection can be triggered either manually or through an asynchronous event (for example, a user interaction or an XMLHttpRequest completion).
 */
export class BindingsInAngularComponent {
  public firstName = 'sam';
  public LastName = 'sharma';
  public isDisabled = true;
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  constructor() {}
  // text interpolation

  greatings(): string {
    return this.firstName + ' ' + this.LastName;
  }

  onClick() {
    if (this.isDisabled === true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }
  //
}
