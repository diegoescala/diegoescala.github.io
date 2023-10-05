// Compiled by ClojureScript 1.10.773 {}
goog.provide('claimr.logic.parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('claimr.data.fields');
goog.require('claimr.logic.claim');
goog.require('cljs.pprint');
claimr.logic.parser.dependent_elements = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"NM1",(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"N1",(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"REF",(1)], null)], null);
claimr.logic.parser.set_fields = (function claimr$logic$parser$set_fields(elements){
var dfields = cljs.core.take.call(null,(20),cljs.core.map.call(null,(function (p1__45017_SHARP_){
return cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45017_SHARP_));
}),cljs.core.range.call(null,(20))));
var segment_fields = cljs.core.flatten.call(null,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-name","record-name",-541851354),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$2(cljs.core.get.call(null,claimr.data.fields.fields,cljs.core.first.call(null,elements)),dfields)));
var field_map = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,segment_fields,cljs.core.flatten.call(null,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,claimr.data.fields.fields,cljs.core.first.call(null,elements)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.first.call(null,elements);
}
})()], null),elements))));

return cljs.core.reduce.call(null,(function (a,m){
return cljs.core.assoc.call(null,a,cljs.core.first.call(null,m),cljs.core.second.call(null,m));
}),cljs.core.PersistentArrayMap.EMPTY,field_map);
});
claimr.logic.parser.split_lines = (function claimr$logic$parser$split_lines(text){
return clojure.string.split.call(null,text,/\n/);
});
claimr.logic.parser.combine_elements = (function claimr$logic$parser$combine_elements(elements,index1,index1_value,index2){
if((cljs.core.count.call(null,elements) > (function (){var x__4214__auto__ = index1;
var y__4215__auto__ = index2;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())){
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,elements,index1),index1_value)){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,elements));
var combined = cljs.core.assoc.call(null,indexed,index1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index1_value),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,indexed,index2))].join(''));
return cljs.core.vals.call(null,cljs.core.sort_by.call(null,cljs.core.key,combined));
} else {
return elements;
}
} else {
return elements;
}
});
claimr.logic.parser.partition_with = (function claimr$logic$parser$partition_with(f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5720__auto__ = cljs.core.seq.call(null,coll);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var run = cljs.core.cons.call(null,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.complement.call(null,f),cljs.core.next.call(null,s)));
return cljs.core.cons.call(null,run,claimr.logic.parser.partition_with.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run),s))));
} else {
return null;
}
}),null,null));
});
claimr.logic.parser.split_elements = (function claimr$logic$parser$split_elements(segment){
return clojure.string.split.call(null,segment,/\*/);
});
claimr.logic.parser.partition_on = (function claimr$logic$parser$partition_on(type,coll){
return claimr.logic.parser.partition_with.call(null,(function (p1__45018_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__45018_SHARP_),type);
}),coll);
});
claimr.logic.parser.extract_claims = (function claimr$logic$parser$extract_claims(records){
return cljs.core.map.call(null,(function (p1__45020_SHARP_){
return claimr.logic.claim.extract_claim_from_records.call(null,p1__45020_SHARP_);
}),cljs.core.filter.call(null,(function (p1__45019_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__45019_SHARP_)),"CLP");
}),claimr.logic.parser.partition_on.call(null,"CLP",records)));
});
claimr.logic.parser.parse835 = (function claimr$logic$parser$parse835(text){
return cljs.core.map.call(null,claimr.logic.parser.set_fields,cljs.core.map.call(null,(function (p1__45021_SHARP_){
return cljs.core.reduce.call(null,(function (a,deps){
return claimr.logic.parser.combine_elements.call(null,a,cljs.core.nth.call(null,deps,(0)),cljs.core.nth.call(null,deps,(1)),cljs.core.nth.call(null,deps,(2)));
}),p1__45021_SHARP_,claimr.logic.parser.dependent_elements);
}),cljs.core.map.call(null,claimr.logic.parser.split_elements,cljs.core.map.call(null,clojure.string.trim,claimr.logic.parser.split_lines.call(null,text)))));
});

//# sourceMappingURL=parser.js.map?rel=1696400513490
