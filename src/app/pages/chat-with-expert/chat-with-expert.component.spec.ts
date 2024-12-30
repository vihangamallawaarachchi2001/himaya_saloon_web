import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithExpertComponent } from './chat-with-expert.component';

describe('ChatWithExpertComponent', () => {
  let component: ChatWithExpertComponent;
  let fixture: ComponentFixture<ChatWithExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatWithExpertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWithExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
