export class WalletReq {
  username: string;
  nombreCartera: string;
  tasaInteres: number;
  tipoTasaInteres: string;
  periodoTasa: string;
  periodoCapitalizacion: string;
  comisionActivacionPorLetra: number;
  portes: number;
  porcentajeRetencion: number;
  gastosAdministracion: number;
  porcentajeSeguroDegravamen: number;
  porcentajeSeguroRiesgo: number;
  plazoOperacion: number;
  fechaDescuento: string;
  pagoFueraDeFecha: boolean;
  diasDespuesDelVencimiento: number | null;
  comisionDePagoTardio: number | null;
  periodoTasaMoratorio: string | null;
  tasaDeInteresMoratorio: number | null;
  tipoTasaInteresMoratorio: string | null;
  periodoCapitalizacionTasaMoratoria: string | null;

  constructor(data: Partial<WalletReq>) {
    this.username = data.username || '';
    this.nombreCartera = data.nombreCartera || '';
    this.tasaInteres = data.tasaInteres || 0;
    this.tipoTasaInteres = data.tipoTasaInteres || '';
    this.periodoTasa = data.periodoTasa || '';
    this.periodoCapitalizacion = data.periodoCapitalizacion || '';
    this.comisionActivacionPorLetra = data.comisionActivacionPorLetra || 0;
    this.portes = data.portes || 0;
    this.porcentajeRetencion = data.porcentajeRetencion || 0;
    this.gastosAdministracion = data.gastosAdministracion || 0;
    this.porcentajeSeguroDegravamen = data.porcentajeSeguroDegravamen || 0;
    this.porcentajeSeguroRiesgo = data.porcentajeSeguroRiesgo || 0;
    this.plazoOperacion = data.plazoOperacion || 0;
    this.fechaDescuento = data.fechaDescuento || '';
    this.pagoFueraDeFecha = data.pagoFueraDeFecha || false;
    this.diasDespuesDelVencimiento = data.diasDespuesDelVencimiento || null;
    this.comisionDePagoTardio = data.comisionDePagoTardio || null;
    this.periodoTasaMoratorio = data.periodoTasaMoratorio || null;
    this.tasaDeInteresMoratorio = data.tasaDeInteresMoratorio || null;
    this.tipoTasaInteresMoratorio = data.tipoTasaInteresMoratorio || null;
    this.periodoCapitalizacionTasaMoratoria = data.periodoCapitalizacionTasaMoratoria || null;
  }
}
