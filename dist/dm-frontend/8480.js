"use strict";(self.webpackChunkdm_frontend=self.webpackChunkdm_frontend||[]).push([[8480],{8480:(T,c,e)=>{e.r(c),e.d(c,{EdpmsReconTableModule:()=>k});var g=e(1795),m=e(2579),f=e(1067),x=e(5728),h=e(241),b=e(7778),_=e(6852),n=e(4537),C=e(4981),M=e(3087),l=e(8692),d=e(92);function P(o,r){if(1&o&&(n.TgZ(0,"option",25),n._uU(1),n.qZA()),2&o){const t=r.$implicit;n.Q6J("value",t),n.xp6(1),n.Oqu(t)}}function O(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"div",28),n.NdJ("click",function(){const p=n.CHM(t).$implicit,s=n.oxw().$implicit,v=n.oxw();return n.KtG(v.actionEvent(p,null==s?null:s.sbNo))}),n._uU(1),n.qZA()}if(2&o){const t=r.$implicit;n.ekj("active","Create Documents"===t||"Upload Documents"===t),n.xp6(1),n.Oqu(t)}}function u(o,r){if(1&o&&(n.TgZ(0,"tr",21)(1,"th",26),n._uU(2),n.qZA(),n.TgZ(3,"td",26),n._uU(4),n.ALo(5,"date"),n.qZA(),n.TgZ(6,"td",26),n._uU(7),n.qZA(),n.TgZ(8,"td",26),n._uU(9),n.qZA(),n.TgZ(10,"td",26),n._uU(11),n.qZA(),n.TgZ(12,"td",26),n._uU(13),n.qZA(),n.TgZ(14,"td",26),n._uU(15),n.qZA(),n.TgZ(16,"td",26),n._uU(17),n.qZA(),n.TgZ(18,"td",26),n._uU(19),n.qZA(),n.TgZ(20,"td",26),n._uU(21),n.qZA(),n.TgZ(22,"td",26),n.YNc(23,O,2,3,"div",27),n.qZA()()),2&o){const t=r.$implicit;n.xp6(2),n.hij(" ",null==t?null:t.sbNo," "),n.xp6(2),n.hij(" ",n.xi3(5,11,null==t?null:t.sbDate,"dd/MM/yyyy")," "),n.xp6(3),n.hij(" ",null==t?null:t.adCode," "),n.xp6(2),n.hij(" ",null==t?null:t.portCode," "),n.xp6(2),n.hij(" ",null==t?null:t.edpmsStatus," "),n.xp6(2),n.hij(" ",null==t?null:t.adRefNo," "),n.xp6(2),n.hij(" ",null==t?null:t.sbAmount," "),n.xp6(2),n.hij(" ",null==t?null:t.sbBalanceAmount," "),n.xp6(2),n.hij(" ",null==t?null:t.systemStatus," "),n.xp6(2),n.hij(" ",null==t?null:t.docAvailable," "),n.xp6(2),n.Q6J("ngForOf",null==t?null:t.action)}}function w(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"div",29)(1,"div",30)(2,"div",31)(3,"div",32)(4,"div",33)(5,"div",34)(6,"div",35)(7,"h6",36),n._uU(8,"Debit Note"),n.qZA(),n._UZ(9,"iframe",37),n.TgZ(10,"button",38),n.NdJ("click",function(){const p=n.CHM(t).$implicit;return n.KtG(p.dismiss("Cross click"))}),n._uU(11,"OK"),n.qZA()()()()()()()()}}let y=(()=>{class o{constructor(t,i,a,p){this.userService=t,this.documentService=i,this.router=a,this.wininfo=p,this.bankAccounts=[],this.bankSelection=""}ngOnInit(){this.wininfo.set_controller_of_width(270,".content-wrap"),this.userService.getTeam().subscribe(t=>{this.masterTeam=t?.data[0]?.bankDetails,this.masterTeam.forEach(i=>this.bankAccounts.push(i?.bank)),console.log("banks:",this.bankAccounts)},t=>{console.log(t)}),this.documentService.getEDPMS().subscribe(t=>{this.edpmsData=t?.data,console.log("Edpms Data",this.edpmsData)},t=>{console.log(t)})}chooseBank(){this.bankSelection&&""!==this.bankSelection&&console.log(this.bankSelection," is selected")}actionEvent(t,i){"Upload Documents"===t?this.router.navigateByUrl("/home/upload;file=export;document=pipo"):"Create Documents"===t&&this.router.navigate(["/home/bill-lodgement",{sbNo:i}])}openNew(){this.router.navigateByUrl("/home/edpms-recon")}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(C.K),n.Y36(_.Z),n.Y36(g.F0),n.Y36(M.Y))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-edpms-recon-table"]],decls:51,vars:3,consts:[[1,"content-wrap","pb-2","scroll-bar-main"],["id","content","role","main",1,"content","table-padding"],[1,"header-panel"],[2,"display","flex","align-items","center","width","190px"],[1,"heading"],[2,"display","flex","flex-direction","row","justify-content","space-between","align-items","center","padding-top","0.8%","padding-left","3%","padding-bottom","0.8%","margin-left","10px","width","300px"],[2,"display","flex","align-items","center"],[2,"display","flex","align-items","center",3,"ngModel","ngModelChange"],["value","","disabled","","hidden",""],["style","min-width:100%;",3,"value",4,"ngFor","ngForOf"],[2,"padding-top","0.7%"],[1,"upload-button",3,"click"],[1,"analytics"],[1,"analytics-side",2,"width","100%"],["debitnotes",""],[1,"row",2,"width","100%"],["id","container",1,"col-12","mb-lg","padding",2,"width","100%","height","523px"],[1,"widget","pb-0","box-shadow",2,"width","120%","margin-left","10px"],[1,"widget-body","p-0","support","table-wrapper"],[1,"table","table-striped","mb-0",2,"width","100%"],[2,"width","100%"],[1,"table-tr"],["scope","col",1,"col-td-th-3"],["class","table-tr",4,"ngFor","ngForOf"],["content",""],[2,"min-width","100%",3,"value"],[1,"col-td-th-3"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],[1,"modal-body"],[1,"row","no-gutter"],[1,"col-md-7",2,"margin","10px"],[1,"login","d-flex","py-5",2,"padding","0px !important"],[1,"container","popup"],[1,"row"],[1,"col-lg-10","col-xl-7","mrg"],[1,"display-6"],["width","315%","height","500px"],["type","submit",1,"submitBTN",2,"margin-left","250px",3,"click"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"main",1)(2,"div",2)(3,"div",3)(4,"h3",4),n._uU(5,"EDPMS Recon"),n.qZA()(),n.TgZ(6,"div",5)(7,"div",6)(8,"select",7),n.NdJ("ngModelChange",function(p){return i.bankSelection=p})("ngModelChange",function(){return i.chooseBank()}),n.TgZ(9,"option",8),n._uU(10,"Select Bank"),n.qZA(),n.YNc(11,P,2,2,"option",9),n.qZA()(),n.TgZ(12,"div",10)(13,"button",11),n.NdJ("click",function(){return i.openNew()}),n._uU(14," Upload New "),n.qZA()()()(),n.TgZ(15,"div",12)(16,"div",13,14)(18,"div",15)(19,"div",16)(20,"section",17)(21,"div",18)(22,"table",19)(23,"thead",20)(24,"tr",21)(25,"th",22),n._uU(26,"Shipping Bill No."),n.qZA(),n.TgZ(27,"th",22),n._uU(28,"Shipping Bill Date"),n.qZA(),n.TgZ(29,"th",22),n._uU(30,"AD Code"),n.qZA(),n.TgZ(31,"th",22),n._uU(32,"Port Code"),n.qZA(),n.TgZ(33,"th",22),n._uU(34,"EDPMS STATUS"),n.qZA(),n.TgZ(35,"th",22),n._uU(36,"AD Ref No."),n.qZA(),n.TgZ(37,"th",22),n._uU(38,"SB Amount"),n.qZA(),n.TgZ(39,"th",22),n._uU(40,"SB Balance amount"),n.qZA(),n.TgZ(41,"th",22),n._uU(42,"System Status"),n.qZA(),n.TgZ(43,"th",22),n._uU(44,"Doc Available"),n.qZA(),n.TgZ(45,"th",22),n._uU(46,"Action"),n.qZA()()(),n.TgZ(47,"tbody"),n.YNc(48,u,24,14,"tr",23),n.qZA()()()()()()()()()(),n.YNc(49,w,12,0,"ng-template",null,24,n.W1O)),2&t&&(n.xp6(8),n.Q6J("ngModel",i.bankSelection),n.xp6(3),n.Q6J("ngForOf",i.bankAccounts),n.xp6(37),n.Q6J("ngForOf",i.edpmsData))},dependencies:[l.sg,d.YN,d.Kr,d.EJ,d.JJ,d.On,l.uU],styles:['.table-padding[_ngcontent-%COMP%]{background:white!important}.table_top[_ngcontent-%COMP%]{display:grid;grid-template-columns:28.55% 33% 36%;border-bottom:.5px solid rgba(0,0,0,.2);align-items:center}.bcw[_ngcontent-%COMP%]{background-color:#fff;color:#323e4a!important}.heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;color:#323e4a}.table-heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:500;color:#747474}.active[_ngcontent-%COMP%]{color:#49a2d7;cursor:pointer}table[_ngcontent-%COMP%]{margin-left:29px;width:98%!important}.dropdown[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.upload-button[_ngcontent-%COMP%]{color:#fff!important;font-weight:100;font-family:Poppins,sans-serif;padding:5px 8px;font-size:14px;background-color:#49a2d7;border:none;border-radius:5px;margin-left:2px;margin-right:1rem}.box-shadow[_ngcontent-%COMP%]{box-shadow:none!important;overflow:hidden}.rect[_ngcontent-%COMP%]{text-align:right;min-width:80px!important}.table-row[_ngcontent-%COMP%]{background-color:#fff!important;color:#707683}.table-row[_ngcontent-%COMP%]:hover{background:#f6f9ff!important;border-left:5px solid #49a2d7;cursor:pointer}.sb-no[_ngcontent-%COMP%]{color:#49a2d7}.display-6[_ngcontent-%COMP%]{text-align:center;font-weight:600;color:#606670;font-size:22px;margin-bottom:12px;margin-top:20px}.submitBTN[_ngcontent-%COMP%]{margin-top:10px;width:160px;height:40px;border:2px white solid;border-radius:20px;background-color:#51aee5;font-size:12px;color:#fff}.tblInput[_ngcontent-%COMP%]{border:1px solid #e3e6ee;border-radius:3px;width:140px}.savBtn[_ngcontent-%COMP%]{background-color:#49a2d7;color:#fff;border:1px solid rgba(0,0,0,.4);font-size:14px;cursor:pointer;border-radius:2px;width:60px}.customDropdown[_ngcontent-%COMP%]{display:inline-block;font-size:14px;padding-left:12px;padding-right:10px;height:24px;border-radius:2px;border:1px solid black;cursor:pointer;z-index:1}.customDropdown[_ngcontent-%COMP%]{position:relative;display:inline-block;font-size:14px;padding-left:12px;padding-right:10px;height:24px;border-radius:2px;border:1px solid black;margin-right:12px;cursor:pointer;z-index:1}.customDropdown[_ngcontent-%COMP%]:hover{color:#4b74ff!important}.dropdown-content[_ngcontent-%COMP%]{display:none;border:.01em solid black;background:white;transform:translate(-14px,-1px);box-shadow:0 4px 8px #0003;transition:.3s}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;padding:0 6px;color:#000;height:24px}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#49a2d7;color:#fff}.customDropdown[_ngcontent-%COMP%]   .dropIco[_ngcontent-%COMP%]{margin-left:7px}.dropdown-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}.fas[_ngcontent-%COMP%]{font-family:"Font Awesome 5 Free"!important}#drawer-toggle[_ngcontent-%COMP%]{position:absolute;opacity:0}#drawer-toggle-label[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;left:0;height:50px;width:50px;display:block;position:fixed;background:rgba(255,255,255,0);z-index:1}#drawer-toggle-label[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;height:2px;width:24px;background:#8d8d8d;left:13px;top:18px;box-shadow:0 6px #8d8d8d,0 12px #8d8d8d}#drawer[_ngcontent-%COMP%]{position:fixed;top:0;left:-300px;height:100%;width:300px;background:#2f2f2f;overflow-x:hidden;overflow-y:scroll;padding:20px;-webkit-overflow-scrolling:touch}#page-content[_ngcontent-%COMP%]{margin-left:0;margin-top:50px;width:100%;height:calc(100% - 50px);overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding:20px}#drawer-toggle[_ngcontent-%COMP%]:checked ~ #drawer-toggle-label[_ngcontent-%COMP%]{height:100%;width:calc(100% - 300px);background:rgba(255,255,255,.8)}#drawer-toggle[_ngcontent-%COMP%]:checked ~ #drawer-toggle-label[_ngcontent-%COMP%], #drawer-toggle[_ngcontent-%COMP%]:checked ~ header[_ngcontent-%COMP%]{left:300px}#drawer-toggle[_ngcontent-%COMP%]:checked ~ #drawer[_ngcontent-%COMP%]{left:0}#drawer-toggle[_ngcontent-%COMP%]:checked ~ #page-content[_ngcontent-%COMP%]{margin-left:300px}#drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}#drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:10px;color:#c7c7c7;text-decoration:none}#drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}@media all and (max-width: 350px){#drawer-toggle[_ngcontent-%COMP%]:checked ~ #drawer-toggle-label[_ngcontent-%COMP%]{height:100%;width:50px}#drawer-toggle[_ngcontent-%COMP%]:checked ~ #drawer-toggle-label[_ngcontent-%COMP%], #drawer-toggle[_ngcontent-%COMP%]:checked ~ header[_ngcontent-%COMP%]{left:calc(100% - 50px)}#drawer-toggle[_ngcontent-%COMP%]:checked ~ #drawer[_ngcontent-%COMP%]{width:calc(100% - 50px);padding:20px}#drawer-toggle[_ngcontent-%COMP%]:checked ~ #page-content[_ngcontent-%COMP%]{margin-left:calc(100% - 50px)}}*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;margin-left:23px;color:#323e4a}.table-heading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:500;color:#747474}.box-shadow[_ngcontent-%COMP%]{box-shadow:none!important}.table-padding[_ngcontent-%COMP%]{background:white!important;width:100%;border-radius:10px;box-shadow:0 0 2px 3px #0000002b;max-height:100%}.upload-button[_ngcontent-%COMP%]{color:#fff!important;font-weight:100;font-family:Poppins,sans-serif;padding:5px 8px;font-size:14px;background-color:#49a2d7;border:none;border-radius:5px;margin-left:2px;margin-right:2rem}button[_ngcontent-%COMP%]{outline:none}.table-row[_ngcontent-%COMP%]{background-color:#fff!important;color:#707683}.table-row[_ngcontent-%COMP%]:hover{background:#f6f9ff!important;border-left:5px solid #49a2d7}select[_ngcontent-%COMP%]{text-decoration:none;border:none;background:none;color:#49a2d7}select[_ngcontent-%COMP%]:focus{outline:none}.rect[_ngcontent-%COMP%]{text-align:right;min-width:80px!important}.sb-no[_ngcontent-%COMP%]{color:#49a2d7}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{height:68px;vertical-align:middle!important}.image[_ngcontent-%COMP%]{height:25px;width:25px;border-radius:50%;margin-top:12fvpx}.image2[_ngcontent-%COMP%]{margin-top:22px;margin-left:-13px}.fl[_ngcontent-%COMP%]{float:"left"}.fr[_ngcontent-%COMP%]{float:"right"}span.fs20[_ngcontent-%COMP%]{font-size:20px}span.fs16[_ngcontent-%COMP%]{font-size:16px}p.fs14[_ngcontent-%COMP%]{font-size:14px}.fs12[_ngcontent-%COMP%]{font-size:12px}.p-4[_ngcontent-%COMP%]{padding:4px}.p-8[_ngcontent-%COMP%]{z-index:5000;transform:scale(1);display:grid;grid-template-columns:29% 70%}.p-20[_ngcontent-%COMP%]{padding:20px!important}.p-12[_ngcontent-%COMP%]{padding:12px!important}.p-16[_ngcontent-%COMP%]{padding:16px!important}.pr-4[_ngcontent-%COMP%]{padding-right:4px}.pr-8[_ngcontent-%COMP%]{padding-right:8px!important}.pr-16[_ngcontent-%COMP%]{padding-right:16px}.pt-30[_ngcontent-%COMP%]{padding-top:30px!important}.pt-28[_ngcontent-%COMP%]{padding-top:28px!important}.pt-25[_ngcontent-%COMP%]{padding-top:25px!important}.pt-24[_ngcontent-%COMP%]{padding-top:24px!important}.pt-22[_ngcontent-%COMP%]{padding-top:22px!important}.pt-20[_ngcontent-%COMP%]{padding-top:20px!important}.pt-19[_ngcontent-%COMP%]{padding-top:19px!important}.pt-16[_ngcontent-%COMP%]{padding-top:16px!important}.pt-14[_ngcontent-%COMP%]{padding-top:14px!important}.pt-10[_ngcontent-%COMP%]{padding-top:10px!important}.pt-8[_ngcontent-%COMP%]{padding-top:8px!important}.pt-4[_ngcontent-%COMP%]{padding-top:4px}.pt-2[_ngcontent-%COMP%]{padding-top:2px}.pt-0[_ngcontent-%COMP%]{padding-top:0!important}.pb-28[_ngcontent-%COMP%]{padding-bottom:28px!important}.pb-16[_ngcontent-%COMP%]{padding-bottom:16px!important}.pv-4[_ngcontent-%COMP%]{padding-top:4px;padding-bottom:4px}.pv-8[_ngcontent-%COMP%]{padding-top:8px!important;padding-bottom:8px!important}.pv-10[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.pv-20[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.pv-14[_ngcontent-%COMP%]{padding-top:14px!important;padding-bottom:14px!important}.pv-16[_ngcontent-%COMP%]{padding-top:16px!important;padding-bottom:16px!important}.ph-5[_ngcontent-%COMP%]{padding-right:5px!important;padding-left:5px!important}.ph-16[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}.ph-8[_ngcontent-%COMP%]{padding-left:8px!important;padding-right:8px!important}.ph-10[_ngcontent-%COMP%]{padding-left:10px!important;padding-right:10px!important}.ph-4[_ngcontent-%COMP%]{padding-left:4px;padding-right:4px}.ph-32[_ngcontent-%COMP%]{padding-left:32px;padding-right:32px}.ph-38[_ngcontent-%COMP%]{padding-left:38px;padding-right:38px}.ph-44[_ngcontent-%COMP%]{padding-left:44px;padding-right:44px}.bb[_ngcontent-%COMP%]{border-bottom:.1px solid #d3d3d3;border-right:.1px solid #d3d3d3}.bc[_ngcontent-%COMP%]{background-color:#f8fafd}.bcw[_ngcontent-%COMP%]{background-color:#fff;color:#323e4a!important}.m-4[_ngcontent-%COMP%]{margin:4px!important}.m-8[_ngcontent-%COMP%]{margin:8px!important}.m-16[_ngcontent-%COMP%]{margin:16px!important}.mr-20[_ngcontent-%COMP%]{margin-right:20px!important}.mr-8[_ngcontent-%COMP%]{margin-right:8px!important}.ml-20[_ngcontent-%COMP%]{margin-left:20px!important}.ml-24[_ngcontent-%COMP%]{margin-left:24px!important}.mt-4[_ngcontent-%COMP%]{margin-top:4px!important}.mt-8[_ngcontent-%COMP%]{margin-top:8px!important}.mt-16[_ngcontent-%COMP%]{margin-top:16px!important}.mt-24[_ngcontent-%COMP%]{margin-top:24px!important}.mt-38[_ngcontent-%COMP%]{margin-top:38px!important}.mh-8[_ngcontent-%COMP%]{margin-left:8px!important;margin-right:8px!important}.mh-16[_ngcontent-%COMP%]{margin-left:16px!important;margin-right:16px!important}.mv-4[_ngcontent-%COMP%]{margin-top:4px!important;margin-bottom:4px!important}.mv-16[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:16px}.mv-24[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}.mh--16[_ngcontent-%COMP%]{margin-left:-16px!important;margin-right:-16px!important}.mh-8[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}.w100[_ngcontent-%COMP%]{width:100%}.w70[_ngcontent-%COMP%]{width:70%}.w50[_ngcontent-%COMP%]{width:50%}.w30[_ngcontent-%COMP%]{width:30%}.pc1[_ngcontent-%COMP%]{width:44.5%;height:35px;float:right;border-left:1px solid rgb(104,103,103)}.tabbed[_ngcontent-%COMP%]{overflow-x:hidden;background-color:#f8fafd;display:flex;flex-direction:column;justify-content:center;padding-right:28px;padding-left:32px}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:none}.tabs[_ngcontent-%COMP%]{display:flex;align-items:stretch;list-style:none;background-color:#fff;height:100%;padding:1% 0 1% 30px;margin-left:-30px;width:113%}.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px}.tab[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-right:10px;border-right:1px solid black}.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]{border-top-color:#333;color:#333}.tab-content[_ngcontent-%COMP%]{display:none;color:#777;background:#f8fafd;margin:10px!important}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%]{color:#49a2d7;margin-right:10px}.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4){display:block}.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus{border:2px solid red}.form[_ngcontent-%COMP%]{margin-left:38px!important;margin-right:5%;top:50%;left:50%;height:316px;background-color:#fff;border:1px dashed rgba(0,0,0,.4)}.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;text-align:center;line-height:30px;color:#303030}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:EuropaNuova-Regular,sans-serif!important;position:absolute;margin:0;width:89%;height:313px;padding:0;outline:none;cursor:pointer;opacity:0}.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;font-weight:600;border:none;margin-left:36.5%;height:42px;cursor:pointer;width:160px;background-color:#49a2d7;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#149174;color:#0c5645}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{border:0}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none}.xbutton[_ngcontent-%COMP%]{margin-bottom:30px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#49a2d7;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.ybutton[_ngcontent-%COMP%]{margin-bottom:15px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#0c354d;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.zbutton[_ngcontent-%COMP%]{margin-bottom:15px;font-family:Poppins,sans-serif!important;font-weight:600;border:none;height:42px;background-color:#947551;border-radius:4px;color:#fff;box-shadow:0 4px 10px #49a2d7;outline:none}.border1[_ngcontent-%COMP%]{border-left:3px solid #174d72}.border2[_ngcontent-%COMP%]{border-left:3px solid #5fe6e7}.border3[_ngcontent-%COMP%]{border-left:3px solid #e7845f}.form-wrapper1[_ngcontent-%COMP%]{flex-direction:column;width:100%}.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:30%;height:5.5%}.form-wrapper1.td[_ngcontent-%COMP%]{width:100%;width:7%}.full-input[_ngcontent-%COMP%]{margin-left:18px;margin-bottom:10px;display:inline-block;padding:3px;height:74px;width:177px;background-color:#fff;border-radius:5px;box-shadow:4px 4px 8px 4px #eeeefa}.smalll-input[_ngcontent-%COMP%]{width:160px!important;outline:none;border:none;display:block;border-radius:4px;border:1px solid #d5dbe8;height:35px}label[_ngcontent-%COMP%]{display:block;padding:5px 0 5px 5px;margin-bottom:0!important;font-size:12px;font-weight:500;color:#72768a}.sh1[_ngcontent-%COMP%]{margin-left:15px;margin-top:15px;font-size:16px;color:#606670}.ss[_ngcontent-%COMP%]{padding:0!important}#customers[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%!important;margin-left:19px!important;border-right:1px solid #ddd;border-left:1px solid #ddd}#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{height:52px!important;text-align:left;font-weight:300;background-color:#ddd}#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:52px!important}.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:inline-block;height:17px;width:17px;color:#49a2d7;margin-bottom:10px}.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + input[_ngcontent-%COMP%]{background-color:#bfb;border-color:#4c4}.label1[_ngcontent-%COMP%]{display:inline-block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-left:30px}.tab1[_ngcontent-%COMP%]{margin-top:20px}.at[_ngcontent-%COMP%]{font-size:16px;padding-right:20px;padding-left:10px}.ctb[_ngcontent-%COMP%]{font-size:13px;margin-left:210px;background-color:#49a2d7;padding:12px 30px 11px;color:#fff;border-radius:4px;cursor:pointer;font-weight:500}.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:inline-block;height:17px;width:17px;color:#49a2d7;margin-bottom:10px;border:2px solid #49a2d7}.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + input[_ngcontent-%COMP%]{background-color:#bfb;border-color:#4c4}.label1[_ngcontent-%COMP%]{display:inline-block;margin-bottom:10px;padding-right:12px;color:#606670;font-size:12px;letter-spacing:1px;cursor:pointer;transition:all .3s;margin-left:30px}.radio1[_ngcontent-%COMP%]{margin-top:20px}.stp1[_ngcontent-%COMP%]{font-size:25px;font-weight:500;margin-bottom:10px;color:#000}.stp2[_ngcontent-%COMP%]{font-size:22px;margin-bottom:10px;color:#000}.stp3[_ngcontent-%COMP%]{color:#4a4a4a;font-size:14px}.of1[_ngcontent-%COMP%]{border:1px solid #ccc;font:16px/26px Georgia,Garamond,Serif;overflow:auto}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{cursor:pointer}.side_document_list[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;align-items:center;height:170vh;border-right:.3px solid rgba(0,0,0,.2)}.profile_class[_ngcontent-%COMP%]{display:flex;width:100%;border-bottom:.3px solid rgba(0,0,0,.2);padding:3% 6%;justify-content:center;cursor:pointer}.activeBtn[_ngcontent-%COMP%]{background-color:#f8fafd;border-left:8px solid rgb(61,116,197)}.table_top[_ngcontent-%COMP%]{display:grid;grid-template-columns:29.55% 33% 30% 6%;border-bottom:.5px solid rgba(0,0,0,.2);align-items:center}.invoices_tab[_ngcontent-%COMP%]{width:100%;display:flex;height:100vh;background-color:#f8fafd}.invoices_inner[_ngcontent-%COMP%]{width:100%;background-color:#f8fafd}.inner_tab_content[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;background-color:#fff}.invoice_head[_ngcontent-%COMP%]{width:95%;display:flex;justify-content:space-between;align-items:center;padding-left:5%}.serial_detail[_ngcontent-%COMP%]{width:93%;margin-top:10px;display:flex;justify-content:right;text-align:right;font-weight:500}.transaction_tab[_ngcontent-%COMP%]{width:770px;height:1387px}.form_inner[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;text-align:center;justify-content:center}.opt[_ngcontent-%COMP%]{background-color:#49a2d7;padding:0 3%;height:42px;box-shadow:4px 0 7px #109cf1;border:none;color:#fff}#container[_ngcontent-%COMP%]{overflow:auto}.savBtn[_ngcontent-%COMP%]{background-color:#49a2d7;color:#fff;border:1px solid rgba(0,0,0,.4);font-size:14px;cursor:pointer;border-radius:2px;width:60px;margin-left:-2%}.content-wrap[_ngcontent-%COMP%]{z-index:0;height:100vh;position:absolute;left:260px;margin:auto;width:78vw}#container[_ngcontent-%COMP%]{width:100%;margin:auto;min-height:100%}table[_ngcontent-%COMP%], .analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]{overflow:hidden}.header-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-top:.8%;padding-left:1%;padding-bottom:.8%;border-bottom:1px solid black;width:99%}select[_ngcontent-%COMP%]{text-decoration:none;border:1px solid;background:none;color:#49a2d7;padding:5px;border-radius:5px}']}),o})(),k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[m.D,f.FF,h.g],imports:[b.$,g.Bz.forChild([{path:"",component:y,pathMatch:"full"}]),x.zk.forRoot()]}),o})()}}]);