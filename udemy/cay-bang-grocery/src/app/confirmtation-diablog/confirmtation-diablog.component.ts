import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../models/product-model';

@Component({
  selector: 'app-confirmtation-diablog',
  templateUrl: './confirmtation-diablog.component.html',
  styleUrls: ['./confirmtation-diablog.component.scss']
})
export class ConfirmtationDiablogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product,
              public dialogRef: MatDialogRef<ConfirmtationDiablogComponent, boolean>) {}


chooseYes() {
  this.dialogRef.close(true);
}
chooseNo() {
  this.dialogRef.close(false);
}

}
