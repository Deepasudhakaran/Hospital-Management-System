import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationloginComponent } from './administrationlogin.component';

describe('AdministrationloginComponent', () => {
  let component: AdministrationloginComponent;
  let fixture: ComponentFixture<AdministrationloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
