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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28415_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28415_SHARP_));
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
var seq__28416 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28417 = null;
var count__28418 = (0);
var i__28419 = (0);
while(true){
if((i__28419 < count__28418)){
var n = cljs.core._nth.call(null,chunk__28417,i__28419);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28420 = seq__28416;
var G__28421 = chunk__28417;
var G__28422 = count__28418;
var G__28423 = (i__28419 + (1));
seq__28416 = G__28420;
chunk__28417 = G__28421;
count__28418 = G__28422;
i__28419 = G__28423;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28416);
if(temp__5720__auto__){
var seq__28416__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28416__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28416__$1);
var G__28424 = cljs.core.chunk_rest.call(null,seq__28416__$1);
var G__28425 = c__4550__auto__;
var G__28426 = cljs.core.count.call(null,c__4550__auto__);
var G__28427 = (0);
seq__28416 = G__28424;
chunk__28417 = G__28425;
count__28418 = G__28426;
i__28419 = G__28427;
continue;
} else {
var n = cljs.core.first.call(null,seq__28416__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28428 = cljs.core.next.call(null,seq__28416__$1);
var G__28429 = null;
var G__28430 = (0);
var G__28431 = (0);
seq__28416 = G__28428;
chunk__28417 = G__28429;
count__28418 = G__28430;
i__28419 = G__28431;
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
return cljs.core.some.call(null,(function (p__28432){
var vec__28433 = p__28432;
var _ = cljs.core.nth.call(null,vec__28433,(0),null);
var v = cljs.core.nth.call(null,vec__28433,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28436){
var vec__28437 = p__28436;
var k = cljs.core.nth.call(null,vec__28437,(0),null);
var v = cljs.core.nth.call(null,vec__28437,(1),null);
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

var seq__28449_28457 = cljs.core.seq.call(null,deps);
var chunk__28450_28458 = null;
var count__28451_28459 = (0);
var i__28452_28460 = (0);
while(true){
if((i__28452_28460 < count__28451_28459)){
var dep_28461 = cljs.core._nth.call(null,chunk__28450_28458,i__28452_28460);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28461;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28461));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28461,(depth + (1)),state);
} else {
}


var G__28462 = seq__28449_28457;
var G__28463 = chunk__28450_28458;
var G__28464 = count__28451_28459;
var G__28465 = (i__28452_28460 + (1));
seq__28449_28457 = G__28462;
chunk__28450_28458 = G__28463;
count__28451_28459 = G__28464;
i__28452_28460 = G__28465;
continue;
} else {
var temp__5720__auto___28466 = cljs.core.seq.call(null,seq__28449_28457);
if(temp__5720__auto___28466){
var seq__28449_28467__$1 = temp__5720__auto___28466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28449_28467__$1)){
var c__4550__auto___28468 = cljs.core.chunk_first.call(null,seq__28449_28467__$1);
var G__28469 = cljs.core.chunk_rest.call(null,seq__28449_28467__$1);
var G__28470 = c__4550__auto___28468;
var G__28471 = cljs.core.count.call(null,c__4550__auto___28468);
var G__28472 = (0);
seq__28449_28457 = G__28469;
chunk__28450_28458 = G__28470;
count__28451_28459 = G__28471;
i__28452_28460 = G__28472;
continue;
} else {
var dep_28473 = cljs.core.first.call(null,seq__28449_28467__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28473;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28473));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28473,(depth + (1)),state);
} else {
}


var G__28474 = cljs.core.next.call(null,seq__28449_28467__$1);
var G__28475 = null;
var G__28476 = (0);
var G__28477 = (0);
seq__28449_28457 = G__28474;
chunk__28450_28458 = G__28475;
count__28451_28459 = G__28476;
i__28452_28460 = G__28477;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28453){
var vec__28454 = p__28453;
var seq__28455 = cljs.core.seq.call(null,vec__28454);
var first__28456 = cljs.core.first.call(null,seq__28455);
var seq__28455__$1 = cljs.core.next.call(null,seq__28455);
var x = first__28456;
var xs = seq__28455__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28454,seq__28455,first__28456,seq__28455__$1,x,xs,get_deps__$1){
return (function (p1__28440_SHARP_){
return clojure.set.difference.call(null,p1__28440_SHARP_,x);
});})(vec__28454,seq__28455,first__28456,seq__28455__$1,x,xs,get_deps__$1))
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
var seq__28478 = cljs.core.seq.call(null,provides);
var chunk__28479 = null;
var count__28480 = (0);
var i__28481 = (0);
while(true){
if((i__28481 < count__28480)){
var prov = cljs.core._nth.call(null,chunk__28479,i__28481);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28490_28498 = cljs.core.seq.call(null,requires);
var chunk__28491_28499 = null;
var count__28492_28500 = (0);
var i__28493_28501 = (0);
while(true){
if((i__28493_28501 < count__28492_28500)){
var req_28502 = cljs.core._nth.call(null,chunk__28491_28499,i__28493_28501);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28502,prov);


var G__28503 = seq__28490_28498;
var G__28504 = chunk__28491_28499;
var G__28505 = count__28492_28500;
var G__28506 = (i__28493_28501 + (1));
seq__28490_28498 = G__28503;
chunk__28491_28499 = G__28504;
count__28492_28500 = G__28505;
i__28493_28501 = G__28506;
continue;
} else {
var temp__5720__auto___28507 = cljs.core.seq.call(null,seq__28490_28498);
if(temp__5720__auto___28507){
var seq__28490_28508__$1 = temp__5720__auto___28507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28490_28508__$1)){
var c__4550__auto___28509 = cljs.core.chunk_first.call(null,seq__28490_28508__$1);
var G__28510 = cljs.core.chunk_rest.call(null,seq__28490_28508__$1);
var G__28511 = c__4550__auto___28509;
var G__28512 = cljs.core.count.call(null,c__4550__auto___28509);
var G__28513 = (0);
seq__28490_28498 = G__28510;
chunk__28491_28499 = G__28511;
count__28492_28500 = G__28512;
i__28493_28501 = G__28513;
continue;
} else {
var req_28514 = cljs.core.first.call(null,seq__28490_28508__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28514,prov);


var G__28515 = cljs.core.next.call(null,seq__28490_28508__$1);
var G__28516 = null;
var G__28517 = (0);
var G__28518 = (0);
seq__28490_28498 = G__28515;
chunk__28491_28499 = G__28516;
count__28492_28500 = G__28517;
i__28493_28501 = G__28518;
continue;
}
} else {
}
}
break;
}


var G__28519 = seq__28478;
var G__28520 = chunk__28479;
var G__28521 = count__28480;
var G__28522 = (i__28481 + (1));
seq__28478 = G__28519;
chunk__28479 = G__28520;
count__28480 = G__28521;
i__28481 = G__28522;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28478);
if(temp__5720__auto__){
var seq__28478__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28478__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28478__$1);
var G__28523 = cljs.core.chunk_rest.call(null,seq__28478__$1);
var G__28524 = c__4550__auto__;
var G__28525 = cljs.core.count.call(null,c__4550__auto__);
var G__28526 = (0);
seq__28478 = G__28523;
chunk__28479 = G__28524;
count__28480 = G__28525;
i__28481 = G__28526;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28478__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28494_28527 = cljs.core.seq.call(null,requires);
var chunk__28495_28528 = null;
var count__28496_28529 = (0);
var i__28497_28530 = (0);
while(true){
if((i__28497_28530 < count__28496_28529)){
var req_28531 = cljs.core._nth.call(null,chunk__28495_28528,i__28497_28530);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28531,prov);


var G__28532 = seq__28494_28527;
var G__28533 = chunk__28495_28528;
var G__28534 = count__28496_28529;
var G__28535 = (i__28497_28530 + (1));
seq__28494_28527 = G__28532;
chunk__28495_28528 = G__28533;
count__28496_28529 = G__28534;
i__28497_28530 = G__28535;
continue;
} else {
var temp__5720__auto___28536__$1 = cljs.core.seq.call(null,seq__28494_28527);
if(temp__5720__auto___28536__$1){
var seq__28494_28537__$1 = temp__5720__auto___28536__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28494_28537__$1)){
var c__4550__auto___28538 = cljs.core.chunk_first.call(null,seq__28494_28537__$1);
var G__28539 = cljs.core.chunk_rest.call(null,seq__28494_28537__$1);
var G__28540 = c__4550__auto___28538;
var G__28541 = cljs.core.count.call(null,c__4550__auto___28538);
var G__28542 = (0);
seq__28494_28527 = G__28539;
chunk__28495_28528 = G__28540;
count__28496_28529 = G__28541;
i__28497_28530 = G__28542;
continue;
} else {
var req_28543 = cljs.core.first.call(null,seq__28494_28537__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28543,prov);


var G__28544 = cljs.core.next.call(null,seq__28494_28537__$1);
var G__28545 = null;
var G__28546 = (0);
var G__28547 = (0);
seq__28494_28527 = G__28544;
chunk__28495_28528 = G__28545;
count__28496_28529 = G__28546;
i__28497_28530 = G__28547;
continue;
}
} else {
}
}
break;
}


var G__28548 = cljs.core.next.call(null,seq__28478__$1);
var G__28549 = null;
var G__28550 = (0);
var G__28551 = (0);
seq__28478 = G__28548;
chunk__28479 = G__28549;
count__28480 = G__28550;
i__28481 = G__28551;
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
var seq__28552_28556 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28553_28557 = null;
var count__28554_28558 = (0);
var i__28555_28559 = (0);
while(true){
if((i__28555_28559 < count__28554_28558)){
var ns_28560 = cljs.core._nth.call(null,chunk__28553_28557,i__28555_28559);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28560);


var G__28561 = seq__28552_28556;
var G__28562 = chunk__28553_28557;
var G__28563 = count__28554_28558;
var G__28564 = (i__28555_28559 + (1));
seq__28552_28556 = G__28561;
chunk__28553_28557 = G__28562;
count__28554_28558 = G__28563;
i__28555_28559 = G__28564;
continue;
} else {
var temp__5720__auto___28565 = cljs.core.seq.call(null,seq__28552_28556);
if(temp__5720__auto___28565){
var seq__28552_28566__$1 = temp__5720__auto___28565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28552_28566__$1)){
var c__4550__auto___28567 = cljs.core.chunk_first.call(null,seq__28552_28566__$1);
var G__28568 = cljs.core.chunk_rest.call(null,seq__28552_28566__$1);
var G__28569 = c__4550__auto___28567;
var G__28570 = cljs.core.count.call(null,c__4550__auto___28567);
var G__28571 = (0);
seq__28552_28556 = G__28568;
chunk__28553_28557 = G__28569;
count__28554_28558 = G__28570;
i__28555_28559 = G__28571;
continue;
} else {
var ns_28572 = cljs.core.first.call(null,seq__28552_28566__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28572);


var G__28573 = cljs.core.next.call(null,seq__28552_28566__$1);
var G__28574 = null;
var G__28575 = (0);
var G__28576 = (0);
seq__28552_28556 = G__28573;
chunk__28553_28557 = G__28574;
count__28554_28558 = G__28575;
i__28555_28559 = G__28576;
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
var G__28577__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28578__i = 0, G__28578__a = new Array(arguments.length -  0);
while (G__28578__i < G__28578__a.length) {G__28578__a[G__28578__i] = arguments[G__28578__i + 0]; ++G__28578__i;}
  args = new cljs.core.IndexedSeq(G__28578__a,0,null);
} 
return G__28577__delegate.call(this,args);};
G__28577.cljs$lang$maxFixedArity = 0;
G__28577.cljs$lang$applyTo = (function (arglist__28579){
var args = cljs.core.seq(arglist__28579);
return G__28577__delegate(args);
});
G__28577.cljs$core$IFn$_invoke$arity$variadic = G__28577__delegate;
return G__28577;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28580_SHARP_,p2__28581_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28580_SHARP_)),p2__28581_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28582_SHARP_,p2__28583_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28582_SHARP_),p2__28583_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28584 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28584.addCallback(((function (G__28584){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28584))
);

G__28584.addErrback(((function (G__28584){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28584))
);

return G__28584;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28585){if((e28585 instanceof Error)){
var e = e28585;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28585;

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
}catch (e28586){if((e28586 instanceof Error)){
var e = e28586;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28586;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28587 = cljs.core._EQ_;
var expr__28588 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28587.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28588))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28587.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28588))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28587.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28588))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28587,expr__28588){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28587,expr__28588))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28590,callback){
var map__28591 = p__28590;
var map__28591__$1 = (((((!((map__28591 == null))))?(((((map__28591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28591):map__28591);
var file_msg = map__28591__$1;
var request_url = cljs.core.get.call(null,map__28591__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28591,map__28591__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28591,map__28591__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__){
return (function (state_28629){
var state_val_28630 = (state_28629[(1)]);
if((state_val_28630 === (7))){
var inst_28625 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28631_28657 = state_28629__$1;
(statearr_28631_28657[(2)] = inst_28625);

(statearr_28631_28657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (1))){
var state_28629__$1 = state_28629;
var statearr_28632_28658 = state_28629__$1;
(statearr_28632_28658[(2)] = null);

(statearr_28632_28658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (4))){
var inst_28595 = (state_28629[(7)]);
var inst_28595__$1 = (state_28629[(2)]);
var state_28629__$1 = (function (){var statearr_28633 = state_28629;
(statearr_28633[(7)] = inst_28595__$1);

return statearr_28633;
})();
if(cljs.core.truth_(inst_28595__$1)){
var statearr_28634_28659 = state_28629__$1;
(statearr_28634_28659[(1)] = (5));

} else {
var statearr_28635_28660 = state_28629__$1;
(statearr_28635_28660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (15))){
var inst_28608 = (state_28629[(8)]);
var inst_28610 = (state_28629[(9)]);
var inst_28612 = inst_28610.call(null,inst_28608);
var state_28629__$1 = state_28629;
var statearr_28636_28661 = state_28629__$1;
(statearr_28636_28661[(2)] = inst_28612);

(statearr_28636_28661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (13))){
var inst_28619 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28637_28662 = state_28629__$1;
(statearr_28637_28662[(2)] = inst_28619);

(statearr_28637_28662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (6))){
var state_28629__$1 = state_28629;
var statearr_28638_28663 = state_28629__$1;
(statearr_28638_28663[(2)] = null);

(statearr_28638_28663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (17))){
var inst_28616 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28639_28664 = state_28629__$1;
(statearr_28639_28664[(2)] = inst_28616);

(statearr_28639_28664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (3))){
var inst_28627 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28629__$1,inst_28627);
} else {
if((state_val_28630 === (12))){
var state_28629__$1 = state_28629;
var statearr_28640_28665 = state_28629__$1;
(statearr_28640_28665[(2)] = null);

(statearr_28640_28665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (2))){
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28629__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28630 === (11))){
var inst_28600 = (state_28629[(10)]);
var inst_28606 = figwheel.client.file_reloading.blocking_load.call(null,inst_28600);
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28629__$1,(14),inst_28606);
} else {
if((state_val_28630 === (9))){
var inst_28600 = (state_28629[(10)]);
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28600)){
var statearr_28641_28666 = state_28629__$1;
(statearr_28641_28666[(1)] = (11));

} else {
var statearr_28642_28667 = state_28629__$1;
(statearr_28642_28667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (5))){
var inst_28601 = (state_28629[(11)]);
var inst_28595 = (state_28629[(7)]);
var inst_28600 = cljs.core.nth.call(null,inst_28595,(0),null);
var inst_28601__$1 = cljs.core.nth.call(null,inst_28595,(1),null);
var state_28629__$1 = (function (){var statearr_28643 = state_28629;
(statearr_28643[(10)] = inst_28600);

(statearr_28643[(11)] = inst_28601__$1);

return statearr_28643;
})();
if(cljs.core.truth_(inst_28601__$1)){
var statearr_28644_28668 = state_28629__$1;
(statearr_28644_28668[(1)] = (8));

} else {
var statearr_28645_28669 = state_28629__$1;
(statearr_28645_28669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (14))){
var inst_28600 = (state_28629[(10)]);
var inst_28610 = (state_28629[(9)]);
var inst_28608 = (state_28629[(2)]);
var inst_28609 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28610__$1 = cljs.core.get.call(null,inst_28609,inst_28600);
var state_28629__$1 = (function (){var statearr_28646 = state_28629;
(statearr_28646[(8)] = inst_28608);

(statearr_28646[(9)] = inst_28610__$1);

return statearr_28646;
})();
if(cljs.core.truth_(inst_28610__$1)){
var statearr_28647_28670 = state_28629__$1;
(statearr_28647_28670[(1)] = (15));

} else {
var statearr_28648_28671 = state_28629__$1;
(statearr_28648_28671[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (16))){
var inst_28608 = (state_28629[(8)]);
var inst_28614 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28608);
var state_28629__$1 = state_28629;
var statearr_28649_28672 = state_28629__$1;
(statearr_28649_28672[(2)] = inst_28614);

(statearr_28649_28672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (10))){
var inst_28621 = (state_28629[(2)]);
var state_28629__$1 = (function (){var statearr_28650 = state_28629;
(statearr_28650[(12)] = inst_28621);

return statearr_28650;
})();
var statearr_28651_28673 = state_28629__$1;
(statearr_28651_28673[(2)] = null);

(statearr_28651_28673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (8))){
var inst_28601 = (state_28629[(11)]);
var inst_28603 = eval(inst_28601);
var state_28629__$1 = state_28629;
var statearr_28652_28674 = state_28629__$1;
(statearr_28652_28674[(2)] = inst_28603);

(statearr_28652_28674[(1)] = (10));


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
});})(c__26301__auto__))
;
return ((function (switch__26206__auto__,c__26301__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26207__auto__ = null;
var figwheel$client$file_reloading$state_machine__26207__auto____0 = (function (){
var statearr_28653 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28653[(0)] = figwheel$client$file_reloading$state_machine__26207__auto__);

(statearr_28653[(1)] = (1));

return statearr_28653;
});
var figwheel$client$file_reloading$state_machine__26207__auto____1 = (function (state_28629){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_28629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e28654){if((e28654 instanceof Object)){
var ex__26210__auto__ = e28654;
var statearr_28655_28675 = state_28629;
(statearr_28655_28675[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28676 = state_28629;
state_28629 = G__28676;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26207__auto__ = function(state_28629){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26207__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26207__auto____1.call(this,state_28629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26207__auto____0;
figwheel$client$file_reloading$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26207__auto____1;
return figwheel$client$file_reloading$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__))
})();
var state__26303__auto__ = (function (){var statearr_28656 = f__26302__auto__.call(null);
(statearr_28656[(6)] = c__26301__auto__);

return statearr_28656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__))
);

return c__26301__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28678 = arguments.length;
switch (G__28678) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28680,callback){
var map__28681 = p__28680;
var map__28681__$1 = (((((!((map__28681 == null))))?(((((map__28681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28681):map__28681);
var file_msg = map__28681__$1;
var namespace = cljs.core.get.call(null,map__28681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28681,map__28681__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28681,map__28681__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28683){
var map__28684 = p__28683;
var map__28684__$1 = (((((!((map__28684 == null))))?(((((map__28684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28684):map__28684);
var file_msg = map__28684__$1;
var namespace = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28686){
var map__28687 = p__28686;
var map__28687__$1 = (((((!((map__28687 == null))))?(((((map__28687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28687):map__28687);
var file_msg = map__28687__$1;
var namespace = cljs.core.get.call(null,map__28687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28689,callback){
var map__28690 = p__28689;
var map__28690__$1 = (((((!((map__28690 == null))))?(((((map__28690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28690):map__28690);
var file_msg = map__28690__$1;
var request_url = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26301__auto___28740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___28740,out){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___28740,out){
return (function (state_28725){
var state_val_28726 = (state_28725[(1)]);
if((state_val_28726 === (1))){
var inst_28699 = cljs.core.seq.call(null,files);
var inst_28700 = cljs.core.first.call(null,inst_28699);
var inst_28701 = cljs.core.next.call(null,inst_28699);
var inst_28702 = files;
var state_28725__$1 = (function (){var statearr_28727 = state_28725;
(statearr_28727[(7)] = inst_28702);

(statearr_28727[(8)] = inst_28700);

(statearr_28727[(9)] = inst_28701);

return statearr_28727;
})();
var statearr_28728_28741 = state_28725__$1;
(statearr_28728_28741[(2)] = null);

(statearr_28728_28741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (2))){
var inst_28702 = (state_28725[(7)]);
var inst_28708 = (state_28725[(10)]);
var inst_28707 = cljs.core.seq.call(null,inst_28702);
var inst_28708__$1 = cljs.core.first.call(null,inst_28707);
var inst_28709 = cljs.core.next.call(null,inst_28707);
var inst_28710 = (inst_28708__$1 == null);
var inst_28711 = cljs.core.not.call(null,inst_28710);
var state_28725__$1 = (function (){var statearr_28729 = state_28725;
(statearr_28729[(11)] = inst_28709);

(statearr_28729[(10)] = inst_28708__$1);

return statearr_28729;
})();
if(inst_28711){
var statearr_28730_28742 = state_28725__$1;
(statearr_28730_28742[(1)] = (4));

} else {
var statearr_28731_28743 = state_28725__$1;
(statearr_28731_28743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (3))){
var inst_28723 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28725__$1,inst_28723);
} else {
if((state_val_28726 === (4))){
var inst_28708 = (state_28725[(10)]);
var inst_28713 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28708);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28725__$1,(7),inst_28713);
} else {
if((state_val_28726 === (5))){
var inst_28719 = cljs.core.async.close_BANG_.call(null,out);
var state_28725__$1 = state_28725;
var statearr_28732_28744 = state_28725__$1;
(statearr_28732_28744[(2)] = inst_28719);

(statearr_28732_28744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (6))){
var inst_28721 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28733_28745 = state_28725__$1;
(statearr_28733_28745[(2)] = inst_28721);

(statearr_28733_28745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (7))){
var inst_28709 = (state_28725[(11)]);
var inst_28715 = (state_28725[(2)]);
var inst_28716 = cljs.core.async.put_BANG_.call(null,out,inst_28715);
var inst_28702 = inst_28709;
var state_28725__$1 = (function (){var statearr_28734 = state_28725;
(statearr_28734[(7)] = inst_28702);

(statearr_28734[(12)] = inst_28716);

return statearr_28734;
})();
var statearr_28735_28746 = state_28725__$1;
(statearr_28735_28746[(2)] = null);

(statearr_28735_28746[(1)] = (2));


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
});})(c__26301__auto___28740,out))
;
return ((function (switch__26206__auto__,c__26301__auto___28740,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto____0 = (function (){
var statearr_28736 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28736[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto__);

(statearr_28736[(1)] = (1));

return statearr_28736;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto____1 = (function (state_28725){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_28725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e28737){if((e28737 instanceof Object)){
var ex__26210__auto__ = e28737;
var statearr_28738_28747 = state_28725;
(statearr_28738_28747[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28748 = state_28725;
state_28725 = G__28748;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto__ = function(state_28725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto____1.call(this,state_28725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___28740,out))
})();
var state__26303__auto__ = (function (){var statearr_28739 = f__26302__auto__.call(null);
(statearr_28739[(6)] = c__26301__auto___28740);

return statearr_28739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___28740,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28749,opts){
var map__28750 = p__28749;
var map__28750__$1 = (((((!((map__28750 == null))))?(((((map__28750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28750):map__28750);
var eval_body = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28752){var e = e28752;
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
return (function (p1__28753_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28753_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28754){
var vec__28755 = p__28754;
var k = cljs.core.nth.call(null,vec__28755,(0),null);
var v = cljs.core.nth.call(null,vec__28755,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28758){
var vec__28759 = p__28758;
var k = cljs.core.nth.call(null,vec__28759,(0),null);
var v = cljs.core.nth.call(null,vec__28759,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28765,p__28766){
var map__28767 = p__28765;
var map__28767__$1 = (((((!((map__28767 == null))))?(((((map__28767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28767):map__28767);
var opts = map__28767__$1;
var before_jsload = cljs.core.get.call(null,map__28767__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28767__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28767__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28768 = p__28766;
var map__28768__$1 = (((((!((map__28768 == null))))?(((((map__28768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28768):map__28768);
var msg = map__28768__$1;
var files = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28922){
var state_val_28923 = (state_28922[(1)]);
if((state_val_28923 === (7))){
var inst_28784 = (state_28922[(7)]);
var inst_28782 = (state_28922[(8)]);
var inst_28783 = (state_28922[(9)]);
var inst_28785 = (state_28922[(10)]);
var inst_28790 = cljs.core._nth.call(null,inst_28783,inst_28785);
var inst_28791 = figwheel.client.file_reloading.eval_body.call(null,inst_28790,opts);
var inst_28792 = (inst_28785 + (1));
var tmp28924 = inst_28784;
var tmp28925 = inst_28782;
var tmp28926 = inst_28783;
var inst_28782__$1 = tmp28925;
var inst_28783__$1 = tmp28926;
var inst_28784__$1 = tmp28924;
var inst_28785__$1 = inst_28792;
var state_28922__$1 = (function (){var statearr_28927 = state_28922;
(statearr_28927[(7)] = inst_28784__$1);

(statearr_28927[(8)] = inst_28782__$1);

(statearr_28927[(9)] = inst_28783__$1);

(statearr_28927[(11)] = inst_28791);

(statearr_28927[(10)] = inst_28785__$1);

return statearr_28927;
})();
var statearr_28928_29011 = state_28922__$1;
(statearr_28928_29011[(2)] = null);

(statearr_28928_29011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (20))){
var inst_28825 = (state_28922[(12)]);
var inst_28833 = figwheel.client.file_reloading.sort_files.call(null,inst_28825);
var state_28922__$1 = state_28922;
var statearr_28929_29012 = state_28922__$1;
(statearr_28929_29012[(2)] = inst_28833);

(statearr_28929_29012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (27))){
var state_28922__$1 = state_28922;
var statearr_28930_29013 = state_28922__$1;
(statearr_28930_29013[(2)] = null);

(statearr_28930_29013[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (1))){
var inst_28774 = (state_28922[(13)]);
var inst_28771 = before_jsload.call(null,files);
var inst_28772 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28773 = (function (){return ((function (inst_28774,inst_28771,inst_28772,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28762_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28762_SHARP_);
});
;})(inst_28774,inst_28771,inst_28772,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28774__$1 = cljs.core.filter.call(null,inst_28773,files);
var inst_28775 = cljs.core.not_empty.call(null,inst_28774__$1);
var state_28922__$1 = (function (){var statearr_28931 = state_28922;
(statearr_28931[(14)] = inst_28771);

(statearr_28931[(13)] = inst_28774__$1);

(statearr_28931[(15)] = inst_28772);

return statearr_28931;
})();
if(cljs.core.truth_(inst_28775)){
var statearr_28932_29014 = state_28922__$1;
(statearr_28932_29014[(1)] = (2));

} else {
var statearr_28933_29015 = state_28922__$1;
(statearr_28933_29015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (24))){
var state_28922__$1 = state_28922;
var statearr_28934_29016 = state_28922__$1;
(statearr_28934_29016[(2)] = null);

(statearr_28934_29016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (39))){
var inst_28875 = (state_28922[(16)]);
var state_28922__$1 = state_28922;
var statearr_28935_29017 = state_28922__$1;
(statearr_28935_29017[(2)] = inst_28875);

(statearr_28935_29017[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (46))){
var inst_28917 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28936_29018 = state_28922__$1;
(statearr_28936_29018[(2)] = inst_28917);

(statearr_28936_29018[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (4))){
var inst_28819 = (state_28922[(2)]);
var inst_28820 = cljs.core.List.EMPTY;
var inst_28821 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28820);
var inst_28822 = (function (){return ((function (inst_28819,inst_28820,inst_28821,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28763_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28763_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28763_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28763_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28819,inst_28820,inst_28821,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28823 = cljs.core.filter.call(null,inst_28822,files);
var inst_28824 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28825 = cljs.core.concat.call(null,inst_28823,inst_28824);
var state_28922__$1 = (function (){var statearr_28937 = state_28922;
(statearr_28937[(12)] = inst_28825);

(statearr_28937[(17)] = inst_28819);

(statearr_28937[(18)] = inst_28821);

return statearr_28937;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28938_29019 = state_28922__$1;
(statearr_28938_29019[(1)] = (16));

} else {
var statearr_28939_29020 = state_28922__$1;
(statearr_28939_29020[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (15))){
var inst_28809 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28940_29021 = state_28922__$1;
(statearr_28940_29021[(2)] = inst_28809);

(statearr_28940_29021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (21))){
var inst_28835 = (state_28922[(19)]);
var inst_28835__$1 = (state_28922[(2)]);
var inst_28836 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28835__$1);
var state_28922__$1 = (function (){var statearr_28941 = state_28922;
(statearr_28941[(19)] = inst_28835__$1);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(22),inst_28836);
} else {
if((state_val_28923 === (31))){
var inst_28920 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28922__$1,inst_28920);
} else {
if((state_val_28923 === (32))){
var inst_28875 = (state_28922[(16)]);
var inst_28880 = inst_28875.cljs$lang$protocol_mask$partition0$;
var inst_28881 = (inst_28880 & (64));
var inst_28882 = inst_28875.cljs$core$ISeq$;
var inst_28883 = (cljs.core.PROTOCOL_SENTINEL === inst_28882);
var inst_28884 = ((inst_28881) || (inst_28883));
var state_28922__$1 = state_28922;
if(cljs.core.truth_(inst_28884)){
var statearr_28942_29022 = state_28922__$1;
(statearr_28942_29022[(1)] = (35));

} else {
var statearr_28943_29023 = state_28922__$1;
(statearr_28943_29023[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (40))){
var inst_28897 = (state_28922[(20)]);
var inst_28896 = (state_28922[(2)]);
var inst_28897__$1 = cljs.core.get.call(null,inst_28896,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28898 = cljs.core.get.call(null,inst_28896,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28899 = cljs.core.not_empty.call(null,inst_28897__$1);
var state_28922__$1 = (function (){var statearr_28944 = state_28922;
(statearr_28944[(20)] = inst_28897__$1);

(statearr_28944[(21)] = inst_28898);

return statearr_28944;
})();
if(cljs.core.truth_(inst_28899)){
var statearr_28945_29024 = state_28922__$1;
(statearr_28945_29024[(1)] = (41));

} else {
var statearr_28946_29025 = state_28922__$1;
(statearr_28946_29025[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (33))){
var state_28922__$1 = state_28922;
var statearr_28947_29026 = state_28922__$1;
(statearr_28947_29026[(2)] = false);

(statearr_28947_29026[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (13))){
var inst_28795 = (state_28922[(22)]);
var inst_28799 = cljs.core.chunk_first.call(null,inst_28795);
var inst_28800 = cljs.core.chunk_rest.call(null,inst_28795);
var inst_28801 = cljs.core.count.call(null,inst_28799);
var inst_28782 = inst_28800;
var inst_28783 = inst_28799;
var inst_28784 = inst_28801;
var inst_28785 = (0);
var state_28922__$1 = (function (){var statearr_28948 = state_28922;
(statearr_28948[(7)] = inst_28784);

(statearr_28948[(8)] = inst_28782);

(statearr_28948[(9)] = inst_28783);

(statearr_28948[(10)] = inst_28785);

return statearr_28948;
})();
var statearr_28949_29027 = state_28922__$1;
(statearr_28949_29027[(2)] = null);

(statearr_28949_29027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (22))){
var inst_28839 = (state_28922[(23)]);
var inst_28838 = (state_28922[(24)]);
var inst_28835 = (state_28922[(19)]);
var inst_28843 = (state_28922[(25)]);
var inst_28838__$1 = (state_28922[(2)]);
var inst_28839__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28838__$1);
var inst_28840 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838__$1;
var res = inst_28839__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28839,inst_28838,inst_28835,inst_28843,inst_28838__$1,inst_28839__$1,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28764_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28764_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28839,inst_28838,inst_28835,inst_28843,inst_28838__$1,inst_28839__$1,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28841 = cljs.core.filter.call(null,inst_28840,inst_28838__$1);
var inst_28842 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28843__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28842);
var inst_28844 = cljs.core.not_empty.call(null,inst_28843__$1);
var state_28922__$1 = (function (){var statearr_28950 = state_28922;
(statearr_28950[(23)] = inst_28839__$1);

(statearr_28950[(24)] = inst_28838__$1);

(statearr_28950[(26)] = inst_28841);

(statearr_28950[(25)] = inst_28843__$1);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28844)){
var statearr_28951_29028 = state_28922__$1;
(statearr_28951_29028[(1)] = (23));

} else {
var statearr_28952_29029 = state_28922__$1;
(statearr_28952_29029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (36))){
var state_28922__$1 = state_28922;
var statearr_28953_29030 = state_28922__$1;
(statearr_28953_29030[(2)] = false);

(statearr_28953_29030[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (41))){
var inst_28897 = (state_28922[(20)]);
var inst_28901 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28902 = cljs.core.map.call(null,inst_28901,inst_28897);
var inst_28903 = cljs.core.pr_str.call(null,inst_28902);
var inst_28904 = ["figwheel-no-load meta-data: ",inst_28903].join('');
var inst_28905 = figwheel.client.utils.log.call(null,inst_28904);
var state_28922__$1 = state_28922;
var statearr_28954_29031 = state_28922__$1;
(statearr_28954_29031[(2)] = inst_28905);

(statearr_28954_29031[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (43))){
var inst_28898 = (state_28922[(21)]);
var inst_28908 = (state_28922[(2)]);
var inst_28909 = cljs.core.not_empty.call(null,inst_28898);
var state_28922__$1 = (function (){var statearr_28955 = state_28922;
(statearr_28955[(27)] = inst_28908);

return statearr_28955;
})();
if(cljs.core.truth_(inst_28909)){
var statearr_28956_29032 = state_28922__$1;
(statearr_28956_29032[(1)] = (44));

} else {
var statearr_28957_29033 = state_28922__$1;
(statearr_28957_29033[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (29))){
var inst_28839 = (state_28922[(23)]);
var inst_28838 = (state_28922[(24)]);
var inst_28835 = (state_28922[(19)]);
var inst_28841 = (state_28922[(26)]);
var inst_28875 = (state_28922[(16)]);
var inst_28843 = (state_28922[(25)]);
var inst_28871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28874 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838;
var res = inst_28839;
var files_not_loaded = inst_28841;
var dependencies_that_loaded = inst_28843;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28839,inst_28838,inst_28835,inst_28841,inst_28875,inst_28843,inst_28871,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28873){
var map__28958 = p__28873;
var map__28958__$1 = (((((!((map__28958 == null))))?(((((map__28958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28958):map__28958);
var namespace = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28839,inst_28838,inst_28835,inst_28841,inst_28875,inst_28843,inst_28871,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28875__$1 = cljs.core.group_by.call(null,inst_28874,inst_28841);
var inst_28877 = (inst_28875__$1 == null);
var inst_28878 = cljs.core.not.call(null,inst_28877);
var state_28922__$1 = (function (){var statearr_28960 = state_28922;
(statearr_28960[(28)] = inst_28871);

(statearr_28960[(16)] = inst_28875__$1);

return statearr_28960;
})();
if(inst_28878){
var statearr_28961_29034 = state_28922__$1;
(statearr_28961_29034[(1)] = (32));

} else {
var statearr_28962_29035 = state_28922__$1;
(statearr_28962_29035[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (44))){
var inst_28898 = (state_28922[(21)]);
var inst_28911 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28898);
var inst_28912 = cljs.core.pr_str.call(null,inst_28911);
var inst_28913 = ["not required: ",inst_28912].join('');
var inst_28914 = figwheel.client.utils.log.call(null,inst_28913);
var state_28922__$1 = state_28922;
var statearr_28963_29036 = state_28922__$1;
(statearr_28963_29036[(2)] = inst_28914);

(statearr_28963_29036[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (6))){
var inst_28816 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28964_29037 = state_28922__$1;
(statearr_28964_29037[(2)] = inst_28816);

(statearr_28964_29037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (28))){
var inst_28841 = (state_28922[(26)]);
var inst_28868 = (state_28922[(2)]);
var inst_28869 = cljs.core.not_empty.call(null,inst_28841);
var state_28922__$1 = (function (){var statearr_28965 = state_28922;
(statearr_28965[(29)] = inst_28868);

return statearr_28965;
})();
if(cljs.core.truth_(inst_28869)){
var statearr_28966_29038 = state_28922__$1;
(statearr_28966_29038[(1)] = (29));

} else {
var statearr_28967_29039 = state_28922__$1;
(statearr_28967_29039[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (25))){
var inst_28839 = (state_28922[(23)]);
var inst_28855 = (state_28922[(2)]);
var inst_28856 = cljs.core.not_empty.call(null,inst_28839);
var state_28922__$1 = (function (){var statearr_28968 = state_28922;
(statearr_28968[(30)] = inst_28855);

return statearr_28968;
})();
if(cljs.core.truth_(inst_28856)){
var statearr_28969_29040 = state_28922__$1;
(statearr_28969_29040[(1)] = (26));

} else {
var statearr_28970_29041 = state_28922__$1;
(statearr_28970_29041[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (34))){
var inst_28891 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
if(cljs.core.truth_(inst_28891)){
var statearr_28971_29042 = state_28922__$1;
(statearr_28971_29042[(1)] = (38));

} else {
var statearr_28972_29043 = state_28922__$1;
(statearr_28972_29043[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (17))){
var state_28922__$1 = state_28922;
var statearr_28973_29044 = state_28922__$1;
(statearr_28973_29044[(2)] = recompile_dependents);

(statearr_28973_29044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (3))){
var state_28922__$1 = state_28922;
var statearr_28974_29045 = state_28922__$1;
(statearr_28974_29045[(2)] = null);

(statearr_28974_29045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (12))){
var inst_28812 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28975_29046 = state_28922__$1;
(statearr_28975_29046[(2)] = inst_28812);

(statearr_28975_29046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (2))){
var inst_28774 = (state_28922[(13)]);
var inst_28781 = cljs.core.seq.call(null,inst_28774);
var inst_28782 = inst_28781;
var inst_28783 = null;
var inst_28784 = (0);
var inst_28785 = (0);
var state_28922__$1 = (function (){var statearr_28976 = state_28922;
(statearr_28976[(7)] = inst_28784);

(statearr_28976[(8)] = inst_28782);

(statearr_28976[(9)] = inst_28783);

(statearr_28976[(10)] = inst_28785);

return statearr_28976;
})();
var statearr_28977_29047 = state_28922__$1;
(statearr_28977_29047[(2)] = null);

(statearr_28977_29047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (23))){
var inst_28839 = (state_28922[(23)]);
var inst_28838 = (state_28922[(24)]);
var inst_28835 = (state_28922[(19)]);
var inst_28841 = (state_28922[(26)]);
var inst_28843 = (state_28922[(25)]);
var inst_28846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28848 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838;
var res = inst_28839;
var files_not_loaded = inst_28841;
var dependencies_that_loaded = inst_28843;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28839,inst_28838,inst_28835,inst_28841,inst_28843,inst_28846,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28847){
var map__28978 = p__28847;
var map__28978__$1 = (((((!((map__28978 == null))))?(((((map__28978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28978):map__28978);
var request_url = cljs.core.get.call(null,map__28978__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28839,inst_28838,inst_28835,inst_28841,inst_28843,inst_28846,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28849 = cljs.core.reverse.call(null,inst_28843);
var inst_28850 = cljs.core.map.call(null,inst_28848,inst_28849);
var inst_28851 = cljs.core.pr_str.call(null,inst_28850);
var inst_28852 = figwheel.client.utils.log.call(null,inst_28851);
var state_28922__$1 = (function (){var statearr_28980 = state_28922;
(statearr_28980[(31)] = inst_28846);

return statearr_28980;
})();
var statearr_28981_29048 = state_28922__$1;
(statearr_28981_29048[(2)] = inst_28852);

(statearr_28981_29048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (35))){
var state_28922__$1 = state_28922;
var statearr_28982_29049 = state_28922__$1;
(statearr_28982_29049[(2)] = true);

(statearr_28982_29049[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (19))){
var inst_28825 = (state_28922[(12)]);
var inst_28831 = figwheel.client.file_reloading.expand_files.call(null,inst_28825);
var state_28922__$1 = state_28922;
var statearr_28983_29050 = state_28922__$1;
(statearr_28983_29050[(2)] = inst_28831);

(statearr_28983_29050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (11))){
var state_28922__$1 = state_28922;
var statearr_28984_29051 = state_28922__$1;
(statearr_28984_29051[(2)] = null);

(statearr_28984_29051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (9))){
var inst_28814 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28985_29052 = state_28922__$1;
(statearr_28985_29052[(2)] = inst_28814);

(statearr_28985_29052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (5))){
var inst_28784 = (state_28922[(7)]);
var inst_28785 = (state_28922[(10)]);
var inst_28787 = (inst_28785 < inst_28784);
var inst_28788 = inst_28787;
var state_28922__$1 = state_28922;
if(cljs.core.truth_(inst_28788)){
var statearr_28986_29053 = state_28922__$1;
(statearr_28986_29053[(1)] = (7));

} else {
var statearr_28987_29054 = state_28922__$1;
(statearr_28987_29054[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (14))){
var inst_28795 = (state_28922[(22)]);
var inst_28804 = cljs.core.first.call(null,inst_28795);
var inst_28805 = figwheel.client.file_reloading.eval_body.call(null,inst_28804,opts);
var inst_28806 = cljs.core.next.call(null,inst_28795);
var inst_28782 = inst_28806;
var inst_28783 = null;
var inst_28784 = (0);
var inst_28785 = (0);
var state_28922__$1 = (function (){var statearr_28988 = state_28922;
(statearr_28988[(7)] = inst_28784);

(statearr_28988[(8)] = inst_28782);

(statearr_28988[(32)] = inst_28805);

(statearr_28988[(9)] = inst_28783);

(statearr_28988[(10)] = inst_28785);

return statearr_28988;
})();
var statearr_28989_29055 = state_28922__$1;
(statearr_28989_29055[(2)] = null);

(statearr_28989_29055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (45))){
var state_28922__$1 = state_28922;
var statearr_28990_29056 = state_28922__$1;
(statearr_28990_29056[(2)] = null);

(statearr_28990_29056[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (26))){
var inst_28839 = (state_28922[(23)]);
var inst_28838 = (state_28922[(24)]);
var inst_28835 = (state_28922[(19)]);
var inst_28841 = (state_28922[(26)]);
var inst_28843 = (state_28922[(25)]);
var inst_28858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28860 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838;
var res = inst_28839;
var files_not_loaded = inst_28841;
var dependencies_that_loaded = inst_28843;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28839,inst_28838,inst_28835,inst_28841,inst_28843,inst_28858,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28859){
var map__28991 = p__28859;
var map__28991__$1 = (((((!((map__28991 == null))))?(((((map__28991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);
var namespace = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28839,inst_28838,inst_28835,inst_28841,inst_28843,inst_28858,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28861 = cljs.core.map.call(null,inst_28860,inst_28839);
var inst_28862 = cljs.core.pr_str.call(null,inst_28861);
var inst_28863 = figwheel.client.utils.log.call(null,inst_28862);
var inst_28864 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838;
var res = inst_28839;
var files_not_loaded = inst_28841;
var dependencies_that_loaded = inst_28843;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28839,inst_28838,inst_28835,inst_28841,inst_28843,inst_28858,inst_28860,inst_28861,inst_28862,inst_28863,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28839,inst_28838,inst_28835,inst_28841,inst_28843,inst_28858,inst_28860,inst_28861,inst_28862,inst_28863,state_val_28923,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28865 = setTimeout(inst_28864,(10));
var state_28922__$1 = (function (){var statearr_28993 = state_28922;
(statearr_28993[(33)] = inst_28863);

(statearr_28993[(34)] = inst_28858);

return statearr_28993;
})();
var statearr_28994_29057 = state_28922__$1;
(statearr_28994_29057[(2)] = inst_28865);

(statearr_28994_29057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (16))){
var state_28922__$1 = state_28922;
var statearr_28995_29058 = state_28922__$1;
(statearr_28995_29058[(2)] = reload_dependents);

(statearr_28995_29058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (38))){
var inst_28875 = (state_28922[(16)]);
var inst_28893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28875);
var state_28922__$1 = state_28922;
var statearr_28996_29059 = state_28922__$1;
(statearr_28996_29059[(2)] = inst_28893);

(statearr_28996_29059[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (30))){
var state_28922__$1 = state_28922;
var statearr_28997_29060 = state_28922__$1;
(statearr_28997_29060[(2)] = null);

(statearr_28997_29060[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (10))){
var inst_28795 = (state_28922[(22)]);
var inst_28797 = cljs.core.chunked_seq_QMARK_.call(null,inst_28795);
var state_28922__$1 = state_28922;
if(inst_28797){
var statearr_28998_29061 = state_28922__$1;
(statearr_28998_29061[(1)] = (13));

} else {
var statearr_28999_29062 = state_28922__$1;
(statearr_28999_29062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (18))){
var inst_28829 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
if(cljs.core.truth_(inst_28829)){
var statearr_29000_29063 = state_28922__$1;
(statearr_29000_29063[(1)] = (19));

} else {
var statearr_29001_29064 = state_28922__$1;
(statearr_29001_29064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (42))){
var state_28922__$1 = state_28922;
var statearr_29002_29065 = state_28922__$1;
(statearr_29002_29065[(2)] = null);

(statearr_29002_29065[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (37))){
var inst_28888 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_29003_29066 = state_28922__$1;
(statearr_29003_29066[(2)] = inst_28888);

(statearr_29003_29066[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (8))){
var inst_28782 = (state_28922[(8)]);
var inst_28795 = (state_28922[(22)]);
var inst_28795__$1 = cljs.core.seq.call(null,inst_28782);
var state_28922__$1 = (function (){var statearr_29004 = state_28922;
(statearr_29004[(22)] = inst_28795__$1);

return statearr_29004;
})();
if(inst_28795__$1){
var statearr_29005_29067 = state_28922__$1;
(statearr_29005_29067[(1)] = (10));

} else {
var statearr_29006_29068 = state_28922__$1;
(statearr_29006_29068[(1)] = (11));

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
});})(c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26206__auto__,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto____0 = (function (){
var statearr_29007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29007[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto__);

(statearr_29007[(1)] = (1));

return statearr_29007;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto____1 = (function (state_28922){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_28922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e29008){if((e29008 instanceof Object)){
var ex__26210__auto__ = e29008;
var statearr_29009_29069 = state_28922;
(statearr_29009_29069[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29070 = state_28922;
state_28922 = G__29070;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto__ = function(state_28922){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto____1.call(this,state_28922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26303__auto__ = (function (){var statearr_29010 = f__26302__auto__.call(null);
(statearr_29010[(6)] = c__26301__auto__);

return statearr_29010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__,map__28767,map__28767__$1,opts,before_jsload,on_jsload,reload_dependents,map__28768,map__28768__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26301__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29073,link){
var map__29074 = p__29073;
var map__29074__$1 = (((((!((map__29074 == null))))?(((((map__29074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29074):map__29074);
var file = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29074,map__29074__$1,file){
return (function (p1__29071_SHARP_,p2__29072_SHARP_){
if(cljs.core._EQ_.call(null,p1__29071_SHARP_,p2__29072_SHARP_)){
return p1__29071_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29074,map__29074__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29077){
var map__29078 = p__29077;
var map__29078__$1 = (((((!((map__29078 == null))))?(((((map__29078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29078):map__29078);
var match_length = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29076_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29076_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29080_SHARP_,p2__29081_SHARP_){
return cljs.core.assoc.call(null,p1__29080_SHARP_,cljs.core.get.call(null,p2__29081_SHARP_,key),p2__29081_SHARP_);
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
var loaded_f_datas_29082 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29082);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29082);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29083,p__29084){
var map__29085 = p__29083;
var map__29085__$1 = (((((!((map__29085 == null))))?(((((map__29085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29085):map__29085);
var on_cssload = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29086 = p__29084;
var map__29086__$1 = (((((!((map__29086 == null))))?(((((map__29086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29086):map__29086);
var files_msg = map__29086__$1;
var files = cljs.core.get.call(null,map__29086__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1581970847088
