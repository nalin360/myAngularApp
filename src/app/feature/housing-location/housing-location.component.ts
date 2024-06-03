import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../housinglocation';

/* 

Angular matches selectors statically at compile-time. 
*/
@Component({
  selector: 'app-housing-location', //  host element
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
