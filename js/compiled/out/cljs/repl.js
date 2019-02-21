// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30725){
var map__30726 = p__30725;
var map__30726__$1 = ((((!((map__30726 == null)))?(((((map__30726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30726):map__30726);
var m = map__30726__$1;
var n = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30728_30750 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30729_30751 = null;
var count__30730_30752 = (0);
var i__30731_30753 = (0);
while(true){
if((i__30731_30753 < count__30730_30752)){
var f_30754 = cljs.core._nth.call(null,chunk__30729_30751,i__30731_30753);
cljs.core.println.call(null,"  ",f_30754);


var G__30755 = seq__30728_30750;
var G__30756 = chunk__30729_30751;
var G__30757 = count__30730_30752;
var G__30758 = (i__30731_30753 + (1));
seq__30728_30750 = G__30755;
chunk__30729_30751 = G__30756;
count__30730_30752 = G__30757;
i__30731_30753 = G__30758;
continue;
} else {
var temp__5457__auto___30759 = cljs.core.seq.call(null,seq__30728_30750);
if(temp__5457__auto___30759){
var seq__30728_30760__$1 = temp__5457__auto___30759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30728_30760__$1)){
var c__4319__auto___30761 = cljs.core.chunk_first.call(null,seq__30728_30760__$1);
var G__30762 = cljs.core.chunk_rest.call(null,seq__30728_30760__$1);
var G__30763 = c__4319__auto___30761;
var G__30764 = cljs.core.count.call(null,c__4319__auto___30761);
var G__30765 = (0);
seq__30728_30750 = G__30762;
chunk__30729_30751 = G__30763;
count__30730_30752 = G__30764;
i__30731_30753 = G__30765;
continue;
} else {
var f_30766 = cljs.core.first.call(null,seq__30728_30760__$1);
cljs.core.println.call(null,"  ",f_30766);


var G__30767 = cljs.core.next.call(null,seq__30728_30760__$1);
var G__30768 = null;
var G__30769 = (0);
var G__30770 = (0);
seq__30728_30750 = G__30767;
chunk__30729_30751 = G__30768;
count__30730_30752 = G__30769;
i__30731_30753 = G__30770;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30771 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30771);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30771)))?cljs.core.second.call(null,arglists_30771):arglists_30771));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30732_30772 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30733_30773 = null;
var count__30734_30774 = (0);
var i__30735_30775 = (0);
while(true){
if((i__30735_30775 < count__30734_30774)){
var vec__30736_30776 = cljs.core._nth.call(null,chunk__30733_30773,i__30735_30775);
var name_30777 = cljs.core.nth.call(null,vec__30736_30776,(0),null);
var map__30739_30778 = cljs.core.nth.call(null,vec__30736_30776,(1),null);
var map__30739_30779__$1 = ((((!((map__30739_30778 == null)))?(((((map__30739_30778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30739_30778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30739_30778):map__30739_30778);
var doc_30780 = cljs.core.get.call(null,map__30739_30779__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30781 = cljs.core.get.call(null,map__30739_30779__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30777);

cljs.core.println.call(null," ",arglists_30781);

if(cljs.core.truth_(doc_30780)){
cljs.core.println.call(null," ",doc_30780);
} else {
}


var G__30782 = seq__30732_30772;
var G__30783 = chunk__30733_30773;
var G__30784 = count__30734_30774;
var G__30785 = (i__30735_30775 + (1));
seq__30732_30772 = G__30782;
chunk__30733_30773 = G__30783;
count__30734_30774 = G__30784;
i__30735_30775 = G__30785;
continue;
} else {
var temp__5457__auto___30786 = cljs.core.seq.call(null,seq__30732_30772);
if(temp__5457__auto___30786){
var seq__30732_30787__$1 = temp__5457__auto___30786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30732_30787__$1)){
var c__4319__auto___30788 = cljs.core.chunk_first.call(null,seq__30732_30787__$1);
var G__30789 = cljs.core.chunk_rest.call(null,seq__30732_30787__$1);
var G__30790 = c__4319__auto___30788;
var G__30791 = cljs.core.count.call(null,c__4319__auto___30788);
var G__30792 = (0);
seq__30732_30772 = G__30789;
chunk__30733_30773 = G__30790;
count__30734_30774 = G__30791;
i__30735_30775 = G__30792;
continue;
} else {
var vec__30741_30793 = cljs.core.first.call(null,seq__30732_30787__$1);
var name_30794 = cljs.core.nth.call(null,vec__30741_30793,(0),null);
var map__30744_30795 = cljs.core.nth.call(null,vec__30741_30793,(1),null);
var map__30744_30796__$1 = ((((!((map__30744_30795 == null)))?(((((map__30744_30795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30744_30795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30744_30795):map__30744_30795);
var doc_30797 = cljs.core.get.call(null,map__30744_30796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30798 = cljs.core.get.call(null,map__30744_30796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30794);

cljs.core.println.call(null," ",arglists_30798);

if(cljs.core.truth_(doc_30797)){
cljs.core.println.call(null," ",doc_30797);
} else {
}


var G__30799 = cljs.core.next.call(null,seq__30732_30787__$1);
var G__30800 = null;
var G__30801 = (0);
var G__30802 = (0);
seq__30732_30772 = G__30799;
chunk__30733_30773 = G__30800;
count__30734_30774 = G__30801;
i__30735_30775 = G__30802;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30746 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30747 = null;
var count__30748 = (0);
var i__30749 = (0);
while(true){
if((i__30749 < count__30748)){
var role = cljs.core._nth.call(null,chunk__30747,i__30749);
var temp__5457__auto___30803__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30803__$1)){
var spec_30804 = temp__5457__auto___30803__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30804));
} else {
}


var G__30805 = seq__30746;
var G__30806 = chunk__30747;
var G__30807 = count__30748;
var G__30808 = (i__30749 + (1));
seq__30746 = G__30805;
chunk__30747 = G__30806;
count__30748 = G__30807;
i__30749 = G__30808;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30746);
if(temp__5457__auto____$1){
var seq__30746__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30746__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30746__$1);
var G__30809 = cljs.core.chunk_rest.call(null,seq__30746__$1);
var G__30810 = c__4319__auto__;
var G__30811 = cljs.core.count.call(null,c__4319__auto__);
var G__30812 = (0);
seq__30746 = G__30809;
chunk__30747 = G__30810;
count__30748 = G__30811;
i__30749 = G__30812;
continue;
} else {
var role = cljs.core.first.call(null,seq__30746__$1);
var temp__5457__auto___30813__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30813__$2)){
var spec_30814 = temp__5457__auto___30813__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30814));
} else {
}


var G__30815 = cljs.core.next.call(null,seq__30746__$1);
var G__30816 = null;
var G__30817 = (0);
var G__30818 = (0);
seq__30746 = G__30815;
chunk__30747 = G__30816;
count__30748 = G__30817;
i__30749 = G__30818;
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

//# sourceMappingURL=repl.js.map?rel=1550771779337
