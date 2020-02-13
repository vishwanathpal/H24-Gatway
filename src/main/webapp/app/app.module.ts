import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { H24GatwaySharedModule } from 'app/shared/shared.module';
import { H24GatwayCoreModule } from 'app/core/core.module';
import { H24GatwayAppRoutingModule } from './app-routing.module';
import { H24GatwayHomeModule } from './home/home.module';
import { H24GatwayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    H24GatwaySharedModule,
    H24GatwayCoreModule,
    H24GatwayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    H24GatwayEntityModule,
    H24GatwayAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class H24GatwayAppModule {}
