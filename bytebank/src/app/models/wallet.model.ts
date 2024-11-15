export class Wallet {
  id: any;
  userId: any;
  nombreCartera: any;
  plazoOperacion: any;
  fechaDescuento: any;
  tcea: any;
  valorRecibido: any;
  valorEntregado: any;

  constructor(id: any, userId: any,name: any, operationTerm: any, discountDate: any, tcea: any, receivedValue: any, deliveredValue: any) {
    this.id = id;
    this.userId = userId;
    this.nombreCartera = name;
    this.plazoOperacion = operationTerm;
    this.fechaDescuento = discountDate;
    this.tcea = tcea;
    this.valorRecibido = receivedValue;
    this.valorEntregado = deliveredValue;
  }
}
