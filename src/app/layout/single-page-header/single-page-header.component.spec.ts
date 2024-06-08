import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageHeaderComponent } from './single-page-header.component';

describe('SinglePageHeaderComponent', () => {
  let component: SinglePageHeaderComponent;
  let fixture: ComponentFixture<SinglePageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
