import { Component, Input } from '@angular/core';

/*
  Generated class for the Taxonomies component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'taxonomies',
  templateUrl: 'taxonomies.html'
})
export class TaxonomiesComponent {
  @Input() list: Array<Object>;
  @Input() onClick: (e, item) => void;

  constructor() {}

}
