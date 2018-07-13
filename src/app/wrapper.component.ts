import { Component, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  show = true;
  items = [0, 0, 0];
  // To let the wrapper control the instantiation of its children, we need to give it a template for the content, rather than the content itself.
  // The wrapper cannot use <ng-content> anymore, since it receives a template.
  @ContentChild(TemplateRef) template: TemplateRef;
}
