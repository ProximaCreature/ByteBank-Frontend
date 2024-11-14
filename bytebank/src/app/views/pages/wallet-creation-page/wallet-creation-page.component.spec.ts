import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletCreationPageComponent } from './wallet-creation-page.component';

describe('WalletCreationPageComponent', () => {
  let component: WalletCreationPageComponent;
  let fixture: ComponentFixture<WalletCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletCreationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
