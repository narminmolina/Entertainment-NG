import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSvgComponent } from './trending-svg.component';

describe('TrendingSvgComponent', () => {
  let component: TrendingSvgComponent;
  let fixture: ComponentFixture<TrendingSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
