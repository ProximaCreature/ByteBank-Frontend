import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBillsTableComponent } from './wallet-bills-table.component';

describe('WalletBillsTableComponent', () => {
  let component: WalletBillsTableComponent;
  let fixture: ComponentFixture<WalletBillsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletBillsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletBillsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
