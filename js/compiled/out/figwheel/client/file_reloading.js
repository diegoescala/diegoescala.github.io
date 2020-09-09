// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28419_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28419_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28420 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28421 = null;
var count__28422 = (0);
var i__28423 = (0);
while(true){
if((i__28423 < count__28422)){
var n = cljs.core._nth.call(null,chunk__28421,i__28423);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28424 = seq__28420;
var G__28425 = chunk__28421;
var G__28426 = count__28422;
var G__28427 = (i__28423 + (1));
seq__28420 = G__28424;
chunk__28421 = G__28425;
count__28422 = G__28426;
i__28423 = G__28427;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28420);
if(temp__5720__auto__){
var seq__28420__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28420__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28420__$1);
var G__28428 = cljs.core.chunk_rest.call(null,seq__28420__$1);
var G__28429 = c__4550__auto__;
var G__28430 = cljs.core.count.call(null,c__4550__auto__);
var G__28431 = (0);
seq__28420 = G__28428;
chunk__28421 = G__28429;
count__28422 = G__28430;
i__28423 = G__28431;
continue;
} else {
var n = cljs.core.first.call(null,seq__28420__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28432 = cljs.core.next.call(null,seq__28420__$1);
var G__28433 = null;
var G__28434 = (0);
var G__28435 = (0);
seq__28420 = G__28432;
chunk__28421 = G__28433;
count__28422 = G__28434;
i__28423 = G__28435;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28436){
var vec__28437 = p__28436;
var _ = cljs.core.nth.call(null,vec__28437,(0),null);
var v = cljs.core.nth.call(null,vec__28437,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28440){
var vec__28441 = p__28440;
var k = cljs.core.nth.call(null,vec__28441,(0),null);
var v = cljs.core.nth.call(null,vec__28441,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28453_28461 = cljs.core.seq.call(null,deps);
var chunk__28454_28462 = null;
var count__28455_28463 = (0);
var i__28456_28464 = (0);
while(true){
if((i__28456_28464 < count__28455_28463)){
var dep_28465 = cljs.core._nth.call(null,chunk__28454_28462,i__28456_28464);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28465;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28465));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28465,(depth + (1)),state);
} else {
}


var G__28466 = seq__28453_28461;
var G__28467 = chunk__28454_28462;
var G__28468 = count__28455_28463;
var G__28469 = (i__28456_28464 + (1));
seq__28453_28461 = G__28466;
chunk__28454_28462 = G__28467;
count__28455_28463 = G__28468;
i__28456_28464 = G__28469;
continue;
} else {
var temp__5720__auto___28470 = cljs.core.seq.call(null,seq__28453_28461);
if(temp__5720__auto___28470){
var seq__28453_28471__$1 = temp__5720__auto___28470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28453_28471__$1)){
var c__4550__auto___28472 = cljs.core.chunk_first.call(null,seq__28453_28471__$1);
var G__28473 = cljs.core.chunk_rest.call(null,seq__28453_28471__$1);
var G__28474 = c__4550__auto___28472;
var G__28475 = cljs.core.count.call(null,c__4550__auto___28472);
var G__28476 = (0);
seq__28453_28461 = G__28473;
chunk__28454_28462 = G__28474;
count__28455_28463 = G__28475;
i__28456_28464 = G__28476;
continue;
} else {
var dep_28477 = cljs.core.first.call(null,seq__28453_28471__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28477;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28477));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28477,(depth + (1)),state);
} else {
}


var G__28478 = cljs.core.next.call(null,seq__28453_28471__$1);
var G__28479 = null;
var G__28480 = (0);
var G__28481 = (0);
seq__28453_28461 = G__28478;
chunk__28454_28462 = G__28479;
count__28455_28463 = G__28480;
i__28456_28464 = G__28481;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28457){
var vec__28458 = p__28457;
var seq__28459 = cljs.core.seq.call(null,vec__28458);
var first__28460 = cljs.core.first.call(null,seq__28459);
var seq__28459__$1 = cljs.core.next.call(null,seq__28459);
var x = first__28460;
var xs = seq__28459__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28458,seq__28459,first__28460,seq__28459__$1,x,xs,get_deps__$1){
return (function (p1__28444_SHARP_){
return clojure.set.difference.call(null,p1__28444_SHARP_,x);
});})(vec__28458,seq__28459,first__28460,seq__28459__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28482 = cljs.core.seq.call(null,provides);
var chunk__28483 = null;
var count__28484 = (0);
var i__28485 = (0);
while(true){
if((i__28485 < count__28484)){
var prov = cljs.core._nth.call(null,chunk__28483,i__28485);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28494_28502 = cljs.core.seq.call(null,requires);
var chunk__28495_28503 = null;
var count__28496_28504 = (0);
var i__28497_28505 = (0);
while(true){
if((i__28497_28505 < count__28496_28504)){
var req_28506 = cljs.core._nth.call(null,chunk__28495_28503,i__28497_28505);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28506,prov);


var G__28507 = seq__28494_28502;
var G__28508 = chunk__28495_28503;
var G__28509 = count__28496_28504;
var G__28510 = (i__28497_28505 + (1));
seq__28494_28502 = G__28507;
chunk__28495_28503 = G__28508;
count__28496_28504 = G__28509;
i__28497_28505 = G__28510;
continue;
} else {
var temp__5720__auto___28511 = cljs.core.seq.call(null,seq__28494_28502);
if(temp__5720__auto___28511){
var seq__28494_28512__$1 = temp__5720__auto___28511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28494_28512__$1)){
var c__4550__auto___28513 = cljs.core.chunk_first.call(null,seq__28494_28512__$1);
var G__28514 = cljs.core.chunk_rest.call(null,seq__28494_28512__$1);
var G__28515 = c__4550__auto___28513;
var G__28516 = cljs.core.count.call(null,c__4550__auto___28513);
var G__28517 = (0);
seq__28494_28502 = G__28514;
chunk__28495_28503 = G__28515;
count__28496_28504 = G__28516;
i__28497_28505 = G__28517;
continue;
} else {
var req_28518 = cljs.core.first.call(null,seq__28494_28512__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28518,prov);


var G__28519 = cljs.core.next.call(null,seq__28494_28512__$1);
var G__28520 = null;
var G__28521 = (0);
var G__28522 = (0);
seq__28494_28502 = G__28519;
chunk__28495_28503 = G__28520;
count__28496_28504 = G__28521;
i__28497_28505 = G__28522;
continue;
}
} else {
}
}
break;
}


var G__28523 = seq__28482;
var G__28524 = chunk__28483;
var G__28525 = count__28484;
var G__28526 = (i__28485 + (1));
seq__28482 = G__28523;
chunk__28483 = G__28524;
count__28484 = G__28525;
i__28485 = G__28526;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28482);
if(temp__5720__auto__){
var seq__28482__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28482__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28482__$1);
var G__28527 = cljs.core.chunk_rest.call(null,seq__28482__$1);
var G__28528 = c__4550__auto__;
var G__28529 = cljs.core.count.call(null,c__4550__auto__);
var G__28530 = (0);
seq__28482 = G__28527;
chunk__28483 = G__28528;
count__28484 = G__28529;
i__28485 = G__28530;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28482__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28498_28531 = cljs.core.seq.call(null,requires);
var chunk__28499_28532 = null;
var count__28500_28533 = (0);
var i__28501_28534 = (0);
while(true){
if((i__28501_28534 < count__28500_28533)){
var req_28535 = cljs.core._nth.call(null,chunk__28499_28532,i__28501_28534);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28535,prov);


var G__28536 = seq__28498_28531;
var G__28537 = chunk__28499_28532;
var G__28538 = count__28500_28533;
var G__28539 = (i__28501_28534 + (1));
seq__28498_28531 = G__28536;
chunk__28499_28532 = G__28537;
count__28500_28533 = G__28538;
i__28501_28534 = G__28539;
continue;
} else {
var temp__5720__auto___28540__$1 = cljs.core.seq.call(null,seq__28498_28531);
if(temp__5720__auto___28540__$1){
var seq__28498_28541__$1 = temp__5720__auto___28540__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28498_28541__$1)){
var c__4550__auto___28542 = cljs.core.chunk_first.call(null,seq__28498_28541__$1);
var G__28543 = cljs.core.chunk_rest.call(null,seq__28498_28541__$1);
var G__28544 = c__4550__auto___28542;
var G__28545 = cljs.core.count.call(null,c__4550__auto___28542);
var G__28546 = (0);
seq__28498_28531 = G__28543;
chunk__28499_28532 = G__28544;
count__28500_28533 = G__28545;
i__28501_28534 = G__28546;
continue;
} else {
var req_28547 = cljs.core.first.call(null,seq__28498_28541__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28547,prov);


var G__28548 = cljs.core.next.call(null,seq__28498_28541__$1);
var G__28549 = null;
var G__28550 = (0);
var G__28551 = (0);
seq__28498_28531 = G__28548;
chunk__28499_28532 = G__28549;
count__28500_28533 = G__28550;
i__28501_28534 = G__28551;
continue;
}
} else {
}
}
break;
}


var G__28552 = cljs.core.next.call(null,seq__28482__$1);
var G__28553 = null;
var G__28554 = (0);
var G__28555 = (0);
seq__28482 = G__28552;
chunk__28483 = G__28553;
count__28484 = G__28554;
i__28485 = G__28555;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28556_28560 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28557_28561 = null;
var count__28558_28562 = (0);
var i__28559_28563 = (0);
while(true){
if((i__28559_28563 < count__28558_28562)){
var ns_28564 = cljs.core._nth.call(null,chunk__28557_28561,i__28559_28563);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28564);


var G__28565 = seq__28556_28560;
var G__28566 = chunk__28557_28561;
var G__28567 = count__28558_28562;
var G__28568 = (i__28559_28563 + (1));
seq__28556_28560 = G__28565;
chunk__28557_28561 = G__28566;
count__28558_28562 = G__28567;
i__28559_28563 = G__28568;
continue;
} else {
var temp__5720__auto___28569 = cljs.core.seq.call(null,seq__28556_28560);
if(temp__5720__auto___28569){
var seq__28556_28570__$1 = temp__5720__auto___28569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28556_28570__$1)){
var c__4550__auto___28571 = cljs.core.chunk_first.call(null,seq__28556_28570__$1);
var G__28572 = cljs.core.chunk_rest.call(null,seq__28556_28570__$1);
var G__28573 = c__4550__auto___28571;
var G__28574 = cljs.core.count.call(null,c__4550__auto___28571);
var G__28575 = (0);
seq__28556_28560 = G__28572;
chunk__28557_28561 = G__28573;
count__28558_28562 = G__28574;
i__28559_28563 = G__28575;
continue;
} else {
var ns_28576 = cljs.core.first.call(null,seq__28556_28570__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28576);


var G__28577 = cljs.core.next.call(null,seq__28556_28570__$1);
var G__28578 = null;
var G__28579 = (0);
var G__28580 = (0);
seq__28556_28560 = G__28577;
chunk__28557_28561 = G__28578;
count__28558_28562 = G__28579;
i__28559_28563 = G__28580;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28581__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28582__i = 0, G__28582__a = new Array(arguments.length -  0);
while (G__28582__i < G__28582__a.length) {G__28582__a[G__28582__i] = arguments[G__28582__i + 0]; ++G__28582__i;}
  args = new cljs.core.IndexedSeq(G__28582__a,0,null);
} 
return G__28581__delegate.call(this,args);};
G__28581.cljs$lang$maxFixedArity = 0;
G__28581.cljs$lang$applyTo = (function (arglist__28583){
var args = cljs.core.seq(arglist__28583);
return G__28581__delegate(args);
});
G__28581.cljs$core$IFn$_invoke$arity$variadic = G__28581__delegate;
return G__28581;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28584_SHARP_,p2__28585_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28584_SHARP_)),p2__28585_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28586_SHARP_,p2__28587_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28586_SHARP_),p2__28587_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28588 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28588.addCallback(((function (G__28588){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28588))
);

G__28588.addErrback(((function (G__28588){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28588))
);

return G__28588;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28589){if((e28589 instanceof Error)){
var e = e28589;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28589;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28590){if((e28590 instanceof Error)){
var e = e28590;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28590;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28591 = cljs.core._EQ_;
var expr__28592 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28591.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28592))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28591.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28592))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28591.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28592))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28591,expr__28592){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28591,expr__28592))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28594,callback){
var map__28595 = p__28594;
var map__28595__$1 = (((((!((map__28595 == null))))?(((((map__28595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28595):map__28595);
var file_msg = map__28595__$1;
var request_url = cljs.core.get.call(null,map__28595__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28595,map__28595__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28595,map__28595__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__){
return (function (state_28633){
var state_val_28634 = (state_28633[(1)]);
if((state_val_28634 === (7))){
var inst_28629 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28635_28661 = state_28633__$1;
(statearr_28635_28661[(2)] = inst_28629);

(statearr_28635_28661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (1))){
var state_28633__$1 = state_28633;
var statearr_28636_28662 = state_28633__$1;
(statearr_28636_28662[(2)] = null);

(statearr_28636_28662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (4))){
var inst_28599 = (state_28633[(7)]);
var inst_28599__$1 = (state_28633[(2)]);
var state_28633__$1 = (function (){var statearr_28637 = state_28633;
(statearr_28637[(7)] = inst_28599__$1);

return statearr_28637;
})();
if(cljs.core.truth_(inst_28599__$1)){
var statearr_28638_28663 = state_28633__$1;
(statearr_28638_28663[(1)] = (5));

} else {
var statearr_28639_28664 = state_28633__$1;
(statearr_28639_28664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (15))){
var inst_28614 = (state_28633[(8)]);
var inst_28612 = (state_28633[(9)]);
var inst_28616 = inst_28614.call(null,inst_28612);
var state_28633__$1 = state_28633;
var statearr_28640_28665 = state_28633__$1;
(statearr_28640_28665[(2)] = inst_28616);

(statearr_28640_28665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (13))){
var inst_28623 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28641_28666 = state_28633__$1;
(statearr_28641_28666[(2)] = inst_28623);

(statearr_28641_28666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (6))){
var state_28633__$1 = state_28633;
var statearr_28642_28667 = state_28633__$1;
(statearr_28642_28667[(2)] = null);

(statearr_28642_28667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (17))){
var inst_28620 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28643_28668 = state_28633__$1;
(statearr_28643_28668[(2)] = inst_28620);

(statearr_28643_28668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (3))){
var inst_28631 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28633__$1,inst_28631);
} else {
if((state_val_28634 === (12))){
var state_28633__$1 = state_28633;
var statearr_28644_28669 = state_28633__$1;
(statearr_28644_28669[(2)] = null);

(statearr_28644_28669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (2))){
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28633__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28634 === (11))){
var inst_28604 = (state_28633[(10)]);
var inst_28610 = figwheel.client.file_reloading.blocking_load.call(null,inst_28604);
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28633__$1,(14),inst_28610);
} else {
if((state_val_28634 === (9))){
var inst_28604 = (state_28633[(10)]);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28604)){
var statearr_28645_28670 = state_28633__$1;
(statearr_28645_28670[(1)] = (11));

} else {
var statearr_28646_28671 = state_28633__$1;
(statearr_28646_28671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (5))){
var inst_28605 = (state_28633[(11)]);
var inst_28599 = (state_28633[(7)]);
var inst_28604 = cljs.core.nth.call(null,inst_28599,(0),null);
var inst_28605__$1 = cljs.core.nth.call(null,inst_28599,(1),null);
var state_28633__$1 = (function (){var statearr_28647 = state_28633;
(statearr_28647[(10)] = inst_28604);

(statearr_28647[(11)] = inst_28605__$1);

return statearr_28647;
})();
if(cljs.core.truth_(inst_28605__$1)){
var statearr_28648_28672 = state_28633__$1;
(statearr_28648_28672[(1)] = (8));

} else {
var statearr_28649_28673 = state_28633__$1;
(statearr_28649_28673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (14))){
var inst_28604 = (state_28633[(10)]);
var inst_28614 = (state_28633[(8)]);
var inst_28612 = (state_28633[(2)]);
var inst_28613 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28614__$1 = cljs.core.get.call(null,inst_28613,inst_28604);
var state_28633__$1 = (function (){var statearr_28650 = state_28633;
(statearr_28650[(8)] = inst_28614__$1);

(statearr_28650[(9)] = inst_28612);

return statearr_28650;
})();
if(cljs.core.truth_(inst_28614__$1)){
var statearr_28651_28674 = state_28633__$1;
(statearr_28651_28674[(1)] = (15));

} else {
var statearr_28652_28675 = state_28633__$1;
(statearr_28652_28675[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (16))){
var inst_28612 = (state_28633[(9)]);
var inst_28618 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28612);
var state_28633__$1 = state_28633;
var statearr_28653_28676 = state_28633__$1;
(statearr_28653_28676[(2)] = inst_28618);

(statearr_28653_28676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (10))){
var inst_28625 = (state_28633[(2)]);
var state_28633__$1 = (function (){var statearr_28654 = state_28633;
(statearr_28654[(12)] = inst_28625);

return statearr_28654;
})();
var statearr_28655_28677 = state_28633__$1;
(statearr_28655_28677[(2)] = null);

(statearr_28655_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (8))){
var inst_28605 = (state_28633[(11)]);
var inst_28607 = eval(inst_28605);
var state_28633__$1 = state_28633;
var statearr_28656_28678 = state_28633__$1;
(statearr_28656_28678[(2)] = inst_28607);

(statearr_28656_28678[(1)] = (10));


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
});})(c__26305__auto__))
;
return ((function (switch__26210__auto__,c__26305__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26211__auto__ = null;
var figwheel$client$file_reloading$state_machine__26211__auto____0 = (function (){
var statearr_28657 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28657[(0)] = figwheel$client$file_reloading$state_machine__26211__auto__);

(statearr_28657[(1)] = (1));

return statearr_28657;
});
var figwheel$client$file_reloading$state_machine__26211__auto____1 = (function (state_28633){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_28633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e28658){if((e28658 instanceof Object)){
var ex__26214__auto__ = e28658;
var statearr_28659_28679 = state_28633;
(statearr_28659_28679[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28680 = state_28633;
state_28633 = G__28680;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26211__auto__ = function(state_28633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26211__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26211__auto____1.call(this,state_28633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26211__auto____0;
figwheel$client$file_reloading$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26211__auto____1;
return figwheel$client$file_reloading$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__))
})();
var state__26307__auto__ = (function (){var statearr_28660 = f__26306__auto__.call(null);
(statearr_28660[(6)] = c__26305__auto__);

return statearr_28660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__))
);

return c__26305__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28682 = arguments.length;
switch (G__28682) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28684,callback){
var map__28685 = p__28684;
var map__28685__$1 = (((((!((map__28685 == null))))?(((((map__28685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28685):map__28685);
var file_msg = map__28685__$1;
var namespace = cljs.core.get.call(null,map__28685__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28685,map__28685__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28685,map__28685__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28687){
var map__28688 = p__28687;
var map__28688__$1 = (((((!((map__28688 == null))))?(((((map__28688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28688):map__28688);
var file_msg = map__28688__$1;
var namespace = cljs.core.get.call(null,map__28688__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28690){
var map__28691 = p__28690;
var map__28691__$1 = (((((!((map__28691 == null))))?(((((map__28691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28691):map__28691);
var file_msg = map__28691__$1;
var namespace = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28693,callback){
var map__28694 = p__28693;
var map__28694__$1 = (((((!((map__28694 == null))))?(((((map__28694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28694):map__28694);
var file_msg = map__28694__$1;
var request_url = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26305__auto___28744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___28744,out){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___28744,out){
return (function (state_28729){
var state_val_28730 = (state_28729[(1)]);
if((state_val_28730 === (1))){
var inst_28703 = cljs.core.seq.call(null,files);
var inst_28704 = cljs.core.first.call(null,inst_28703);
var inst_28705 = cljs.core.next.call(null,inst_28703);
var inst_28706 = files;
var state_28729__$1 = (function (){var statearr_28731 = state_28729;
(statearr_28731[(7)] = inst_28704);

(statearr_28731[(8)] = inst_28706);

(statearr_28731[(9)] = inst_28705);

return statearr_28731;
})();
var statearr_28732_28745 = state_28729__$1;
(statearr_28732_28745[(2)] = null);

(statearr_28732_28745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (2))){
var inst_28706 = (state_28729[(8)]);
var inst_28712 = (state_28729[(10)]);
var inst_28711 = cljs.core.seq.call(null,inst_28706);
var inst_28712__$1 = cljs.core.first.call(null,inst_28711);
var inst_28713 = cljs.core.next.call(null,inst_28711);
var inst_28714 = (inst_28712__$1 == null);
var inst_28715 = cljs.core.not.call(null,inst_28714);
var state_28729__$1 = (function (){var statearr_28733 = state_28729;
(statearr_28733[(11)] = inst_28713);

(statearr_28733[(10)] = inst_28712__$1);

return statearr_28733;
})();
if(inst_28715){
var statearr_28734_28746 = state_28729__$1;
(statearr_28734_28746[(1)] = (4));

} else {
var statearr_28735_28747 = state_28729__$1;
(statearr_28735_28747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (3))){
var inst_28727 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28729__$1,inst_28727);
} else {
if((state_val_28730 === (4))){
var inst_28712 = (state_28729[(10)]);
var inst_28717 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28712);
var state_28729__$1 = state_28729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28729__$1,(7),inst_28717);
} else {
if((state_val_28730 === (5))){
var inst_28723 = cljs.core.async.close_BANG_.call(null,out);
var state_28729__$1 = state_28729;
var statearr_28736_28748 = state_28729__$1;
(statearr_28736_28748[(2)] = inst_28723);

(statearr_28736_28748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (6))){
var inst_28725 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
var statearr_28737_28749 = state_28729__$1;
(statearr_28737_28749[(2)] = inst_28725);

(statearr_28737_28749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (7))){
var inst_28713 = (state_28729[(11)]);
var inst_28719 = (state_28729[(2)]);
var inst_28720 = cljs.core.async.put_BANG_.call(null,out,inst_28719);
var inst_28706 = inst_28713;
var state_28729__$1 = (function (){var statearr_28738 = state_28729;
(statearr_28738[(8)] = inst_28706);

(statearr_28738[(12)] = inst_28720);

return statearr_28738;
})();
var statearr_28739_28750 = state_28729__$1;
(statearr_28739_28750[(2)] = null);

(statearr_28739_28750[(1)] = (2));


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
});})(c__26305__auto___28744,out))
;
return ((function (switch__26210__auto__,c__26305__auto___28744,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto____0 = (function (){
var statearr_28740 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28740[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto__);

(statearr_28740[(1)] = (1));

return statearr_28740;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto____1 = (function (state_28729){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_28729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e28741){if((e28741 instanceof Object)){
var ex__26214__auto__ = e28741;
var statearr_28742_28751 = state_28729;
(statearr_28742_28751[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28752 = state_28729;
state_28729 = G__28752;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto__ = function(state_28729){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto____1.call(this,state_28729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___28744,out))
})();
var state__26307__auto__ = (function (){var statearr_28743 = f__26306__auto__.call(null);
(statearr_28743[(6)] = c__26305__auto___28744);

return statearr_28743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___28744,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28753,opts){
var map__28754 = p__28753;
var map__28754__$1 = (((((!((map__28754 == null))))?(((((map__28754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28754):map__28754);
var eval_body = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28756){var e = e28756;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28757_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28757_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28758){
var vec__28759 = p__28758;
var k = cljs.core.nth.call(null,vec__28759,(0),null);
var v = cljs.core.nth.call(null,vec__28759,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28762){
var vec__28763 = p__28762;
var k = cljs.core.nth.call(null,vec__28763,(0),null);
var v = cljs.core.nth.call(null,vec__28763,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28769,p__28770){
var map__28771 = p__28769;
var map__28771__$1 = (((((!((map__28771 == null))))?(((((map__28771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28771):map__28771);
var opts = map__28771__$1;
var before_jsload = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28772 = p__28770;
var map__28772__$1 = (((((!((map__28772 == null))))?(((((map__28772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28772):map__28772);
var msg = map__28772__$1;
var files = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28926){
var state_val_28927 = (state_28926[(1)]);
if((state_val_28927 === (7))){
var inst_28787 = (state_28926[(7)]);
var inst_28786 = (state_28926[(8)]);
var inst_28788 = (state_28926[(9)]);
var inst_28789 = (state_28926[(10)]);
var inst_28794 = cljs.core._nth.call(null,inst_28787,inst_28789);
var inst_28795 = figwheel.client.file_reloading.eval_body.call(null,inst_28794,opts);
var inst_28796 = (inst_28789 + (1));
var tmp28928 = inst_28787;
var tmp28929 = inst_28786;
var tmp28930 = inst_28788;
var inst_28786__$1 = tmp28929;
var inst_28787__$1 = tmp28928;
var inst_28788__$1 = tmp28930;
var inst_28789__$1 = inst_28796;
var state_28926__$1 = (function (){var statearr_28931 = state_28926;
(statearr_28931[(7)] = inst_28787__$1);

(statearr_28931[(8)] = inst_28786__$1);

(statearr_28931[(11)] = inst_28795);

(statearr_28931[(9)] = inst_28788__$1);

(statearr_28931[(10)] = inst_28789__$1);

return statearr_28931;
})();
var statearr_28932_29015 = state_28926__$1;
(statearr_28932_29015[(2)] = null);

(statearr_28932_29015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (20))){
var inst_28829 = (state_28926[(12)]);
var inst_28837 = figwheel.client.file_reloading.sort_files.call(null,inst_28829);
var state_28926__$1 = state_28926;
var statearr_28933_29016 = state_28926__$1;
(statearr_28933_29016[(2)] = inst_28837);

(statearr_28933_29016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (27))){
var state_28926__$1 = state_28926;
var statearr_28934_29017 = state_28926__$1;
(statearr_28934_29017[(2)] = null);

(statearr_28934_29017[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (1))){
var inst_28778 = (state_28926[(13)]);
var inst_28775 = before_jsload.call(null,files);
var inst_28776 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28777 = (function (){return ((function (inst_28778,inst_28775,inst_28776,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28766_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28766_SHARP_);
});
;})(inst_28778,inst_28775,inst_28776,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28778__$1 = cljs.core.filter.call(null,inst_28777,files);
var inst_28779 = cljs.core.not_empty.call(null,inst_28778__$1);
var state_28926__$1 = (function (){var statearr_28935 = state_28926;
(statearr_28935[(14)] = inst_28775);

(statearr_28935[(15)] = inst_28776);

(statearr_28935[(13)] = inst_28778__$1);

return statearr_28935;
})();
if(cljs.core.truth_(inst_28779)){
var statearr_28936_29018 = state_28926__$1;
(statearr_28936_29018[(1)] = (2));

} else {
var statearr_28937_29019 = state_28926__$1;
(statearr_28937_29019[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (24))){
var state_28926__$1 = state_28926;
var statearr_28938_29020 = state_28926__$1;
(statearr_28938_29020[(2)] = null);

(statearr_28938_29020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (39))){
var inst_28879 = (state_28926[(16)]);
var state_28926__$1 = state_28926;
var statearr_28939_29021 = state_28926__$1;
(statearr_28939_29021[(2)] = inst_28879);

(statearr_28939_29021[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (46))){
var inst_28921 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28940_29022 = state_28926__$1;
(statearr_28940_29022[(2)] = inst_28921);

(statearr_28940_29022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (4))){
var inst_28823 = (state_28926[(2)]);
var inst_28824 = cljs.core.List.EMPTY;
var inst_28825 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28824);
var inst_28826 = (function (){return ((function (inst_28823,inst_28824,inst_28825,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28767_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28767_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28767_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28767_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28823,inst_28824,inst_28825,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28827 = cljs.core.filter.call(null,inst_28826,files);
var inst_28828 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28829 = cljs.core.concat.call(null,inst_28827,inst_28828);
var state_28926__$1 = (function (){var statearr_28941 = state_28926;
(statearr_28941[(17)] = inst_28825);

(statearr_28941[(12)] = inst_28829);

(statearr_28941[(18)] = inst_28823);

return statearr_28941;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28942_29023 = state_28926__$1;
(statearr_28942_29023[(1)] = (16));

} else {
var statearr_28943_29024 = state_28926__$1;
(statearr_28943_29024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (15))){
var inst_28813 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28944_29025 = state_28926__$1;
(statearr_28944_29025[(2)] = inst_28813);

(statearr_28944_29025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (21))){
var inst_28839 = (state_28926[(19)]);
var inst_28839__$1 = (state_28926[(2)]);
var inst_28840 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28839__$1);
var state_28926__$1 = (function (){var statearr_28945 = state_28926;
(statearr_28945[(19)] = inst_28839__$1);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28926__$1,(22),inst_28840);
} else {
if((state_val_28927 === (31))){
var inst_28924 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28926__$1,inst_28924);
} else {
if((state_val_28927 === (32))){
var inst_28879 = (state_28926[(16)]);
var inst_28884 = inst_28879.cljs$lang$protocol_mask$partition0$;
var inst_28885 = (inst_28884 & (64));
var inst_28886 = inst_28879.cljs$core$ISeq$;
var inst_28887 = (cljs.core.PROTOCOL_SENTINEL === inst_28886);
var inst_28888 = ((inst_28885) || (inst_28887));
var state_28926__$1 = state_28926;
if(cljs.core.truth_(inst_28888)){
var statearr_28946_29026 = state_28926__$1;
(statearr_28946_29026[(1)] = (35));

} else {
var statearr_28947_29027 = state_28926__$1;
(statearr_28947_29027[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (40))){
var inst_28901 = (state_28926[(20)]);
var inst_28900 = (state_28926[(2)]);
var inst_28901__$1 = cljs.core.get.call(null,inst_28900,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28902 = cljs.core.get.call(null,inst_28900,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28903 = cljs.core.not_empty.call(null,inst_28901__$1);
var state_28926__$1 = (function (){var statearr_28948 = state_28926;
(statearr_28948[(21)] = inst_28902);

(statearr_28948[(20)] = inst_28901__$1);

return statearr_28948;
})();
if(cljs.core.truth_(inst_28903)){
var statearr_28949_29028 = state_28926__$1;
(statearr_28949_29028[(1)] = (41));

} else {
var statearr_28950_29029 = state_28926__$1;
(statearr_28950_29029[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (33))){
var state_28926__$1 = state_28926;
var statearr_28951_29030 = state_28926__$1;
(statearr_28951_29030[(2)] = false);

(statearr_28951_29030[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (13))){
var inst_28799 = (state_28926[(22)]);
var inst_28803 = cljs.core.chunk_first.call(null,inst_28799);
var inst_28804 = cljs.core.chunk_rest.call(null,inst_28799);
var inst_28805 = cljs.core.count.call(null,inst_28803);
var inst_28786 = inst_28804;
var inst_28787 = inst_28803;
var inst_28788 = inst_28805;
var inst_28789 = (0);
var state_28926__$1 = (function (){var statearr_28952 = state_28926;
(statearr_28952[(7)] = inst_28787);

(statearr_28952[(8)] = inst_28786);

(statearr_28952[(9)] = inst_28788);

(statearr_28952[(10)] = inst_28789);

return statearr_28952;
})();
var statearr_28953_29031 = state_28926__$1;
(statearr_28953_29031[(2)] = null);

(statearr_28953_29031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (22))){
var inst_28842 = (state_28926[(23)]);
var inst_28839 = (state_28926[(19)]);
var inst_28847 = (state_28926[(24)]);
var inst_28843 = (state_28926[(25)]);
var inst_28842__$1 = (state_28926[(2)]);
var inst_28843__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28842__$1);
var inst_28844 = (function (){var all_files = inst_28839;
var res_SINGLEQUOTE_ = inst_28842__$1;
var res = inst_28843__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28842,inst_28839,inst_28847,inst_28843,inst_28842__$1,inst_28843__$1,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28768_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28768_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28842,inst_28839,inst_28847,inst_28843,inst_28842__$1,inst_28843__$1,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28845 = cljs.core.filter.call(null,inst_28844,inst_28842__$1);
var inst_28846 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28847__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28846);
var inst_28848 = cljs.core.not_empty.call(null,inst_28847__$1);
var state_28926__$1 = (function (){var statearr_28954 = state_28926;
(statearr_28954[(23)] = inst_28842__$1);

(statearr_28954[(26)] = inst_28845);

(statearr_28954[(24)] = inst_28847__$1);

(statearr_28954[(25)] = inst_28843__$1);

return statearr_28954;
})();
if(cljs.core.truth_(inst_28848)){
var statearr_28955_29032 = state_28926__$1;
(statearr_28955_29032[(1)] = (23));

} else {
var statearr_28956_29033 = state_28926__$1;
(statearr_28956_29033[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (36))){
var state_28926__$1 = state_28926;
var statearr_28957_29034 = state_28926__$1;
(statearr_28957_29034[(2)] = false);

(statearr_28957_29034[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (41))){
var inst_28901 = (state_28926[(20)]);
var inst_28905 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28906 = cljs.core.map.call(null,inst_28905,inst_28901);
var inst_28907 = cljs.core.pr_str.call(null,inst_28906);
var inst_28908 = ["figwheel-no-load meta-data: ",inst_28907].join('');
var inst_28909 = figwheel.client.utils.log.call(null,inst_28908);
var state_28926__$1 = state_28926;
var statearr_28958_29035 = state_28926__$1;
(statearr_28958_29035[(2)] = inst_28909);

(statearr_28958_29035[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (43))){
var inst_28902 = (state_28926[(21)]);
var inst_28912 = (state_28926[(2)]);
var inst_28913 = cljs.core.not_empty.call(null,inst_28902);
var state_28926__$1 = (function (){var statearr_28959 = state_28926;
(statearr_28959[(27)] = inst_28912);

return statearr_28959;
})();
if(cljs.core.truth_(inst_28913)){
var statearr_28960_29036 = state_28926__$1;
(statearr_28960_29036[(1)] = (44));

} else {
var statearr_28961_29037 = state_28926__$1;
(statearr_28961_29037[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (29))){
var inst_28842 = (state_28926[(23)]);
var inst_28839 = (state_28926[(19)]);
var inst_28879 = (state_28926[(16)]);
var inst_28845 = (state_28926[(26)]);
var inst_28847 = (state_28926[(24)]);
var inst_28843 = (state_28926[(25)]);
var inst_28875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28878 = (function (){var all_files = inst_28839;
var res_SINGLEQUOTE_ = inst_28842;
var res = inst_28843;
var files_not_loaded = inst_28845;
var dependencies_that_loaded = inst_28847;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28839,inst_28879,inst_28845,inst_28847,inst_28843,inst_28875,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28877){
var map__28962 = p__28877;
var map__28962__$1 = (((((!((map__28962 == null))))?(((((map__28962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28962):map__28962);
var namespace = cljs.core.get.call(null,map__28962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28839,inst_28879,inst_28845,inst_28847,inst_28843,inst_28875,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28879__$1 = cljs.core.group_by.call(null,inst_28878,inst_28845);
var inst_28881 = (inst_28879__$1 == null);
var inst_28882 = cljs.core.not.call(null,inst_28881);
var state_28926__$1 = (function (){var statearr_28964 = state_28926;
(statearr_28964[(16)] = inst_28879__$1);

(statearr_28964[(28)] = inst_28875);

return statearr_28964;
})();
if(inst_28882){
var statearr_28965_29038 = state_28926__$1;
(statearr_28965_29038[(1)] = (32));

} else {
var statearr_28966_29039 = state_28926__$1;
(statearr_28966_29039[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (44))){
var inst_28902 = (state_28926[(21)]);
var inst_28915 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28902);
var inst_28916 = cljs.core.pr_str.call(null,inst_28915);
var inst_28917 = ["not required: ",inst_28916].join('');
var inst_28918 = figwheel.client.utils.log.call(null,inst_28917);
var state_28926__$1 = state_28926;
var statearr_28967_29040 = state_28926__$1;
(statearr_28967_29040[(2)] = inst_28918);

(statearr_28967_29040[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (6))){
var inst_28820 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28968_29041 = state_28926__$1;
(statearr_28968_29041[(2)] = inst_28820);

(statearr_28968_29041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (28))){
var inst_28845 = (state_28926[(26)]);
var inst_28872 = (state_28926[(2)]);
var inst_28873 = cljs.core.not_empty.call(null,inst_28845);
var state_28926__$1 = (function (){var statearr_28969 = state_28926;
(statearr_28969[(29)] = inst_28872);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28873)){
var statearr_28970_29042 = state_28926__$1;
(statearr_28970_29042[(1)] = (29));

} else {
var statearr_28971_29043 = state_28926__$1;
(statearr_28971_29043[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (25))){
var inst_28843 = (state_28926[(25)]);
var inst_28859 = (state_28926[(2)]);
var inst_28860 = cljs.core.not_empty.call(null,inst_28843);
var state_28926__$1 = (function (){var statearr_28972 = state_28926;
(statearr_28972[(30)] = inst_28859);

return statearr_28972;
})();
if(cljs.core.truth_(inst_28860)){
var statearr_28973_29044 = state_28926__$1;
(statearr_28973_29044[(1)] = (26));

} else {
var statearr_28974_29045 = state_28926__$1;
(statearr_28974_29045[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (34))){
var inst_28895 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
if(cljs.core.truth_(inst_28895)){
var statearr_28975_29046 = state_28926__$1;
(statearr_28975_29046[(1)] = (38));

} else {
var statearr_28976_29047 = state_28926__$1;
(statearr_28976_29047[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (17))){
var state_28926__$1 = state_28926;
var statearr_28977_29048 = state_28926__$1;
(statearr_28977_29048[(2)] = recompile_dependents);

(statearr_28977_29048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (3))){
var state_28926__$1 = state_28926;
var statearr_28978_29049 = state_28926__$1;
(statearr_28978_29049[(2)] = null);

(statearr_28978_29049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (12))){
var inst_28816 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28979_29050 = state_28926__$1;
(statearr_28979_29050[(2)] = inst_28816);

(statearr_28979_29050[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (2))){
var inst_28778 = (state_28926[(13)]);
var inst_28785 = cljs.core.seq.call(null,inst_28778);
var inst_28786 = inst_28785;
var inst_28787 = null;
var inst_28788 = (0);
var inst_28789 = (0);
var state_28926__$1 = (function (){var statearr_28980 = state_28926;
(statearr_28980[(7)] = inst_28787);

(statearr_28980[(8)] = inst_28786);

(statearr_28980[(9)] = inst_28788);

(statearr_28980[(10)] = inst_28789);

return statearr_28980;
})();
var statearr_28981_29051 = state_28926__$1;
(statearr_28981_29051[(2)] = null);

(statearr_28981_29051[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (23))){
var inst_28842 = (state_28926[(23)]);
var inst_28839 = (state_28926[(19)]);
var inst_28845 = (state_28926[(26)]);
var inst_28847 = (state_28926[(24)]);
var inst_28843 = (state_28926[(25)]);
var inst_28850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28852 = (function (){var all_files = inst_28839;
var res_SINGLEQUOTE_ = inst_28842;
var res = inst_28843;
var files_not_loaded = inst_28845;
var dependencies_that_loaded = inst_28847;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28839,inst_28845,inst_28847,inst_28843,inst_28850,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28851){
var map__28982 = p__28851;
var map__28982__$1 = (((((!((map__28982 == null))))?(((((map__28982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28982):map__28982);
var request_url = cljs.core.get.call(null,map__28982__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28839,inst_28845,inst_28847,inst_28843,inst_28850,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28853 = cljs.core.reverse.call(null,inst_28847);
var inst_28854 = cljs.core.map.call(null,inst_28852,inst_28853);
var inst_28855 = cljs.core.pr_str.call(null,inst_28854);
var inst_28856 = figwheel.client.utils.log.call(null,inst_28855);
var state_28926__$1 = (function (){var statearr_28984 = state_28926;
(statearr_28984[(31)] = inst_28850);

return statearr_28984;
})();
var statearr_28985_29052 = state_28926__$1;
(statearr_28985_29052[(2)] = inst_28856);

(statearr_28985_29052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (35))){
var state_28926__$1 = state_28926;
var statearr_28986_29053 = state_28926__$1;
(statearr_28986_29053[(2)] = true);

(statearr_28986_29053[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (19))){
var inst_28829 = (state_28926[(12)]);
var inst_28835 = figwheel.client.file_reloading.expand_files.call(null,inst_28829);
var state_28926__$1 = state_28926;
var statearr_28987_29054 = state_28926__$1;
(statearr_28987_29054[(2)] = inst_28835);

(statearr_28987_29054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (11))){
var state_28926__$1 = state_28926;
var statearr_28988_29055 = state_28926__$1;
(statearr_28988_29055[(2)] = null);

(statearr_28988_29055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (9))){
var inst_28818 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28989_29056 = state_28926__$1;
(statearr_28989_29056[(2)] = inst_28818);

(statearr_28989_29056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (5))){
var inst_28788 = (state_28926[(9)]);
var inst_28789 = (state_28926[(10)]);
var inst_28791 = (inst_28789 < inst_28788);
var inst_28792 = inst_28791;
var state_28926__$1 = state_28926;
if(cljs.core.truth_(inst_28792)){
var statearr_28990_29057 = state_28926__$1;
(statearr_28990_29057[(1)] = (7));

} else {
var statearr_28991_29058 = state_28926__$1;
(statearr_28991_29058[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (14))){
var inst_28799 = (state_28926[(22)]);
var inst_28808 = cljs.core.first.call(null,inst_28799);
var inst_28809 = figwheel.client.file_reloading.eval_body.call(null,inst_28808,opts);
var inst_28810 = cljs.core.next.call(null,inst_28799);
var inst_28786 = inst_28810;
var inst_28787 = null;
var inst_28788 = (0);
var inst_28789 = (0);
var state_28926__$1 = (function (){var statearr_28992 = state_28926;
(statearr_28992[(7)] = inst_28787);

(statearr_28992[(32)] = inst_28809);

(statearr_28992[(8)] = inst_28786);

(statearr_28992[(9)] = inst_28788);

(statearr_28992[(10)] = inst_28789);

return statearr_28992;
})();
var statearr_28993_29059 = state_28926__$1;
(statearr_28993_29059[(2)] = null);

(statearr_28993_29059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (45))){
var state_28926__$1 = state_28926;
var statearr_28994_29060 = state_28926__$1;
(statearr_28994_29060[(2)] = null);

(statearr_28994_29060[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (26))){
var inst_28842 = (state_28926[(23)]);
var inst_28839 = (state_28926[(19)]);
var inst_28845 = (state_28926[(26)]);
var inst_28847 = (state_28926[(24)]);
var inst_28843 = (state_28926[(25)]);
var inst_28862 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28864 = (function (){var all_files = inst_28839;
var res_SINGLEQUOTE_ = inst_28842;
var res = inst_28843;
var files_not_loaded = inst_28845;
var dependencies_that_loaded = inst_28847;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28839,inst_28845,inst_28847,inst_28843,inst_28862,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28863){
var map__28995 = p__28863;
var map__28995__$1 = (((((!((map__28995 == null))))?(((((map__28995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28995):map__28995);
var namespace = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28839,inst_28845,inst_28847,inst_28843,inst_28862,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28865 = cljs.core.map.call(null,inst_28864,inst_28843);
var inst_28866 = cljs.core.pr_str.call(null,inst_28865);
var inst_28867 = figwheel.client.utils.log.call(null,inst_28866);
var inst_28868 = (function (){var all_files = inst_28839;
var res_SINGLEQUOTE_ = inst_28842;
var res = inst_28843;
var files_not_loaded = inst_28845;
var dependencies_that_loaded = inst_28847;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28839,inst_28845,inst_28847,inst_28843,inst_28862,inst_28864,inst_28865,inst_28866,inst_28867,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28842,inst_28839,inst_28845,inst_28847,inst_28843,inst_28862,inst_28864,inst_28865,inst_28866,inst_28867,state_val_28927,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28869 = setTimeout(inst_28868,(10));
var state_28926__$1 = (function (){var statearr_28997 = state_28926;
(statearr_28997[(33)] = inst_28867);

(statearr_28997[(34)] = inst_28862);

return statearr_28997;
})();
var statearr_28998_29061 = state_28926__$1;
(statearr_28998_29061[(2)] = inst_28869);

(statearr_28998_29061[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (16))){
var state_28926__$1 = state_28926;
var statearr_28999_29062 = state_28926__$1;
(statearr_28999_29062[(2)] = reload_dependents);

(statearr_28999_29062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (38))){
var inst_28879 = (state_28926[(16)]);
var inst_28897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28879);
var state_28926__$1 = state_28926;
var statearr_29000_29063 = state_28926__$1;
(statearr_29000_29063[(2)] = inst_28897);

(statearr_29000_29063[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (30))){
var state_28926__$1 = state_28926;
var statearr_29001_29064 = state_28926__$1;
(statearr_29001_29064[(2)] = null);

(statearr_29001_29064[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (10))){
var inst_28799 = (state_28926[(22)]);
var inst_28801 = cljs.core.chunked_seq_QMARK_.call(null,inst_28799);
var state_28926__$1 = state_28926;
if(inst_28801){
var statearr_29002_29065 = state_28926__$1;
(statearr_29002_29065[(1)] = (13));

} else {
var statearr_29003_29066 = state_28926__$1;
(statearr_29003_29066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (18))){
var inst_28833 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
if(cljs.core.truth_(inst_28833)){
var statearr_29004_29067 = state_28926__$1;
(statearr_29004_29067[(1)] = (19));

} else {
var statearr_29005_29068 = state_28926__$1;
(statearr_29005_29068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (42))){
var state_28926__$1 = state_28926;
var statearr_29006_29069 = state_28926__$1;
(statearr_29006_29069[(2)] = null);

(statearr_29006_29069[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (37))){
var inst_28892 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_29007_29070 = state_28926__$1;
(statearr_29007_29070[(2)] = inst_28892);

(statearr_29007_29070[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (8))){
var inst_28799 = (state_28926[(22)]);
var inst_28786 = (state_28926[(8)]);
var inst_28799__$1 = cljs.core.seq.call(null,inst_28786);
var state_28926__$1 = (function (){var statearr_29008 = state_28926;
(statearr_29008[(22)] = inst_28799__$1);

return statearr_29008;
})();
if(inst_28799__$1){
var statearr_29009_29071 = state_28926__$1;
(statearr_29009_29071[(1)] = (10));

} else {
var statearr_29010_29072 = state_28926__$1;
(statearr_29010_29072[(1)] = (11));

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
});})(c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26210__auto__,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto____0 = (function (){
var statearr_29011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29011[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto__);

(statearr_29011[(1)] = (1));

return statearr_29011;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto____1 = (function (state_28926){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_28926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e29012){if((e29012 instanceof Object)){
var ex__26214__auto__ = e29012;
var statearr_29013_29073 = state_28926;
(statearr_29013_29073[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29074 = state_28926;
state_28926 = G__29074;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto__ = function(state_28926){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto____1.call(this,state_28926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26307__auto__ = (function (){var statearr_29014 = f__26306__auto__.call(null);
(statearr_29014[(6)] = c__26305__auto__);

return statearr_29014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__,map__28771,map__28771__$1,opts,before_jsload,on_jsload,reload_dependents,map__28772,map__28772__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26305__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29077,link){
var map__29078 = p__29077;
var map__29078__$1 = (((((!((map__29078 == null))))?(((((map__29078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29078):map__29078);
var file = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29078,map__29078__$1,file){
return (function (p1__29075_SHARP_,p2__29076_SHARP_){
if(cljs.core._EQ_.call(null,p1__29075_SHARP_,p2__29076_SHARP_)){
return p1__29075_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29078,map__29078__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29081){
var map__29082 = p__29081;
var map__29082__$1 = (((((!((map__29082 == null))))?(((((map__29082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29082):map__29082);
var match_length = cljs.core.get.call(null,map__29082__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29082__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29080_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29080_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29084_SHARP_,p2__29085_SHARP_){
return cljs.core.assoc.call(null,p1__29084_SHARP_,cljs.core.get.call(null,p2__29085_SHARP_,key),p2__29085_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29086 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29086);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29086);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29087,p__29088){
var map__29089 = p__29087;
var map__29089__$1 = (((((!((map__29089 == null))))?(((((map__29089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29089):map__29089);
var on_cssload = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29090 = p__29088;
var map__29090__$1 = (((((!((map__29090 == null))))?(((((map__29090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29090):map__29090);
var files_msg = map__29090__$1;
var files = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1599595553514
