import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapItemsComponent } from './bootstrap-items.component';

describe('BootstrapItemsComponent', () => {
  let component: BootstrapItemsComponent;
  let fixture: ComponentFixture<BootstrapItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
