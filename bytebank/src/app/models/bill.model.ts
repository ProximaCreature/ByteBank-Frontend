export class Bill {
  id: number | null;
  walletId: number;
  name: string;
  faceValue: number;
  expirationDate: string;
  currency: 'DOLLAR' | 'SOL';

  constructor(
    id: number | null,
    walletId: number,
    name: string,
    faceValue: number,
    expirationDate: string,
    currency: 'DOLLAR' | 'SOL'
  ) {
    this.id = id;
    this.walletId = walletId;
    this.name = name;
    this.faceValue = faceValue;
    this.expirationDate = expirationDate;
    this.currency = currency;
  }
}
