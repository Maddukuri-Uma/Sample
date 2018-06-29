/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImagefileComponent } from './imagefile.component';

describe('ImagefileComponent', () => {
  let component: ImagefileComponent;
  let fixture: ComponentFixture<ImagefileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagefileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
