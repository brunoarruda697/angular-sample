import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ]
})
export class MaterialModule {}
