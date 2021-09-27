/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top-20Component } from './top-20.component';

describe('Top-20Component', () => {
  let component: Top-20Component;
  let fixture: ComponentFixture<Top-20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top-20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top-20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
