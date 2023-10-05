// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31774){
var map__31775 = p__31774;
var map__31775__$1 = (((((!((map__31775 == null))))?(((((map__31775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31775):map__31775);
var m = map__31775__$1;
var n = cljs.core.get.call(null,map__31775__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31775__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__31777_31809 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31778_31810 = null;
var count__31779_31811 = (0);
var i__31780_31812 = (0);
while(true){
if((i__31780_31812 < count__31779_31811)){
var f_31813 = cljs.core._nth.call(null,chunk__31778_31810,i__31780_31812);
cljs.core.println.call(null,"  ",f_31813);


var G__31814 = seq__31777_31809;
var G__31815 = chunk__31778_31810;
var G__31816 = count__31779_31811;
var G__31817 = (i__31780_31812 + (1));
seq__31777_31809 = G__31814;
chunk__31778_31810 = G__31815;
count__31779_31811 = G__31816;
i__31780_31812 = G__31817;
continue;
} else {
var temp__5720__auto___31818 = cljs.core.seq.call(null,seq__31777_31809);
if(temp__5720__auto___31818){
var seq__31777_31819__$1 = temp__5720__auto___31818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31777_31819__$1)){
var c__4556__auto___31820 = cljs.core.chunk_first.call(null,seq__31777_31819__$1);
var G__31821 = cljs.core.chunk_rest.call(null,seq__31777_31819__$1);
var G__31822 = c__4556__auto___31820;
var G__31823 = cljs.core.count.call(null,c__4556__auto___31820);
var G__31824 = (0);
seq__31777_31809 = G__31821;
chunk__31778_31810 = G__31822;
count__31779_31811 = G__31823;
i__31780_31812 = G__31824;
continue;
} else {
var f_31825 = cljs.core.first.call(null,seq__31777_31819__$1);
cljs.core.println.call(null,"  ",f_31825);


var G__31826 = cljs.core.next.call(null,seq__31777_31819__$1);
var G__31827 = null;
var G__31828 = (0);
var G__31829 = (0);
seq__31777_31809 = G__31826;
chunk__31778_31810 = G__31827;
count__31779_31811 = G__31828;
i__31780_31812 = G__31829;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31830 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31830);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31830)))?cljs.core.second.call(null,arglists_31830):arglists_31830));
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
var seq__31781_31831 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31782_31832 = null;
var count__31783_31833 = (0);
var i__31784_31834 = (0);
while(true){
if((i__31784_31834 < count__31783_31833)){
var vec__31795_31835 = cljs.core._nth.call(null,chunk__31782_31832,i__31784_31834);
var name_31836 = cljs.core.nth.call(null,vec__31795_31835,(0),null);
var map__31798_31837 = cljs.core.nth.call(null,vec__31795_31835,(1),null);
var map__31798_31838__$1 = (((((!((map__31798_31837 == null))))?(((((map__31798_31837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31798_31837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31798_31837):map__31798_31837);
var doc_31839 = cljs.core.get.call(null,map__31798_31838__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31840 = cljs.core.get.call(null,map__31798_31838__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31836);

cljs.core.println.call(null," ",arglists_31840);

if(cljs.core.truth_(doc_31839)){
cljs.core.println.call(null," ",doc_31839);
} else {
}


var G__31841 = seq__31781_31831;
var G__31842 = chunk__31782_31832;
var G__31843 = count__31783_31833;
var G__31844 = (i__31784_31834 + (1));
seq__31781_31831 = G__31841;
chunk__31782_31832 = G__31842;
count__31783_31833 = G__31843;
i__31784_31834 = G__31844;
continue;
} else {
var temp__5720__auto___31845 = cljs.core.seq.call(null,seq__31781_31831);
if(temp__5720__auto___31845){
var seq__31781_31846__$1 = temp__5720__auto___31845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31781_31846__$1)){
var c__4556__auto___31847 = cljs.core.chunk_first.call(null,seq__31781_31846__$1);
var G__31848 = cljs.core.chunk_rest.call(null,seq__31781_31846__$1);
var G__31849 = c__4556__auto___31847;
var G__31850 = cljs.core.count.call(null,c__4556__auto___31847);
var G__31851 = (0);
seq__31781_31831 = G__31848;
chunk__31782_31832 = G__31849;
count__31783_31833 = G__31850;
i__31784_31834 = G__31851;
continue;
} else {
var vec__31800_31852 = cljs.core.first.call(null,seq__31781_31846__$1);
var name_31853 = cljs.core.nth.call(null,vec__31800_31852,(0),null);
var map__31803_31854 = cljs.core.nth.call(null,vec__31800_31852,(1),null);
var map__31803_31855__$1 = (((((!((map__31803_31854 == null))))?(((((map__31803_31854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31803_31854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31803_31854):map__31803_31854);
var doc_31856 = cljs.core.get.call(null,map__31803_31855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31857 = cljs.core.get.call(null,map__31803_31855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31853);

cljs.core.println.call(null," ",arglists_31857);

if(cljs.core.truth_(doc_31856)){
cljs.core.println.call(null," ",doc_31856);
} else {
}


var G__31858 = cljs.core.next.call(null,seq__31781_31846__$1);
var G__31859 = null;
var G__31860 = (0);
var G__31861 = (0);
seq__31781_31831 = G__31858;
chunk__31782_31832 = G__31859;
count__31783_31833 = G__31860;
i__31784_31834 = G__31861;
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

var seq__31805 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31806 = null;
var count__31807 = (0);
var i__31808 = (0);
while(true){
if((i__31808 < count__31807)){
var role = cljs.core._nth.call(null,chunk__31806,i__31808);
var temp__5720__auto___31862__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31862__$1)){
var spec_31863 = temp__5720__auto___31862__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31863));
} else {
}


var G__31864 = seq__31805;
var G__31865 = chunk__31806;
var G__31866 = count__31807;
var G__31867 = (i__31808 + (1));
seq__31805 = G__31864;
chunk__31806 = G__31865;
count__31807 = G__31866;
i__31808 = G__31867;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__31805);
if(temp__5720__auto____$1){
var seq__31805__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31805__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31805__$1);
var G__31868 = cljs.core.chunk_rest.call(null,seq__31805__$1);
var G__31869 = c__4556__auto__;
var G__31870 = cljs.core.count.call(null,c__4556__auto__);
var G__31871 = (0);
seq__31805 = G__31868;
chunk__31806 = G__31869;
count__31807 = G__31870;
i__31808 = G__31871;
continue;
} else {
var role = cljs.core.first.call(null,seq__31805__$1);
var temp__5720__auto___31872__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31872__$2)){
var spec_31873 = temp__5720__auto___31872__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31873));
} else {
}


var G__31874 = cljs.core.next.call(null,seq__31805__$1);
var G__31875 = null;
var G__31876 = (0);
var G__31877 = (0);
seq__31805 = G__31874;
chunk__31806 = G__31875;
count__31807 = G__31876;
i__31808 = G__31877;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
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
var G__31878 = cljs.core.conj.call(null,via,t);
var G__31879 = cljs.core.ex_cause.call(null,t);
via = G__31878;
t = G__31879;
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
var map__31882 = datafied_throwable;
var map__31882__$1 = (((((!((map__31882 == null))))?(((((map__31882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31882):map__31882);
var via = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31883 = cljs.core.last.call(null,via);
var map__31883__$1 = (((((!((map__31883 == null))))?(((((map__31883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31883):map__31883);
var type = cljs.core.get.call(null,map__31883__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31883__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31883__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31884 = data;
var map__31884__$1 = (((((!((map__31884 == null))))?(((((map__31884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31884):map__31884);
var problems = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31885 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31885__$1 = (((((!((map__31885 == null))))?(((((map__31885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31885):map__31885);
var top_data = map__31885__$1;
var source = cljs.core.get.call(null,map__31885__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31890 = phase;
var G__31890__$1 = (((G__31890 instanceof cljs.core.Keyword))?G__31890.fqn:null);
switch (G__31890__$1) {
case "read-source":
var map__31891 = data;
var map__31891__$1 = (((((!((map__31891 == null))))?(((((map__31891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31891):map__31891);
var line = cljs.core.get.call(null,map__31891__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31891__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31893 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31893__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31893,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31893);
var G__31893__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31893__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31893__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31893__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31893__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31894 = top_data;
var G__31894__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31894,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31894);
var G__31894__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31894__$1);
var G__31894__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31894__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31894__$2);
var G__31894__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31894__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31894__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31894__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31894__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31895 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31895,(0),null);
var method = cljs.core.nth.call(null,vec__31895,(1),null);
var file = cljs.core.nth.call(null,vec__31895,(2),null);
var line = cljs.core.nth.call(null,vec__31895,(3),null);
var G__31898 = top_data;
var G__31898__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31898,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31898);
var G__31898__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31898__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31898__$1);
var G__31898__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31898__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31898__$2);
var G__31898__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31898__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31898__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31898__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31898__$4;
}

break;
case "execution":
var vec__31899 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31899,(0),null);
var method = cljs.core.nth.call(null,vec__31899,(1),null);
var file = cljs.core.nth.call(null,vec__31899,(2),null);
var line = cljs.core.nth.call(null,vec__31899,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31881_SHARP_){
var or__4126__auto__ = (p1__31881_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31881_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31902 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31902__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31902,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31902);
var G__31902__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31902__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31902__$1);
var G__31902__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31902__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31902__$2);
var G__31902__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31902__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31902__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31902__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31902__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31890__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31906){
var map__31907 = p__31906;
var map__31907__$1 = (((((!((map__31907 == null))))?(((((map__31907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31907):map__31907);
var triage_data = map__31907__$1;
var phase = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31909 = phase;
var G__31909__$1 = (((G__31909 instanceof cljs.core.Keyword))?G__31909.fqn:null);
switch (G__31909__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31910_31919 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31911_31920 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31912_31921 = true;
var _STAR_print_fn_STAR__temp_val__31913_31922 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31912_31921);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31913_31922);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31904_SHARP_){
return cljs.core.dissoc.call(null,p1__31904_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31911_31920);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31910_31919);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31914_31923 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31915_31924 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31916_31925 = true;
var _STAR_print_fn_STAR__temp_val__31917_31926 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31916_31925);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31917_31926);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31905_SHARP_){
return cljs.core.dissoc.call(null,p1__31905_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31915_31924);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31914_31923);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31909__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1696052576656
