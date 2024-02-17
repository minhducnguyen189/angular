import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import {MatTableModule} from '@angular/material/table';
 
@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, MatTableModule],
  exports: [CommonModule, MaterialModule, MatTableModule],
})
export class SharedModule {}