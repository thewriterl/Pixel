import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'magazine-magazine',
        loadChildren: () => import('./magazine-magazine/magazine-magazine.module').then(m => m.PixelMagazineMagazineModule),
      },
      {
        path: 'subscription-plan-magazine',
        loadChildren: () =>
          import('./subscription-plan-magazine/subscription-plan-magazine.module').then(m => m.PixelSubscriptionPlanMagazineModule),
      },
      {
        path: 'log-magazine',
        loadChildren: () => import('./log-magazine/log-magazine.module').then(m => m.PixelLogMagazineModule),
      },
      {
        path: 'purchase-magazine',
        loadChildren: () => import('./purchase-magazine/purchase-magazine.module').then(m => m.PixelPurchaseMagazineModule),
      },
      {
        path: 'customer-magazine',
        loadChildren: () => import('./customer-magazine/customer-magazine.module').then(m => m.PixelCustomerMagazineModule),
      },
      {
        path: 'device-magazine',
        loadChildren: () => import('./device-magazine/device-magazine.module').then(m => m.PixelDeviceMagazineModule),
      },
      {
        path: 'publisher-magazine',
        loadChildren: () => import('./publisher-magazine/publisher-magazine.module').then(m => m.PixelPublisherMagazineModule),
      },
      {
        path: 'issue-magazine',
        loadChildren: () => import('./issue-magazine/issue-magazine.module').then(m => m.PixelIssueMagazineModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class PixelEntityModule {}
