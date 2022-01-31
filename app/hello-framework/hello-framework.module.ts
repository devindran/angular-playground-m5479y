import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../shared';

import { HelloFrameworkComponent } from './hello-framework.component';
import { ItemComponent} from './item.component';
@NgModule({
  declarations: [HelloFrameworkComponent, ItemComponent],
  exports: [HelloFrameworkComponent, ItemComponent],
  imports: [
    SharedModule,
    MaterialModule,
  ],
})
export class HelloFrameworkModule {}
