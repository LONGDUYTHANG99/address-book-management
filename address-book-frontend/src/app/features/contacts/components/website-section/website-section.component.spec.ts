import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSectionComponent } from './website-section.component';

describe('WebsiteSectionComponent', () => {
  let component: WebsiteSectionComponent;
  let fixture: ComponentFixture<WebsiteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
