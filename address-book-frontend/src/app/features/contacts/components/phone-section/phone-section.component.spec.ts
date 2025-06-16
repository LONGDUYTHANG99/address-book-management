import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSectionComponent } from './phone-section.component';

describe('PhoneSectionComponent', () => {
  let component: PhoneSectionComponent;
  let fixture: ComponentFixture<PhoneSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
