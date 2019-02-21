// Compiled by ClojureScript 1.10.238 {}
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
var _STAR_current_trace_STAR_28569 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__28570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28571 = null;
var count__28572 = (0);
var i__28573 = (0);
while(true){
if((i__28573 < count__28572)){
var vec__28574 = cljs.core._nth.call(null,chunk__28571,i__28573);
var effect_key = cljs.core.nth.call(null,vec__28574,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28574,(1),null);
var temp__5455__auto___28590 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___28590)){
var effect_fn_28591 = temp__5455__auto___28590;
effect_fn_28591.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28592 = seq__28570;
var G__28593 = chunk__28571;
var G__28594 = count__28572;
var G__28595 = (i__28573 + (1));
seq__28570 = G__28592;
chunk__28571 = G__28593;
count__28572 = G__28594;
i__28573 = G__28595;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28570);
if(temp__5457__auto__){
var seq__28570__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28570__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28570__$1);
var G__28596 = cljs.core.chunk_rest.call(null,seq__28570__$1);
var G__28597 = c__4319__auto__;
var G__28598 = cljs.core.count.call(null,c__4319__auto__);
var G__28599 = (0);
seq__28570 = G__28596;
chunk__28571 = G__28597;
count__28572 = G__28598;
i__28573 = G__28599;
continue;
} else {
var vec__28577 = cljs.core.first.call(null,seq__28570__$1);
var effect_key = cljs.core.nth.call(null,vec__28577,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28577,(1),null);
var temp__5455__auto___28600 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___28600)){
var effect_fn_28601 = temp__5455__auto___28600;
effect_fn_28601.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28602 = cljs.core.next.call(null,seq__28570__$1);
var G__28603 = null;
var G__28604 = (0);
var G__28605 = (0);
seq__28570 = G__28602;
chunk__28571 = G__28603;
count__28572 = G__28604;
i__28573 = G__28605;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22363__auto___28606 = re_frame.interop.now.call(null);
var duration__22364__auto___28607 = (end__22363__auto___28606 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22364__auto___28607,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22363__auto___28606);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_28569;
}} else {
var seq__28580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28581 = null;
var count__28582 = (0);
var i__28583 = (0);
while(true){
if((i__28583 < count__28582)){
var vec__28584 = cljs.core._nth.call(null,chunk__28581,i__28583);
var effect_key = cljs.core.nth.call(null,vec__28584,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28584,(1),null);
var temp__5455__auto___28608 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___28608)){
var effect_fn_28609 = temp__5455__auto___28608;
effect_fn_28609.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28610 = seq__28580;
var G__28611 = chunk__28581;
var G__28612 = count__28582;
var G__28613 = (i__28583 + (1));
seq__28580 = G__28610;
chunk__28581 = G__28611;
count__28582 = G__28612;
i__28583 = G__28613;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28580);
if(temp__5457__auto__){
var seq__28580__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28580__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28580__$1);
var G__28614 = cljs.core.chunk_rest.call(null,seq__28580__$1);
var G__28615 = c__4319__auto__;
var G__28616 = cljs.core.count.call(null,c__4319__auto__);
var G__28617 = (0);
seq__28580 = G__28614;
chunk__28581 = G__28615;
count__28582 = G__28616;
i__28583 = G__28617;
continue;
} else {
var vec__28587 = cljs.core.first.call(null,seq__28580__$1);
var effect_key = cljs.core.nth.call(null,vec__28587,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28587,(1),null);
var temp__5455__auto___28618 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___28618)){
var effect_fn_28619 = temp__5455__auto___28618;
effect_fn_28619.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28620 = cljs.core.next.call(null,seq__28580__$1);
var G__28621 = null;
var G__28622 = (0);
var G__28623 = (0);
seq__28580 = G__28620;
chunk__28581 = G__28621;
count__28582 = G__28622;
i__28583 = G__28623;
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
var seq__28624 = cljs.core.seq.call(null,value);
var chunk__28625 = null;
var count__28626 = (0);
var i__28627 = (0);
while(true){
if((i__28627 < count__28626)){
var map__28628 = cljs.core._nth.call(null,chunk__28625,i__28627);
var map__28628__$1 = ((((!((map__28628 == null)))?(((((map__28628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28628):map__28628);
var effect = map__28628__$1;
var ms = cljs.core.get.call(null,map__28628__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28628__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28624,chunk__28625,count__28626,i__28627,map__28628,map__28628__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28624,chunk__28625,count__28626,i__28627,map__28628,map__28628__$1,effect,ms,dispatch))
,ms);
}


var G__28632 = seq__28624;
var G__28633 = chunk__28625;
var G__28634 = count__28626;
var G__28635 = (i__28627 + (1));
seq__28624 = G__28632;
chunk__28625 = G__28633;
count__28626 = G__28634;
i__28627 = G__28635;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28624);
if(temp__5457__auto__){
var seq__28624__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28624__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28624__$1);
var G__28636 = cljs.core.chunk_rest.call(null,seq__28624__$1);
var G__28637 = c__4319__auto__;
var G__28638 = cljs.core.count.call(null,c__4319__auto__);
var G__28639 = (0);
seq__28624 = G__28636;
chunk__28625 = G__28637;
count__28626 = G__28638;
i__28627 = G__28639;
continue;
} else {
var map__28630 = cljs.core.first.call(null,seq__28624__$1);
var map__28630__$1 = ((((!((map__28630 == null)))?(((((map__28630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28630):map__28630);
var effect = map__28630__$1;
var ms = cljs.core.get.call(null,map__28630__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28630__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28624,chunk__28625,count__28626,i__28627,map__28630,map__28630__$1,effect,ms,dispatch,seq__28624__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28624,chunk__28625,count__28626,i__28627,map__28630,map__28630__$1,effect,ms,dispatch,seq__28624__$1,temp__5457__auto__))
,ms);
}


var G__28640 = cljs.core.next.call(null,seq__28624__$1);
var G__28641 = null;
var G__28642 = (0);
var G__28643 = (0);
seq__28624 = G__28640;
chunk__28625 = G__28641;
count__28626 = G__28642;
i__28627 = G__28643;
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
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__28644 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__28645 = null;
var count__28646 = (0);
var i__28647 = (0);
while(true){
if((i__28647 < count__28646)){
var event = cljs.core._nth.call(null,chunk__28645,i__28647);
re_frame.router.dispatch.call(null,event);


var G__28648 = seq__28644;
var G__28649 = chunk__28645;
var G__28650 = count__28646;
var G__28651 = (i__28647 + (1));
seq__28644 = G__28648;
chunk__28645 = G__28649;
count__28646 = G__28650;
i__28647 = G__28651;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28644);
if(temp__5457__auto__){
var seq__28644__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28644__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28644__$1);
var G__28652 = cljs.core.chunk_rest.call(null,seq__28644__$1);
var G__28653 = c__4319__auto__;
var G__28654 = cljs.core.count.call(null,c__4319__auto__);
var G__28655 = (0);
seq__28644 = G__28652;
chunk__28645 = G__28653;
count__28646 = G__28654;
i__28647 = G__28655;
continue;
} else {
var event = cljs.core.first.call(null,seq__28644__$1);
re_frame.router.dispatch.call(null,event);


var G__28656 = cljs.core.next.call(null,seq__28644__$1);
var G__28657 = null;
var G__28658 = (0);
var G__28659 = (0);
seq__28644 = G__28656;
chunk__28645 = G__28657;
count__28646 = G__28658;
i__28647 = G__28659;
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
var seq__28660 = cljs.core.seq.call(null,value);
var chunk__28661 = null;
var count__28662 = (0);
var i__28663 = (0);
while(true){
if((i__28663 < count__28662)){
var event = cljs.core._nth.call(null,chunk__28661,i__28663);
clear_event.call(null,event);


var G__28664 = seq__28660;
var G__28665 = chunk__28661;
var G__28666 = count__28662;
var G__28667 = (i__28663 + (1));
seq__28660 = G__28664;
chunk__28661 = G__28665;
count__28662 = G__28666;
i__28663 = G__28667;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28660);
if(temp__5457__auto__){
var seq__28660__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28660__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28660__$1);
var G__28668 = cljs.core.chunk_rest.call(null,seq__28660__$1);
var G__28669 = c__4319__auto__;
var G__28670 = cljs.core.count.call(null,c__4319__auto__);
var G__28671 = (0);
seq__28660 = G__28668;
chunk__28661 = G__28669;
count__28662 = G__28670;
i__28663 = G__28671;
continue;
} else {
var event = cljs.core.first.call(null,seq__28660__$1);
clear_event.call(null,event);


var G__28672 = cljs.core.next.call(null,seq__28660__$1);
var G__28673 = null;
var G__28674 = (0);
var G__28675 = (0);
seq__28660 = G__28672;
chunk__28661 = G__28673;
count__28662 = G__28674;
i__28663 = G__28675;
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
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1550771743463
