// Compiled by ClojureScript 1.10.520 {}
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
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30292){if((e30292 instanceof Error)){
var e = e30292;
return "Error: Unable to stringify";
} else {
throw e30292;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30295 = arguments.length;
switch (G__30295) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30293_SHARP_){
if(typeof p1__30293_SHARP_ === 'string'){
return p1__30293_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30293_SHARP_);
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
var args__4736__auto__ = [];
var len__4730__auto___30298 = arguments.length;
var i__4731__auto___30299 = (0);
while(true){
if((i__4731__auto___30299 < len__4730__auto___30298)){
args__4736__auto__.push((arguments[i__4731__auto___30299]));

var G__30300 = (i__4731__auto___30299 + (1));
i__4731__auto___30299 = G__30300;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30297){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30297));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30302 = arguments.length;
var i__4731__auto___30303 = (0);
while(true){
if((i__4731__auto___30303 < len__4730__auto___30302)){
args__4736__auto__.push((arguments[i__4731__auto___30303]));

var G__30304 = (i__4731__auto___30303 + (1));
i__4731__auto___30303 = G__30304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30301));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30305){
var map__30306 = p__30305;
var map__30306__$1 = (((((!((map__30306 == null))))?(((((map__30306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30306):map__30306);
var message = cljs.core.get.call(null,map__30306__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30306__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
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
var c__26301__auto___30385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___30385,ch){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___30385,ch){
return (function (state_30357){
var state_val_30358 = (state_30357[(1)]);
if((state_val_30358 === (7))){
var inst_30353 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30359_30386 = state_30357__$1;
(statearr_30359_30386[(2)] = inst_30353);

(statearr_30359_30386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (1))){
var state_30357__$1 = state_30357;
var statearr_30360_30387 = state_30357__$1;
(statearr_30360_30387[(2)] = null);

(statearr_30360_30387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (4))){
var inst_30310 = (state_30357[(7)]);
var inst_30310__$1 = (state_30357[(2)]);
var state_30357__$1 = (function (){var statearr_30361 = state_30357;
(statearr_30361[(7)] = inst_30310__$1);

return statearr_30361;
})();
if(cljs.core.truth_(inst_30310__$1)){
var statearr_30362_30388 = state_30357__$1;
(statearr_30362_30388[(1)] = (5));

} else {
var statearr_30363_30389 = state_30357__$1;
(statearr_30363_30389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (15))){
var inst_30317 = (state_30357[(8)]);
var inst_30332 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30317);
var inst_30333 = cljs.core.first.call(null,inst_30332);
var inst_30334 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30333);
var inst_30335 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30334)].join('');
var inst_30336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30335);
var state_30357__$1 = state_30357;
var statearr_30364_30390 = state_30357__$1;
(statearr_30364_30390[(2)] = inst_30336);

(statearr_30364_30390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (13))){
var inst_30341 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30365_30391 = state_30357__$1;
(statearr_30365_30391[(2)] = inst_30341);

(statearr_30365_30391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (6))){
var state_30357__$1 = state_30357;
var statearr_30366_30392 = state_30357__$1;
(statearr_30366_30392[(2)] = null);

(statearr_30366_30392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (17))){
var inst_30339 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30367_30393 = state_30357__$1;
(statearr_30367_30393[(2)] = inst_30339);

(statearr_30367_30393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (3))){
var inst_30355 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30357__$1,inst_30355);
} else {
if((state_val_30358 === (12))){
var inst_30316 = (state_30357[(9)]);
var inst_30330 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30316,opts);
var state_30357__$1 = state_30357;
if(inst_30330){
var statearr_30368_30394 = state_30357__$1;
(statearr_30368_30394[(1)] = (15));

} else {
var statearr_30369_30395 = state_30357__$1;
(statearr_30369_30395[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (2))){
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30357__$1,(4),ch);
} else {
if((state_val_30358 === (11))){
var inst_30317 = (state_30357[(8)]);
var inst_30322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30323 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30317);
var inst_30324 = cljs.core.async.timeout.call(null,(1000));
var inst_30325 = [inst_30323,inst_30324];
var inst_30326 = (new cljs.core.PersistentVector(null,2,(5),inst_30322,inst_30325,null));
var state_30357__$1 = state_30357;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30357__$1,(14),inst_30326);
} else {
if((state_val_30358 === (9))){
var inst_30317 = (state_30357[(8)]);
var inst_30343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30344 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30317);
var inst_30345 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30344);
var inst_30346 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30345)].join('');
var inst_30347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30346);
var state_30357__$1 = (function (){var statearr_30370 = state_30357;
(statearr_30370[(10)] = inst_30343);

return statearr_30370;
})();
var statearr_30371_30396 = state_30357__$1;
(statearr_30371_30396[(2)] = inst_30347);

(statearr_30371_30396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (5))){
var inst_30310 = (state_30357[(7)]);
var inst_30312 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30313 = (new cljs.core.PersistentArrayMap(null,2,inst_30312,null));
var inst_30314 = (new cljs.core.PersistentHashSet(null,inst_30313,null));
var inst_30315 = figwheel.client.focus_msgs.call(null,inst_30314,inst_30310);
var inst_30316 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30315);
var inst_30317 = cljs.core.first.call(null,inst_30315);
var inst_30318 = figwheel.client.autoload_QMARK_.call(null);
var state_30357__$1 = (function (){var statearr_30372 = state_30357;
(statearr_30372[(8)] = inst_30317);

(statearr_30372[(9)] = inst_30316);

return statearr_30372;
})();
if(cljs.core.truth_(inst_30318)){
var statearr_30373_30397 = state_30357__$1;
(statearr_30373_30397[(1)] = (8));

} else {
var statearr_30374_30398 = state_30357__$1;
(statearr_30374_30398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (14))){
var inst_30328 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30375_30399 = state_30357__$1;
(statearr_30375_30399[(2)] = inst_30328);

(statearr_30375_30399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (16))){
var state_30357__$1 = state_30357;
var statearr_30376_30400 = state_30357__$1;
(statearr_30376_30400[(2)] = null);

(statearr_30376_30400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (10))){
var inst_30349 = (state_30357[(2)]);
var state_30357__$1 = (function (){var statearr_30377 = state_30357;
(statearr_30377[(11)] = inst_30349);

return statearr_30377;
})();
var statearr_30378_30401 = state_30357__$1;
(statearr_30378_30401[(2)] = null);

(statearr_30378_30401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (8))){
var inst_30316 = (state_30357[(9)]);
var inst_30320 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30316,opts);
var state_30357__$1 = state_30357;
if(cljs.core.truth_(inst_30320)){
var statearr_30379_30402 = state_30357__$1;
(statearr_30379_30402[(1)] = (11));

} else {
var statearr_30380_30403 = state_30357__$1;
(statearr_30380_30403[(1)] = (12));

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
});})(c__26301__auto___30385,ch))
;
return ((function (switch__26206__auto__,c__26301__auto___30385,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26207__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26207__auto____0 = (function (){
var statearr_30381 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30381[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26207__auto__);

(statearr_30381[(1)] = (1));

return statearr_30381;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26207__auto____1 = (function (state_30357){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_30357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e30382){if((e30382 instanceof Object)){
var ex__26210__auto__ = e30382;
var statearr_30383_30404 = state_30357;
(statearr_30383_30404[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30405 = state_30357;
state_30357 = G__30405;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26207__auto__ = function(state_30357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26207__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26207__auto____1.call(this,state_30357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26207__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26207__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___30385,ch))
})();
var state__26303__auto__ = (function (){var statearr_30384 = f__26302__auto__.call(null);
(statearr_30384[(6)] = c__26301__auto___30385);

return statearr_30384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___30385,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30406_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30406_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
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
var base_path_30412 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30412){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30408 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30409 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30410 = true;
var _STAR_print_fn_STAR__temp_val__30411 = ((function (_STAR_print_newline_STAR__orig_val__30408,_STAR_print_fn_STAR__orig_val__30409,_STAR_print_newline_STAR__temp_val__30410,sb,base_path_30412){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30408,_STAR_print_fn_STAR__orig_val__30409,_STAR_print_newline_STAR__temp_val__30410,sb,base_path_30412))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30410;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30411;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30409;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30408;
}}catch (e30407){if((e30407 instanceof Error)){
var e = e30407;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30412], null));
} else {
var e = e30407;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30412))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30413){
var map__30414 = p__30413;
var map__30414__$1 = (((((!((map__30414 == null))))?(((((map__30414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30414):map__30414);
var opts = map__30414__$1;
var build_id = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30414,map__30414__$1,opts,build_id){
return (function (p__30416){
var vec__30417 = p__30416;
var seq__30418 = cljs.core.seq.call(null,vec__30417);
var first__30419 = cljs.core.first.call(null,seq__30418);
var seq__30418__$1 = cljs.core.next.call(null,seq__30418);
var map__30420 = first__30419;
var map__30420__$1 = (((((!((map__30420 == null))))?(((((map__30420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30420):map__30420);
var msg = map__30420__$1;
var msg_name = cljs.core.get.call(null,map__30420__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30418__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30417,seq__30418,first__30419,seq__30418__$1,map__30420,map__30420__$1,msg,msg_name,_,map__30414,map__30414__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30417,seq__30418,first__30419,seq__30418__$1,map__30420,map__30420__$1,msg,msg_name,_,map__30414,map__30414__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30414,map__30414__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30422){
var vec__30423 = p__30422;
var seq__30424 = cljs.core.seq.call(null,vec__30423);
var first__30425 = cljs.core.first.call(null,seq__30424);
var seq__30424__$1 = cljs.core.next.call(null,seq__30424);
var map__30426 = first__30425;
var map__30426__$1 = (((((!((map__30426 == null))))?(((((map__30426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30426):map__30426);
var msg = map__30426__$1;
var msg_name = cljs.core.get.call(null,map__30426__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30424__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30428){
var map__30429 = p__30428;
var map__30429__$1 = (((((!((map__30429 == null))))?(((((map__30429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30429):map__30429);
var on_compile_warning = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30429,map__30429__$1,on_compile_warning,on_compile_fail){
return (function (p__30431){
var vec__30432 = p__30431;
var seq__30433 = cljs.core.seq.call(null,vec__30432);
var first__30434 = cljs.core.first.call(null,seq__30433);
var seq__30433__$1 = cljs.core.next.call(null,seq__30433);
var map__30435 = first__30434;
var map__30435__$1 = (((((!((map__30435 == null))))?(((((map__30435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30435):map__30435);
var msg = map__30435__$1;
var msg_name = cljs.core.get.call(null,map__30435__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30433__$1;
var pred__30437 = cljs.core._EQ_;
var expr__30438 = msg_name;
if(cljs.core.truth_(pred__30437.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30438))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30437.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30438))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30429,map__30429__$1,on_compile_warning,on_compile_fail))
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
var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__,msg_hist,msg_names,msg){
return (function (state_30527){
var state_val_30528 = (state_30527[(1)]);
if((state_val_30528 === (7))){
var inst_30447 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
if(cljs.core.truth_(inst_30447)){
var statearr_30529_30576 = state_30527__$1;
(statearr_30529_30576[(1)] = (8));

} else {
var statearr_30530_30577 = state_30527__$1;
(statearr_30530_30577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (20))){
var inst_30521 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30531_30578 = state_30527__$1;
(statearr_30531_30578[(2)] = inst_30521);

(statearr_30531_30578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (27))){
var inst_30517 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30532_30579 = state_30527__$1;
(statearr_30532_30579[(2)] = inst_30517);

(statearr_30532_30579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (1))){
var inst_30440 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30527__$1 = state_30527;
if(cljs.core.truth_(inst_30440)){
var statearr_30533_30580 = state_30527__$1;
(statearr_30533_30580[(1)] = (2));

} else {
var statearr_30534_30581 = state_30527__$1;
(statearr_30534_30581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (24))){
var inst_30519 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30535_30582 = state_30527__$1;
(statearr_30535_30582[(2)] = inst_30519);

(statearr_30535_30582[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (4))){
var inst_30525 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30527__$1,inst_30525);
} else {
if((state_val_30528 === (15))){
var inst_30523 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30536_30583 = state_30527__$1;
(statearr_30536_30583[(2)] = inst_30523);

(statearr_30536_30583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (21))){
var inst_30476 = (state_30527[(2)]);
var inst_30477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30478 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30477);
var state_30527__$1 = (function (){var statearr_30537 = state_30527;
(statearr_30537[(7)] = inst_30476);

return statearr_30537;
})();
var statearr_30538_30584 = state_30527__$1;
(statearr_30538_30584[(2)] = inst_30478);

(statearr_30538_30584[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (31))){
var inst_30506 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30527__$1 = state_30527;
if(inst_30506){
var statearr_30539_30585 = state_30527__$1;
(statearr_30539_30585[(1)] = (34));

} else {
var statearr_30540_30586 = state_30527__$1;
(statearr_30540_30586[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (32))){
var inst_30515 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30541_30587 = state_30527__$1;
(statearr_30541_30587[(2)] = inst_30515);

(statearr_30541_30587[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (33))){
var inst_30502 = (state_30527[(2)]);
var inst_30503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30504 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30503);
var state_30527__$1 = (function (){var statearr_30542 = state_30527;
(statearr_30542[(8)] = inst_30502);

return statearr_30542;
})();
var statearr_30543_30588 = state_30527__$1;
(statearr_30543_30588[(2)] = inst_30504);

(statearr_30543_30588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (13))){
var inst_30461 = figwheel.client.heads_up.clear.call(null);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(16),inst_30461);
} else {
if((state_val_30528 === (22))){
var inst_30482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30483 = figwheel.client.heads_up.append_warning_message.call(null,inst_30482);
var state_30527__$1 = state_30527;
var statearr_30544_30589 = state_30527__$1;
(statearr_30544_30589[(2)] = inst_30483);

(statearr_30544_30589[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (36))){
var inst_30513 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30545_30590 = state_30527__$1;
(statearr_30545_30590[(2)] = inst_30513);

(statearr_30545_30590[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (29))){
var inst_30493 = (state_30527[(2)]);
var inst_30494 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30495 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30494);
var state_30527__$1 = (function (){var statearr_30546 = state_30527;
(statearr_30546[(9)] = inst_30493);

return statearr_30546;
})();
var statearr_30547_30591 = state_30527__$1;
(statearr_30547_30591[(2)] = inst_30495);

(statearr_30547_30591[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (6))){
var inst_30442 = (state_30527[(10)]);
var state_30527__$1 = state_30527;
var statearr_30548_30592 = state_30527__$1;
(statearr_30548_30592[(2)] = inst_30442);

(statearr_30548_30592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (28))){
var inst_30489 = (state_30527[(2)]);
var inst_30490 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30491 = figwheel.client.heads_up.display_warning.call(null,inst_30490);
var state_30527__$1 = (function (){var statearr_30549 = state_30527;
(statearr_30549[(11)] = inst_30489);

return statearr_30549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(29),inst_30491);
} else {
if((state_val_30528 === (25))){
var inst_30487 = figwheel.client.heads_up.clear.call(null);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(28),inst_30487);
} else {
if((state_val_30528 === (34))){
var inst_30508 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(37),inst_30508);
} else {
if((state_val_30528 === (17))){
var inst_30467 = (state_30527[(2)]);
var inst_30468 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30469 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30468);
var state_30527__$1 = (function (){var statearr_30550 = state_30527;
(statearr_30550[(12)] = inst_30467);

return statearr_30550;
})();
var statearr_30551_30593 = state_30527__$1;
(statearr_30551_30593[(2)] = inst_30469);

(statearr_30551_30593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (3))){
var inst_30459 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30527__$1 = state_30527;
if(inst_30459){
var statearr_30552_30594 = state_30527__$1;
(statearr_30552_30594[(1)] = (13));

} else {
var statearr_30553_30595 = state_30527__$1;
(statearr_30553_30595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (12))){
var inst_30455 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30554_30596 = state_30527__$1;
(statearr_30554_30596[(2)] = inst_30455);

(statearr_30554_30596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (2))){
var inst_30442 = (state_30527[(10)]);
var inst_30442__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30527__$1 = (function (){var statearr_30555 = state_30527;
(statearr_30555[(10)] = inst_30442__$1);

return statearr_30555;
})();
if(cljs.core.truth_(inst_30442__$1)){
var statearr_30556_30597 = state_30527__$1;
(statearr_30556_30597[(1)] = (5));

} else {
var statearr_30557_30598 = state_30527__$1;
(statearr_30557_30598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (23))){
var inst_30485 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30527__$1 = state_30527;
if(inst_30485){
var statearr_30558_30599 = state_30527__$1;
(statearr_30558_30599[(1)] = (25));

} else {
var statearr_30559_30600 = state_30527__$1;
(statearr_30559_30600[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (35))){
var state_30527__$1 = state_30527;
var statearr_30560_30601 = state_30527__$1;
(statearr_30560_30601[(2)] = null);

(statearr_30560_30601[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (19))){
var inst_30480 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30527__$1 = state_30527;
if(inst_30480){
var statearr_30561_30602 = state_30527__$1;
(statearr_30561_30602[(1)] = (22));

} else {
var statearr_30562_30603 = state_30527__$1;
(statearr_30562_30603[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (11))){
var inst_30451 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30563_30604 = state_30527__$1;
(statearr_30563_30604[(2)] = inst_30451);

(statearr_30563_30604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (9))){
var inst_30453 = figwheel.client.heads_up.clear.call(null);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(12),inst_30453);
} else {
if((state_val_30528 === (5))){
var inst_30444 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30527__$1 = state_30527;
var statearr_30564_30605 = state_30527__$1;
(statearr_30564_30605[(2)] = inst_30444);

(statearr_30564_30605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (14))){
var inst_30471 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30527__$1 = state_30527;
if(inst_30471){
var statearr_30565_30606 = state_30527__$1;
(statearr_30565_30606[(1)] = (18));

} else {
var statearr_30566_30607 = state_30527__$1;
(statearr_30566_30607[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (26))){
var inst_30497 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30527__$1 = state_30527;
if(inst_30497){
var statearr_30567_30608 = state_30527__$1;
(statearr_30567_30608[(1)] = (30));

} else {
var statearr_30568_30609 = state_30527__$1;
(statearr_30568_30609[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (16))){
var inst_30463 = (state_30527[(2)]);
var inst_30464 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30465 = figwheel.client.heads_up.display_exception.call(null,inst_30464);
var state_30527__$1 = (function (){var statearr_30569 = state_30527;
(statearr_30569[(13)] = inst_30463);

return statearr_30569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(17),inst_30465);
} else {
if((state_val_30528 === (30))){
var inst_30499 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30500 = figwheel.client.heads_up.display_warning.call(null,inst_30499);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(33),inst_30500);
} else {
if((state_val_30528 === (10))){
var inst_30457 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30570_30610 = state_30527__$1;
(statearr_30570_30610[(2)] = inst_30457);

(statearr_30570_30610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (18))){
var inst_30473 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30474 = figwheel.client.heads_up.display_exception.call(null,inst_30473);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(21),inst_30474);
} else {
if((state_val_30528 === (37))){
var inst_30510 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30571_30611 = state_30527__$1;
(statearr_30571_30611[(2)] = inst_30510);

(statearr_30571_30611[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (8))){
var inst_30449 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(11),inst_30449);
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
});})(c__26301__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26206__auto__,c__26301__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto____0 = (function (){
var statearr_30572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30572[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto__);

(statearr_30572[(1)] = (1));

return statearr_30572;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto____1 = (function (state_30527){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_30527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e30573){if((e30573 instanceof Object)){
var ex__26210__auto__ = e30573;
var statearr_30574_30612 = state_30527;
(statearr_30574_30612[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30613 = state_30527;
state_30527 = G__30613;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto__ = function(state_30527){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto____1.call(this,state_30527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__,msg_hist,msg_names,msg))
})();
var state__26303__auto__ = (function (){var statearr_30575 = f__26302__auto__.call(null);
(statearr_30575[(6)] = c__26301__auto__);

return statearr_30575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__,msg_hist,msg_names,msg))
);

return c__26301__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26301__auto___30642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___30642,ch){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___30642,ch){
return (function (state_30628){
var state_val_30629 = (state_30628[(1)]);
if((state_val_30629 === (1))){
var state_30628__$1 = state_30628;
var statearr_30630_30643 = state_30628__$1;
(statearr_30630_30643[(2)] = null);

(statearr_30630_30643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (2))){
var state_30628__$1 = state_30628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30628__$1,(4),ch);
} else {
if((state_val_30629 === (3))){
var inst_30626 = (state_30628[(2)]);
var state_30628__$1 = state_30628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30628__$1,inst_30626);
} else {
if((state_val_30629 === (4))){
var inst_30616 = (state_30628[(7)]);
var inst_30616__$1 = (state_30628[(2)]);
var state_30628__$1 = (function (){var statearr_30631 = state_30628;
(statearr_30631[(7)] = inst_30616__$1);

return statearr_30631;
})();
if(cljs.core.truth_(inst_30616__$1)){
var statearr_30632_30644 = state_30628__$1;
(statearr_30632_30644[(1)] = (5));

} else {
var statearr_30633_30645 = state_30628__$1;
(statearr_30633_30645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (5))){
var inst_30616 = (state_30628[(7)]);
var inst_30618 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30616);
var state_30628__$1 = state_30628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30628__$1,(8),inst_30618);
} else {
if((state_val_30629 === (6))){
var state_30628__$1 = state_30628;
var statearr_30634_30646 = state_30628__$1;
(statearr_30634_30646[(2)] = null);

(statearr_30634_30646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (7))){
var inst_30624 = (state_30628[(2)]);
var state_30628__$1 = state_30628;
var statearr_30635_30647 = state_30628__$1;
(statearr_30635_30647[(2)] = inst_30624);

(statearr_30635_30647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (8))){
var inst_30620 = (state_30628[(2)]);
var state_30628__$1 = (function (){var statearr_30636 = state_30628;
(statearr_30636[(8)] = inst_30620);

return statearr_30636;
})();
var statearr_30637_30648 = state_30628__$1;
(statearr_30637_30648[(2)] = null);

(statearr_30637_30648[(1)] = (2));


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
});})(c__26301__auto___30642,ch))
;
return ((function (switch__26206__auto__,c__26301__auto___30642,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26207__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26207__auto____0 = (function (){
var statearr_30638 = [null,null,null,null,null,null,null,null,null];
(statearr_30638[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26207__auto__);

(statearr_30638[(1)] = (1));

return statearr_30638;
});
var figwheel$client$heads_up_plugin_$_state_machine__26207__auto____1 = (function (state_30628){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_30628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e30639){if((e30639 instanceof Object)){
var ex__26210__auto__ = e30639;
var statearr_30640_30649 = state_30628;
(statearr_30640_30649[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30650 = state_30628;
state_30628 = G__30650;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26207__auto__ = function(state_30628){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26207__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26207__auto____1.call(this,state_30628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26207__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26207__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___30642,ch))
})();
var state__26303__auto__ = (function (){var statearr_30641 = f__26302__auto__.call(null);
(statearr_30641[(6)] = c__26301__auto___30642);

return statearr_30641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___30642,ch))
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
var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__){
return (function (state_30656){
var state_val_30657 = (state_30656[(1)]);
if((state_val_30657 === (1))){
var inst_30651 = cljs.core.async.timeout.call(null,(3000));
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30656__$1,(2),inst_30651);
} else {
if((state_val_30657 === (2))){
var inst_30653 = (state_30656[(2)]);
var inst_30654 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30656__$1 = (function (){var statearr_30658 = state_30656;
(statearr_30658[(7)] = inst_30653);

return statearr_30658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30656__$1,inst_30654);
} else {
return null;
}
}
});})(c__26301__auto__))
;
return ((function (switch__26206__auto__,c__26301__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26207__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26207__auto____0 = (function (){
var statearr_30659 = [null,null,null,null,null,null,null,null];
(statearr_30659[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26207__auto__);

(statearr_30659[(1)] = (1));

return statearr_30659;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26207__auto____1 = (function (state_30656){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_30656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e30660){if((e30660 instanceof Object)){
var ex__26210__auto__ = e30660;
var statearr_30661_30663 = state_30656;
(statearr_30661_30663[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30664 = state_30656;
state_30656 = G__30664;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26207__auto__ = function(state_30656){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26207__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26207__auto____1.call(this,state_30656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26207__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26207__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__))
})();
var state__26303__auto__ = (function (){var statearr_30662 = f__26302__auto__.call(null);
(statearr_30662[(6)] = c__26301__auto__);

return statearr_30662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__))
);

return c__26301__auto__;
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
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30671){
var state_val_30672 = (state_30671[(1)]);
if((state_val_30672 === (1))){
var inst_30665 = cljs.core.async.timeout.call(null,(2000));
var state_30671__$1 = state_30671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30671__$1,(2),inst_30665);
} else {
if((state_val_30672 === (2))){
var inst_30667 = (state_30671[(2)]);
var inst_30668 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30669 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30668);
var state_30671__$1 = (function (){var statearr_30673 = state_30671;
(statearr_30673[(7)] = inst_30667);

return statearr_30673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30671__$1,inst_30669);
} else {
return null;
}
}
});})(c__26301__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__26206__auto__,c__26301__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto____0 = (function (){
var statearr_30674 = [null,null,null,null,null,null,null,null];
(statearr_30674[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto__);

(statearr_30674[(1)] = (1));

return statearr_30674;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto____1 = (function (state_30671){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_30671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e30675){if((e30675 instanceof Object)){
var ex__26210__auto__ = e30675;
var statearr_30676_30678 = state_30671;
(statearr_30676_30678[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30679 = state_30671;
state_30671 = G__30679;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto__ = function(state_30671){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto____1.call(this,state_30671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__,figwheel_version,temp__5720__auto__))
})();
var state__26303__auto__ = (function (){var statearr_30677 = f__26302__auto__.call(null);
(statearr_30677[(6)] = c__26301__auto__);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__,figwheel_version,temp__5720__auto__))
);

return c__26301__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30680){
var map__30681 = p__30680;
var map__30681__$1 = (((((!((map__30681 == null))))?(((((map__30681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30681):map__30681);
var file = cljs.core.get.call(null,map__30681__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30681__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30683 = "";
var G__30683__$1 = (cljs.core.truth_(file)?[G__30683,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30683);
var G__30683__$2 = (cljs.core.truth_(line)?[G__30683__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30683__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30683__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30683__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30684){
var map__30685 = p__30684;
var map__30685__$1 = (((((!((map__30685 == null))))?(((((map__30685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30685):map__30685);
var ed = map__30685__$1;
var exception_data = cljs.core.get.call(null,map__30685__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30685__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30688 = (function (){var G__30687 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30687)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30687;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30688);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30689){
var map__30690 = p__30689;
var map__30690__$1 = (((((!((map__30690 == null))))?(((((map__30690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30690):map__30690);
var w = map__30690__$1;
var message = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
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
var seq__30692 = cljs.core.seq.call(null,plugins);
var chunk__30693 = null;
var count__30694 = (0);
var i__30695 = (0);
while(true){
if((i__30695 < count__30694)){
var vec__30702 = cljs.core._nth.call(null,chunk__30693,i__30695);
var k = cljs.core.nth.call(null,vec__30702,(0),null);
var plugin = cljs.core.nth.call(null,vec__30702,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30708 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30692,chunk__30693,count__30694,i__30695,pl_30708,vec__30702,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30708.call(null,msg_hist);
});})(seq__30692,chunk__30693,count__30694,i__30695,pl_30708,vec__30702,k,plugin))
);
} else {
}


var G__30709 = seq__30692;
var G__30710 = chunk__30693;
var G__30711 = count__30694;
var G__30712 = (i__30695 + (1));
seq__30692 = G__30709;
chunk__30693 = G__30710;
count__30694 = G__30711;
i__30695 = G__30712;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30692);
if(temp__5720__auto__){
var seq__30692__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30692__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30692__$1);
var G__30713 = cljs.core.chunk_rest.call(null,seq__30692__$1);
var G__30714 = c__4550__auto__;
var G__30715 = cljs.core.count.call(null,c__4550__auto__);
var G__30716 = (0);
seq__30692 = G__30713;
chunk__30693 = G__30714;
count__30694 = G__30715;
i__30695 = G__30716;
continue;
} else {
var vec__30705 = cljs.core.first.call(null,seq__30692__$1);
var k = cljs.core.nth.call(null,vec__30705,(0),null);
var plugin = cljs.core.nth.call(null,vec__30705,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30717 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30692,chunk__30693,count__30694,i__30695,pl_30717,vec__30705,k,plugin,seq__30692__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30717.call(null,msg_hist);
});})(seq__30692,chunk__30693,count__30694,i__30695,pl_30717,vec__30705,k,plugin,seq__30692__$1,temp__5720__auto__))
);
} else {
}


var G__30718 = cljs.core.next.call(null,seq__30692__$1);
var G__30719 = null;
var G__30720 = (0);
var G__30721 = (0);
seq__30692 = G__30718;
chunk__30693 = G__30719;
count__30694 = G__30720;
i__30695 = G__30721;
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
var G__30723 = arguments.length;
switch (G__30723) {
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
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

var seq__30724_30729 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30725_30730 = null;
var count__30726_30731 = (0);
var i__30727_30732 = (0);
while(true){
if((i__30727_30732 < count__30726_30731)){
var msg_30733 = cljs.core._nth.call(null,chunk__30725_30730,i__30727_30732);
figwheel.client.socket.handle_incoming_message.call(null,msg_30733);


var G__30734 = seq__30724_30729;
var G__30735 = chunk__30725_30730;
var G__30736 = count__30726_30731;
var G__30737 = (i__30727_30732 + (1));
seq__30724_30729 = G__30734;
chunk__30725_30730 = G__30735;
count__30726_30731 = G__30736;
i__30727_30732 = G__30737;
continue;
} else {
var temp__5720__auto___30738 = cljs.core.seq.call(null,seq__30724_30729);
if(temp__5720__auto___30738){
var seq__30724_30739__$1 = temp__5720__auto___30738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30724_30739__$1)){
var c__4550__auto___30740 = cljs.core.chunk_first.call(null,seq__30724_30739__$1);
var G__30741 = cljs.core.chunk_rest.call(null,seq__30724_30739__$1);
var G__30742 = c__4550__auto___30740;
var G__30743 = cljs.core.count.call(null,c__4550__auto___30740);
var G__30744 = (0);
seq__30724_30729 = G__30741;
chunk__30725_30730 = G__30742;
count__30726_30731 = G__30743;
i__30727_30732 = G__30744;
continue;
} else {
var msg_30745 = cljs.core.first.call(null,seq__30724_30739__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30745);


var G__30746 = cljs.core.next.call(null,seq__30724_30739__$1);
var G__30747 = null;
var G__30748 = (0);
var G__30749 = (0);
seq__30724_30729 = G__30746;
chunk__30725_30730 = G__30747;
count__30726_30731 = G__30748;
i__30727_30732 = G__30749;
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
var args__4736__auto__ = [];
var len__4730__auto___30754 = arguments.length;
var i__4731__auto___30755 = (0);
while(true){
if((i__4731__auto___30755 < len__4730__auto___30754)){
args__4736__auto__.push((arguments[i__4731__auto___30755]));

var G__30756 = (i__4731__auto___30755 + (1));
i__4731__auto___30755 = G__30756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30751){
var map__30752 = p__30751;
var map__30752__$1 = (((((!((map__30752 == null))))?(((((map__30752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30752):map__30752);
var opts = map__30752__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30750){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30750));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30757){if((e30757 instanceof Error)){
var e = e30757;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30757;

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
return (function (p__30758){
var map__30759 = p__30758;
var map__30759__$1 = (((((!((map__30759 == null))))?(((((map__30759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30759):map__30759);
var msg_name = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581970848838
