export class Wallet {
  id: any;
  userId: any;
  name: any;
  interestRate: any;
  interestType: any;
  interestPeriod: any;
  capitalizationPeriod: any;
  activationFee: any;
  portabilityFee: any;
  retentionPercentage: any;
  administrativeExpenses: any;
  mortgageInsurance: any;
  riskInsurance: any;
  operationTerm: any;
  discountDate: any;
  tcea: any;
  receivedValue: any;
  deliveredValue: any;

  constructor(id: any, userId:any, name: any, interestRate: any, interestType: any, interestPeriod: any, capitalizationPeriod: any, activationFee: any, portabilityFee: any, retentionPercentage: any, administrativeExpenses: any, mortgageInsurance: any, riskInsurance: any, operationTerm: any, discountDate: any, tcea: any, receivedValue: any, deliveredValue: any) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.interestRate = interestRate;
    this.interestType = interestType;
    this.interestPeriod = interestPeriod;
    this.capitalizationPeriod = capitalizationPeriod;
    this.activationFee = activationFee;
    this.portabilityFee = portabilityFee;
    this.retentionPercentage = retentionPercentage;
    this.administrativeExpenses = administrativeExpenses;
    this.mortgageInsurance = mortgageInsurance;
    this.riskInsurance = riskInsurance;
    this.operationTerm = operationTerm;
    this.discountDate = discountDate;
    this.tcea = tcea;
    this.receivedValue = receivedValue;
    this.deliveredValue = deliveredValue;
  }
}
