import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiaoComponent } from './fiao.component';

describe('FiaoComponent', () => {
  let component: FiaoComponent;
  let fixture: ComponentFixture<FiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
