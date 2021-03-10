import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellListComponent } from './well-list.component';

describe('WellListComponent', () => {
  let component: WellListComponent;
  let fixture: ComponentFixture<WellListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
