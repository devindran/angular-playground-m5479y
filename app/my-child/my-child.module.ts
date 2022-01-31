import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyChildComponent } from './my-child.component';
@NgModule({
  declarations: [MyChildComponent],
  exports: [MyChildComponent],
  imports: [CommonModule],
})
export class MyChildModule {}
