import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyProfileComponent } from './faculty-profile.component';

describe('FacultyProfileComponent', () => {
  let component: FacultyProfileComponent;
  let fixture: ComponentFixture<FacultyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
