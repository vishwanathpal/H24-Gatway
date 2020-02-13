import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { H24GatwaySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [H24GatwaySharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class H24GatwayHomeModule {}
