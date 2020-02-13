import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patient',
        loadChildren: () => import('./Patients/patient/patient.module').then(m => m.PatientsPatientModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class H24GatwayEntityModule {}
