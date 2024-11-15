export class Bill {
  id: any;
  walletId: any;
  name: any;
  faceValue: any;
  expirationDate: any;
  currency: any;

  constructor(id: any, walletId: any, name : any, faceValue: any, signatureDate: any, currency: any) {
    this.id = id;
    this.walletId = walletId;
    this.name = name;
    this.faceValue = faceValue;
    this.expirationDate = signatureDate;
    this.currency = currency;
  }
}
