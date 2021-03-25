export class ShippingBill {
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
    public countryofdischarge: string;

    constructor(data: any) {
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
        this.countryofdischarge = data.countryofdischarge ? data.countryofdischarge : '';
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

