import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTesteComponent } from './tabela-teste.component';

describe('TabelaTesteComponent', () => {
  let component: TabelaTesteComponent;
  let fixture: ComponentFixture<TabelaTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
