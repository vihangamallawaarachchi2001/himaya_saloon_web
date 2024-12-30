import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPannelComponent } from './notification-pannel.component';

describe('NotificationPannelComponent', () => {
  let component: NotificationPannelComponent;
  let fixture: ComponentFixture<NotificationPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationPannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
