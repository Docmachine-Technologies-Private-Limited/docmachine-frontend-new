"use strict";(self.webpackChunkdm_frontend=self.webpackChunkdm_frontend||[]).push([[979],{4846:(F,g,p)=>{p.r(g),p.d(g,{ImportDebitNoteModule:()=>q});var u=p(276),_=p(2579),d=p(2953),x=p(388),b=p(241),h=p(9408),m=p(574),t=p(4650),v=p(6852),C=p(1481),N=p(7185),w=p(4981),f=p(6895),l=p(4006);const Z=["importdebitnotes"];function D(e,r){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",o.debitNoteNumber," ")}}function T(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"input",32),t.NdJ("ngModelChange",function(n){t.CHM(o);const s=t.oxw().$implicit;return t.KtG(s.debitNoteNumber=n)}),t.qZA()()}if(2&e){const o=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",o.debitNoteNumber)}}function y(e,r){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",o.totalDebitAmount," ")}}function I(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"input",33),t.NdJ("ngModelChange",function(n){t.CHM(o);const s=t.oxw().$implicit;return t.KtG(s.totalDebitAmount=n)}),t.qZA()()}if(2&e){const o=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",o.totalDebitAmount)}}function M(e,r){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",o.currency," ")}}function A(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"input",34),t.NdJ("ngModelChange",function(n){t.CHM(o);const s=t.oxw().$implicit;return t.KtG(s.currency=n)}),t.qZA()()}if(2&e){const o=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",o.currency)}}function O(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(o);const n=t.oxw(),s=n.$implicit,c=n.index,a=t.oxw();return t.KtG(a.toSave(s,c))}),t._uU(1,"Save"),t.qZA()}}function P(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().index,s=t.oxw();return t.KtG(s.toEdit(n))}),t._uU(1,"Edit"),t.qZA()}}function U(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"tr",26)(1,"td",27),t._uU(2),t.qZA(),t.TgZ(3,"td",28),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.YNc(6,D,2,1,"div",29),t.YNc(7,T,2,1,"div",29),t.qZA(),t.TgZ(8,"td"),t.YNc(9,y,2,1,"div",29),t.YNc(10,I,2,1,"div",29),t.qZA(),t.TgZ(11,"td"),t.YNc(12,M,2,1,"div",29),t.YNc(13,A,2,1,"div",29),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td",30),t.NdJ("click",function(){const s=t.CHM(o).$implicit,c=t.oxw(),a=t.MAs(49);return c.openDebitNote(a),t.KtG(c.viewDN(s))}),t._uU(17," view "),t.qZA(),t.TgZ(18,"td"),t.YNc(19,O,2,0,"button",31),t.YNc(20,P,2,0,"button",31),t.qZA()()}if(2&e){const o=r.$implicit,i=r.index,n=t.oxw();t.xp6(2),t.Oqu(o.date),t.xp6(2),t.hij(" ",n.getPipoNumbers(o)," "),t.xp6(2),t.Q6J("ngIf",!n.optionsVisibility[i]),t.xp6(1),t.Q6J("ngIf",n.optionsVisibility[i]),t.xp6(2),t.Q6J("ngIf",!n.optionsVisibility[i]),t.xp6(1),t.Q6J("ngIf",n.optionsVisibility[i]),t.xp6(2),t.Q6J("ngIf",!n.optionsVisibility[i]),t.xp6(1),t.Q6J("ngIf",n.optionsVisibility[i]),t.xp6(2),t.Oqu(o.buyerName),t.xp6(4),t.Q6J("ngIf",n.optionsVisibility[i]),t.xp6(1),t.Q6J("ngIf",!n.optionsVisibility[i])}}function k(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",36)(1,"div",37)(2,"div",38)(3,"div",39)(4,"div",40)(5,"div",41)(6,"div",42)(7,"h6",43),t._uU(8,"Debit Note"),t.qZA(),t._UZ(9,"iframe",44),t.TgZ(10,"button",45),t.NdJ("click",function(){const s=t.CHM(o).$implicit;return t.KtG(s.dismiss("Cross click"))}),t._uU(11,"OK"),t.qZA()()()()()()()()}if(2&e){const o=t.oxw();t.xp6(9),t.Q6J("src",o.viewData,t.uOi)}}let J=(()=>{class e{constructor(o,i,n,s,c,a,E){this.documentService=o,this.sanitizer=i,this.modalService=n,this.toastr=s,this.userService=c,this.router=a,this.sharedData=E,this.item1=[],this.optionsVisibility=[]}ngOnInit(){this.documentService.getDebit().subscribe(o=>{console.log("Data fetched successfully",o),this.item=o.data;for(let i of this.item)"import"==i.file&&(this.item1.push(i),console.log("awwww",this.item1))},o=>console.log(o))}exportToExcel(){const o=m.P6.table_to_sheet(this.importdebitnotes.nativeElement),i=m.P6.book_new();m.P6.book_append_sheet(i,o,"Sheet1"),m.NC(i,"importdebitnotes.xlsx")}newDebit(){console.log("upload"),this.sharedData.changeretunurl("home/importDebit"),this.router.navigate(["home/upload",{file:"import",document:"debitNote"}])}toSave(o,i){this.optionsVisibility[i]=!1,console.log(o),this.documentService.updateDebit(o,o._id).subscribe(n=>{console.log("king123"),this.toastr.success("Debit Note Row Is Updated Successfully.")},n=>{console.log("error")})}toEdit(o){this.optionsVisibility[o]=!0,this.toastr.warning("Debit Note Row Is In Edit Mode")}getPipoNumbers(o){return o.pipo.map(i=>i.pi_poNo)}viewDN(o){this.viewData=this.sanitizer.bypassSecurityTrustResourceUrl(o.doc)}openDebitNote(o){this.modalService.open(o,{ariaLabelledBy:"modal-basic-title",size:"lg"}).result.then(i=>{this.closeResult=`Closed with: ${i}`},i=>{this.closeResult=`Dismissed ${this.getDismissReason(i)}`})}getDismissReason(o){return o===d.If.ESC?"by pressing ESC":o===d.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${o}`}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(v.Z),t.Y36(C.H7),t.Y36(d.FF),t.Y36(N._W),t.Y36(w.K),t.Y36(u.F0),t.Y36(b.g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-import-debit-note"]],viewQuery:function(o,i){if(1&o&&t.Gf(Z,5),2&o){let n;t.iGM(n=t.CRH())&&(i.importdebitnotes=n.first)}},decls:50,vars:1,consts:[[1,"content-wrap"],["id","content","role","main",1,"content","table-padding"],[2,"display","flex","flex-direction","rows","justify-content","space-between","align-items","center","padding-top","0.8%","padding-left","1%","width","85%"],[2,"display","flex","align-items","center"],[1,"heading"],["name","subject","id","subject",2,"border","1px solid #C6CBD4","color","black","padding","4px","font-weight","100","margin-right","5px","font-size","14px"],["value","","selected","selected"],["name","topic","id","topic",2,"border","1px solid #C6CBD4","color","black","padding","4px","font-weight","100","margin-right","5px","font-size","14px"],[2,"padding-top","0.7%"],[2,"color","#ffffff !important","font-weight","100","font-family","Poppins ,sans-serif","padding","5px 8px","font-size","14px","background-color","#49A2D7","border","none","border-radius","5px",3,"click"],[1,"upload-button",3,"click"],[1,"analytics"],[1,"analytics-side",2,"width","100%"],["importdebitnotes",""],[1,"row",2,"width","100%"],["id","container",1,"col-12","mb-lg","padding",2,"width","100%"],[1,"pb-0","box-shadow",2,"width","200%","margin-left","30px"],[1,"widget-body","p-0","support","table-wrapper",2,"margin-left","-79px","height","700px"],[1,"table","table-striped","mb-0",2,"width","100%","margin-left","50px","width","47% !important"],[2,"width","100%","height","54px","background","white","position","sticky","top","0"],[1,"text-muted","table-heading",2,"opacity","45%","font-size","14px","color","black !important","font-weight","300 !important","padding","5px","border-bottom","1px solid #f2f4f8"],["scope","col"],[1,"pl-3",2,"margin-left","9px"],[1,"text-dark"],["class","table-row",4,"ngFor","ngForOf"],["content",""],[1,"table-row"],[2,"padding","20px 35px"],[1,"sb-no"],[4,"ngIf"],[3,"click"],["class","savBtn",3,"click",4,"ngIf"],["name","debitNoteNumber","type","text","placeholder","Debit Note Number",1,"tblInput","form-control",3,"ngModel","ngModelChange"],["name","totalDebitAmount","type","text","placeholder","Total Debit Amount",1,"tblInput","form-control",3,"ngModel","ngModelChange"],["name","currency","type","text","placeholder","Currency",1,"tblInput","form-control",3,"ngModel","ngModelChange"],[1,"savBtn",3,"click"],[1,"modal-body"],[1,"row","no-gutter"],[1,"col-md-7",2,"margin","10px"],[1,"login","d-flex","py-5",2,"padding","0px !important"],[1,"container","popup"],[1,"row"],[1,"col-lg-10","col-xl-7","mrg"],[1,"display-6"],["width","315%","height","500px",3,"src"],["type","submit",1,"submitBTN",2,"margin-left","250px",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"main",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Import Debit Note Documents"),t.qZA()(),t.TgZ(6,"div"),t._uU(7," Date: "),t.TgZ(8,"select",5)(9,"option",6),t._uU(10,"Today"),t.qZA()(),t._uU(11," Type: "),t.TgZ(12,"select",7)(13,"option",6),t._uU(14,"All"),t.qZA()()(),t.TgZ(15,"div",8)(16,"button",9),t.NdJ("click",function(){return i.exportToExcel()}),t._uU(17,"Export To Excel"),t.qZA(),t.TgZ(18,"button",10),t.NdJ("click",function(){return i.newDebit()}),t._uU(19," Upload New "),t.qZA()()(),t.TgZ(20,"div",11)(21,"div",12,13)(23,"div",14)(24,"div",15)(25,"section",16)(26,"div",17)(27,"table",18)(28,"thead",19)(29,"tr",20)(30,"th",21)(31,"span",22),t._uU(32,"DATE"),t.qZA()(),t.TgZ(33,"th",21),t._uU(34,"PI/PO no."),t.qZA(),t.TgZ(35,"th",21),t._uU(36,"D N No."),t.qZA(),t.TgZ(37,"th",21),t._uU(38,"D N Amount"),t.qZA(),t.TgZ(39,"th",21),t._uU(40,"Currency"),t.qZA(),t.TgZ(41,"th",21),t._uU(42,"Buyer Name"),t.qZA(),t.TgZ(43,"th",21),t._uU(44,"View"),t.qZA(),t._UZ(45,"th",21),t.qZA()(),t.TgZ(46,"tbody",23),t.YNc(47,U,21,11,"tr",24),t.qZA()()()()()()()(),t.YNc(48,k,12,1,"ng-template",null,25,t.W1O),t.qZA()()),2&o&&(t.xp6(47),t.Q6J("ngForOf",i.item1))},dependencies:[f.sg,f.O5,l.YN,l.Kr,l.Fj,l.JJ,l.On],styles:["#container[_ngcontent-%COMP%]{overflow:scroll;overflow-x:auto}#container[_ngcontent-%COMP%]::-webkit-scrollbar{width:0px;height:0px}.table-padding[_ngcontent-%COMP%]{background:white!important}.table_top[_ngcontent-%COMP%]{display:grid;grid-template-columns:28.55% 33% 36%;border-bottom:.5px solid rgba(0,0,0,.2);align-items:center}.bcw[_ngcontent-%COMP%]{background-color:#fff;color:#323e4a!important}.heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;margin-left:23px;color:#323e4a}.table-heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:500;color:#747474}table[_ngcontent-%COMP%]{margin-left:29px;width:98%!important}.dropdown[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.upload-button[_ngcontent-%COMP%]{color:#fff!important;font-weight:100;font-family:Poppins,sans-serif;padding:5px 8px;font-size:14px;background-color:#49a2d7;border:none;border-radius:5px;margin-left:2px;margin-right:1rem}.box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.rect[_ngcontent-%COMP%]{text-align:right;min-width:80px!important}.table-row[_ngcontent-%COMP%]{background-color:#fff!important;color:#707683}.table-row[_ngcontent-%COMP%]:hover{background:#f6f9ff!important;border-left:5px solid #49a2d7;cursor:pointer}.sb-no[_ngcontent-%COMP%]{color:#49a2d7}.display-6[_ngcontent-%COMP%]{text-align:center;font-weight:600;color:#606670;font-size:22px;margin-bottom:12px;margin-top:20px}.submitBTN[_ngcontent-%COMP%]{margin-top:10px;width:160px;height:40px;border:2px white solid;border-radius:20px;background-color:#51aee5;font-size:12px;color:#fff}.tblInput[_ngcontent-%COMP%]{border:1px solid #e3e6ee;border-radius:3px;width:140px}.savBtn[_ngcontent-%COMP%]{background-color:#49a2d7;color:#fff;border:1px solid rgba(0,0,0,.4);font-size:14px;cursor:pointer;border-radius:2px;width:60px}"]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[_.D,d.FF,b.g],imports:[h.$,u.Bz.forChild([{path:"",component:J,pathMatch:"full"}]),x.zk.forRoot()]}),e})()}}]);