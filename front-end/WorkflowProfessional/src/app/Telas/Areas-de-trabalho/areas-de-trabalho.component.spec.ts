/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AreasDeTrabalhoComponent } from './areas-de-trabalho.component';

describe('AreasDeTrabalhoComponent', () => {
  let component: AreasDeTrabalhoComponent;
  let fixture: ComponentFixture<AreasDeTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasDeTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasDeTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
