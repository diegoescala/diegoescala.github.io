// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31685){if((e31685 instanceof Error)){
var e = e31685;
return "Error: Unable to stringify";
} else {
throw e31685;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31688 = arguments.length;
switch (G__31688) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31686_SHARP_){
if(typeof p1__31686_SHARP_ === 'string'){
return p1__31686_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31686_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31691 = arguments.length;
var i__4500__auto___31692 = (0);
while(true){
if((i__4500__auto___31692 < len__4499__auto___31691)){
args__4502__auto__.push((arguments[i__4500__auto___31692]));

var G__31693 = (i__4500__auto___31692 + (1));
i__4500__auto___31692 = G__31693;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31690){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31690));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31695 = arguments.length;
var i__4500__auto___31696 = (0);
while(true){
if((i__4500__auto___31696 < len__4499__auto___31695)){
args__4502__auto__.push((arguments[i__4500__auto___31696]));

var G__31697 = (i__4500__auto___31696 + (1));
i__4500__auto___31696 = G__31697;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31694){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31694));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31698){
var map__31699 = p__31698;
var map__31699__$1 = ((((!((map__31699 == null)))?(((((map__31699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31699):map__31699);
var message = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31699__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26483__auto___31778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___31778,ch){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___31778,ch){
return (function (state_31750){
var state_val_31751 = (state_31750[(1)]);
if((state_val_31751 === (7))){
var inst_31746 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31752_31779 = state_31750__$1;
(statearr_31752_31779[(2)] = inst_31746);

(statearr_31752_31779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (1))){
var state_31750__$1 = state_31750;
var statearr_31753_31780 = state_31750__$1;
(statearr_31753_31780[(2)] = null);

(statearr_31753_31780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (4))){
var inst_31703 = (state_31750[(7)]);
var inst_31703__$1 = (state_31750[(2)]);
var state_31750__$1 = (function (){var statearr_31754 = state_31750;
(statearr_31754[(7)] = inst_31703__$1);

return statearr_31754;
})();
if(cljs.core.truth_(inst_31703__$1)){
var statearr_31755_31781 = state_31750__$1;
(statearr_31755_31781[(1)] = (5));

} else {
var statearr_31756_31782 = state_31750__$1;
(statearr_31756_31782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (15))){
var inst_31710 = (state_31750[(8)]);
var inst_31725 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31710);
var inst_31726 = cljs.core.first.call(null,inst_31725);
var inst_31727 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31726);
var inst_31728 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31727)].join('');
var inst_31729 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31728);
var state_31750__$1 = state_31750;
var statearr_31757_31783 = state_31750__$1;
(statearr_31757_31783[(2)] = inst_31729);

(statearr_31757_31783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (13))){
var inst_31734 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31758_31784 = state_31750__$1;
(statearr_31758_31784[(2)] = inst_31734);

(statearr_31758_31784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (6))){
var state_31750__$1 = state_31750;
var statearr_31759_31785 = state_31750__$1;
(statearr_31759_31785[(2)] = null);

(statearr_31759_31785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (17))){
var inst_31732 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31760_31786 = state_31750__$1;
(statearr_31760_31786[(2)] = inst_31732);

(statearr_31760_31786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (3))){
var inst_31748 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31750__$1,inst_31748);
} else {
if((state_val_31751 === (12))){
var inst_31709 = (state_31750[(9)]);
var inst_31723 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31709,opts);
var state_31750__$1 = state_31750;
if(cljs.core.truth_(inst_31723)){
var statearr_31761_31787 = state_31750__$1;
(statearr_31761_31787[(1)] = (15));

} else {
var statearr_31762_31788 = state_31750__$1;
(statearr_31762_31788[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (2))){
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31750__$1,(4),ch);
} else {
if((state_val_31751 === (11))){
var inst_31710 = (state_31750[(8)]);
var inst_31715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31716 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31710);
var inst_31717 = cljs.core.async.timeout.call(null,(1000));
var inst_31718 = [inst_31716,inst_31717];
var inst_31719 = (new cljs.core.PersistentVector(null,2,(5),inst_31715,inst_31718,null));
var state_31750__$1 = state_31750;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31750__$1,(14),inst_31719);
} else {
if((state_val_31751 === (9))){
var inst_31710 = (state_31750[(8)]);
var inst_31736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31737 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31710);
var inst_31738 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31737);
var inst_31739 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31738)].join('');
var inst_31740 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31739);
var state_31750__$1 = (function (){var statearr_31763 = state_31750;
(statearr_31763[(10)] = inst_31736);

return statearr_31763;
})();
var statearr_31764_31789 = state_31750__$1;
(statearr_31764_31789[(2)] = inst_31740);

(statearr_31764_31789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (5))){
var inst_31703 = (state_31750[(7)]);
var inst_31705 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31706 = (new cljs.core.PersistentArrayMap(null,2,inst_31705,null));
var inst_31707 = (new cljs.core.PersistentHashSet(null,inst_31706,null));
var inst_31708 = figwheel.client.focus_msgs.call(null,inst_31707,inst_31703);
var inst_31709 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31708);
var inst_31710 = cljs.core.first.call(null,inst_31708);
var inst_31711 = figwheel.client.autoload_QMARK_.call(null);
var state_31750__$1 = (function (){var statearr_31765 = state_31750;
(statearr_31765[(8)] = inst_31710);

(statearr_31765[(9)] = inst_31709);

return statearr_31765;
})();
if(cljs.core.truth_(inst_31711)){
var statearr_31766_31790 = state_31750__$1;
(statearr_31766_31790[(1)] = (8));

} else {
var statearr_31767_31791 = state_31750__$1;
(statearr_31767_31791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (14))){
var inst_31721 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31768_31792 = state_31750__$1;
(statearr_31768_31792[(2)] = inst_31721);

(statearr_31768_31792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (16))){
var state_31750__$1 = state_31750;
var statearr_31769_31793 = state_31750__$1;
(statearr_31769_31793[(2)] = null);

(statearr_31769_31793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (10))){
var inst_31742 = (state_31750[(2)]);
var state_31750__$1 = (function (){var statearr_31770 = state_31750;
(statearr_31770[(11)] = inst_31742);

return statearr_31770;
})();
var statearr_31771_31794 = state_31750__$1;
(statearr_31771_31794[(2)] = null);

(statearr_31771_31794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (8))){
var inst_31709 = (state_31750[(9)]);
var inst_31713 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31709,opts);
var state_31750__$1 = state_31750;
if(cljs.core.truth_(inst_31713)){
var statearr_31772_31795 = state_31750__$1;
(statearr_31772_31795[(1)] = (11));

} else {
var statearr_31773_31796 = state_31750__$1;
(statearr_31773_31796[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26483__auto___31778,ch))
;
return ((function (switch__26460__auto__,c__26483__auto___31778,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26461__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26461__auto____0 = (function (){
var statearr_31774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31774[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26461__auto__);

(statearr_31774[(1)] = (1));

return statearr_31774;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26461__auto____1 = (function (state_31750){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_31750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e31775){if((e31775 instanceof Object)){
var ex__26464__auto__ = e31775;
var statearr_31776_31797 = state_31750;
(statearr_31776_31797[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31798 = state_31750;
state_31750 = G__31798;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26461__auto__ = function(state_31750){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26461__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26461__auto____1.call(this,state_31750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26461__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26461__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___31778,ch))
})();
var state__26485__auto__ = (function (){var statearr_31777 = f__26484__auto__.call(null);
(statearr_31777[(6)] = c__26483__auto___31778);

return statearr_31777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___31778,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31799_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31799_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31803 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31803){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31801 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31802 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31801,_STAR_print_fn_STAR_31802,sb,base_path_31803){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31801,_STAR_print_fn_STAR_31802,sb,base_path_31803))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31802;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31801;
}}catch (e31800){if((e31800 instanceof Error)){
var e = e31800;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31803], null));
} else {
var e = e31800;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31803))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31804){
var map__31805 = p__31804;
var map__31805__$1 = ((((!((map__31805 == null)))?(((((map__31805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31805):map__31805);
var opts = map__31805__$1;
var build_id = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31805,map__31805__$1,opts,build_id){
return (function (p__31807){
var vec__31808 = p__31807;
var seq__31809 = cljs.core.seq.call(null,vec__31808);
var first__31810 = cljs.core.first.call(null,seq__31809);
var seq__31809__$1 = cljs.core.next.call(null,seq__31809);
var map__31811 = first__31810;
var map__31811__$1 = ((((!((map__31811 == null)))?(((((map__31811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31811):map__31811);
var msg = map__31811__$1;
var msg_name = cljs.core.get.call(null,map__31811__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31809__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31808,seq__31809,first__31810,seq__31809__$1,map__31811,map__31811__$1,msg,msg_name,_,map__31805,map__31805__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31808,seq__31809,first__31810,seq__31809__$1,map__31811,map__31811__$1,msg,msg_name,_,map__31805,map__31805__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31805,map__31805__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31813){
var vec__31814 = p__31813;
var seq__31815 = cljs.core.seq.call(null,vec__31814);
var first__31816 = cljs.core.first.call(null,seq__31815);
var seq__31815__$1 = cljs.core.next.call(null,seq__31815);
var map__31817 = first__31816;
var map__31817__$1 = ((((!((map__31817 == null)))?(((((map__31817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31817):map__31817);
var msg = map__31817__$1;
var msg_name = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31815__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31819){
var map__31820 = p__31819;
var map__31820__$1 = ((((!((map__31820 == null)))?(((((map__31820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31820):map__31820);
var on_compile_warning = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31820__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31820,map__31820__$1,on_compile_warning,on_compile_fail){
return (function (p__31822){
var vec__31823 = p__31822;
var seq__31824 = cljs.core.seq.call(null,vec__31823);
var first__31825 = cljs.core.first.call(null,seq__31824);
var seq__31824__$1 = cljs.core.next.call(null,seq__31824);
var map__31826 = first__31825;
var map__31826__$1 = ((((!((map__31826 == null)))?(((((map__31826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31826):map__31826);
var msg = map__31826__$1;
var msg_name = cljs.core.get.call(null,map__31826__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31824__$1;
var pred__31828 = cljs.core._EQ_;
var expr__31829 = msg_name;
if(cljs.core.truth_(pred__31828.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31829))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31828.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31829))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31820,map__31820__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__,msg_hist,msg_names,msg){
return (function (state_31918){
var state_val_31919 = (state_31918[(1)]);
if((state_val_31919 === (7))){
var inst_31838 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31838)){
var statearr_31920_31967 = state_31918__$1;
(statearr_31920_31967[(1)] = (8));

} else {
var statearr_31921_31968 = state_31918__$1;
(statearr_31921_31968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (20))){
var inst_31912 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31922_31969 = state_31918__$1;
(statearr_31922_31969[(2)] = inst_31912);

(statearr_31922_31969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (27))){
var inst_31908 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31923_31970 = state_31918__$1;
(statearr_31923_31970[(2)] = inst_31908);

(statearr_31923_31970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (1))){
var inst_31831 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31831)){
var statearr_31924_31971 = state_31918__$1;
(statearr_31924_31971[(1)] = (2));

} else {
var statearr_31925_31972 = state_31918__$1;
(statearr_31925_31972[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (24))){
var inst_31910 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31926_31973 = state_31918__$1;
(statearr_31926_31973[(2)] = inst_31910);

(statearr_31926_31973[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (4))){
var inst_31916 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31918__$1,inst_31916);
} else {
if((state_val_31919 === (15))){
var inst_31914 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31927_31974 = state_31918__$1;
(statearr_31927_31974[(2)] = inst_31914);

(statearr_31927_31974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (21))){
var inst_31867 = (state_31918[(2)]);
var inst_31868 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31869 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31868);
var state_31918__$1 = (function (){var statearr_31928 = state_31918;
(statearr_31928[(7)] = inst_31867);

return statearr_31928;
})();
var statearr_31929_31975 = state_31918__$1;
(statearr_31929_31975[(2)] = inst_31869);

(statearr_31929_31975[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (31))){
var inst_31897 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31897)){
var statearr_31930_31976 = state_31918__$1;
(statearr_31930_31976[(1)] = (34));

} else {
var statearr_31931_31977 = state_31918__$1;
(statearr_31931_31977[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (32))){
var inst_31906 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31932_31978 = state_31918__$1;
(statearr_31932_31978[(2)] = inst_31906);

(statearr_31932_31978[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (33))){
var inst_31893 = (state_31918[(2)]);
var inst_31894 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31895 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31894);
var state_31918__$1 = (function (){var statearr_31933 = state_31918;
(statearr_31933[(8)] = inst_31893);

return statearr_31933;
})();
var statearr_31934_31979 = state_31918__$1;
(statearr_31934_31979[(2)] = inst_31895);

(statearr_31934_31979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (13))){
var inst_31852 = figwheel.client.heads_up.clear.call(null);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(16),inst_31852);
} else {
if((state_val_31919 === (22))){
var inst_31873 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31874 = figwheel.client.heads_up.append_warning_message.call(null,inst_31873);
var state_31918__$1 = state_31918;
var statearr_31935_31980 = state_31918__$1;
(statearr_31935_31980[(2)] = inst_31874);

(statearr_31935_31980[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (36))){
var inst_31904 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31936_31981 = state_31918__$1;
(statearr_31936_31981[(2)] = inst_31904);

(statearr_31936_31981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (29))){
var inst_31884 = (state_31918[(2)]);
var inst_31885 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31886 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31885);
var state_31918__$1 = (function (){var statearr_31937 = state_31918;
(statearr_31937[(9)] = inst_31884);

return statearr_31937;
})();
var statearr_31938_31982 = state_31918__$1;
(statearr_31938_31982[(2)] = inst_31886);

(statearr_31938_31982[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (6))){
var inst_31833 = (state_31918[(10)]);
var state_31918__$1 = state_31918;
var statearr_31939_31983 = state_31918__$1;
(statearr_31939_31983[(2)] = inst_31833);

(statearr_31939_31983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (28))){
var inst_31880 = (state_31918[(2)]);
var inst_31881 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31882 = figwheel.client.heads_up.display_warning.call(null,inst_31881);
var state_31918__$1 = (function (){var statearr_31940 = state_31918;
(statearr_31940[(11)] = inst_31880);

return statearr_31940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(29),inst_31882);
} else {
if((state_val_31919 === (25))){
var inst_31878 = figwheel.client.heads_up.clear.call(null);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(28),inst_31878);
} else {
if((state_val_31919 === (34))){
var inst_31899 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(37),inst_31899);
} else {
if((state_val_31919 === (17))){
var inst_31858 = (state_31918[(2)]);
var inst_31859 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31860 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31859);
var state_31918__$1 = (function (){var statearr_31941 = state_31918;
(statearr_31941[(12)] = inst_31858);

return statearr_31941;
})();
var statearr_31942_31984 = state_31918__$1;
(statearr_31942_31984[(2)] = inst_31860);

(statearr_31942_31984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (3))){
var inst_31850 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31850)){
var statearr_31943_31985 = state_31918__$1;
(statearr_31943_31985[(1)] = (13));

} else {
var statearr_31944_31986 = state_31918__$1;
(statearr_31944_31986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (12))){
var inst_31846 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31945_31987 = state_31918__$1;
(statearr_31945_31987[(2)] = inst_31846);

(statearr_31945_31987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (2))){
var inst_31833 = (state_31918[(10)]);
var inst_31833__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31918__$1 = (function (){var statearr_31946 = state_31918;
(statearr_31946[(10)] = inst_31833__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31833__$1)){
var statearr_31947_31988 = state_31918__$1;
(statearr_31947_31988[(1)] = (5));

} else {
var statearr_31948_31989 = state_31918__$1;
(statearr_31948_31989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (23))){
var inst_31876 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31876)){
var statearr_31949_31990 = state_31918__$1;
(statearr_31949_31990[(1)] = (25));

} else {
var statearr_31950_31991 = state_31918__$1;
(statearr_31950_31991[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (35))){
var state_31918__$1 = state_31918;
var statearr_31951_31992 = state_31918__$1;
(statearr_31951_31992[(2)] = null);

(statearr_31951_31992[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (19))){
var inst_31871 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31871)){
var statearr_31952_31993 = state_31918__$1;
(statearr_31952_31993[(1)] = (22));

} else {
var statearr_31953_31994 = state_31918__$1;
(statearr_31953_31994[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (11))){
var inst_31842 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31954_31995 = state_31918__$1;
(statearr_31954_31995[(2)] = inst_31842);

(statearr_31954_31995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (9))){
var inst_31844 = figwheel.client.heads_up.clear.call(null);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(12),inst_31844);
} else {
if((state_val_31919 === (5))){
var inst_31835 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31918__$1 = state_31918;
var statearr_31955_31996 = state_31918__$1;
(statearr_31955_31996[(2)] = inst_31835);

(statearr_31955_31996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (14))){
var inst_31862 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31862)){
var statearr_31956_31997 = state_31918__$1;
(statearr_31956_31997[(1)] = (18));

} else {
var statearr_31957_31998 = state_31918__$1;
(statearr_31957_31998[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (26))){
var inst_31888 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31888)){
var statearr_31958_31999 = state_31918__$1;
(statearr_31958_31999[(1)] = (30));

} else {
var statearr_31959_32000 = state_31918__$1;
(statearr_31959_32000[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (16))){
var inst_31854 = (state_31918[(2)]);
var inst_31855 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31856 = figwheel.client.heads_up.display_exception.call(null,inst_31855);
var state_31918__$1 = (function (){var statearr_31960 = state_31918;
(statearr_31960[(13)] = inst_31854);

return statearr_31960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(17),inst_31856);
} else {
if((state_val_31919 === (30))){
var inst_31890 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31891 = figwheel.client.heads_up.display_warning.call(null,inst_31890);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(33),inst_31891);
} else {
if((state_val_31919 === (10))){
var inst_31848 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31961_32001 = state_31918__$1;
(statearr_31961_32001[(2)] = inst_31848);

(statearr_31961_32001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (18))){
var inst_31864 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31865 = figwheel.client.heads_up.display_exception.call(null,inst_31864);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(21),inst_31865);
} else {
if((state_val_31919 === (37))){
var inst_31901 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31962_32002 = state_31918__$1;
(statearr_31962_32002[(2)] = inst_31901);

(statearr_31962_32002[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (8))){
var inst_31840 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(11),inst_31840);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26483__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26460__auto__,c__26483__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto____0 = (function (){
var statearr_31963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31963[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto__);

(statearr_31963[(1)] = (1));

return statearr_31963;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto____1 = (function (state_31918){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_31918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e31964){if((e31964 instanceof Object)){
var ex__26464__auto__ = e31964;
var statearr_31965_32003 = state_31918;
(statearr_31965_32003[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32004 = state_31918;
state_31918 = G__32004;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto__ = function(state_31918){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto____1.call(this,state_31918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__,msg_hist,msg_names,msg))
})();
var state__26485__auto__ = (function (){var statearr_31966 = f__26484__auto__.call(null);
(statearr_31966[(6)] = c__26483__auto__);

return statearr_31966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__,msg_hist,msg_names,msg))
);

return c__26483__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26483__auto___32033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___32033,ch){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___32033,ch){
return (function (state_32019){
var state_val_32020 = (state_32019[(1)]);
if((state_val_32020 === (1))){
var state_32019__$1 = state_32019;
var statearr_32021_32034 = state_32019__$1;
(statearr_32021_32034[(2)] = null);

(statearr_32021_32034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32020 === (2))){
var state_32019__$1 = state_32019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32019__$1,(4),ch);
} else {
if((state_val_32020 === (3))){
var inst_32017 = (state_32019[(2)]);
var state_32019__$1 = state_32019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32019__$1,inst_32017);
} else {
if((state_val_32020 === (4))){
var inst_32007 = (state_32019[(7)]);
var inst_32007__$1 = (state_32019[(2)]);
var state_32019__$1 = (function (){var statearr_32022 = state_32019;
(statearr_32022[(7)] = inst_32007__$1);

return statearr_32022;
})();
if(cljs.core.truth_(inst_32007__$1)){
var statearr_32023_32035 = state_32019__$1;
(statearr_32023_32035[(1)] = (5));

} else {
var statearr_32024_32036 = state_32019__$1;
(statearr_32024_32036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32020 === (5))){
var inst_32007 = (state_32019[(7)]);
var inst_32009 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32007);
var state_32019__$1 = state_32019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32019__$1,(8),inst_32009);
} else {
if((state_val_32020 === (6))){
var state_32019__$1 = state_32019;
var statearr_32025_32037 = state_32019__$1;
(statearr_32025_32037[(2)] = null);

(statearr_32025_32037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32020 === (7))){
var inst_32015 = (state_32019[(2)]);
var state_32019__$1 = state_32019;
var statearr_32026_32038 = state_32019__$1;
(statearr_32026_32038[(2)] = inst_32015);

(statearr_32026_32038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32020 === (8))){
var inst_32011 = (state_32019[(2)]);
var state_32019__$1 = (function (){var statearr_32027 = state_32019;
(statearr_32027[(8)] = inst_32011);

return statearr_32027;
})();
var statearr_32028_32039 = state_32019__$1;
(statearr_32028_32039[(2)] = null);

(statearr_32028_32039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26483__auto___32033,ch))
;
return ((function (switch__26460__auto__,c__26483__auto___32033,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26461__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26461__auto____0 = (function (){
var statearr_32029 = [null,null,null,null,null,null,null,null,null];
(statearr_32029[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26461__auto__);

(statearr_32029[(1)] = (1));

return statearr_32029;
});
var figwheel$client$heads_up_plugin_$_state_machine__26461__auto____1 = (function (state_32019){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_32019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e32030){if((e32030 instanceof Object)){
var ex__26464__auto__ = e32030;
var statearr_32031_32040 = state_32019;
(statearr_32031_32040[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32041 = state_32019;
state_32019 = G__32041;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26461__auto__ = function(state_32019){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26461__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26461__auto____1.call(this,state_32019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26461__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26461__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___32033,ch))
})();
var state__26485__auto__ = (function (){var statearr_32032 = f__26484__auto__.call(null);
(statearr_32032[(6)] = c__26483__auto___32033);

return statearr_32032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___32033,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__){
return (function (state_32047){
var state_val_32048 = (state_32047[(1)]);
if((state_val_32048 === (1))){
var inst_32042 = cljs.core.async.timeout.call(null,(3000));
var state_32047__$1 = state_32047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32047__$1,(2),inst_32042);
} else {
if((state_val_32048 === (2))){
var inst_32044 = (state_32047[(2)]);
var inst_32045 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32047__$1 = (function (){var statearr_32049 = state_32047;
(statearr_32049[(7)] = inst_32044);

return statearr_32049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32047__$1,inst_32045);
} else {
return null;
}
}
});})(c__26483__auto__))
;
return ((function (switch__26460__auto__,c__26483__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26461__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26461__auto____0 = (function (){
var statearr_32050 = [null,null,null,null,null,null,null,null];
(statearr_32050[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26461__auto__);

(statearr_32050[(1)] = (1));

return statearr_32050;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26461__auto____1 = (function (state_32047){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_32047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e32051){if((e32051 instanceof Object)){
var ex__26464__auto__ = e32051;
var statearr_32052_32054 = state_32047;
(statearr_32052_32054[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32055 = state_32047;
state_32047 = G__32055;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26461__auto__ = function(state_32047){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26461__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26461__auto____1.call(this,state_32047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26461__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26461__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__))
})();
var state__26485__auto__ = (function (){var statearr_32053 = f__26484__auto__.call(null);
(statearr_32053[(6)] = c__26483__auto__);

return statearr_32053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__))
);

return c__26483__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__,figwheel_version,temp__5457__auto__){
return (function (state_32062){
var state_val_32063 = (state_32062[(1)]);
if((state_val_32063 === (1))){
var inst_32056 = cljs.core.async.timeout.call(null,(2000));
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32062__$1,(2),inst_32056);
} else {
if((state_val_32063 === (2))){
var inst_32058 = (state_32062[(2)]);
var inst_32059 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32060 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32059);
var state_32062__$1 = (function (){var statearr_32064 = state_32062;
(statearr_32064[(7)] = inst_32058);

return statearr_32064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32062__$1,inst_32060);
} else {
return null;
}
}
});})(c__26483__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26460__auto__,c__26483__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto____0 = (function (){
var statearr_32065 = [null,null,null,null,null,null,null,null];
(statearr_32065[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto__);

(statearr_32065[(1)] = (1));

return statearr_32065;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto____1 = (function (state_32062){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_32062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e32066){if((e32066 instanceof Object)){
var ex__26464__auto__ = e32066;
var statearr_32067_32069 = state_32062;
(statearr_32067_32069[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32070 = state_32062;
state_32062 = G__32070;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto__ = function(state_32062){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto____1.call(this,state_32062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26485__auto__ = (function (){var statearr_32068 = f__26484__auto__.call(null);
(statearr_32068[(6)] = c__26483__auto__);

return statearr_32068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__,figwheel_version,temp__5457__auto__))
);

return c__26483__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32071){
var map__32072 = p__32071;
var map__32072__$1 = ((((!((map__32072 == null)))?(((((map__32072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32072):map__32072);
var file = cljs.core.get.call(null,map__32072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32072__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32072__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32074 = "";
var G__32074__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32074),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32074);
var G__32074__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32074__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32074__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32074__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32074__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32075){
var map__32076 = p__32075;
var map__32076__$1 = ((((!((map__32076 == null)))?(((((map__32076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32076):map__32076);
var ed = map__32076__$1;
var formatted_exception = cljs.core.get.call(null,map__32076__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32076__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32076__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32078_32082 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32079_32083 = null;
var count__32080_32084 = (0);
var i__32081_32085 = (0);
while(true){
if((i__32081_32085 < count__32080_32084)){
var msg_32086 = cljs.core._nth.call(null,chunk__32079_32083,i__32081_32085);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32086);


var G__32087 = seq__32078_32082;
var G__32088 = chunk__32079_32083;
var G__32089 = count__32080_32084;
var G__32090 = (i__32081_32085 + (1));
seq__32078_32082 = G__32087;
chunk__32079_32083 = G__32088;
count__32080_32084 = G__32089;
i__32081_32085 = G__32090;
continue;
} else {
var temp__5457__auto___32091 = cljs.core.seq.call(null,seq__32078_32082);
if(temp__5457__auto___32091){
var seq__32078_32092__$1 = temp__5457__auto___32091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32078_32092__$1)){
var c__4319__auto___32093 = cljs.core.chunk_first.call(null,seq__32078_32092__$1);
var G__32094 = cljs.core.chunk_rest.call(null,seq__32078_32092__$1);
var G__32095 = c__4319__auto___32093;
var G__32096 = cljs.core.count.call(null,c__4319__auto___32093);
var G__32097 = (0);
seq__32078_32082 = G__32094;
chunk__32079_32083 = G__32095;
count__32080_32084 = G__32096;
i__32081_32085 = G__32097;
continue;
} else {
var msg_32098 = cljs.core.first.call(null,seq__32078_32092__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32098);


var G__32099 = cljs.core.next.call(null,seq__32078_32092__$1);
var G__32100 = null;
var G__32101 = (0);
var G__32102 = (0);
seq__32078_32082 = G__32099;
chunk__32079_32083 = G__32100;
count__32080_32084 = G__32101;
i__32081_32085 = G__32102;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32103){
var map__32104 = p__32103;
var map__32104__$1 = ((((!((map__32104 == null)))?(((((map__32104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32104):map__32104);
var w = map__32104__$1;
var message = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32106 = cljs.core.seq.call(null,plugins);
var chunk__32107 = null;
var count__32108 = (0);
var i__32109 = (0);
while(true){
if((i__32109 < count__32108)){
var vec__32110 = cljs.core._nth.call(null,chunk__32107,i__32109);
var k = cljs.core.nth.call(null,vec__32110,(0),null);
var plugin = cljs.core.nth.call(null,vec__32110,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32116 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32106,chunk__32107,count__32108,i__32109,pl_32116,vec__32110,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32116.call(null,msg_hist);
});})(seq__32106,chunk__32107,count__32108,i__32109,pl_32116,vec__32110,k,plugin))
);
} else {
}


var G__32117 = seq__32106;
var G__32118 = chunk__32107;
var G__32119 = count__32108;
var G__32120 = (i__32109 + (1));
seq__32106 = G__32117;
chunk__32107 = G__32118;
count__32108 = G__32119;
i__32109 = G__32120;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32106);
if(temp__5457__auto__){
var seq__32106__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32106__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32106__$1);
var G__32121 = cljs.core.chunk_rest.call(null,seq__32106__$1);
var G__32122 = c__4319__auto__;
var G__32123 = cljs.core.count.call(null,c__4319__auto__);
var G__32124 = (0);
seq__32106 = G__32121;
chunk__32107 = G__32122;
count__32108 = G__32123;
i__32109 = G__32124;
continue;
} else {
var vec__32113 = cljs.core.first.call(null,seq__32106__$1);
var k = cljs.core.nth.call(null,vec__32113,(0),null);
var plugin = cljs.core.nth.call(null,vec__32113,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32125 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32106,chunk__32107,count__32108,i__32109,pl_32125,vec__32113,k,plugin,seq__32106__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32125.call(null,msg_hist);
});})(seq__32106,chunk__32107,count__32108,i__32109,pl_32125,vec__32113,k,plugin,seq__32106__$1,temp__5457__auto__))
);
} else {
}


var G__32126 = cljs.core.next.call(null,seq__32106__$1);
var G__32127 = null;
var G__32128 = (0);
var G__32129 = (0);
seq__32106 = G__32126;
chunk__32107 = G__32127;
count__32108 = G__32128;
i__32109 = G__32129;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32131 = arguments.length;
switch (G__32131) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32132_32137 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32133_32138 = null;
var count__32134_32139 = (0);
var i__32135_32140 = (0);
while(true){
if((i__32135_32140 < count__32134_32139)){
var msg_32141 = cljs.core._nth.call(null,chunk__32133_32138,i__32135_32140);
figwheel.client.socket.handle_incoming_message.call(null,msg_32141);


var G__32142 = seq__32132_32137;
var G__32143 = chunk__32133_32138;
var G__32144 = count__32134_32139;
var G__32145 = (i__32135_32140 + (1));
seq__32132_32137 = G__32142;
chunk__32133_32138 = G__32143;
count__32134_32139 = G__32144;
i__32135_32140 = G__32145;
continue;
} else {
var temp__5457__auto___32146 = cljs.core.seq.call(null,seq__32132_32137);
if(temp__5457__auto___32146){
var seq__32132_32147__$1 = temp__5457__auto___32146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32132_32147__$1)){
var c__4319__auto___32148 = cljs.core.chunk_first.call(null,seq__32132_32147__$1);
var G__32149 = cljs.core.chunk_rest.call(null,seq__32132_32147__$1);
var G__32150 = c__4319__auto___32148;
var G__32151 = cljs.core.count.call(null,c__4319__auto___32148);
var G__32152 = (0);
seq__32132_32137 = G__32149;
chunk__32133_32138 = G__32150;
count__32134_32139 = G__32151;
i__32135_32140 = G__32152;
continue;
} else {
var msg_32153 = cljs.core.first.call(null,seq__32132_32147__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32153);


var G__32154 = cljs.core.next.call(null,seq__32132_32147__$1);
var G__32155 = null;
var G__32156 = (0);
var G__32157 = (0);
seq__32132_32137 = G__32154;
chunk__32133_32138 = G__32155;
count__32134_32139 = G__32156;
i__32135_32140 = G__32157;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32162 = arguments.length;
var i__4500__auto___32163 = (0);
while(true){
if((i__4500__auto___32163 < len__4499__auto___32162)){
args__4502__auto__.push((arguments[i__4500__auto___32163]));

var G__32164 = (i__4500__auto___32163 + (1));
i__4500__auto___32163 = G__32164;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32159){
var map__32160 = p__32159;
var map__32160__$1 = ((((!((map__32160 == null)))?(((((map__32160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32160):map__32160);
var opts = map__32160__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32158){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32158));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32165){if((e32165 instanceof Error)){
var e = e32165;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32165;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32166){
var map__32167 = p__32166;
var map__32167__$1 = ((((!((map__32167 == null)))?(((((map__32167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32167):map__32167);
var msg_name = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1550771781135
