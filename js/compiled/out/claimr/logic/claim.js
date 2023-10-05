// Compiled by ClojureScript 1.10.773 {}
goog.provide('claimr.logic.claim');
goog.require('cljs.core');
claimr.logic.claim.extract_claim_from_records = (function claimr$logic$claim$extract_claim_from_records(record_set){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,r){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"record-name","record-name",-541851354).cljs$core$IFn$_invoke$arity$1(r),cljs.core.dissoc.call(null,r,new cljs.core.Keyword(null,"record-name","record-name",-541851354)));
}),cljs.core.PersistentArrayMap.EMPTY,record_set),"Claim Adjustments",cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__43557_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__43557_SHARP_),"CAS");
}),record_set)));
});

//# sourceMappingURL=claim.js.map?rel=1696393768854
