import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceChatComponent } from './conference-chat.component';

describe('ConferenceChatComponent', () => {
  let component: ConferenceChatComponent;
  let fixture: ComponentFixture<ConferenceChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
