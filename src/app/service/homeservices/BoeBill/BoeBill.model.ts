import _ from 'lodash';


export class BoeBill {
    public irRef: any;
    public balanceAvai: any;
    public doc: any;
    public buyerName: any;
    public deleteflag: any;
  
  public userId: string;
  public dischargePort: string;
  public boeNumber: string;
  public boeName: string;
  public boeDate: string;
  public iecCode: string;
  public iecName: string;
  public adCode: string;
  public invoiceNumber: string;
  public invoiceAmount: string;
  public currency: string;
  public settledAmount: string;
  public status: string;
  public freightAmount: string;
  public freightCurrency: string;
  public insuranceAmount: string;
  public insuranceCurrency: string;
  public discountAmount: string;
  public discountCurrency: string;
  public miscellaneousAmount: string;
  public miscellaneousCurrency: string;
  public commissionAmount: string;
  public commissionCurrency: string;
  public _id: any;
  

  constructor(data: any) {
      this.userId = data.userId ? data.userId : '';
      this.dischargePort = data.dischargePort ? data.dischargePort : '';
      this.boeName = data.benneName? data.benneName : '';
      this.boeNumber = data.boeNumber ? data.boeNumber : '';
      this.boeDate = data.boeDate ? data.boeDate : '';
      this.iecCode = data.iecCode ? data.iecCode : '';
      this.iecName = data.iecName ? data.iecName : '';
      this.adCode = data.adCode ? data.adCode : '';
      this.invoiceNumber = data.invoiceNumber ? data.invoiceNumber : '';
      this.invoiceAmount = data.invoiceAmount ? data.invoiceAmount : '';
      this.currency = data.currency ? data.currency : '';
      this.settledAmount = data.settledAmount ? data.settledAmount : '';
      this.status = data.status ? data.status : '';
      this.freightAmount = data.freightAmount ? data.freightAmount : '';
      this.freightCurrency = data.freightCurrency ? data.freightCurrency : '';
      this.insuranceAmount = data.insuranceAmount ? data.insuranceAmount: '';
      this.insuranceCurrency = data.insuranceCurrency ? data.insuranceCurrency : '';
      this.discountAmount = data.discountAmount ? data.discountAmount: '';
      this.discountCurrency = data.discountCurrency ? data.discountCurrency : '';
      this.miscellaneousAmount = data.miscellaneousAmount ? data.miscellaneousAmount: '';
      this.miscellaneousCurrency = data.miscellaneousCurrency ? data.miscellaneousCurrency : '';
      this.commissionAmount = data.commissionAmount ? data.commissionAmount: '';
      this.commissionCurrency = data.commissionCurrency ? data.commissionCurrency: '';
      this._id = data._id;
  }
  computeIRMerge() {
    let finallist = [];
    let totalForex = 0;
    if (this.irRef && this.irRef.length) {
      for (let i in this.irRef) {
        let sbInfo:any = {
          ..._.cloneDeep(this)
        };
        let amount, commision, exchangeRate;
        if (this.irRef[i] && this.irRef[i].amount) {
          amount = parseFloat(this.irRef[i].amount);
        }
        if (this.irRef[i] && this.irRef[i].commision) {
          commision = this.irRef[i].commision.replace(/,/g, '');
        }
        if (this.irRef[i] && this.irRef[i].exchangeRate) {
          exchangeRate = parseFloat(this.irRef[i].exchangeRate);
        }
        this.irRef[i].recUSD = (amount - commision).toFixed(2);
        this.irRef[i].convertedAmount = (
          this.irRef[i].recUSD * exchangeRate
        ).toFixed(2);

        sbInfo['firxNumber'] = this.irRef[i].billNo;
        sbInfo['firxAmount'] = parseFloat(this.irRef[i].amount);
        sbInfo['firxCurrency'] = this.irRef[i].currency;
        sbInfo['firxCommision'] = this.irRef[i].commision;
        sbInfo['firxRecAmo'] = this.irRef[i].recUSD;
        sbInfo['firxDate'] = this.irRef[i].date;
        let irAmount = parseFloat(this.irRef[i].amount);
        totalForex = totalForex + irAmount;
        finallist.push(sbInfo);
      }
    } else {
      finallist.push(this);
    }
    // this.balanceAvai = (parseFloat(this.fobValue) - totalForex).toFixed(2);
    // finallist.forEach((i1, index) => {
    //   i1.balanceAvai = this.balanceAvai;
    // });
    return finallist;
  }
}

export class BoeBillDisplayListViewItem {
  public BoeBillList: Array<BoeBill> = [];
  constructor(data) {
    for (let value of data) {
      this.BoeBillList.push(new BoeBill(value));
    }
    this.computeIRMerge();
  }

  computeIRMerge() {
    let finaldata:any = [];
    for (let i in this.BoeBillList) {
      let data:any = this.BoeBillList[i].computeIRMerge();
      for (let j in data) {
        finaldata.push(data[j]);
      }
    }
    this.BoeBillList = finaldata;
    return finaldata;
  }
}