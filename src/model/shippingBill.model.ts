export class ShippingBill {
    public userId: string;
    public sbno: string;
    public sbdate: string;
    public mawbno: string;
    public mawbdate: string;
    public hawbno: string;
    public hawbdate: string;
    public invoices: [];
    public fob: string;
    public freight: string;
    public insurence: string;
    public discount: string
    public com: string;
    public _id: any;
    public countryOfDischarge: string;

    constructor(data: any) {
        this.userId = data.userId ? data.userId : '';
        this.sbno = data.sbno ? data.sbno : '';
        this.sbdate = data.sbdate ? data.sbdate : '';
        this.mawbno = data.mawbno ? data.mawbno : '';
        this.mawbdate = data.mawbdate ? data.mawbdate : '';
        this.hawbno = data.hawbno ? data.hawbno : '';
        this.hawbdate = data.hawbdate ? data.hawbdate : '';
        this.invoices = createInvoice(data.invoices) ? data.invoices : [];
        this.fob = data.fob ? data.fob : '';
        this.insurence = data.insurence ? data.insurence: '';
        this.discount = data.discount ? data.discount : '';
        this.com = data.com ? data.com: '';
        this._id = data._id;
        this.countryOfDischarge = data.countryOfDischarge ? data.countryOfDischarge : '';
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
    for(let i in data) {
        invoice.push(new Invoice(i))
    }
    return invoice;
    
}

