import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinileComponent } from './vinile.component';

describe('VinileComponent', () => {
  let component: VinileComponent;
  let fixture: ComponentFixture<VinileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VinileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VinileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
