// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
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
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30158 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__30158 == null)){
return null;
} else {
return goog.object.get(G__30158,"requires");
}
}):(function (path){
var G__30159 = goog.object.get(goog.dependencies_.requires,path);
if((G__30159 == null)){
return null;
} else {
return goog.object.getKeys(G__30159);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30160_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30160_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__30161 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__30161__$1 = (((G__30161 == null))?null:goog.object.get(G__30161,"provides"));
if((G__30161__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__30161__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__30162 = cljs.core.seq.call(null,provides);
var chunk__30163 = null;
var count__30164 = (0);
var i__30165 = (0);
while(true){
if((i__30165 < count__30164)){
var prov = cljs.core._nth.call(null,chunk__30163,i__30165);
var seq__30174_30186 = cljs.core.seq.call(null,requires);
var chunk__30175_30187 = null;
var count__30176_30188 = (0);
var i__30177_30189 = (0);
while(true){
if((i__30177_30189 < count__30176_30188)){
var req_30190 = cljs.core._nth.call(null,chunk__30175_30187,i__30177_30189);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30190,prov);


var G__30191 = seq__30174_30186;
var G__30192 = chunk__30175_30187;
var G__30193 = count__30176_30188;
var G__30194 = (i__30177_30189 + (1));
seq__30174_30186 = G__30191;
chunk__30175_30187 = G__30192;
count__30176_30188 = G__30193;
i__30177_30189 = G__30194;
continue;
} else {
var temp__5720__auto___30195 = cljs.core.seq.call(null,seq__30174_30186);
if(temp__5720__auto___30195){
var seq__30174_30196__$1 = temp__5720__auto___30195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30174_30196__$1)){
var c__4556__auto___30197 = cljs.core.chunk_first.call(null,seq__30174_30196__$1);
var G__30198 = cljs.core.chunk_rest.call(null,seq__30174_30196__$1);
var G__30199 = c__4556__auto___30197;
var G__30200 = cljs.core.count.call(null,c__4556__auto___30197);
var G__30201 = (0);
seq__30174_30186 = G__30198;
chunk__30175_30187 = G__30199;
count__30176_30188 = G__30200;
i__30177_30189 = G__30201;
continue;
} else {
var req_30202 = cljs.core.first.call(null,seq__30174_30196__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30202,prov);


var G__30203 = cljs.core.next.call(null,seq__30174_30196__$1);
var G__30204 = null;
var G__30205 = (0);
var G__30206 = (0);
seq__30174_30186 = G__30203;
chunk__30175_30187 = G__30204;
count__30176_30188 = G__30205;
i__30177_30189 = G__30206;
continue;
}
} else {
}
}
break;
}


var G__30207 = seq__30162;
var G__30208 = chunk__30163;
var G__30209 = count__30164;
var G__30210 = (i__30165 + (1));
seq__30162 = G__30207;
chunk__30163 = G__30208;
count__30164 = G__30209;
i__30165 = G__30210;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30162);
if(temp__5720__auto__){
var seq__30162__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30162__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30162__$1);
var G__30211 = cljs.core.chunk_rest.call(null,seq__30162__$1);
var G__30212 = c__4556__auto__;
var G__30213 = cljs.core.count.call(null,c__4556__auto__);
var G__30214 = (0);
seq__30162 = G__30211;
chunk__30163 = G__30212;
count__30164 = G__30213;
i__30165 = G__30214;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30162__$1);
var seq__30178_30215 = cljs.core.seq.call(null,requires);
var chunk__30179_30216 = null;
var count__30180_30217 = (0);
var i__30181_30218 = (0);
while(true){
if((i__30181_30218 < count__30180_30217)){
var req_30219 = cljs.core._nth.call(null,chunk__30179_30216,i__30181_30218);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30219,prov);


var G__30220 = seq__30178_30215;
var G__30221 = chunk__30179_30216;
var G__30222 = count__30180_30217;
var G__30223 = (i__30181_30218 + (1));
seq__30178_30215 = G__30220;
chunk__30179_30216 = G__30221;
count__30180_30217 = G__30222;
i__30181_30218 = G__30223;
continue;
} else {
var temp__5720__auto___30224__$1 = cljs.core.seq.call(null,seq__30178_30215);
if(temp__5720__auto___30224__$1){
var seq__30178_30225__$1 = temp__5720__auto___30224__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30178_30225__$1)){
var c__4556__auto___30226 = cljs.core.chunk_first.call(null,seq__30178_30225__$1);
var G__30227 = cljs.core.chunk_rest.call(null,seq__30178_30225__$1);
var G__30228 = c__4556__auto___30226;
var G__30229 = cljs.core.count.call(null,c__4556__auto___30226);
var G__30230 = (0);
seq__30178_30215 = G__30227;
chunk__30179_30216 = G__30228;
count__30180_30217 = G__30229;
i__30181_30218 = G__30230;
continue;
} else {
var req_30231 = cljs.core.first.call(null,seq__30178_30225__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30231,prov);


var G__30232 = cljs.core.next.call(null,seq__30178_30225__$1);
var G__30233 = null;
var G__30234 = (0);
var G__30235 = (0);
seq__30178_30215 = G__30232;
chunk__30179_30216 = G__30233;
count__30180_30217 = G__30234;
i__30181_30218 = G__30235;
continue;
}
} else {
}
}
break;
}


var G__30236 = cljs.core.next.call(null,seq__30162__$1);
var G__30237 = null;
var G__30238 = (0);
var G__30239 = (0);
seq__30162 = G__30236;
chunk__30163 = G__30237;
count__30164 = G__30238;
i__30165 = G__30239;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__30182 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__30183 = null;
var count__30184 = (0);
var i__30185 = (0);
while(true){
if((i__30185 < count__30184)){
var prov = cljs.core._nth.call(null,chunk__30183,i__30185);
goog.object.forEach(deps,((function (seq__30182,chunk__30183,count__30184,i__30185,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30182,chunk__30183,count__30184,i__30185,prov,requires))
);


var G__30240 = seq__30182;
var G__30241 = chunk__30183;
var G__30242 = count__30184;
var G__30243 = (i__30185 + (1));
seq__30182 = G__30240;
chunk__30183 = G__30241;
count__30184 = G__30242;
i__30185 = G__30243;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30182);
if(temp__5720__auto__){
var seq__30182__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30182__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30182__$1);
var G__30244 = cljs.core.chunk_rest.call(null,seq__30182__$1);
var G__30245 = c__4556__auto__;
var G__30246 = cljs.core.count.call(null,c__4556__auto__);
var G__30247 = (0);
seq__30182 = G__30244;
chunk__30183 = G__30245;
count__30184 = G__30246;
i__30185 = G__30247;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30182__$1);
goog.object.forEach(deps,((function (seq__30182,chunk__30183,count__30184,i__30185,prov,seq__30182__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__30182,chunk__30183,count__30184,i__30185,prov,seq__30182__$1,temp__5720__auto__,requires))
);


var G__30248 = cljs.core.next.call(null,seq__30182__$1);
var G__30249 = null;
var G__30250 = (0);
var G__30251 = (0);
seq__30182 = G__30248;
chunk__30183 = G__30249;
count__30184 = G__30250;
i__30185 = G__30251;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30252){
var vec__30253 = p__30252;
var _ = cljs.core.nth.call(null,vec__30253,(0),null);
var v = cljs.core.nth.call(null,vec__30253,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__30256){
var vec__30257 = p__30256;
var k = cljs.core.nth.call(null,vec__30257,(0),null);
var v = cljs.core.nth.call(null,vec__30257,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30269_30277 = cljs.core.seq.call(null,deps);
var chunk__30270_30278 = null;
var count__30271_30279 = (0);
var i__30272_30280 = (0);
while(true){
if((i__30272_30280 < count__30271_30279)){
var dep_30281 = cljs.core._nth.call(null,chunk__30270_30278,i__30272_30280);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_30281;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30281));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30281,(depth + (1)),state);
} else {
}


var G__30282 = seq__30269_30277;
var G__30283 = chunk__30270_30278;
var G__30284 = count__30271_30279;
var G__30285 = (i__30272_30280 + (1));
seq__30269_30277 = G__30282;
chunk__30270_30278 = G__30283;
count__30271_30279 = G__30284;
i__30272_30280 = G__30285;
continue;
} else {
var temp__5720__auto___30286 = cljs.core.seq.call(null,seq__30269_30277);
if(temp__5720__auto___30286){
var seq__30269_30287__$1 = temp__5720__auto___30286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30269_30287__$1)){
var c__4556__auto___30288 = cljs.core.chunk_first.call(null,seq__30269_30287__$1);
var G__30289 = cljs.core.chunk_rest.call(null,seq__30269_30287__$1);
var G__30290 = c__4556__auto___30288;
var G__30291 = cljs.core.count.call(null,c__4556__auto___30288);
var G__30292 = (0);
seq__30269_30277 = G__30289;
chunk__30270_30278 = G__30290;
count__30271_30279 = G__30291;
i__30272_30280 = G__30292;
continue;
} else {
var dep_30293 = cljs.core.first.call(null,seq__30269_30287__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_30293;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30293));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30293,(depth + (1)),state);
} else {
}


var G__30294 = cljs.core.next.call(null,seq__30269_30287__$1);
var G__30295 = null;
var G__30296 = (0);
var G__30297 = (0);
seq__30269_30277 = G__30294;
chunk__30270_30278 = G__30295;
count__30271_30279 = G__30296;
i__30272_30280 = G__30297;
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
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30273){
var vec__30274 = p__30273;
var seq__30275 = cljs.core.seq.call(null,vec__30274);
var first__30276 = cljs.core.first.call(null,seq__30275);
var seq__30275__$1 = cljs.core.next.call(null,seq__30275);
var x = first__30276;
var xs = seq__30275__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__30260_SHARP_){
return clojure.set.difference.call(null,p1__30260_SHARP_,x);
}),xs)));
}
});
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
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__30298_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__30298_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30299 = cljs.core.seq.call(null,provides);
var chunk__30300 = null;
var count__30301 = (0);
var i__30302 = (0);
while(true){
if((i__30302 < count__30301)){
var prov = cljs.core._nth.call(null,chunk__30300,i__30302);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30311_30319 = cljs.core.seq.call(null,requires);
var chunk__30312_30320 = null;
var count__30313_30321 = (0);
var i__30314_30322 = (0);
while(true){
if((i__30314_30322 < count__30313_30321)){
var req_30323 = cljs.core._nth.call(null,chunk__30312_30320,i__30314_30322);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30323,prov);


var G__30324 = seq__30311_30319;
var G__30325 = chunk__30312_30320;
var G__30326 = count__30313_30321;
var G__30327 = (i__30314_30322 + (1));
seq__30311_30319 = G__30324;
chunk__30312_30320 = G__30325;
count__30313_30321 = G__30326;
i__30314_30322 = G__30327;
continue;
} else {
var temp__5720__auto___30328 = cljs.core.seq.call(null,seq__30311_30319);
if(temp__5720__auto___30328){
var seq__30311_30329__$1 = temp__5720__auto___30328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30311_30329__$1)){
var c__4556__auto___30330 = cljs.core.chunk_first.call(null,seq__30311_30329__$1);
var G__30331 = cljs.core.chunk_rest.call(null,seq__30311_30329__$1);
var G__30332 = c__4556__auto___30330;
var G__30333 = cljs.core.count.call(null,c__4556__auto___30330);
var G__30334 = (0);
seq__30311_30319 = G__30331;
chunk__30312_30320 = G__30332;
count__30313_30321 = G__30333;
i__30314_30322 = G__30334;
continue;
} else {
var req_30335 = cljs.core.first.call(null,seq__30311_30329__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30335,prov);


var G__30336 = cljs.core.next.call(null,seq__30311_30329__$1);
var G__30337 = null;
var G__30338 = (0);
var G__30339 = (0);
seq__30311_30319 = G__30336;
chunk__30312_30320 = G__30337;
count__30313_30321 = G__30338;
i__30314_30322 = G__30339;
continue;
}
} else {
}
}
break;
}


var G__30340 = seq__30299;
var G__30341 = chunk__30300;
var G__30342 = count__30301;
var G__30343 = (i__30302 + (1));
seq__30299 = G__30340;
chunk__30300 = G__30341;
count__30301 = G__30342;
i__30302 = G__30343;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30299);
if(temp__5720__auto__){
var seq__30299__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30299__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30299__$1);
var G__30344 = cljs.core.chunk_rest.call(null,seq__30299__$1);
var G__30345 = c__4556__auto__;
var G__30346 = cljs.core.count.call(null,c__4556__auto__);
var G__30347 = (0);
seq__30299 = G__30344;
chunk__30300 = G__30345;
count__30301 = G__30346;
i__30302 = G__30347;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30299__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30315_30348 = cljs.core.seq.call(null,requires);
var chunk__30316_30349 = null;
var count__30317_30350 = (0);
var i__30318_30351 = (0);
while(true){
if((i__30318_30351 < count__30317_30350)){
var req_30352 = cljs.core._nth.call(null,chunk__30316_30349,i__30318_30351);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30352,prov);


var G__30353 = seq__30315_30348;
var G__30354 = chunk__30316_30349;
var G__30355 = count__30317_30350;
var G__30356 = (i__30318_30351 + (1));
seq__30315_30348 = G__30353;
chunk__30316_30349 = G__30354;
count__30317_30350 = G__30355;
i__30318_30351 = G__30356;
continue;
} else {
var temp__5720__auto___30357__$1 = cljs.core.seq.call(null,seq__30315_30348);
if(temp__5720__auto___30357__$1){
var seq__30315_30358__$1 = temp__5720__auto___30357__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30315_30358__$1)){
var c__4556__auto___30359 = cljs.core.chunk_first.call(null,seq__30315_30358__$1);
var G__30360 = cljs.core.chunk_rest.call(null,seq__30315_30358__$1);
var G__30361 = c__4556__auto___30359;
var G__30362 = cljs.core.count.call(null,c__4556__auto___30359);
var G__30363 = (0);
seq__30315_30348 = G__30360;
chunk__30316_30349 = G__30361;
count__30317_30350 = G__30362;
i__30318_30351 = G__30363;
continue;
} else {
var req_30364 = cljs.core.first.call(null,seq__30315_30358__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30364,prov);


var G__30365 = cljs.core.next.call(null,seq__30315_30358__$1);
var G__30366 = null;
var G__30367 = (0);
var G__30368 = (0);
seq__30315_30348 = G__30365;
chunk__30316_30349 = G__30366;
count__30317_30350 = G__30367;
i__30318_30351 = G__30368;
continue;
}
} else {
}
}
break;
}


var G__30369 = cljs.core.next.call(null,seq__30299__$1);
var G__30370 = null;
var G__30371 = (0);
var G__30372 = (0);
seq__30299 = G__30369;
chunk__30300 = G__30370;
count__30301 = G__30371;
i__30302 = G__30372;
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
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30373_30377 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30374_30378 = null;
var count__30375_30379 = (0);
var i__30376_30380 = (0);
while(true){
if((i__30376_30380 < count__30375_30379)){
var ns_30381 = cljs.core._nth.call(null,chunk__30374_30378,i__30376_30380);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30381);


var G__30382 = seq__30373_30377;
var G__30383 = chunk__30374_30378;
var G__30384 = count__30375_30379;
var G__30385 = (i__30376_30380 + (1));
seq__30373_30377 = G__30382;
chunk__30374_30378 = G__30383;
count__30375_30379 = G__30384;
i__30376_30380 = G__30385;
continue;
} else {
var temp__5720__auto___30386 = cljs.core.seq.call(null,seq__30373_30377);
if(temp__5720__auto___30386){
var seq__30373_30387__$1 = temp__5720__auto___30386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30373_30387__$1)){
var c__4556__auto___30388 = cljs.core.chunk_first.call(null,seq__30373_30387__$1);
var G__30389 = cljs.core.chunk_rest.call(null,seq__30373_30387__$1);
var G__30390 = c__4556__auto___30388;
var G__30391 = cljs.core.count.call(null,c__4556__auto___30388);
var G__30392 = (0);
seq__30373_30377 = G__30389;
chunk__30374_30378 = G__30390;
count__30375_30379 = G__30391;
i__30376_30380 = G__30392;
continue;
} else {
var ns_30393 = cljs.core.first.call(null,seq__30373_30387__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30393);


var G__30394 = cljs.core.next.call(null,seq__30373_30387__$1);
var G__30395 = null;
var G__30396 = (0);
var G__30397 = (0);
seq__30373_30377 = G__30394;
chunk__30374_30378 = G__30395;
count__30375_30379 = G__30396;
i__30376_30380 = G__30397;
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
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__30398__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30399__i = 0, G__30399__a = new Array(arguments.length -  0);
while (G__30399__i < G__30399__a.length) {G__30399__a[G__30399__i] = arguments[G__30399__i + 0]; ++G__30399__i;}
  args = new cljs.core.IndexedSeq(G__30399__a,0,null);
} 
return G__30398__delegate.call(this,args);};
G__30398.cljs$lang$maxFixedArity = 0;
G__30398.cljs$lang$applyTo = (function (arglist__30400){
var args = cljs.core.seq(arglist__30400);
return G__30398__delegate(args);
});
G__30398.cljs$core$IFn$_invoke$arity$variadic = G__30398__delegate;
return G__30398;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30401_SHARP_,p2__30402_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30401_SHARP_)),p2__30402_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30403_SHARP_,p2__30404_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30403_SHARP_),p2__30404_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30405 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30405.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__30405.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__30405;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30406){if((e30406 instanceof Error)){
var e = e30406;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30406;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30407){if((e30407 instanceof Error)){
var e = e30407;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30407;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30408 = cljs.core._EQ_;
var expr__30409 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30408.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30409))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30408.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30409))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30408.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30409))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30411,callback){
var map__30412 = p__30411;
var map__30412__$1 = (((((!((map__30412 == null))))?(((((map__30412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30412):map__30412);
var file_msg = map__30412__$1;
var request_url = cljs.core.get.call(null,map__30412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
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
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_30450){
var state_val_30451 = (state_30450[(1)]);
if((state_val_30451 === (7))){
var inst_30446 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30452_30478 = state_30450__$1;
(statearr_30452_30478[(2)] = inst_30446);

(statearr_30452_30478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (1))){
var state_30450__$1 = state_30450;
var statearr_30453_30479 = state_30450__$1;
(statearr_30453_30479[(2)] = null);

(statearr_30453_30479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (4))){
var inst_30416 = (state_30450[(7)]);
var inst_30416__$1 = (state_30450[(2)]);
var state_30450__$1 = (function (){var statearr_30454 = state_30450;
(statearr_30454[(7)] = inst_30416__$1);

return statearr_30454;
})();
if(cljs.core.truth_(inst_30416__$1)){
var statearr_30455_30480 = state_30450__$1;
(statearr_30455_30480[(1)] = (5));

} else {
var statearr_30456_30481 = state_30450__$1;
(statearr_30456_30481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (15))){
var inst_30429 = (state_30450[(8)]);
var inst_30431 = (state_30450[(9)]);
var inst_30433 = inst_30431.call(null,inst_30429);
var state_30450__$1 = state_30450;
var statearr_30457_30482 = state_30450__$1;
(statearr_30457_30482[(2)] = inst_30433);

(statearr_30457_30482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (13))){
var inst_30440 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30458_30483 = state_30450__$1;
(statearr_30458_30483[(2)] = inst_30440);

(statearr_30458_30483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (6))){
var state_30450__$1 = state_30450;
var statearr_30459_30484 = state_30450__$1;
(statearr_30459_30484[(2)] = null);

(statearr_30459_30484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (17))){
var inst_30437 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30460_30485 = state_30450__$1;
(statearr_30460_30485[(2)] = inst_30437);

(statearr_30460_30485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (3))){
var inst_30448 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30450__$1,inst_30448);
} else {
if((state_val_30451 === (12))){
var state_30450__$1 = state_30450;
var statearr_30461_30486 = state_30450__$1;
(statearr_30461_30486[(2)] = null);

(statearr_30461_30486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (2))){
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30450__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30451 === (11))){
var inst_30421 = (state_30450[(10)]);
var inst_30427 = figwheel.client.file_reloading.blocking_load.call(null,inst_30421);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30450__$1,(14),inst_30427);
} else {
if((state_val_30451 === (9))){
var inst_30421 = (state_30450[(10)]);
var state_30450__$1 = state_30450;
if(cljs.core.truth_(inst_30421)){
var statearr_30462_30487 = state_30450__$1;
(statearr_30462_30487[(1)] = (11));

} else {
var statearr_30463_30488 = state_30450__$1;
(statearr_30463_30488[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (5))){
var inst_30416 = (state_30450[(7)]);
var inst_30422 = (state_30450[(11)]);
var inst_30421 = cljs.core.nth.call(null,inst_30416,(0),null);
var inst_30422__$1 = cljs.core.nth.call(null,inst_30416,(1),null);
var state_30450__$1 = (function (){var statearr_30464 = state_30450;
(statearr_30464[(11)] = inst_30422__$1);

(statearr_30464[(10)] = inst_30421);

return statearr_30464;
})();
if(cljs.core.truth_(inst_30422__$1)){
var statearr_30465_30489 = state_30450__$1;
(statearr_30465_30489[(1)] = (8));

} else {
var statearr_30466_30490 = state_30450__$1;
(statearr_30466_30490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (14))){
var inst_30431 = (state_30450[(9)]);
var inst_30421 = (state_30450[(10)]);
var inst_30429 = (state_30450[(2)]);
var inst_30430 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30431__$1 = cljs.core.get.call(null,inst_30430,inst_30421);
var state_30450__$1 = (function (){var statearr_30467 = state_30450;
(statearr_30467[(8)] = inst_30429);

(statearr_30467[(9)] = inst_30431__$1);

return statearr_30467;
})();
if(cljs.core.truth_(inst_30431__$1)){
var statearr_30468_30491 = state_30450__$1;
(statearr_30468_30491[(1)] = (15));

} else {
var statearr_30469_30492 = state_30450__$1;
(statearr_30469_30492[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (16))){
var inst_30429 = (state_30450[(8)]);
var inst_30435 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30429);
var state_30450__$1 = state_30450;
var statearr_30470_30493 = state_30450__$1;
(statearr_30470_30493[(2)] = inst_30435);

(statearr_30470_30493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (10))){
var inst_30442 = (state_30450[(2)]);
var state_30450__$1 = (function (){var statearr_30471 = state_30450;
(statearr_30471[(12)] = inst_30442);

return statearr_30471;
})();
var statearr_30472_30494 = state_30450__$1;
(statearr_30472_30494[(2)] = null);

(statearr_30472_30494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (8))){
var inst_30422 = (state_30450[(11)]);
var inst_30424 = eval(inst_30422);
var state_30450__$1 = state_30450;
var statearr_30473_30495 = state_30450__$1;
(statearr_30473_30495[(2)] = inst_30424);

(statearr_30473_30495[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24968__auto__ = null;
var figwheel$client$file_reloading$state_machine__24968__auto____0 = (function (){
var statearr_30474 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30474[(0)] = figwheel$client$file_reloading$state_machine__24968__auto__);

(statearr_30474[(1)] = (1));

return statearr_30474;
});
var figwheel$client$file_reloading$state_machine__24968__auto____1 = (function (state_30450){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_30450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e30475){if((e30475 instanceof Object)){
var ex__24971__auto__ = e30475;
var statearr_30476_30496 = state_30450;
(statearr_30476_30496[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30497 = state_30450;
state_30450 = G__30497;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24968__auto__ = function(state_30450){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24968__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24968__auto____1.call(this,state_30450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24968__auto____0;
figwheel$client$file_reloading$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24968__auto____1;
return figwheel$client$file_reloading$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_30477 = f__25063__auto__.call(null);
(statearr_30477[(6)] = c__25062__auto__);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30499 = arguments.length;
switch (G__30499) {
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

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30501,callback){
var map__30502 = p__30501;
var map__30502__$1 = (((((!((map__30502 == null))))?(((((map__30502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30502):map__30502);
var file_msg = map__30502__$1;
var namespace = cljs.core.get.call(null,map__30502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30504){
var map__30505 = p__30504;
var map__30505__$1 = (((((!((map__30505 == null))))?(((((map__30505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30505):map__30505);
var file_msg = map__30505__$1;
var namespace = cljs.core.get.call(null,map__30505__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30507){
var map__30508 = p__30507;
var map__30508__$1 = (((((!((map__30508 == null))))?(((((map__30508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30508):map__30508);
var file_msg = map__30508__$1;
var namespace = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30510,callback){
var map__30511 = p__30510;
var map__30511__$1 = (((((!((map__30511 == null))))?(((((map__30511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30511):map__30511);
var file_msg = map__30511__$1;
var request_url = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25062__auto___30561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (1))){
var inst_30520 = cljs.core.seq.call(null,files);
var inst_30521 = cljs.core.first.call(null,inst_30520);
var inst_30522 = cljs.core.next.call(null,inst_30520);
var inst_30523 = files;
var state_30546__$1 = (function (){var statearr_30548 = state_30546;
(statearr_30548[(7)] = inst_30522);

(statearr_30548[(8)] = inst_30523);

(statearr_30548[(9)] = inst_30521);

return statearr_30548;
})();
var statearr_30549_30562 = state_30546__$1;
(statearr_30549_30562[(2)] = null);

(statearr_30549_30562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (2))){
var inst_30529 = (state_30546[(10)]);
var inst_30523 = (state_30546[(8)]);
var inst_30528 = cljs.core.seq.call(null,inst_30523);
var inst_30529__$1 = cljs.core.first.call(null,inst_30528);
var inst_30530 = cljs.core.next.call(null,inst_30528);
var inst_30531 = (inst_30529__$1 == null);
var inst_30532 = cljs.core.not.call(null,inst_30531);
var state_30546__$1 = (function (){var statearr_30550 = state_30546;
(statearr_30550[(11)] = inst_30530);

(statearr_30550[(10)] = inst_30529__$1);

return statearr_30550;
})();
if(inst_30532){
var statearr_30551_30563 = state_30546__$1;
(statearr_30551_30563[(1)] = (4));

} else {
var statearr_30552_30564 = state_30546__$1;
(statearr_30552_30564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (3))){
var inst_30544 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
if((state_val_30547 === (4))){
var inst_30529 = (state_30546[(10)]);
var inst_30534 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30529);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(7),inst_30534);
} else {
if((state_val_30547 === (5))){
var inst_30540 = cljs.core.async.close_BANG_.call(null,out);
var state_30546__$1 = state_30546;
var statearr_30553_30565 = state_30546__$1;
(statearr_30553_30565[(2)] = inst_30540);

(statearr_30553_30565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (6))){
var inst_30542 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30554_30566 = state_30546__$1;
(statearr_30554_30566[(2)] = inst_30542);

(statearr_30554_30566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (7))){
var inst_30530 = (state_30546[(11)]);
var inst_30536 = (state_30546[(2)]);
var inst_30537 = cljs.core.async.put_BANG_.call(null,out,inst_30536);
var inst_30523 = inst_30530;
var state_30546__$1 = (function (){var statearr_30555 = state_30546;
(statearr_30555[(12)] = inst_30537);

(statearr_30555[(8)] = inst_30523);

return statearr_30555;
})();
var statearr_30556_30567 = state_30546__$1;
(statearr_30556_30567[(2)] = null);

(statearr_30556_30567[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto____0 = (function (){
var statearr_30557 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30557[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto__);

(statearr_30557[(1)] = (1));

return statearr_30557;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto____1 = (function (state_30546){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e30558){if((e30558 instanceof Object)){
var ex__24971__auto__ = e30558;
var statearr_30559_30568 = state_30546;
(statearr_30559_30568[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30569 = state_30546;
state_30546 = G__30569;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_30560 = f__25063__auto__.call(null);
(statearr_30560[(6)] = c__25062__auto___30561);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30570,opts){
var map__30571 = p__30570;
var map__30571__$1 = (((((!((map__30571 == null))))?(((((map__30571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30571):map__30571);
var eval_body = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30573){var e = e30573;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30574_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30574_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
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
return cljs.core.map.call(null,(function (p__30575){
var vec__30576 = p__30575;
var k = cljs.core.nth.call(null,vec__30576,(0),null);
var v = cljs.core.nth.call(null,vec__30576,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30579){
var vec__30580 = p__30579;
var k = cljs.core.nth.call(null,vec__30580,(0),null);
var v = cljs.core.nth.call(null,vec__30580,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30586,p__30587){
var map__30588 = p__30586;
var map__30588__$1 = (((((!((map__30588 == null))))?(((((map__30588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30588):map__30588);
var opts = map__30588__$1;
var before_jsload = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30589 = p__30587;
var map__30589__$1 = (((((!((map__30589 == null))))?(((((map__30589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30589):map__30589);
var msg = map__30589__$1;
var files = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_30743){
var state_val_30744 = (state_30743[(1)]);
if((state_val_30744 === (7))){
var inst_30605 = (state_30743[(7)]);
var inst_30604 = (state_30743[(8)]);
var inst_30603 = (state_30743[(9)]);
var inst_30606 = (state_30743[(10)]);
var inst_30611 = cljs.core._nth.call(null,inst_30604,inst_30606);
var inst_30612 = figwheel.client.file_reloading.eval_body.call(null,inst_30611,opts);
var inst_30613 = (inst_30606 + (1));
var tmp30745 = inst_30605;
var tmp30746 = inst_30604;
var tmp30747 = inst_30603;
var inst_30603__$1 = tmp30747;
var inst_30604__$1 = tmp30746;
var inst_30605__$1 = tmp30745;
var inst_30606__$1 = inst_30613;
var state_30743__$1 = (function (){var statearr_30748 = state_30743;
(statearr_30748[(7)] = inst_30605__$1);

(statearr_30748[(11)] = inst_30612);

(statearr_30748[(8)] = inst_30604__$1);

(statearr_30748[(9)] = inst_30603__$1);

(statearr_30748[(10)] = inst_30606__$1);

return statearr_30748;
})();
var statearr_30749_30832 = state_30743__$1;
(statearr_30749_30832[(2)] = null);

(statearr_30749_30832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (20))){
var inst_30646 = (state_30743[(12)]);
var inst_30654 = figwheel.client.file_reloading.sort_files.call(null,inst_30646);
var state_30743__$1 = state_30743;
var statearr_30750_30833 = state_30743__$1;
(statearr_30750_30833[(2)] = inst_30654);

(statearr_30750_30833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (27))){
var state_30743__$1 = state_30743;
var statearr_30751_30834 = state_30743__$1;
(statearr_30751_30834[(2)] = null);

(statearr_30751_30834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (1))){
var inst_30595 = (state_30743[(13)]);
var inst_30592 = before_jsload.call(null,files);
var inst_30593 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30594 = (function (){return (function (p1__30583_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30583_SHARP_);
});
})();
var inst_30595__$1 = cljs.core.filter.call(null,inst_30594,files);
var inst_30596 = cljs.core.not_empty.call(null,inst_30595__$1);
var state_30743__$1 = (function (){var statearr_30752 = state_30743;
(statearr_30752[(14)] = inst_30592);

(statearr_30752[(15)] = inst_30593);

(statearr_30752[(13)] = inst_30595__$1);

return statearr_30752;
})();
if(cljs.core.truth_(inst_30596)){
var statearr_30753_30835 = state_30743__$1;
(statearr_30753_30835[(1)] = (2));

} else {
var statearr_30754_30836 = state_30743__$1;
(statearr_30754_30836[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (24))){
var state_30743__$1 = state_30743;
var statearr_30755_30837 = state_30743__$1;
(statearr_30755_30837[(2)] = null);

(statearr_30755_30837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (39))){
var inst_30696 = (state_30743[(16)]);
var state_30743__$1 = state_30743;
var statearr_30756_30838 = state_30743__$1;
(statearr_30756_30838[(2)] = inst_30696);

(statearr_30756_30838[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (46))){
var inst_30738 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30757_30839 = state_30743__$1;
(statearr_30757_30839[(2)] = inst_30738);

(statearr_30757_30839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (4))){
var inst_30640 = (state_30743[(2)]);
var inst_30641 = cljs.core.List.EMPTY;
var inst_30642 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30641);
var inst_30643 = (function (){return (function (p1__30584_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30584_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30584_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30584_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_30644 = cljs.core.filter.call(null,inst_30643,files);
var inst_30645 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30646 = cljs.core.concat.call(null,inst_30644,inst_30645);
var state_30743__$1 = (function (){var statearr_30758 = state_30743;
(statearr_30758[(17)] = inst_30640);

(statearr_30758[(18)] = inst_30642);

(statearr_30758[(12)] = inst_30646);

return statearr_30758;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30759_30840 = state_30743__$1;
(statearr_30759_30840[(1)] = (16));

} else {
var statearr_30760_30841 = state_30743__$1;
(statearr_30760_30841[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (15))){
var inst_30630 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30761_30842 = state_30743__$1;
(statearr_30761_30842[(2)] = inst_30630);

(statearr_30761_30842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (21))){
var inst_30656 = (state_30743[(19)]);
var inst_30656__$1 = (state_30743[(2)]);
var inst_30657 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30656__$1);
var state_30743__$1 = (function (){var statearr_30762 = state_30743;
(statearr_30762[(19)] = inst_30656__$1);

return statearr_30762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30743__$1,(22),inst_30657);
} else {
if((state_val_30744 === (31))){
var inst_30741 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30743__$1,inst_30741);
} else {
if((state_val_30744 === (32))){
var inst_30696 = (state_30743[(16)]);
var inst_30701 = inst_30696.cljs$lang$protocol_mask$partition0$;
var inst_30702 = (inst_30701 & (64));
var inst_30703 = inst_30696.cljs$core$ISeq$;
var inst_30704 = (cljs.core.PROTOCOL_SENTINEL === inst_30703);
var inst_30705 = ((inst_30702) || (inst_30704));
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30705)){
var statearr_30763_30843 = state_30743__$1;
(statearr_30763_30843[(1)] = (35));

} else {
var statearr_30764_30844 = state_30743__$1;
(statearr_30764_30844[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (40))){
var inst_30718 = (state_30743[(20)]);
var inst_30717 = (state_30743[(2)]);
var inst_30718__$1 = cljs.core.get.call(null,inst_30717,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30719 = cljs.core.get.call(null,inst_30717,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30720 = cljs.core.not_empty.call(null,inst_30718__$1);
var state_30743__$1 = (function (){var statearr_30765 = state_30743;
(statearr_30765[(20)] = inst_30718__$1);

(statearr_30765[(21)] = inst_30719);

return statearr_30765;
})();
if(cljs.core.truth_(inst_30720)){
var statearr_30766_30845 = state_30743__$1;
(statearr_30766_30845[(1)] = (41));

} else {
var statearr_30767_30846 = state_30743__$1;
(statearr_30767_30846[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (33))){
var state_30743__$1 = state_30743;
var statearr_30768_30847 = state_30743__$1;
(statearr_30768_30847[(2)] = false);

(statearr_30768_30847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (13))){
var inst_30616 = (state_30743[(22)]);
var inst_30620 = cljs.core.chunk_first.call(null,inst_30616);
var inst_30621 = cljs.core.chunk_rest.call(null,inst_30616);
var inst_30622 = cljs.core.count.call(null,inst_30620);
var inst_30603 = inst_30621;
var inst_30604 = inst_30620;
var inst_30605 = inst_30622;
var inst_30606 = (0);
var state_30743__$1 = (function (){var statearr_30769 = state_30743;
(statearr_30769[(7)] = inst_30605);

(statearr_30769[(8)] = inst_30604);

(statearr_30769[(9)] = inst_30603);

(statearr_30769[(10)] = inst_30606);

return statearr_30769;
})();
var statearr_30770_30848 = state_30743__$1;
(statearr_30770_30848[(2)] = null);

(statearr_30770_30848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (22))){
var inst_30664 = (state_30743[(23)]);
var inst_30659 = (state_30743[(24)]);
var inst_30660 = (state_30743[(25)]);
var inst_30656 = (state_30743[(19)]);
var inst_30659__$1 = (state_30743[(2)]);
var inst_30660__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30659__$1);
var inst_30661 = (function (){var all_files = inst_30656;
var res_SINGLEQUOTE_ = inst_30659__$1;
var res = inst_30660__$1;
return (function (p1__30585_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30585_SHARP_));
});
})();
var inst_30662 = cljs.core.filter.call(null,inst_30661,inst_30659__$1);
var inst_30663 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30664__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30663);
var inst_30665 = cljs.core.not_empty.call(null,inst_30664__$1);
var state_30743__$1 = (function (){var statearr_30771 = state_30743;
(statearr_30771[(26)] = inst_30662);

(statearr_30771[(23)] = inst_30664__$1);

(statearr_30771[(24)] = inst_30659__$1);

(statearr_30771[(25)] = inst_30660__$1);

return statearr_30771;
})();
if(cljs.core.truth_(inst_30665)){
var statearr_30772_30849 = state_30743__$1;
(statearr_30772_30849[(1)] = (23));

} else {
var statearr_30773_30850 = state_30743__$1;
(statearr_30773_30850[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (36))){
var state_30743__$1 = state_30743;
var statearr_30774_30851 = state_30743__$1;
(statearr_30774_30851[(2)] = false);

(statearr_30774_30851[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (41))){
var inst_30718 = (state_30743[(20)]);
var inst_30722 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30723 = cljs.core.map.call(null,inst_30722,inst_30718);
var inst_30724 = cljs.core.pr_str.call(null,inst_30723);
var inst_30725 = ["figwheel-no-load meta-data: ",inst_30724].join('');
var inst_30726 = figwheel.client.utils.log.call(null,inst_30725);
var state_30743__$1 = state_30743;
var statearr_30775_30852 = state_30743__$1;
(statearr_30775_30852[(2)] = inst_30726);

(statearr_30775_30852[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (43))){
var inst_30719 = (state_30743[(21)]);
var inst_30729 = (state_30743[(2)]);
var inst_30730 = cljs.core.not_empty.call(null,inst_30719);
var state_30743__$1 = (function (){var statearr_30776 = state_30743;
(statearr_30776[(27)] = inst_30729);

return statearr_30776;
})();
if(cljs.core.truth_(inst_30730)){
var statearr_30777_30853 = state_30743__$1;
(statearr_30777_30853[(1)] = (44));

} else {
var statearr_30778_30854 = state_30743__$1;
(statearr_30778_30854[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (29))){
var inst_30662 = (state_30743[(26)]);
var inst_30664 = (state_30743[(23)]);
var inst_30659 = (state_30743[(24)]);
var inst_30696 = (state_30743[(16)]);
var inst_30660 = (state_30743[(25)]);
var inst_30656 = (state_30743[(19)]);
var inst_30692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30695 = (function (){var all_files = inst_30656;
var res_SINGLEQUOTE_ = inst_30659;
var res = inst_30660;
var files_not_loaded = inst_30662;
var dependencies_that_loaded = inst_30664;
return (function (p__30694){
var map__30779 = p__30694;
var map__30779__$1 = (((((!((map__30779 == null))))?(((((map__30779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30779):map__30779);
var namespace = cljs.core.get.call(null,map__30779__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
})();
var inst_30696__$1 = cljs.core.group_by.call(null,inst_30695,inst_30662);
var inst_30698 = (inst_30696__$1 == null);
var inst_30699 = cljs.core.not.call(null,inst_30698);
var state_30743__$1 = (function (){var statearr_30781 = state_30743;
(statearr_30781[(28)] = inst_30692);

(statearr_30781[(16)] = inst_30696__$1);

return statearr_30781;
})();
if(inst_30699){
var statearr_30782_30855 = state_30743__$1;
(statearr_30782_30855[(1)] = (32));

} else {
var statearr_30783_30856 = state_30743__$1;
(statearr_30783_30856[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (44))){
var inst_30719 = (state_30743[(21)]);
var inst_30732 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30719);
var inst_30733 = cljs.core.pr_str.call(null,inst_30732);
var inst_30734 = ["not required: ",inst_30733].join('');
var inst_30735 = figwheel.client.utils.log.call(null,inst_30734);
var state_30743__$1 = state_30743;
var statearr_30784_30857 = state_30743__$1;
(statearr_30784_30857[(2)] = inst_30735);

(statearr_30784_30857[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (6))){
var inst_30637 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30785_30858 = state_30743__$1;
(statearr_30785_30858[(2)] = inst_30637);

(statearr_30785_30858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (28))){
var inst_30662 = (state_30743[(26)]);
var inst_30689 = (state_30743[(2)]);
var inst_30690 = cljs.core.not_empty.call(null,inst_30662);
var state_30743__$1 = (function (){var statearr_30786 = state_30743;
(statearr_30786[(29)] = inst_30689);

return statearr_30786;
})();
if(cljs.core.truth_(inst_30690)){
var statearr_30787_30859 = state_30743__$1;
(statearr_30787_30859[(1)] = (29));

} else {
var statearr_30788_30860 = state_30743__$1;
(statearr_30788_30860[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (25))){
var inst_30660 = (state_30743[(25)]);
var inst_30676 = (state_30743[(2)]);
var inst_30677 = cljs.core.not_empty.call(null,inst_30660);
var state_30743__$1 = (function (){var statearr_30789 = state_30743;
(statearr_30789[(30)] = inst_30676);

return statearr_30789;
})();
if(cljs.core.truth_(inst_30677)){
var statearr_30790_30861 = state_30743__$1;
(statearr_30790_30861[(1)] = (26));

} else {
var statearr_30791_30862 = state_30743__$1;
(statearr_30791_30862[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (34))){
var inst_30712 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30712)){
var statearr_30792_30863 = state_30743__$1;
(statearr_30792_30863[(1)] = (38));

} else {
var statearr_30793_30864 = state_30743__$1;
(statearr_30793_30864[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (17))){
var state_30743__$1 = state_30743;
var statearr_30794_30865 = state_30743__$1;
(statearr_30794_30865[(2)] = recompile_dependents);

(statearr_30794_30865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (3))){
var state_30743__$1 = state_30743;
var statearr_30795_30866 = state_30743__$1;
(statearr_30795_30866[(2)] = null);

(statearr_30795_30866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (12))){
var inst_30633 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30796_30867 = state_30743__$1;
(statearr_30796_30867[(2)] = inst_30633);

(statearr_30796_30867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (2))){
var inst_30595 = (state_30743[(13)]);
var inst_30602 = cljs.core.seq.call(null,inst_30595);
var inst_30603 = inst_30602;
var inst_30604 = null;
var inst_30605 = (0);
var inst_30606 = (0);
var state_30743__$1 = (function (){var statearr_30797 = state_30743;
(statearr_30797[(7)] = inst_30605);

(statearr_30797[(8)] = inst_30604);

(statearr_30797[(9)] = inst_30603);

(statearr_30797[(10)] = inst_30606);

return statearr_30797;
})();
var statearr_30798_30868 = state_30743__$1;
(statearr_30798_30868[(2)] = null);

(statearr_30798_30868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (23))){
var inst_30662 = (state_30743[(26)]);
var inst_30664 = (state_30743[(23)]);
var inst_30659 = (state_30743[(24)]);
var inst_30660 = (state_30743[(25)]);
var inst_30656 = (state_30743[(19)]);
var inst_30667 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30669 = (function (){var all_files = inst_30656;
var res_SINGLEQUOTE_ = inst_30659;
var res = inst_30660;
var files_not_loaded = inst_30662;
var dependencies_that_loaded = inst_30664;
return (function (p__30668){
var map__30799 = p__30668;
var map__30799__$1 = (((((!((map__30799 == null))))?(((((map__30799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30799):map__30799);
var request_url = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_30670 = cljs.core.reverse.call(null,inst_30664);
var inst_30671 = cljs.core.map.call(null,inst_30669,inst_30670);
var inst_30672 = cljs.core.pr_str.call(null,inst_30671);
var inst_30673 = figwheel.client.utils.log.call(null,inst_30672);
var state_30743__$1 = (function (){var statearr_30801 = state_30743;
(statearr_30801[(31)] = inst_30667);

return statearr_30801;
})();
var statearr_30802_30869 = state_30743__$1;
(statearr_30802_30869[(2)] = inst_30673);

(statearr_30802_30869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (35))){
var state_30743__$1 = state_30743;
var statearr_30803_30870 = state_30743__$1;
(statearr_30803_30870[(2)] = true);

(statearr_30803_30870[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (19))){
var inst_30646 = (state_30743[(12)]);
var inst_30652 = figwheel.client.file_reloading.expand_files.call(null,inst_30646);
var state_30743__$1 = state_30743;
var statearr_30804_30871 = state_30743__$1;
(statearr_30804_30871[(2)] = inst_30652);

(statearr_30804_30871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (11))){
var state_30743__$1 = state_30743;
var statearr_30805_30872 = state_30743__$1;
(statearr_30805_30872[(2)] = null);

(statearr_30805_30872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (9))){
var inst_30635 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30806_30873 = state_30743__$1;
(statearr_30806_30873[(2)] = inst_30635);

(statearr_30806_30873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (5))){
var inst_30605 = (state_30743[(7)]);
var inst_30606 = (state_30743[(10)]);
var inst_30608 = (inst_30606 < inst_30605);
var inst_30609 = inst_30608;
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30609)){
var statearr_30807_30874 = state_30743__$1;
(statearr_30807_30874[(1)] = (7));

} else {
var statearr_30808_30875 = state_30743__$1;
(statearr_30808_30875[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (14))){
var inst_30616 = (state_30743[(22)]);
var inst_30625 = cljs.core.first.call(null,inst_30616);
var inst_30626 = figwheel.client.file_reloading.eval_body.call(null,inst_30625,opts);
var inst_30627 = cljs.core.next.call(null,inst_30616);
var inst_30603 = inst_30627;
var inst_30604 = null;
var inst_30605 = (0);
var inst_30606 = (0);
var state_30743__$1 = (function (){var statearr_30809 = state_30743;
(statearr_30809[(7)] = inst_30605);

(statearr_30809[(32)] = inst_30626);

(statearr_30809[(8)] = inst_30604);

(statearr_30809[(9)] = inst_30603);

(statearr_30809[(10)] = inst_30606);

return statearr_30809;
})();
var statearr_30810_30876 = state_30743__$1;
(statearr_30810_30876[(2)] = null);

(statearr_30810_30876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (45))){
var state_30743__$1 = state_30743;
var statearr_30811_30877 = state_30743__$1;
(statearr_30811_30877[(2)] = null);

(statearr_30811_30877[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (26))){
var inst_30662 = (state_30743[(26)]);
var inst_30664 = (state_30743[(23)]);
var inst_30659 = (state_30743[(24)]);
var inst_30660 = (state_30743[(25)]);
var inst_30656 = (state_30743[(19)]);
var inst_30679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30681 = (function (){var all_files = inst_30656;
var res_SINGLEQUOTE_ = inst_30659;
var res = inst_30660;
var files_not_loaded = inst_30662;
var dependencies_that_loaded = inst_30664;
return (function (p__30680){
var map__30812 = p__30680;
var map__30812__$1 = (((((!((map__30812 == null))))?(((((map__30812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30812):map__30812);
var namespace = cljs.core.get.call(null,map__30812__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_30682 = cljs.core.map.call(null,inst_30681,inst_30660);
var inst_30683 = cljs.core.pr_str.call(null,inst_30682);
var inst_30684 = figwheel.client.utils.log.call(null,inst_30683);
var inst_30685 = (function (){var all_files = inst_30656;
var res_SINGLEQUOTE_ = inst_30659;
var res = inst_30660;
var files_not_loaded = inst_30662;
var dependencies_that_loaded = inst_30664;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_30686 = setTimeout(inst_30685,(10));
var state_30743__$1 = (function (){var statearr_30814 = state_30743;
(statearr_30814[(33)] = inst_30684);

(statearr_30814[(34)] = inst_30679);

return statearr_30814;
})();
var statearr_30815_30878 = state_30743__$1;
(statearr_30815_30878[(2)] = inst_30686);

(statearr_30815_30878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (16))){
var state_30743__$1 = state_30743;
var statearr_30816_30879 = state_30743__$1;
(statearr_30816_30879[(2)] = reload_dependents);

(statearr_30816_30879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (38))){
var inst_30696 = (state_30743[(16)]);
var inst_30714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30696);
var state_30743__$1 = state_30743;
var statearr_30817_30880 = state_30743__$1;
(statearr_30817_30880[(2)] = inst_30714);

(statearr_30817_30880[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (30))){
var state_30743__$1 = state_30743;
var statearr_30818_30881 = state_30743__$1;
(statearr_30818_30881[(2)] = null);

(statearr_30818_30881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (10))){
var inst_30616 = (state_30743[(22)]);
var inst_30618 = cljs.core.chunked_seq_QMARK_.call(null,inst_30616);
var state_30743__$1 = state_30743;
if(inst_30618){
var statearr_30819_30882 = state_30743__$1;
(statearr_30819_30882[(1)] = (13));

} else {
var statearr_30820_30883 = state_30743__$1;
(statearr_30820_30883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (18))){
var inst_30650 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30650)){
var statearr_30821_30884 = state_30743__$1;
(statearr_30821_30884[(1)] = (19));

} else {
var statearr_30822_30885 = state_30743__$1;
(statearr_30822_30885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (42))){
var state_30743__$1 = state_30743;
var statearr_30823_30886 = state_30743__$1;
(statearr_30823_30886[(2)] = null);

(statearr_30823_30886[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (37))){
var inst_30709 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30824_30887 = state_30743__$1;
(statearr_30824_30887[(2)] = inst_30709);

(statearr_30824_30887[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (8))){
var inst_30603 = (state_30743[(9)]);
var inst_30616 = (state_30743[(22)]);
var inst_30616__$1 = cljs.core.seq.call(null,inst_30603);
var state_30743__$1 = (function (){var statearr_30825 = state_30743;
(statearr_30825[(22)] = inst_30616__$1);

return statearr_30825;
})();
if(inst_30616__$1){
var statearr_30826_30888 = state_30743__$1;
(statearr_30826_30888[(1)] = (10));

} else {
var statearr_30827_30889 = state_30743__$1;
(statearr_30827_30889[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto____0 = (function (){
var statearr_30828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30828[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto__);

(statearr_30828[(1)] = (1));

return statearr_30828;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto____1 = (function (state_30743){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_30743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e30829){if((e30829 instanceof Object)){
var ex__24971__auto__ = e30829;
var statearr_30830_30890 = state_30743;
(statearr_30830_30890[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30891 = state_30743;
state_30743 = G__30891;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto__ = function(state_30743){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto____1.call(this,state_30743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_30831 = f__25063__auto__.call(null);
(statearr_30831[(6)] = c__25062__auto__);

return statearr_30831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30894,link){
var map__30895 = p__30894;
var map__30895__$1 = (((((!((map__30895 == null))))?(((((map__30895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30895):map__30895);
var file = cljs.core.get.call(null,map__30895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__30892_SHARP_,p2__30893_SHARP_){
if(cljs.core._EQ_.call(null,p1__30892_SHARP_,p2__30893_SHARP_)){
return p1__30892_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30898){
var map__30899 = p__30898;
var map__30899__$1 = (((((!((map__30899 == null))))?(((((map__30899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30899):map__30899);
var match_length = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30897_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30897_SHARP_);
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
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30901_SHARP_,p2__30902_SHARP_){
return cljs.core.assoc.call(null,p1__30901_SHARP_,cljs.core.get.call(null,p2__30902_SHARP_,key),p2__30902_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30903 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30903);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30903);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30904,p__30905){
var map__30906 = p__30904;
var map__30906__$1 = (((((!((map__30906 == null))))?(((((map__30906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30906):map__30906);
var on_cssload = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30907 = p__30905;
var map__30907__$1 = (((((!((map__30907 == null))))?(((((map__30907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30907):map__30907);
var files_msg = map__30907__$1;
var files = cljs.core.get.call(null,map__30907__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1696052576186
