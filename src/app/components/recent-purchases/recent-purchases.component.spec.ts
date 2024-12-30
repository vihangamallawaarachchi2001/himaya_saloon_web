import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPurchasesComponent } from './recent-purchases.component';

describe('RecentPurchasesComponent', () => {
  let component: RecentPurchasesComponent;
  let fixture: ComponentFixture<RecentPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPurchasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
