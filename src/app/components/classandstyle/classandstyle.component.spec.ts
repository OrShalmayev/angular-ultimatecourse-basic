import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassandstyleComponent } from './classandstyle.component';

describe('ClassandstyleComponent', () => {
  let component: ClassandstyleComponent;
  let fixture: ComponentFixture<ClassandstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassandstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassandstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
