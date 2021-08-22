import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanticaDetailsComponent } from './quantica-details.component';

describe('QuanticaDetailsComponent', () => {
  let component: QuanticaDetailsComponent;
  let fixture: ComponentFixture<QuanticaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanticaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanticaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
