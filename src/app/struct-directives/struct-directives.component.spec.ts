import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirectivesComponent } from './struct-directives.component';

describe('StructDirectivesComponent', () => {
  let component: StructDirectivesComponent;
  let fixture: ComponentFixture<StructDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructDirectivesComponent]
    });
    fixture = TestBed.createComponent(StructDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
