#Anatomy of a component
Every component must have:

A TypeScript class with behaviors such as handling user input and fetching data from a server
An HTML template that controls what renders into the DOM
A CSS selector that defines how the component is used in HTML

adding a @Component decorator on top of the TypeScript class:

```
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
})
export class ProfilePhoto { }
```
> The object passed to the @Component decorator is called the component's metadata.
This includes the selector, template, and other properties described throughout this guide.

> Both templateUrl and styleUrl are relative to the directory in which the component resides.

---
#Importing and using components

Angular supports two ways of making a component available to other components: as a standalone component or in an NgModule.
---

#Component selectors
>Angular matches selectors statically at compile-time.
 Changing the DOM at run-time, either via Angular bindings or with DOM APIs, does not affect the components rendered 


 
| Selector type	| Description | Examples |
| ----------- | ----------- |
| Type selector	| Matches elements based on their HTML tag name, or node name. |	profile-photo |
| Attribute selector	| Matches elements based on the presence of an HTML attribute and, optionally, an exact value for that attribute. | 	[dropzone] [type="reset"] |
| Class selector | Matches elements based on the presence of a CSS class. |	.menu-item |

## pseudo-class

1. The :not pseudo-class
2. Combining selectors

## Choosing a selector
>The vast majority of components should use a custom element name as their selector. All custom element names should include a hyphen as described by the HTML specification.

## When to use an attribute selector


---

# Binding
- text interpolations
- property binding
- event binding
- two-way binding

## text interpolations

> Angular's Change Detection algorithm is responsible for keeping the view and the model in sync. Change detection is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated.
> Angular walks your components from top to bottom, looking for changes.
> Angular runs its change detection mechanism periodically so that changes to the data model are reflected in an application’s view.

> Change detection can be triggered either manually or through an asynchronous event (for example, a user interaction or an XMLHttpRequest completion).
## property binding

 To bind to an element's property, enclose it in square brackets, [], which identifies the property as a target property.