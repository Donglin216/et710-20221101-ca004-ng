import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmHomeComponent } from './jm-home.component';

describe('JmHomeComponent', () => {
  let component: JmHomeComponent;
  let fixture: ComponentFixture<JmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
