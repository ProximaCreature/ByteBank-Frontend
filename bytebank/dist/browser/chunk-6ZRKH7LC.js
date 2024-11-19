import{a as M,b as _,c as V,d as j,e as k,f as z,g as H,h as Q,i as $,j as q,k as G,l as J,m as K,n as U,o as X,p as Y,q as D,r as Z,s as E,t as ee,u as te}from"./chunk-JLM5XJLQ.js";import{a as S}from"./chunk-EVA45I4M.js";import"./chunk-NWELVF2E.js";import"./chunk-7N6LDA7G.js";import{h as w,k as L}from"./chunk-XGI67S2B.js";import"./chunk-EJJBCPAK.js";import{$b as O,Ab as c,Bb as x,Cb as h,Lc as y,Mc as F,Nb as R,Nc as N,Ob as I,Pb as W,Tb as l,Ub as C,Va as r,Vb as d,Wa as s,_b as v,ac as A,bc as u,dc as f,ha as g,kb as b,pb as p,yb as a,zb as n}from"./chunk-2M3RSBYZ.js";var B=class t{constructor(i,e){this.billController=i;this.route=e;this.getWallet()}wallet={};getWallet(){let i=this.route.snapshot.paramMap.get("walletName");this.billController.getWalletBill(i).subscribe(e=>{e?this.wallet=new j(e.id,e.userId,e.nombreCartera,e.plazoOperacion,e.fechaDescuento,e.tcea,e.valorRecibido,e.valorEntregado):console.error("Response is empty")},e=>{console.log(e)})}static \u0275fac=function(e){return new(e||t)(s(S),s(w))};static \u0275cmp=g({type:t,selectors:[["app-wallet-details"]],standalone:!0,features:[v],decls:39,vars:18,consts:[[1,"container"],[1,"content"],[1,"title","mt-4","mb-10","text-blue-950"],[1,"mb-16"],[1,"subtitle"],[1,"summary","w-96","pl-6","max-sm:max-w-64"],[1,"summary-item"],[1,"label","text-sm","text-blue-950"],[1,"value","text-sm","text-blue-950"]],template:function(e,o){e&1&&(a(0,"mat-sidenav-container",0)(1,"mat-sidenav-content")(2,"div",1)(3,"div",2)(4,"h2"),l(5),n()(),a(6,"div",3)(7,"p",4),l(8,"Resumen"),n()(),a(9,"div",5)(10,"div",6)(11,"span",7),l(12,"TCEA"),n(),a(13,"span",8),l(14),u(15,"percent"),n()(),a(16,"div",6)(17,"span",7),l(18,"Valor Recibido"),n(),a(19,"span",8),l(20),u(21,"number"),n()(),a(22,"div",6)(23,"span",7),l(24,"Valor Entregado"),n(),a(25,"span",8),l(26),u(27,"number"),n()(),a(28,"div",6)(29,"span",7),l(30,"Fecha de descuento"),n(),a(31,"span",8),l(32),u(33,"date"),n()(),a(34,"div",6)(35,"span",7),l(36,"Fecha de vencimiento"),n(),a(37,"span",8),l(38),n()()()()()()),e&2&&(r(5),C(o.wallet.nombreCartera),r(9),C(f(15,6,o.wallet.tcea,"1.7-7")),r(6),C(f(21,9,o.wallet.valorRecibido,"1.2-2")),r(6),C(f(27,12,o.wallet.valorEntregado,"1.2-2")),r(6),C(f(33,15,o.wallet.fechaDescuento,"dd/MM/yyyy")),r(6),d("",o.wallet.plazoOperacion," d\xEDas"))},dependencies:[V,_,M,F,y,N],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem;background-color:#fff;box-shadow:0 2px 4px #0000001a}.content[_ngcontent-%COMP%]{max-width:600px;padding-top:1rem}h2[_ngcontent-%COMP%]{font-size:24px;font-weight:700;margin:0}.subtitle[_ngcontent-%COMP%]{font-size:16px;font-weight:500;margin-bottom:1rem;color:#31505f}.summary[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.summary-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:.5rem 0;font-size:16px}.label[_ngcontent-%COMP%]{font-weight:500}.value[_ngcontent-%COMP%]{font-weight:400}"]})};var T=class{id;walletId;name;faceValue;expirationDate;currency;constructor(i,e,o,m,oe,re){this.id=i,this.walletId=e,this.name=o,this.faceValue=m,this.expirationDate=oe,this.currency=re}};var se=()=>[5,10,20];function pe(t,i){t&1&&(a(0,"th",12),l(1," Nombre "),n())}function ce(t,i){if(t&1&&(a(0,"td",13),l(1),n()),t&2){let e=i.$implicit;r(),d(" ",e.name," ")}}function de(t,i){t&1&&(a(0,"th",12),l(1," Valor Nominal "),n())}function ue(t,i){if(t&1&&(a(0,"td",13),l(1),n()),t&2){let e=i.$implicit;r(),d(" ",e.faceValue," ")}}function fe(t,i){t&1&&(a(0,"th",12),l(1," Fecha de firma "),n())}function ge(t,i){if(t&1&&(a(0,"td",13),l(1),u(2,"date"),n()),t&2){let e=i.$implicit;r(),d(" ",f(2,1,e.expirationDate,"dd/MM/yyyy")," ")}}function be(t,i){t&1&&(a(0,"th",12),l(1," Divisa "),n())}function Ce(t,i){if(t&1&&(a(0,"td",13),l(1),n()),t&2){let e=i.$implicit;r(),d(" ",e.currency," ")}}function ve(t,i){t&1&&c(0,"tr",14)}function we(t,i){t&1&&c(0,"tr",15)}var P=class t{constructor(i,e){this.billController=i;this.route=e}displayedColumns=["name","face_value","signature_date","currency"];dataSource=new Y;paginator;sort;ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.getBills()}getBills(){let i=this.route.snapshot.paramMap.get("walletName");this.billController.getWalletBill(i).subscribe(e=>{if(e&&Array.isArray(e.bills)){let o=e.bills.map(m=>new T(m.id,m.walletId,m.name,m.faceValue,m.expirationDate,m.currency));this.dataSource.data=o}else console.error("Response is not an array")},e=>{console.log(e)})}static \u0275fac=function(e){return new(e||t)(s(S),s(w))};static \u0275cmp=g({type:t,selectors:[["app-wallet-bills-table"]],viewQuery:function(e,o){if(e&1&&(R(D,5),R(E,5)),e&2){let m;I(m=W())&&(o.paginator=m.first),I(m=W())&&(o.sort=m.first)}},standalone:!0,features:[v],decls:18,vars:5,consts:[[1,"invoices-table-container"],[1,"invoices-table","pl-6","max-sm:pl-0"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","face_value"],["matColumnDef","signature_date"],["matColumnDef","currency"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"table",2),x(3,3),b(4,pe,2,0,"th",4)(5,ce,2,1,"td",5),h(),x(6,6),b(7,de,2,0,"th",4)(8,ue,2,1,"td",5),h(),x(9,7),b(10,fe,2,0,"th",4)(11,ge,3,4,"td",5),h(),x(12,8),b(13,be,2,0,"th",4)(14,Ce,2,1,"td",5),h(),b(15,ve,1,0,"tr",9)(16,we,1,0,"tr",10),n(),c(17,"mat-paginator",11),n()()),e&2&&(r(2),p("dataSource",o.dataSource),r(13),p("matHeaderRowDef",o.displayedColumns),r(),p("matRowDefColumns",o.displayedColumns),r(),p("pageSizeOptions",O(4,se)))},dependencies:[X,k,H,G,Q,z,J,$,q,K,U,Z,D,te,E,ee,y],styles:[".invoices-table-container[_ngcontent-%COMP%]{overflow-x:auto}@media (max-width: 600px){.invoices-table[_ngcontent-%COMP%]{max-width:100%}}"]})};var xe=t=>["/createBill",t],le=class t{constructor(i){this.route=i}get walletName(){return this.route.snapshot.paramMap.get("walletName")}static \u0275fac=function(e){return new(e||t)(s(w))};static \u0275cmp=g({type:t,selectors:[["app-wallet-details-page"]],standalone:!0,features:[v],decls:10,vars:3,consts:[[1,"container"],["content",""],[1,"title-container"],[1,"block","text-primary","font-medium","text-base","text-center","mt-3"],["mat-raised-button","","color","primary",1,"custom-button",3,"routerLink"]],template:function(e,o){e&1&&(a(0,"mat-sidenav-container",0)(1,"mat-sidenav-content")(2,"div",1),c(3,"app-wallet-details"),a(4,"div",2)(5,"p",3),l(6," Facturas/Letras pertenecientes a la cartera "),n(),a(7,"button",4),l(8," AGREGAR "),n()(),c(9,"app-wallet-bills-table"),n()()()),e&2&&(r(7),p("routerLink",A(1,xe,o.walletName)))},dependencies:[_,M,B,P,L],styles:[".container[_ngcontent-%COMP%]{height:100vh;background-color:#f9fafb;display:flex;justify-content:center;align-items:center}.subtitle[_ngcontent-%COMP%]{font-size:16px;font-weight:500;margin-bottom:1rem;color:#31505f}.content[_ngcontent-%COMP%]{padding-bottom:1rem}.custom-button[_ngcontent-%COMP%]{background-color:#0a2c3d!important;color:#fff!important;border-radius:8px!important;padding:10px 20px!important;font-size:16px;font-weight:700;box-shadow:none!important;transition:background-color .3s ease}.custom-button[_ngcontent-%COMP%]:hover{background-color:#fff!important;color:#0a2c3d!important}.title-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:end;gap:4px;margin-bottom:1rem;margin-top:1.25rem}"]})};export{le as WalletDetailsPageComponent};