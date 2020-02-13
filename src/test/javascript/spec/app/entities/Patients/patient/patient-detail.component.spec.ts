import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { H24GatwayTestModule } from '../../../../test.module';
import { PatientDetailComponent } from 'app/entities/Patients/patient/patient-detail.component';
import { Patient } from 'app/shared/model/Patients/patient.model';

describe('Component Tests', () => {
  describe('Patient Management Detail Component', () => {
    let comp: PatientDetailComponent;
    let fixture: ComponentFixture<PatientDetailComponent>;
    const route = ({ data: of({ patient: new Patient(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [H24GatwayTestModule],
        declarations: [PatientDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(PatientDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PatientDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load patient on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.patient).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
