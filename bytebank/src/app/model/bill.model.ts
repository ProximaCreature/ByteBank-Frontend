export class Bill {
  id: any;
  walletId: any;
  name: any;
  face_value: any;
  signature_date: any;

  constructor(id: any, walletId: any, name : any, faceValue: any, signatureDate: any) {
    this.id = id;
    this.walletId = walletId;
    this.name = name;
    this.face_value = faceValue;
    this.signature_date = signatureDate;
  }
}
