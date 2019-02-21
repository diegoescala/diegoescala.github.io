// Compiled by ClojureScript 1.10.238 {}
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
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
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
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
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
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29262_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29262_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
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
var seq__29263 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29264 = null;
var count__29265 = (0);
var i__29266 = (0);
while(true){
if((i__29266 < count__29265)){
var n = cljs.core._nth.call(null,chunk__29264,i__29266);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29267 = seq__29263;
var G__29268 = chunk__29264;
var G__29269 = count__29265;
var G__29270 = (i__29266 + (1));
seq__29263 = G__29267;
chunk__29264 = G__29268;
count__29265 = G__29269;
i__29266 = G__29270;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29263);
if(temp__5457__auto__){
var seq__29263__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29263__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29263__$1);
var G__29271 = cljs.core.chunk_rest.call(null,seq__29263__$1);
var G__29272 = c__4319__auto__;
var G__29273 = cljs.core.count.call(null,c__4319__auto__);
var G__29274 = (0);
seq__29263 = G__29271;
chunk__29264 = G__29272;
count__29265 = G__29273;
i__29266 = G__29274;
continue;
} else {
var n = cljs.core.first.call(null,seq__29263__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29275 = cljs.core.next.call(null,seq__29263__$1);
var G__29276 = null;
var G__29277 = (0);
var G__29278 = (0);
seq__29263 = G__29275;
chunk__29264 = G__29276;
count__29265 = G__29277;
i__29266 = G__29278;
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
return cljs.core.some.call(null,(function (p__29279){
var vec__29280 = p__29279;
var _ = cljs.core.nth.call(null,vec__29280,(0),null);
var v = cljs.core.nth.call(null,vec__29280,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29283){
var vec__29284 = p__29283;
var k = cljs.core.nth.call(null,vec__29284,(0),null);
var v = cljs.core.nth.call(null,vec__29284,(1),null);
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

var seq__29296_29304 = cljs.core.seq.call(null,deps);
var chunk__29297_29305 = null;
var count__29298_29306 = (0);
var i__29299_29307 = (0);
while(true){
if((i__29299_29307 < count__29298_29306)){
var dep_29308 = cljs.core._nth.call(null,chunk__29297_29305,i__29299_29307);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29308;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29308));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29308,(depth + (1)),state);
} else {
}


var G__29309 = seq__29296_29304;
var G__29310 = chunk__29297_29305;
var G__29311 = count__29298_29306;
var G__29312 = (i__29299_29307 + (1));
seq__29296_29304 = G__29309;
chunk__29297_29305 = G__29310;
count__29298_29306 = G__29311;
i__29299_29307 = G__29312;
continue;
} else {
var temp__5457__auto___29313 = cljs.core.seq.call(null,seq__29296_29304);
if(temp__5457__auto___29313){
var seq__29296_29314__$1 = temp__5457__auto___29313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29296_29314__$1)){
var c__4319__auto___29315 = cljs.core.chunk_first.call(null,seq__29296_29314__$1);
var G__29316 = cljs.core.chunk_rest.call(null,seq__29296_29314__$1);
var G__29317 = c__4319__auto___29315;
var G__29318 = cljs.core.count.call(null,c__4319__auto___29315);
var G__29319 = (0);
seq__29296_29304 = G__29316;
chunk__29297_29305 = G__29317;
count__29298_29306 = G__29318;
i__29299_29307 = G__29319;
continue;
} else {
var dep_29320 = cljs.core.first.call(null,seq__29296_29314__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29320;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29320));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29320,(depth + (1)),state);
} else {
}


var G__29321 = cljs.core.next.call(null,seq__29296_29314__$1);
var G__29322 = null;
var G__29323 = (0);
var G__29324 = (0);
seq__29296_29304 = G__29321;
chunk__29297_29305 = G__29322;
count__29298_29306 = G__29323;
i__29299_29307 = G__29324;
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
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29300){
var vec__29301 = p__29300;
var seq__29302 = cljs.core.seq.call(null,vec__29301);
var first__29303 = cljs.core.first.call(null,seq__29302);
var seq__29302__$1 = cljs.core.next.call(null,seq__29302);
var x = first__29303;
var xs = seq__29302__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29301,seq__29302,first__29303,seq__29302__$1,x,xs,get_deps__$1){
return (function (p1__29287_SHARP_){
return clojure.set.difference.call(null,p1__29287_SHARP_,x);
});})(vec__29301,seq__29302,first__29303,seq__29302__$1,x,xs,get_deps__$1))
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
var seq__29325 = cljs.core.seq.call(null,provides);
var chunk__29326 = null;
var count__29327 = (0);
var i__29328 = (0);
while(true){
if((i__29328 < count__29327)){
var prov = cljs.core._nth.call(null,chunk__29326,i__29328);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29329_29337 = cljs.core.seq.call(null,requires);
var chunk__29330_29338 = null;
var count__29331_29339 = (0);
var i__29332_29340 = (0);
while(true){
if((i__29332_29340 < count__29331_29339)){
var req_29341 = cljs.core._nth.call(null,chunk__29330_29338,i__29332_29340);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29341,prov);


var G__29342 = seq__29329_29337;
var G__29343 = chunk__29330_29338;
var G__29344 = count__29331_29339;
var G__29345 = (i__29332_29340 + (1));
seq__29329_29337 = G__29342;
chunk__29330_29338 = G__29343;
count__29331_29339 = G__29344;
i__29332_29340 = G__29345;
continue;
} else {
var temp__5457__auto___29346 = cljs.core.seq.call(null,seq__29329_29337);
if(temp__5457__auto___29346){
var seq__29329_29347__$1 = temp__5457__auto___29346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29329_29347__$1)){
var c__4319__auto___29348 = cljs.core.chunk_first.call(null,seq__29329_29347__$1);
var G__29349 = cljs.core.chunk_rest.call(null,seq__29329_29347__$1);
var G__29350 = c__4319__auto___29348;
var G__29351 = cljs.core.count.call(null,c__4319__auto___29348);
var G__29352 = (0);
seq__29329_29337 = G__29349;
chunk__29330_29338 = G__29350;
count__29331_29339 = G__29351;
i__29332_29340 = G__29352;
continue;
} else {
var req_29353 = cljs.core.first.call(null,seq__29329_29347__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29353,prov);


var G__29354 = cljs.core.next.call(null,seq__29329_29347__$1);
var G__29355 = null;
var G__29356 = (0);
var G__29357 = (0);
seq__29329_29337 = G__29354;
chunk__29330_29338 = G__29355;
count__29331_29339 = G__29356;
i__29332_29340 = G__29357;
continue;
}
} else {
}
}
break;
}


var G__29358 = seq__29325;
var G__29359 = chunk__29326;
var G__29360 = count__29327;
var G__29361 = (i__29328 + (1));
seq__29325 = G__29358;
chunk__29326 = G__29359;
count__29327 = G__29360;
i__29328 = G__29361;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29325);
if(temp__5457__auto__){
var seq__29325__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29325__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29325__$1);
var G__29362 = cljs.core.chunk_rest.call(null,seq__29325__$1);
var G__29363 = c__4319__auto__;
var G__29364 = cljs.core.count.call(null,c__4319__auto__);
var G__29365 = (0);
seq__29325 = G__29362;
chunk__29326 = G__29363;
count__29327 = G__29364;
i__29328 = G__29365;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29325__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29333_29366 = cljs.core.seq.call(null,requires);
var chunk__29334_29367 = null;
var count__29335_29368 = (0);
var i__29336_29369 = (0);
while(true){
if((i__29336_29369 < count__29335_29368)){
var req_29370 = cljs.core._nth.call(null,chunk__29334_29367,i__29336_29369);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29370,prov);


var G__29371 = seq__29333_29366;
var G__29372 = chunk__29334_29367;
var G__29373 = count__29335_29368;
var G__29374 = (i__29336_29369 + (1));
seq__29333_29366 = G__29371;
chunk__29334_29367 = G__29372;
count__29335_29368 = G__29373;
i__29336_29369 = G__29374;
continue;
} else {
var temp__5457__auto___29375__$1 = cljs.core.seq.call(null,seq__29333_29366);
if(temp__5457__auto___29375__$1){
var seq__29333_29376__$1 = temp__5457__auto___29375__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29333_29376__$1)){
var c__4319__auto___29377 = cljs.core.chunk_first.call(null,seq__29333_29376__$1);
var G__29378 = cljs.core.chunk_rest.call(null,seq__29333_29376__$1);
var G__29379 = c__4319__auto___29377;
var G__29380 = cljs.core.count.call(null,c__4319__auto___29377);
var G__29381 = (0);
seq__29333_29366 = G__29378;
chunk__29334_29367 = G__29379;
count__29335_29368 = G__29380;
i__29336_29369 = G__29381;
continue;
} else {
var req_29382 = cljs.core.first.call(null,seq__29333_29376__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29382,prov);


var G__29383 = cljs.core.next.call(null,seq__29333_29376__$1);
var G__29384 = null;
var G__29385 = (0);
var G__29386 = (0);
seq__29333_29366 = G__29383;
chunk__29334_29367 = G__29384;
count__29335_29368 = G__29385;
i__29336_29369 = G__29386;
continue;
}
} else {
}
}
break;
}


var G__29387 = cljs.core.next.call(null,seq__29325__$1);
var G__29388 = null;
var G__29389 = (0);
var G__29390 = (0);
seq__29325 = G__29387;
chunk__29326 = G__29388;
count__29327 = G__29389;
i__29328 = G__29390;
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
var seq__29391_29395 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29392_29396 = null;
var count__29393_29397 = (0);
var i__29394_29398 = (0);
while(true){
if((i__29394_29398 < count__29393_29397)){
var ns_29399 = cljs.core._nth.call(null,chunk__29392_29396,i__29394_29398);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29399);


var G__29400 = seq__29391_29395;
var G__29401 = chunk__29392_29396;
var G__29402 = count__29393_29397;
var G__29403 = (i__29394_29398 + (1));
seq__29391_29395 = G__29400;
chunk__29392_29396 = G__29401;
count__29393_29397 = G__29402;
i__29394_29398 = G__29403;
continue;
} else {
var temp__5457__auto___29404 = cljs.core.seq.call(null,seq__29391_29395);
if(temp__5457__auto___29404){
var seq__29391_29405__$1 = temp__5457__auto___29404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29391_29405__$1)){
var c__4319__auto___29406 = cljs.core.chunk_first.call(null,seq__29391_29405__$1);
var G__29407 = cljs.core.chunk_rest.call(null,seq__29391_29405__$1);
var G__29408 = c__4319__auto___29406;
var G__29409 = cljs.core.count.call(null,c__4319__auto___29406);
var G__29410 = (0);
seq__29391_29395 = G__29407;
chunk__29392_29396 = G__29408;
count__29393_29397 = G__29409;
i__29394_29398 = G__29410;
continue;
} else {
var ns_29411 = cljs.core.first.call(null,seq__29391_29405__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29411);


var G__29412 = cljs.core.next.call(null,seq__29391_29405__$1);
var G__29413 = null;
var G__29414 = (0);
var G__29415 = (0);
seq__29391_29395 = G__29412;
chunk__29392_29396 = G__29413;
count__29393_29397 = G__29414;
i__29394_29398 = G__29415;
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
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var G__29416__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29417__i = 0, G__29417__a = new Array(arguments.length -  0);
while (G__29417__i < G__29417__a.length) {G__29417__a[G__29417__i] = arguments[G__29417__i + 0]; ++G__29417__i;}
  args = new cljs.core.IndexedSeq(G__29417__a,0,null);
} 
return G__29416__delegate.call(this,args);};
G__29416.cljs$lang$maxFixedArity = 0;
G__29416.cljs$lang$applyTo = (function (arglist__29418){
var args = cljs.core.seq(arglist__29418);
return G__29416__delegate(args);
});
G__29416.cljs$core$IFn$_invoke$arity$variadic = G__29416__delegate;
return G__29416;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29419_SHARP_,p2__29420_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29419_SHARP_)].join('')),p2__29420_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29421_SHARP_,p2__29422_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29421_SHARP_)].join(''),p2__29422_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29423 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29423.addCallback(((function (G__29423){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29423))
);

G__29423.addErrback(((function (G__29423){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29423))
);

return G__29423;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29424){if((e29424 instanceof Error)){
var e = e29424;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29424;

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
}catch (e29425){if((e29425 instanceof Error)){
var e = e29425;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29425;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29426 = cljs.core._EQ_;
var expr__29427 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29426.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29427))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29426.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29427))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29426.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29427))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29426,expr__29427){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29426,expr__29427))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29429,callback){
var map__29430 = p__29429;
var map__29430__$1 = ((((!((map__29430 == null)))?(((((map__29430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29430):map__29430);
var file_msg = map__29430__$1;
var request_url = cljs.core.get.call(null,map__29430__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29430,map__29430__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29430,map__29430__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
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
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__){
return (function (state_29468){
var state_val_29469 = (state_29468[(1)]);
if((state_val_29469 === (7))){
var inst_29464 = (state_29468[(2)]);
var state_29468__$1 = state_29468;
var statearr_29470_29496 = state_29468__$1;
(statearr_29470_29496[(2)] = inst_29464);

(statearr_29470_29496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (1))){
var state_29468__$1 = state_29468;
var statearr_29471_29497 = state_29468__$1;
(statearr_29471_29497[(2)] = null);

(statearr_29471_29497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (4))){
var inst_29434 = (state_29468[(7)]);
var inst_29434__$1 = (state_29468[(2)]);
var state_29468__$1 = (function (){var statearr_29472 = state_29468;
(statearr_29472[(7)] = inst_29434__$1);

return statearr_29472;
})();
if(cljs.core.truth_(inst_29434__$1)){
var statearr_29473_29498 = state_29468__$1;
(statearr_29473_29498[(1)] = (5));

} else {
var statearr_29474_29499 = state_29468__$1;
(statearr_29474_29499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (15))){
var inst_29449 = (state_29468[(8)]);
var inst_29447 = (state_29468[(9)]);
var inst_29451 = inst_29449.call(null,inst_29447);
var state_29468__$1 = state_29468;
var statearr_29475_29500 = state_29468__$1;
(statearr_29475_29500[(2)] = inst_29451);

(statearr_29475_29500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (13))){
var inst_29458 = (state_29468[(2)]);
var state_29468__$1 = state_29468;
var statearr_29476_29501 = state_29468__$1;
(statearr_29476_29501[(2)] = inst_29458);

(statearr_29476_29501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (6))){
var state_29468__$1 = state_29468;
var statearr_29477_29502 = state_29468__$1;
(statearr_29477_29502[(2)] = null);

(statearr_29477_29502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (17))){
var inst_29455 = (state_29468[(2)]);
var state_29468__$1 = state_29468;
var statearr_29478_29503 = state_29468__$1;
(statearr_29478_29503[(2)] = inst_29455);

(statearr_29478_29503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (3))){
var inst_29466 = (state_29468[(2)]);
var state_29468__$1 = state_29468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29468__$1,inst_29466);
} else {
if((state_val_29469 === (12))){
var state_29468__$1 = state_29468;
var statearr_29479_29504 = state_29468__$1;
(statearr_29479_29504[(2)] = null);

(statearr_29479_29504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (2))){
var state_29468__$1 = state_29468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29468__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29469 === (11))){
var inst_29439 = (state_29468[(10)]);
var inst_29445 = figwheel.client.file_reloading.blocking_load.call(null,inst_29439);
var state_29468__$1 = state_29468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29468__$1,(14),inst_29445);
} else {
if((state_val_29469 === (9))){
var inst_29439 = (state_29468[(10)]);
var state_29468__$1 = state_29468;
if(cljs.core.truth_(inst_29439)){
var statearr_29480_29505 = state_29468__$1;
(statearr_29480_29505[(1)] = (11));

} else {
var statearr_29481_29506 = state_29468__$1;
(statearr_29481_29506[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (5))){
var inst_29434 = (state_29468[(7)]);
var inst_29440 = (state_29468[(11)]);
var inst_29439 = cljs.core.nth.call(null,inst_29434,(0),null);
var inst_29440__$1 = cljs.core.nth.call(null,inst_29434,(1),null);
var state_29468__$1 = (function (){var statearr_29482 = state_29468;
(statearr_29482[(10)] = inst_29439);

(statearr_29482[(11)] = inst_29440__$1);

return statearr_29482;
})();
if(cljs.core.truth_(inst_29440__$1)){
var statearr_29483_29507 = state_29468__$1;
(statearr_29483_29507[(1)] = (8));

} else {
var statearr_29484_29508 = state_29468__$1;
(statearr_29484_29508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (14))){
var inst_29449 = (state_29468[(8)]);
var inst_29439 = (state_29468[(10)]);
var inst_29447 = (state_29468[(2)]);
var inst_29448 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29449__$1 = cljs.core.get.call(null,inst_29448,inst_29439);
var state_29468__$1 = (function (){var statearr_29485 = state_29468;
(statearr_29485[(8)] = inst_29449__$1);

(statearr_29485[(9)] = inst_29447);

return statearr_29485;
})();
if(cljs.core.truth_(inst_29449__$1)){
var statearr_29486_29509 = state_29468__$1;
(statearr_29486_29509[(1)] = (15));

} else {
var statearr_29487_29510 = state_29468__$1;
(statearr_29487_29510[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (16))){
var inst_29447 = (state_29468[(9)]);
var inst_29453 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29447);
var state_29468__$1 = state_29468;
var statearr_29488_29511 = state_29468__$1;
(statearr_29488_29511[(2)] = inst_29453);

(statearr_29488_29511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (10))){
var inst_29460 = (state_29468[(2)]);
var state_29468__$1 = (function (){var statearr_29489 = state_29468;
(statearr_29489[(12)] = inst_29460);

return statearr_29489;
})();
var statearr_29490_29512 = state_29468__$1;
(statearr_29490_29512[(2)] = null);

(statearr_29490_29512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (8))){
var inst_29440 = (state_29468[(11)]);
var inst_29442 = eval(inst_29440);
var state_29468__$1 = state_29468;
var statearr_29491_29513 = state_29468__$1;
(statearr_29491_29513[(2)] = inst_29442);

(statearr_29491_29513[(1)] = (10));


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
});})(c__26483__auto__))
;
return ((function (switch__26460__auto__,c__26483__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26461__auto__ = null;
var figwheel$client$file_reloading$state_machine__26461__auto____0 = (function (){
var statearr_29492 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29492[(0)] = figwheel$client$file_reloading$state_machine__26461__auto__);

(statearr_29492[(1)] = (1));

return statearr_29492;
});
var figwheel$client$file_reloading$state_machine__26461__auto____1 = (function (state_29468){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_29468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e29493){if((e29493 instanceof Object)){
var ex__26464__auto__ = e29493;
var statearr_29494_29514 = state_29468;
(statearr_29494_29514[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29515 = state_29468;
state_29468 = G__29515;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26461__auto__ = function(state_29468){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26461__auto____1.call(this,state_29468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26461__auto____0;
figwheel$client$file_reloading$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26461__auto____1;
return figwheel$client$file_reloading$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__))
})();
var state__26485__auto__ = (function (){var statearr_29495 = f__26484__auto__.call(null);
(statearr_29495[(6)] = c__26483__auto__);

return statearr_29495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__))
);

return c__26483__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29517 = arguments.length;
switch (G__29517) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29519,callback){
var map__29520 = p__29519;
var map__29520__$1 = ((((!((map__29520 == null)))?(((((map__29520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29520):map__29520);
var file_msg = map__29520__$1;
var namespace = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29520,map__29520__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29520,map__29520__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29522){
var map__29523 = p__29522;
var map__29523__$1 = ((((!((map__29523 == null)))?(((((map__29523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29523):map__29523);
var file_msg = map__29523__$1;
var namespace = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29525){
var map__29526 = p__29525;
var map__29526__$1 = ((((!((map__29526 == null)))?(((((map__29526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29526):map__29526);
var file_msg = map__29526__$1;
var namespace = cljs.core.get.call(null,map__29526__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29528,callback){
var map__29529 = p__29528;
var map__29529__$1 = ((((!((map__29529 == null)))?(((((map__29529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29529):map__29529);
var file_msg = map__29529__$1;
var request_url = cljs.core.get.call(null,map__29529__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29529__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26483__auto___29579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___29579,out){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___29579,out){
return (function (state_29564){
var state_val_29565 = (state_29564[(1)]);
if((state_val_29565 === (1))){
var inst_29538 = cljs.core.seq.call(null,files);
var inst_29539 = cljs.core.first.call(null,inst_29538);
var inst_29540 = cljs.core.next.call(null,inst_29538);
var inst_29541 = files;
var state_29564__$1 = (function (){var statearr_29566 = state_29564;
(statearr_29566[(7)] = inst_29539);

(statearr_29566[(8)] = inst_29540);

(statearr_29566[(9)] = inst_29541);

return statearr_29566;
})();
var statearr_29567_29580 = state_29564__$1;
(statearr_29567_29580[(2)] = null);

(statearr_29567_29580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (2))){
var inst_29547 = (state_29564[(10)]);
var inst_29541 = (state_29564[(9)]);
var inst_29546 = cljs.core.seq.call(null,inst_29541);
var inst_29547__$1 = cljs.core.first.call(null,inst_29546);
var inst_29548 = cljs.core.next.call(null,inst_29546);
var inst_29549 = (inst_29547__$1 == null);
var inst_29550 = cljs.core.not.call(null,inst_29549);
var state_29564__$1 = (function (){var statearr_29568 = state_29564;
(statearr_29568[(10)] = inst_29547__$1);

(statearr_29568[(11)] = inst_29548);

return statearr_29568;
})();
if(inst_29550){
var statearr_29569_29581 = state_29564__$1;
(statearr_29569_29581[(1)] = (4));

} else {
var statearr_29570_29582 = state_29564__$1;
(statearr_29570_29582[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (3))){
var inst_29562 = (state_29564[(2)]);
var state_29564__$1 = state_29564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29564__$1,inst_29562);
} else {
if((state_val_29565 === (4))){
var inst_29547 = (state_29564[(10)]);
var inst_29552 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29547);
var state_29564__$1 = state_29564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29564__$1,(7),inst_29552);
} else {
if((state_val_29565 === (5))){
var inst_29558 = cljs.core.async.close_BANG_.call(null,out);
var state_29564__$1 = state_29564;
var statearr_29571_29583 = state_29564__$1;
(statearr_29571_29583[(2)] = inst_29558);

(statearr_29571_29583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (6))){
var inst_29560 = (state_29564[(2)]);
var state_29564__$1 = state_29564;
var statearr_29572_29584 = state_29564__$1;
(statearr_29572_29584[(2)] = inst_29560);

(statearr_29572_29584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29565 === (7))){
var inst_29548 = (state_29564[(11)]);
var inst_29554 = (state_29564[(2)]);
var inst_29555 = cljs.core.async.put_BANG_.call(null,out,inst_29554);
var inst_29541 = inst_29548;
var state_29564__$1 = (function (){var statearr_29573 = state_29564;
(statearr_29573[(9)] = inst_29541);

(statearr_29573[(12)] = inst_29555);

return statearr_29573;
})();
var statearr_29574_29585 = state_29564__$1;
(statearr_29574_29585[(2)] = null);

(statearr_29574_29585[(1)] = (2));


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
});})(c__26483__auto___29579,out))
;
return ((function (switch__26460__auto__,c__26483__auto___29579,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto____0 = (function (){
var statearr_29575 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29575[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto__);

(statearr_29575[(1)] = (1));

return statearr_29575;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto____1 = (function (state_29564){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_29564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e29576){if((e29576 instanceof Object)){
var ex__26464__auto__ = e29576;
var statearr_29577_29586 = state_29564;
(statearr_29577_29586[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29587 = state_29564;
state_29564 = G__29587;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto__ = function(state_29564){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto____1.call(this,state_29564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___29579,out))
})();
var state__26485__auto__ = (function (){var statearr_29578 = f__26484__auto__.call(null);
(statearr_29578[(6)] = c__26483__auto___29579);

return statearr_29578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___29579,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29588,opts){
var map__29589 = p__29588;
var map__29589__$1 = ((((!((map__29589 == null)))?(((((map__29589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29589):map__29589);
var eval_body = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29591){var e = e29591;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29592_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29592_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
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
return cljs.core.map.call(null,(function (p__29593){
var vec__29594 = p__29593;
var k = cljs.core.nth.call(null,vec__29594,(0),null);
var v = cljs.core.nth.call(null,vec__29594,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29597){
var vec__29598 = p__29597;
var k = cljs.core.nth.call(null,vec__29598,(0),null);
var v = cljs.core.nth.call(null,vec__29598,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29604,p__29605){
var map__29606 = p__29604;
var map__29606__$1 = ((((!((map__29606 == null)))?(((((map__29606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29606):map__29606);
var opts = map__29606__$1;
var before_jsload = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29607 = p__29605;
var map__29607__$1 = ((((!((map__29607 == null)))?(((((map__29607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29607):map__29607);
var msg = map__29607__$1;
var files = cljs.core.get.call(null,map__29607__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29607__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29607__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29761){
var state_val_29762 = (state_29761[(1)]);
if((state_val_29762 === (7))){
var inst_29623 = (state_29761[(7)]);
var inst_29624 = (state_29761[(8)]);
var inst_29622 = (state_29761[(9)]);
var inst_29621 = (state_29761[(10)]);
var inst_29629 = cljs.core._nth.call(null,inst_29622,inst_29624);
var inst_29630 = figwheel.client.file_reloading.eval_body.call(null,inst_29629,opts);
var inst_29631 = (inst_29624 + (1));
var tmp29763 = inst_29623;
var tmp29764 = inst_29622;
var tmp29765 = inst_29621;
var inst_29621__$1 = tmp29765;
var inst_29622__$1 = tmp29764;
var inst_29623__$1 = tmp29763;
var inst_29624__$1 = inst_29631;
var state_29761__$1 = (function (){var statearr_29766 = state_29761;
(statearr_29766[(11)] = inst_29630);

(statearr_29766[(7)] = inst_29623__$1);

(statearr_29766[(8)] = inst_29624__$1);

(statearr_29766[(9)] = inst_29622__$1);

(statearr_29766[(10)] = inst_29621__$1);

return statearr_29766;
})();
var statearr_29767_29850 = state_29761__$1;
(statearr_29767_29850[(2)] = null);

(statearr_29767_29850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (20))){
var inst_29664 = (state_29761[(12)]);
var inst_29672 = figwheel.client.file_reloading.sort_files.call(null,inst_29664);
var state_29761__$1 = state_29761;
var statearr_29768_29851 = state_29761__$1;
(statearr_29768_29851[(2)] = inst_29672);

(statearr_29768_29851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (27))){
var state_29761__$1 = state_29761;
var statearr_29769_29852 = state_29761__$1;
(statearr_29769_29852[(2)] = null);

(statearr_29769_29852[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (1))){
var inst_29613 = (state_29761[(13)]);
var inst_29610 = before_jsload.call(null,files);
var inst_29611 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29612 = (function (){return ((function (inst_29613,inst_29610,inst_29611,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29601_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29601_SHARP_);
});
;})(inst_29613,inst_29610,inst_29611,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29613__$1 = cljs.core.filter.call(null,inst_29612,files);
var inst_29614 = cljs.core.not_empty.call(null,inst_29613__$1);
var state_29761__$1 = (function (){var statearr_29770 = state_29761;
(statearr_29770[(13)] = inst_29613__$1);

(statearr_29770[(14)] = inst_29611);

(statearr_29770[(15)] = inst_29610);

return statearr_29770;
})();
if(cljs.core.truth_(inst_29614)){
var statearr_29771_29853 = state_29761__$1;
(statearr_29771_29853[(1)] = (2));

} else {
var statearr_29772_29854 = state_29761__$1;
(statearr_29772_29854[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (24))){
var state_29761__$1 = state_29761;
var statearr_29773_29855 = state_29761__$1;
(statearr_29773_29855[(2)] = null);

(statearr_29773_29855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (39))){
var inst_29714 = (state_29761[(16)]);
var state_29761__$1 = state_29761;
var statearr_29774_29856 = state_29761__$1;
(statearr_29774_29856[(2)] = inst_29714);

(statearr_29774_29856[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (46))){
var inst_29756 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
var statearr_29775_29857 = state_29761__$1;
(statearr_29775_29857[(2)] = inst_29756);

(statearr_29775_29857[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (4))){
var inst_29658 = (state_29761[(2)]);
var inst_29659 = cljs.core.List.EMPTY;
var inst_29660 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29659);
var inst_29661 = (function (){return ((function (inst_29658,inst_29659,inst_29660,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29602_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29602_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29602_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29602_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29658,inst_29659,inst_29660,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29662 = cljs.core.filter.call(null,inst_29661,files);
var inst_29663 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29664 = cljs.core.concat.call(null,inst_29662,inst_29663);
var state_29761__$1 = (function (){var statearr_29776 = state_29761;
(statearr_29776[(17)] = inst_29660);

(statearr_29776[(12)] = inst_29664);

(statearr_29776[(18)] = inst_29658);

return statearr_29776;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29777_29858 = state_29761__$1;
(statearr_29777_29858[(1)] = (16));

} else {
var statearr_29778_29859 = state_29761__$1;
(statearr_29778_29859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (15))){
var inst_29648 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
var statearr_29779_29860 = state_29761__$1;
(statearr_29779_29860[(2)] = inst_29648);

(statearr_29779_29860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (21))){
var inst_29674 = (state_29761[(19)]);
var inst_29674__$1 = (state_29761[(2)]);
var inst_29675 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29674__$1);
var state_29761__$1 = (function (){var statearr_29780 = state_29761;
(statearr_29780[(19)] = inst_29674__$1);

return statearr_29780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29761__$1,(22),inst_29675);
} else {
if((state_val_29762 === (31))){
var inst_29759 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29761__$1,inst_29759);
} else {
if((state_val_29762 === (32))){
var inst_29714 = (state_29761[(16)]);
var inst_29719 = inst_29714.cljs$lang$protocol_mask$partition0$;
var inst_29720 = (inst_29719 & (64));
var inst_29721 = inst_29714.cljs$core$ISeq$;
var inst_29722 = (cljs.core.PROTOCOL_SENTINEL === inst_29721);
var inst_29723 = ((inst_29720) || (inst_29722));
var state_29761__$1 = state_29761;
if(cljs.core.truth_(inst_29723)){
var statearr_29781_29861 = state_29761__$1;
(statearr_29781_29861[(1)] = (35));

} else {
var statearr_29782_29862 = state_29761__$1;
(statearr_29782_29862[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (40))){
var inst_29736 = (state_29761[(20)]);
var inst_29735 = (state_29761[(2)]);
var inst_29736__$1 = cljs.core.get.call(null,inst_29735,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29737 = cljs.core.get.call(null,inst_29735,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29738 = cljs.core.not_empty.call(null,inst_29736__$1);
var state_29761__$1 = (function (){var statearr_29783 = state_29761;
(statearr_29783[(20)] = inst_29736__$1);

(statearr_29783[(21)] = inst_29737);

return statearr_29783;
})();
if(cljs.core.truth_(inst_29738)){
var statearr_29784_29863 = state_29761__$1;
(statearr_29784_29863[(1)] = (41));

} else {
var statearr_29785_29864 = state_29761__$1;
(statearr_29785_29864[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (33))){
var state_29761__$1 = state_29761;
var statearr_29786_29865 = state_29761__$1;
(statearr_29786_29865[(2)] = false);

(statearr_29786_29865[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (13))){
var inst_29634 = (state_29761[(22)]);
var inst_29638 = cljs.core.chunk_first.call(null,inst_29634);
var inst_29639 = cljs.core.chunk_rest.call(null,inst_29634);
var inst_29640 = cljs.core.count.call(null,inst_29638);
var inst_29621 = inst_29639;
var inst_29622 = inst_29638;
var inst_29623 = inst_29640;
var inst_29624 = (0);
var state_29761__$1 = (function (){var statearr_29787 = state_29761;
(statearr_29787[(7)] = inst_29623);

(statearr_29787[(8)] = inst_29624);

(statearr_29787[(9)] = inst_29622);

(statearr_29787[(10)] = inst_29621);

return statearr_29787;
})();
var statearr_29788_29866 = state_29761__$1;
(statearr_29788_29866[(2)] = null);

(statearr_29788_29866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (22))){
var inst_29677 = (state_29761[(23)]);
var inst_29674 = (state_29761[(19)]);
var inst_29682 = (state_29761[(24)]);
var inst_29678 = (state_29761[(25)]);
var inst_29677__$1 = (state_29761[(2)]);
var inst_29678__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29677__$1);
var inst_29679 = (function (){var all_files = inst_29674;
var res_SINGLEQUOTE_ = inst_29677__$1;
var res = inst_29678__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29677,inst_29674,inst_29682,inst_29678,inst_29677__$1,inst_29678__$1,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29603_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29603_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29677,inst_29674,inst_29682,inst_29678,inst_29677__$1,inst_29678__$1,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29680 = cljs.core.filter.call(null,inst_29679,inst_29677__$1);
var inst_29681 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29682__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29681);
var inst_29683 = cljs.core.not_empty.call(null,inst_29682__$1);
var state_29761__$1 = (function (){var statearr_29789 = state_29761;
(statearr_29789[(26)] = inst_29680);

(statearr_29789[(23)] = inst_29677__$1);

(statearr_29789[(24)] = inst_29682__$1);

(statearr_29789[(25)] = inst_29678__$1);

return statearr_29789;
})();
if(cljs.core.truth_(inst_29683)){
var statearr_29790_29867 = state_29761__$1;
(statearr_29790_29867[(1)] = (23));

} else {
var statearr_29791_29868 = state_29761__$1;
(statearr_29791_29868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (36))){
var state_29761__$1 = state_29761;
var statearr_29792_29869 = state_29761__$1;
(statearr_29792_29869[(2)] = false);

(statearr_29792_29869[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (41))){
var inst_29736 = (state_29761[(20)]);
var inst_29740 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29741 = cljs.core.map.call(null,inst_29740,inst_29736);
var inst_29742 = cljs.core.pr_str.call(null,inst_29741);
var inst_29743 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29742)].join('');
var inst_29744 = figwheel.client.utils.log.call(null,inst_29743);
var state_29761__$1 = state_29761;
var statearr_29793_29870 = state_29761__$1;
(statearr_29793_29870[(2)] = inst_29744);

(statearr_29793_29870[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (43))){
var inst_29737 = (state_29761[(21)]);
var inst_29747 = (state_29761[(2)]);
var inst_29748 = cljs.core.not_empty.call(null,inst_29737);
var state_29761__$1 = (function (){var statearr_29794 = state_29761;
(statearr_29794[(27)] = inst_29747);

return statearr_29794;
})();
if(cljs.core.truth_(inst_29748)){
var statearr_29795_29871 = state_29761__$1;
(statearr_29795_29871[(1)] = (44));

} else {
var statearr_29796_29872 = state_29761__$1;
(statearr_29796_29872[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (29))){
var inst_29714 = (state_29761[(16)]);
var inst_29680 = (state_29761[(26)]);
var inst_29677 = (state_29761[(23)]);
var inst_29674 = (state_29761[(19)]);
var inst_29682 = (state_29761[(24)]);
var inst_29678 = (state_29761[(25)]);
var inst_29710 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29713 = (function (){var all_files = inst_29674;
var res_SINGLEQUOTE_ = inst_29677;
var res = inst_29678;
var files_not_loaded = inst_29680;
var dependencies_that_loaded = inst_29682;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29714,inst_29680,inst_29677,inst_29674,inst_29682,inst_29678,inst_29710,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29712){
var map__29797 = p__29712;
var map__29797__$1 = ((((!((map__29797 == null)))?(((((map__29797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29797):map__29797);
var namespace = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29714,inst_29680,inst_29677,inst_29674,inst_29682,inst_29678,inst_29710,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29714__$1 = cljs.core.group_by.call(null,inst_29713,inst_29680);
var inst_29716 = (inst_29714__$1 == null);
var inst_29717 = cljs.core.not.call(null,inst_29716);
var state_29761__$1 = (function (){var statearr_29799 = state_29761;
(statearr_29799[(16)] = inst_29714__$1);

(statearr_29799[(28)] = inst_29710);

return statearr_29799;
})();
if(inst_29717){
var statearr_29800_29873 = state_29761__$1;
(statearr_29800_29873[(1)] = (32));

} else {
var statearr_29801_29874 = state_29761__$1;
(statearr_29801_29874[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (44))){
var inst_29737 = (state_29761[(21)]);
var inst_29750 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29737);
var inst_29751 = cljs.core.pr_str.call(null,inst_29750);
var inst_29752 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29751)].join('');
var inst_29753 = figwheel.client.utils.log.call(null,inst_29752);
var state_29761__$1 = state_29761;
var statearr_29802_29875 = state_29761__$1;
(statearr_29802_29875[(2)] = inst_29753);

(statearr_29802_29875[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (6))){
var inst_29655 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
var statearr_29803_29876 = state_29761__$1;
(statearr_29803_29876[(2)] = inst_29655);

(statearr_29803_29876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (28))){
var inst_29680 = (state_29761[(26)]);
var inst_29707 = (state_29761[(2)]);
var inst_29708 = cljs.core.not_empty.call(null,inst_29680);
var state_29761__$1 = (function (){var statearr_29804 = state_29761;
(statearr_29804[(29)] = inst_29707);

return statearr_29804;
})();
if(cljs.core.truth_(inst_29708)){
var statearr_29805_29877 = state_29761__$1;
(statearr_29805_29877[(1)] = (29));

} else {
var statearr_29806_29878 = state_29761__$1;
(statearr_29806_29878[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (25))){
var inst_29678 = (state_29761[(25)]);
var inst_29694 = (state_29761[(2)]);
var inst_29695 = cljs.core.not_empty.call(null,inst_29678);
var state_29761__$1 = (function (){var statearr_29807 = state_29761;
(statearr_29807[(30)] = inst_29694);

return statearr_29807;
})();
if(cljs.core.truth_(inst_29695)){
var statearr_29808_29879 = state_29761__$1;
(statearr_29808_29879[(1)] = (26));

} else {
var statearr_29809_29880 = state_29761__$1;
(statearr_29809_29880[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (34))){
var inst_29730 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
if(cljs.core.truth_(inst_29730)){
var statearr_29810_29881 = state_29761__$1;
(statearr_29810_29881[(1)] = (38));

} else {
var statearr_29811_29882 = state_29761__$1;
(statearr_29811_29882[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (17))){
var state_29761__$1 = state_29761;
var statearr_29812_29883 = state_29761__$1;
(statearr_29812_29883[(2)] = recompile_dependents);

(statearr_29812_29883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (3))){
var state_29761__$1 = state_29761;
var statearr_29813_29884 = state_29761__$1;
(statearr_29813_29884[(2)] = null);

(statearr_29813_29884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (12))){
var inst_29651 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
var statearr_29814_29885 = state_29761__$1;
(statearr_29814_29885[(2)] = inst_29651);

(statearr_29814_29885[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (2))){
var inst_29613 = (state_29761[(13)]);
var inst_29620 = cljs.core.seq.call(null,inst_29613);
var inst_29621 = inst_29620;
var inst_29622 = null;
var inst_29623 = (0);
var inst_29624 = (0);
var state_29761__$1 = (function (){var statearr_29815 = state_29761;
(statearr_29815[(7)] = inst_29623);

(statearr_29815[(8)] = inst_29624);

(statearr_29815[(9)] = inst_29622);

(statearr_29815[(10)] = inst_29621);

return statearr_29815;
})();
var statearr_29816_29886 = state_29761__$1;
(statearr_29816_29886[(2)] = null);

(statearr_29816_29886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (23))){
var inst_29680 = (state_29761[(26)]);
var inst_29677 = (state_29761[(23)]);
var inst_29674 = (state_29761[(19)]);
var inst_29682 = (state_29761[(24)]);
var inst_29678 = (state_29761[(25)]);
var inst_29685 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29687 = (function (){var all_files = inst_29674;
var res_SINGLEQUOTE_ = inst_29677;
var res = inst_29678;
var files_not_loaded = inst_29680;
var dependencies_that_loaded = inst_29682;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29680,inst_29677,inst_29674,inst_29682,inst_29678,inst_29685,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29686){
var map__29817 = p__29686;
var map__29817__$1 = ((((!((map__29817 == null)))?(((((map__29817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29817):map__29817);
var request_url = cljs.core.get.call(null,map__29817__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29680,inst_29677,inst_29674,inst_29682,inst_29678,inst_29685,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29688 = cljs.core.reverse.call(null,inst_29682);
var inst_29689 = cljs.core.map.call(null,inst_29687,inst_29688);
var inst_29690 = cljs.core.pr_str.call(null,inst_29689);
var inst_29691 = figwheel.client.utils.log.call(null,inst_29690);
var state_29761__$1 = (function (){var statearr_29819 = state_29761;
(statearr_29819[(31)] = inst_29685);

return statearr_29819;
})();
var statearr_29820_29887 = state_29761__$1;
(statearr_29820_29887[(2)] = inst_29691);

(statearr_29820_29887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (35))){
var state_29761__$1 = state_29761;
var statearr_29821_29888 = state_29761__$1;
(statearr_29821_29888[(2)] = true);

(statearr_29821_29888[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (19))){
var inst_29664 = (state_29761[(12)]);
var inst_29670 = figwheel.client.file_reloading.expand_files.call(null,inst_29664);
var state_29761__$1 = state_29761;
var statearr_29822_29889 = state_29761__$1;
(statearr_29822_29889[(2)] = inst_29670);

(statearr_29822_29889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (11))){
var state_29761__$1 = state_29761;
var statearr_29823_29890 = state_29761__$1;
(statearr_29823_29890[(2)] = null);

(statearr_29823_29890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (9))){
var inst_29653 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
var statearr_29824_29891 = state_29761__$1;
(statearr_29824_29891[(2)] = inst_29653);

(statearr_29824_29891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (5))){
var inst_29623 = (state_29761[(7)]);
var inst_29624 = (state_29761[(8)]);
var inst_29626 = (inst_29624 < inst_29623);
var inst_29627 = inst_29626;
var state_29761__$1 = state_29761;
if(cljs.core.truth_(inst_29627)){
var statearr_29825_29892 = state_29761__$1;
(statearr_29825_29892[(1)] = (7));

} else {
var statearr_29826_29893 = state_29761__$1;
(statearr_29826_29893[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (14))){
var inst_29634 = (state_29761[(22)]);
var inst_29643 = cljs.core.first.call(null,inst_29634);
var inst_29644 = figwheel.client.file_reloading.eval_body.call(null,inst_29643,opts);
var inst_29645 = cljs.core.next.call(null,inst_29634);
var inst_29621 = inst_29645;
var inst_29622 = null;
var inst_29623 = (0);
var inst_29624 = (0);
var state_29761__$1 = (function (){var statearr_29827 = state_29761;
(statearr_29827[(32)] = inst_29644);

(statearr_29827[(7)] = inst_29623);

(statearr_29827[(8)] = inst_29624);

(statearr_29827[(9)] = inst_29622);

(statearr_29827[(10)] = inst_29621);

return statearr_29827;
})();
var statearr_29828_29894 = state_29761__$1;
(statearr_29828_29894[(2)] = null);

(statearr_29828_29894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (45))){
var state_29761__$1 = state_29761;
var statearr_29829_29895 = state_29761__$1;
(statearr_29829_29895[(2)] = null);

(statearr_29829_29895[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (26))){
var inst_29680 = (state_29761[(26)]);
var inst_29677 = (state_29761[(23)]);
var inst_29674 = (state_29761[(19)]);
var inst_29682 = (state_29761[(24)]);
var inst_29678 = (state_29761[(25)]);
var inst_29697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29699 = (function (){var all_files = inst_29674;
var res_SINGLEQUOTE_ = inst_29677;
var res = inst_29678;
var files_not_loaded = inst_29680;
var dependencies_that_loaded = inst_29682;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29680,inst_29677,inst_29674,inst_29682,inst_29678,inst_29697,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29698){
var map__29830 = p__29698;
var map__29830__$1 = ((((!((map__29830 == null)))?(((((map__29830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29830):map__29830);
var namespace = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29680,inst_29677,inst_29674,inst_29682,inst_29678,inst_29697,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29700 = cljs.core.map.call(null,inst_29699,inst_29678);
var inst_29701 = cljs.core.pr_str.call(null,inst_29700);
var inst_29702 = figwheel.client.utils.log.call(null,inst_29701);
var inst_29703 = (function (){var all_files = inst_29674;
var res_SINGLEQUOTE_ = inst_29677;
var res = inst_29678;
var files_not_loaded = inst_29680;
var dependencies_that_loaded = inst_29682;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29680,inst_29677,inst_29674,inst_29682,inst_29678,inst_29697,inst_29699,inst_29700,inst_29701,inst_29702,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29680,inst_29677,inst_29674,inst_29682,inst_29678,inst_29697,inst_29699,inst_29700,inst_29701,inst_29702,state_val_29762,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29704 = setTimeout(inst_29703,(10));
var state_29761__$1 = (function (){var statearr_29832 = state_29761;
(statearr_29832[(33)] = inst_29702);

(statearr_29832[(34)] = inst_29697);

return statearr_29832;
})();
var statearr_29833_29896 = state_29761__$1;
(statearr_29833_29896[(2)] = inst_29704);

(statearr_29833_29896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (16))){
var state_29761__$1 = state_29761;
var statearr_29834_29897 = state_29761__$1;
(statearr_29834_29897[(2)] = reload_dependents);

(statearr_29834_29897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (38))){
var inst_29714 = (state_29761[(16)]);
var inst_29732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29714);
var state_29761__$1 = state_29761;
var statearr_29835_29898 = state_29761__$1;
(statearr_29835_29898[(2)] = inst_29732);

(statearr_29835_29898[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (30))){
var state_29761__$1 = state_29761;
var statearr_29836_29899 = state_29761__$1;
(statearr_29836_29899[(2)] = null);

(statearr_29836_29899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (10))){
var inst_29634 = (state_29761[(22)]);
var inst_29636 = cljs.core.chunked_seq_QMARK_.call(null,inst_29634);
var state_29761__$1 = state_29761;
if(inst_29636){
var statearr_29837_29900 = state_29761__$1;
(statearr_29837_29900[(1)] = (13));

} else {
var statearr_29838_29901 = state_29761__$1;
(statearr_29838_29901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (18))){
var inst_29668 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
if(cljs.core.truth_(inst_29668)){
var statearr_29839_29902 = state_29761__$1;
(statearr_29839_29902[(1)] = (19));

} else {
var statearr_29840_29903 = state_29761__$1;
(statearr_29840_29903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (42))){
var state_29761__$1 = state_29761;
var statearr_29841_29904 = state_29761__$1;
(statearr_29841_29904[(2)] = null);

(statearr_29841_29904[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (37))){
var inst_29727 = (state_29761[(2)]);
var state_29761__$1 = state_29761;
var statearr_29842_29905 = state_29761__$1;
(statearr_29842_29905[(2)] = inst_29727);

(statearr_29842_29905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29762 === (8))){
var inst_29634 = (state_29761[(22)]);
var inst_29621 = (state_29761[(10)]);
var inst_29634__$1 = cljs.core.seq.call(null,inst_29621);
var state_29761__$1 = (function (){var statearr_29843 = state_29761;
(statearr_29843[(22)] = inst_29634__$1);

return statearr_29843;
})();
if(inst_29634__$1){
var statearr_29844_29906 = state_29761__$1;
(statearr_29844_29906[(1)] = (10));

} else {
var statearr_29845_29907 = state_29761__$1;
(statearr_29845_29907[(1)] = (11));

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
});})(c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26460__auto__,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto____0 = (function (){
var statearr_29846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29846[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto__);

(statearr_29846[(1)] = (1));

return statearr_29846;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto____1 = (function (state_29761){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_29761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e29847){if((e29847 instanceof Object)){
var ex__26464__auto__ = e29847;
var statearr_29848_29908 = state_29761;
(statearr_29848_29908[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29909 = state_29761;
state_29761 = G__29909;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto__ = function(state_29761){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto____1.call(this,state_29761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26485__auto__ = (function (){var statearr_29849 = f__26484__auto__.call(null);
(statearr_29849[(6)] = c__26483__auto__);

return statearr_29849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__,map__29606,map__29606__$1,opts,before_jsload,on_jsload,reload_dependents,map__29607,map__29607__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26483__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29912,link){
var map__29913 = p__29912;
var map__29913__$1 = ((((!((map__29913 == null)))?(((((map__29913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29913):map__29913);
var file = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29913,map__29913__$1,file){
return (function (p1__29910_SHARP_,p2__29911_SHARP_){
if(cljs.core._EQ_.call(null,p1__29910_SHARP_,p2__29911_SHARP_)){
return p1__29910_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29913,map__29913__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29916){
var map__29917 = p__29916;
var map__29917__$1 = ((((!((map__29917 == null)))?(((((map__29917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29917):map__29917);
var match_length = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29915_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29915_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29919_SHARP_,p2__29920_SHARP_){
return cljs.core.assoc.call(null,p1__29919_SHARP_,cljs.core.get.call(null,p2__29920_SHARP_,key),p2__29920_SHARP_);
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
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29921 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29921);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29921);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29922,p__29923){
var map__29924 = p__29922;
var map__29924__$1 = ((((!((map__29924 == null)))?(((((map__29924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29924):map__29924);
var on_cssload = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29925 = p__29923;
var map__29925__$1 = ((((!((map__29925 == null)))?(((((map__29925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29925):map__29925);
var files_msg = map__29925__$1;
var files = cljs.core.get.call(null,map__29925__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1550771776885
