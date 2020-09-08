// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29945){
var map__29946 = p__29945;
var map__29946__$1 = (((((!((map__29946 == null))))?(((((map__29946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29946):map__29946);
var m = map__29946__$1;
var n = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29948_29980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29949_29981 = null;
var count__29950_29982 = (0);
var i__29951_29983 = (0);
while(true){
if((i__29951_29983 < count__29950_29982)){
var f_29984 = cljs.core._nth.call(null,chunk__29949_29981,i__29951_29983);
cljs.core.println.call(null,"  ",f_29984);


var G__29985 = seq__29948_29980;
var G__29986 = chunk__29949_29981;
var G__29987 = count__29950_29982;
var G__29988 = (i__29951_29983 + (1));
seq__29948_29980 = G__29985;
chunk__29949_29981 = G__29986;
count__29950_29982 = G__29987;
i__29951_29983 = G__29988;
continue;
} else {
var temp__5720__auto___29989 = cljs.core.seq.call(null,seq__29948_29980);
if(temp__5720__auto___29989){
var seq__29948_29990__$1 = temp__5720__auto___29989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29948_29990__$1)){
var c__4550__auto___29991 = cljs.core.chunk_first.call(null,seq__29948_29990__$1);
var G__29992 = cljs.core.chunk_rest.call(null,seq__29948_29990__$1);
var G__29993 = c__4550__auto___29991;
var G__29994 = cljs.core.count.call(null,c__4550__auto___29991);
var G__29995 = (0);
seq__29948_29980 = G__29992;
chunk__29949_29981 = G__29993;
count__29950_29982 = G__29994;
i__29951_29983 = G__29995;
continue;
} else {
var f_29996 = cljs.core.first.call(null,seq__29948_29990__$1);
cljs.core.println.call(null,"  ",f_29996);


var G__29997 = cljs.core.next.call(null,seq__29948_29990__$1);
var G__29998 = null;
var G__29999 = (0);
var G__30000 = (0);
seq__29948_29980 = G__29997;
chunk__29949_29981 = G__29998;
count__29950_29982 = G__29999;
i__29951_29983 = G__30000;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30001 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30001);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30001)))?cljs.core.second.call(null,arglists_30001):arglists_30001));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29952_30002 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29953_30003 = null;
var count__29954_30004 = (0);
var i__29955_30005 = (0);
while(true){
if((i__29955_30005 < count__29954_30004)){
var vec__29966_30006 = cljs.core._nth.call(null,chunk__29953_30003,i__29955_30005);
var name_30007 = cljs.core.nth.call(null,vec__29966_30006,(0),null);
var map__29969_30008 = cljs.core.nth.call(null,vec__29966_30006,(1),null);
var map__29969_30009__$1 = (((((!((map__29969_30008 == null))))?(((((map__29969_30008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29969_30008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969_30008):map__29969_30008);
var doc_30010 = cljs.core.get.call(null,map__29969_30009__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30011 = cljs.core.get.call(null,map__29969_30009__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30007);

cljs.core.println.call(null," ",arglists_30011);

if(cljs.core.truth_(doc_30010)){
cljs.core.println.call(null," ",doc_30010);
} else {
}


var G__30012 = seq__29952_30002;
var G__30013 = chunk__29953_30003;
var G__30014 = count__29954_30004;
var G__30015 = (i__29955_30005 + (1));
seq__29952_30002 = G__30012;
chunk__29953_30003 = G__30013;
count__29954_30004 = G__30014;
i__29955_30005 = G__30015;
continue;
} else {
var temp__5720__auto___30016 = cljs.core.seq.call(null,seq__29952_30002);
if(temp__5720__auto___30016){
var seq__29952_30017__$1 = temp__5720__auto___30016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29952_30017__$1)){
var c__4550__auto___30018 = cljs.core.chunk_first.call(null,seq__29952_30017__$1);
var G__30019 = cljs.core.chunk_rest.call(null,seq__29952_30017__$1);
var G__30020 = c__4550__auto___30018;
var G__30021 = cljs.core.count.call(null,c__4550__auto___30018);
var G__30022 = (0);
seq__29952_30002 = G__30019;
chunk__29953_30003 = G__30020;
count__29954_30004 = G__30021;
i__29955_30005 = G__30022;
continue;
} else {
var vec__29971_30023 = cljs.core.first.call(null,seq__29952_30017__$1);
var name_30024 = cljs.core.nth.call(null,vec__29971_30023,(0),null);
var map__29974_30025 = cljs.core.nth.call(null,vec__29971_30023,(1),null);
var map__29974_30026__$1 = (((((!((map__29974_30025 == null))))?(((((map__29974_30025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29974_30025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29974_30025):map__29974_30025);
var doc_30027 = cljs.core.get.call(null,map__29974_30026__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30028 = cljs.core.get.call(null,map__29974_30026__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30024);

cljs.core.println.call(null," ",arglists_30028);

if(cljs.core.truth_(doc_30027)){
cljs.core.println.call(null," ",doc_30027);
} else {
}


var G__30029 = cljs.core.next.call(null,seq__29952_30017__$1);
var G__30030 = null;
var G__30031 = (0);
var G__30032 = (0);
seq__29952_30002 = G__30029;
chunk__29953_30003 = G__30030;
count__29954_30004 = G__30031;
i__29955_30005 = G__30032;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__29976 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29977 = null;
var count__29978 = (0);
var i__29979 = (0);
while(true){
if((i__29979 < count__29978)){
var role = cljs.core._nth.call(null,chunk__29977,i__29979);
var temp__5720__auto___30033__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30033__$1)){
var spec_30034 = temp__5720__auto___30033__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30034));
} else {
}


var G__30035 = seq__29976;
var G__30036 = chunk__29977;
var G__30037 = count__29978;
var G__30038 = (i__29979 + (1));
seq__29976 = G__30035;
chunk__29977 = G__30036;
count__29978 = G__30037;
i__29979 = G__30038;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29976);
if(temp__5720__auto____$1){
var seq__29976__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29976__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29976__$1);
var G__30039 = cljs.core.chunk_rest.call(null,seq__29976__$1);
var G__30040 = c__4550__auto__;
var G__30041 = cljs.core.count.call(null,c__4550__auto__);
var G__30042 = (0);
seq__29976 = G__30039;
chunk__29977 = G__30040;
count__29978 = G__30041;
i__29979 = G__30042;
continue;
} else {
var role = cljs.core.first.call(null,seq__29976__$1);
var temp__5720__auto___30043__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30043__$2)){
var spec_30044 = temp__5720__auto___30043__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30044));
} else {
}


var G__30045 = cljs.core.next.call(null,seq__29976__$1);
var G__30046 = null;
var G__30047 = (0);
var G__30048 = (0);
seq__29976 = G__30045;
chunk__29977 = G__30046;
count__29978 = G__30047;
i__29979 = G__30048;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30049 = cljs.core.conj.call(null,via,t);
var G__30050 = cljs.core.ex_cause.call(null,t);
via = G__30049;
t = G__30050;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30053 = datafied_throwable;
var map__30053__$1 = (((((!((map__30053 == null))))?(((((map__30053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30053):map__30053);
var via = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30054 = cljs.core.last.call(null,via);
var map__30054__$1 = (((((!((map__30054 == null))))?(((((map__30054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30054):map__30054);
var type = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30055 = data;
var map__30055__$1 = (((((!((map__30055 == null))))?(((((map__30055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30055):map__30055);
var problems = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30056 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30056__$1 = (((((!((map__30056 == null))))?(((((map__30056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);
var top_data = map__30056__$1;
var source = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30061 = phase;
var G__30061__$1 = (((G__30061 instanceof cljs.core.Keyword))?G__30061.fqn:null);
switch (G__30061__$1) {
case "read-source":
var map__30062 = data;
var map__30062__$1 = (((((!((map__30062 == null))))?(((((map__30062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30062):map__30062);
var line = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30064 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30064__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30064,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30064);
var G__30064__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30064__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30064__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30064__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30064__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30065 = top_data;
var G__30065__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30065,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30065);
var G__30065__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30065__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30065__$1);
var G__30065__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30065__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30065__$2);
var G__30065__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30065__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30065__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30065__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30065__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30066 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30066,(0),null);
var method = cljs.core.nth.call(null,vec__30066,(1),null);
var file = cljs.core.nth.call(null,vec__30066,(2),null);
var line = cljs.core.nth.call(null,vec__30066,(3),null);
var G__30069 = top_data;
var G__30069__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30069,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30069);
var G__30069__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30069__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30069__$1);
var G__30069__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__30069__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30069__$2);
var G__30069__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30069__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30069__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30069__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30069__$4;
}

break;
case "execution":
var vec__30070 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30070,(0),null);
var method = cljs.core.nth.call(null,vec__30070,(1),null);
var file = cljs.core.nth.call(null,vec__30070,(2),null);
var line = cljs.core.nth.call(null,vec__30070,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30070,source__$1,method,file,line,G__30061,G__30061__$1,map__30053,map__30053__$1,via,trace,phase,map__30054,map__30054__$1,type,message,data,map__30055,map__30055__$1,problems,fn,caller,map__30056,map__30056__$1,top_data,source){
return (function (p1__30052_SHARP_){
var or__4131__auto__ = (p1__30052_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30052_SHARP_);
}
});})(vec__30070,source__$1,method,file,line,G__30061,G__30061__$1,map__30053,map__30053__$1,via,trace,phase,map__30054,map__30054__$1,type,message,data,map__30055,map__30055__$1,problems,fn,caller,map__30056,map__30056__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30073 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30073__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30073,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30073);
var G__30073__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30073__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30073__$1);
var G__30073__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30073__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30073__$2);
var G__30073__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30073__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30073__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30073__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30073__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30061__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30077){
var map__30078 = p__30077;
var map__30078__$1 = (((((!((map__30078 == null))))?(((((map__30078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30078):map__30078);
var triage_data = map__30078__$1;
var phase = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30080 = phase;
var G__30080__$1 = (((G__30080 instanceof cljs.core.Keyword))?G__30080.fqn:null);
switch (G__30080__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30081_30090 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30082_30091 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30083_30092 = true;
var _STAR_print_fn_STAR__temp_val__30084_30093 = ((function (_STAR_print_newline_STAR__orig_val__30081_30090,_STAR_print_fn_STAR__orig_val__30082_30091,_STAR_print_newline_STAR__temp_val__30083_30092,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30081_30090,_STAR_print_fn_STAR__orig_val__30082_30091,_STAR_print_newline_STAR__temp_val__30083_30092,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30083_30092;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30084_30093;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30081_30090,_STAR_print_fn_STAR__orig_val__30082_30091,_STAR_print_newline_STAR__temp_val__30083_30092,_STAR_print_fn_STAR__temp_val__30084_30093,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30081_30090,_STAR_print_fn_STAR__orig_val__30082_30091,_STAR_print_newline_STAR__temp_val__30083_30092,_STAR_print_fn_STAR__temp_val__30084_30093,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30075_SHARP_){
return cljs.core.dissoc.call(null,p1__30075_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30081_30090,_STAR_print_fn_STAR__orig_val__30082_30091,_STAR_print_newline_STAR__temp_val__30083_30092,_STAR_print_fn_STAR__temp_val__30084_30093,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30081_30090,_STAR_print_fn_STAR__orig_val__30082_30091,_STAR_print_newline_STAR__temp_val__30083_30092,_STAR_print_fn_STAR__temp_val__30084_30093,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30082_30091;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30081_30090;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30085_30094 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30086_30095 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30087_30096 = true;
var _STAR_print_fn_STAR__temp_val__30088_30097 = ((function (_STAR_print_newline_STAR__orig_val__30085_30094,_STAR_print_fn_STAR__orig_val__30086_30095,_STAR_print_newline_STAR__temp_val__30087_30096,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30085_30094,_STAR_print_fn_STAR__orig_val__30086_30095,_STAR_print_newline_STAR__temp_val__30087_30096,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30087_30096;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30088_30097;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30085_30094,_STAR_print_fn_STAR__orig_val__30086_30095,_STAR_print_newline_STAR__temp_val__30087_30096,_STAR_print_fn_STAR__temp_val__30088_30097,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30085_30094,_STAR_print_fn_STAR__orig_val__30086_30095,_STAR_print_newline_STAR__temp_val__30087_30096,_STAR_print_fn_STAR__temp_val__30088_30097,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30076_SHARP_){
return cljs.core.dissoc.call(null,p1__30076_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30085_30094,_STAR_print_fn_STAR__orig_val__30086_30095,_STAR_print_newline_STAR__temp_val__30087_30096,_STAR_print_fn_STAR__temp_val__30088_30097,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30085_30094,_STAR_print_fn_STAR__orig_val__30086_30095,_STAR_print_newline_STAR__temp_val__30087_30096,_STAR_print_fn_STAR__temp_val__30088_30097,sb__4661__auto__,G__30080,G__30080__$1,loc,class_name,simple_class,cause_type,format,map__30078,map__30078__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30086_30095;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30085_30094;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30080__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1581970848351
