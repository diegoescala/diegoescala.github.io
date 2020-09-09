// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._header[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._header["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._has_body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._has_body["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._body["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o21519 = temp__5718__auto__;
var temp__5718__auto____$1 = (o21519["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o21520 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o21520["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o21521 = temp__5718__auto____$2;
return (o21521["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o21522 = temp__5718__auto__;
var temp__5718__auto____$1 = (o21522["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o21523 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o21523["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o21524 = temp__5718__auto____$2;
return (o21524["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o21525 = temp__5718__auto__;
var temp__5718__auto____$1 = (o21525["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o21526 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o21526["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o21527 = temp__5718__auto____$2;
return (o21527["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o21528 = temp__5718__auto__;
var temp__5718__auto____$1 = (o21528["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o21529 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o21529["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o21530 = temp__5718__auto____$2;
return (o21530["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o21531 = temp__5718__auto__;
var temp__5718__auto____$1 = (o21531["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o21532 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o21532["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o21533 = temp__5718__auto____$2;
return (o21533["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o21534 = temp__5718__auto__;
var temp__5718__auto____$1 = (o21534["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o21535 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o21535["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o21536 = temp__5718__auto____$2;
return (o21536["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o21537 = temp__5718__auto__;
var temp__5718__auto____$1 = (o21537["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o21538 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o21538["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o21539 = temp__5718__auto____$2;
return (o21539["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21541 = arguments.length;
var i__4731__auto___21542 = (0);
while(true){
if((i__4731__auto___21542 < len__4730__auto___21541)){
args__4736__auto__.push((arguments[i__4731__auto___21542]));

var G__21543 = (i__4731__auto___21542 + (1));
i__4731__auto___21542 = G__21543;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq21540){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21540));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21545 = arguments.length;
var i__4731__auto___21546 = (0);
while(true){
if((i__4731__auto___21546 < len__4730__auto___21545)){
args__4736__auto__.push((arguments[i__4731__auto___21546]));

var G__21547 = (i__4731__auto___21546 + (1));
i__4731__auto___21546 = G__21547;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq21544){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21544));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21549 = arguments.length;
var i__4731__auto___21550 = (0);
while(true){
if((i__4731__auto___21550 < len__4730__auto___21549)){
args__4736__auto__.push((arguments[i__4731__auto___21550]));

var G__21551 = (i__4731__auto___21550 + (1));
i__4731__auto___21550 = G__21551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq21548){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21548));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21553 = arguments.length;
var i__4731__auto___21554 = (0);
while(true){
if((i__4731__auto___21554 < len__4730__auto___21553)){
args__4736__auto__.push((arguments[i__4731__auto___21554]));

var G__21555 = (i__4731__auto___21554 + (1));
i__4731__auto___21554 = G__21555;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq21552){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21552));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21557 = arguments.length;
var i__4731__auto___21558 = (0);
while(true){
if((i__4731__auto___21558 < len__4730__auto___21557)){
args__4736__auto__.push((arguments[i__4731__auto___21558]));

var G__21559 = (i__4731__auto___21558 + (1));
i__4731__auto___21558 = G__21559;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq21556){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21556));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21561 = arguments.length;
var i__4731__auto___21562 = (0);
while(true){
if((i__4731__auto___21562 < len__4730__auto___21561)){
args__4736__auto__.push((arguments[i__4731__auto___21562]));

var G__21563 = (i__4731__auto___21562 + (1));
i__4731__auto___21562 = G__21563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq21560){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21560));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21565 = arguments.length;
var i__4731__auto___21566 = (0);
while(true){
if((i__4731__auto___21566 < len__4730__auto___21565)){
args__4736__auto__.push((arguments[i__4731__auto___21566]));

var G__21567 = (i__4731__auto___21566 + (1));
i__4731__auto___21566 = G__21567;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq21564){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21564));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21575 = arguments.length;
var i__4731__auto___21576 = (0);
while(true){
if((i__4731__auto___21576 < len__4730__auto___21575)){
args__4736__auto__.push((arguments[i__4731__auto___21576]));

var G__21577 = (i__4731__auto___21576 + (1));
i__4731__auto___21576 = G__21577;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__21571){
var vec__21572 = p__21571;
var state_override = cljs.core.nth.call(null,vec__21572,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__21572,state_override){
return (function (p1__21568_SHARP_){
return cljs.core.merge.call(null,p1__21568_SHARP_,state_override);
});})(vec__21572,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq21569){
var G__21570 = cljs.core.first.call(null,seq21569);
var seq21569__$1 = cljs.core.next.call(null,seq21569);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21570,seq21569__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21579 = arguments.length;
var i__4731__auto___21580 = (0);
while(true){
if((i__4731__auto___21580 < len__4730__auto___21579)){
args__4736__auto__.push((arguments[i__4731__auto___21580]));

var G__21581 = (i__4731__auto___21580 + (1));
i__4731__auto___21580 = G__21581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq21578){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21578));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21584 = arguments.length;
var i__4731__auto___21585 = (0);
while(true){
if((i__4731__auto___21585 < len__4730__auto___21584)){
args__4736__auto__.push((arguments[i__4731__auto___21585]));

var G__21586 = (i__4731__auto___21585 + (1));
i__4731__auto___21585 = G__21586;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq21582){
var G__21583 = cljs.core.first.call(null,seq21582);
var seq21582__$1 = cljs.core.next.call(null,seq21582);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21583,seq21582__$1);
});


//# sourceMappingURL=format.js.map?rel=1599595545411
