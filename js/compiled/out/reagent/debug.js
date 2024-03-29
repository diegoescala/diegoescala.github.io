// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21361__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21362__i = 0, G__21362__a = new Array(arguments.length -  0);
while (G__21362__i < G__21362__a.length) {G__21362__a[G__21362__i] = arguments[G__21362__i + 0]; ++G__21362__i;}
  args = new cljs.core.IndexedSeq(G__21362__a,0,null);
} 
return G__21361__delegate.call(this,args);};
G__21361.cljs$lang$maxFixedArity = 0;
G__21361.cljs$lang$applyTo = (function (arglist__21363){
var args = cljs.core.seq(arglist__21363);
return G__21361__delegate(args);
});
G__21361.cljs$core$IFn$_invoke$arity$variadic = G__21361__delegate;
return G__21361;
})()
);

(o.error = (function() { 
var G__21364__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21365__i = 0, G__21365__a = new Array(arguments.length -  0);
while (G__21365__i < G__21365__a.length) {G__21365__a[G__21365__i] = arguments[G__21365__i + 0]; ++G__21365__i;}
  args = new cljs.core.IndexedSeq(G__21365__a,0,null);
} 
return G__21364__delegate.call(this,args);};
G__21364.cljs$lang$maxFixedArity = 0;
G__21364.cljs$lang$applyTo = (function (arglist__21366){
var args = cljs.core.seq(arglist__21366);
return G__21364__delegate(args);
});
G__21364.cljs$core$IFn$_invoke$arity$variadic = G__21364__delegate;
return G__21364;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1696052572671
