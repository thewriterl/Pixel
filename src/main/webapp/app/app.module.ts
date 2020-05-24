import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PixelSharedModule } from 'app/shared/shared.module';
import { PixelCoreModule } from 'app/core/core.module';
import { PixelAppRoutingModule } from './app-routing.module';
import { PixelHomeModule } from './home/home.module';
import { PixelEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PixelSharedModule,
    PixelCoreModule,
    PixelHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PixelEntityModule,
    PixelAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class PixelAppModule {}
