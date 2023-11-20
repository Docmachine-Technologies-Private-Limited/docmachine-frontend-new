import { Injectable } from "@angular/core";
import { UserService } from "../../../../service/user.service";
import { ToastrService } from "ngx-toastr";
import { DocumentService } from "../../../../service/document.service";
import { PDFDocument } from "pdf-lib";
import { Router } from "@angular/router";
import moment from 'moment';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Injectable({ providedIn: 'root' })
export class ExportBillLodgementControllerData {
    COMPANY_INFO: any = {};
    CURRENT_DATE: any = moment(new Date).format('DD-MM-YYYY')
    constructor(public documentService: DocumentService,
        private router: Router,
        private toastr: ToastrService,
        private userService: UserService) {
        this.userService.getTeam().subscribe((data: any) => { this.COMPANY_INFO = data?.data[0] }, error => { console.log("error", error) });
    }

    BankFormatLoad() {
        return {
            FedralNotANNEXURE: async (validator, exportbilllodgementdata, sbdata, ExportBillLodgement_Form, SELECT_BUYER_DETAILS) => {
                return new Promise(async (resolve, reject) => {
                    console.log(validator, exportbilllodgementdata, sbdata, ExportBillLodgement_Form, SELECT_BUYER_DETAILS, "SELECT_BUYER_DETAILS")
                    let formUrl = './../../assets/pdf/FedralBank/Export_bill_submission_format.pdf'
                    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
                    const pdfDoc = await PDFDocument.load(formPdfBytes)
                    const doc = new jsPDF()

                    const form: any = pdfDoc?.getForm()
                    const getAllFields = form?.getFields();
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element.setFontSize(8)
                            element?.enableReadOnly();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0);
                        }
                    });

                    getAllFields[0]?.setText(validator.COMPANY_INFO[0]?.BranchName);
                    getAllFields[1]?.setText('');
                    getAllFields[2]?.setText('');
                    getAllFields[3]?.setText('');
                    getAllFields[4]?.setText('');
                    getAllFields[5]?.setText(validator.COMPANY_INFO[0]?.teamName);
                    getAllFields[6]?.setText(validator.COMPANY_INFO[0]?.adress);
                    getAllFields[7]?.setText('');
                    getAllFields[8]?.setText('');
                    getAllFields[8]?.setText('');
                    getAllFields[9]?.setText('');
                    getAllFields[10]?.setText('');
                    getAllFields[11]?.setText('');
                    getAllFields[12]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerName);
                    getAllFields[13]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerAdrs);
                    getAllFields[14]?.setText('');
                    getAllFields[15]?.setText('');
                    getAllFields[16]?.setText('');
                    getAllFields[17]?.setText('');
                    getAllFields[18]?.setText('');
                    getAllFields[19]?.uncheck();
                    getAllFields[20]?.uncheck();
                    getAllFields[21]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '\n' + exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
                    getAllFields[22]?.uncheck()
                    getAllFields[23]?.uncheck()
                    console.log(sbdata, ExportBillLodgement_Form, "TRANSACTION_SELECTED_COMMERICAIL_DATA");

                    if (ExportBillLodgement_Form?.Sight?.bool == true) {
                        getAllFields[35]?.check();
                        getAllFields[36]?.uncheck();

                    } else if (ExportBillLodgement_Form?.Usance?.bool == true) {
                        getAllFields[35]?.uncheck();
                        getAllFields[36]?.check();
                        getAllFields[37]?.setText(ExportBillLodgement_Form?.Usancedays);
                        getAllFields[38]?.setText(ExportBillLodgement_Form?.Usancefrom);
                    }

                    let CommercialNumberList: any = [];
                    let FIRX_DATE_NO: any = {
                        NUMBER: [],
                        DATE: [],
                        CURRENCY: [],
                        AMOUNT: [],
                        RECIVCED_AMOUNT: [],
                        USED_AMOUNT: []
                    };
                    let dataTable: any = []
                    if (sbdata != null) {
                        sbdata?.firxdetails?.forEach(element => {
                            element?.FirxUsed_Balance?.split(',').forEach(FirxUsed_Balance => {
                                FIRX_DATE_NO?.AMOUNT?.push(FirxUsed_Balance)
                            });
                        });
                        let TOTAL_SUM_FIREX: any = FIRX_DATE_NO?.AMOUNT?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
                        sbdata?.COMMERICAIL_DATA?.forEach(element => {
                            CommercialNumberList.push(element?.commercialNumber)
                            element?.MatchOffData?.forEach(IRM_REF_Element => {
                                FIRX_DATE_NO?.NUMBER?.push(IRM_REF_Element?.billNo)
                                FIRX_DATE_NO?.DATE?.push(IRM_REF_Element?.date)
                                FIRX_DATE_NO?.CURRENCY?.push(IRM_REF_Element?.currency)
                                FIRX_DATE_NO?.RECIVCED_AMOUNT?.push(IRM_REF_Element?.amount)
                                FIRX_DATE_NO?.USED_AMOUNT?.push(IRM_REF_Element?.InputValue)
                                dataTable.push([IRM_REF_Element?.date, IRM_REF_Element?.billNo, IRM_REF_Element?.amount,
                                IRM_REF_Element?.InputValue, element?.commercialNumber, element?.sbNo])
                            });
                        });

                        getAllFields[24]?.setText(CommercialNumberList?.join(","));
                        getAllFields[25]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '' + exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
                        getAllFields[26]?.uncheck()
                        getAllFields[27]?.uncheck()
                        getAllFields[28]?.setText(FIRX_DATE_NO?.NUMBER?.slice(0, 3)?.join(','));
                        getAllFields[29]?.setText(FIRX_DATE_NO?.DATE?.slice(0, 3)?.join(','));
                        getAllFields[30]?.setText(FIRX_DATE_NO?.CURRENCY?.slice(0, 3)?.join(','));


                        getAllFields[39]?.setText('');

                        getAllFields[31]?.setText(!isNaN(TOTAL_SUM_FIREX) ? TOTAL_SUM_FIREX.toString() : '0');
                        getAllFields[32]?.setText(sbdata?.fobCurrency);
                        getAllFields[33]?.setText(sbdata?.fobValue != undefined ? this.ConvertNumberToWords(sbdata?.fobValue).toUpperCase() : '0');
                        getAllFields[34]?.setText(sbdata?.fobValue?.toString());

                        getAllFields[40]?.setText(sbdata?.pipo[0]?.HSCODE);
                        getAllFields[41]?.setText('');
                        getAllFields[42]?.setText(sbdata?.countryOfFinaldestination);
                        getAllFields[43]?.setText(sbdata['blcopydetails'] != undefined ? sbdata['blcopydetails'][0]?.airwayBlCopyNumber : '');
                        getAllFields[44]?.setText(sbdata?.sbno.toString());
                        getAllFields[45]?.setText(sbdata?.portCode);
                        getAllFields[46]?.setText(sbdata?.sbdate);
                        getAllFields[47]?.setText('');
                        getAllFields[48]?.setText('');
                        getAllFields[49]?.setText('');
                        getAllFields[50]?.setText('');
                        getAllFields[51]?.setText('');
                        getAllFields[52]?.setText('');
                        getAllFields[53]?.setText('');
                        getAllFields[54]?.setText('');
                        getAllFields[55]?.setText('');
                        getAllFields[56]?.setText('');
                        getAllFields[57]?.setText('');
                        getAllFields[58]?.setText('');
                        getAllFields[59]?.setText('');
                        getAllFields[60]?.setText('');
                        getAllFields[61]?.setText('');
                        getAllFields[62]?.setText('');
                        getAllFields[63]?.setText('');
                        getAllFields[64]?.setText('');

                        // // OD/CC/CA
                        getAllFields[65]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[0]);
                        getAllFields[66]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[1]);
                        getAllFields[67]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[2]);
                        getAllFields[68]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[3]);
                        getAllFields[69]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[4]);
                        getAllFields[70]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[5]);
                        getAllFields[71]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[6]);
                        getAllFields[72]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[7]);
                        getAllFields[73]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[8]);
                        getAllFields[74]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[9]);
                        getAllFields[75]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[10]);
                        getAllFields[76]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[11]);
                        getAllFields[77]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[12]);

                        getAllFields[78]?.setText('');
                        getAllFields[79]?.uncheck();
                        getAllFields[80]?.uncheck();
                        getAllFields[81]?.uncheck();
                        getAllFields[82]?.uncheck();
                        getAllFields[83]?.uncheck();
                        getAllFields[84]?.setText("");
                        getAllFields[85]?.uncheck();
                        getAllFields[86]?.uncheck();
                        getAllFields[87]?.uncheck();
                        getAllFields[88]?.setText(this.CURRENT_DATE);
                        getAllFields[89]?.uncheck();
                        getAllFields[90]?.uncheck();
                        getAllFields[91]?.uncheck();
                        getAllFields[92]?.uncheck();
                        getAllFields[93]?.uncheck();
                        getAllFields[94]?.uncheck();
                        getAllFields[95]?.setText(this.CURRENT_DATE);
                        getAllFields[96]?.setText('');
                        getAllFields[97]?.setText('');
                        getAllFields[98]?.setText('');
                        getAllFields[99]?.setText('');
                        getAllFields[100]?.setText('');
                        if (FIRX_DATE_NO?.DATE[0] != undefined) {
                            getAllFields[101]?.setText(FIRX_DATE_NO?.DATE[0]);
                            getAllFields[102]?.setText(FIRX_DATE_NO?.NUMBER[0]);
                            getAllFields[103]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[0]?.toString());
                            getAllFields[104]?.setText(FIRX_DATE_NO?.USED_AMOUNT[0]?.toString());
                        }
                        if (FIRX_DATE_NO?.DATE[1] != undefined) {
                            getAllFields[105]?.setText(FIRX_DATE_NO?.DATE[1]);
                            getAllFields[106]?.setText(FIRX_DATE_NO?.NUMBER[1]);
                            getAllFields[107]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[1]?.toString());
                            getAllFields[108]?.setText(FIRX_DATE_NO?.USED_AMOUNT[1]?.toString());
                        }
                        if (FIRX_DATE_NO?.DATE[2] != undefined) {
                            getAllFields[109]?.setText(FIRX_DATE_NO?.DATE[2]);
                            getAllFields[110]?.setText(FIRX_DATE_NO?.NUMBER[2]);
                            getAllFields[111]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[2]?.toString());
                            getAllFields[112]?.setText(FIRX_DATE_NO?.USED_AMOUNT[2]?.toString());
                        }
                        getAllFields[113]?.setText('');
                    }
                    await pdfDoc.save();

                    let text = "ANNEXURE – REMITTANCE RECEIVED";
                    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
                    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
                    doc.text(text, pageWidth / 2, 20, { align: 'center' });
                    autoTable(doc, {
                        margin: { top: 30, left: 10, bottom: 30 },
                        head: [['Date', 'FIRX No.', 'Amount received', 'SB Setoff Amount', 'CI No.', 'SB No.']],
                        body: dataTable,
                    })
                    let tableuri = doc.output("arraybuffer");
                    console.log(tableuri, "tableuri")
                    const loadmergedPdf = await PDFDocument.load(tableuri);

                    const mergedPdf = await PDFDocument.create();
                    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                    copiedPages.forEach((page, index) => {
                        if ((index + 1) != copiedPages?.length) {
                            mergedPdf.addPage(page);
                        }
                    });
                    if (exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == true) {
                        const copiedPages3 = await mergedPdf.copyPages(loadmergedPdf, loadmergedPdf.getPageIndices());
                        copiedPages3.forEach((page) => {
                            mergedPdf.addPage(page);
                        });
                    }
                    const mergedPdfFile = await mergedPdf.save();
                    const mergedPdfload = await PDFDocument.load(mergedPdfFile);
                    const mergedPdfFileload = await mergedPdfload.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    await resolve(x1);
                })
            },
            FedralWithANNEXURE: async (validator, exportbilllodgementdata, sbdata, ExportBillLodgement_Form, SELECT_BUYER_DETAILS) => {
                return new Promise(async (resolve, reject) => {
                    console.log(validator, exportbilllodgementdata, sbdata, ExportBillLodgement_Form, SELECT_BUYER_DETAILS, "SELECT_BUYER_DETAILS")

                    let formUrl = './../../assets/pdf/FedralBank/Export_bill_submission_format.pdf';
                    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
                    const pdfDoc = await PDFDocument.load(formPdfBytes)
                    const form: any = pdfDoc?.getForm()
                    const getAllFields = form?.getFields();
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element.setFontSize(8)
                            element?.enableReadOnly();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0);
                        }
                    });

                    getAllFields[0]?.setText('');
                    getAllFields[1]?.setText('');
                    getAllFields[2]?.setText('');
                    getAllFields[3]?.setText('');
                    getAllFields[4]?.setText('');
                    getAllFields[5]?.setText(validator.COMPANY_INFO[0]?.teamName);
                    getAllFields[6]?.setText(validator.COMPANY_INFO[0]?.adress);
                    getAllFields[7]?.setText('');
                    getAllFields[8]?.setText('');
                    getAllFields[8]?.setText('');
                    getAllFields[9]?.setText('');
                    getAllFields[10]?.setText('');
                    getAllFields[11]?.setText('');
                    getAllFields[12]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerName);
                    getAllFields[13]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerAdrs);
                    getAllFields[14]?.setText('');
                    getAllFields[15]?.setText('');
                    getAllFields[16]?.setText('');
                    getAllFields[17]?.setText('');
                    getAllFields[18]?.setText('');
                    getAllFields[19]?.uncheck();
                    getAllFields[20]?.uncheck();
                    getAllFields[21]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '\n' + exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
                    getAllFields[22]?.uncheck()
                    getAllFields[23]?.uncheck()
                    console.log(sbdata, "TRANSACTION_SELECTED_COMMERICAIL_DATA");
                    if (ExportBillLodgement_Form?.Sight?.bool == true) {
                        getAllFields[35]?.check();
                        getAllFields[36]?.uncheck();

                    } else if (ExportBillLodgement_Form?.Usance?.bool == true) {
                        getAllFields[35]?.uncheck();
                        getAllFields[36]?.check();
                        getAllFields[37]?.setText(ExportBillLodgement_Form?.Usancedays);
                        getAllFields[38]?.setText(ExportBillLodgement_Form?.Usancefrom);
                    }
                    let CommercialNumberList: any = [];
                    let FIRX_DATE_NO: any = {
                        NUMBER: [],
                        DATE: [],
                        CURRENCY: [],
                        AMOUNT: [],
                        RECIVCED_AMOUNT: [],
                        USED_AMOUNT: [],
                        TOTAL_SB_NO: [],
                        TOTAL_SB_AMOUNT: [],
                        TOTAL_SB_CURRENCY: [],
                        TOTAL_SB_PORT_CODE: [],
                        TOTAL_SB_DATE: [],
                        TOTAL_SB_COUNTRY_FINAL_DESTINATION: [],
                        blcopydetails: []
                    };
                    let dataTable: any = []
                    let SbdataTable: any = []
                    if (exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.length != 0) {
                        let hscodelist: any = [];
                        exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(sbelement => {
                            sbdata[sbelement]?.firxdetails?.forEach(element => {
                                element?.FirxUsed_Balance?.split(',').forEach(FirxUsed_Balance => {
                                    FIRX_DATE_NO?.AMOUNT?.push(FirxUsed_Balance)
                                });
                            });
                            FIRX_DATE_NO?.TOTAL_SB_NO?.push(sbdata[sbelement]?.sbno);
                            FIRX_DATE_NO?.TOTAL_SB_AMOUNT?.push(sbdata[sbelement]?.fobValue);
                            FIRX_DATE_NO?.TOTAL_SB_CURRENCY?.push(sbdata[sbelement]?.fobCurrency);
                            FIRX_DATE_NO?.TOTAL_SB_PORT_CODE?.push(sbdata[sbelement]?.portCode);
                            FIRX_DATE_NO?.TOTAL_SB_DATE?.push(sbdata[sbelement]?.sbdate);
                            FIRX_DATE_NO?.TOTAL_SB_COUNTRY_FINAL_DESTINATION?.push(sbdata[sbelement]?.countryOfFinaldestination);
                            FIRX_DATE_NO?.blcopydetails?.push(sbdata[sbelement]['blcopydetails'][0]?.airwayBlCopyNumber);
                            hscodelist.push(sbdata[sbelement]?.pipo[0]?.HSCODE)
                            SbdataTable.push([sbdata[sbelement]?.sbdate, sbdata[sbelement]?.sbno, sbdata[sbelement]?.fobValue])
                        });

                        let TOTAL_SUM_FIREX: any = FIRX_DATE_NO?.AMOUNT?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
                        let TOTAL_SB_SUM: any = FIRX_DATE_NO?.TOTAL_SB_AMOUNT?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
                        exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(sbelement => {
                            sbdata[sbelement]?.COMMERICAIL_DATA?.forEach(element => {
                                CommercialNumberList.push(element?.commercialNumber)
                                element?.MatchOffData?.forEach(IRM_REF_Element => {
                                    FIRX_DATE_NO?.NUMBER?.push(IRM_REF_Element?.billNo)
                                    FIRX_DATE_NO?.DATE?.push(IRM_REF_Element?.date)
                                    FIRX_DATE_NO?.CURRENCY?.push(IRM_REF_Element?.currency)
                                    FIRX_DATE_NO?.RECIVCED_AMOUNT?.push(IRM_REF_Element?.amount)
                                    FIRX_DATE_NO?.USED_AMOUNT?.push(IRM_REF_Element?.InputValue)
                                    dataTable.push([IRM_REF_Element?.date, IRM_REF_Element?.billNo, IRM_REF_Element?.amount,
                                    IRM_REF_Element?.InputValue, element?.commercialNumber, element?.sbNo])
                                });
                            });
                        });

                        getAllFields[24]?.setText(CommercialNumberList?.join(","));
                        getAllFields[25]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '' + exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
                        getAllFields[26]?.uncheck()
                        getAllFields[27]?.uncheck()
                        getAllFields[28]?.setText("As per Annexure Attached");
                        getAllFields[29]?.setText("As per Annexure Attached");
                        getAllFields[30]?.setText("As per Annexure Attached");

                        getAllFields[39]?.setText('');

                        getAllFields[31]?.setText("As per Annexure Attached");
                        getAllFields[32]?.setText("As per Annexure Attached");
                        getAllFields[33]?.setText("As per Annexure Attached");
                        getAllFields[34]?.setText("As per Annexure Attached");

                        getAllFields[40]?.setText("As per Shiiping bill Attached");
                        getAllFields[41]?.setText('');
                        getAllFields[42]?.setText("Refer Shipping Bill attached");
                        getAllFields[43]?.setText("As per Annexure Attached");
                        getAllFields[44]?.setText("As per Annexure Attached");
                        getAllFields[45]?.setText("As per Annexure Attached");
                        getAllFields[46]?.setText("As per Annexure Attached");
                        getAllFields[47]?.setText('');
                        getAllFields[48]?.setText('');
                        getAllFields[49]?.setText('');
                        getAllFields[50]?.setText('');
                        getAllFields[51]?.setText('');
                        getAllFields[52]?.setText('');
                        getAllFields[53]?.setText('');
                        getAllFields[54]?.setText('');
                        getAllFields[55]?.setText('');
                        getAllFields[56]?.setText('');
                        getAllFields[57]?.setText('');
                        getAllFields[58]?.setText('');
                        getAllFields[59]?.setText('');
                        getAllFields[60]?.setText('');
                        getAllFields[61]?.setText('');
                        getAllFields[62]?.setText('');
                        getAllFields[63]?.setText('');
                        getAllFields[64]?.setText('');

                        // // OD/CC/CA
                        getAllFields[65]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[0]);
                        getAllFields[66]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[1]);
                        getAllFields[67]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[2]);
                        getAllFields[68]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[3]);
                        getAllFields[69]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[4]);
                        getAllFields[70]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[5]);
                        getAllFields[71]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[6]);
                        getAllFields[72]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[7]);
                        getAllFields[73]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[8]);
                        getAllFields[74]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[9]);
                        getAllFields[75]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[10]);
                        getAllFields[76]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[11]);
                        getAllFields[77]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[12]);

                        getAllFields[78]?.setText('');
                        getAllFields[79]?.uncheck();
                        getAllFields[80]?.uncheck();
                        getAllFields[81]?.uncheck();
                        getAllFields[82]?.uncheck();
                        getAllFields[83]?.uncheck();
                        getAllFields[84]?.setText("");
                        getAllFields[85]?.uncheck();
                        getAllFields[86]?.uncheck();
                        getAllFields[87]?.uncheck();
                        getAllFields[88]?.setText(this.CURRENT_DATE);
                        getAllFields[89]?.uncheck();
                        getAllFields[90]?.uncheck();
                        getAllFields[91]?.uncheck();
                        getAllFields[92]?.uncheck();
                        getAllFields[93]?.uncheck();
                        getAllFields[94]?.uncheck();
                        getAllFields[95]?.setText(this.CURRENT_DATE);
                        getAllFields[96]?.setText('');
                        getAllFields[97]?.setText('');
                        getAllFields[98]?.setText('');
                        getAllFields[99]?.setText('');
                        getAllFields[100]?.setText('');
                        getAllFields[113]?.setText('');
                    }
                    await pdfDoc.save();

                    const doc = new jsPDF()
                    let SBtext = "ANNEXURE – SHIPPING BILL RECEIVED";
                    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
                    doc.text(SBtext, pageWidth / 2, 20, { align: 'center' });

                    autoTable(doc, {
                        margin: { top: 30, left: 10, bottom: 30 },
                        head: [['SB Date', 'SB No.', 'SB Amount']],
                        body: SbdataTable,
                    })
                    let SBtableuri = doc.output("arraybuffer");
                    console.log(SBtableuri, "SBtableuri")
                    const SBloadmergedPdf = await PDFDocument.load(SBtableuri);
                    const doc1 = new jsPDF()
                    let text = "ANNEXURE – REMITTANCE RECEIVED";
                    var pageWidth = doc1.internal.pageSize.width || doc1.internal.pageSize.getWidth();
                    doc1.text(text, pageWidth / 2, 20, { align: 'center' });

                    autoTable(doc1, {
                        margin: { top: 30, left: 10, bottom: 30 },
                        head: [['Date', 'FIRX No.', 'Amount received', 'SB Setoff Amount', 'CI No.', 'SB No.']],
                        body: dataTable,
                    })
                    let tableuri = doc1.output("arraybuffer");
                    console.log(tableuri, "tableuri")
                    const loadmergedPdf = await PDFDocument.load(tableuri);

                    const mergedPdf = await PDFDocument.create();
                    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                    copiedPages.forEach((page, index) => {
                        if ((index + 1) != copiedPages?.length) {
                            mergedPdf.addPage(page);
                        }
                    });

                    const copiedPages2 = await mergedPdf.copyPages(SBloadmergedPdf, SBloadmergedPdf.getPageIndices());
                    copiedPages2.forEach((page) => {
                        mergedPdf.addPage(page);
                    });

                    if (exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == true) {
                        const copiedPages3 = await mergedPdf.copyPages(loadmergedPdf, loadmergedPdf.getPageIndices());
                        copiedPages3.forEach((page) => {
                            mergedPdf.addPage(page);
                        });
                    }
                    const mergedPdfFile = await mergedPdf.save();
                    const mergedPdfload = await PDFDocument.load(mergedPdfFile);
                    const mergedPdfFileload = await mergedPdfload.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    await resolve(x1);
                })
            },
            HDFC: async (charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected) => {
                return new Promise(async (resolve, reject) => {
                    console.log(charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected, "ToForwardContract_Selected")
                    const formUrl = './../../../assets/pdf/FedralBank/Inward_Remittance_disposal_format.pdf'
                    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
                    const pdfDoc = await PDFDocument.load(formPdfBytes)
                    const form: any = pdfDoc.getForm()
                    const getAllFields = form?.getFields();
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element?.setFontSize(8);
                            element?.enableReadOnly();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0); // trying to restore border
                        }
                    });
                    getAllFields[0].setText(this.COMPANY_INFO?.BranchName)
                    getAllFields[3].setText(this.COMPANY_INFO?.teamName)
                    if (charge?.length != 0) {
                        getAllFields[4].setText(charge[0])
                        getAllFields[5].setText(charge[1])
                        getAllFields[6].setText(charge[2])
                        getAllFields[7].setText(charge[3])
                        getAllFields[8].setText(charge[4])
                        getAllFields[9].setText(charge[5])
                        getAllFields[10].setText(charge[6])
                        getAllFields[11].setText(charge[7])
                        getAllFields[12].setText(charge[8])
                        getAllFields[13].setText(charge[9])
                        getAllFields[14].setText(charge[10])
                        getAllFields[15].setText(charge[11])
                        getAllFields[16].setText(charge[12])
                        getAllFields[17].setText(charge[13])
                        getAllFields[18].setText('Export')
                        getAllFields[19].setText('')
                        const updatedata: any = Inward_Remittance_MT103[Inward_Remittance_MT103.length - 1];
                        getAllFields[20].setText(updatedata?.currency)
                        getAllFields[21].setText(this.ConvertNumberToWords(updatedata?.Inward_amount_for_disposal).toUpperCase())
                        getAllFields[22].setText(updatedata?.Inward_amount_for_disposal?.toString())
                        getAllFields[23].setText(updatedata?.BuyerName?.value)
                        getAllFields[24].setText(updatedata?.BuyerName?.Address)
                        getAllFields[25].setText('ADVANCE AGAINST EXPORT')
                        getAllFields[25].setFontSize(8);
                        getAllFields[26].setText(generatePurpose[0])

                        getAllFields[77].setText(credit[0])
                        getAllFields[78].setText(credit[1])
                        getAllFields[79].setText(credit[2])
                        getAllFields[80].setText(credit[3])
                        getAllFields[81].setText(credit[4])
                        getAllFields[82].setText(credit[5])
                        getAllFields[83].setText(credit[6])
                        getAllFields[84].setText(credit[7])
                        getAllFields[85].setText(credit[8])
                        getAllFields[86].setText(credit[9])
                        getAllFields[87].setText(credit[10])
                        getAllFields[88].setText(credit[11])
                        getAllFields[89].setText(credit[12])
                        getAllFields[90].setText(credit[13])

                        getAllFields[105].setText(charge[0])
                        getAllFields[106].setText(charge[1])
                        getAllFields[107].setText(charge[2])
                        getAllFields[108].setText(charge[3])
                        getAllFields[109].setText(charge[4])
                        getAllFields[110].setText(charge[5])
                        getAllFields[111].setText(charge[6])
                        getAllFields[112].setText(charge[7])
                        getAllFields[113].setText(charge[8])
                        getAllFields[114].setText(charge[9])
                        getAllFields[115].setText(charge[10])
                        getAllFields[116].setText(charge[11])
                        getAllFields[117].setText(charge[12])
                        getAllFields[118].setText(charge[13])
                    }
                    if (ToForwardContract_Selected != undefined && ToForwardContract_Selected?.length != 0) {
                        let bookingdatesplit = ToForwardContract_Selected[0]?.BookingDate?.replaceAll('-', '')?.split('');
                        let duedatesplit = ToForwardContract_Selected[0]?.ToDate?.replaceAll('-', '')?.split('');
                        getAllFields[119].setText(ToForwardContract_Selected[0]?.ForwardRefNo)
                        getAllFields[120].setText(bookingdatesplit[6])
                        getAllFields[121].setText(bookingdatesplit[7])
                        getAllFields[122].setText(bookingdatesplit[4])
                        getAllFields[123].setText(bookingdatesplit[5])
                        getAllFields[124].setText(bookingdatesplit[0])
                        getAllFields[125].setText(bookingdatesplit[1])
                        getAllFields[126].setText(bookingdatesplit[2])
                        getAllFields[127].setText(bookingdatesplit[3])

                        getAllFields[128].setText(duedatesplit[6])
                        getAllFields[129].setText(duedatesplit[7])
                        getAllFields[130].setText(duedatesplit[4])
                        getAllFields[131].setText(duedatesplit[5])
                        getAllFields[132].setText(duedatesplit[0])
                        getAllFields[133].setText(duedatesplit[1])
                        getAllFields[134].setText(duedatesplit[2])
                        getAllFields[135].setText(duedatesplit[3])

                        getAllFields[136].setText(ToForwardContract_Selected[0]?.BookingAmount)
                        getAllFields[137].setText(ToForwardContract_Selected[0]?.UtilizedAmount)
                        getAllFields[138].setText(ToForwardContract_Selected[0]?.NetRate);
                    }

                    getAllFields[139].setText(this.CURRENT_DATE)
                    const mergedPdfFile = await pdfDoc.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    console.log(x1, "base64String1")
                    await resolve(x1);
                })
            }
        }
    }

    _arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    ConvertNumberToWords(number: any) {
        var words = new Array();
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        number = number.toString();
        var atemp = number.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        if (n_length <= 9) {
            var n_array: any = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            var value: any = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
    }
}