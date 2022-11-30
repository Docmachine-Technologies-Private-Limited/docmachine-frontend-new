"use strict";(self.webpackChunkdm_frontend=self.webpackChunkdm_frontend||[]).push([[699],{699:(F,m,c)=>{c.r(m),c.d(m,{InsuranceDocumentModule:()=>q});var g=c(276),x=c(2579),u=c(2953),h=c(388),f=c(241),b=c(9408),d=c(574),t=c(4650),C=c(6852),v=c(1481),w=c(7185),I=c(4981),_=c(6895),l=c(4006);const Z=["insurance"];function T(o,r){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.insuranceNumber," ")}}function y(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"input",32),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw().$implicit;return t.KtG(s.insuranceNumber=i)}),t.qZA()()}if(2&o){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",n.insuranceNumber)}}function D(o,r){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.insuranceAmount," ")}}function M(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"input",33),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw().$implicit;return t.KtG(s.insuranceAmount=i)}),t.qZA()()}if(2&o){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",n.insuranceAmount)}}function A(o,r){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.currency," ")}}function N(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"input",34),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw().$implicit;return t.KtG(s.currency=i)}),t.qZA()()}if(2&o){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",n.currency)}}function O(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(),s=i.$implicit,a=i.index,p=t.oxw();return t.KtG(p.toSave(s,a))}),t._uU(1,"Save"),t.qZA()}}function P(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().index,s=t.oxw();return t.KtG(s.toEdit(i))}),t._uU(1,"Edit"),t.qZA()}}function U(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"tr",26)(1,"td",27),t._uU(2),t.qZA(),t.TgZ(3,"td",28),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.YNc(6,T,2,1,"div",29),t.YNc(7,y,2,1,"div",29),t.qZA(),t.TgZ(8,"td"),t.YNc(9,D,2,1,"div",29),t.YNc(10,M,2,1,"div",29),t.qZA(),t.TgZ(11,"td"),t.YNc(12,A,2,1,"div",29),t.YNc(13,N,2,1,"div",29),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td",30),t.NdJ("click",function(){const s=t.CHM(n).$implicit,a=t.oxw(),p=t.MAs(49);return a.openInsuranceDoc(p),t.KtG(a.viewID(s))}),t._uU(17," view "),t.qZA(),t.TgZ(18,"td"),t.YNc(19,O,2,0,"button",31),t.YNc(20,P,2,0,"button",31),t.qZA()()}if(2&o){const n=r.$implicit,e=r.index,i=t.oxw();t.xp6(2),t.Oqu(n.date),t.xp6(2),t.hij(" ",i.getPipoNumbers(n)," "),t.xp6(2),t.Q6J("ngIf",!i.optionsVisibility[e]),t.xp6(1),t.Q6J("ngIf",i.optionsVisibility[e]),t.xp6(2),t.Q6J("ngIf",!i.optionsVisibility[e]),t.xp6(1),t.Q6J("ngIf",i.optionsVisibility[e]),t.xp6(2),t.Q6J("ngIf",!i.optionsVisibility[e]),t.xp6(1),t.Q6J("ngIf",i.optionsVisibility[e]),t.xp6(2),t.Oqu(n.buyerName),t.xp6(4),t.Q6J("ngIf",i.optionsVisibility[e]),t.xp6(1),t.Q6J("ngIf",!i.optionsVisibility[e])}}function k(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",36)(1,"div",37)(2,"div",38)(3,"div",39)(4,"div",40)(5,"div",41)(6,"div",42)(7,"h6",43),t._uU(8,"Insurance Document"),t.qZA(),t._UZ(9,"iframe",44),t.TgZ(10,"button",45),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.KtG(s.dismiss("Cross click"))}),t._uU(11,"OK"),t.qZA()()()()()()()()}if(2&o){const n=t.oxw();t.xp6(9),t.Q6J("src",n.viewData,t.uOi)}}let J=(()=>{class o{constructor(n,e,i,s,a,p,E){this.documentService=n,this.sanitizer=e,this.modalService=i,this.toastr=s,this.userService=a,this.router=p,this.sharedData=E,this.item1=[],this.optionsVisibility=[]}ngOnInit(){this.documentService.getInsurance().subscribe(n=>{console.log("Data fetched successfully",n),this.item=n.data;for(let e of this.item)"export"==e.file&&(this.item1.push(e),console.log("awwww",this.item1))},n=>console.log(n))}openInsuranceDoc(n){this.modalService.open(n,{ariaLabelledBy:"modal-basic-title",size:"lg"}).result.then(e=>{this.closeResult=`Closed with: ${e}`},e=>{this.closeResult=`Dismissed ${this.getDismissReason(e)}`})}getDismissReason(n){return n===u.If.ESC?"by pressing ESC":n===u.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${n}`}getPipoNumbers(n){return n.pipo.map(e=>e.pi_poNo)}viewID(n){this.viewData=this.sanitizer.bypassSecurityTrustResourceUrl(n.doc)}toSave(n,e){this.optionsVisibility[e]=!1,console.log(n),this.documentService.updateInsurance(n,n._id).subscribe(i=>{console.log("king123"),this.toastr.success("Insurance Document Row Is Updated Successfully."),console.log(i)},i=>{console.log("error")})}newInsurance(){console.log("upload"),this.sharedData.changeretunurl("home/insurance-document"),this.router.navigate(["home/upload",{file:"export",document:"insuranceCopy"}])}toEdit(n){this.optionsVisibility[n]=!0,this.toastr.warning("Insurance Document Row Is In Edit Mode")}exportToExcel(){const n=d.P6.table_to_sheet(this.insurance.nativeElement),e=d.P6.book_new();d.P6.book_append_sheet(e,n,"Sheet1"),d.NC(e,"importInsurance.xlsx")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(C.Z),t.Y36(v.H7),t.Y36(u.FF),t.Y36(w._W),t.Y36(I.K),t.Y36(g.F0),t.Y36(f.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-insurance-document"]],viewQuery:function(n,e){if(1&n&&t.Gf(Z,5),2&n){let i;t.iGM(i=t.CRH())&&(e.insurance=i.first)}},decls:50,vars:1,consts:[[1,"content-wrap",2,"margin-left","0px"],["id","content","role","main",1,"content","table-padding"],[2,"display","flex","flex-direction","rows","justify-content","space-between","align-items","center","padding-top","0.8%","padding-left","1%","padding-bottom","0.8%","/*border","0.5px solid rgba(0, 0, 0, 0.2)","*/\n      margin-left","40px","width","85%"],[2,"display","flex","align-items","center"],[1,"heading"],["name","subject","id","subject",2,"border","1px solid #C6CBD4","color","black","padding","4px","font-weight","100","margin-right","5px","font-size","14px"],["value","","selected","selected"],["name","topic","id","topic",2,"border","1px solid #C6CBD4","color","black","padding","4px","font-weight","100","margin-right","5px","font-size","14px"],[2,"padding-top","0.7%"],[2,"color","#ffffff !important","font-weight","100","font-family","Poppins ,sans-serif","padding","5px 8px","font-size","14px","background-color","#49A2D7","border","none","border-radius","5px",3,"click"],[1,"upload-button",3,"click"],[1,"analytics"],[1,"analytics-side",2,"width","100%"],["insurance",""],[1,"row",2,"width","100%"],["id","container",1,"col-12","mb-lg","padding",2,"width","100%","margin","5%","left","-70px","top","-60px"],[1,"pb-0","box-shadow",2,"width","200%","margin-left","70px","margin-top","-12px"],[1,"widget-body","p-0","support","table-wrapper",2,"margin-left","-79px","height","638px"],[1,"table","table-striped","mb-0",2,"margin-left","50px","width","47% !important","margin-top","-1px"],[2,"width","100%","height","54px","background","white","position","sticky","top","0"],[1,"text-muted","table-heading",2,"opacity","45%","font-size","14px","color","black !important","font-weight","300 !important","padding","5px","border-bottom","1px solid #f2f4f8"],["scope","col"],[1,"pl-3",2,"margin-left","9px"],[1,"text-dark"],["class","table-row",4,"ngFor","ngForOf"],["content",""],[1,"table-row"],[2,"padding","20px 35px"],[1,"sb-no"],[4,"ngIf"],[3,"click"],["class","savBtn",3,"click",4,"ngIf"],["name","insuranceNumber","type","text","placeholder","Insurance Document Number",1,"tblInput","form-control",3,"ngModel","ngModelChange"],["name","insuranceAmount","type","text","placeholder","Insurance Amount",1,"tblInput","form-control",3,"ngModel","ngModelChange"],["name","currency","type","text","placeholder","Currency",1,"tblInput","form-control",3,"ngModel","ngModelChange"],[1,"savBtn",3,"click"],[1,"modal-body"],[1,"row","no-gutter"],[1,"col-md-7",2,"margin","10px"],[1,"login","d-flex","py-5",2,"padding","0px !important"],[1,"container","popup"],[1,"row"],[1,"col-lg-10","col-xl-7","mrg"],[1,"display-6"],["width","315%","height","500px",3,"src"],["type","submit",1,"submitBTN",2,"margin-left","250px",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"main",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Insurance Documents"),t.qZA()(),t.TgZ(6,"div"),t._uU(7," Date: "),t.TgZ(8,"select",5)(9,"option",6),t._uU(10,"Today"),t.qZA()(),t._uU(11," Type: "),t.TgZ(12,"select",7)(13,"option",6),t._uU(14,"All"),t.qZA()()(),t.TgZ(15,"div",8)(16,"button",9),t.NdJ("click",function(){return e.exportToExcel()}),t._uU(17,"Export To Excel"),t.qZA(),t.TgZ(18,"button",10),t.NdJ("click",function(){return e.newInsurance()}),t._uU(19," Upload New "),t.qZA()()(),t.TgZ(20,"div",11)(21,"div",12,13)(23,"div",14)(24,"div",15)(25,"section",16)(26,"div",17)(27,"table",18)(28,"thead",19)(29,"tr",20)(30,"th",21)(31,"span",22),t._uU(32,"DATE"),t.qZA()(),t.TgZ(33,"th",21),t._uU(34,"PI/PO No."),t.qZA(),t.TgZ(35,"th",21),t._uU(36,"Insurance No."),t.qZA(),t.TgZ(37,"th",21),t._uU(38,"Insurance Amount"),t.qZA(),t.TgZ(39,"th",21),t._uU(40,"Currency"),t.qZA(),t.TgZ(41,"th",21),t._uU(42,"Buyer Name"),t.qZA(),t.TgZ(43,"th",21),t._uU(44,"Insurance Doc"),t.qZA(),t._UZ(45,"th",21),t.qZA()(),t.TgZ(46,"tbody",23),t.YNc(47,U,21,11,"tr",24),t.qZA()()()()()()()(),t.YNc(48,k,12,1,"ng-template",null,25,t.W1O),t.qZA()()),2&n&&(t.xp6(47),t.Q6J("ngForOf",e.item1))},dependencies:[_.sg,_.O5,l.YN,l.Kr,l.Fj,l.JJ,l.On],styles:["#container[_ngcontent-%COMP%]{overflow:scroll;overflow-x:auto}#container[_ngcontent-%COMP%]::-webkit-scrollbar{width:0px;height:0px}.table-padding[_ngcontent-%COMP%]{background:white!important}.table_top[_ngcontent-%COMP%]{display:grid;grid-template-columns:28.55% 33% 36%;border-bottom:.5px solid rgba(0,0,0,.2);align-items:center}.bcw[_ngcontent-%COMP%]{background-color:#fff;color:#323e4a!important}.heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;margin-left:23px;color:#323e4a}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none}.table-heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:500;color:#747474}table[_ngcontent-%COMP%]{margin-left:29px;width:98%!important}.dropdown[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.upload-button[_ngcontent-%COMP%]{color:#fff!important;font-weight:100;font-family:Poppins,sans-serif;padding:5px 8px;font-size:14px;background-color:#49a2d7;border:none;border-radius:5px;margin-left:2px;margin-right:2rem}.box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.rect[_ngcontent-%COMP%]{text-align:right;min-width:80px!important}.table-row[_ngcontent-%COMP%]{background-color:#fff!important;color:#707683}.table-row[_ngcontent-%COMP%]:hover{background:#f6f9ff!important;border-left:5px solid #49a2d7;cursor:pointer}.sb-no[_ngcontent-%COMP%]{color:#49a2d7}.display-6[_ngcontent-%COMP%]{text-align:center;font-weight:600;color:#606670;font-size:22px;margin-bottom:12px;margin-top:20px}.submitBTN[_ngcontent-%COMP%]{margin-top:10px;width:160px;height:40px;border:2px white solid;border-radius:20px;background-color:#51aee5;font-size:12px;color:#fff}.tblInput[_ngcontent-%COMP%]{border:1px solid #e3e6ee;border-radius:3px;width:140px}.savBtn[_ngcontent-%COMP%]{background-color:#49a2d7;color:#fff;border:1px solid rgba(0,0,0,.4);font-size:14px;cursor:pointer;border-radius:2px;width:60px}"]}),o})(),q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[x.D,u.FF,f.g],imports:[b.$,g.Bz.forChild([{path:"",component:J,pathMatch:"full"}]),h.zk.forRoot()]}),o})()}}]);