// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x23909_23910 = value;
x23909_23910.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x23912_23913 = value;
x23912_23913.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x23915_23916 = value;
x23915_23916.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23923 = arguments.length;
var i__4731__auto___23924 = (0);
while(true){
if((i__4731__auto___23924 < len__4730__auto___23923)){
args__4736__auto__.push((arguments[i__4731__auto___23924]));

var G__23925 = (i__4731__auto___23924 + (1));
i__4731__auto___23924 = G__23925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__23919_23926 = cljs.core.seq.call(null,items);
var chunk__23920_23927 = null;
var count__23921_23928 = (0);
var i__23922_23929 = (0);
while(true){
if((i__23922_23929 < count__23921_23928)){
var item_23930 = cljs.core._nth.call(null,chunk__23920_23927,i__23922_23929);
if((!((item_23930 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_23930)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_23930)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_23930));
}
} else {
}


var G__23931 = seq__23919_23926;
var G__23932 = chunk__23920_23927;
var G__23933 = count__23921_23928;
var G__23934 = (i__23922_23929 + (1));
seq__23919_23926 = G__23931;
chunk__23920_23927 = G__23932;
count__23921_23928 = G__23933;
i__23922_23929 = G__23934;
continue;
} else {
var temp__5720__auto___23935 = cljs.core.seq.call(null,seq__23919_23926);
if(temp__5720__auto___23935){
var seq__23919_23936__$1 = temp__5720__auto___23935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23919_23936__$1)){
var c__4550__auto___23937 = cljs.core.chunk_first.call(null,seq__23919_23936__$1);
var G__23938 = cljs.core.chunk_rest.call(null,seq__23919_23936__$1);
var G__23939 = c__4550__auto___23937;
var G__23940 = cljs.core.count.call(null,c__4550__auto___23937);
var G__23941 = (0);
seq__23919_23926 = G__23938;
chunk__23920_23927 = G__23939;
count__23921_23928 = G__23940;
i__23922_23929 = G__23941;
continue;
} else {
var item_23942 = cljs.core.first.call(null,seq__23919_23936__$1);
if((!((item_23942 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_23942)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_23942)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_23942));
}
} else {
}


var G__23943 = cljs.core.next.call(null,seq__23919_23936__$1);
var G__23944 = null;
var G__23945 = (0);
var G__23946 = (0);
seq__23919_23926 = G__23943;
chunk__23920_23927 = G__23944;
count__23921_23928 = G__23945;
i__23922_23929 = G__23946;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq23918){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23918));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23954 = arguments.length;
var i__4731__auto___23955 = (0);
while(true){
if((i__4731__auto___23955 < len__4730__auto___23954)){
args__4736__auto__.push((arguments[i__4731__auto___23955]));

var G__23956 = (i__4731__auto___23955 + (1));
i__4731__auto___23955 = G__23956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__23950_23957 = cljs.core.seq.call(null,children);
var chunk__23951_23958 = null;
var count__23952_23959 = (0);
var i__23953_23960 = (0);
while(true){
if((i__23953_23960 < count__23952_23959)){
var child_23961 = cljs.core._nth.call(null,chunk__23951_23958,i__23953_23960);
if((!((child_23961 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_23961)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_23961))));
} else {
var temp__5718__auto___23962 = devtools.formatters.helpers.pref.call(null,child_23961);
if(cljs.core.truth_(temp__5718__auto___23962)){
var child_value_23963 = temp__5718__auto___23962;
template.push(child_value_23963);
} else {
}
}
} else {
}


var G__23964 = seq__23950_23957;
var G__23965 = chunk__23951_23958;
var G__23966 = count__23952_23959;
var G__23967 = (i__23953_23960 + (1));
seq__23950_23957 = G__23964;
chunk__23951_23958 = G__23965;
count__23952_23959 = G__23966;
i__23953_23960 = G__23967;
continue;
} else {
var temp__5720__auto___23968 = cljs.core.seq.call(null,seq__23950_23957);
if(temp__5720__auto___23968){
var seq__23950_23969__$1 = temp__5720__auto___23968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23950_23969__$1)){
var c__4550__auto___23970 = cljs.core.chunk_first.call(null,seq__23950_23969__$1);
var G__23971 = cljs.core.chunk_rest.call(null,seq__23950_23969__$1);
var G__23972 = c__4550__auto___23970;
var G__23973 = cljs.core.count.call(null,c__4550__auto___23970);
var G__23974 = (0);
seq__23950_23957 = G__23971;
chunk__23951_23958 = G__23972;
count__23952_23959 = G__23973;
i__23953_23960 = G__23974;
continue;
} else {
var child_23975 = cljs.core.first.call(null,seq__23950_23969__$1);
if((!((child_23975 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_23975)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_23975))));
} else {
var temp__5718__auto___23976 = devtools.formatters.helpers.pref.call(null,child_23975);
if(cljs.core.truth_(temp__5718__auto___23976)){
var child_value_23977 = temp__5718__auto___23976;
template.push(child_value_23977);
} else {
}
}
} else {
}


var G__23978 = cljs.core.next.call(null,seq__23950_23969__$1);
var G__23979 = null;
var G__23980 = (0);
var G__23981 = (0);
seq__23950_23957 = G__23978;
chunk__23951_23958 = G__23979;
count__23952_23959 = G__23980;
i__23953_23960 = G__23981;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq23947){
var G__23948 = cljs.core.first.call(null,seq23947);
var seq23947__$1 = cljs.core.next.call(null,seq23947);
var G__23949 = cljs.core.first.call(null,seq23947__$1);
var seq23947__$2 = cljs.core.next.call(null,seq23947__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23948,G__23949,seq23947__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23984 = arguments.length;
var i__4731__auto___23985 = (0);
while(true){
if((i__4731__auto___23985 < len__4730__auto___23984)){
args__4736__auto__.push((arguments[i__4731__auto___23985]));

var G__23986 = (i__4731__auto___23985 + (1));
i__4731__auto___23985 = G__23986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq23982){
var G__23983 = cljs.core.first.call(null,seq23982);
var seq23982__$1 = cljs.core.next.call(null,seq23982);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23983,seq23982__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23989 = arguments.length;
var i__4731__auto___23990 = (0);
while(true){
if((i__4731__auto___23990 < len__4730__auto___23989)){
args__4736__auto__.push((arguments[i__4731__auto___23990]));

var G__23991 = (i__4731__auto___23990 + (1));
i__4731__auto___23990 = G__23991;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq23987){
var G__23988 = cljs.core.first.call(null,seq23987);
var seq23987__$1 = cljs.core.next.call(null,seq23987);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23988,seq23987__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__23993 = arguments.length;
switch (G__23993) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj23995 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4131__auto__ = start_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()});
return obj23995;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24003 = arguments.length;
var i__4731__auto___24004 = (0);
while(true){
if((i__4731__auto___24004 < len__4730__auto___24003)){
args__4736__auto__.push((arguments[i__4731__auto___24004]));

var G__24005 = (i__4731__auto___24004 + (1));
i__4731__auto___24004 = G__24005;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__23999){
var vec__24000 = p__23999;
var state_override_fn = cljs.core.nth.call(null,vec__24000,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq23997){
var G__23998 = cljs.core.first.call(null,seq23997);
var seq23997__$1 = cljs.core.next.call(null,seq23997);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23998,seq23997__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__24006 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__24007 = (1);
cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__24007;

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__24006;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__24008 = name;
switch (G__24008) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__24010 = tag;
var html_tag = cljs.core.nth.call(null,vec__24010,(0),null);
var style = cljs.core.nth.call(null,vec__24010,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__24013 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__24014 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__24014;

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__24013;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__24015 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__24016 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__24017 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__24018 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__24017;

devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__24018;

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__24016;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__24015;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__24019 = initial_value;
var G__24020 = value.call(null);
initial_value = G__24019;
value = G__24020;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__24021 = initial_value;
var G__24022 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__24021;
value = G__24022;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__24023 = initial_value;
var G__24024 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__24023;
value = G__24024;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1599595548767
