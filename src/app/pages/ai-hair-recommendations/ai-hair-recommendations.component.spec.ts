import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiHairRecommendationsComponent } from './ai-hair-recommendations.component';

describe('AiHairRecommendationsComponent', () => {
  let component: AiHairRecommendationsComponent;
  let fixture: ComponentFixture<AiHairRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiHairRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiHairRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
