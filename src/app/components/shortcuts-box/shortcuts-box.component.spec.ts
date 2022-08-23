import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutsBoxComponent } from './shortcuts-box.component';

describe('ShortcutsBoxComponent', () => {
  let component: ShortcutsBoxComponent;
  let fixture: ComponentFixture<ShortcutsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcutsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortcutsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
