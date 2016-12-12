/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdfOcrComponent } from './pdf-ocr.component';

describe('PdfOcrComponent', () => {
  let component: PdfOcrComponent;
  let fixture: ComponentFixture<PdfOcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfOcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
