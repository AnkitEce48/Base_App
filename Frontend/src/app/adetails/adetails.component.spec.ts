import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdetailsComponent } from './adetails.component';

describe('AdetailsComponent', () => {
  let component: AdetailsComponent;
  let fixture: ComponentFixture<AdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
