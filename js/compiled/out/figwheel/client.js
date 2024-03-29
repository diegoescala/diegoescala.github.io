// Compiled by ClojureScript 1.10.773 {}
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
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e32121){if((e32121 instanceof Error)){
var e = e32121;
return "Error: Unable to stringify";
} else {
throw e32121;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__32124 = arguments.length;
switch (G__32124) {
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

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__32122_SHARP_){
if(typeof p1__32122_SHARP_ === 'string'){
return p1__32122_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__32122_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32127 = arguments.length;
var i__4737__auto___32128 = (0);
while(true){
if((i__4737__auto___32128 < len__4736__auto___32127)){
args__4742__auto__.push((arguments[i__4737__auto___32128]));

var G__32129 = (i__4737__auto___32128 + (1));
i__4737__auto___32128 = G__32129;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32126){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32126));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32131 = arguments.length;
var i__4737__auto___32132 = (0);
while(true){
if((i__4737__auto___32132 < len__4736__auto___32131)){
args__4742__auto__.push((arguments[i__4737__auto___32132]));

var G__32133 = (i__4737__auto___32132 + (1));
i__4737__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32130){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32130));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32134){
var map__32135 = p__32134;
var map__32135__$1 = (((((!((map__32135 == null))))?(((((map__32135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32135):map__32135);
var message = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
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
var c__25062__auto___32214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_32186){
var state_val_32187 = (state_32186[(1)]);
if((state_val_32187 === (7))){
var inst_32182 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32188_32215 = state_32186__$1;
(statearr_32188_32215[(2)] = inst_32182);

(statearr_32188_32215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (1))){
var state_32186__$1 = state_32186;
var statearr_32189_32216 = state_32186__$1;
(statearr_32189_32216[(2)] = null);

(statearr_32189_32216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (4))){
var inst_32139 = (state_32186[(7)]);
var inst_32139__$1 = (state_32186[(2)]);
var state_32186__$1 = (function (){var statearr_32190 = state_32186;
(statearr_32190[(7)] = inst_32139__$1);

return statearr_32190;
})();
if(cljs.core.truth_(inst_32139__$1)){
var statearr_32191_32217 = state_32186__$1;
(statearr_32191_32217[(1)] = (5));

} else {
var statearr_32192_32218 = state_32186__$1;
(statearr_32192_32218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (15))){
var inst_32146 = (state_32186[(8)]);
var inst_32161 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32146);
var inst_32162 = cljs.core.first.call(null,inst_32161);
var inst_32163 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32162);
var inst_32164 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32163)].join('');
var inst_32165 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32164);
var state_32186__$1 = state_32186;
var statearr_32193_32219 = state_32186__$1;
(statearr_32193_32219[(2)] = inst_32165);

(statearr_32193_32219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (13))){
var inst_32170 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32194_32220 = state_32186__$1;
(statearr_32194_32220[(2)] = inst_32170);

(statearr_32194_32220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (6))){
var state_32186__$1 = state_32186;
var statearr_32195_32221 = state_32186__$1;
(statearr_32195_32221[(2)] = null);

(statearr_32195_32221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (17))){
var inst_32168 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32196_32222 = state_32186__$1;
(statearr_32196_32222[(2)] = inst_32168);

(statearr_32196_32222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (3))){
var inst_32184 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32186__$1,inst_32184);
} else {
if((state_val_32187 === (12))){
var inst_32145 = (state_32186[(9)]);
var inst_32159 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32145,opts);
var state_32186__$1 = state_32186;
if(inst_32159){
var statearr_32197_32223 = state_32186__$1;
(statearr_32197_32223[(1)] = (15));

} else {
var statearr_32198_32224 = state_32186__$1;
(statearr_32198_32224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (2))){
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32186__$1,(4),ch);
} else {
if((state_val_32187 === (11))){
var inst_32146 = (state_32186[(8)]);
var inst_32151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32152 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32146);
var inst_32153 = cljs.core.async.timeout.call(null,(1000));
var inst_32154 = [inst_32152,inst_32153];
var inst_32155 = (new cljs.core.PersistentVector(null,2,(5),inst_32151,inst_32154,null));
var state_32186__$1 = state_32186;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32186__$1,(14),inst_32155);
} else {
if((state_val_32187 === (9))){
var inst_32146 = (state_32186[(8)]);
var inst_32172 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32173 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32146);
var inst_32174 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32173);
var inst_32175 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32174)].join('');
var inst_32176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32175);
var state_32186__$1 = (function (){var statearr_32199 = state_32186;
(statearr_32199[(10)] = inst_32172);

return statearr_32199;
})();
var statearr_32200_32225 = state_32186__$1;
(statearr_32200_32225[(2)] = inst_32176);

(statearr_32200_32225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (5))){
var inst_32139 = (state_32186[(7)]);
var inst_32141 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32142 = (new cljs.core.PersistentArrayMap(null,2,inst_32141,null));
var inst_32143 = (new cljs.core.PersistentHashSet(null,inst_32142,null));
var inst_32144 = figwheel.client.focus_msgs.call(null,inst_32143,inst_32139);
var inst_32145 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32144);
var inst_32146 = cljs.core.first.call(null,inst_32144);
var inst_32147 = figwheel.client.autoload_QMARK_.call(null);
var state_32186__$1 = (function (){var statearr_32201 = state_32186;
(statearr_32201[(8)] = inst_32146);

(statearr_32201[(9)] = inst_32145);

return statearr_32201;
})();
if(cljs.core.truth_(inst_32147)){
var statearr_32202_32226 = state_32186__$1;
(statearr_32202_32226[(1)] = (8));

} else {
var statearr_32203_32227 = state_32186__$1;
(statearr_32203_32227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (14))){
var inst_32157 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32204_32228 = state_32186__$1;
(statearr_32204_32228[(2)] = inst_32157);

(statearr_32204_32228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (16))){
var state_32186__$1 = state_32186;
var statearr_32205_32229 = state_32186__$1;
(statearr_32205_32229[(2)] = null);

(statearr_32205_32229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (10))){
var inst_32178 = (state_32186[(2)]);
var state_32186__$1 = (function (){var statearr_32206 = state_32186;
(statearr_32206[(11)] = inst_32178);

return statearr_32206;
})();
var statearr_32207_32230 = state_32186__$1;
(statearr_32207_32230[(2)] = null);

(statearr_32207_32230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (8))){
var inst_32145 = (state_32186[(9)]);
var inst_32149 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32145,opts);
var state_32186__$1 = state_32186;
if(cljs.core.truth_(inst_32149)){
var statearr_32208_32231 = state_32186__$1;
(statearr_32208_32231[(1)] = (11));

} else {
var statearr_32209_32232 = state_32186__$1;
(statearr_32209_32232[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24968__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24968__auto____0 = (function (){
var statearr_32210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32210[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24968__auto__);

(statearr_32210[(1)] = (1));

return statearr_32210;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24968__auto____1 = (function (state_32186){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_32186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e32211){if((e32211 instanceof Object)){
var ex__24971__auto__ = e32211;
var statearr_32212_32233 = state_32186;
(statearr_32212_32233[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32234 = state_32186;
state_32186 = G__32234;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24968__auto__ = function(state_32186){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24968__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24968__auto____1.call(this,state_32186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24968__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24968__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_32213 = f__25063__auto__.call(null);
(statearr_32213[(6)] = c__25062__auto___32214);

return statearr_32213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32235_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32235_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32241 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32237 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32238 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32239 = true;
var _STAR_print_fn_STAR__temp_val__32240 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32239);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32240);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32238);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32237);
}}catch (e32236){if((e32236 instanceof Error)){
var e = e32236;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32241], null));
} else {
var e = e32236;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32242){
var map__32243 = p__32242;
var map__32243__$1 = (((((!((map__32243 == null))))?(((((map__32243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32243):map__32243);
var opts = map__32243__$1;
var build_id = cljs.core.get.call(null,map__32243__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__32245){
var vec__32246 = p__32245;
var seq__32247 = cljs.core.seq.call(null,vec__32246);
var first__32248 = cljs.core.first.call(null,seq__32247);
var seq__32247__$1 = cljs.core.next.call(null,seq__32247);
var map__32249 = first__32248;
var map__32249__$1 = (((((!((map__32249 == null))))?(((((map__32249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32249):map__32249);
var msg = map__32249__$1;
var msg_name = cljs.core.get.call(null,map__32249__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32247__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32251){
var vec__32252 = p__32251;
var seq__32253 = cljs.core.seq.call(null,vec__32252);
var first__32254 = cljs.core.first.call(null,seq__32253);
var seq__32253__$1 = cljs.core.next.call(null,seq__32253);
var map__32255 = first__32254;
var map__32255__$1 = (((((!((map__32255 == null))))?(((((map__32255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32255):map__32255);
var msg = map__32255__$1;
var msg_name = cljs.core.get.call(null,map__32255__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32253__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32257){
var map__32258 = p__32257;
var map__32258__$1 = (((((!((map__32258 == null))))?(((((map__32258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32258):map__32258);
var on_compile_warning = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__32260){
var vec__32261 = p__32260;
var seq__32262 = cljs.core.seq.call(null,vec__32261);
var first__32263 = cljs.core.first.call(null,seq__32262);
var seq__32262__$1 = cljs.core.next.call(null,seq__32262);
var map__32264 = first__32263;
var map__32264__$1 = (((((!((map__32264 == null))))?(((((map__32264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32264):map__32264);
var msg = map__32264__$1;
var msg_name = cljs.core.get.call(null,map__32264__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32262__$1;
var pred__32266 = cljs.core._EQ_;
var expr__32267 = msg_name;
if(cljs.core.truth_(pred__32266.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32267))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32266.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32267))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
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
var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_32356){
var state_val_32357 = (state_32356[(1)]);
if((state_val_32357 === (7))){
var inst_32276 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
if(cljs.core.truth_(inst_32276)){
var statearr_32358_32405 = state_32356__$1;
(statearr_32358_32405[(1)] = (8));

} else {
var statearr_32359_32406 = state_32356__$1;
(statearr_32359_32406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (20))){
var inst_32350 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32360_32407 = state_32356__$1;
(statearr_32360_32407[(2)] = inst_32350);

(statearr_32360_32407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (27))){
var inst_32346 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32361_32408 = state_32356__$1;
(statearr_32361_32408[(2)] = inst_32346);

(statearr_32361_32408[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (1))){
var inst_32269 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32356__$1 = state_32356;
if(cljs.core.truth_(inst_32269)){
var statearr_32362_32409 = state_32356__$1;
(statearr_32362_32409[(1)] = (2));

} else {
var statearr_32363_32410 = state_32356__$1;
(statearr_32363_32410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (24))){
var inst_32348 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32364_32411 = state_32356__$1;
(statearr_32364_32411[(2)] = inst_32348);

(statearr_32364_32411[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (4))){
var inst_32354 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32356__$1,inst_32354);
} else {
if((state_val_32357 === (15))){
var inst_32352 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32365_32412 = state_32356__$1;
(statearr_32365_32412[(2)] = inst_32352);

(statearr_32365_32412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (21))){
var inst_32305 = (state_32356[(2)]);
var inst_32306 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32307 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32306);
var state_32356__$1 = (function (){var statearr_32366 = state_32356;
(statearr_32366[(7)] = inst_32305);

return statearr_32366;
})();
var statearr_32367_32413 = state_32356__$1;
(statearr_32367_32413[(2)] = inst_32307);

(statearr_32367_32413[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (31))){
var inst_32335 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32356__$1 = state_32356;
if(inst_32335){
var statearr_32368_32414 = state_32356__$1;
(statearr_32368_32414[(1)] = (34));

} else {
var statearr_32369_32415 = state_32356__$1;
(statearr_32369_32415[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (32))){
var inst_32344 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32370_32416 = state_32356__$1;
(statearr_32370_32416[(2)] = inst_32344);

(statearr_32370_32416[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (33))){
var inst_32331 = (state_32356[(2)]);
var inst_32332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32333 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32332);
var state_32356__$1 = (function (){var statearr_32371 = state_32356;
(statearr_32371[(8)] = inst_32331);

return statearr_32371;
})();
var statearr_32372_32417 = state_32356__$1;
(statearr_32372_32417[(2)] = inst_32333);

(statearr_32372_32417[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (13))){
var inst_32290 = figwheel.client.heads_up.clear.call(null);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(16),inst_32290);
} else {
if((state_val_32357 === (22))){
var inst_32311 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32312 = figwheel.client.heads_up.append_warning_message.call(null,inst_32311);
var state_32356__$1 = state_32356;
var statearr_32373_32418 = state_32356__$1;
(statearr_32373_32418[(2)] = inst_32312);

(statearr_32373_32418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (36))){
var inst_32342 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32374_32419 = state_32356__$1;
(statearr_32374_32419[(2)] = inst_32342);

(statearr_32374_32419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (29))){
var inst_32322 = (state_32356[(2)]);
var inst_32323 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32324 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32323);
var state_32356__$1 = (function (){var statearr_32375 = state_32356;
(statearr_32375[(9)] = inst_32322);

return statearr_32375;
})();
var statearr_32376_32420 = state_32356__$1;
(statearr_32376_32420[(2)] = inst_32324);

(statearr_32376_32420[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (6))){
var inst_32271 = (state_32356[(10)]);
var state_32356__$1 = state_32356;
var statearr_32377_32421 = state_32356__$1;
(statearr_32377_32421[(2)] = inst_32271);

(statearr_32377_32421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (28))){
var inst_32318 = (state_32356[(2)]);
var inst_32319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32320 = figwheel.client.heads_up.display_warning.call(null,inst_32319);
var state_32356__$1 = (function (){var statearr_32378 = state_32356;
(statearr_32378[(11)] = inst_32318);

return statearr_32378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(29),inst_32320);
} else {
if((state_val_32357 === (25))){
var inst_32316 = figwheel.client.heads_up.clear.call(null);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(28),inst_32316);
} else {
if((state_val_32357 === (34))){
var inst_32337 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(37),inst_32337);
} else {
if((state_val_32357 === (17))){
var inst_32296 = (state_32356[(2)]);
var inst_32297 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32298 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32297);
var state_32356__$1 = (function (){var statearr_32379 = state_32356;
(statearr_32379[(12)] = inst_32296);

return statearr_32379;
})();
var statearr_32380_32422 = state_32356__$1;
(statearr_32380_32422[(2)] = inst_32298);

(statearr_32380_32422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (3))){
var inst_32288 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32356__$1 = state_32356;
if(inst_32288){
var statearr_32381_32423 = state_32356__$1;
(statearr_32381_32423[(1)] = (13));

} else {
var statearr_32382_32424 = state_32356__$1;
(statearr_32382_32424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (12))){
var inst_32284 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32383_32425 = state_32356__$1;
(statearr_32383_32425[(2)] = inst_32284);

(statearr_32383_32425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (2))){
var inst_32271 = (state_32356[(10)]);
var inst_32271__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32356__$1 = (function (){var statearr_32384 = state_32356;
(statearr_32384[(10)] = inst_32271__$1);

return statearr_32384;
})();
if(cljs.core.truth_(inst_32271__$1)){
var statearr_32385_32426 = state_32356__$1;
(statearr_32385_32426[(1)] = (5));

} else {
var statearr_32386_32427 = state_32356__$1;
(statearr_32386_32427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (23))){
var inst_32314 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32356__$1 = state_32356;
if(inst_32314){
var statearr_32387_32428 = state_32356__$1;
(statearr_32387_32428[(1)] = (25));

} else {
var statearr_32388_32429 = state_32356__$1;
(statearr_32388_32429[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (35))){
var state_32356__$1 = state_32356;
var statearr_32389_32430 = state_32356__$1;
(statearr_32389_32430[(2)] = null);

(statearr_32389_32430[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (19))){
var inst_32309 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32356__$1 = state_32356;
if(inst_32309){
var statearr_32390_32431 = state_32356__$1;
(statearr_32390_32431[(1)] = (22));

} else {
var statearr_32391_32432 = state_32356__$1;
(statearr_32391_32432[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (11))){
var inst_32280 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32392_32433 = state_32356__$1;
(statearr_32392_32433[(2)] = inst_32280);

(statearr_32392_32433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (9))){
var inst_32282 = figwheel.client.heads_up.clear.call(null);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(12),inst_32282);
} else {
if((state_val_32357 === (5))){
var inst_32273 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32356__$1 = state_32356;
var statearr_32393_32434 = state_32356__$1;
(statearr_32393_32434[(2)] = inst_32273);

(statearr_32393_32434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (14))){
var inst_32300 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32356__$1 = state_32356;
if(inst_32300){
var statearr_32394_32435 = state_32356__$1;
(statearr_32394_32435[(1)] = (18));

} else {
var statearr_32395_32436 = state_32356__$1;
(statearr_32395_32436[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (26))){
var inst_32326 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32356__$1 = state_32356;
if(inst_32326){
var statearr_32396_32437 = state_32356__$1;
(statearr_32396_32437[(1)] = (30));

} else {
var statearr_32397_32438 = state_32356__$1;
(statearr_32397_32438[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (16))){
var inst_32292 = (state_32356[(2)]);
var inst_32293 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32294 = figwheel.client.heads_up.display_exception.call(null,inst_32293);
var state_32356__$1 = (function (){var statearr_32398 = state_32356;
(statearr_32398[(13)] = inst_32292);

return statearr_32398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(17),inst_32294);
} else {
if((state_val_32357 === (30))){
var inst_32328 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32329 = figwheel.client.heads_up.display_warning.call(null,inst_32328);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(33),inst_32329);
} else {
if((state_val_32357 === (10))){
var inst_32286 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32399_32439 = state_32356__$1;
(statearr_32399_32439[(2)] = inst_32286);

(statearr_32399_32439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (18))){
var inst_32302 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32303 = figwheel.client.heads_up.display_exception.call(null,inst_32302);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(21),inst_32303);
} else {
if((state_val_32357 === (37))){
var inst_32339 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32400_32440 = state_32356__$1;
(statearr_32400_32440[(2)] = inst_32339);

(statearr_32400_32440[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (8))){
var inst_32278 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(11),inst_32278);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto____0 = (function (){
var statearr_32401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32401[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto__);

(statearr_32401[(1)] = (1));

return statearr_32401;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto____1 = (function (state_32356){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_32356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e32402){if((e32402 instanceof Object)){
var ex__24971__auto__ = e32402;
var statearr_32403_32441 = state_32356;
(statearr_32403_32441[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32442 = state_32356;
state_32356 = G__32442;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto__ = function(state_32356){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto____1.call(this,state_32356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_32404 = f__25063__auto__.call(null);
(statearr_32404[(6)] = c__25062__auto__);

return statearr_32404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25062__auto___32471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_32457){
var state_val_32458 = (state_32457[(1)]);
if((state_val_32458 === (1))){
var state_32457__$1 = state_32457;
var statearr_32459_32472 = state_32457__$1;
(statearr_32459_32472[(2)] = null);

(statearr_32459_32472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (2))){
var state_32457__$1 = state_32457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32457__$1,(4),ch);
} else {
if((state_val_32458 === (3))){
var inst_32455 = (state_32457[(2)]);
var state_32457__$1 = state_32457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32457__$1,inst_32455);
} else {
if((state_val_32458 === (4))){
var inst_32445 = (state_32457[(7)]);
var inst_32445__$1 = (state_32457[(2)]);
var state_32457__$1 = (function (){var statearr_32460 = state_32457;
(statearr_32460[(7)] = inst_32445__$1);

return statearr_32460;
})();
if(cljs.core.truth_(inst_32445__$1)){
var statearr_32461_32473 = state_32457__$1;
(statearr_32461_32473[(1)] = (5));

} else {
var statearr_32462_32474 = state_32457__$1;
(statearr_32462_32474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (5))){
var inst_32445 = (state_32457[(7)]);
var inst_32447 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32445);
var state_32457__$1 = state_32457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32457__$1,(8),inst_32447);
} else {
if((state_val_32458 === (6))){
var state_32457__$1 = state_32457;
var statearr_32463_32475 = state_32457__$1;
(statearr_32463_32475[(2)] = null);

(statearr_32463_32475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (7))){
var inst_32453 = (state_32457[(2)]);
var state_32457__$1 = state_32457;
var statearr_32464_32476 = state_32457__$1;
(statearr_32464_32476[(2)] = inst_32453);

(statearr_32464_32476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32458 === (8))){
var inst_32449 = (state_32457[(2)]);
var state_32457__$1 = (function (){var statearr_32465 = state_32457;
(statearr_32465[(8)] = inst_32449);

return statearr_32465;
})();
var statearr_32466_32477 = state_32457__$1;
(statearr_32466_32477[(2)] = null);

(statearr_32466_32477[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24968__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24968__auto____0 = (function (){
var statearr_32467 = [null,null,null,null,null,null,null,null,null];
(statearr_32467[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24968__auto__);

(statearr_32467[(1)] = (1));

return statearr_32467;
});
var figwheel$client$heads_up_plugin_$_state_machine__24968__auto____1 = (function (state_32457){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_32457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e32468){if((e32468 instanceof Object)){
var ex__24971__auto__ = e32468;
var statearr_32469_32478 = state_32457;
(statearr_32469_32478[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32479 = state_32457;
state_32457 = G__32479;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24968__auto__ = function(state_32457){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24968__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24968__auto____1.call(this,state_32457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24968__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24968__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_32470 = f__25063__auto__.call(null);
(statearr_32470[(6)] = c__25062__auto___32471);

return statearr_32470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_32485){
var state_val_32486 = (state_32485[(1)]);
if((state_val_32486 === (1))){
var inst_32480 = cljs.core.async.timeout.call(null,(3000));
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32485__$1,(2),inst_32480);
} else {
if((state_val_32486 === (2))){
var inst_32482 = (state_32485[(2)]);
var inst_32483 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32485__$1 = (function (){var statearr_32487 = state_32485;
(statearr_32487[(7)] = inst_32482);

return statearr_32487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32485__$1,inst_32483);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24968__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24968__auto____0 = (function (){
var statearr_32488 = [null,null,null,null,null,null,null,null];
(statearr_32488[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24968__auto__);

(statearr_32488[(1)] = (1));

return statearr_32488;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24968__auto____1 = (function (state_32485){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_32485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e32489){if((e32489 instanceof Object)){
var ex__24971__auto__ = e32489;
var statearr_32490_32492 = state_32485;
(statearr_32490_32492[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32493 = state_32485;
state_32485 = G__32493;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24968__auto__ = function(state_32485){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24968__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24968__auto____1.call(this,state_32485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24968__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24968__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_32491 = f__25063__auto__.call(null);
(statearr_32491[(6)] = c__25062__auto__);

return statearr_32491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
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
var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_32500){
var state_val_32501 = (state_32500[(1)]);
if((state_val_32501 === (1))){
var inst_32494 = cljs.core.async.timeout.call(null,(2000));
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32500__$1,(2),inst_32494);
} else {
if((state_val_32501 === (2))){
var inst_32496 = (state_32500[(2)]);
var inst_32497 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32498 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32497);
var state_32500__$1 = (function (){var statearr_32502 = state_32500;
(statearr_32502[(7)] = inst_32496);

return statearr_32502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32500__$1,inst_32498);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto____0 = (function (){
var statearr_32503 = [null,null,null,null,null,null,null,null];
(statearr_32503[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto__);

(statearr_32503[(1)] = (1));

return statearr_32503;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto____1 = (function (state_32500){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_32500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e32504){if((e32504 instanceof Object)){
var ex__24971__auto__ = e32504;
var statearr_32505_32507 = state_32500;
(statearr_32505_32507[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32508 = state_32500;
state_32500 = G__32508;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto__ = function(state_32500){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto____1.call(this,state_32500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_32506 = f__25063__auto__.call(null);
(statearr_32506[(6)] = c__25062__auto__);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32509){
var map__32510 = p__32509;
var map__32510__$1 = (((((!((map__32510 == null))))?(((((map__32510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32510):map__32510);
var file = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32512 = "";
var G__32512__$1 = (cljs.core.truth_(file)?[G__32512,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32512);
var G__32512__$2 = (cljs.core.truth_(line)?[G__32512__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32512__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__32512__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32512__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32513){
var map__32514 = p__32513;
var map__32514__$1 = (((((!((map__32514 == null))))?(((((map__32514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32514):map__32514);
var ed = map__32514__$1;
var exception_data = cljs.core.get.call(null,map__32514__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32514__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32517 = (function (){var G__32516 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32516)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32516;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32517);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32518){
var map__32519 = p__32518;
var map__32519__$1 = (((((!((map__32519 == null))))?(((((map__32519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32519):map__32519);
var w = map__32519__$1;
var message = cljs.core.get.call(null,map__32519__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
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
var seq__32521 = cljs.core.seq.call(null,plugins);
var chunk__32522 = null;
var count__32523 = (0);
var i__32524 = (0);
while(true){
if((i__32524 < count__32523)){
var vec__32531 = cljs.core._nth.call(null,chunk__32522,i__32524);
var k = cljs.core.nth.call(null,vec__32531,(0),null);
var plugin = cljs.core.nth.call(null,vec__32531,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32537 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32521,chunk__32522,count__32523,i__32524,pl_32537,vec__32531,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32537.call(null,msg_hist);
});})(seq__32521,chunk__32522,count__32523,i__32524,pl_32537,vec__32531,k,plugin))
);
} else {
}


var G__32538 = seq__32521;
var G__32539 = chunk__32522;
var G__32540 = count__32523;
var G__32541 = (i__32524 + (1));
seq__32521 = G__32538;
chunk__32522 = G__32539;
count__32523 = G__32540;
i__32524 = G__32541;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__32521);
if(temp__5720__auto__){
var seq__32521__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32521__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32521__$1);
var G__32542 = cljs.core.chunk_rest.call(null,seq__32521__$1);
var G__32543 = c__4556__auto__;
var G__32544 = cljs.core.count.call(null,c__4556__auto__);
var G__32545 = (0);
seq__32521 = G__32542;
chunk__32522 = G__32543;
count__32523 = G__32544;
i__32524 = G__32545;
continue;
} else {
var vec__32534 = cljs.core.first.call(null,seq__32521__$1);
var k = cljs.core.nth.call(null,vec__32534,(0),null);
var plugin = cljs.core.nth.call(null,vec__32534,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32546 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32521,chunk__32522,count__32523,i__32524,pl_32546,vec__32534,k,plugin,seq__32521__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32546.call(null,msg_hist);
});})(seq__32521,chunk__32522,count__32523,i__32524,pl_32546,vec__32534,k,plugin,seq__32521__$1,temp__5720__auto__))
);
} else {
}


var G__32547 = cljs.core.next.call(null,seq__32521__$1);
var G__32548 = null;
var G__32549 = (0);
var G__32550 = (0);
seq__32521 = G__32547;
chunk__32522 = G__32548;
count__32523 = G__32549;
i__32524 = G__32550;
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
var G__32552 = arguments.length;
switch (G__32552) {
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

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32553_32558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32554_32559 = null;
var count__32555_32560 = (0);
var i__32556_32561 = (0);
while(true){
if((i__32556_32561 < count__32555_32560)){
var msg_32562 = cljs.core._nth.call(null,chunk__32554_32559,i__32556_32561);
figwheel.client.socket.handle_incoming_message.call(null,msg_32562);


var G__32563 = seq__32553_32558;
var G__32564 = chunk__32554_32559;
var G__32565 = count__32555_32560;
var G__32566 = (i__32556_32561 + (1));
seq__32553_32558 = G__32563;
chunk__32554_32559 = G__32564;
count__32555_32560 = G__32565;
i__32556_32561 = G__32566;
continue;
} else {
var temp__5720__auto___32567 = cljs.core.seq.call(null,seq__32553_32558);
if(temp__5720__auto___32567){
var seq__32553_32568__$1 = temp__5720__auto___32567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32553_32568__$1)){
var c__4556__auto___32569 = cljs.core.chunk_first.call(null,seq__32553_32568__$1);
var G__32570 = cljs.core.chunk_rest.call(null,seq__32553_32568__$1);
var G__32571 = c__4556__auto___32569;
var G__32572 = cljs.core.count.call(null,c__4556__auto___32569);
var G__32573 = (0);
seq__32553_32558 = G__32570;
chunk__32554_32559 = G__32571;
count__32555_32560 = G__32572;
i__32556_32561 = G__32573;
continue;
} else {
var msg_32574 = cljs.core.first.call(null,seq__32553_32568__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32574);


var G__32575 = cljs.core.next.call(null,seq__32553_32568__$1);
var G__32576 = null;
var G__32577 = (0);
var G__32578 = (0);
seq__32553_32558 = G__32575;
chunk__32554_32559 = G__32576;
count__32555_32560 = G__32577;
i__32556_32561 = G__32578;
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
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32583 = arguments.length;
var i__4737__auto___32584 = (0);
while(true){
if((i__4737__auto___32584 < len__4736__auto___32583)){
args__4742__auto__.push((arguments[i__4737__auto___32584]));

var G__32585 = (i__4737__auto___32584 + (1));
i__4737__auto___32584 = G__32585;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32580){
var map__32581 = p__32580;
var map__32581__$1 = (((((!((map__32581 == null))))?(((((map__32581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32581):map__32581);
var opts = map__32581__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32579){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32579));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32586){if((e32586 instanceof Error)){
var e = e32586;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32586;

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
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__32587){
var map__32588 = p__32587;
var map__32588__$1 = (((((!((map__32588 == null))))?(((((map__32588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32588):map__32588);
var msg_name = cljs.core.get.call(null,map__32588__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1696052576847
