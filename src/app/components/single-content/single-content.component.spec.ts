import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContentComponent } from './single-content.component';

describe('SingleContentComponent', () => {
  let component: SingleContentComponent;
  let fixture: ComponentFixture<SingleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
