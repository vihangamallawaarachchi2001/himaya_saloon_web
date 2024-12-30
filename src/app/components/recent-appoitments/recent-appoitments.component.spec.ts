import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAppoitmentsComponent } from './recent-appoitments.component';

describe('RecentAppoitmentsComponent', () => {
  let component: RecentAppoitmentsComponent;
  let fixture: ComponentFixture<RecentAppoitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAppoitmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentAppoitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
