import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanticaQuotesComponent } from './quantica-quotes.component';

describe('QuanticaQuotesComponent', () => {
  let component: QuanticaQuotesComponent;
  let fixture: ComponentFixture<QuanticaQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanticaQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanticaQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
