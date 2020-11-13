import { MatCardModule } from '@angular/material/card';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatCardModule,
  ],
  exports: [MatCardModule]
})
export class MaterialModule {}