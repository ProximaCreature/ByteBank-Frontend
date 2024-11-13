export class Wallet {
  id: any;
  name: any;
  interestRate: any;
  interestType: any;
  interestPeriod: any;
  capitalizationPeriod: any;
  activationFee: any;
  port: any;
  retentionPercentage: any;
  administrativeExpenses: any;
  mortgageInsurance: any;
  riskInsurance: any;
  operationTerm: any;
  discountDate: any;

  constructor(id: any, name: any, interestRate: any, interestType: any, interestPeriod: any, capitalizationPeriod: any, activationFee: any, port: any, retentionPercentage: any, administrativeExpenses: any, mortgageInsurance: any, riskInsurance: any, operationTerm: any, discountDate: any) {
    this.id = id;
    this.name = name;
    this.interestRate = interestRate;
    this.interestType = interestType;
    this.interestPeriod = interestPeriod;
    this.capitalizationPeriod = capitalizationPeriod;
    this.activationFee = activationFee;
    this.port = port;
    this.retentionPercentage = retentionPercentage;
    this.administrativeExpenses = administrativeExpenses;
    this.mortgageInsurance = mortgageInsurance;
    this.riskInsurance = riskInsurance;
    this.operationTerm = operationTerm;
    this.discountDate = discountDate;
  }
}
