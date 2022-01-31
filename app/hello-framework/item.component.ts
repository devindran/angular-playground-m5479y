import { Component, Input, AfterContentInit, QueryList, ContentChildren, forwardRef } from '@angular/core';

@Component({
  selector: 'item',
  template: `
  <div class="item">
    <span>Hello {{name}}!</span>
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
  @ContentChildren(ItemComponent) itemChildren: QueryList<ItemComponent>;

  ngAfterContentInit(): void {
    console.log(this.name, this.itemChildren);
  }
}
