import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestadeComponent } from './listestade.component';

describe('ListestadeComponent', () => {
  let component: ListestadeComponent;
  let fixture: ComponentFixture<ListestadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListestadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListestadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
