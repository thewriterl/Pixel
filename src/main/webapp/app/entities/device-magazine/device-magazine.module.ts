import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PixelSharedModule } from 'app/shared/shared.module';
import { DeviceMagazineComponent } from './device-magazine.component';
import { DeviceMagazineDetailComponent } from './device-magazine-detail.component';
import { DeviceMagazineUpdateComponent } from './device-magazine-update.component';
import { DeviceMagazineDeleteDialogComponent } from './device-magazine-delete-dialog.component';
import { deviceRoute } from './device-magazine.route';

@NgModule({
  imports: [PixelSharedModule, RouterModule.forChild(deviceRoute)],
  declarations: [
    DeviceMagazineComponent,
    DeviceMagazineDetailComponent,
    DeviceMagazineUpdateComponent,
    DeviceMagazineDeleteDialogComponent,
  ],
  entryComponents: [DeviceMagazineDeleteDialogComponent],
})
export class PixelDeviceMagazineModule {}
