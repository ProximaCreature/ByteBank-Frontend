export class CreateBillCommand {
  nombreCartera: string;
  name: string;
  faceValue: number;
  currency: string;
  expirationDate: string;

  constructor(nombreCartera: string, name: string, faceValue: number, currency: string, expirationDate: string) {
    this.nombreCartera = nombreCartera;
    this.name = name;
    this.faceValue = faceValue;
    this.currency = currency;
    this.expirationDate = expirationDate;
  }
}
