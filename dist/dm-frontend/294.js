"use strict";(self.webpackChunkdm_frontend=self.webpackChunkdm_frontend||[]).push([[294],{294:(S,l,c)=>{c.r(l),c.d(l,{BuyersCreditRequestModule:()=>U});var s=c(843),f=c(2579),h=c(2258),u=c(8528),x=c(241),C=c(9408),p=c(2508),t=c(2560),b=c(6852),M=c(4981),P=c(3087),m=c(4666);function O(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"section",5)(1,"h3",6),t._uU(2,"Buyers Credit Request "),t.qZA(),t.TgZ(3,"div",7)(4,"span",8),t._uU(5,"All Transaction"),t.qZA(),t.TgZ(6,"span",9),t._uU(7,"Tasks"),t.qZA()(),t.TgZ(8,"div",10)(9,"span",11),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onNewTrans())}),t._uU(10,"Create New Transaction"),t.qZA()()()}}function y(e,a){1&e&&(t.TgZ(0,"td"),t._uU(1," Completed "),t.qZA())}function v(e,a){1&e&&(t.TgZ(0,"td"),t._uU(1," Pending "),t.qZA())}function w(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"tr",17),t.NdJ("click",function(){const r=t.CHM(n).$implicit,g=t.oxw(2);return t.KtG(g.viewTask(r))}),t.TgZ(1,"th",18),t._uU(2),t.qZA(),t.TgZ(3,"td",19),t._uU(4,"Submitted to Yes bank"),t.qZA(),t.YNc(5,y,2,0,"td",20),t.YNc(6,v,2,0,"td",20),t.TgZ(7,"td"),t._uU(8,"Download & Share icon"),t.qZA()()}if(2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.transactionDate," "),t.xp6(3),t.Q6J("ngIf",!0===n.completed),t.xp6(1),t.Q6J("ngIf",!1===n.completed)}}function T(e,a){if(1&e&&(t.TgZ(0,"table",12)(1,"thead")(2,"tr",13)(3,"th",14),t._uU(4,"Date"),t.qZA(),t.TgZ(5,"th",14),t._uU(6,"Detail"),t.qZA(),t.TgZ(7,"th",14),t._uU(8,"Status"),t.qZA(),t.TgZ(9,"th",14),t._uU(10,"Download"),t.qZA()()(),t.TgZ(11,"tbody",15),t.YNc(12,w,9,3,"tr",16),t.qZA()()),2&e){const n=t.oxw();t.xp6(12),t.Q6J("ngForOf",n.allTransactions)}}function k(e,a){if(1&e&&(t.TgZ(0,"option",41),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.Q6J("value",n.benneName),t.xp6(1),t.hij(" ",n.benneName," ")}}function Z(e,a){if(1&e&&(t.TgZ(0,"option",41),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.Q6J("value",n.boeNumber),t.xp6(1),t.hij(" ",n.boeNumber," ")}}function A(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",42)(1,"p",30),t._uU(2,"Select a BOE"),t.qZA(),t.TgZ(3,"select",43),t.NdJ("ngModelChange",function(o){t.CHM(n);const r=t.oxw(2);return t.KtG(r.selectedDoc1=o)}),t.TgZ(4,"option",32),t._uU(5,"Select BOE Number"),t.qZA(),t.YNc(6,Z,2,2,"option",33),t.qZA()()}if(2&e){const n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedDoc1),t.xp6(3),t.Q6J("ngForOf",n.item)}}function q(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"p",53),t.NdJ("click",function(){const r=t.CHM(n).$implicit,g=t.oxw(3);return t.KtG(g.clickPipo("PI",r.pi_poNo,r.benneName,r.amount,r))}),t.TgZ(1,"a"),t._uU(2),t.qZA()()}if(2&e){const n=a.$implicit;t.xp6(2),t.AsE(" PI-",n.pi_poNo,"-",n.benneName,"")}}function B(e,a){1&e&&(t.TgZ(0,"div",54),t._uU(1," This PI/PO doesn't contain any BL copy. "),t.qZA())}function N(e,a){if(1&e&&(t.TgZ(0,"div",44)(1,"p",30),t._uU(2,"Select PIPO*"),t.qZA(),t.TgZ(3,"div",45)(4,"span",46),t._uU(5),t.qZA(),t.TgZ(6,"span",47),t._UZ(7,"i",48)(8,"i",49),t.qZA(),t.TgZ(9,"div",50),t.YNc(10,q,3,2,"p",51),t.qZA()(),t.YNc(11,B,2,0,"div",52),t.qZA()),2&e){const n=t.oxw(2);t.xp6(5),t.Oqu(n.pipoValue),t.xp6(5),t.Q6J("ngForOf",n.item3),t.xp6(1),t.Q6J("ngIf",n.alertToggle)}}function R(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"p",55),t._uU(1),t.TgZ(2,"i",56),t.NdJ("click",function(){const r=t.CHM(n).index,g=t.oxw(2);return t.KtG(g.removePipo(r))}),t.qZA()()}if(2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n," ")}}function D(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",21)(1,"p",22),t._uU(2,"Setup: 1"),t.qZA(),t.TgZ(3,"p",23),t._uU(4,"Create Transaction:"),t.qZA(),t.TgZ(5,"p",24),t._uU(6,"Select a bank*"),t.qZA(),t.TgZ(7,"input",25),t.NdJ("ngModelChange",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.myRadio=o)}),t.qZA(),t.TgZ(8,"label",26),t._uU(9,"Yes Bank"),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"input",27),t.NdJ("ngModelChange",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.myRadio=o)}),t.qZA(),t.TgZ(12,"label",28),t._uU(13,"Axis Bank"),t.qZA(),t._UZ(14,"br")(15,"input",29),t.TgZ(16,"label",28),t._uU(17,"Any Bank"),t.qZA(),t._UZ(18,"br")(19,"br"),t.TgZ(20,"p",30),t._uU(21,"Select a Beneficiary"),t.qZA(),t.TgZ(22,"select",31),t.NdJ("ngModelChange",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.selectedDoc=o)})("change",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.modo(o.target.value))}),t.TgZ(23,"option",32),t._uU(24,"Select Bene Name"),t.qZA(),t.YNc(25,k,2,2,"option",33),t.qZA(),t.YNc(26,A,7,2,"div",34),t.YNc(27,N,12,3,"div",35),t.TgZ(28,"div",36),t.YNc(29,R,3,1,"p",37),t.qZA(),t.TgZ(30,"div",38)(31,"button",39),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.showThisPdf())}),t._uU(32," Generate Document "),t.qZA(),t.TgZ(33,"button",40),t._uU(34,"Assign Task"),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(7),t.Q6J("ngModel",n.myRadio),t.xp6(4),t.Q6J("ngModel",n.myRadio),t.xp6(11),t.Q6J("ngModel",n.selectedDoc),t.xp6(3),t.Q6J("ngForOf",n.beneDetail),t.xp6(1),t.Q6J("ngIf",n.boe),t.xp6(1),t.Q6J("ngIf",n.boe),t.xp6(2),t.Q6J("ngForOf",n.arrayData)}}let I=(()=>{class e{constructor(n,i,o,r,g){this.documentService=n,this.router=i,this.route=o,this.userService=r,this.wininfo=g,this.export=!1,this.import=!1,this.showPdf=!1,this.greaterAmount=0,this.selectedDoc="",this.selectedDoc1="",this.allTransactions=[],this.piPoForm=new p.cw({pi_poNo:new p.NI(""),benneName:new p.NI(""),currency:new p.NI(""),amount:new p.NI(""),incoterm:new p.NI(""),lastDayShipment:new p.NI(""),paymentTerm:new p.NI(""),pcRefNo:new p.NI("")}),this.boe=!1,this.pipoValue="select PI/PO",this.arrayData=[],this.beneArray=[],this.pipoArr=[],this.amountArray=[],this.amountArray1=[],console.log("hello")}ngOnInit(){this.wininfo.set_controller_of_width(270,".content-wrap"),this.route.params.subscribe(n=>{this.file=this.route.snapshot.params.file,this.showInvoice=!1,console.log("hello")}),this.documentService.getPipo().subscribe(n=>{console.log("HEre Response",n),this.item1=n.data},n=>console.log(n)),this.userService.getBene(1).subscribe(n=>{this.beneDetail=n.data,console.log("Benne Detail",this.beneDetail)},n=>console.log("Error",n)),this.documentService.getBcTask({file:"buyerCredit"}).subscribe(n=>{this.allTransactions=n.task,console.log("ALL TRANSACTIONS",this.allTransactions)},n=>console.log(n))}clickPipo(n,i,o,r,g){if(!g.airwayBlcopy)return this.alertToggle=!0,void setTimeout(()=>{console.log("hi"),this.alertToggle=!1},5e3);{let d=n+"-"+i+"-"+o;if(this.arrayData.length>0){if(o!=this.beneArray[0])return this.alertToggle=!0,void setTimeout(()=>{console.log("hi"),this.alertToggle=!1},5e3);if(-1==this.arrayData.indexOf(d)){this.arrayData.push(d),this.pipoArr.push(i),this.beneArray.push(o);let J=parseInt(r);this.amountArray.push(J)}else console.log("x");console.log(this.arrayData)}else{this.arrayData.push(d),this.pipoArr.push(i),this.beneArray.push(o);let _=parseInt(r);this.amountArray.push(_)}}}amountFun(n,i){console.log("shshshh"),this.amountArray1[i]=parseInt(n);let o=0;for(let r of this.amountArray1)o+=r;this.amount=o,console.log(this.amountArray1),console.log(this.amount),console.log("shshshh")}removePipo(n){this.arrayData.splice(n,1),this.pipoArr.splice(n,1),this.beneArray.splice(n,1),this.amount=this.amount-this.amountArray[n]}getInvoices(n,i){return console.log("SELECTED",n),console.log("INDEX",i),this.lastIndex=i,this.selectedRow=n,this.showInvoice=!0,this.tableWidth="30%",this.greaterAmount=parseInt(this.selectedRow.amount)}modo(n){console.log(n),this.documentService.getBoe(n).subscribe(i=>{this.boe=!0,this.item=i.data,console.log("king123"),console.log(i.data),console.log("Boe Data",this.item),this.documentService.getPipoByBene(n).subscribe(o=>{this.boe=!0,this.item3=o.data,console.log("king123"),console.log(o)},o=>{console.log("error")})},i=>{console.log("error")})}onNewTrans(){this.step1=!this.step1}toggleStep1(){this.step1=!1,this.showPdf=!1}viewTask(n){console.log(n),console.log(n.beneDetail.benneName),n.completed?this.router.navigateByUrl(`/home/completed-task/${n._id}`):(this.documentService.task=n,this.documentService.draft=!0,this.documentService.pdfData=n.pipoDetail,"yesBank"==n.bank?this.router.navigate(["home/tradeRequestLetter",n.beneDetail.benneName]):"axisBank"==n.bank&&this.router.navigate(["home/buyersCreditAxis",n.beneDetail.benneName]))}showThisPdf(){this.documentService.draft=!1,console.log(this.selectedDoc),console.log(this.pipoArr),"axisBank"==this.myRadio?(console.log("h"),this.router.navigate(["home/buyersCreditAxis",{pipo:this.pipoArr,amount:this.selectedDoc}])):this.router.navigate(["home/tradeRequestLetter",{pipo:this.pipoArr,amount:this.selectedDoc}])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b.Z),t.Y36(s.F0),t.Y36(s.gz),t.Y36(M.K),t.Y36(P.Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-buyers-credit-request"]],decls:6,vars:3,consts:[[1,"content-wrap","pb-2","scroll-bar-main"],["id","content","role","main",1,"content","table-padding"],["class","header-panel",4,"ngIf"],["class","table table-striped mb-0","style","margin-left: 40px; float: left; margin-top: 20px; width: 92%;",4,"ngIf"],["class","radio1","style","\n                margin-left: 10px;\n                padding: 4% 0;\n                padding-left: 3%;\n            ",4,"ngIf"],[1,"header-panel"],[1,"heading"],[2,"float","left","margin-top","20px"],[1,"at",2,"border-right","1px solid black","color","#49a2d7"],[1,"at"],[2,"margin-right","80px","float","right","margin-top","20px"],[1,"ctb",3,"click"],[1,"table","table-striped","mb-0",2,"margin-left","40px","float","left","margin-top","20px","width","92%"],[1,"text-muted","table-heading"],["scope","col"],[1,"text-dark"],["class","table-row",3,"click",4,"ngFor","ngForOf"],[1,"table-row",3,"click"],[1,"pl-4","fw-normal"],[1,"sb-no"],[4,"ngIf"],[1,"radio1",2,"margin-left","10px","padding","4% 0","padding-left","3%"],[1,"stp1"],[1,"stp2"],[1,"stp3"],["type","radio","id","options1","value","yesBank",1,"circular_input",3,"ngModel","ngModelChange"],["for","male",1,"label1"],["type","radio","id","options2","value","axisBank",1,"circular_input",3,"ngModel","ngModelChange"],["for","female",1,"label1"],["type","radio","name","bank","value","Any Bank",1,"circular_input"],[2,"margin-bottom","2px"],[2,"border","0.5px solid black",3,"ngModel","ngModelChange","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["style","margin-top: 10px;",4,"ngIf"],["style","display: flex; align-items: center; margin-top: 10px;",4,"ngIf"],[2,"margin-left","95px"],["class","arrayData",4,"ngFor","ngForOf"],[2,"display","flex","width","100%","margin-top","5%","justify-content","left"],[1,"opt",2,"margin-right","1%",3,"click"],[1,"opt"],[3,"value"],[2,"margin-top","10px"],[2,"border","0.5px solid black",3,"ngModel","ngModelChange"],[2,"display","flex","align-items","center","margin-top","10px"],[1,"customDropdown",2,"flex-direction","row"],[2,"color","#323e4a !important","min-width","150px"],[1,"dropIco",2,"float","right"],["id","down3",1,"fas","fa-angle-down"],["id","up3",1,"fas","fa-angle-up",2,"display","none"],[1,"dropdown-content",2,"margin-top","-2px"],[3,"click",4,"ngFor","ngForOf"],["style","color: red;",4,"ngIf"],[3,"click"],[2,"color","red"],[1,"arrayData"],[1,"fas","fa-times",2,"float","right","margin","4px 10px",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"main",1)(2,"div"),t.YNc(3,O,11,0,"section",2),t.YNc(4,T,13,1,"table",3),t.YNc(5,D,35,7,"div",4),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("ngIf",!i.step1),t.xp6(1),t.Q6J("ngIf",!i.step1),t.xp6(1),t.Q6J("ngIf",i.step1))},dependencies:[m.sg,m.O5,p.YN,p.Kr,p.Fj,p.EJ,p._,p.JJ,p.On],styles:['*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;margin-left:23px;color:#323e4a}.table-heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:500;color:#747474}.box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.table-padding[_ngcontent-%COMP%]{width:100%;background:#fff;border-radius:10px;margin:0;box-shadow:0 2px 10px #3a35411a}.upload-button[_ngcontent-%COMP%]{color:#fff!important;font-weight:100;font-family:Poppins,sans-serif;padding:5px 8px;font-size:14px;background-color:#49a2d7;border:none;border-radius:5px;margin-left:2px;margin-right:2rem}button[_ngcontent-%COMP%]{outline:none}.table-row[_ngcontent-%COMP%]{background-color:#fff!important;color:#707683}.table-row[_ngcontent-%COMP%]:hover{background:#f6f9ff!important;border-left:5px solid #49a2d7}select[_ngcontent-%COMP%]{text-decoration:none;border:none;background:none;color:#49a2d7}select[_ngcontent-%COMP%]:focus{outline:none}.rect[_ngcontent-%COMP%]{text-align:right;min-width:80px!important}.sb-no[_ngcontent-%COMP%]{color:#49a2d7}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{height:68px;vertical-align:middle!important}.image[_ngcontent-%COMP%]{height:25px;width:25px;border-radius:50%;margin-top:12fvpx}.image2[_ngcontent-%COMP%]{margin-top:22px;margin-left:-13px}.fl[_ngcontent-%COMP%]{float:"left"}.fr[_ngcontent-%COMP%]{float:"right"}span.fs20[_ngcontent-%COMP%]{font-size:20px}span.fs16[_ngcontent-%COMP%]{font-size:16px}p.fs14[_ngcontent-%COMP%]{font-size:14px}.fs12[_ngcontent-%COMP%]{font-size:12px}.p-4[_ngcontent-%COMP%]{padding:4px}.p-8[_ngcontent-%COMP%]{z-index:5000;transform:scale(1);display:grid;grid-template-columns:29% 70%}.p-20[_ngcontent-%COMP%]{padding:20px!important}.p-12[_ngcontent-%COMP%]{padding:12px!important}.p-16[_ngcontent-%COMP%]{padding:16px!important}.pr-4[_ngcontent-%COMP%]{padding-right:4px}.pr-8[_ngcontent-%COMP%]{padding-right:8px!important}.pr-16[_ngcontent-%COMP%]{padding-right:16px}.pt-30[_ngcontent-%COMP%]{padding-top:30px!important}.pt-28[_ngcontent-%COMP%]{padding-top:28px!important}.pt-25[_ngcontent-%COMP%]{padding-top:25px!important}.pt-24[_ngcontent-%COMP%]{padding-top:24px!important}.pt-22[_ngcontent-%COMP%]{padding-top:22px!important}.pt-20[_ngcontent-%COMP%]{padding-top:20px!important}.pt-19[_ngcontent-%COMP%]{padding-top:19px!important}.pt-16[_ngcontent-%COMP%]{padding-top:16px!important}.pt-14[_ngcontent-%COMP%]{padding-top:14px!important}.pt-10[_ngcontent-%COMP%]{padding-top:10px!important}.pt-8[_ngcontent-%COMP%]{padding-top:8px!important}.pt-4[_ngcontent-%COMP%]{padding-top:4px}.pt-2[_ngcontent-%COMP%]{padding-top:2px}.pt-0[_ngcontent-%COMP%]{padding-top:0!important}.pb-28[_ngcontent-%COMP%]{padding-bottom:28px!important}.pb-16[_ngcontent-%COMP%]{padding-bottom:16px!important}.pv-4[_ngcontent-%COMP%]{padding-top:4px;padding-bottom:4px}.pv-8[_ngcontent-%COMP%]{padding-top:8px!important;padding-bottom:8px!important}.pv-10[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.pv-20[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.pv-14[_ngcontent-%COMP%]{padding-top:14px!important;padding-bottom:14px!important}.pv-16[_ngcontent-%COMP%]{padding-top:16px!important;padding-bottom:16px!important}.ph-5[_ngcontent-%COMP%]{padding-right:5px!important;padding-left:5px!important}.ph-16[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}.ph-8[_ngcontent-%COMP%]{padding-left:8px!important;padding-right:8px!important}.ph-10[_ngcontent-%COMP%]{padding-left:10px!important;padding-right:10px!important}.ph-4[_ngcontent-%COMP%]{padding-left:4px;padding-right:4px}.ph-32[_ngcontent-%COMP%]{padding-left:32px;padding-right:32px}.ph-38[_ngcontent-%COMP%]{padding-left:38px;padding-right:38px}.ph-44[_ngcontent-%COMP%]{padding-left:44px;padding-right:44px}.bb[_ngcontent-%COMP%]{border-bottom:.1px solid #d3d3d3;border-right:.1px solid #d3d3d3}.bc[_ngcontent-%COMP%]{background-color:#f8fafd}.bcw[_ngcontent-%COMP%]{background-color:#fff;color:#323e4a!important}.m-4[_ngcontent-%COMP%]{margin:4px!important}.m-8[_ngcontent-%COMP%]{margin:8px!important}.m-16[_ngcontent-%COMP%]{margin:16px!important}.mr-20[_ngcontent-%COMP%]{margin-right:20px!important}.mr-8[_ngcontent-%COMP%]{margin-right:8px!important}.ml-20[_ngcontent-%COMP%]{margin-left:20px!important}.ml-24[_ngcontent-%COMP%]{margin-left:24px!important}.mt-4[_ngcontent-%COMP%]{margin-top:4px!important}.mt-8[_ngcontent-%COMP%]{margin-top:8px!important}.mt-16[_ngcontent-%COMP%]{margin-top:16px!important}.mt-24[_ngcontent-%COMP%]{margin-top:24px!important}.mt-38[_ngcontent-%COMP%]{margin-top:38px!important}.mh-8[_ngcontent-%COMP%]{margin-left:8px!important;margin-right:8px!important}.mh-16[_ngcontent-%COMP%]{margin-left:16px!important;margin-right:16px!important}.mv-4[_ngcontent-%COMP%]{margin-top:4px!important;margin-bottom:4px!important}.mv-16[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:16px}.mv-24[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}.mh--16[_ngcontent-%COMP%]{margin-left:-16px!important;margin-right:-16px!important}.mh-8[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}.w100[_ngcontent-%COMP%]{width:100%}.w70[_ngcontent-%COMP%]{width:70%}.w50[_ngcontent-%COMP%]{width:50%}.w30[_ngcontent-%COMP%]{width:30%}.pc1[_ngcontent-%COMP%]{width:44.5%;height:35px;float:right;border-left:1px solid rgb(104,103,103)}.tabbed[_ngcontent-%COMP%]{overflow-x:hidden;background-color:#f8fafd;display:flex;flex-direction:column;justify-content:center;padding-right:28px;padding-left:32px}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:none}.tabs[_ngcontent-%COMP%]{display:flex;align-items:stretch;list-style:none;background-color:#fff;height:100%;padding:1% 0 1% 30px;margin-left:-30px;width:113%}.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px}.tab[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-right:10px;border-right:1px solid black}.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]{border-top-color:#333;color:#333}.tab-content[_ngcontent-%COMP%]{display:none;color:#777;background:#f8fafd;margin:10px!important}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%]{color:#49a2d7;margin-right:10px}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4){display:block}.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus{border:2px solid red}.form[_ngcontent-%COMP%]{margin-left:38px!important;margin-right:5%;top:50%;left:50%;height:316px;background-color:#fff;border:1px dashed rgba(0,0,0,.4)}.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;text-align:center;line-height:30px;color:#303030}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:EuropaNuova-Regular,sans-serif!important;position:absolute;margin:0;width:89%;height:313px;padding:0;outline:none;cursor:pointer;opacity:0}.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;font-weight:600;border:none;margin-left:36.5%;height:42px;cursor:pointer;width:160px;background-color:#49a2d7;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#149174;color:#0c5645}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{border:0}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none}.xbutton[_ngcontent-%COMP%]{margin-bottom:30px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#49a2d7;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.ybutton[_ngcontent-%COMP%]{margin-bottom:15px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#0c354d;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.zbutton[_ngcontent-%COMP%]{margin-bottom:15px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#947551;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.border1[_ngcontent-%COMP%]{border-left:3px solid #174d72}.border2[_ngcontent-%COMP%]{border-left:3px solid #5fe6e7}.border3[_ngcontent-%COMP%]{border-left:3px solid #e7845f}.form-wrapper1[_ngcontent-%COMP%]{flex-direction:column;width:100%}.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:30%;height:5.5%}.form-wrapper1.td[_ngcontent-%COMP%]{width:100%;width:7%}.full-input[_ngcontent-%COMP%]{margin-left:18px;margin-bottom:10px;display:inline-block;padding:3px;height:74px;width:177px;background-color:#fff;border-radius:5px;box-shadow:4px 4px 8px 4px #eeeefa}.smalll-input[_ngcontent-%COMP%]{width:160px!important;outline:none;border:none;display:block;border-radius:4px;border:1px solid #d5dbe8;height:35px}label[_ngcontent-%COMP%]{display:block;padding:5px 0 5px 5px;margin-bottom:0!important;font-size:12px;font-weight:500;color:#72768a}.sh1[_ngcontent-%COMP%]{margin-left:15px;margin-top:15px;font-size:16px;color:#606670}.ss[_ngcontent-%COMP%]{padding:0!important}#customers[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%!important;margin-left:19px!important;border-right:1px solid #ddd;border-left:1px solid #ddd}#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{height:52px!important;text-align:left;font-weight:300;background-color:#ddd}#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:52px!important}.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:inline-block;height:17px;width:17px;color:#49a2d7;margin-bottom:10px}.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + input[_ngcontent-%COMP%]{background-color:#bfb;border-color:#4c4}.label1[_ngcontent-%COMP%]{display:inline-block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-left:30px}.tab1[_ngcontent-%COMP%]{margin-top:20px}.at[_ngcontent-%COMP%]{font-size:16px;padding-right:20px;padding-left:10px}.ctb[_ngcontent-%COMP%]{font-size:13px;margin-left:210px;background-color:#49a2d7;padding:12px 30px 11px;color:#fff;border-radius:4px;cursor:pointer;font-weight:500}.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:inline-block;height:17px;width:17px;color:#49a2d7;margin-bottom:10px;border:2px solid #49a2d7}.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + input[_ngcontent-%COMP%]{background-color:#bfb;border-color:#4c4}.label1[_ngcontent-%COMP%]{display:inline-block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-left:30px}.radio1[_ngcontent-%COMP%]{margin-top:20px}.stp1[_ngcontent-%COMP%]{font-size:25px;font-weight:500;margin-bottom:10px;color:#000}.stp2[_ngcontent-%COMP%]{font-size:22px;margin-bottom:10px;color:#000}.stp3[_ngcontent-%COMP%]{color:#4a4a4a;font-size:14px}.of1[_ngcontent-%COMP%]{border:1px solid #ccc;font:16px/26px Georgia,Garamond,Serif;overflow:auto}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{cursor:pointer}.side_document_list[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;align-items:center;height:170vh;border-right:.3px solid rgba(0,0,0,.2)}.profile_class[_ngcontent-%COMP%]{display:flex;width:100%;border-bottom:.3px solid rgba(0,0,0,.2);padding:3% 6%;justify-content:center;cursor:pointer}.activeBtn[_ngcontent-%COMP%]{background-color:#f8fafd;border-left:8px solid rgb(61,116,197)}.table_top[_ngcontent-%COMP%]{display:grid;grid-template-columns:29.55% 33% 30% 6%;border-bottom:.5px solid rgba(0,0,0,.2);align-items:center}.invoices_tab[_ngcontent-%COMP%]{width:100%;display:flex;height:100vh;background-color:#f8fafd}.invoices_inner[_ngcontent-%COMP%]{width:100%;background-color:#f8fafd}.inner_tab_content[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;background-color:#fff}.invoice_head[_ngcontent-%COMP%]{width:95%;display:flex;justify-content:space-between;align-items:center;padding-left:5%}.serial_detail[_ngcontent-%COMP%]{width:93%;margin-top:10px;display:flex;justify-content:right;text-align:right;font-weight:500}.transaction_tab[_ngcontent-%COMP%]{width:770px;height:1387px}.form_inner[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;text-align:center;justify-content:center}.opt[_ngcontent-%COMP%]{background-color:#49a2d7;padding:0 3%;height:42px;box-shadow:4px 0 7px #109cf1;border:none;color:#fff}#container[_ngcontent-%COMP%]{overflow:auto}.savBtn[_ngcontent-%COMP%]{background-color:#49a2d7;color:#fff;border:1px solid rgba(0,0,0,.4);font-size:14px;cursor:pointer;border-radius:2px;width:60px;margin-left:-2%}.content-wrap[_ngcontent-%COMP%]{z-index:0;height:100vh;position:absolute;left:260px;margin:auto;width:78vw}#container[_ngcontent-%COMP%]{width:100%;margin:auto;min-height:100%}table[_ngcontent-%COMP%], .analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]{overflow:hidden}.header-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-top:.8%;padding-left:1%;padding-bottom:.8%;border-bottom:1px solid black;width:99%}']}),e})(),U=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[f.D,h.FF,x.g],imports:[C.$,s.Bz.forChild([{path:"",component:I,pathMatch:"full"}]),u.zk.forRoot()]}),e})()}}]);
//# sourceMappingURL=294.js.map