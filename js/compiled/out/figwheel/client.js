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
}catch (e30296){if((e30296 instanceof Error)){
var e = e30296;
return "Error: Unable to stringify";
} else {
throw e30296;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30299 = arguments.length;
switch (G__30299) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30297_SHARP_){
if(typeof p1__30297_SHARP_ === 'string'){
return p1__30297_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30297_SHARP_);
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
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30301));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30306 = arguments.length;
var i__4731__auto___30307 = (0);
while(true){
if((i__4731__auto___30307 < len__4730__auto___30306)){
args__4736__auto__.push((arguments[i__4731__auto___30307]));

var G__30308 = (i__4731__auto___30307 + (1));
i__4731__auto___30307 = G__30308;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30305){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30305));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30309){
var map__30310 = p__30309;
var map__30310__$1 = (((((!((map__30310 == null))))?(((((map__30310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30310):map__30310);
var message = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26305__auto___30389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___30389,ch){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___30389,ch){
return (function (state_30361){
var state_val_30362 = (state_30361[(1)]);
if((state_val_30362 === (7))){
var inst_30357 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30363_30390 = state_30361__$1;
(statearr_30363_30390[(2)] = inst_30357);

(statearr_30363_30390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (1))){
var state_30361__$1 = state_30361;
var statearr_30364_30391 = state_30361__$1;
(statearr_30364_30391[(2)] = null);

(statearr_30364_30391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (4))){
var inst_30314 = (state_30361[(7)]);
var inst_30314__$1 = (state_30361[(2)]);
var state_30361__$1 = (function (){var statearr_30365 = state_30361;
(statearr_30365[(7)] = inst_30314__$1);

return statearr_30365;
})();
if(cljs.core.truth_(inst_30314__$1)){
var statearr_30366_30392 = state_30361__$1;
(statearr_30366_30392[(1)] = (5));

} else {
var statearr_30367_30393 = state_30361__$1;
(statearr_30367_30393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (15))){
var inst_30321 = (state_30361[(8)]);
var inst_30336 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30321);
var inst_30337 = cljs.core.first.call(null,inst_30336);
var inst_30338 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30337);
var inst_30339 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30338)].join('');
var inst_30340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30339);
var state_30361__$1 = state_30361;
var statearr_30368_30394 = state_30361__$1;
(statearr_30368_30394[(2)] = inst_30340);

(statearr_30368_30394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (13))){
var inst_30345 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30369_30395 = state_30361__$1;
(statearr_30369_30395[(2)] = inst_30345);

(statearr_30369_30395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (6))){
var state_30361__$1 = state_30361;
var statearr_30370_30396 = state_30361__$1;
(statearr_30370_30396[(2)] = null);

(statearr_30370_30396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (17))){
var inst_30343 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30371_30397 = state_30361__$1;
(statearr_30371_30397[(2)] = inst_30343);

(statearr_30371_30397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (3))){
var inst_30359 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30361__$1,inst_30359);
} else {
if((state_val_30362 === (12))){
var inst_30320 = (state_30361[(9)]);
var inst_30334 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30320,opts);
var state_30361__$1 = state_30361;
if(inst_30334){
var statearr_30372_30398 = state_30361__$1;
(statearr_30372_30398[(1)] = (15));

} else {
var statearr_30373_30399 = state_30361__$1;
(statearr_30373_30399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (2))){
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30361__$1,(4),ch);
} else {
if((state_val_30362 === (11))){
var inst_30321 = (state_30361[(8)]);
var inst_30326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30327 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30321);
var inst_30328 = cljs.core.async.timeout.call(null,(1000));
var inst_30329 = [inst_30327,inst_30328];
var inst_30330 = (new cljs.core.PersistentVector(null,2,(5),inst_30326,inst_30329,null));
var state_30361__$1 = state_30361;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30361__$1,(14),inst_30330);
} else {
if((state_val_30362 === (9))){
var inst_30321 = (state_30361[(8)]);
var inst_30347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30348 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30321);
var inst_30349 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30348);
var inst_30350 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30349)].join('');
var inst_30351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30350);
var state_30361__$1 = (function (){var statearr_30374 = state_30361;
(statearr_30374[(10)] = inst_30347);

return statearr_30374;
})();
var statearr_30375_30400 = state_30361__$1;
(statearr_30375_30400[(2)] = inst_30351);

(statearr_30375_30400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (5))){
var inst_30314 = (state_30361[(7)]);
var inst_30316 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30317 = (new cljs.core.PersistentArrayMap(null,2,inst_30316,null));
var inst_30318 = (new cljs.core.PersistentHashSet(null,inst_30317,null));
var inst_30319 = figwheel.client.focus_msgs.call(null,inst_30318,inst_30314);
var inst_30320 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30319);
var inst_30321 = cljs.core.first.call(null,inst_30319);
var inst_30322 = figwheel.client.autoload_QMARK_.call(null);
var state_30361__$1 = (function (){var statearr_30376 = state_30361;
(statearr_30376[(8)] = inst_30321);

(statearr_30376[(9)] = inst_30320);

return statearr_30376;
})();
if(cljs.core.truth_(inst_30322)){
var statearr_30377_30401 = state_30361__$1;
(statearr_30377_30401[(1)] = (8));

} else {
var statearr_30378_30402 = state_30361__$1;
(statearr_30378_30402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (14))){
var inst_30332 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30379_30403 = state_30361__$1;
(statearr_30379_30403[(2)] = inst_30332);

(statearr_30379_30403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (16))){
var state_30361__$1 = state_30361;
var statearr_30380_30404 = state_30361__$1;
(statearr_30380_30404[(2)] = null);

(statearr_30380_30404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (10))){
var inst_30353 = (state_30361[(2)]);
var state_30361__$1 = (function (){var statearr_30381 = state_30361;
(statearr_30381[(11)] = inst_30353);

return statearr_30381;
})();
var statearr_30382_30405 = state_30361__$1;
(statearr_30382_30405[(2)] = null);

(statearr_30382_30405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (8))){
var inst_30320 = (state_30361[(9)]);
var inst_30324 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30320,opts);
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30324)){
var statearr_30383_30406 = state_30361__$1;
(statearr_30383_30406[(1)] = (11));

} else {
var statearr_30384_30407 = state_30361__$1;
(statearr_30384_30407[(1)] = (12));

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
});})(c__26305__auto___30389,ch))
;
return ((function (switch__26210__auto__,c__26305__auto___30389,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26211__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26211__auto____0 = (function (){
var statearr_30385 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30385[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26211__auto__);

(statearr_30385[(1)] = (1));

return statearr_30385;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26211__auto____1 = (function (state_30361){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_30361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e30386){if((e30386 instanceof Object)){
var ex__26214__auto__ = e30386;
var statearr_30387_30408 = state_30361;
(statearr_30387_30408[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30409 = state_30361;
state_30361 = G__30409;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26211__auto__ = function(state_30361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26211__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26211__auto____1.call(this,state_30361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26211__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26211__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___30389,ch))
})();
var state__26307__auto__ = (function (){var statearr_30388 = f__26306__auto__.call(null);
(statearr_30388[(6)] = c__26305__auto___30389);

return statearr_30388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___30389,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30410_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30410_SHARP_));
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
var base_path_30416 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30416){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30412 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30413 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30414 = true;
var _STAR_print_fn_STAR__temp_val__30415 = ((function (_STAR_print_newline_STAR__orig_val__30412,_STAR_print_fn_STAR__orig_val__30413,_STAR_print_newline_STAR__temp_val__30414,sb,base_path_30416){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30412,_STAR_print_fn_STAR__orig_val__30413,_STAR_print_newline_STAR__temp_val__30414,sb,base_path_30416))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30414;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30415;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30413;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30412;
}}catch (e30411){if((e30411 instanceof Error)){
var e = e30411;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30416], null));
} else {
var e = e30411;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30416))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30417){
var map__30418 = p__30417;
var map__30418__$1 = (((((!((map__30418 == null))))?(((((map__30418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30418):map__30418);
var opts = map__30418__$1;
var build_id = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30418,map__30418__$1,opts,build_id){
return (function (p__30420){
var vec__30421 = p__30420;
var seq__30422 = cljs.core.seq.call(null,vec__30421);
var first__30423 = cljs.core.first.call(null,seq__30422);
var seq__30422__$1 = cljs.core.next.call(null,seq__30422);
var map__30424 = first__30423;
var map__30424__$1 = (((((!((map__30424 == null))))?(((((map__30424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30424):map__30424);
var msg = map__30424__$1;
var msg_name = cljs.core.get.call(null,map__30424__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30422__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30421,seq__30422,first__30423,seq__30422__$1,map__30424,map__30424__$1,msg,msg_name,_,map__30418,map__30418__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30421,seq__30422,first__30423,seq__30422__$1,map__30424,map__30424__$1,msg,msg_name,_,map__30418,map__30418__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30418,map__30418__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30426){
var vec__30427 = p__30426;
var seq__30428 = cljs.core.seq.call(null,vec__30427);
var first__30429 = cljs.core.first.call(null,seq__30428);
var seq__30428__$1 = cljs.core.next.call(null,seq__30428);
var map__30430 = first__30429;
var map__30430__$1 = (((((!((map__30430 == null))))?(((((map__30430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30430):map__30430);
var msg = map__30430__$1;
var msg_name = cljs.core.get.call(null,map__30430__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30428__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30432){
var map__30433 = p__30432;
var map__30433__$1 = (((((!((map__30433 == null))))?(((((map__30433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30433):map__30433);
var on_compile_warning = cljs.core.get.call(null,map__30433__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30433__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30433,map__30433__$1,on_compile_warning,on_compile_fail){
return (function (p__30435){
var vec__30436 = p__30435;
var seq__30437 = cljs.core.seq.call(null,vec__30436);
var first__30438 = cljs.core.first.call(null,seq__30437);
var seq__30437__$1 = cljs.core.next.call(null,seq__30437);
var map__30439 = first__30438;
var map__30439__$1 = (((((!((map__30439 == null))))?(((((map__30439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30439):map__30439);
var msg = map__30439__$1;
var msg_name = cljs.core.get.call(null,map__30439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30437__$1;
var pred__30441 = cljs.core._EQ_;
var expr__30442 = msg_name;
if(cljs.core.truth_(pred__30441.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30442))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30441.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30442))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30433,map__30433__$1,on_compile_warning,on_compile_fail))
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
var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__,msg_hist,msg_names,msg){
return (function (state_30531){
var state_val_30532 = (state_30531[(1)]);
if((state_val_30532 === (7))){
var inst_30451 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30451)){
var statearr_30533_30580 = state_30531__$1;
(statearr_30533_30580[(1)] = (8));

} else {
var statearr_30534_30581 = state_30531__$1;
(statearr_30534_30581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (20))){
var inst_30525 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30535_30582 = state_30531__$1;
(statearr_30535_30582[(2)] = inst_30525);

(statearr_30535_30582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (27))){
var inst_30521 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30536_30583 = state_30531__$1;
(statearr_30536_30583[(2)] = inst_30521);

(statearr_30536_30583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (1))){
var inst_30444 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30444)){
var statearr_30537_30584 = state_30531__$1;
(statearr_30537_30584[(1)] = (2));

} else {
var statearr_30538_30585 = state_30531__$1;
(statearr_30538_30585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (24))){
var inst_30523 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30539_30586 = state_30531__$1;
(statearr_30539_30586[(2)] = inst_30523);

(statearr_30539_30586[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (4))){
var inst_30529 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30531__$1,inst_30529);
} else {
if((state_val_30532 === (15))){
var inst_30527 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30540_30587 = state_30531__$1;
(statearr_30540_30587[(2)] = inst_30527);

(statearr_30540_30587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (21))){
var inst_30480 = (state_30531[(2)]);
var inst_30481 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30482 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30481);
var state_30531__$1 = (function (){var statearr_30541 = state_30531;
(statearr_30541[(7)] = inst_30480);

return statearr_30541;
})();
var statearr_30542_30588 = state_30531__$1;
(statearr_30542_30588[(2)] = inst_30482);

(statearr_30542_30588[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (31))){
var inst_30510 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30531__$1 = state_30531;
if(inst_30510){
var statearr_30543_30589 = state_30531__$1;
(statearr_30543_30589[(1)] = (34));

} else {
var statearr_30544_30590 = state_30531__$1;
(statearr_30544_30590[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (32))){
var inst_30519 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30545_30591 = state_30531__$1;
(statearr_30545_30591[(2)] = inst_30519);

(statearr_30545_30591[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (33))){
var inst_30506 = (state_30531[(2)]);
var inst_30507 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30508 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30507);
var state_30531__$1 = (function (){var statearr_30546 = state_30531;
(statearr_30546[(8)] = inst_30506);

return statearr_30546;
})();
var statearr_30547_30592 = state_30531__$1;
(statearr_30547_30592[(2)] = inst_30508);

(statearr_30547_30592[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (13))){
var inst_30465 = figwheel.client.heads_up.clear.call(null);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(16),inst_30465);
} else {
if((state_val_30532 === (22))){
var inst_30486 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30487 = figwheel.client.heads_up.append_warning_message.call(null,inst_30486);
var state_30531__$1 = state_30531;
var statearr_30548_30593 = state_30531__$1;
(statearr_30548_30593[(2)] = inst_30487);

(statearr_30548_30593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (36))){
var inst_30517 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30549_30594 = state_30531__$1;
(statearr_30549_30594[(2)] = inst_30517);

(statearr_30549_30594[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (29))){
var inst_30497 = (state_30531[(2)]);
var inst_30498 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30499 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30498);
var state_30531__$1 = (function (){var statearr_30550 = state_30531;
(statearr_30550[(9)] = inst_30497);

return statearr_30550;
})();
var statearr_30551_30595 = state_30531__$1;
(statearr_30551_30595[(2)] = inst_30499);

(statearr_30551_30595[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (6))){
var inst_30446 = (state_30531[(10)]);
var state_30531__$1 = state_30531;
var statearr_30552_30596 = state_30531__$1;
(statearr_30552_30596[(2)] = inst_30446);

(statearr_30552_30596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (28))){
var inst_30493 = (state_30531[(2)]);
var inst_30494 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30495 = figwheel.client.heads_up.display_warning.call(null,inst_30494);
var state_30531__$1 = (function (){var statearr_30553 = state_30531;
(statearr_30553[(11)] = inst_30493);

return statearr_30553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(29),inst_30495);
} else {
if((state_val_30532 === (25))){
var inst_30491 = figwheel.client.heads_up.clear.call(null);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(28),inst_30491);
} else {
if((state_val_30532 === (34))){
var inst_30512 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(37),inst_30512);
} else {
if((state_val_30532 === (17))){
var inst_30471 = (state_30531[(2)]);
var inst_30472 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30473 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30472);
var state_30531__$1 = (function (){var statearr_30554 = state_30531;
(statearr_30554[(12)] = inst_30471);

return statearr_30554;
})();
var statearr_30555_30597 = state_30531__$1;
(statearr_30555_30597[(2)] = inst_30473);

(statearr_30555_30597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (3))){
var inst_30463 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30531__$1 = state_30531;
if(inst_30463){
var statearr_30556_30598 = state_30531__$1;
(statearr_30556_30598[(1)] = (13));

} else {
var statearr_30557_30599 = state_30531__$1;
(statearr_30557_30599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (12))){
var inst_30459 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30558_30600 = state_30531__$1;
(statearr_30558_30600[(2)] = inst_30459);

(statearr_30558_30600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (2))){
var inst_30446 = (state_30531[(10)]);
var inst_30446__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30531__$1 = (function (){var statearr_30559 = state_30531;
(statearr_30559[(10)] = inst_30446__$1);

return statearr_30559;
})();
if(cljs.core.truth_(inst_30446__$1)){
var statearr_30560_30601 = state_30531__$1;
(statearr_30560_30601[(1)] = (5));

} else {
var statearr_30561_30602 = state_30531__$1;
(statearr_30561_30602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (23))){
var inst_30489 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30531__$1 = state_30531;
if(inst_30489){
var statearr_30562_30603 = state_30531__$1;
(statearr_30562_30603[(1)] = (25));

} else {
var statearr_30563_30604 = state_30531__$1;
(statearr_30563_30604[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (35))){
var state_30531__$1 = state_30531;
var statearr_30564_30605 = state_30531__$1;
(statearr_30564_30605[(2)] = null);

(statearr_30564_30605[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (19))){
var inst_30484 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30531__$1 = state_30531;
if(inst_30484){
var statearr_30565_30606 = state_30531__$1;
(statearr_30565_30606[(1)] = (22));

} else {
var statearr_30566_30607 = state_30531__$1;
(statearr_30566_30607[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (11))){
var inst_30455 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30567_30608 = state_30531__$1;
(statearr_30567_30608[(2)] = inst_30455);

(statearr_30567_30608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (9))){
var inst_30457 = figwheel.client.heads_up.clear.call(null);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(12),inst_30457);
} else {
if((state_val_30532 === (5))){
var inst_30448 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30531__$1 = state_30531;
var statearr_30568_30609 = state_30531__$1;
(statearr_30568_30609[(2)] = inst_30448);

(statearr_30568_30609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (14))){
var inst_30475 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30531__$1 = state_30531;
if(inst_30475){
var statearr_30569_30610 = state_30531__$1;
(statearr_30569_30610[(1)] = (18));

} else {
var statearr_30570_30611 = state_30531__$1;
(statearr_30570_30611[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (26))){
var inst_30501 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30531__$1 = state_30531;
if(inst_30501){
var statearr_30571_30612 = state_30531__$1;
(statearr_30571_30612[(1)] = (30));

} else {
var statearr_30572_30613 = state_30531__$1;
(statearr_30572_30613[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (16))){
var inst_30467 = (state_30531[(2)]);
var inst_30468 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30469 = figwheel.client.heads_up.display_exception.call(null,inst_30468);
var state_30531__$1 = (function (){var statearr_30573 = state_30531;
(statearr_30573[(13)] = inst_30467);

return statearr_30573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(17),inst_30469);
} else {
if((state_val_30532 === (30))){
var inst_30503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30504 = figwheel.client.heads_up.display_warning.call(null,inst_30503);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(33),inst_30504);
} else {
if((state_val_30532 === (10))){
var inst_30461 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30574_30614 = state_30531__$1;
(statearr_30574_30614[(2)] = inst_30461);

(statearr_30574_30614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (18))){
var inst_30477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30478 = figwheel.client.heads_up.display_exception.call(null,inst_30477);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(21),inst_30478);
} else {
if((state_val_30532 === (37))){
var inst_30514 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30575_30615 = state_30531__$1;
(statearr_30575_30615[(2)] = inst_30514);

(statearr_30575_30615[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (8))){
var inst_30453 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(11),inst_30453);
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
});})(c__26305__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26210__auto__,c__26305__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto____0 = (function (){
var statearr_30576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30576[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto__);

(statearr_30576[(1)] = (1));

return statearr_30576;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto____1 = (function (state_30531){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_30531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e30577){if((e30577 instanceof Object)){
var ex__26214__auto__ = e30577;
var statearr_30578_30616 = state_30531;
(statearr_30578_30616[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30617 = state_30531;
state_30531 = G__30617;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto__ = function(state_30531){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto____1.call(this,state_30531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__,msg_hist,msg_names,msg))
})();
var state__26307__auto__ = (function (){var statearr_30579 = f__26306__auto__.call(null);
(statearr_30579[(6)] = c__26305__auto__);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__,msg_hist,msg_names,msg))
);

return c__26305__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26305__auto___30646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___30646,ch){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___30646,ch){
return (function (state_30632){
var state_val_30633 = (state_30632[(1)]);
if((state_val_30633 === (1))){
var state_30632__$1 = state_30632;
var statearr_30634_30647 = state_30632__$1;
(statearr_30634_30647[(2)] = null);

(statearr_30634_30647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (2))){
var state_30632__$1 = state_30632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30632__$1,(4),ch);
} else {
if((state_val_30633 === (3))){
var inst_30630 = (state_30632[(2)]);
var state_30632__$1 = state_30632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30632__$1,inst_30630);
} else {
if((state_val_30633 === (4))){
var inst_30620 = (state_30632[(7)]);
var inst_30620__$1 = (state_30632[(2)]);
var state_30632__$1 = (function (){var statearr_30635 = state_30632;
(statearr_30635[(7)] = inst_30620__$1);

return statearr_30635;
})();
if(cljs.core.truth_(inst_30620__$1)){
var statearr_30636_30648 = state_30632__$1;
(statearr_30636_30648[(1)] = (5));

} else {
var statearr_30637_30649 = state_30632__$1;
(statearr_30637_30649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (5))){
var inst_30620 = (state_30632[(7)]);
var inst_30622 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30620);
var state_30632__$1 = state_30632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30632__$1,(8),inst_30622);
} else {
if((state_val_30633 === (6))){
var state_30632__$1 = state_30632;
var statearr_30638_30650 = state_30632__$1;
(statearr_30638_30650[(2)] = null);

(statearr_30638_30650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (7))){
var inst_30628 = (state_30632[(2)]);
var state_30632__$1 = state_30632;
var statearr_30639_30651 = state_30632__$1;
(statearr_30639_30651[(2)] = inst_30628);

(statearr_30639_30651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (8))){
var inst_30624 = (state_30632[(2)]);
var state_30632__$1 = (function (){var statearr_30640 = state_30632;
(statearr_30640[(8)] = inst_30624);

return statearr_30640;
})();
var statearr_30641_30652 = state_30632__$1;
(statearr_30641_30652[(2)] = null);

(statearr_30641_30652[(1)] = (2));


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
});})(c__26305__auto___30646,ch))
;
return ((function (switch__26210__auto__,c__26305__auto___30646,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26211__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26211__auto____0 = (function (){
var statearr_30642 = [null,null,null,null,null,null,null,null,null];
(statearr_30642[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26211__auto__);

(statearr_30642[(1)] = (1));

return statearr_30642;
});
var figwheel$client$heads_up_plugin_$_state_machine__26211__auto____1 = (function (state_30632){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_30632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e30643){if((e30643 instanceof Object)){
var ex__26214__auto__ = e30643;
var statearr_30644_30653 = state_30632;
(statearr_30644_30653[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30654 = state_30632;
state_30632 = G__30654;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26211__auto__ = function(state_30632){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26211__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26211__auto____1.call(this,state_30632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26211__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26211__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___30646,ch))
})();
var state__26307__auto__ = (function (){var statearr_30645 = f__26306__auto__.call(null);
(statearr_30645[(6)] = c__26305__auto___30646);

return statearr_30645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___30646,ch))
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
var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__){
return (function (state_30660){
var state_val_30661 = (state_30660[(1)]);
if((state_val_30661 === (1))){
var inst_30655 = cljs.core.async.timeout.call(null,(3000));
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30660__$1,(2),inst_30655);
} else {
if((state_val_30661 === (2))){
var inst_30657 = (state_30660[(2)]);
var inst_30658 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30660__$1 = (function (){var statearr_30662 = state_30660;
(statearr_30662[(7)] = inst_30657);

return statearr_30662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30660__$1,inst_30658);
} else {
return null;
}
}
});})(c__26305__auto__))
;
return ((function (switch__26210__auto__,c__26305__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26211__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26211__auto____0 = (function (){
var statearr_30663 = [null,null,null,null,null,null,null,null];
(statearr_30663[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26211__auto__);

(statearr_30663[(1)] = (1));

return statearr_30663;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26211__auto____1 = (function (state_30660){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_30660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e30664){if((e30664 instanceof Object)){
var ex__26214__auto__ = e30664;
var statearr_30665_30667 = state_30660;
(statearr_30665_30667[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30668 = state_30660;
state_30660 = G__30668;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26211__auto__ = function(state_30660){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26211__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26211__auto____1.call(this,state_30660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26211__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26211__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__))
})();
var state__26307__auto__ = (function (){var statearr_30666 = f__26306__auto__.call(null);
(statearr_30666[(6)] = c__26305__auto__);

return statearr_30666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__))
);

return c__26305__auto__;
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
var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30675){
var state_val_30676 = (state_30675[(1)]);
if((state_val_30676 === (1))){
var inst_30669 = cljs.core.async.timeout.call(null,(2000));
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30675__$1,(2),inst_30669);
} else {
if((state_val_30676 === (2))){
var inst_30671 = (state_30675[(2)]);
var inst_30672 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30673 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30672);
var state_30675__$1 = (function (){var statearr_30677 = state_30675;
(statearr_30677[(7)] = inst_30671);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30675__$1,inst_30673);
} else {
return null;
}
}
});})(c__26305__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__26210__auto__,c__26305__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto____0 = (function (){
var statearr_30678 = [null,null,null,null,null,null,null,null];
(statearr_30678[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto__);

(statearr_30678[(1)] = (1));

return statearr_30678;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto____1 = (function (state_30675){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_30675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e30679){if((e30679 instanceof Object)){
var ex__26214__auto__ = e30679;
var statearr_30680_30682 = state_30675;
(statearr_30680_30682[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30683 = state_30675;
state_30675 = G__30683;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto__ = function(state_30675){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto____1.call(this,state_30675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__,figwheel_version,temp__5720__auto__))
})();
var state__26307__auto__ = (function (){var statearr_30681 = f__26306__auto__.call(null);
(statearr_30681[(6)] = c__26305__auto__);

return statearr_30681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__,figwheel_version,temp__5720__auto__))
);

return c__26305__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30684){
var map__30685 = p__30684;
var map__30685__$1 = (((((!((map__30685 == null))))?(((((map__30685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30685):map__30685);
var file = cljs.core.get.call(null,map__30685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30685__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30685__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30687 = "";
var G__30687__$1 = (cljs.core.truth_(file)?[G__30687,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30687);
var G__30687__$2 = (cljs.core.truth_(line)?[G__30687__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30687__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30687__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30687__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30688){
var map__30689 = p__30688;
var map__30689__$1 = (((((!((map__30689 == null))))?(((((map__30689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30689):map__30689);
var ed = map__30689__$1;
var exception_data = cljs.core.get.call(null,map__30689__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30689__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30692 = (function (){var G__30691 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30691)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30691;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30692);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30693){
var map__30694 = p__30693;
var map__30694__$1 = (((((!((map__30694 == null))))?(((((map__30694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30694):map__30694);
var w = map__30694__$1;
var message = cljs.core.get.call(null,map__30694__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30696 = cljs.core.seq.call(null,plugins);
var chunk__30697 = null;
var count__30698 = (0);
var i__30699 = (0);
while(true){
if((i__30699 < count__30698)){
var vec__30706 = cljs.core._nth.call(null,chunk__30697,i__30699);
var k = cljs.core.nth.call(null,vec__30706,(0),null);
var plugin = cljs.core.nth.call(null,vec__30706,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30712 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30696,chunk__30697,count__30698,i__30699,pl_30712,vec__30706,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30712.call(null,msg_hist);
});})(seq__30696,chunk__30697,count__30698,i__30699,pl_30712,vec__30706,k,plugin))
);
} else {
}


var G__30713 = seq__30696;
var G__30714 = chunk__30697;
var G__30715 = count__30698;
var G__30716 = (i__30699 + (1));
seq__30696 = G__30713;
chunk__30697 = G__30714;
count__30698 = G__30715;
i__30699 = G__30716;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30696);
if(temp__5720__auto__){
var seq__30696__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30696__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30696__$1);
var G__30717 = cljs.core.chunk_rest.call(null,seq__30696__$1);
var G__30718 = c__4550__auto__;
var G__30719 = cljs.core.count.call(null,c__4550__auto__);
var G__30720 = (0);
seq__30696 = G__30717;
chunk__30697 = G__30718;
count__30698 = G__30719;
i__30699 = G__30720;
continue;
} else {
var vec__30709 = cljs.core.first.call(null,seq__30696__$1);
var k = cljs.core.nth.call(null,vec__30709,(0),null);
var plugin = cljs.core.nth.call(null,vec__30709,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30721 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30696,chunk__30697,count__30698,i__30699,pl_30721,vec__30709,k,plugin,seq__30696__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30721.call(null,msg_hist);
});})(seq__30696,chunk__30697,count__30698,i__30699,pl_30721,vec__30709,k,plugin,seq__30696__$1,temp__5720__auto__))
);
} else {
}


var G__30722 = cljs.core.next.call(null,seq__30696__$1);
var G__30723 = null;
var G__30724 = (0);
var G__30725 = (0);
seq__30696 = G__30722;
chunk__30697 = G__30723;
count__30698 = G__30724;
i__30699 = G__30725;
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
var G__30727 = arguments.length;
switch (G__30727) {
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

var seq__30728_30733 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30729_30734 = null;
var count__30730_30735 = (0);
var i__30731_30736 = (0);
while(true){
if((i__30731_30736 < count__30730_30735)){
var msg_30737 = cljs.core._nth.call(null,chunk__30729_30734,i__30731_30736);
figwheel.client.socket.handle_incoming_message.call(null,msg_30737);


var G__30738 = seq__30728_30733;
var G__30739 = chunk__30729_30734;
var G__30740 = count__30730_30735;
var G__30741 = (i__30731_30736 + (1));
seq__30728_30733 = G__30738;
chunk__30729_30734 = G__30739;
count__30730_30735 = G__30740;
i__30731_30736 = G__30741;
continue;
} else {
var temp__5720__auto___30742 = cljs.core.seq.call(null,seq__30728_30733);
if(temp__5720__auto___30742){
var seq__30728_30743__$1 = temp__5720__auto___30742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30728_30743__$1)){
var c__4550__auto___30744 = cljs.core.chunk_first.call(null,seq__30728_30743__$1);
var G__30745 = cljs.core.chunk_rest.call(null,seq__30728_30743__$1);
var G__30746 = c__4550__auto___30744;
var G__30747 = cljs.core.count.call(null,c__4550__auto___30744);
var G__30748 = (0);
seq__30728_30733 = G__30745;
chunk__30729_30734 = G__30746;
count__30730_30735 = G__30747;
i__30731_30736 = G__30748;
continue;
} else {
var msg_30749 = cljs.core.first.call(null,seq__30728_30743__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30749);


var G__30750 = cljs.core.next.call(null,seq__30728_30743__$1);
var G__30751 = null;
var G__30752 = (0);
var G__30753 = (0);
seq__30728_30733 = G__30750;
chunk__30729_30734 = G__30751;
count__30730_30735 = G__30752;
i__30731_30736 = G__30753;
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
var len__4730__auto___30758 = arguments.length;
var i__4731__auto___30759 = (0);
while(true){
if((i__4731__auto___30759 < len__4730__auto___30758)){
args__4736__auto__.push((arguments[i__4731__auto___30759]));

var G__30760 = (i__4731__auto___30759 + (1));
i__4731__auto___30759 = G__30760;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30755){
var map__30756 = p__30755;
var map__30756__$1 = (((((!((map__30756 == null))))?(((((map__30756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30756):map__30756);
var opts = map__30756__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30754){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30754));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30761){if((e30761 instanceof Error)){
var e = e30761;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30761;

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
return (function (p__30762){
var map__30763 = p__30762;
var map__30763__$1 = (((((!((map__30763 == null))))?(((((map__30763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30763):map__30763);
var msg_name = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1599595555767
