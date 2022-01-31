import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HelloFrameworkModule } from './hello-framework';
import { MyChildModule} from './my-child';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HelloFrameworkModule,
    MyChildModule
  ],
})
export class AppModule {}
