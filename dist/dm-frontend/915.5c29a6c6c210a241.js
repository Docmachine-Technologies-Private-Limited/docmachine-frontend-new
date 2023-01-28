"use strict";(self.webpackChunkdm_frontend=self.webpackChunkdm_frontend||[]).push([[915],{915:(z,s,r)=>{r.r(s),r.d(s,{EdpmsReconModule:()=>A});var c=r(9138),m=r(2579),f=r(2953),h=r(388),x=r(241),u=r(9408),b=r(5861),C=r(5963),M=r(2529),n=r(4650),P=r(4981),_=r(9670),O=r(6852),v=r(3087),g=r(6895),d=r(4006),y=r(9182);function w(a,p){if(1&a&&(n.TgZ(0,"option",14),n._uU(1),n.qZA()),2&a){const t=p.$implicit;n.Q6J("value",t),n.xp6(1),n.Oqu(t)}}function k(a,p){if(1&a&&(n.TgZ(0,"div",15)(1,"p",16),n._uU(2,"EDPMS Upload Progress"),n.qZA(),n.TgZ(3,"div",17),n._UZ(4,"span"),n.qZA()()),2&a){const t=n.oxw();n.xp6(4),n.Udp("width",t.width+"%")}}function S(a,p){if(1&a){const t=n.EpF();n.TgZ(0,"div",18)(1,"button",19),n.NdJ("click",function(){n.CHM(t);const e=n.oxw();return n.KtG(e.compareEDPMS())}),n._uU(2,"Compare"),n.qZA()()}}let E=(()=>{class a{constructor(t,o,e,i,D){this.userService=t,this.appconfig=o,this.documentService=e,this.router=i,this.wininfo=D,this.uploading=!1,this.uploaded=!1,this.documentType="",this.benneDetail=[],this.buyerDetail=[],this.width=0,this.bankAccounts=[],this.bankSelection="",this.disableUpload=!0,this.fileInputClick=l=>!!this.disableUpload||(l.preventDefault(),l.stopPropagation(),!1),this.api_base=o.apiUrl,this.loadFromLocalStorage(),this.headers={Authorization:this.authToken},this.config3={url:`${this.api_base}/documents/uploadFile3`,method:"POST",maxFiles:1,maxFilesize:5,addRemoveLinks:!0,headers:this.headers,timeout:82e4,dictDefaultMessage:"Drag a document here",acceptedFiles:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",previewTemplate:'<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>'}}loadFromLocalStorage(){const t=localStorage.getItem("token");return this.authToken=t,this.authToken}getUserID(){var t=this;return(0,b.Z)(function*(){const o=yield t.userService.getUserDetail();t.applicant=o.result?.companyId})()}ngOnInit(){this.wininfo.set_controller_of_width(270,".content-wrap"),this.userService.getTeam().subscribe(t=>{this.masterTeam=t?.data[0]?.bankDetails,this.masterTeam.forEach(o=>this.bankAccounts.push(o?.bank)),console.log("banks:",this.bankAccounts)},t=>{console.log(t)}),this.getUserID(),this.documentService.getBlcopyref().subscribe(t=>{this.blMaster=t?.data},t=>{console.log(t)}),this.documentService.getAllExport("hhh").subscribe(t=>{this.tasksMaster=t?.data,console.log("tasksMaster:",this.tasksMaster)},t=>console.log(t)),this.documentService.getMaster(1).subscribe(t=>{this.masterSB=t?.data,console.log("getMaster:",t)},t=>{console.log(t)}),this.documentService.getPipo().subscribe(t=>{this.masterPIPO=t?.data,console.log("getPipo:",t)},t=>{console.log(t)}),this.documentService.getIrAdvice("").subscribe(t=>{this.masterIR=t?.data,console.log("getIrAdvice:",t)},t=>{console.log(t)})}chooseBank(){this.disableUpload=!this.bankSelection||""===this.bankSelection}saveData(){this.documentService.createEDPMS(this.preparePayload()).subscribe(t=>{console.log("create edpms res: ",t),this.router.navigateByUrl("/home/edpms-recon-table")},t=>{console.log("create EDPMS error: ",t)})}preparePayload(){let t=[];return this.masterExcelData.forEach(o=>{const e={userId:this.applicant,bank:this.bankSelection,sbNo:o["Shipping Bill No"],sbDate:new Date(24*(o["Shipping Bill Date"]-25569)*60*60*1e3),adCode:o["AD Code"],portCode:o["Port Code"],edpmsStatus:o.STATUS,adRefNo:o.adBillNo,sbAmount:o.sbAmount,sbBalanceAmount:this.getSBbalanceAmount(o.pipo,o.sbAmount),sbCurrency:o.sbCurrency,statusMeaning:this.getStatusMeaning(o.STATUS),systemStatus:this.getSystemStatus(o.systemStatus,o.pipo,o.sbAmount,o["Shipping Bill No"]),docAvailable:"Available"===o.systemStatus,action:this.getAction(o.systemStatus)};t.push(e)}),t}getSystemStatus(t,o,e,i){return"Available"!==t?"DOC NOT AVAILABLE IN SYSTEM":this.getSBbalanceAmount(o,e)>0?"PARTIALLY REALISED":this.checkIfBLDone(o)?"SUBMITTED & BANK REF NO. RECEIVED":this.checkifDownloaded(i)?"SUBMITTED BUT BANK REF NOT RECEIVED":"NOT SUBMITTED TO BANK"}checkifDownloaded(t){return!!this.tasksMaster?.some(o=>o?.task?.some(e=>e?.sbNumbers?.contains(t)))}checkIfBLDone(t){return!!this.blMaster.some(o=>o?.pipo?.contains(t))}getAction(t){let o=[];return"Available"!==t?o.push("Upload Documents"):o.push("Create Documents","Netoff/Setoff","ETX/Writeoff"),o}getSBbalanceAmount(t,o){let e=0;return this.masterIR.forEach(i=>{t===i?.pipo[0]&&(e+=parseInt(i?.amount,10))}),parseInt(o,10)-e}getStatusMeaning(t){return"PARTIALLY_PAID"===t?"Lodgement done but partially realised":"PENDING_AD_ACK"===t?"Lodgement not done":"PENDING_PAYMENT"===t?"Lodgement done":"EDPMS Status is not clear"}onUploadError(t){this.uploading=!1,console.log("onUploadError:",t,t[1].message)}onUploadInit(t){console.log("onUploadInit:",t)}onUploadSuccess(t){this.uploading=!1,this.uploaded=!0,console.log("onUploadSuccess ARGS",t),this.masterExcelData=t[1].data,console.log("onUploadSuccess DATA",this.masterExcelData)}compareEDPMS(){this.gatherSBdata(),this.saveData()}gatherSBdata(){this.masterExcelData.forEach((t,o)=>{var e=-1;for(let i=0;i<this.masterSB.length;i++)if(this.masterSB[i]&&this.masterSB[i].sbno&&this.masterSB[i].sbno==t["Shipping Bill No"]){e=i;break}console.log("index:",e),-1!==e?(this.masterExcelData[o].systemStatus="Available",this.masterExcelData[o].sbAmount=this.masterSB[e]?.fobValue,this.masterExcelData[o].sbCurrency=this.masterSB[e]?.fobCurrency,this.masterExcelData[o].adBillNo=this.masterSB[e]?.adBillNo,this.masterExcelData[o].pipo=this.masterSB[e]?.pipo[0]):this.masterExcelData[o].systemStatus="NOT_AVAILABLE"}),console.log("this.masterExcelData",this.masterExcelData)}submit(t){this.uploading=!0,console.log("submit: ",t),this.size=this.formatBytes(t[0].size),this.runProgressBar(t[0].size)}formatBytes(t){return t<1024?t+" Bytes":t<1048576?(t/1024).toFixed(3)+" KB":t<1073741824?(t/1048576).toFixed(3)+" MB":(t/1073741824).toFixed(3)+" GB"}runProgressBar(t){console.log(t/1500),(0,C.H)(0,t/2500).pipe((0,M.o)(()=>this.isWidthWithinLimit())).subscribe(()=>{this.width=this.width+1}),this.userService.getBene(1).subscribe(o=>{this.benneDetail=o.data},o=>console.log("Error",o)),this.userService.getBuyer(1).subscribe(o=>{this.buyerDetail=o.data},o=>console.log("Error",o))}isWidthWithinLimit(){return 100!==this.width}}return a.\u0275fac=function(t){return new(t||a)(n.Y36(P.K),n.Y36(_.X),n.Y36(O.Z),n.Y36(c.F0),n.Y36(v.Y))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-edpms-recon"]],decls:25,vars:6,consts:[[1,"content-wrap","pb-2","scroll-bar-main"],["id","content","role","main",1,"content","table-padding"],[1,"heading"],[2,"flex-direction","row","font-size","20px","margin-top","10px",";color","#303030"],[2,"display","flex","align-items","center",3,"ngModel","ngModelChange"],["value","","disabled","","hidden",""],["style","min-width:100%;",3,"value",4,"ngFor","ngForOf"],[1,"heading2"],["method","POST",1,"form"],["type","file","id","dropzone",1,"dropzone","dropzone-container",3,"dropzone","error","init","success","sending","click"],[1,"fas","fa-file-upload"],["type","submit"],["class","progressbar",4,"ngIf"],["style","text-align:center; margin-top: 20px",4,"ngIf"],[2,"min-width","100%",3,"value"],[1,"progressbar"],[1,"processheading"],[1,"meter"],[2,"text-align","center","margin-top","20px"],[3,"click"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"main",1)(2,"h3",2),n._uU(3,"New EDPMS Data"),n.qZA(),n.TgZ(4,"label",3),n._uU(5,"Select Bank*"),n.qZA(),n.TgZ(6,"select",4),n.NdJ("ngModelChange",function(i){return o.bankSelection=i})("ngModelChange",function(){return o.chooseBank()}),n.TgZ(7,"option",5),n._uU(8,"Select Bank"),n.qZA(),n.YNc(9,w,2,2,"option",6),n.qZA(),n.TgZ(10,"h3",7),n._uU(11,"Upload EDPMS Info"),n.qZA(),n.TgZ(12,"div",8)(13,"input",9),n.NdJ("error",function(i){return o.onUploadError(i)})("init",function(i){return o.onUploadInit(i)})("success",function(i){return o.onUploadSuccess(i)})("sending",function(i){return o.submit(i)})("click",function(i){return o.fileInputClick(i)}),n.qZA(),n._UZ(14,"i",10),n.TgZ(15,"h5"),n._uU(16,"Drag and Drop files here to upload"),n.qZA(),n.TgZ(17,"p"),n._uU(18,"Files Supported: XLSX"),n.qZA(),n.TgZ(19,"button",11),n._uU(20,"Choose File"),n.qZA(),n.TgZ(21,"p"),n._uU(22,"Maximum Size: 5MB"),n.qZA()(),n.YNc(23,k,5,2,"div",12),n.YNc(24,S,3,0,"div",13),n.qZA()()),2&t&&(n.xp6(6),n.Q6J("ngModel",o.bankSelection),n.xp6(3),n.Q6J("ngForOf",o.bankAccounts),n.xp6(4),n.Q6J("dropzone",o.config3),n.uIk("disabled",o.disableUpload?"":null),n.xp6(10),n.Q6J("ngIf",o.uploading),n.xp6(1),n.Q6J("ngIf",o.uploaded))},dependencies:[g.sg,g.O5,d.YN,d.Kr,d.EJ,d.JJ,d.On,y.uV],styles:['*[_ngcontent-%COMP%]{font-family:EuropaNuova-Regular,sans-serif!important;background-color:#fff}.heading[_ngcontent-%COMP%]{font-family:EuropaNuova-Regular,sans-serif!important;font-size:20px;font-weight:400;color:#323e4a;padding-bottom:10px!important;margin-bottom:5px!important;border-bottom:1px solid #eaedf3}.content-wrap[_ngcontent-%COMP%]{margin-left:300px;margin-top:100px}.customDropdown[_ngcontent-%COMP%]{display:inline-block;font-size:14px;padding-left:12px;padding-right:10px;height:24px;border-radius:2px;border:1px solid black;cursor:pointer;z-index:1}.customDropdown[_ngcontent-%COMP%]{position:relative;display:inline-block;font-size:14px;padding-left:12px;padding-right:10px;height:24px;border-radius:2px;border:1px solid black;margin-right:12px;cursor:pointer;z-index:1}.customDropdown[_ngcontent-%COMP%]:hover{color:#4b74ff!important}.dropdown-content[_ngcontent-%COMP%]{display:none;border:.01em solid black;background:white;transform:translate(-14px,-1px);box-shadow:0 4px 8px #0003;transition:.3s}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;padding:0 6px;color:#000;height:24px}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#49a2d7;color:#fff}.customDropdown[_ngcontent-%COMP%]   .dropIco[_ngcontent-%COMP%]{margin-left:7px}.dropdown-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}.fas[_ngcontent-%COMP%]{font-family:"Font Awesome 5 Free"!important}.heading2[_ngcontent-%COMP%]{font-family:EuropaNuova-Regular,sans-serif!important;font-size:20px;font-weight:400;color:#323e4a;padding-bottom:10px!important;margin-bottom:5px!important;margin-top:30px}.form[_ngcontent-%COMP%]{margin-top:15px;margin-right:5%;top:50%;left:50%;width:82%;height:300px;background-color:#fff;border:2px dashed rgba(0,0,0,.2);display:flex;flex-direction:column;align-items:center;padding-top:2%}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:EuropaNuova-Regular,sans-serif!important;position:absolute;margin:0;width:75%;height:221px;padding:0;outline:none;opacity:0}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;font-weight:400;border:none;height:52px;width:160px;background-color:#ebebeb;padding-top:1%;padding-bottom:1%;border-radius:6px;color:#0009;outline:none;margin-bottom:2px}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#149174;color:#0c5645}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{border:0}.form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:35px;color:#0003;margin-bottom:2%}.meter[_ngcontent-%COMP%]{margin-left:35px;width:80%;height:4px;position:relative;background:#d8d8d8;border-radius:25px;box-shadow:inset 0 -1px 1px #ffffff4d}.meter[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;height:100%;border-radius:20px;background-color:#2992fc;background-image:linear-gradient(center bottom,rgb(43,194,83) 37%,rgb(84,240,84) 69%);box-shadow:inset 0 2px 9px #ffffff4d,inset 0 -2px 6px #0006;position:relative;overflow:hidden}.progressbar[_ngcontent-%COMP%]{height:53px;margin-top:60px}.processheading[_ngcontent-%COMP%]{padding-left:30px}*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;margin-left:23px;color:#323e4a}.table-heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:500;color:#747474}.box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.table-padding[_ngcontent-%COMP%]{width:100%;background:#fff;border-radius:10px;margin:0;box-shadow:0 2px 10px #3a35411a}.upload-button[_ngcontent-%COMP%]{color:#fff!important;font-weight:100;font-family:Poppins,sans-serif;padding:5px 8px;font-size:14px;background-color:#49a2d7;border:none;border-radius:5px;margin-left:2px;margin-right:2rem}button[_ngcontent-%COMP%]{outline:none}.table-row[_ngcontent-%COMP%]{background-color:#fff!important;color:#707683;border-left:2px solid #fff}.table-row[_ngcontent-%COMP%]:hover{background:#f6f9ff!important;border-left:2px solid #49a2d7}select[_ngcontent-%COMP%]{text-decoration:none;border:none;background:none;color:#49a2d7}select[_ngcontent-%COMP%]:focus{outline:none}.rect[_ngcontent-%COMP%]{text-align:right;min-width:80px!important}.sb-no[_ngcontent-%COMP%]{color:#49a2d7}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{height:68px;vertical-align:middle!important}.image[_ngcontent-%COMP%]{height:25px;width:25px;border-radius:50%;margin-top:12fvpx}.image2[_ngcontent-%COMP%]{margin-top:22px;margin-left:-13px}.fl[_ngcontent-%COMP%]{float:"left"}.fr[_ngcontent-%COMP%]{float:"right"}span.fs20[_ngcontent-%COMP%]{font-size:20px}span.fs16[_ngcontent-%COMP%]{font-size:16px}p.fs14[_ngcontent-%COMP%]{font-size:14px}.fs12[_ngcontent-%COMP%]{font-size:12px}.p-4[_ngcontent-%COMP%]{padding:4px}.p-8[_ngcontent-%COMP%]{z-index:5000;transform:scale(1);display:grid;grid-template-columns:29% 70%}.p-20[_ngcontent-%COMP%]{padding:20px!important}.p-12[_ngcontent-%COMP%]{padding:12px!important}.p-16[_ngcontent-%COMP%]{padding:16px!important}.pr-4[_ngcontent-%COMP%]{padding-right:4px}.pr-8[_ngcontent-%COMP%]{padding-right:8px!important}.pr-16[_ngcontent-%COMP%]{padding-right:16px}.pt-30[_ngcontent-%COMP%]{padding-top:30px!important}.pt-28[_ngcontent-%COMP%]{padding-top:28px!important}.pt-25[_ngcontent-%COMP%]{padding-top:25px!important}.pt-24[_ngcontent-%COMP%]{padding-top:24px!important}.pt-22[_ngcontent-%COMP%]{padding-top:22px!important}.pt-20[_ngcontent-%COMP%]{padding-top:20px!important}.pt-19[_ngcontent-%COMP%]{padding-top:19px!important}.pt-16[_ngcontent-%COMP%]{padding-top:16px!important}.pt-14[_ngcontent-%COMP%]{padding-top:14px!important}.pt-10[_ngcontent-%COMP%]{padding-top:10px!important}.pt-8[_ngcontent-%COMP%]{padding-top:8px!important}.pt-4[_ngcontent-%COMP%]{padding-top:4px}.pt-2[_ngcontent-%COMP%]{padding-top:2px}.pt-0[_ngcontent-%COMP%]{padding-top:0!important}.pb-28[_ngcontent-%COMP%]{padding-bottom:28px!important}.pb-16[_ngcontent-%COMP%]{padding-bottom:16px!important}.pv-4[_ngcontent-%COMP%]{padding-top:4px;padding-bottom:4px}.pv-8[_ngcontent-%COMP%]{padding-top:8px!important;padding-bottom:8px!important}.pv-10[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.pv-20[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.pv-14[_ngcontent-%COMP%]{padding-top:14px!important;padding-bottom:14px!important}.pv-16[_ngcontent-%COMP%]{padding-top:16px!important;padding-bottom:16px!important}.ph-5[_ngcontent-%COMP%]{padding-right:5px!important;padding-left:5px!important}.ph-16[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}.ph-8[_ngcontent-%COMP%]{padding-left:8px!important;padding-right:8px!important}.ph-10[_ngcontent-%COMP%]{padding-left:10px!important;padding-right:10px!important}.ph-4[_ngcontent-%COMP%]{padding-left:4px;padding-right:4px}.ph-32[_ngcontent-%COMP%]{padding-left:32px;padding-right:32px}.ph-38[_ngcontent-%COMP%]{padding-left:38px;padding-right:38px}.ph-44[_ngcontent-%COMP%]{padding-left:44px;padding-right:44px}.bb[_ngcontent-%COMP%]{border-bottom:.1px solid #d3d3d3;border-right:.1px solid #d3d3d3}.bc[_ngcontent-%COMP%]{background-color:#f8fafd}.bcw[_ngcontent-%COMP%]{background-color:#fff;color:#323e4a!important}.m-4[_ngcontent-%COMP%]{margin:4px!important}.m-8[_ngcontent-%COMP%]{margin:8px!important}.m-16[_ngcontent-%COMP%]{margin:16px!important}.mr-20[_ngcontent-%COMP%]{margin-right:20px!important}.mr-8[_ngcontent-%COMP%]{margin-right:8px!important}.ml-20[_ngcontent-%COMP%]{margin-left:20px!important}.ml-24[_ngcontent-%COMP%]{margin-left:24px!important}.mt-4[_ngcontent-%COMP%]{margin-top:4px!important}.mt-8[_ngcontent-%COMP%]{margin-top:8px!important}.mt-16[_ngcontent-%COMP%]{margin-top:16px!important}.mt-24[_ngcontent-%COMP%]{margin-top:24px!important}.mt-38[_ngcontent-%COMP%]{margin-top:38px!important}.mh-8[_ngcontent-%COMP%]{margin-left:8px!important;margin-right:8px!important}.mh-16[_ngcontent-%COMP%]{margin-left:16px!important;margin-right:16px!important}.mv-4[_ngcontent-%COMP%]{margin-top:4px!important;margin-bottom:4px!important}.mv-16[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:16px}.mv-24[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}.mh--16[_ngcontent-%COMP%]{margin-left:-16px!important;margin-right:-16px!important}.mh-8[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}.w100[_ngcontent-%COMP%]{width:100%}.w70[_ngcontent-%COMP%]{width:70%}.w50[_ngcontent-%COMP%]{width:50%}.w30[_ngcontent-%COMP%]{width:30%}.pc1[_ngcontent-%COMP%]{width:44.5%;height:35px;float:right;border-left:1px solid rgb(104,103,103)}.tabbed[_ngcontent-%COMP%]{overflow-x:hidden;background-color:#f8fafd;display:flex;flex-direction:column;justify-content:center;padding-right:28px;padding-left:32px}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:none}.tabs[_ngcontent-%COMP%]{display:flex;align-items:stretch;list-style:none;background-color:#fff;height:100%;padding:1% 0 1% 30px;margin-left:-30px;width:113%}.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px}.tab[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-right:10px;border-right:1px solid black}.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]{border-top-color:#333;color:#333}.tab-content[_ngcontent-%COMP%]{display:none;color:#777;background:#f8fafd;margin:10px!important}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%]{color:#49a2d7;margin-right:10px}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4){display:block}.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus{border:2px solid red}.form[_ngcontent-%COMP%]{margin-left:38px!important;margin-right:5%;top:50%;left:50%;height:316px;background-color:#fff;border:1px dashed rgba(0,0,0,.4)}.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;text-align:center;line-height:30px;color:#303030}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:EuropaNuova-Regular,sans-serif!important;position:absolute;margin:0;width:89%;height:313px;padding:0;outline:none;cursor:pointer;opacity:0}.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;font-weight:600;border:none;margin-left:36.5%;height:42px;cursor:pointer;width:160px;background-color:#49a2d7;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#149174;color:#0c5645}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{border:0}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none}.xbutton[_ngcontent-%COMP%]{margin-bottom:30px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#49a2d7;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.ybutton[_ngcontent-%COMP%]{margin-bottom:15px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#0c354d;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.zbutton[_ngcontent-%COMP%]{margin-bottom:15px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#947551;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.border1[_ngcontent-%COMP%]{border-left:3px solid #174d72}.border2[_ngcontent-%COMP%]{border-left:3px solid #5fe6e7}.border3[_ngcontent-%COMP%]{border-left:3px solid #e7845f}.form-wrapper1[_ngcontent-%COMP%]{flex-direction:column;width:100%}.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:30%;height:5.5%}.form-wrapper1.td[_ngcontent-%COMP%]{width:100%;width:7%}.full-input[_ngcontent-%COMP%]{margin-left:18px;margin-bottom:10px;display:inline-block;padding:3px;height:74px;width:177px;background-color:#fff;border-radius:5px;box-shadow:4px 4px 8px 4px #eeeefa}.smalll-input[_ngcontent-%COMP%]{width:160px!important;outline:none;border:none;display:block;border-radius:4px;border:1px solid #d5dbe8;height:35px}label[_ngcontent-%COMP%]{display:block;padding:5px 0 5px 5px;margin-bottom:0!important;font-size:12px;font-weight:500;color:#72768a}.sh1[_ngcontent-%COMP%]{margin-left:15px;margin-top:15px;font-size:16px;color:#606670}.ss[_ngcontent-%COMP%]{padding:0!important}#customers[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%!important;margin-left:19px!important;border-right:1px solid #ddd;border-left:1px solid #ddd}#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{height:52px!important;text-align:left;font-weight:300;background-color:#ddd}#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:52px!important}.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:inline-block;height:17px;width:17px;color:#49a2d7;margin-bottom:10px}.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + input[_ngcontent-%COMP%]{background-color:#bfb;border-color:#4c4}.label1[_ngcontent-%COMP%]{display:inline-block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-left:30px}.tab1[_ngcontent-%COMP%]{margin-top:20px}.at[_ngcontent-%COMP%]{font-size:16px;padding-right:20px;padding-left:10px}.ctb[_ngcontent-%COMP%]{font-size:13px;margin-left:210px;background-color:#49a2d7;padding:12px 30px 11px;color:#fff;border-radius:4px;cursor:pointer;font-weight:500}.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:inline-block;height:17px;width:17px;color:#49a2d7;margin-bottom:10px;border:2px solid #49a2d7}.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + input[_ngcontent-%COMP%]{background-color:#bfb;border-color:#4c4}.label1[_ngcontent-%COMP%]{display:inline-block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-left:30px}.radio1[_ngcontent-%COMP%]{margin-top:20px}.stp1[_ngcontent-%COMP%]{font-size:25px;font-weight:500;margin-bottom:10px;color:#000}.stp2[_ngcontent-%COMP%]{font-size:22px;margin-bottom:10px;color:#000}.stp3[_ngcontent-%COMP%]{color:#4a4a4a;font-size:14px}.of1[_ngcontent-%COMP%]{border:1px solid #ccc;font:16px/26px Georgia,Garamond,Serif;overflow:auto}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{cursor:pointer}.side_document_list[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;align-items:center;height:170vh;border-right:.3px solid rgba(0,0,0,.2)}.profile_class[_ngcontent-%COMP%]{display:flex;width:100%;border-bottom:.3px solid rgba(0,0,0,.2);padding:3% 6%;justify-content:center;cursor:pointer}.activeBtn[_ngcontent-%COMP%]{background-color:#f8fafd;border-left:8px solid rgb(61,116,197)}.table_top[_ngcontent-%COMP%]{display:grid;grid-template-columns:29.55% 33% 30% 6%;border-bottom:.5px solid rgba(0,0,0,.2);align-items:center}.invoices_tab[_ngcontent-%COMP%]{width:100%;display:flex;height:100vh;background-color:#f8fafd}.invoices_inner[_ngcontent-%COMP%]{width:100%;background-color:#f8fafd}.inner_tab_content[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;background-color:#fff}.invoice_head[_ngcontent-%COMP%]{width:95%;display:flex;justify-content:space-between;align-items:center;padding-left:5%}.serial_detail[_ngcontent-%COMP%]{width:93%;margin-top:10px;display:flex;justify-content:right;text-align:right;font-weight:500}.transaction_tab[_ngcontent-%COMP%]{width:770px;height:1387px}.form_inner[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;text-align:center;justify-content:center}.opt[_ngcontent-%COMP%]{background-color:#49a2d7;padding:0 3%;height:42px;box-shadow:4px 0 7px #109cf1;border:none;color:#fff}#container[_ngcontent-%COMP%]{overflow:auto}.savBtn[_ngcontent-%COMP%]{background-color:#49a2d7;color:#fff;border:1px solid rgba(0,0,0,.4);font-size:14px;cursor:pointer;border-radius:2px;width:60px;margin-left:-2%}.content-wrap[_ngcontent-%COMP%]{z-index:0;height:100vh;position:absolute;left:260px;margin:auto;width:78vw;background:transparent}#container[_ngcontent-%COMP%]{width:100%;margin:auto;min-height:100%}table[_ngcontent-%COMP%], .analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]{overflow:hidden}.header-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-top:.8%;padding-left:1%;padding-bottom:.8%;border-bottom:1px solid black;width:99%}select[_ngcontent-%COMP%]{text-decoration:none;border:1px solid;background:none;color:#49a2d7;padding:5px;border-radius:5px}']}),a})(),A=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({providers:[m.D,f.FF,x.g],imports:[u.$,c.Bz.forChild([{path:"",component:E,pathMatch:"full"}]),h.zk.forRoot()]}),a})()}}]);