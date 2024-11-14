import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletListPageComponent } from './wallet-list-page.component';

describe('WalletListPageComponent', () => {
  let component: WalletListPageComponent;
  let fixture: ComponentFixture<WalletListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
