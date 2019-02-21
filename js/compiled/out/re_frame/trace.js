// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__28431){
var map__28432 = p__28431;
var map__28432__$1 = ((((!((map__28432 == null)))?(((((map__28432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28432):map__28432);
var operation = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__28434_28446 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__28435_28447 = null;
var count__28436_28448 = (0);
var i__28437_28449 = (0);
while(true){
if((i__28437_28449 < count__28436_28448)){
var vec__28438_28450 = cljs.core._nth.call(null,chunk__28435_28447,i__28437_28449);
var k_28451 = cljs.core.nth.call(null,vec__28438_28450,(0),null);
var cb_28452 = cljs.core.nth.call(null,vec__28438_28450,(1),null);
try{cb_28452.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e28441){var e_28453 = e28441;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_28451,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_28453);
}

var G__28454 = seq__28434_28446;
var G__28455 = chunk__28435_28447;
var G__28456 = count__28436_28448;
var G__28457 = (i__28437_28449 + (1));
seq__28434_28446 = G__28454;
chunk__28435_28447 = G__28455;
count__28436_28448 = G__28456;
i__28437_28449 = G__28457;
continue;
} else {
var temp__5457__auto___28458 = cljs.core.seq.call(null,seq__28434_28446);
if(temp__5457__auto___28458){
var seq__28434_28459__$1 = temp__5457__auto___28458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28434_28459__$1)){
var c__4319__auto___28460 = cljs.core.chunk_first.call(null,seq__28434_28459__$1);
var G__28461 = cljs.core.chunk_rest.call(null,seq__28434_28459__$1);
var G__28462 = c__4319__auto___28460;
var G__28463 = cljs.core.count.call(null,c__4319__auto___28460);
var G__28464 = (0);
seq__28434_28446 = G__28461;
chunk__28435_28447 = G__28462;
count__28436_28448 = G__28463;
i__28437_28449 = G__28464;
continue;
} else {
var vec__28442_28465 = cljs.core.first.call(null,seq__28434_28459__$1);
var k_28466 = cljs.core.nth.call(null,vec__28442_28465,(0),null);
var cb_28467 = cljs.core.nth.call(null,vec__28442_28465,(1),null);
try{cb_28467.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e28445){var e_28468 = e28445;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_28466,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_28468);
}

var G__28469 = cljs.core.next.call(null,seq__28434_28459__$1);
var G__28470 = null;
var G__28471 = (0);
var G__28472 = (0);
seq__28434_28446 = G__28469;
chunk__28435_28447 = G__28470;
count__28436_28448 = G__28471;
i__28437_28449 = G__28472;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1550771742864
