import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratisionComponent } from './registratision.component';

describe('RegistratisionComponent', () => {
  let component: RegistratisionComponent;
  let fixture: ComponentFixture<RegistratisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistratisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistratisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
