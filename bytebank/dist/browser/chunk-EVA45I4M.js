import{a as l,n,o as c}from"./chunk-XGI67S2B.js";import{Z as o,ca as i}from"./chunk-2M3RSBYZ.js";var a=class r{constructor(t,e){this.http=t;this.authService=e}baseUrl=n.baseUrl;getByWalletId(t){let e={Authorization:`Bearer ${this.authService.token}`};return this.http.get(`${this.baseUrl}/wallets/${t}`,{headers:e})}createBill(t){let e={Authorization:`Bearer ${this.authService.token}`};return this.http.post(`${this.baseUrl}/bills`,t,{headers:e})}static \u0275fac=function(e){return new(e||r)(i(l),i(c))};static \u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"})};var m=class r{constructor(t){this.billService=t}getWalletBill(t){return this.billService.getByWalletId(t)}createBill(t){return this.billService.createBill(t)}static \u0275fac=function(e){return new(e||r)(i(a))};static \u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"})};export{m as a};
