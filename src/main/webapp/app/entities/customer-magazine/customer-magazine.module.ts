import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PixelSharedModule } from 'app/shared/shared.module';
import { CustomerMagazineComponent } from './customer-magazine.component';
import { CustomerMagazineDetailComponent } from './customer-magazine-detail.component';
import { CustomerMagazineUpdateComponent } from './customer-magazine-update.component';
import { CustomerMagazineDeleteDialogComponent } from './customer-magazine-delete-dialog.component';
import { customerRoute } from './customer-magazine.route';

@NgModule({
  imports: [PixelSharedModule, RouterModule.forChild(customerRoute)],
  declarations: [
    CustomerMagazineComponent,
    CustomerMagazineDetailComponent,
    CustomerMagazineUpdateComponent,
    CustomerMagazineDeleteDialogComponent,
  ],
  entryComponents: [CustomerMagazineDeleteDialogComponent],
})
export class PixelCustomerMagazineModule {}
