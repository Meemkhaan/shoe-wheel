import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthLayerOptionsComponent } from './fourth-layer-options.component';

describe('FourthLayerOptionsComponent', () => {
  let component: FourthLayerOptionsComponent;
  let fixture: ComponentFixture<FourthLayerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthLayerOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthLayerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
