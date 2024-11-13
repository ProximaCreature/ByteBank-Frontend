export class Bill {
  id: any;
  walletId: any;
  name: any;
  faceValue: any;
  signatureDate: any;

  constructor(id: any, walletId: any, name : any, faceValue: any, signatureDate: any) {
    this.id = id;
    this.walletId = walletId;
    this.name = name;
    this.faceValue = faceValue;
    this.signatureDate = signatureDate;
  }
}
