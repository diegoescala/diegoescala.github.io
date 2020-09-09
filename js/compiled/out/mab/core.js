// Compiled by ClojureScript 1.10.520 {}
goog.provide('mab.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
mab.core.weather_icons = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sunny","sunny",1448267778),"http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png",new cljs.core.Keyword(null,"cloudy","cloudy",1231969413),"http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clouds-icon.png"], null);
mab.core.weather = (function mab$core$weather(city,temp,low,high,conditions){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.weather-widget","div.weather-widget",-202089208),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.city","div.city",1845051112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),city], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-temp","div.current-temp",-618946099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(temp),"\u02DA"].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.low-temp","div.col-md-6.low-temp",-1131709241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Low"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"\u02DA"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.hi-temp","div.col-md-6.hi-temp",-1853228223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"High"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(high),"\u02DA"].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.conditions","div.conditions",1816498704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get.call(null,mab.core.weather_icons,conditions)], null)], null)], null)], null)], null)], null)], null);
});
mab.core.weather_pane = (function mab$core$weather_pane(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21449 = arguments.length;
var i__4731__auto___21450 = (0);
while(true){
if((i__4731__auto___21450 < len__4730__auto___21449)){
args__4736__auto__.push((arguments[i__4731__auto___21450]));

var G__21451 = (i__4731__auto___21450 + (1));
i__4731__auto___21450 = G__21451;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return mab.core.weather_pane.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

mab.core.weather_pane.cljs$core$IFn$_invoke$arity$variadic = (function (weather_data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.weather-pane","div.weather-pane",1191647803),weather_data], null);
});

mab.core.weather_pane.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mab.core.weather_pane.cljs$lang$applyTo = (function (seq21448){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21448));
});

mab.core.main = (function mab$core$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mab.core.weather_pane,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [mab.core.weather,"Dallas",(35),(23),(73),new cljs.core.Keyword(null,"cloudy","cloudy",1231969413)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [mab.core.weather,"Austin",(76),(30),(105),new cljs.core.Keyword(null,"sunny","sunny",1448267778)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [mab.core.weather,"Chicago",(20),(10),(30),new cljs.core.Keyword(null,"cloudy","cloudy",1231969413)], null)], null)], null)], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mab.core.main], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1599595545014
