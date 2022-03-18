export class IRAdvice {
  public userId: string;
  public billNo: string;
  public date: string;
  public customer: string;
  public partyName: string;
  public exchangeRate: string;
  public currency: string;
  public amount: string;
  public commision: string;
  public recievedDate: string;
  public conversionDate: string;


constructor(data: any) {
  this.userId = data.userId ? data.userId : '';
  this.billNo = data.billNo ? data.billNo : '';
  this.date = data.date ? data.date : '';
  this.customer = data.customer ? data.customer : '';
  this.partyName = data.partyName ? data.partyName : '';
  this.exchangeRate = data.exchangeRate ? data.exchangeRate : '';
  this.currency = data.currency ? data.currency : '';
  this.amount = data.amount ? data.amount : '';
  this.commision = data.commision ? data.commision : '';
  this.recievedDate = data.recievedDate ? data.recievedDate : '';
  this.conversionDate = data.recievedDate ? data.recievedDate : '';

}
}
