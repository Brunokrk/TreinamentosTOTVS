import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTesteComponent } from './table-teste.component';

describe('TableTesteComponent', () => {
  let component: TableTesteComponent;
  let fixture: ComponentFixture<TableTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
