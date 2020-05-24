import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PixelSharedModule } from 'app/shared/shared.module';
import { LogMagazineComponent } from './log-magazine.component';
import { LogMagazineDetailComponent } from './log-magazine-detail.component';
import { LogMagazineUpdateComponent } from './log-magazine-update.component';
import { LogMagazineDeleteDialogComponent } from './log-magazine-delete-dialog.component';
import { logRoute } from './log-magazine.route';

@NgModule({
  imports: [PixelSharedModule, RouterModule.forChild(logRoute)],
  declarations: [LogMagazineComponent, LogMagazineDetailComponent, LogMagazineUpdateComponent, LogMagazineDeleteDialogComponent],
  entryComponents: [LogMagazineDeleteDialogComponent],
})
export class PixelLogMagazineModule {}
