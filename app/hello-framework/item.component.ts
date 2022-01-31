import { Component, Input, AfterContentInit, QueryList, ContentChildren, forwardRef } from '@angular/core';

@Component({
  selector: 'item',
  template: `
  <div class="item">
    <span>--> This is my title: {{name}}!</span>
    <ng-content></ng-content>
  </div>
  `,
  styles: [`
  .item { 
    padding: 8px;
    background: rgba(0, 0, 0, .12)
  }
  `]
})
export class ItemComponent implements AfterContentInit  {
  @Input() name: string;
  @ContentChildren('childContent') child: any;

  ngAfterContentInit(): void {
    console.log(this.name, this.child);
  }
}
