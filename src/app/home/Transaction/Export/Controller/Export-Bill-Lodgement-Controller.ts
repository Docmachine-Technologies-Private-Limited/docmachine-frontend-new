import { Injectable } from "@angular/core";
import { UserService } from "../../../../service/user.service";
import { ToastrService } from "ngx-toastr";
import { DocumentService } from "../../../../service/document.service";
import { BlendMode, PDFDocument, StandardFonts } from "pdf-lib";
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
                    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element.setFontSize(10)
                            element?.enableReadOnly();
                            element?.enableMultiline();
                            element?.needsAppearancesUpdate();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0);
                            element?.defaultUpdateAppearances(helvetica)
                        }
                    });

                    getAllFields[0]?.setText(validator.COMPANY_INFO[0]?.BranchName);
                    getAllFields[1]?.setText('');
                    getAllFields[2]?.setText('');
                    getAllFields[3]?.setText('');
                    getAllFields[4]?.setText('');
                    getAllFields[5]?.setText((validator.COMPANY_INFO[0]?.teamName+'\n'+validator.COMPANY_INFO[0]?.adress)?.split(/((?:\w+ ){11})/g).filter(Boolean)?.join('\n'));
                    getAllFields[6]?.setText((exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerName+'\n'+exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerAdrs)?.split(/((?:\w+ ){11})/g).filter(Boolean)?.join('\n'));
                    getAllFields[10]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '\n' + exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
                    console.log(sbdata, ExportBillLodgement_Form,validator.COMPANY_INFO[0]?.teamName, "TRANSACTION_SELECTED_COMMERICAIL_DATA");

                    getAllFields[24]?.uncheck();
                    getAllFields[25]?.uncheck();
                    if (ExportBillLodgement_Form?.Sight?.bool == true) {
                        getAllFields[24]?.check();
                    } else if (ExportBillLodgement_Form?.Usance?.bool == true) {
                        getAllFields[25]?.check();
                        getAllFields[26]?.setText(ExportBillLodgement_Form?.Usancedays);
                        getAllFields[27]?.setText(ExportBillLodgement_Form?.Usancefrom);
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
                        let Commodity: any = [];
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
                        
                        getAllFields[13]?.setText(CommercialNumberList?.join(' ')?.split(/((?:\w+ ){50})/g).filter(Boolean)?.join('\n'));
                        getAllFields[14]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '' + exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
                        getAllFields[15]?.uncheck()
                        getAllFields[16]?.uncheck()
                        getAllFields[17]?.setText(FIRX_DATE_NO?.NUMBER?.length<3?FIRX_DATE_NO?.NUMBER?.join(' ')?.split(/((?:\w+ ){50})/g).filter(Boolean)?.join('\n'):'As per Annexure Attached');
                        getAllFields[18]?.setText(FIRX_DATE_NO?.DATE?.join(' ')?.split(/((?:\w+ ){11})/g).filter(Boolean)?.join('\n'));
                        getAllFields[19]?.setText(sbdata?.fobCurrency);

                        let BillAmount: any = parseFloat(sbdata?.fobValue)
                        getAllFields[20]?.setText(!isNaN(TOTAL_SUM_FIREX) ? TOTAL_SUM_FIREX.toString() : '0');
                        getAllFields[21]?.setText(sbdata?.fobCurrency);
                        getAllFields[22]?.setText(BillAmount != undefined ? this.ConvertNumberToWords(BillAmount).toUpperCase() : '0');
                        getAllFields[23]?.setText(BillAmount?.toString());
                        
                        getAllFields[28]?.setText(sbdata?.pipo[0]?.commodity?.split(/((?:\w+ ){50})/g).filter(Boolean)?.join('\n'));
                        getAllFields[29]?.setText(sbdata?.pipo[0]?.HSCODE);
                        getAllFields[30]?.setText('');
                        getAllFields[31]?.setText(sbdata?.countryOfFinaldestination);
                        getAllFields[32]?.setText(sbdata['blcopydetails'] != undefined ? sbdata['blcopydetails'][0]?.airwayBlCopyNumber : '');
                        getAllFields[33]?.setText(sbdata?.sbno.toString());
                        getAllFields[34]?.setText(sbdata?.portCode);
                        getAllFields[35]?.setText(sbdata?.sbdate);
                        getAllFields[36]?.setText('');
                        getAllFields[37]?.setText(CommercialNumberList?.length<3?CommercialNumberList?.join(" ")?.split(/((?:\w+ ){50})/g).filter(Boolean)?.join('\n'):'As per Annexure Attached');

                        // // // OD/CC/CA
                        getAllFields[54]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[0]);
                        getAllFields[55]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[1]);
                        getAllFields[56]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[2]);
                        getAllFields[57]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[3]);
                        getAllFields[58]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[4]);
                        getAllFields[59]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[5]);
                        getAllFields[60]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[6]);
                        getAllFields[61]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[7]);
                        getAllFields[62]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[8]);
                        getAllFields[63]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[9]);
                        getAllFields[64]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[10]);
                        getAllFields[65]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[11]);
                        getAllFields[66]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[12]);
                        getAllFields[67]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[13]);
                        getAllFields[76]?.setText(this.CURRENT_DATE);
                        getAllFields[84]?.setText(this.CURRENT_DATE);
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
                        mergedPdf.addPage(page);
                    });
                    
                    const copiedPages3 = await mergedPdf.copyPages(loadmergedPdf, loadmergedPdf.getPageIndices());
                    copiedPages3.forEach((page) => {
                        mergedPdf.addPage(page);
                    });
                    await mergedPdf.save();
                    this.addForSealWaterMark(mergedPdf, validator, [
                        {
                            index: 1,
                            x: 290,
                            y: 453
                        }, {
                            index: 1,
                            x: 290,
                            y: 66
                        }]).then(async (res: any) => {
                            const pdfBytes = await res?.save()
                            var base64String1 = this._arrayBufferToBase64(pdfBytes)
                            const x1 = 'data:application/pdf;base64,' + base64String1;
                            await resolve(x1);
                        })
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
                    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element.setFontSize(10)
                            element?.enableReadOnly();
                            element?.enableMultiline();
                            element?.needsAppearancesUpdate();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0);
                            element?.defaultUpdateAppearances(helvetica)
                        }
                    });

                    getAllFields[0]?.setText(validator.COMPANY_INFO[0]?.BranchName);
                    getAllFields[1]?.setText('');
                    getAllFields[2]?.setText('');
                    getAllFields[3]?.setText('');
                    getAllFields[4]?.setText('');
                    getAllFields[5]?.setText((validator.COMPANY_INFO[0]?.teamName+'\n'+validator.COMPANY_INFO[0]?.adress)?.split(/((?:\w+ ){11})/g).filter(Boolean)?.join('\n'));
                    getAllFields[6]?.setText((exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerName+'\n'+exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerAdrs)?.split(/((?:\w+ ){11})/g).filter(Boolean)?.join('\n'));
                    getAllFields[10]?.setText(exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '\n' + exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
                    console.log(sbdata, ExportBillLodgement_Form,validator.COMPANY_INFO[0]?.teamName, "TRANSACTION_SELECTED_COMMERICAIL_DATA");

                    getAllFields[24]?.uncheck();
                    getAllFields[25]?.uncheck();
                    if (ExportBillLodgement_Form?.Sight?.bool == true) {
                        getAllFields[24]?.check();
                    } else if (ExportBillLodgement_Form?.Usance?.bool == true) {
                        getAllFields[25]?.check();
                        getAllFields[26]?.setText(ExportBillLodgement_Form?.Usancedays);
                        getAllFields[27]?.setText(ExportBillLodgement_Form?.Usancefrom);
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
                        let Commodity: any = [];
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
                            Commodity.push(sbdata[sbelement]?.pipo[0]?.commodity)
                            SbdataTable.push([sbdata[sbelement]?.sbdate, sbdata[sbelement]?.sbno, sbdata[sbelement]?.fobValue])
                        });

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
                        getAllFields[13]?.setText("As per Annexure Attached");
                        getAllFields[14]?.setText("As per Annexure Attached");
                        getAllFields[17]?.setText("As per Annexure Attached");
                        getAllFields[18]?.setText("As per Annexure Attached");
                        getAllFields[19]?.setText("As per Annexure Attached");
                        getAllFields[20]?.setText("As per Annexure Attached");
                        getAllFields[21]?.setText("As per Annexure Attached");

                        getAllFields[22]?.setText("As per Shiiping bill Attached");
                        getAllFields[41]?.setText('');
                        getAllFields[23]?.setText("Refer Shipping Bill attached");
                        getAllFields[28]?.setText("As per Annexure Attached");
                        getAllFields[46]?.setText("As per Annexure Attached");
                        getAllFields[28]?.setText(Commodity?.join(" ")?.split(/((?:\w+ ){50})/g).filter(Boolean)?.join('\n'));
                        getAllFields[29]?.setText(hscodelist?.join(" ")?.split(/((?:\w+ ){50})/g).filter(Boolean)?.join('\n'));
                        getAllFields[30]?.setText("As per Annexure Attached");
                        getAllFields[31]?.setText("As per Annexure Attached");
                        getAllFields[32]?.setText("As per Annexure Attached");
                        getAllFields[33]?.setText("As per Annexure Attached");
                        getAllFields[34]?.setText("As per Annexure Attached");
                        getAllFields[35]?.setText("As per Annexure Attached");
                        getAllFields[36]?.setText('');
                        getAllFields[37]?.setText("As per Annexure Attached");

                        // // // OD/CC/CA
                        getAllFields[54]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[0]);
                        getAllFields[55]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[1]);
                        getAllFields[56]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[2]);
                        getAllFields[57]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[3]);
                        getAllFields[58]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[4]);
                        getAllFields[59]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[5]);
                        getAllFields[60]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[6]);
                        getAllFields[61]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[7]);
                        getAllFields[62]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[8]);
                        getAllFields[63]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[9]);
                        getAllFields[64]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[10]);
                        getAllFields[65]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[11]);
                        getAllFields[66]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[12]);
                        getAllFields[67]?.setText(SELECT_BUYER_DETAILS?.accNumber?.split('')[13]);
                        getAllFields[76]?.setText(this.CURRENT_DATE);
                        getAllFields[84]?.setText(this.CURRENT_DATE);
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

                    const copiedPages3 = await mergedPdf.copyPages(loadmergedPdf, loadmergedPdf.getPageIndices());
                    copiedPages3.forEach((page) => {
                        mergedPdf.addPage(page);
                    });
                    
                    const copiedPages2 = await mergedPdf.copyPages(SBloadmergedPdf, SBloadmergedPdf.getPageIndices());
                    copiedPages2.forEach((page) => {
                        mergedPdf.addPage(page);
                    });
                    await mergedPdf.save();
                    this.addForSealWaterMark(mergedPdf, validator, [
                        {
                            index: 1,
                            x: 290,
                            y: 453
                        }, {
                            index: 1,
                            x: 290,
                            y: 66
                        }]).then(async (res: any) => {
                            const pdfBytes = await res?.save()
                            var base64String1 = this._arrayBufferToBase64(pdfBytes)
                            const x1 = 'data:application/pdf;base64,' + base64String1;
                            await resolve(x1);
                        })
                })
            },
            HDFCExportRegularization: async (charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected) => {
                return new Promise(async (resolve, reject) => {
                    console.log(charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected, "ToForwardContract_Selected")
                    const formUrl = './../../../assets/pdf/HDFC/ExportRegularization.pdf'
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
                    const mergedPdfFile = await pdfDoc.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    console.log(x1, "base64String1")
                    await resolve(x1);
                })
            },
            HDFCExportLODGEMENT: async (charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected) => {
                return new Promise(async (resolve, reject) => {
                    console.log(charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected, "ToForwardContract_Selected")
                    const formUrl = './../../../assets/pdf/HDFC/ExportLODGEMENT.pdf'
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
                    const mergedPdfFile = await pdfDoc.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    console.log(x1, "base64String1")
                    await resolve(x1);
                })
            }
        }
    }

    addForSealWaterMark(pdfDoc: any, validator, indexList: any = []) {
        return new Promise(async (resolve, reject) => {
            let jpgImage: any = ''
            const mergedPdf = await PDFDocument.create();
            if (validator.COMPANY_INFO?.length != 0) {
                jpgImage = await mergedPdf.embedPng(validator.COMPANY_INFO[0]?.forSeal)
            }
            const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            copiedPages.forEach((page, index) => {
                const { width, height } = page.getSize();
                let data = indexList?.filter((item: any) => item?.index == index);
                if (data?.length != 0) {
                    data?.forEach(element => {
                        page.drawImage(jpgImage, {
                            x: width - element?.x,
                            y: element?.y,
                            width: 250,
                            height: 250,
                            opacity: 1,
                            blendMode: BlendMode.Multiply
                        });
                    });
                }
                mergedPdf.addPage(page);
            });
            const mergedPdfFile = await mergedPdf.save();
            const mergedPdfload = await PDFDocument.load(mergedPdfFile);
            resolve(mergedPdfload)
        })
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