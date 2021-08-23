import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanticaQuotesFormComponent } from './quantica-quotes-form.component';

describe('QuanticaQuotesFormComponent', () => {
  let component: QuanticaQuotesFormComponent;
  let fixture: ComponentFixture<QuanticaQuotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanticaQuotesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanticaQuotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
