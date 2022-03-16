export class ShippingBill {
    public userId: string;
    public sbno: string;
    public sbdate: string;
    public adBillNo: string;
    public portCode: string;
    public ieccode: string;
    public iecName: string;
    public adCode: string;
    public leodate: string;
    public processingStaus: string;
    public fobCurrency: string;
    public fobValue: string;
    public realizedFobCurrency: string;
    public realizedFobValue: string;
    public equivalentFobValue: string;
    public invoices: [];
    public freightCurrency: string;
    public freightValue: string;
    public realizedfreightCurrency: string;
    public realizedfreightValue: string;
    public insuranceCurrency: string;
    public insuranceValue: string;
    public realizedInsuranceValue: string;
    public bankingCharges: string;
    public expectedPaymentlastdate: string;
    public AddedDate: string;
    public modifiedDate: string;
    public exporterLocationCode: string;
    public countryOfFinaldestination: string;
    public consigneeName: string;
    public exchangeRate: string
    public _id: any;


    constructor(data: any) {
        this.userId = data.userId ? data.userId : '';
        this.sbno = data.sbno ? data.sbno : '';
        this.sbdate = data.sbdate ? data.sbdate : '';
        this.adBillNo = data.adBillNo ? data.adBillNo : '';
        this.portCode = data.portCode ? data.portCode : '';
        this.ieccode = data.ieccode ? data.ieccode : '';
        this.iecName = data.iecName ? data.iecName : '';
        this.adCode = data.adCode ? data.adCode : '';
        this.leodate = data.leodate ? data.leodate : '';
        this.processingStaus = data.processingStaus ? data.processingStaus : '';
        this.fobCurrency = data.fobCurrency ? data.fobCurrency : '';
        this.fobValue = data.fobValue ? data.fobValue : '';
        this.realizedFobCurrency = data.realizedFobCurrency ? data.realizedFobCurrency : '';
        this.realizedFobValue = data.realizedFobValue ? data.realizedFobValue : '';
        this.equivalentFobValue = data.equivalentFobValue ? data.equivalentFobValue : '';
        this.invoices = createInvoice(data.invoices) ? data.invoices : [];
        this.freightCurrency = data.freightCurrency ? data.freightCurrency : '';
        this.freightValue = data.freightValue ? data.freightValue : '';
        this.realizedfreightCurrency = data.realizedfreightCurrency ? data.realizedfreightCurrency : '';
        this.realizedfreightValue = data.realizedfreightValue ? data.realizedfreightValue : '';
        this.insuranceCurrency = data.insuranceCurrency ? data.insuranceCurrency : '';
        this.insuranceValue = data.insuranceValue ? data.insuranceValue : '';
        this.realizedInsuranceValue = data.realizedInsuranceValue ? data.realizedInsuranceValue : '';
        this.bankingCharges = data.bankingCharges ? data.bankingCharges : '';
        this.expectedPaymentlastdate = data.expectedPaymentlastdate ? data.expectedPaymentlastdate : '';
        this.AddedDate = data.AddedDate ? data.AddedDate : '';
        this.modifiedDate = data.modifiedDate ? data.modifiedDate : '';
        this.exporterLocationCode = data.exporterLocationCode ? data.exporterLocationCode : '';
        this.countryOfFinaldestination = data.countryOfFinaldestination ? data.countryOfFinaldestination : '';
        this.consigneeName = data.consigneeName ? data.consigneeName : '';
        this.exchangeRate = data.exchangeRate ? data.exchangeRate : '';
        this._id = data._id;
    }
}

class Invoice {
    public sno: string;
    public invoiceno: string;
    public amount: string;
    public currency: string;

    constructor(data: any) {
        this.sno = data.sno ? data.sno : '';
        this.invoiceno = data.invoiceno ? data.invoiceno : '';
        this.amount = data.amount ? data.amount : '';
        this.currency = data.currency ? data.currency : '';
    }
}

function createInvoice(data) {
    let invoice = [];
    for (let i in data) {
        invoice.push(new Invoice(i))
    }
    return invoice;

}

