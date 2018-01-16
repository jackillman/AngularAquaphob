import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrophobicComponent } from './hydrophobic.component';

describe('HydrophobicComponent', () => {
  let component: HydrophobicComponent;
  let fixture: ComponentFixture<HydrophobicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrophobicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrophobicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
