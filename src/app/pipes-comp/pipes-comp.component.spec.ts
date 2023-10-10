import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesCompComponent } from './pipes-comp.component';

describe('PipesCompComponent', () => {
  let component: PipesCompComponent;
  let fixture: ComponentFixture<PipesCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesCompComponent]
    });
    fixture = TestBed.createComponent(PipesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
