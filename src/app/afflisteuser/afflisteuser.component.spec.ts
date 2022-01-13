import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflisteuserComponent } from './afflisteuser.component';

describe('AfflisteuserComponent', () => {
  let component: AfflisteuserComponent;
  let fixture: ComponentFixture<AfflisteuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfflisteuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflisteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
