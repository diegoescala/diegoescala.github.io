// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28001__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28002__i = 0, G__28002__a = new Array(arguments.length -  0);
while (G__28002__i < G__28002__a.length) {G__28002__a[G__28002__i] = arguments[G__28002__i + 0]; ++G__28002__i;}
  args = new cljs.core.IndexedSeq(G__28002__a,0,null);
} 
return G__28001__delegate.call(this,args);};
G__28001.cljs$lang$maxFixedArity = 0;
G__28001.cljs$lang$applyTo = (function (arglist__28003){
var args = cljs.core.seq(arglist__28003);
return G__28001__delegate(args);
});
G__28001.cljs$core$IFn$_invoke$arity$variadic = G__28001__delegate;
return G__28001;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28004__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28005__i = 0, G__28005__a = new Array(arguments.length -  0);
while (G__28005__i < G__28005__a.length) {G__28005__a[G__28005__i] = arguments[G__28005__i + 0]; ++G__28005__i;}
  args = new cljs.core.IndexedSeq(G__28005__a,0,null);
} 
return G__28004__delegate.call(this,args);};
G__28004.cljs$lang$maxFixedArity = 0;
G__28004.cljs$lang$applyTo = (function (arglist__28006){
var args = cljs.core.seq(arglist__28006);
return G__28004__delegate(args);
});
G__28004.cljs$core$IFn$_invoke$arity$variadic = G__28004__delegate;
return G__28004;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1550771740654
