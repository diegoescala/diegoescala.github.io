// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22638 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22639 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22639);

try{try{var seq__22640 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22641 = null;
var count__22642 = (0);
var i__22643 = (0);
while(true){
if((i__22643 < count__22642)){
var vec__22650 = cljs.core._nth.call(null,chunk__22641,i__22643);
var effect_key = cljs.core.nth.call(null,vec__22650,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22650,(1),null);
var temp__5718__auto___22672 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22672)){
var effect_fn_22673 = temp__5718__auto___22672;
effect_fn_22673.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22674 = seq__22640;
var G__22675 = chunk__22641;
var G__22676 = count__22642;
var G__22677 = (i__22643 + (1));
seq__22640 = G__22674;
chunk__22641 = G__22675;
count__22642 = G__22676;
i__22643 = G__22677;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22640);
if(temp__5720__auto__){
var seq__22640__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22640__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22640__$1);
var G__22678 = cljs.core.chunk_rest.call(null,seq__22640__$1);
var G__22679 = c__4556__auto__;
var G__22680 = cljs.core.count.call(null,c__4556__auto__);
var G__22681 = (0);
seq__22640 = G__22678;
chunk__22641 = G__22679;
count__22642 = G__22680;
i__22643 = G__22681;
continue;
} else {
var vec__22653 = cljs.core.first.call(null,seq__22640__$1);
var effect_key = cljs.core.nth.call(null,vec__22653,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22653,(1),null);
var temp__5718__auto___22682 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22682)){
var effect_fn_22683 = temp__5718__auto___22682;
effect_fn_22683.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22684 = cljs.core.next.call(null,seq__22640__$1);
var G__22685 = null;
var G__22686 = (0);
var G__22687 = (0);
seq__22640 = G__22684;
chunk__22641 = G__22685;
count__22642 = G__22686;
i__22643 = G__22687;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22454__auto___22688 = re_frame.interop.now.call(null);
var duration__22455__auto___22689 = (end__22454__auto___22688 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22455__auto___22689,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22454__auto___22688);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22638);
}} else {
var seq__22656 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22657 = null;
var count__22658 = (0);
var i__22659 = (0);
while(true){
if((i__22659 < count__22658)){
var vec__22666 = cljs.core._nth.call(null,chunk__22657,i__22659);
var effect_key = cljs.core.nth.call(null,vec__22666,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22666,(1),null);
var temp__5718__auto___22690 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22690)){
var effect_fn_22691 = temp__5718__auto___22690;
effect_fn_22691.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22692 = seq__22656;
var G__22693 = chunk__22657;
var G__22694 = count__22658;
var G__22695 = (i__22659 + (1));
seq__22656 = G__22692;
chunk__22657 = G__22693;
count__22658 = G__22694;
i__22659 = G__22695;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22656);
if(temp__5720__auto__){
var seq__22656__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22656__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22656__$1);
var G__22696 = cljs.core.chunk_rest.call(null,seq__22656__$1);
var G__22697 = c__4556__auto__;
var G__22698 = cljs.core.count.call(null,c__4556__auto__);
var G__22699 = (0);
seq__22656 = G__22696;
chunk__22657 = G__22697;
count__22658 = G__22698;
i__22659 = G__22699;
continue;
} else {
var vec__22669 = cljs.core.first.call(null,seq__22656__$1);
var effect_key = cljs.core.nth.call(null,vec__22669,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22669,(1),null);
var temp__5718__auto___22700 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22700)){
var effect_fn_22701 = temp__5718__auto___22700;
effect_fn_22701.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22702 = cljs.core.next.call(null,seq__22656__$1);
var G__22703 = null;
var G__22704 = (0);
var G__22705 = (0);
seq__22656 = G__22702;
chunk__22657 = G__22703;
count__22658 = G__22704;
i__22659 = G__22705;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__22706 = cljs.core.seq.call(null,value);
var chunk__22707 = null;
var count__22708 = (0);
var i__22709 = (0);
while(true){
if((i__22709 < count__22708)){
var map__22714 = cljs.core._nth.call(null,chunk__22707,i__22709);
var map__22714__$1 = (((((!((map__22714 == null))))?(((((map__22714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22714):map__22714);
var effect = map__22714__$1;
var ms = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22706,chunk__22707,count__22708,i__22709,map__22714,map__22714__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22706,chunk__22707,count__22708,i__22709,map__22714,map__22714__$1,effect,ms,dispatch))
,ms);
}


var G__22718 = seq__22706;
var G__22719 = chunk__22707;
var G__22720 = count__22708;
var G__22721 = (i__22709 + (1));
seq__22706 = G__22718;
chunk__22707 = G__22719;
count__22708 = G__22720;
i__22709 = G__22721;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22706);
if(temp__5720__auto__){
var seq__22706__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22706__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22706__$1);
var G__22722 = cljs.core.chunk_rest.call(null,seq__22706__$1);
var G__22723 = c__4556__auto__;
var G__22724 = cljs.core.count.call(null,c__4556__auto__);
var G__22725 = (0);
seq__22706 = G__22722;
chunk__22707 = G__22723;
count__22708 = G__22724;
i__22709 = G__22725;
continue;
} else {
var map__22716 = cljs.core.first.call(null,seq__22706__$1);
var map__22716__$1 = (((((!((map__22716 == null))))?(((((map__22716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22716):map__22716);
var effect = map__22716__$1;
var ms = cljs.core.get.call(null,map__22716__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22716__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22706,chunk__22707,count__22708,i__22709,map__22716,map__22716__$1,effect,ms,dispatch,seq__22706__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22706,chunk__22707,count__22708,i__22709,map__22716,map__22716__$1,effect,ms,dispatch,seq__22706__$1,temp__5720__auto__))
,ms);
}


var G__22726 = cljs.core.next.call(null,seq__22706__$1);
var G__22727 = null;
var G__22728 = (0);
var G__22729 = (0);
seq__22706 = G__22726;
chunk__22707 = G__22727;
count__22708 = G__22728;
i__22709 = G__22729;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__22730 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22731 = null;
var count__22732 = (0);
var i__22733 = (0);
while(true){
if((i__22733 < count__22732)){
var event = cljs.core._nth.call(null,chunk__22731,i__22733);
re_frame.router.dispatch.call(null,event);


var G__22734 = seq__22730;
var G__22735 = chunk__22731;
var G__22736 = count__22732;
var G__22737 = (i__22733 + (1));
seq__22730 = G__22734;
chunk__22731 = G__22735;
count__22732 = G__22736;
i__22733 = G__22737;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22730);
if(temp__5720__auto__){
var seq__22730__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22730__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22730__$1);
var G__22738 = cljs.core.chunk_rest.call(null,seq__22730__$1);
var G__22739 = c__4556__auto__;
var G__22740 = cljs.core.count.call(null,c__4556__auto__);
var G__22741 = (0);
seq__22730 = G__22738;
chunk__22731 = G__22739;
count__22732 = G__22740;
i__22733 = G__22741;
continue;
} else {
var event = cljs.core.first.call(null,seq__22730__$1);
re_frame.router.dispatch.call(null,event);


var G__22742 = cljs.core.next.call(null,seq__22730__$1);
var G__22743 = null;
var G__22744 = (0);
var G__22745 = (0);
seq__22730 = G__22742;
chunk__22731 = G__22743;
count__22732 = G__22744;
i__22733 = G__22745;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22746 = cljs.core.seq.call(null,value);
var chunk__22747 = null;
var count__22748 = (0);
var i__22749 = (0);
while(true){
if((i__22749 < count__22748)){
var event = cljs.core._nth.call(null,chunk__22747,i__22749);
clear_event.call(null,event);


var G__22750 = seq__22746;
var G__22751 = chunk__22747;
var G__22752 = count__22748;
var G__22753 = (i__22749 + (1));
seq__22746 = G__22750;
chunk__22747 = G__22751;
count__22748 = G__22752;
i__22749 = G__22753;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22746);
if(temp__5720__auto__){
var seq__22746__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22746__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22746__$1);
var G__22754 = cljs.core.chunk_rest.call(null,seq__22746__$1);
var G__22755 = c__4556__auto__;
var G__22756 = cljs.core.count.call(null,c__4556__auto__);
var G__22757 = (0);
seq__22746 = G__22754;
chunk__22747 = G__22755;
count__22748 = G__22756;
i__22749 = G__22757;
continue;
} else {
var event = cljs.core.first.call(null,seq__22746__$1);
clear_event.call(null,event);


var G__22758 = cljs.core.next.call(null,seq__22746__$1);
var G__22759 = null;
var G__22760 = (0);
var G__22761 = (0);
seq__22746 = G__22758;
chunk__22747 = G__22759;
count__22748 = G__22760;
i__22749 = G__22761;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1696052573561
