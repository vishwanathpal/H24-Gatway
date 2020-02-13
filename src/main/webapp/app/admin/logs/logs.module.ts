import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { H24GatwaySharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [H24GatwaySharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
