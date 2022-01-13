import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Worldcup2022Component } from './worldcup2022.component';

describe('Worldcup2022Component', () => {
  let component: Worldcup2022Component;
  let fixture: ComponentFixture<Worldcup2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Worldcup2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Worldcup2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
