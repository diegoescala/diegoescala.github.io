// Compiled by ClojureScript 1.10.773 {}
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

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22476){
var map__22477 = p__22476;
var map__22477__$1 = (((((!((map__22477 == null))))?(((((map__22477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22477):map__22477);
var operation = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__22479_22499 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__22480_22500 = null;
var count__22481_22501 = (0);
var i__22482_22502 = (0);
while(true){
if((i__22482_22502 < count__22481_22501)){
var vec__22491_22503 = cljs.core._nth.call(null,chunk__22480_22500,i__22482_22502);
var k_22504 = cljs.core.nth.call(null,vec__22491_22503,(0),null);
var cb_22505 = cljs.core.nth.call(null,vec__22491_22503,(1),null);
try{cb_22505.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22494){var e_22506 = e22494;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22504,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22506);
}

var G__22507 = seq__22479_22499;
var G__22508 = chunk__22480_22500;
var G__22509 = count__22481_22501;
var G__22510 = (i__22482_22502 + (1));
seq__22479_22499 = G__22507;
chunk__22480_22500 = G__22508;
count__22481_22501 = G__22509;
i__22482_22502 = G__22510;
continue;
} else {
var temp__5720__auto___22511 = cljs.core.seq.call(null,seq__22479_22499);
if(temp__5720__auto___22511){
var seq__22479_22512__$1 = temp__5720__auto___22511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22479_22512__$1)){
var c__4556__auto___22513 = cljs.core.chunk_first.call(null,seq__22479_22512__$1);
var G__22514 = cljs.core.chunk_rest.call(null,seq__22479_22512__$1);
var G__22515 = c__4556__auto___22513;
var G__22516 = cljs.core.count.call(null,c__4556__auto___22513);
var G__22517 = (0);
seq__22479_22499 = G__22514;
chunk__22480_22500 = G__22515;
count__22481_22501 = G__22516;
i__22482_22502 = G__22517;
continue;
} else {
var vec__22495_22518 = cljs.core.first.call(null,seq__22479_22512__$1);
var k_22519 = cljs.core.nth.call(null,vec__22495_22518,(0),null);
var cb_22520 = cljs.core.nth.call(null,vec__22495_22518,(1),null);
try{cb_22520.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22498){var e_22521 = e22498;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22519,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22521);
}

var G__22522 = cljs.core.next.call(null,seq__22479_22512__$1);
var G__22523 = null;
var G__22524 = (0);
var G__22525 = (0);
seq__22479_22499 = G__22522;
chunk__22480_22500 = G__22523;
count__22481_22501 = G__22524;
i__22482_22502 = G__22525;
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

//# sourceMappingURL=trace.js.map?rel=1696052573438
