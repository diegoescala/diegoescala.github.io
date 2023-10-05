// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25122 = arguments.length;
switch (G__25122) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25123 = (function (f,blockable,meta25124){
this.f = f;
this.blockable = blockable;
this.meta25124 = meta25124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25125,meta25124__$1){
var self__ = this;
var _25125__$1 = this;
return (new cljs.core.async.t_cljs$core$async25123(self__.f,self__.blockable,meta25124__$1));
}));

(cljs.core.async.t_cljs$core$async25123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25125){
var self__ = this;
var _25125__$1 = this;
return self__.meta25124;
}));

(cljs.core.async.t_cljs$core$async25123.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25123.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25124","meta25124",-344922451,null)], null);
}));

(cljs.core.async.t_cljs$core$async25123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25123");

(cljs.core.async.t_cljs$core$async25123.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25123.
 */
cljs.core.async.__GT_t_cljs$core$async25123 = (function cljs$core$async$__GT_t_cljs$core$async25123(f__$1,blockable__$1,meta25124){
return (new cljs.core.async.t_cljs$core$async25123(f__$1,blockable__$1,meta25124));
});

}

return (new cljs.core.async.t_cljs$core$async25123(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25129 = arguments.length;
switch (G__25129) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25132 = arguments.length;
switch (G__25132) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25135 = arguments.length;
switch (G__25135) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25137 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25137);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_25137);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25139 = arguments.length;
switch (G__25139) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___25141 = n;
var x_25142 = (0);
while(true){
if((x_25142 < n__4613__auto___25141)){
(a[x_25142] = x_25142);

var G__25143 = (x_25142 + (1));
x_25142 = G__25143;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25144 = (function (flag,meta25145){
this.flag = flag;
this.meta25145 = meta25145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25146,meta25145__$1){
var self__ = this;
var _25146__$1 = this;
return (new cljs.core.async.t_cljs$core$async25144(self__.flag,meta25145__$1));
}));

(cljs.core.async.t_cljs$core$async25144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25146){
var self__ = this;
var _25146__$1 = this;
return self__.meta25145;
}));

(cljs.core.async.t_cljs$core$async25144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25145","meta25145",-124502173,null)], null);
}));

(cljs.core.async.t_cljs$core$async25144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25144");

(cljs.core.async.t_cljs$core$async25144.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25144.
 */
cljs.core.async.__GT_t_cljs$core$async25144 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25144(flag__$1,meta25145){
return (new cljs.core.async.t_cljs$core$async25144(flag__$1,meta25145));
});

}

return (new cljs.core.async.t_cljs$core$async25144(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25147 = (function (flag,cb,meta25148){
this.flag = flag;
this.cb = cb;
this.meta25148 = meta25148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25149,meta25148__$1){
var self__ = this;
var _25149__$1 = this;
return (new cljs.core.async.t_cljs$core$async25147(self__.flag,self__.cb,meta25148__$1));
}));

(cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25149){
var self__ = this;
var _25149__$1 = this;
return self__.meta25148;
}));

(cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25148","meta25148",1331108097,null)], null);
}));

(cljs.core.async.t_cljs$core$async25147.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25147");

(cljs.core.async.t_cljs$core$async25147.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25147");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25147.
 */
cljs.core.async.__GT_t_cljs$core$async25147 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25147(flag__$1,cb__$1,meta25148){
return (new cljs.core.async.t_cljs$core$async25147(flag__$1,cb__$1,meta25148));
});

}

return (new cljs.core.async.t_cljs$core$async25147(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25150_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25150_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25151_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25151_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25152 = (i + (1));
i = G__25152;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25158 = arguments.length;
var i__4737__auto___25159 = (0);
while(true){
if((i__4737__auto___25159 < len__4736__auto___25158)){
args__4742__auto__.push((arguments[i__4737__auto___25159]));

var G__25160 = (i__4737__auto___25159 + (1));
i__4737__auto___25159 = G__25160;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25155){
var map__25156 = p__25155;
var map__25156__$1 = (((((!((map__25156 == null))))?(((((map__25156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25156):map__25156);
var opts = map__25156__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25153){
var G__25154 = cljs.core.first.call(null,seq25153);
var seq25153__$1 = cljs.core.next.call(null,seq25153);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25154,seq25153__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25162 = arguments.length;
switch (G__25162) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25062__auto___25208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25186){
var state_val_25187 = (state_25186[(1)]);
if((state_val_25187 === (7))){
var inst_25182 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25188_25209 = state_25186__$1;
(statearr_25188_25209[(2)] = inst_25182);

(statearr_25188_25209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (1))){
var state_25186__$1 = state_25186;
var statearr_25189_25210 = state_25186__$1;
(statearr_25189_25210[(2)] = null);

(statearr_25189_25210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (4))){
var inst_25165 = (state_25186[(7)]);
var inst_25165__$1 = (state_25186[(2)]);
var inst_25166 = (inst_25165__$1 == null);
var state_25186__$1 = (function (){var statearr_25190 = state_25186;
(statearr_25190[(7)] = inst_25165__$1);

return statearr_25190;
})();
if(cljs.core.truth_(inst_25166)){
var statearr_25191_25211 = state_25186__$1;
(statearr_25191_25211[(1)] = (5));

} else {
var statearr_25192_25212 = state_25186__$1;
(statearr_25192_25212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (13))){
var state_25186__$1 = state_25186;
var statearr_25193_25213 = state_25186__$1;
(statearr_25193_25213[(2)] = null);

(statearr_25193_25213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (6))){
var inst_25165 = (state_25186[(7)]);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25186__$1,(11),to,inst_25165);
} else {
if((state_val_25187 === (3))){
var inst_25184 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25186__$1,inst_25184);
} else {
if((state_val_25187 === (12))){
var state_25186__$1 = state_25186;
var statearr_25194_25214 = state_25186__$1;
(statearr_25194_25214[(2)] = null);

(statearr_25194_25214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (2))){
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25186__$1,(4),from);
} else {
if((state_val_25187 === (11))){
var inst_25175 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
if(cljs.core.truth_(inst_25175)){
var statearr_25195_25215 = state_25186__$1;
(statearr_25195_25215[(1)] = (12));

} else {
var statearr_25196_25216 = state_25186__$1;
(statearr_25196_25216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (9))){
var state_25186__$1 = state_25186;
var statearr_25197_25217 = state_25186__$1;
(statearr_25197_25217[(2)] = null);

(statearr_25197_25217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (5))){
var state_25186__$1 = state_25186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25198_25218 = state_25186__$1;
(statearr_25198_25218[(1)] = (8));

} else {
var statearr_25199_25219 = state_25186__$1;
(statearr_25199_25219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (14))){
var inst_25180 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25200_25220 = state_25186__$1;
(statearr_25200_25220[(2)] = inst_25180);

(statearr_25200_25220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (10))){
var inst_25172 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25201_25221 = state_25186__$1;
(statearr_25201_25221[(2)] = inst_25172);

(statearr_25201_25221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (8))){
var inst_25169 = cljs.core.async.close_BANG_.call(null,to);
var state_25186__$1 = state_25186;
var statearr_25202_25222 = state_25186__$1;
(statearr_25202_25222[(2)] = inst_25169);

(statearr_25202_25222[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_25203 = [null,null,null,null,null,null,null,null];
(statearr_25203[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_25203[(1)] = (1));

return statearr_25203;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_25186){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25204){if((e25204 instanceof Object)){
var ex__24971__auto__ = e25204;
var statearr_25205_25223 = state_25186;
(statearr_25205_25223[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25224 = state_25186;
state_25186 = G__25224;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_25186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_25186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25206 = f__25063__auto__.call(null);
(statearr_25206[(6)] = c__25062__auto___25208);

return statearr_25206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__25225){
var vec__25226 = p__25225;
var v = cljs.core.nth.call(null,vec__25226,(0),null);
var p = cljs.core.nth.call(null,vec__25226,(1),null);
var job = vec__25226;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25062__auto___25397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25233){
var state_val_25234 = (state_25233[(1)]);
if((state_val_25234 === (1))){
var state_25233__$1 = state_25233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25233__$1,(2),res,v);
} else {
if((state_val_25234 === (2))){
var inst_25230 = (state_25233[(2)]);
var inst_25231 = cljs.core.async.close_BANG_.call(null,res);
var state_25233__$1 = (function (){var statearr_25235 = state_25233;
(statearr_25235[(7)] = inst_25230);

return statearr_25235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25233__$1,inst_25231);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0 = (function (){
var statearr_25236 = [null,null,null,null,null,null,null,null];
(statearr_25236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__);

(statearr_25236[(1)] = (1));

return statearr_25236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1 = (function (state_25233){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25237){if((e25237 instanceof Object)){
var ex__24971__auto__ = e25237;
var statearr_25238_25398 = state_25233;
(statearr_25238_25398[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25399 = state_25233;
state_25233 = G__25399;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = function(state_25233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1.call(this,state_25233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25239 = f__25063__auto__.call(null);
(statearr_25239[(6)] = c__25062__auto___25397);

return statearr_25239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__25240){
var vec__25241 = p__25240;
var v = cljs.core.nth.call(null,vec__25241,(0),null);
var p = cljs.core.nth.call(null,vec__25241,(1),null);
var job = vec__25241;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___25400 = n;
var __25401 = (0);
while(true){
if((__25401 < n__4613__auto___25400)){
var G__25244_25402 = type;
var G__25244_25403__$1 = (((G__25244_25402 instanceof cljs.core.Keyword))?G__25244_25402.fqn:null);
switch (G__25244_25403__$1) {
case "compute":
var c__25062__auto___25405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25401,c__25062__auto___25405,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async){
return (function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = ((function (__25401,c__25062__auto___25405,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async){
return (function (state_25257){
var state_val_25258 = (state_25257[(1)]);
if((state_val_25258 === (1))){
var state_25257__$1 = state_25257;
var statearr_25259_25406 = state_25257__$1;
(statearr_25259_25406[(2)] = null);

(statearr_25259_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (2))){
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25257__$1,(4),jobs);
} else {
if((state_val_25258 === (3))){
var inst_25255 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25257__$1,inst_25255);
} else {
if((state_val_25258 === (4))){
var inst_25247 = (state_25257[(2)]);
var inst_25248 = process.call(null,inst_25247);
var state_25257__$1 = state_25257;
if(cljs.core.truth_(inst_25248)){
var statearr_25260_25407 = state_25257__$1;
(statearr_25260_25407[(1)] = (5));

} else {
var statearr_25261_25408 = state_25257__$1;
(statearr_25261_25408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (5))){
var state_25257__$1 = state_25257;
var statearr_25262_25409 = state_25257__$1;
(statearr_25262_25409[(2)] = null);

(statearr_25262_25409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (6))){
var state_25257__$1 = state_25257;
var statearr_25263_25410 = state_25257__$1;
(statearr_25263_25410[(2)] = null);

(statearr_25263_25410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (7))){
var inst_25253 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25264_25411 = state_25257__$1;
(statearr_25264_25411[(2)] = inst_25253);

(statearr_25264_25411[(1)] = (3));


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
});})(__25401,c__25062__auto___25405,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async))
;
return ((function (__25401,switch__24967__auto__,c__25062__auto___25405,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0 = (function (){
var statearr_25265 = [null,null,null,null,null,null,null];
(statearr_25265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__);

(statearr_25265[(1)] = (1));

return statearr_25265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1 = (function (state_25257){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25266){if((e25266 instanceof Object)){
var ex__24971__auto__ = e25266;
var statearr_25267_25412 = state_25257;
(statearr_25267_25412[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25413 = state_25257;
state_25257 = G__25413;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = function(state_25257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1.call(this,state_25257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__;
})()
;})(__25401,switch__24967__auto__,c__25062__auto___25405,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async))
})();
var state__25064__auto__ = (function (){var statearr_25268 = f__25063__auto__.call(null);
(statearr_25268[(6)] = c__25062__auto___25405);

return statearr_25268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
});})(__25401,c__25062__auto___25405,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async))
);


break;
case "async":
var c__25062__auto___25414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25401,c__25062__auto___25414,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async){
return (function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = ((function (__25401,c__25062__auto___25414,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async){
return (function (state_25281){
var state_val_25282 = (state_25281[(1)]);
if((state_val_25282 === (1))){
var state_25281__$1 = state_25281;
var statearr_25283_25415 = state_25281__$1;
(statearr_25283_25415[(2)] = null);

(statearr_25283_25415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25282 === (2))){
var state_25281__$1 = state_25281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25281__$1,(4),jobs);
} else {
if((state_val_25282 === (3))){
var inst_25279 = (state_25281[(2)]);
var state_25281__$1 = state_25281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25281__$1,inst_25279);
} else {
if((state_val_25282 === (4))){
var inst_25271 = (state_25281[(2)]);
var inst_25272 = async.call(null,inst_25271);
var state_25281__$1 = state_25281;
if(cljs.core.truth_(inst_25272)){
var statearr_25284_25416 = state_25281__$1;
(statearr_25284_25416[(1)] = (5));

} else {
var statearr_25285_25417 = state_25281__$1;
(statearr_25285_25417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25282 === (5))){
var state_25281__$1 = state_25281;
var statearr_25286_25418 = state_25281__$1;
(statearr_25286_25418[(2)] = null);

(statearr_25286_25418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25282 === (6))){
var state_25281__$1 = state_25281;
var statearr_25287_25419 = state_25281__$1;
(statearr_25287_25419[(2)] = null);

(statearr_25287_25419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25282 === (7))){
var inst_25277 = (state_25281[(2)]);
var state_25281__$1 = state_25281;
var statearr_25288_25420 = state_25281__$1;
(statearr_25288_25420[(2)] = inst_25277);

(statearr_25288_25420[(1)] = (3));


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
});})(__25401,c__25062__auto___25414,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async))
;
return ((function (__25401,switch__24967__auto__,c__25062__auto___25414,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0 = (function (){
var statearr_25289 = [null,null,null,null,null,null,null];
(statearr_25289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__);

(statearr_25289[(1)] = (1));

return statearr_25289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1 = (function (state_25281){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25290){if((e25290 instanceof Object)){
var ex__24971__auto__ = e25290;
var statearr_25291_25421 = state_25281;
(statearr_25291_25421[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25422 = state_25281;
state_25281 = G__25422;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = function(state_25281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1.call(this,state_25281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__;
})()
;})(__25401,switch__24967__auto__,c__25062__auto___25414,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async))
})();
var state__25064__auto__ = (function (){var statearr_25292 = f__25063__auto__.call(null);
(statearr_25292[(6)] = c__25062__auto___25414);

return statearr_25292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
});})(__25401,c__25062__auto___25414,G__25244_25402,G__25244_25403__$1,n__4613__auto___25400,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25244_25403__$1)].join('')));

}

var G__25423 = (__25401 + (1));
__25401 = G__25423;
continue;
} else {
}
break;
}

var c__25062__auto___25424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25314){
var state_val_25315 = (state_25314[(1)]);
if((state_val_25315 === (7))){
var inst_25310 = (state_25314[(2)]);
var state_25314__$1 = state_25314;
var statearr_25316_25425 = state_25314__$1;
(statearr_25316_25425[(2)] = inst_25310);

(statearr_25316_25425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (1))){
var state_25314__$1 = state_25314;
var statearr_25317_25426 = state_25314__$1;
(statearr_25317_25426[(2)] = null);

(statearr_25317_25426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (4))){
var inst_25295 = (state_25314[(7)]);
var inst_25295__$1 = (state_25314[(2)]);
var inst_25296 = (inst_25295__$1 == null);
var state_25314__$1 = (function (){var statearr_25318 = state_25314;
(statearr_25318[(7)] = inst_25295__$1);

return statearr_25318;
})();
if(cljs.core.truth_(inst_25296)){
var statearr_25319_25427 = state_25314__$1;
(statearr_25319_25427[(1)] = (5));

} else {
var statearr_25320_25428 = state_25314__$1;
(statearr_25320_25428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (6))){
var inst_25300 = (state_25314[(8)]);
var inst_25295 = (state_25314[(7)]);
var inst_25300__$1 = cljs.core.async.chan.call(null,(1));
var inst_25301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25302 = [inst_25295,inst_25300__$1];
var inst_25303 = (new cljs.core.PersistentVector(null,2,(5),inst_25301,inst_25302,null));
var state_25314__$1 = (function (){var statearr_25321 = state_25314;
(statearr_25321[(8)] = inst_25300__$1);

return statearr_25321;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25314__$1,(8),jobs,inst_25303);
} else {
if((state_val_25315 === (3))){
var inst_25312 = (state_25314[(2)]);
var state_25314__$1 = state_25314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25314__$1,inst_25312);
} else {
if((state_val_25315 === (2))){
var state_25314__$1 = state_25314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25314__$1,(4),from);
} else {
if((state_val_25315 === (9))){
var inst_25307 = (state_25314[(2)]);
var state_25314__$1 = (function (){var statearr_25322 = state_25314;
(statearr_25322[(9)] = inst_25307);

return statearr_25322;
})();
var statearr_25323_25429 = state_25314__$1;
(statearr_25323_25429[(2)] = null);

(statearr_25323_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (5))){
var inst_25298 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25314__$1 = state_25314;
var statearr_25324_25430 = state_25314__$1;
(statearr_25324_25430[(2)] = inst_25298);

(statearr_25324_25430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (8))){
var inst_25300 = (state_25314[(8)]);
var inst_25305 = (state_25314[(2)]);
var state_25314__$1 = (function (){var statearr_25325 = state_25314;
(statearr_25325[(10)] = inst_25305);

return statearr_25325;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25314__$1,(9),results,inst_25300);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0 = (function (){
var statearr_25326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__);

(statearr_25326[(1)] = (1));

return statearr_25326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1 = (function (state_25314){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25327){if((e25327 instanceof Object)){
var ex__24971__auto__ = e25327;
var statearr_25328_25431 = state_25314;
(statearr_25328_25431[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25432 = state_25314;
state_25314 = G__25432;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = function(state_25314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1.call(this,state_25314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25329 = f__25063__auto__.call(null);
(statearr_25329[(6)] = c__25062__auto___25424);

return statearr_25329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25367){
var state_val_25368 = (state_25367[(1)]);
if((state_val_25368 === (7))){
var inst_25363 = (state_25367[(2)]);
var state_25367__$1 = state_25367;
var statearr_25369_25433 = state_25367__$1;
(statearr_25369_25433[(2)] = inst_25363);

(statearr_25369_25433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (20))){
var state_25367__$1 = state_25367;
var statearr_25370_25434 = state_25367__$1;
(statearr_25370_25434[(2)] = null);

(statearr_25370_25434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (1))){
var state_25367__$1 = state_25367;
var statearr_25371_25435 = state_25367__$1;
(statearr_25371_25435[(2)] = null);

(statearr_25371_25435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (4))){
var inst_25332 = (state_25367[(7)]);
var inst_25332__$1 = (state_25367[(2)]);
var inst_25333 = (inst_25332__$1 == null);
var state_25367__$1 = (function (){var statearr_25372 = state_25367;
(statearr_25372[(7)] = inst_25332__$1);

return statearr_25372;
})();
if(cljs.core.truth_(inst_25333)){
var statearr_25373_25436 = state_25367__$1;
(statearr_25373_25436[(1)] = (5));

} else {
var statearr_25374_25437 = state_25367__$1;
(statearr_25374_25437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (15))){
var inst_25345 = (state_25367[(8)]);
var state_25367__$1 = state_25367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25367__$1,(18),to,inst_25345);
} else {
if((state_val_25368 === (21))){
var inst_25358 = (state_25367[(2)]);
var state_25367__$1 = state_25367;
var statearr_25375_25438 = state_25367__$1;
(statearr_25375_25438[(2)] = inst_25358);

(statearr_25375_25438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (13))){
var inst_25360 = (state_25367[(2)]);
var state_25367__$1 = (function (){var statearr_25376 = state_25367;
(statearr_25376[(9)] = inst_25360);

return statearr_25376;
})();
var statearr_25377_25439 = state_25367__$1;
(statearr_25377_25439[(2)] = null);

(statearr_25377_25439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (6))){
var inst_25332 = (state_25367[(7)]);
var state_25367__$1 = state_25367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25367__$1,(11),inst_25332);
} else {
if((state_val_25368 === (17))){
var inst_25353 = (state_25367[(2)]);
var state_25367__$1 = state_25367;
if(cljs.core.truth_(inst_25353)){
var statearr_25378_25440 = state_25367__$1;
(statearr_25378_25440[(1)] = (19));

} else {
var statearr_25379_25441 = state_25367__$1;
(statearr_25379_25441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (3))){
var inst_25365 = (state_25367[(2)]);
var state_25367__$1 = state_25367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25367__$1,inst_25365);
} else {
if((state_val_25368 === (12))){
var inst_25342 = (state_25367[(10)]);
var state_25367__$1 = state_25367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25367__$1,(14),inst_25342);
} else {
if((state_val_25368 === (2))){
var state_25367__$1 = state_25367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25367__$1,(4),results);
} else {
if((state_val_25368 === (19))){
var state_25367__$1 = state_25367;
var statearr_25380_25442 = state_25367__$1;
(statearr_25380_25442[(2)] = null);

(statearr_25380_25442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (11))){
var inst_25342 = (state_25367[(2)]);
var state_25367__$1 = (function (){var statearr_25381 = state_25367;
(statearr_25381[(10)] = inst_25342);

return statearr_25381;
})();
var statearr_25382_25443 = state_25367__$1;
(statearr_25382_25443[(2)] = null);

(statearr_25382_25443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (9))){
var state_25367__$1 = state_25367;
var statearr_25383_25444 = state_25367__$1;
(statearr_25383_25444[(2)] = null);

(statearr_25383_25444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (5))){
var state_25367__$1 = state_25367;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25384_25445 = state_25367__$1;
(statearr_25384_25445[(1)] = (8));

} else {
var statearr_25385_25446 = state_25367__$1;
(statearr_25385_25446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (14))){
var inst_25345 = (state_25367[(8)]);
var inst_25345__$1 = (state_25367[(2)]);
var inst_25346 = (inst_25345__$1 == null);
var inst_25347 = cljs.core.not.call(null,inst_25346);
var state_25367__$1 = (function (){var statearr_25386 = state_25367;
(statearr_25386[(8)] = inst_25345__$1);

return statearr_25386;
})();
if(inst_25347){
var statearr_25387_25447 = state_25367__$1;
(statearr_25387_25447[(1)] = (15));

} else {
var statearr_25388_25448 = state_25367__$1;
(statearr_25388_25448[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (16))){
var state_25367__$1 = state_25367;
var statearr_25389_25449 = state_25367__$1;
(statearr_25389_25449[(2)] = false);

(statearr_25389_25449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (10))){
var inst_25339 = (state_25367[(2)]);
var state_25367__$1 = state_25367;
var statearr_25390_25450 = state_25367__$1;
(statearr_25390_25450[(2)] = inst_25339);

(statearr_25390_25450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (18))){
var inst_25350 = (state_25367[(2)]);
var state_25367__$1 = state_25367;
var statearr_25391_25451 = state_25367__$1;
(statearr_25391_25451[(2)] = inst_25350);

(statearr_25391_25451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25368 === (8))){
var inst_25336 = cljs.core.async.close_BANG_.call(null,to);
var state_25367__$1 = state_25367;
var statearr_25392_25452 = state_25367__$1;
(statearr_25392_25452[(2)] = inst_25336);

(statearr_25392_25452[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0 = (function (){
var statearr_25393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__);

(statearr_25393[(1)] = (1));

return statearr_25393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1 = (function (state_25367){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25394){if((e25394 instanceof Object)){
var ex__24971__auto__ = e25394;
var statearr_25395_25453 = state_25367;
(statearr_25395_25453[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25454 = state_25367;
state_25367 = G__25454;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__ = function(state_25367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1.call(this,state_25367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25396 = f__25063__auto__.call(null);
(statearr_25396[(6)] = c__25062__auto__);

return statearr_25396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25456 = arguments.length;
switch (G__25456) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25459 = arguments.length;
switch (G__25459) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25462 = arguments.length;
switch (G__25462) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25062__auto___25511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25488){
var state_val_25489 = (state_25488[(1)]);
if((state_val_25489 === (7))){
var inst_25484 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
var statearr_25490_25512 = state_25488__$1;
(statearr_25490_25512[(2)] = inst_25484);

(statearr_25490_25512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (1))){
var state_25488__$1 = state_25488;
var statearr_25491_25513 = state_25488__$1;
(statearr_25491_25513[(2)] = null);

(statearr_25491_25513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (4))){
var inst_25465 = (state_25488[(7)]);
var inst_25465__$1 = (state_25488[(2)]);
var inst_25466 = (inst_25465__$1 == null);
var state_25488__$1 = (function (){var statearr_25492 = state_25488;
(statearr_25492[(7)] = inst_25465__$1);

return statearr_25492;
})();
if(cljs.core.truth_(inst_25466)){
var statearr_25493_25514 = state_25488__$1;
(statearr_25493_25514[(1)] = (5));

} else {
var statearr_25494_25515 = state_25488__$1;
(statearr_25494_25515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (13))){
var state_25488__$1 = state_25488;
var statearr_25495_25516 = state_25488__$1;
(statearr_25495_25516[(2)] = null);

(statearr_25495_25516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (6))){
var inst_25465 = (state_25488[(7)]);
var inst_25471 = p.call(null,inst_25465);
var state_25488__$1 = state_25488;
if(cljs.core.truth_(inst_25471)){
var statearr_25496_25517 = state_25488__$1;
(statearr_25496_25517[(1)] = (9));

} else {
var statearr_25497_25518 = state_25488__$1;
(statearr_25497_25518[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (3))){
var inst_25486 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25488__$1,inst_25486);
} else {
if((state_val_25489 === (12))){
var state_25488__$1 = state_25488;
var statearr_25498_25519 = state_25488__$1;
(statearr_25498_25519[(2)] = null);

(statearr_25498_25519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (2))){
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25488__$1,(4),ch);
} else {
if((state_val_25489 === (11))){
var inst_25465 = (state_25488[(7)]);
var inst_25475 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25488__$1,(8),inst_25475,inst_25465);
} else {
if((state_val_25489 === (9))){
var state_25488__$1 = state_25488;
var statearr_25499_25520 = state_25488__$1;
(statearr_25499_25520[(2)] = tc);

(statearr_25499_25520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (5))){
var inst_25468 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25469 = cljs.core.async.close_BANG_.call(null,fc);
var state_25488__$1 = (function (){var statearr_25500 = state_25488;
(statearr_25500[(8)] = inst_25468);

return statearr_25500;
})();
var statearr_25501_25521 = state_25488__$1;
(statearr_25501_25521[(2)] = inst_25469);

(statearr_25501_25521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (14))){
var inst_25482 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
var statearr_25502_25522 = state_25488__$1;
(statearr_25502_25522[(2)] = inst_25482);

(statearr_25502_25522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (10))){
var state_25488__$1 = state_25488;
var statearr_25503_25523 = state_25488__$1;
(statearr_25503_25523[(2)] = fc);

(statearr_25503_25523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (8))){
var inst_25477 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
if(cljs.core.truth_(inst_25477)){
var statearr_25504_25524 = state_25488__$1;
(statearr_25504_25524[(1)] = (12));

} else {
var statearr_25505_25525 = state_25488__$1;
(statearr_25505_25525[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_25506 = [null,null,null,null,null,null,null,null,null];
(statearr_25506[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_25506[(1)] = (1));

return statearr_25506;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_25488){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25507){if((e25507 instanceof Object)){
var ex__24971__auto__ = e25507;
var statearr_25508_25526 = state_25488;
(statearr_25508_25526[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25527 = state_25488;
state_25488 = G__25527;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_25488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_25488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25509 = f__25063__auto__.call(null);
(statearr_25509[(6)] = c__25062__auto___25511);

return statearr_25509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25548){
var state_val_25549 = (state_25548[(1)]);
if((state_val_25549 === (7))){
var inst_25544 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25550_25568 = state_25548__$1;
(statearr_25550_25568[(2)] = inst_25544);

(statearr_25550_25568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (1))){
var inst_25528 = init;
var state_25548__$1 = (function (){var statearr_25551 = state_25548;
(statearr_25551[(7)] = inst_25528);

return statearr_25551;
})();
var statearr_25552_25569 = state_25548__$1;
(statearr_25552_25569[(2)] = null);

(statearr_25552_25569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (4))){
var inst_25531 = (state_25548[(8)]);
var inst_25531__$1 = (state_25548[(2)]);
var inst_25532 = (inst_25531__$1 == null);
var state_25548__$1 = (function (){var statearr_25553 = state_25548;
(statearr_25553[(8)] = inst_25531__$1);

return statearr_25553;
})();
if(cljs.core.truth_(inst_25532)){
var statearr_25554_25570 = state_25548__$1;
(statearr_25554_25570[(1)] = (5));

} else {
var statearr_25555_25571 = state_25548__$1;
(statearr_25555_25571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (6))){
var inst_25531 = (state_25548[(8)]);
var inst_25535 = (state_25548[(9)]);
var inst_25528 = (state_25548[(7)]);
var inst_25535__$1 = f.call(null,inst_25528,inst_25531);
var inst_25536 = cljs.core.reduced_QMARK_.call(null,inst_25535__$1);
var state_25548__$1 = (function (){var statearr_25556 = state_25548;
(statearr_25556[(9)] = inst_25535__$1);

return statearr_25556;
})();
if(inst_25536){
var statearr_25557_25572 = state_25548__$1;
(statearr_25557_25572[(1)] = (8));

} else {
var statearr_25558_25573 = state_25548__$1;
(statearr_25558_25573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (3))){
var inst_25546 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25548__$1,inst_25546);
} else {
if((state_val_25549 === (2))){
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25548__$1,(4),ch);
} else {
if((state_val_25549 === (9))){
var inst_25535 = (state_25548[(9)]);
var inst_25528 = inst_25535;
var state_25548__$1 = (function (){var statearr_25559 = state_25548;
(statearr_25559[(7)] = inst_25528);

return statearr_25559;
})();
var statearr_25560_25574 = state_25548__$1;
(statearr_25560_25574[(2)] = null);

(statearr_25560_25574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (5))){
var inst_25528 = (state_25548[(7)]);
var state_25548__$1 = state_25548;
var statearr_25561_25575 = state_25548__$1;
(statearr_25561_25575[(2)] = inst_25528);

(statearr_25561_25575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (10))){
var inst_25542 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25562_25576 = state_25548__$1;
(statearr_25562_25576[(2)] = inst_25542);

(statearr_25562_25576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (8))){
var inst_25535 = (state_25548[(9)]);
var inst_25538 = cljs.core.deref.call(null,inst_25535);
var state_25548__$1 = state_25548;
var statearr_25563_25577 = state_25548__$1;
(statearr_25563_25577[(2)] = inst_25538);

(statearr_25563_25577[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24968__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24968__auto____0 = (function (){
var statearr_25564 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25564[(0)] = cljs$core$async$reduce_$_state_machine__24968__auto__);

(statearr_25564[(1)] = (1));

return statearr_25564;
});
var cljs$core$async$reduce_$_state_machine__24968__auto____1 = (function (state_25548){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25565){if((e25565 instanceof Object)){
var ex__24971__auto__ = e25565;
var statearr_25566_25578 = state_25548;
(statearr_25566_25578[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25579 = state_25548;
state_25548 = G__25579;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24968__auto__ = function(state_25548){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24968__auto____1.call(this,state_25548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24968__auto____0;
cljs$core$async$reduce_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24968__auto____1;
return cljs$core$async$reduce_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25567 = f__25063__auto__.call(null);
(statearr_25567[(6)] = c__25062__auto__);

return statearr_25567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25585){
var state_val_25586 = (state_25585[(1)]);
if((state_val_25586 === (1))){
var inst_25580 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25585__$1,(2),inst_25580);
} else {
if((state_val_25586 === (2))){
var inst_25582 = (state_25585[(2)]);
var inst_25583 = f__$1.call(null,inst_25582);
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25585__$1,inst_25583);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24968__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24968__auto____0 = (function (){
var statearr_25587 = [null,null,null,null,null,null,null];
(statearr_25587[(0)] = cljs$core$async$transduce_$_state_machine__24968__auto__);

(statearr_25587[(1)] = (1));

return statearr_25587;
});
var cljs$core$async$transduce_$_state_machine__24968__auto____1 = (function (state_25585){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25588){if((e25588 instanceof Object)){
var ex__24971__auto__ = e25588;
var statearr_25589_25591 = state_25585;
(statearr_25589_25591[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25592 = state_25585;
state_25585 = G__25592;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24968__auto__ = function(state_25585){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24968__auto____1.call(this,state_25585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24968__auto____0;
cljs$core$async$transduce_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24968__auto____1;
return cljs$core$async$transduce_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25590 = f__25063__auto__.call(null);
(statearr_25590[(6)] = c__25062__auto__);

return statearr_25590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25594 = arguments.length;
switch (G__25594) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25619){
var state_val_25620 = (state_25619[(1)]);
if((state_val_25620 === (7))){
var inst_25601 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
var statearr_25621_25642 = state_25619__$1;
(statearr_25621_25642[(2)] = inst_25601);

(statearr_25621_25642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (1))){
var inst_25595 = cljs.core.seq.call(null,coll);
var inst_25596 = inst_25595;
var state_25619__$1 = (function (){var statearr_25622 = state_25619;
(statearr_25622[(7)] = inst_25596);

return statearr_25622;
})();
var statearr_25623_25643 = state_25619__$1;
(statearr_25623_25643[(2)] = null);

(statearr_25623_25643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (4))){
var inst_25596 = (state_25619[(7)]);
var inst_25599 = cljs.core.first.call(null,inst_25596);
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25619__$1,(7),ch,inst_25599);
} else {
if((state_val_25620 === (13))){
var inst_25613 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
var statearr_25624_25644 = state_25619__$1;
(statearr_25624_25644[(2)] = inst_25613);

(statearr_25624_25644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (6))){
var inst_25604 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
if(cljs.core.truth_(inst_25604)){
var statearr_25625_25645 = state_25619__$1;
(statearr_25625_25645[(1)] = (8));

} else {
var statearr_25626_25646 = state_25619__$1;
(statearr_25626_25646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (3))){
var inst_25617 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25619__$1,inst_25617);
} else {
if((state_val_25620 === (12))){
var state_25619__$1 = state_25619;
var statearr_25627_25647 = state_25619__$1;
(statearr_25627_25647[(2)] = null);

(statearr_25627_25647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (2))){
var inst_25596 = (state_25619[(7)]);
var state_25619__$1 = state_25619;
if(cljs.core.truth_(inst_25596)){
var statearr_25628_25648 = state_25619__$1;
(statearr_25628_25648[(1)] = (4));

} else {
var statearr_25629_25649 = state_25619__$1;
(statearr_25629_25649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (11))){
var inst_25610 = cljs.core.async.close_BANG_.call(null,ch);
var state_25619__$1 = state_25619;
var statearr_25630_25650 = state_25619__$1;
(statearr_25630_25650[(2)] = inst_25610);

(statearr_25630_25650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (9))){
var state_25619__$1 = state_25619;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25631_25651 = state_25619__$1;
(statearr_25631_25651[(1)] = (11));

} else {
var statearr_25632_25652 = state_25619__$1;
(statearr_25632_25652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (5))){
var inst_25596 = (state_25619[(7)]);
var state_25619__$1 = state_25619;
var statearr_25633_25653 = state_25619__$1;
(statearr_25633_25653[(2)] = inst_25596);

(statearr_25633_25653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (10))){
var inst_25615 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
var statearr_25634_25654 = state_25619__$1;
(statearr_25634_25654[(2)] = inst_25615);

(statearr_25634_25654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (8))){
var inst_25596 = (state_25619[(7)]);
var inst_25606 = cljs.core.next.call(null,inst_25596);
var inst_25596__$1 = inst_25606;
var state_25619__$1 = (function (){var statearr_25635 = state_25619;
(statearr_25635[(7)] = inst_25596__$1);

return statearr_25635;
})();
var statearr_25636_25655 = state_25619__$1;
(statearr_25636_25655[(2)] = null);

(statearr_25636_25655[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_25637 = [null,null,null,null,null,null,null,null];
(statearr_25637[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_25637[(1)] = (1));

return statearr_25637;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_25619){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25638){if((e25638 instanceof Object)){
var ex__24971__auto__ = e25638;
var statearr_25639_25656 = state_25619;
(statearr_25639_25656[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25657 = state_25619;
state_25619 = G__25657;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_25619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_25619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25640 = f__25063__auto__.call(null);
(statearr_25640[(6)] = c__25062__auto__);

return statearr_25640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25658 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25658.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25659 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25659.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25660 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25660.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25661 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25661.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25662 = (function (ch,cs,meta25663){
this.ch = ch;
this.cs = cs;
this.meta25663 = meta25663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25664,meta25663__$1){
var self__ = this;
var _25664__$1 = this;
return (new cljs.core.async.t_cljs$core$async25662(self__.ch,self__.cs,meta25663__$1));
}));

(cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25664){
var self__ = this;
var _25664__$1 = this;
return self__.meta25663;
}));

(cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25663","meta25663",289532203,null)], null);
}));

(cljs.core.async.t_cljs$core$async25662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25662");

(cljs.core.async.t_cljs$core$async25662.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25662.
 */
cljs.core.async.__GT_t_cljs$core$async25662 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25662(ch__$1,cs__$1,meta25663){
return (new cljs.core.async.t_cljs$core$async25662(ch__$1,cs__$1,meta25663));
});

}

return (new cljs.core.async.t_cljs$core$async25662(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__25062__auto___25884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_25799){
var state_val_25800 = (state_25799[(1)]);
if((state_val_25800 === (7))){
var inst_25795 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25801_25885 = state_25799__$1;
(statearr_25801_25885[(2)] = inst_25795);

(statearr_25801_25885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (20))){
var inst_25698 = (state_25799[(7)]);
var inst_25710 = cljs.core.first.call(null,inst_25698);
var inst_25711 = cljs.core.nth.call(null,inst_25710,(0),null);
var inst_25712 = cljs.core.nth.call(null,inst_25710,(1),null);
var state_25799__$1 = (function (){var statearr_25802 = state_25799;
(statearr_25802[(8)] = inst_25711);

return statearr_25802;
})();
if(cljs.core.truth_(inst_25712)){
var statearr_25803_25886 = state_25799__$1;
(statearr_25803_25886[(1)] = (22));

} else {
var statearr_25804_25887 = state_25799__$1;
(statearr_25804_25887[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (27))){
var inst_25740 = (state_25799[(9)]);
var inst_25747 = (state_25799[(10)]);
var inst_25667 = (state_25799[(11)]);
var inst_25742 = (state_25799[(12)]);
var inst_25747__$1 = cljs.core._nth.call(null,inst_25740,inst_25742);
var inst_25748 = cljs.core.async.put_BANG_.call(null,inst_25747__$1,inst_25667,done);
var state_25799__$1 = (function (){var statearr_25805 = state_25799;
(statearr_25805[(10)] = inst_25747__$1);

return statearr_25805;
})();
if(cljs.core.truth_(inst_25748)){
var statearr_25806_25888 = state_25799__$1;
(statearr_25806_25888[(1)] = (30));

} else {
var statearr_25807_25889 = state_25799__$1;
(statearr_25807_25889[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (1))){
var state_25799__$1 = state_25799;
var statearr_25808_25890 = state_25799__$1;
(statearr_25808_25890[(2)] = null);

(statearr_25808_25890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (24))){
var inst_25698 = (state_25799[(7)]);
var inst_25717 = (state_25799[(2)]);
var inst_25718 = cljs.core.next.call(null,inst_25698);
var inst_25676 = inst_25718;
var inst_25677 = null;
var inst_25678 = (0);
var inst_25679 = (0);
var state_25799__$1 = (function (){var statearr_25809 = state_25799;
(statearr_25809[(13)] = inst_25677);

(statearr_25809[(14)] = inst_25679);

(statearr_25809[(15)] = inst_25717);

(statearr_25809[(16)] = inst_25678);

(statearr_25809[(17)] = inst_25676);

return statearr_25809;
})();
var statearr_25810_25891 = state_25799__$1;
(statearr_25810_25891[(2)] = null);

(statearr_25810_25891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (39))){
var state_25799__$1 = state_25799;
var statearr_25814_25892 = state_25799__$1;
(statearr_25814_25892[(2)] = null);

(statearr_25814_25892[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (4))){
var inst_25667 = (state_25799[(11)]);
var inst_25667__$1 = (state_25799[(2)]);
var inst_25668 = (inst_25667__$1 == null);
var state_25799__$1 = (function (){var statearr_25815 = state_25799;
(statearr_25815[(11)] = inst_25667__$1);

return statearr_25815;
})();
if(cljs.core.truth_(inst_25668)){
var statearr_25816_25893 = state_25799__$1;
(statearr_25816_25893[(1)] = (5));

} else {
var statearr_25817_25894 = state_25799__$1;
(statearr_25817_25894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (15))){
var inst_25677 = (state_25799[(13)]);
var inst_25679 = (state_25799[(14)]);
var inst_25678 = (state_25799[(16)]);
var inst_25676 = (state_25799[(17)]);
var inst_25694 = (state_25799[(2)]);
var inst_25695 = (inst_25679 + (1));
var tmp25811 = inst_25677;
var tmp25812 = inst_25678;
var tmp25813 = inst_25676;
var inst_25676__$1 = tmp25813;
var inst_25677__$1 = tmp25811;
var inst_25678__$1 = tmp25812;
var inst_25679__$1 = inst_25695;
var state_25799__$1 = (function (){var statearr_25818 = state_25799;
(statearr_25818[(13)] = inst_25677__$1);

(statearr_25818[(18)] = inst_25694);

(statearr_25818[(14)] = inst_25679__$1);

(statearr_25818[(16)] = inst_25678__$1);

(statearr_25818[(17)] = inst_25676__$1);

return statearr_25818;
})();
var statearr_25819_25895 = state_25799__$1;
(statearr_25819_25895[(2)] = null);

(statearr_25819_25895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (21))){
var inst_25721 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25823_25896 = state_25799__$1;
(statearr_25823_25896[(2)] = inst_25721);

(statearr_25823_25896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (31))){
var inst_25747 = (state_25799[(10)]);
var inst_25751 = done.call(null,null);
var inst_25752 = cljs.core.async.untap_STAR_.call(null,m,inst_25747);
var state_25799__$1 = (function (){var statearr_25824 = state_25799;
(statearr_25824[(19)] = inst_25751);

return statearr_25824;
})();
var statearr_25825_25897 = state_25799__$1;
(statearr_25825_25897[(2)] = inst_25752);

(statearr_25825_25897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (32))){
var inst_25740 = (state_25799[(9)]);
var inst_25741 = (state_25799[(20)]);
var inst_25739 = (state_25799[(21)]);
var inst_25742 = (state_25799[(12)]);
var inst_25754 = (state_25799[(2)]);
var inst_25755 = (inst_25742 + (1));
var tmp25820 = inst_25740;
var tmp25821 = inst_25741;
var tmp25822 = inst_25739;
var inst_25739__$1 = tmp25822;
var inst_25740__$1 = tmp25820;
var inst_25741__$1 = tmp25821;
var inst_25742__$1 = inst_25755;
var state_25799__$1 = (function (){var statearr_25826 = state_25799;
(statearr_25826[(9)] = inst_25740__$1);

(statearr_25826[(20)] = inst_25741__$1);

(statearr_25826[(22)] = inst_25754);

(statearr_25826[(21)] = inst_25739__$1);

(statearr_25826[(12)] = inst_25742__$1);

return statearr_25826;
})();
var statearr_25827_25898 = state_25799__$1;
(statearr_25827_25898[(2)] = null);

(statearr_25827_25898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (40))){
var inst_25767 = (state_25799[(23)]);
var inst_25771 = done.call(null,null);
var inst_25772 = cljs.core.async.untap_STAR_.call(null,m,inst_25767);
var state_25799__$1 = (function (){var statearr_25828 = state_25799;
(statearr_25828[(24)] = inst_25771);

return statearr_25828;
})();
var statearr_25829_25899 = state_25799__$1;
(statearr_25829_25899[(2)] = inst_25772);

(statearr_25829_25899[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (33))){
var inst_25758 = (state_25799[(25)]);
var inst_25760 = cljs.core.chunked_seq_QMARK_.call(null,inst_25758);
var state_25799__$1 = state_25799;
if(inst_25760){
var statearr_25830_25900 = state_25799__$1;
(statearr_25830_25900[(1)] = (36));

} else {
var statearr_25831_25901 = state_25799__$1;
(statearr_25831_25901[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (13))){
var inst_25688 = (state_25799[(26)]);
var inst_25691 = cljs.core.async.close_BANG_.call(null,inst_25688);
var state_25799__$1 = state_25799;
var statearr_25832_25902 = state_25799__$1;
(statearr_25832_25902[(2)] = inst_25691);

(statearr_25832_25902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (22))){
var inst_25711 = (state_25799[(8)]);
var inst_25714 = cljs.core.async.close_BANG_.call(null,inst_25711);
var state_25799__$1 = state_25799;
var statearr_25833_25903 = state_25799__$1;
(statearr_25833_25903[(2)] = inst_25714);

(statearr_25833_25903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (36))){
var inst_25758 = (state_25799[(25)]);
var inst_25762 = cljs.core.chunk_first.call(null,inst_25758);
var inst_25763 = cljs.core.chunk_rest.call(null,inst_25758);
var inst_25764 = cljs.core.count.call(null,inst_25762);
var inst_25739 = inst_25763;
var inst_25740 = inst_25762;
var inst_25741 = inst_25764;
var inst_25742 = (0);
var state_25799__$1 = (function (){var statearr_25834 = state_25799;
(statearr_25834[(9)] = inst_25740);

(statearr_25834[(20)] = inst_25741);

(statearr_25834[(21)] = inst_25739);

(statearr_25834[(12)] = inst_25742);

return statearr_25834;
})();
var statearr_25835_25904 = state_25799__$1;
(statearr_25835_25904[(2)] = null);

(statearr_25835_25904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (41))){
var inst_25758 = (state_25799[(25)]);
var inst_25774 = (state_25799[(2)]);
var inst_25775 = cljs.core.next.call(null,inst_25758);
var inst_25739 = inst_25775;
var inst_25740 = null;
var inst_25741 = (0);
var inst_25742 = (0);
var state_25799__$1 = (function (){var statearr_25836 = state_25799;
(statearr_25836[(9)] = inst_25740);

(statearr_25836[(20)] = inst_25741);

(statearr_25836[(27)] = inst_25774);

(statearr_25836[(21)] = inst_25739);

(statearr_25836[(12)] = inst_25742);

return statearr_25836;
})();
var statearr_25837_25905 = state_25799__$1;
(statearr_25837_25905[(2)] = null);

(statearr_25837_25905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (43))){
var state_25799__$1 = state_25799;
var statearr_25838_25906 = state_25799__$1;
(statearr_25838_25906[(2)] = null);

(statearr_25838_25906[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (29))){
var inst_25783 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25839_25907 = state_25799__$1;
(statearr_25839_25907[(2)] = inst_25783);

(statearr_25839_25907[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (44))){
var inst_25792 = (state_25799[(2)]);
var state_25799__$1 = (function (){var statearr_25840 = state_25799;
(statearr_25840[(28)] = inst_25792);

return statearr_25840;
})();
var statearr_25841_25908 = state_25799__$1;
(statearr_25841_25908[(2)] = null);

(statearr_25841_25908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (6))){
var inst_25731 = (state_25799[(29)]);
var inst_25730 = cljs.core.deref.call(null,cs);
var inst_25731__$1 = cljs.core.keys.call(null,inst_25730);
var inst_25732 = cljs.core.count.call(null,inst_25731__$1);
var inst_25733 = cljs.core.reset_BANG_.call(null,dctr,inst_25732);
var inst_25738 = cljs.core.seq.call(null,inst_25731__$1);
var inst_25739 = inst_25738;
var inst_25740 = null;
var inst_25741 = (0);
var inst_25742 = (0);
var state_25799__$1 = (function (){var statearr_25842 = state_25799;
(statearr_25842[(9)] = inst_25740);

(statearr_25842[(29)] = inst_25731__$1);

(statearr_25842[(20)] = inst_25741);

(statearr_25842[(21)] = inst_25739);

(statearr_25842[(12)] = inst_25742);

(statearr_25842[(30)] = inst_25733);

return statearr_25842;
})();
var statearr_25843_25909 = state_25799__$1;
(statearr_25843_25909[(2)] = null);

(statearr_25843_25909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (28))){
var inst_25758 = (state_25799[(25)]);
var inst_25739 = (state_25799[(21)]);
var inst_25758__$1 = cljs.core.seq.call(null,inst_25739);
var state_25799__$1 = (function (){var statearr_25844 = state_25799;
(statearr_25844[(25)] = inst_25758__$1);

return statearr_25844;
})();
if(inst_25758__$1){
var statearr_25845_25910 = state_25799__$1;
(statearr_25845_25910[(1)] = (33));

} else {
var statearr_25846_25911 = state_25799__$1;
(statearr_25846_25911[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (25))){
var inst_25741 = (state_25799[(20)]);
var inst_25742 = (state_25799[(12)]);
var inst_25744 = (inst_25742 < inst_25741);
var inst_25745 = inst_25744;
var state_25799__$1 = state_25799;
if(cljs.core.truth_(inst_25745)){
var statearr_25847_25912 = state_25799__$1;
(statearr_25847_25912[(1)] = (27));

} else {
var statearr_25848_25913 = state_25799__$1;
(statearr_25848_25913[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (34))){
var state_25799__$1 = state_25799;
var statearr_25849_25914 = state_25799__$1;
(statearr_25849_25914[(2)] = null);

(statearr_25849_25914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (17))){
var state_25799__$1 = state_25799;
var statearr_25850_25915 = state_25799__$1;
(statearr_25850_25915[(2)] = null);

(statearr_25850_25915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (3))){
var inst_25797 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25799__$1,inst_25797);
} else {
if((state_val_25800 === (12))){
var inst_25726 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25851_25916 = state_25799__$1;
(statearr_25851_25916[(2)] = inst_25726);

(statearr_25851_25916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (2))){
var state_25799__$1 = state_25799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25799__$1,(4),ch);
} else {
if((state_val_25800 === (23))){
var state_25799__$1 = state_25799;
var statearr_25852_25917 = state_25799__$1;
(statearr_25852_25917[(2)] = null);

(statearr_25852_25917[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (35))){
var inst_25781 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25853_25918 = state_25799__$1;
(statearr_25853_25918[(2)] = inst_25781);

(statearr_25853_25918[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (19))){
var inst_25698 = (state_25799[(7)]);
var inst_25702 = cljs.core.chunk_first.call(null,inst_25698);
var inst_25703 = cljs.core.chunk_rest.call(null,inst_25698);
var inst_25704 = cljs.core.count.call(null,inst_25702);
var inst_25676 = inst_25703;
var inst_25677 = inst_25702;
var inst_25678 = inst_25704;
var inst_25679 = (0);
var state_25799__$1 = (function (){var statearr_25854 = state_25799;
(statearr_25854[(13)] = inst_25677);

(statearr_25854[(14)] = inst_25679);

(statearr_25854[(16)] = inst_25678);

(statearr_25854[(17)] = inst_25676);

return statearr_25854;
})();
var statearr_25855_25919 = state_25799__$1;
(statearr_25855_25919[(2)] = null);

(statearr_25855_25919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (11))){
var inst_25698 = (state_25799[(7)]);
var inst_25676 = (state_25799[(17)]);
var inst_25698__$1 = cljs.core.seq.call(null,inst_25676);
var state_25799__$1 = (function (){var statearr_25856 = state_25799;
(statearr_25856[(7)] = inst_25698__$1);

return statearr_25856;
})();
if(inst_25698__$1){
var statearr_25857_25920 = state_25799__$1;
(statearr_25857_25920[(1)] = (16));

} else {
var statearr_25858_25921 = state_25799__$1;
(statearr_25858_25921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (9))){
var inst_25728 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25859_25922 = state_25799__$1;
(statearr_25859_25922[(2)] = inst_25728);

(statearr_25859_25922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (5))){
var inst_25674 = cljs.core.deref.call(null,cs);
var inst_25675 = cljs.core.seq.call(null,inst_25674);
var inst_25676 = inst_25675;
var inst_25677 = null;
var inst_25678 = (0);
var inst_25679 = (0);
var state_25799__$1 = (function (){var statearr_25860 = state_25799;
(statearr_25860[(13)] = inst_25677);

(statearr_25860[(14)] = inst_25679);

(statearr_25860[(16)] = inst_25678);

(statearr_25860[(17)] = inst_25676);

return statearr_25860;
})();
var statearr_25861_25923 = state_25799__$1;
(statearr_25861_25923[(2)] = null);

(statearr_25861_25923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (14))){
var state_25799__$1 = state_25799;
var statearr_25862_25924 = state_25799__$1;
(statearr_25862_25924[(2)] = null);

(statearr_25862_25924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (45))){
var inst_25789 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25863_25925 = state_25799__$1;
(statearr_25863_25925[(2)] = inst_25789);

(statearr_25863_25925[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (26))){
var inst_25731 = (state_25799[(29)]);
var inst_25785 = (state_25799[(2)]);
var inst_25786 = cljs.core.seq.call(null,inst_25731);
var state_25799__$1 = (function (){var statearr_25864 = state_25799;
(statearr_25864[(31)] = inst_25785);

return statearr_25864;
})();
if(inst_25786){
var statearr_25865_25926 = state_25799__$1;
(statearr_25865_25926[(1)] = (42));

} else {
var statearr_25866_25927 = state_25799__$1;
(statearr_25866_25927[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (16))){
var inst_25698 = (state_25799[(7)]);
var inst_25700 = cljs.core.chunked_seq_QMARK_.call(null,inst_25698);
var state_25799__$1 = state_25799;
if(inst_25700){
var statearr_25867_25928 = state_25799__$1;
(statearr_25867_25928[(1)] = (19));

} else {
var statearr_25868_25929 = state_25799__$1;
(statearr_25868_25929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (38))){
var inst_25778 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25869_25930 = state_25799__$1;
(statearr_25869_25930[(2)] = inst_25778);

(statearr_25869_25930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (30))){
var state_25799__$1 = state_25799;
var statearr_25870_25931 = state_25799__$1;
(statearr_25870_25931[(2)] = null);

(statearr_25870_25931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (10))){
var inst_25677 = (state_25799[(13)]);
var inst_25679 = (state_25799[(14)]);
var inst_25687 = cljs.core._nth.call(null,inst_25677,inst_25679);
var inst_25688 = cljs.core.nth.call(null,inst_25687,(0),null);
var inst_25689 = cljs.core.nth.call(null,inst_25687,(1),null);
var state_25799__$1 = (function (){var statearr_25871 = state_25799;
(statearr_25871[(26)] = inst_25688);

return statearr_25871;
})();
if(cljs.core.truth_(inst_25689)){
var statearr_25872_25932 = state_25799__$1;
(statearr_25872_25932[(1)] = (13));

} else {
var statearr_25873_25933 = state_25799__$1;
(statearr_25873_25933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (18))){
var inst_25724 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25874_25934 = state_25799__$1;
(statearr_25874_25934[(2)] = inst_25724);

(statearr_25874_25934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (42))){
var state_25799__$1 = state_25799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25799__$1,(45),dchan);
} else {
if((state_val_25800 === (37))){
var inst_25758 = (state_25799[(25)]);
var inst_25667 = (state_25799[(11)]);
var inst_25767 = (state_25799[(23)]);
var inst_25767__$1 = cljs.core.first.call(null,inst_25758);
var inst_25768 = cljs.core.async.put_BANG_.call(null,inst_25767__$1,inst_25667,done);
var state_25799__$1 = (function (){var statearr_25875 = state_25799;
(statearr_25875[(23)] = inst_25767__$1);

return statearr_25875;
})();
if(cljs.core.truth_(inst_25768)){
var statearr_25876_25935 = state_25799__$1;
(statearr_25876_25935[(1)] = (39));

} else {
var statearr_25877_25936 = state_25799__$1;
(statearr_25877_25936[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (8))){
var inst_25679 = (state_25799[(14)]);
var inst_25678 = (state_25799[(16)]);
var inst_25681 = (inst_25679 < inst_25678);
var inst_25682 = inst_25681;
var state_25799__$1 = state_25799;
if(cljs.core.truth_(inst_25682)){
var statearr_25878_25937 = state_25799__$1;
(statearr_25878_25937[(1)] = (10));

} else {
var statearr_25879_25938 = state_25799__$1;
(statearr_25879_25938[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__24968__auto__ = null;
var cljs$core$async$mult_$_state_machine__24968__auto____0 = (function (){
var statearr_25880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25880[(0)] = cljs$core$async$mult_$_state_machine__24968__auto__);

(statearr_25880[(1)] = (1));

return statearr_25880;
});
var cljs$core$async$mult_$_state_machine__24968__auto____1 = (function (state_25799){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_25799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e25881){if((e25881 instanceof Object)){
var ex__24971__auto__ = e25881;
var statearr_25882_25939 = state_25799;
(statearr_25882_25939[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25940 = state_25799;
state_25799 = G__25940;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24968__auto__ = function(state_25799){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24968__auto____1.call(this,state_25799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24968__auto____0;
cljs$core$async$mult_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24968__auto____1;
return cljs$core$async$mult_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_25883 = f__25063__auto__.call(null);
(statearr_25883[(6)] = c__25062__auto___25884);

return statearr_25883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25942 = arguments.length;
switch (G__25942) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_25944 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25944.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25945 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25945.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25946 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25946.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25947 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25947.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25948 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25948.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25959 = arguments.length;
var i__4737__auto___25960 = (0);
while(true){
if((i__4737__auto___25960 < len__4736__auto___25959)){
args__4742__auto__.push((arguments[i__4737__auto___25960]));

var G__25961 = (i__4737__auto___25960 + (1));
i__4737__auto___25960 = G__25961;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25953){
var map__25954 = p__25953;
var map__25954__$1 = (((((!((map__25954 == null))))?(((((map__25954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25954):map__25954);
var opts = map__25954__$1;
var statearr_25956_25962 = state;
(statearr_25956_25962[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25957_25963 = state;
(statearr_25957_25963[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25958_25964 = state;
(statearr_25958_25964[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25949){
var G__25950 = cljs.core.first.call(null,seq25949);
var seq25949__$1 = cljs.core.next.call(null,seq25949);
var G__25951 = cljs.core.first.call(null,seq25949__$1);
var seq25949__$2 = cljs.core.next.call(null,seq25949__$1);
var G__25952 = cljs.core.first.call(null,seq25949__$2);
var seq25949__$3 = cljs.core.next.call(null,seq25949__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25950,G__25951,G__25952,seq25949__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25965 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25966){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25966 = meta25966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25967,meta25966__$1){
var self__ = this;
var _25967__$1 = this;
return (new cljs.core.async.t_cljs$core$async25965(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25966__$1));
}));

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25967){
var self__ = this;
var _25967__$1 = this;
return self__.meta25966;
}));

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25965.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25966","meta25966",738894913,null)], null);
}));

(cljs.core.async.t_cljs$core$async25965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25965");

(cljs.core.async.t_cljs$core$async25965.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25965.
 */
cljs.core.async.__GT_t_cljs$core$async25965 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25965(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25966){
return (new cljs.core.async.t_cljs$core$async25965(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25966));
});

}

return (new cljs.core.async.t_cljs$core$async25965(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25062__auto___26129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26069){
var state_val_26070 = (state_26069[(1)]);
if((state_val_26070 === (7))){
var inst_25984 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26071_26130 = state_26069__$1;
(statearr_26071_26130[(2)] = inst_25984);

(statearr_26071_26130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (20))){
var inst_25996 = (state_26069[(7)]);
var state_26069__$1 = state_26069;
var statearr_26072_26131 = state_26069__$1;
(statearr_26072_26131[(2)] = inst_25996);

(statearr_26072_26131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (27))){
var state_26069__$1 = state_26069;
var statearr_26073_26132 = state_26069__$1;
(statearr_26073_26132[(2)] = null);

(statearr_26073_26132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (1))){
var inst_25971 = (state_26069[(8)]);
var inst_25971__$1 = calc_state.call(null);
var inst_25973 = (inst_25971__$1 == null);
var inst_25974 = cljs.core.not.call(null,inst_25973);
var state_26069__$1 = (function (){var statearr_26074 = state_26069;
(statearr_26074[(8)] = inst_25971__$1);

return statearr_26074;
})();
if(inst_25974){
var statearr_26075_26133 = state_26069__$1;
(statearr_26075_26133[(1)] = (2));

} else {
var statearr_26076_26134 = state_26069__$1;
(statearr_26076_26134[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (24))){
var inst_26043 = (state_26069[(9)]);
var inst_26020 = (state_26069[(10)]);
var inst_26029 = (state_26069[(11)]);
var inst_26043__$1 = inst_26020.call(null,inst_26029);
var state_26069__$1 = (function (){var statearr_26077 = state_26069;
(statearr_26077[(9)] = inst_26043__$1);

return statearr_26077;
})();
if(cljs.core.truth_(inst_26043__$1)){
var statearr_26078_26135 = state_26069__$1;
(statearr_26078_26135[(1)] = (29));

} else {
var statearr_26079_26136 = state_26069__$1;
(statearr_26079_26136[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (4))){
var inst_25987 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_25987)){
var statearr_26080_26137 = state_26069__$1;
(statearr_26080_26137[(1)] = (8));

} else {
var statearr_26081_26138 = state_26069__$1;
(statearr_26081_26138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (15))){
var inst_26014 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26014)){
var statearr_26082_26139 = state_26069__$1;
(statearr_26082_26139[(1)] = (19));

} else {
var statearr_26083_26140 = state_26069__$1;
(statearr_26083_26140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (21))){
var inst_26019 = (state_26069[(12)]);
var inst_26019__$1 = (state_26069[(2)]);
var inst_26020 = cljs.core.get.call(null,inst_26019__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26021 = cljs.core.get.call(null,inst_26019__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26022 = cljs.core.get.call(null,inst_26019__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26069__$1 = (function (){var statearr_26084 = state_26069;
(statearr_26084[(10)] = inst_26020);

(statearr_26084[(12)] = inst_26019__$1);

(statearr_26084[(13)] = inst_26021);

return statearr_26084;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26069__$1,(22),inst_26022);
} else {
if((state_val_26070 === (31))){
var inst_26051 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26051)){
var statearr_26085_26141 = state_26069__$1;
(statearr_26085_26141[(1)] = (32));

} else {
var statearr_26086_26142 = state_26069__$1;
(statearr_26086_26142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (32))){
var inst_26028 = (state_26069[(14)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26069__$1,(35),out,inst_26028);
} else {
if((state_val_26070 === (33))){
var inst_26019 = (state_26069[(12)]);
var inst_25996 = inst_26019;
var state_26069__$1 = (function (){var statearr_26087 = state_26069;
(statearr_26087[(7)] = inst_25996);

return statearr_26087;
})();
var statearr_26088_26143 = state_26069__$1;
(statearr_26088_26143[(2)] = null);

(statearr_26088_26143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (13))){
var inst_25996 = (state_26069[(7)]);
var inst_26003 = inst_25996.cljs$lang$protocol_mask$partition0$;
var inst_26004 = (inst_26003 & (64));
var inst_26005 = inst_25996.cljs$core$ISeq$;
var inst_26006 = (cljs.core.PROTOCOL_SENTINEL === inst_26005);
var inst_26007 = ((inst_26004) || (inst_26006));
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26007)){
var statearr_26089_26144 = state_26069__$1;
(statearr_26089_26144[(1)] = (16));

} else {
var statearr_26090_26145 = state_26069__$1;
(statearr_26090_26145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (22))){
var inst_26029 = (state_26069[(11)]);
var inst_26028 = (state_26069[(14)]);
var inst_26027 = (state_26069[(2)]);
var inst_26028__$1 = cljs.core.nth.call(null,inst_26027,(0),null);
var inst_26029__$1 = cljs.core.nth.call(null,inst_26027,(1),null);
var inst_26030 = (inst_26028__$1 == null);
var inst_26031 = cljs.core._EQ_.call(null,inst_26029__$1,change);
var inst_26032 = ((inst_26030) || (inst_26031));
var state_26069__$1 = (function (){var statearr_26091 = state_26069;
(statearr_26091[(11)] = inst_26029__$1);

(statearr_26091[(14)] = inst_26028__$1);

return statearr_26091;
})();
if(cljs.core.truth_(inst_26032)){
var statearr_26092_26146 = state_26069__$1;
(statearr_26092_26146[(1)] = (23));

} else {
var statearr_26093_26147 = state_26069__$1;
(statearr_26093_26147[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (36))){
var inst_26019 = (state_26069[(12)]);
var inst_25996 = inst_26019;
var state_26069__$1 = (function (){var statearr_26094 = state_26069;
(statearr_26094[(7)] = inst_25996);

return statearr_26094;
})();
var statearr_26095_26148 = state_26069__$1;
(statearr_26095_26148[(2)] = null);

(statearr_26095_26148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (29))){
var inst_26043 = (state_26069[(9)]);
var state_26069__$1 = state_26069;
var statearr_26096_26149 = state_26069__$1;
(statearr_26096_26149[(2)] = inst_26043);

(statearr_26096_26149[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (6))){
var state_26069__$1 = state_26069;
var statearr_26097_26150 = state_26069__$1;
(statearr_26097_26150[(2)] = false);

(statearr_26097_26150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (28))){
var inst_26039 = (state_26069[(2)]);
var inst_26040 = calc_state.call(null);
var inst_25996 = inst_26040;
var state_26069__$1 = (function (){var statearr_26098 = state_26069;
(statearr_26098[(15)] = inst_26039);

(statearr_26098[(7)] = inst_25996);

return statearr_26098;
})();
var statearr_26099_26151 = state_26069__$1;
(statearr_26099_26151[(2)] = null);

(statearr_26099_26151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (25))){
var inst_26065 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26100_26152 = state_26069__$1;
(statearr_26100_26152[(2)] = inst_26065);

(statearr_26100_26152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (34))){
var inst_26063 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26101_26153 = state_26069__$1;
(statearr_26101_26153[(2)] = inst_26063);

(statearr_26101_26153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (17))){
var state_26069__$1 = state_26069;
var statearr_26102_26154 = state_26069__$1;
(statearr_26102_26154[(2)] = false);

(statearr_26102_26154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (3))){
var state_26069__$1 = state_26069;
var statearr_26103_26155 = state_26069__$1;
(statearr_26103_26155[(2)] = false);

(statearr_26103_26155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (12))){
var inst_26067 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26069__$1,inst_26067);
} else {
if((state_val_26070 === (2))){
var inst_25971 = (state_26069[(8)]);
var inst_25976 = inst_25971.cljs$lang$protocol_mask$partition0$;
var inst_25977 = (inst_25976 & (64));
var inst_25978 = inst_25971.cljs$core$ISeq$;
var inst_25979 = (cljs.core.PROTOCOL_SENTINEL === inst_25978);
var inst_25980 = ((inst_25977) || (inst_25979));
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_25980)){
var statearr_26104_26156 = state_26069__$1;
(statearr_26104_26156[(1)] = (5));

} else {
var statearr_26105_26157 = state_26069__$1;
(statearr_26105_26157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (23))){
var inst_26028 = (state_26069[(14)]);
var inst_26034 = (inst_26028 == null);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26034)){
var statearr_26106_26158 = state_26069__$1;
(statearr_26106_26158[(1)] = (26));

} else {
var statearr_26107_26159 = state_26069__$1;
(statearr_26107_26159[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (35))){
var inst_26054 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26054)){
var statearr_26108_26160 = state_26069__$1;
(statearr_26108_26160[(1)] = (36));

} else {
var statearr_26109_26161 = state_26069__$1;
(statearr_26109_26161[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (19))){
var inst_25996 = (state_26069[(7)]);
var inst_26016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25996);
var state_26069__$1 = state_26069;
var statearr_26110_26162 = state_26069__$1;
(statearr_26110_26162[(2)] = inst_26016);

(statearr_26110_26162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (11))){
var inst_25996 = (state_26069[(7)]);
var inst_26000 = (inst_25996 == null);
var inst_26001 = cljs.core.not.call(null,inst_26000);
var state_26069__$1 = state_26069;
if(inst_26001){
var statearr_26111_26163 = state_26069__$1;
(statearr_26111_26163[(1)] = (13));

} else {
var statearr_26112_26164 = state_26069__$1;
(statearr_26112_26164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (9))){
var inst_25971 = (state_26069[(8)]);
var state_26069__$1 = state_26069;
var statearr_26113_26165 = state_26069__$1;
(statearr_26113_26165[(2)] = inst_25971);

(statearr_26113_26165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (5))){
var state_26069__$1 = state_26069;
var statearr_26114_26166 = state_26069__$1;
(statearr_26114_26166[(2)] = true);

(statearr_26114_26166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (14))){
var state_26069__$1 = state_26069;
var statearr_26115_26167 = state_26069__$1;
(statearr_26115_26167[(2)] = false);

(statearr_26115_26167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (26))){
var inst_26029 = (state_26069[(11)]);
var inst_26036 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26029);
var state_26069__$1 = state_26069;
var statearr_26116_26168 = state_26069__$1;
(statearr_26116_26168[(2)] = inst_26036);

(statearr_26116_26168[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (16))){
var state_26069__$1 = state_26069;
var statearr_26117_26169 = state_26069__$1;
(statearr_26117_26169[(2)] = true);

(statearr_26117_26169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (38))){
var inst_26059 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26118_26170 = state_26069__$1;
(statearr_26118_26170[(2)] = inst_26059);

(statearr_26118_26170[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (30))){
var inst_26020 = (state_26069[(10)]);
var inst_26029 = (state_26069[(11)]);
var inst_26021 = (state_26069[(13)]);
var inst_26046 = cljs.core.empty_QMARK_.call(null,inst_26020);
var inst_26047 = inst_26021.call(null,inst_26029);
var inst_26048 = cljs.core.not.call(null,inst_26047);
var inst_26049 = ((inst_26046) && (inst_26048));
var state_26069__$1 = state_26069;
var statearr_26119_26171 = state_26069__$1;
(statearr_26119_26171[(2)] = inst_26049);

(statearr_26119_26171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (10))){
var inst_25971 = (state_26069[(8)]);
var inst_25992 = (state_26069[(2)]);
var inst_25993 = cljs.core.get.call(null,inst_25992,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25994 = cljs.core.get.call(null,inst_25992,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25995 = cljs.core.get.call(null,inst_25992,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25996 = inst_25971;
var state_26069__$1 = (function (){var statearr_26120 = state_26069;
(statearr_26120[(16)] = inst_25995);

(statearr_26120[(17)] = inst_25993);

(statearr_26120[(18)] = inst_25994);

(statearr_26120[(7)] = inst_25996);

return statearr_26120;
})();
var statearr_26121_26172 = state_26069__$1;
(statearr_26121_26172[(2)] = null);

(statearr_26121_26172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (18))){
var inst_26011 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26122_26173 = state_26069__$1;
(statearr_26122_26173[(2)] = inst_26011);

(statearr_26122_26173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (37))){
var state_26069__$1 = state_26069;
var statearr_26123_26174 = state_26069__$1;
(statearr_26123_26174[(2)] = null);

(statearr_26123_26174[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (8))){
var inst_25971 = (state_26069[(8)]);
var inst_25989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25971);
var state_26069__$1 = state_26069;
var statearr_26124_26175 = state_26069__$1;
(statearr_26124_26175[(2)] = inst_25989);

(statearr_26124_26175[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__24968__auto__ = null;
var cljs$core$async$mix_$_state_machine__24968__auto____0 = (function (){
var statearr_26125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26125[(0)] = cljs$core$async$mix_$_state_machine__24968__auto__);

(statearr_26125[(1)] = (1));

return statearr_26125;
});
var cljs$core$async$mix_$_state_machine__24968__auto____1 = (function (state_26069){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26126){if((e26126 instanceof Object)){
var ex__24971__auto__ = e26126;
var statearr_26127_26176 = state_26069;
(statearr_26127_26176[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26177 = state_26069;
state_26069 = G__26177;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24968__auto__ = function(state_26069){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24968__auto____1.call(this,state_26069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24968__auto____0;
cljs$core$async$mix_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24968__auto____1;
return cljs$core$async$mix_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26128 = f__25063__auto__.call(null);
(statearr_26128[(6)] = c__25062__auto___26129);

return statearr_26128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_26180 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_26180.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_26181 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_26181.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26182 = (function() {
var G__26183 = null;
var G__26183__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__26183__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__26183 = function(p,v){
switch(arguments.length){
case 1:
return G__26183__1.call(this,p);
case 2:
return G__26183__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26183.cljs$core$IFn$_invoke$arity$1 = G__26183__1;
G__26183.cljs$core$IFn$_invoke$arity$2 = G__26183__2;
return G__26183;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26179 = arguments.length;
switch (G__26179) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26182.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26182.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26187 = arguments.length;
switch (G__26187) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__26185_SHARP_){
if(cljs.core.truth_(p1__26185_SHARP_.call(null,topic))){
return p1__26185_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26185_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26188 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26189){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26189 = meta26189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26190,meta26189__$1){
var self__ = this;
var _26190__$1 = this;
return (new cljs.core.async.t_cljs$core$async26188(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26189__$1));
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26190){
var self__ = this;
var _26190__$1 = this;
return self__.meta26189;
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26189","meta26189",-27392496,null)], null);
}));

(cljs.core.async.t_cljs$core$async26188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26188");

(cljs.core.async.t_cljs$core$async26188.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26188.
 */
cljs.core.async.__GT_t_cljs$core$async26188 = (function cljs$core$async$__GT_t_cljs$core$async26188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26189){
return (new cljs.core.async.t_cljs$core$async26188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26189));
});

}

return (new cljs.core.async.t_cljs$core$async26188(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25062__auto___26308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26262){
var state_val_26263 = (state_26262[(1)]);
if((state_val_26263 === (7))){
var inst_26258 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26264_26309 = state_26262__$1;
(statearr_26264_26309[(2)] = inst_26258);

(statearr_26264_26309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (20))){
var state_26262__$1 = state_26262;
var statearr_26265_26310 = state_26262__$1;
(statearr_26265_26310[(2)] = null);

(statearr_26265_26310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (1))){
var state_26262__$1 = state_26262;
var statearr_26266_26311 = state_26262__$1;
(statearr_26266_26311[(2)] = null);

(statearr_26266_26311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (24))){
var inst_26241 = (state_26262[(7)]);
var inst_26250 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26241);
var state_26262__$1 = state_26262;
var statearr_26267_26312 = state_26262__$1;
(statearr_26267_26312[(2)] = inst_26250);

(statearr_26267_26312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (4))){
var inst_26193 = (state_26262[(8)]);
var inst_26193__$1 = (state_26262[(2)]);
var inst_26194 = (inst_26193__$1 == null);
var state_26262__$1 = (function (){var statearr_26268 = state_26262;
(statearr_26268[(8)] = inst_26193__$1);

return statearr_26268;
})();
if(cljs.core.truth_(inst_26194)){
var statearr_26269_26313 = state_26262__$1;
(statearr_26269_26313[(1)] = (5));

} else {
var statearr_26270_26314 = state_26262__$1;
(statearr_26270_26314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (15))){
var inst_26235 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26271_26315 = state_26262__$1;
(statearr_26271_26315[(2)] = inst_26235);

(statearr_26271_26315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (21))){
var inst_26255 = (state_26262[(2)]);
var state_26262__$1 = (function (){var statearr_26272 = state_26262;
(statearr_26272[(9)] = inst_26255);

return statearr_26272;
})();
var statearr_26273_26316 = state_26262__$1;
(statearr_26273_26316[(2)] = null);

(statearr_26273_26316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (13))){
var inst_26217 = (state_26262[(10)]);
var inst_26219 = cljs.core.chunked_seq_QMARK_.call(null,inst_26217);
var state_26262__$1 = state_26262;
if(inst_26219){
var statearr_26274_26317 = state_26262__$1;
(statearr_26274_26317[(1)] = (16));

} else {
var statearr_26275_26318 = state_26262__$1;
(statearr_26275_26318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (22))){
var inst_26247 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
if(cljs.core.truth_(inst_26247)){
var statearr_26276_26319 = state_26262__$1;
(statearr_26276_26319[(1)] = (23));

} else {
var statearr_26277_26320 = state_26262__$1;
(statearr_26277_26320[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (6))){
var inst_26193 = (state_26262[(8)]);
var inst_26243 = (state_26262[(11)]);
var inst_26241 = (state_26262[(7)]);
var inst_26241__$1 = topic_fn.call(null,inst_26193);
var inst_26242 = cljs.core.deref.call(null,mults);
var inst_26243__$1 = cljs.core.get.call(null,inst_26242,inst_26241__$1);
var state_26262__$1 = (function (){var statearr_26278 = state_26262;
(statearr_26278[(11)] = inst_26243__$1);

(statearr_26278[(7)] = inst_26241__$1);

return statearr_26278;
})();
if(cljs.core.truth_(inst_26243__$1)){
var statearr_26279_26321 = state_26262__$1;
(statearr_26279_26321[(1)] = (19));

} else {
var statearr_26280_26322 = state_26262__$1;
(statearr_26280_26322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (25))){
var inst_26252 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26281_26323 = state_26262__$1;
(statearr_26281_26323[(2)] = inst_26252);

(statearr_26281_26323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (17))){
var inst_26217 = (state_26262[(10)]);
var inst_26226 = cljs.core.first.call(null,inst_26217);
var inst_26227 = cljs.core.async.muxch_STAR_.call(null,inst_26226);
var inst_26228 = cljs.core.async.close_BANG_.call(null,inst_26227);
var inst_26229 = cljs.core.next.call(null,inst_26217);
var inst_26203 = inst_26229;
var inst_26204 = null;
var inst_26205 = (0);
var inst_26206 = (0);
var state_26262__$1 = (function (){var statearr_26282 = state_26262;
(statearr_26282[(12)] = inst_26228);

(statearr_26282[(13)] = inst_26204);

(statearr_26282[(14)] = inst_26205);

(statearr_26282[(15)] = inst_26206);

(statearr_26282[(16)] = inst_26203);

return statearr_26282;
})();
var statearr_26283_26324 = state_26262__$1;
(statearr_26283_26324[(2)] = null);

(statearr_26283_26324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (3))){
var inst_26260 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26262__$1,inst_26260);
} else {
if((state_val_26263 === (12))){
var inst_26237 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26284_26325 = state_26262__$1;
(statearr_26284_26325[(2)] = inst_26237);

(statearr_26284_26325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (2))){
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26262__$1,(4),ch);
} else {
if((state_val_26263 === (23))){
var state_26262__$1 = state_26262;
var statearr_26285_26326 = state_26262__$1;
(statearr_26285_26326[(2)] = null);

(statearr_26285_26326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (19))){
var inst_26193 = (state_26262[(8)]);
var inst_26243 = (state_26262[(11)]);
var inst_26245 = cljs.core.async.muxch_STAR_.call(null,inst_26243);
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26262__$1,(22),inst_26245,inst_26193);
} else {
if((state_val_26263 === (11))){
var inst_26217 = (state_26262[(10)]);
var inst_26203 = (state_26262[(16)]);
var inst_26217__$1 = cljs.core.seq.call(null,inst_26203);
var state_26262__$1 = (function (){var statearr_26286 = state_26262;
(statearr_26286[(10)] = inst_26217__$1);

return statearr_26286;
})();
if(inst_26217__$1){
var statearr_26287_26327 = state_26262__$1;
(statearr_26287_26327[(1)] = (13));

} else {
var statearr_26288_26328 = state_26262__$1;
(statearr_26288_26328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (9))){
var inst_26239 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26289_26329 = state_26262__$1;
(statearr_26289_26329[(2)] = inst_26239);

(statearr_26289_26329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (5))){
var inst_26200 = cljs.core.deref.call(null,mults);
var inst_26201 = cljs.core.vals.call(null,inst_26200);
var inst_26202 = cljs.core.seq.call(null,inst_26201);
var inst_26203 = inst_26202;
var inst_26204 = null;
var inst_26205 = (0);
var inst_26206 = (0);
var state_26262__$1 = (function (){var statearr_26290 = state_26262;
(statearr_26290[(13)] = inst_26204);

(statearr_26290[(14)] = inst_26205);

(statearr_26290[(15)] = inst_26206);

(statearr_26290[(16)] = inst_26203);

return statearr_26290;
})();
var statearr_26291_26330 = state_26262__$1;
(statearr_26291_26330[(2)] = null);

(statearr_26291_26330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (14))){
var state_26262__$1 = state_26262;
var statearr_26295_26331 = state_26262__$1;
(statearr_26295_26331[(2)] = null);

(statearr_26295_26331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (16))){
var inst_26217 = (state_26262[(10)]);
var inst_26221 = cljs.core.chunk_first.call(null,inst_26217);
var inst_26222 = cljs.core.chunk_rest.call(null,inst_26217);
var inst_26223 = cljs.core.count.call(null,inst_26221);
var inst_26203 = inst_26222;
var inst_26204 = inst_26221;
var inst_26205 = inst_26223;
var inst_26206 = (0);
var state_26262__$1 = (function (){var statearr_26296 = state_26262;
(statearr_26296[(13)] = inst_26204);

(statearr_26296[(14)] = inst_26205);

(statearr_26296[(15)] = inst_26206);

(statearr_26296[(16)] = inst_26203);

return statearr_26296;
})();
var statearr_26297_26332 = state_26262__$1;
(statearr_26297_26332[(2)] = null);

(statearr_26297_26332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (10))){
var inst_26204 = (state_26262[(13)]);
var inst_26205 = (state_26262[(14)]);
var inst_26206 = (state_26262[(15)]);
var inst_26203 = (state_26262[(16)]);
var inst_26211 = cljs.core._nth.call(null,inst_26204,inst_26206);
var inst_26212 = cljs.core.async.muxch_STAR_.call(null,inst_26211);
var inst_26213 = cljs.core.async.close_BANG_.call(null,inst_26212);
var inst_26214 = (inst_26206 + (1));
var tmp26292 = inst_26204;
var tmp26293 = inst_26205;
var tmp26294 = inst_26203;
var inst_26203__$1 = tmp26294;
var inst_26204__$1 = tmp26292;
var inst_26205__$1 = tmp26293;
var inst_26206__$1 = inst_26214;
var state_26262__$1 = (function (){var statearr_26298 = state_26262;
(statearr_26298[(13)] = inst_26204__$1);

(statearr_26298[(14)] = inst_26205__$1);

(statearr_26298[(15)] = inst_26206__$1);

(statearr_26298[(17)] = inst_26213);

(statearr_26298[(16)] = inst_26203__$1);

return statearr_26298;
})();
var statearr_26299_26333 = state_26262__$1;
(statearr_26299_26333[(2)] = null);

(statearr_26299_26333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (18))){
var inst_26232 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26300_26334 = state_26262__$1;
(statearr_26300_26334[(2)] = inst_26232);

(statearr_26300_26334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (8))){
var inst_26205 = (state_26262[(14)]);
var inst_26206 = (state_26262[(15)]);
var inst_26208 = (inst_26206 < inst_26205);
var inst_26209 = inst_26208;
var state_26262__$1 = state_26262;
if(cljs.core.truth_(inst_26209)){
var statearr_26301_26335 = state_26262__$1;
(statearr_26301_26335[(1)] = (10));

} else {
var statearr_26302_26336 = state_26262__$1;
(statearr_26302_26336[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_26303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26303[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_26303[(1)] = (1));

return statearr_26303;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_26262){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26304){if((e26304 instanceof Object)){
var ex__24971__auto__ = e26304;
var statearr_26305_26337 = state_26262;
(statearr_26305_26337[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26338 = state_26262;
state_26262 = G__26338;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_26262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_26262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26306 = f__25063__auto__.call(null);
(statearr_26306[(6)] = c__25062__auto___26308);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26340 = arguments.length;
switch (G__26340) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26343 = arguments.length;
switch (G__26343) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26346 = arguments.length;
switch (G__26346) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__25062__auto___26413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26385){
var state_val_26386 = (state_26385[(1)]);
if((state_val_26386 === (7))){
var state_26385__$1 = state_26385;
var statearr_26387_26414 = state_26385__$1;
(statearr_26387_26414[(2)] = null);

(statearr_26387_26414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (1))){
var state_26385__$1 = state_26385;
var statearr_26388_26415 = state_26385__$1;
(statearr_26388_26415[(2)] = null);

(statearr_26388_26415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (4))){
var inst_26349 = (state_26385[(7)]);
var inst_26351 = (inst_26349 < cnt);
var state_26385__$1 = state_26385;
if(cljs.core.truth_(inst_26351)){
var statearr_26389_26416 = state_26385__$1;
(statearr_26389_26416[(1)] = (6));

} else {
var statearr_26390_26417 = state_26385__$1;
(statearr_26390_26417[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (15))){
var inst_26381 = (state_26385[(2)]);
var state_26385__$1 = state_26385;
var statearr_26391_26418 = state_26385__$1;
(statearr_26391_26418[(2)] = inst_26381);

(statearr_26391_26418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (13))){
var inst_26374 = cljs.core.async.close_BANG_.call(null,out);
var state_26385__$1 = state_26385;
var statearr_26392_26419 = state_26385__$1;
(statearr_26392_26419[(2)] = inst_26374);

(statearr_26392_26419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (6))){
var state_26385__$1 = state_26385;
var statearr_26393_26420 = state_26385__$1;
(statearr_26393_26420[(2)] = null);

(statearr_26393_26420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (3))){
var inst_26383 = (state_26385[(2)]);
var state_26385__$1 = state_26385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26385__$1,inst_26383);
} else {
if((state_val_26386 === (12))){
var inst_26371 = (state_26385[(8)]);
var inst_26371__$1 = (state_26385[(2)]);
var inst_26372 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26371__$1);
var state_26385__$1 = (function (){var statearr_26394 = state_26385;
(statearr_26394[(8)] = inst_26371__$1);

return statearr_26394;
})();
if(cljs.core.truth_(inst_26372)){
var statearr_26395_26421 = state_26385__$1;
(statearr_26395_26421[(1)] = (13));

} else {
var statearr_26396_26422 = state_26385__$1;
(statearr_26396_26422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (2))){
var inst_26348 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26349 = (0);
var state_26385__$1 = (function (){var statearr_26397 = state_26385;
(statearr_26397[(9)] = inst_26348);

(statearr_26397[(7)] = inst_26349);

return statearr_26397;
})();
var statearr_26398_26423 = state_26385__$1;
(statearr_26398_26423[(2)] = null);

(statearr_26398_26423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (11))){
var inst_26349 = (state_26385[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26385,(10),Object,null,(9));
var inst_26358 = chs__$1.call(null,inst_26349);
var inst_26359 = done.call(null,inst_26349);
var inst_26360 = cljs.core.async.take_BANG_.call(null,inst_26358,inst_26359);
var state_26385__$1 = state_26385;
var statearr_26399_26424 = state_26385__$1;
(statearr_26399_26424[(2)] = inst_26360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26385__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (9))){
var inst_26349 = (state_26385[(7)]);
var inst_26362 = (state_26385[(2)]);
var inst_26363 = (inst_26349 + (1));
var inst_26349__$1 = inst_26363;
var state_26385__$1 = (function (){var statearr_26400 = state_26385;
(statearr_26400[(7)] = inst_26349__$1);

(statearr_26400[(10)] = inst_26362);

return statearr_26400;
})();
var statearr_26401_26425 = state_26385__$1;
(statearr_26401_26425[(2)] = null);

(statearr_26401_26425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (5))){
var inst_26369 = (state_26385[(2)]);
var state_26385__$1 = (function (){var statearr_26402 = state_26385;
(statearr_26402[(11)] = inst_26369);

return statearr_26402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26385__$1,(12),dchan);
} else {
if((state_val_26386 === (14))){
var inst_26371 = (state_26385[(8)]);
var inst_26376 = cljs.core.apply.call(null,f,inst_26371);
var state_26385__$1 = state_26385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26385__$1,(16),out,inst_26376);
} else {
if((state_val_26386 === (16))){
var inst_26378 = (state_26385[(2)]);
var state_26385__$1 = (function (){var statearr_26403 = state_26385;
(statearr_26403[(12)] = inst_26378);

return statearr_26403;
})();
var statearr_26404_26426 = state_26385__$1;
(statearr_26404_26426[(2)] = null);

(statearr_26404_26426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (10))){
var inst_26353 = (state_26385[(2)]);
var inst_26354 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26385__$1 = (function (){var statearr_26405 = state_26385;
(statearr_26405[(13)] = inst_26353);

return statearr_26405;
})();
var statearr_26406_26427 = state_26385__$1;
(statearr_26406_26427[(2)] = inst_26354);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26385__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (8))){
var inst_26367 = (state_26385[(2)]);
var state_26385__$1 = state_26385;
var statearr_26407_26428 = state_26385__$1;
(statearr_26407_26428[(2)] = inst_26367);

(statearr_26407_26428[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_26408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26408[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_26408[(1)] = (1));

return statearr_26408;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_26385){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26409){if((e26409 instanceof Object)){
var ex__24971__auto__ = e26409;
var statearr_26410_26429 = state_26385;
(statearr_26410_26429[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26430 = state_26385;
state_26385 = G__26430;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_26385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_26385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26411 = f__25063__auto__.call(null);
(statearr_26411[(6)] = c__25062__auto___26413);

return statearr_26411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26433 = arguments.length;
switch (G__26433) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25062__auto___26487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26465){
var state_val_26466 = (state_26465[(1)]);
if((state_val_26466 === (7))){
var inst_26445 = (state_26465[(7)]);
var inst_26444 = (state_26465[(8)]);
var inst_26444__$1 = (state_26465[(2)]);
var inst_26445__$1 = cljs.core.nth.call(null,inst_26444__$1,(0),null);
var inst_26446 = cljs.core.nth.call(null,inst_26444__$1,(1),null);
var inst_26447 = (inst_26445__$1 == null);
var state_26465__$1 = (function (){var statearr_26467 = state_26465;
(statearr_26467[(7)] = inst_26445__$1);

(statearr_26467[(8)] = inst_26444__$1);

(statearr_26467[(9)] = inst_26446);

return statearr_26467;
})();
if(cljs.core.truth_(inst_26447)){
var statearr_26468_26488 = state_26465__$1;
(statearr_26468_26488[(1)] = (8));

} else {
var statearr_26469_26489 = state_26465__$1;
(statearr_26469_26489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (1))){
var inst_26434 = cljs.core.vec.call(null,chs);
var inst_26435 = inst_26434;
var state_26465__$1 = (function (){var statearr_26470 = state_26465;
(statearr_26470[(10)] = inst_26435);

return statearr_26470;
})();
var statearr_26471_26490 = state_26465__$1;
(statearr_26471_26490[(2)] = null);

(statearr_26471_26490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (4))){
var inst_26435 = (state_26465[(10)]);
var state_26465__$1 = state_26465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26465__$1,(7),inst_26435);
} else {
if((state_val_26466 === (6))){
var inst_26461 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
var statearr_26472_26491 = state_26465__$1;
(statearr_26472_26491[(2)] = inst_26461);

(statearr_26472_26491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (3))){
var inst_26463 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26465__$1,inst_26463);
} else {
if((state_val_26466 === (2))){
var inst_26435 = (state_26465[(10)]);
var inst_26437 = cljs.core.count.call(null,inst_26435);
var inst_26438 = (inst_26437 > (0));
var state_26465__$1 = state_26465;
if(cljs.core.truth_(inst_26438)){
var statearr_26474_26492 = state_26465__$1;
(statearr_26474_26492[(1)] = (4));

} else {
var statearr_26475_26493 = state_26465__$1;
(statearr_26475_26493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (11))){
var inst_26435 = (state_26465[(10)]);
var inst_26454 = (state_26465[(2)]);
var tmp26473 = inst_26435;
var inst_26435__$1 = tmp26473;
var state_26465__$1 = (function (){var statearr_26476 = state_26465;
(statearr_26476[(11)] = inst_26454);

(statearr_26476[(10)] = inst_26435__$1);

return statearr_26476;
})();
var statearr_26477_26494 = state_26465__$1;
(statearr_26477_26494[(2)] = null);

(statearr_26477_26494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (9))){
var inst_26445 = (state_26465[(7)]);
var state_26465__$1 = state_26465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26465__$1,(11),out,inst_26445);
} else {
if((state_val_26466 === (5))){
var inst_26459 = cljs.core.async.close_BANG_.call(null,out);
var state_26465__$1 = state_26465;
var statearr_26478_26495 = state_26465__$1;
(statearr_26478_26495[(2)] = inst_26459);

(statearr_26478_26495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (10))){
var inst_26457 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
var statearr_26479_26496 = state_26465__$1;
(statearr_26479_26496[(2)] = inst_26457);

(statearr_26479_26496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (8))){
var inst_26445 = (state_26465[(7)]);
var inst_26444 = (state_26465[(8)]);
var inst_26435 = (state_26465[(10)]);
var inst_26446 = (state_26465[(9)]);
var inst_26449 = (function (){var cs = inst_26435;
var vec__26440 = inst_26444;
var v = inst_26445;
var c = inst_26446;
return (function (p1__26431_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26431_SHARP_);
});
})();
var inst_26450 = cljs.core.filterv.call(null,inst_26449,inst_26435);
var inst_26435__$1 = inst_26450;
var state_26465__$1 = (function (){var statearr_26480 = state_26465;
(statearr_26480[(10)] = inst_26435__$1);

return statearr_26480;
})();
var statearr_26481_26497 = state_26465__$1;
(statearr_26481_26497[(2)] = null);

(statearr_26481_26497[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_26482 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26482[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_26482[(1)] = (1));

return statearr_26482;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_26465){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26483){if((e26483 instanceof Object)){
var ex__24971__auto__ = e26483;
var statearr_26484_26498 = state_26465;
(statearr_26484_26498[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26499 = state_26465;
state_26465 = G__26499;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_26465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_26465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26485 = f__25063__auto__.call(null);
(statearr_26485[(6)] = c__25062__auto___26487);

return statearr_26485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26501 = arguments.length;
switch (G__26501) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25062__auto___26546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26525){
var state_val_26526 = (state_26525[(1)]);
if((state_val_26526 === (7))){
var inst_26507 = (state_26525[(7)]);
var inst_26507__$1 = (state_26525[(2)]);
var inst_26508 = (inst_26507__$1 == null);
var inst_26509 = cljs.core.not.call(null,inst_26508);
var state_26525__$1 = (function (){var statearr_26527 = state_26525;
(statearr_26527[(7)] = inst_26507__$1);

return statearr_26527;
})();
if(inst_26509){
var statearr_26528_26547 = state_26525__$1;
(statearr_26528_26547[(1)] = (8));

} else {
var statearr_26529_26548 = state_26525__$1;
(statearr_26529_26548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26526 === (1))){
var inst_26502 = (0);
var state_26525__$1 = (function (){var statearr_26530 = state_26525;
(statearr_26530[(8)] = inst_26502);

return statearr_26530;
})();
var statearr_26531_26549 = state_26525__$1;
(statearr_26531_26549[(2)] = null);

(statearr_26531_26549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26526 === (4))){
var state_26525__$1 = state_26525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26525__$1,(7),ch);
} else {
if((state_val_26526 === (6))){
var inst_26520 = (state_26525[(2)]);
var state_26525__$1 = state_26525;
var statearr_26532_26550 = state_26525__$1;
(statearr_26532_26550[(2)] = inst_26520);

(statearr_26532_26550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26526 === (3))){
var inst_26522 = (state_26525[(2)]);
var inst_26523 = cljs.core.async.close_BANG_.call(null,out);
var state_26525__$1 = (function (){var statearr_26533 = state_26525;
(statearr_26533[(9)] = inst_26522);

return statearr_26533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26525__$1,inst_26523);
} else {
if((state_val_26526 === (2))){
var inst_26502 = (state_26525[(8)]);
var inst_26504 = (inst_26502 < n);
var state_26525__$1 = state_26525;
if(cljs.core.truth_(inst_26504)){
var statearr_26534_26551 = state_26525__$1;
(statearr_26534_26551[(1)] = (4));

} else {
var statearr_26535_26552 = state_26525__$1;
(statearr_26535_26552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26526 === (11))){
var inst_26502 = (state_26525[(8)]);
var inst_26512 = (state_26525[(2)]);
var inst_26513 = (inst_26502 + (1));
var inst_26502__$1 = inst_26513;
var state_26525__$1 = (function (){var statearr_26536 = state_26525;
(statearr_26536[(10)] = inst_26512);

(statearr_26536[(8)] = inst_26502__$1);

return statearr_26536;
})();
var statearr_26537_26553 = state_26525__$1;
(statearr_26537_26553[(2)] = null);

(statearr_26537_26553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26526 === (9))){
var state_26525__$1 = state_26525;
var statearr_26538_26554 = state_26525__$1;
(statearr_26538_26554[(2)] = null);

(statearr_26538_26554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26526 === (5))){
var state_26525__$1 = state_26525;
var statearr_26539_26555 = state_26525__$1;
(statearr_26539_26555[(2)] = null);

(statearr_26539_26555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26526 === (10))){
var inst_26517 = (state_26525[(2)]);
var state_26525__$1 = state_26525;
var statearr_26540_26556 = state_26525__$1;
(statearr_26540_26556[(2)] = inst_26517);

(statearr_26540_26556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26526 === (8))){
var inst_26507 = (state_26525[(7)]);
var state_26525__$1 = state_26525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26525__$1,(11),out,inst_26507);
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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_26541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26541[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_26541[(1)] = (1));

return statearr_26541;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_26525){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26542){if((e26542 instanceof Object)){
var ex__24971__auto__ = e26542;
var statearr_26543_26557 = state_26525;
(statearr_26543_26557[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26558 = state_26525;
state_26525 = G__26558;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_26525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_26525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26544 = f__25063__auto__.call(null);
(statearr_26544[(6)] = c__25062__auto___26546);

return statearr_26544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26560 = (function (f,ch,meta26561){
this.f = f;
this.ch = ch;
this.meta26561 = meta26561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26562,meta26561__$1){
var self__ = this;
var _26562__$1 = this;
return (new cljs.core.async.t_cljs$core$async26560(self__.f,self__.ch,meta26561__$1));
}));

(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26562){
var self__ = this;
var _26562__$1 = this;
return self__.meta26561;
}));

(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26563 = (function (f,ch,meta26561,_,fn1,meta26564){
this.f = f;
this.ch = ch;
this.meta26561 = meta26561;
this._ = _;
this.fn1 = fn1;
this.meta26564 = meta26564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26565,meta26564__$1){
var self__ = this;
var _26565__$1 = this;
return (new cljs.core.async.t_cljs$core$async26563(self__.f,self__.ch,self__.meta26561,self__._,self__.fn1,meta26564__$1));
}));

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26565){
var self__ = this;
var _26565__$1 = this;
return self__.meta26564;
}));

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__26559_SHARP_){
return f1.call(null,(((p1__26559_SHARP_ == null))?null:self__.f.call(null,p1__26559_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async26563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26561","meta26561",-1366486332,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26560","cljs.core.async/t_cljs$core$async26560",-499618320,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26564","meta26564",-914886241,null)], null);
}));

(cljs.core.async.t_cljs$core$async26563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26563");

(cljs.core.async.t_cljs$core$async26563.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26563.
 */
cljs.core.async.__GT_t_cljs$core$async26563 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26563(f__$1,ch__$1,meta26561__$1,___$2,fn1__$1,meta26564){
return (new cljs.core.async.t_cljs$core$async26563(f__$1,ch__$1,meta26561__$1,___$2,fn1__$1,meta26564));
});

}

return (new cljs.core.async.t_cljs$core$async26563(self__.f,self__.ch,self__.meta26561,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26561","meta26561",-1366486332,null)], null);
}));

(cljs.core.async.t_cljs$core$async26560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26560");

(cljs.core.async.t_cljs$core$async26560.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26560.
 */
cljs.core.async.__GT_t_cljs$core$async26560 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26560(f__$1,ch__$1,meta26561){
return (new cljs.core.async.t_cljs$core$async26560(f__$1,ch__$1,meta26561));
});

}

return (new cljs.core.async.t_cljs$core$async26560(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26566 = (function (f,ch,meta26567){
this.f = f;
this.ch = ch;
this.meta26567 = meta26567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26568,meta26567__$1){
var self__ = this;
var _26568__$1 = this;
return (new cljs.core.async.t_cljs$core$async26566(self__.f,self__.ch,meta26567__$1));
}));

(cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26568){
var self__ = this;
var _26568__$1 = this;
return self__.meta26567;
}));

(cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async26566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26567","meta26567",-1525770078,null)], null);
}));

(cljs.core.async.t_cljs$core$async26566.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26566");

(cljs.core.async.t_cljs$core$async26566.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26566");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26566.
 */
cljs.core.async.__GT_t_cljs$core$async26566 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26566(f__$1,ch__$1,meta26567){
return (new cljs.core.async.t_cljs$core$async26566(f__$1,ch__$1,meta26567));
});

}

return (new cljs.core.async.t_cljs$core$async26566(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26569 = (function (p,ch,meta26570){
this.p = p;
this.ch = ch;
this.meta26570 = meta26570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26571,meta26570__$1){
var self__ = this;
var _26571__$1 = this;
return (new cljs.core.async.t_cljs$core$async26569(self__.p,self__.ch,meta26570__$1));
}));

(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26571){
var self__ = this;
var _26571__$1 = this;
return self__.meta26570;
}));

(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26570","meta26570",1438083756,null)], null);
}));

(cljs.core.async.t_cljs$core$async26569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26569");

(cljs.core.async.t_cljs$core$async26569.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26569.
 */
cljs.core.async.__GT_t_cljs$core$async26569 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26569(p__$1,ch__$1,meta26570){
return (new cljs.core.async.t_cljs$core$async26569(p__$1,ch__$1,meta26570));
});

}

return (new cljs.core.async.t_cljs$core$async26569(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26573 = arguments.length;
switch (G__26573) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25062__auto___26613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26594){
var state_val_26595 = (state_26594[(1)]);
if((state_val_26595 === (7))){
var inst_26590 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
var statearr_26596_26614 = state_26594__$1;
(statearr_26596_26614[(2)] = inst_26590);

(statearr_26596_26614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (1))){
var state_26594__$1 = state_26594;
var statearr_26597_26615 = state_26594__$1;
(statearr_26597_26615[(2)] = null);

(statearr_26597_26615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (4))){
var inst_26576 = (state_26594[(7)]);
var inst_26576__$1 = (state_26594[(2)]);
var inst_26577 = (inst_26576__$1 == null);
var state_26594__$1 = (function (){var statearr_26598 = state_26594;
(statearr_26598[(7)] = inst_26576__$1);

return statearr_26598;
})();
if(cljs.core.truth_(inst_26577)){
var statearr_26599_26616 = state_26594__$1;
(statearr_26599_26616[(1)] = (5));

} else {
var statearr_26600_26617 = state_26594__$1;
(statearr_26600_26617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (6))){
var inst_26576 = (state_26594[(7)]);
var inst_26581 = p.call(null,inst_26576);
var state_26594__$1 = state_26594;
if(cljs.core.truth_(inst_26581)){
var statearr_26601_26618 = state_26594__$1;
(statearr_26601_26618[(1)] = (8));

} else {
var statearr_26602_26619 = state_26594__$1;
(statearr_26602_26619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (3))){
var inst_26592 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26594__$1,inst_26592);
} else {
if((state_val_26595 === (2))){
var state_26594__$1 = state_26594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26594__$1,(4),ch);
} else {
if((state_val_26595 === (11))){
var inst_26584 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
var statearr_26603_26620 = state_26594__$1;
(statearr_26603_26620[(2)] = inst_26584);

(statearr_26603_26620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (9))){
var state_26594__$1 = state_26594;
var statearr_26604_26621 = state_26594__$1;
(statearr_26604_26621[(2)] = null);

(statearr_26604_26621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (5))){
var inst_26579 = cljs.core.async.close_BANG_.call(null,out);
var state_26594__$1 = state_26594;
var statearr_26605_26622 = state_26594__$1;
(statearr_26605_26622[(2)] = inst_26579);

(statearr_26605_26622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (10))){
var inst_26587 = (state_26594[(2)]);
var state_26594__$1 = (function (){var statearr_26606 = state_26594;
(statearr_26606[(8)] = inst_26587);

return statearr_26606;
})();
var statearr_26607_26623 = state_26594__$1;
(statearr_26607_26623[(2)] = null);

(statearr_26607_26623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (8))){
var inst_26576 = (state_26594[(7)]);
var state_26594__$1 = state_26594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26594__$1,(11),out,inst_26576);
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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_26608 = [null,null,null,null,null,null,null,null,null];
(statearr_26608[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_26608[(1)] = (1));

return statearr_26608;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_26594){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26609){if((e26609 instanceof Object)){
var ex__24971__auto__ = e26609;
var statearr_26610_26624 = state_26594;
(statearr_26610_26624[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26625 = state_26594;
state_26594 = G__26625;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_26594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_26594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26611 = f__25063__auto__.call(null);
(statearr_26611[(6)] = c__25062__auto___26613);

return statearr_26611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26627 = arguments.length;
switch (G__26627) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25062__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26690){
var state_val_26691 = (state_26690[(1)]);
if((state_val_26691 === (7))){
var inst_26686 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
var statearr_26692_26730 = state_26690__$1;
(statearr_26692_26730[(2)] = inst_26686);

(statearr_26692_26730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (20))){
var inst_26656 = (state_26690[(7)]);
var inst_26667 = (state_26690[(2)]);
var inst_26668 = cljs.core.next.call(null,inst_26656);
var inst_26642 = inst_26668;
var inst_26643 = null;
var inst_26644 = (0);
var inst_26645 = (0);
var state_26690__$1 = (function (){var statearr_26693 = state_26690;
(statearr_26693[(8)] = inst_26644);

(statearr_26693[(9)] = inst_26667);

(statearr_26693[(10)] = inst_26642);

(statearr_26693[(11)] = inst_26645);

(statearr_26693[(12)] = inst_26643);

return statearr_26693;
})();
var statearr_26694_26731 = state_26690__$1;
(statearr_26694_26731[(2)] = null);

(statearr_26694_26731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (1))){
var state_26690__$1 = state_26690;
var statearr_26695_26732 = state_26690__$1;
(statearr_26695_26732[(2)] = null);

(statearr_26695_26732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (4))){
var inst_26631 = (state_26690[(13)]);
var inst_26631__$1 = (state_26690[(2)]);
var inst_26632 = (inst_26631__$1 == null);
var state_26690__$1 = (function (){var statearr_26696 = state_26690;
(statearr_26696[(13)] = inst_26631__$1);

return statearr_26696;
})();
if(cljs.core.truth_(inst_26632)){
var statearr_26697_26733 = state_26690__$1;
(statearr_26697_26733[(1)] = (5));

} else {
var statearr_26698_26734 = state_26690__$1;
(statearr_26698_26734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (15))){
var state_26690__$1 = state_26690;
var statearr_26702_26735 = state_26690__$1;
(statearr_26702_26735[(2)] = null);

(statearr_26702_26735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (21))){
var state_26690__$1 = state_26690;
var statearr_26703_26736 = state_26690__$1;
(statearr_26703_26736[(2)] = null);

(statearr_26703_26736[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (13))){
var inst_26644 = (state_26690[(8)]);
var inst_26642 = (state_26690[(10)]);
var inst_26645 = (state_26690[(11)]);
var inst_26643 = (state_26690[(12)]);
var inst_26652 = (state_26690[(2)]);
var inst_26653 = (inst_26645 + (1));
var tmp26699 = inst_26644;
var tmp26700 = inst_26642;
var tmp26701 = inst_26643;
var inst_26642__$1 = tmp26700;
var inst_26643__$1 = tmp26701;
var inst_26644__$1 = tmp26699;
var inst_26645__$1 = inst_26653;
var state_26690__$1 = (function (){var statearr_26704 = state_26690;
(statearr_26704[(14)] = inst_26652);

(statearr_26704[(8)] = inst_26644__$1);

(statearr_26704[(10)] = inst_26642__$1);

(statearr_26704[(11)] = inst_26645__$1);

(statearr_26704[(12)] = inst_26643__$1);

return statearr_26704;
})();
var statearr_26705_26737 = state_26690__$1;
(statearr_26705_26737[(2)] = null);

(statearr_26705_26737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (22))){
var state_26690__$1 = state_26690;
var statearr_26706_26738 = state_26690__$1;
(statearr_26706_26738[(2)] = null);

(statearr_26706_26738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (6))){
var inst_26631 = (state_26690[(13)]);
var inst_26640 = f.call(null,inst_26631);
var inst_26641 = cljs.core.seq.call(null,inst_26640);
var inst_26642 = inst_26641;
var inst_26643 = null;
var inst_26644 = (0);
var inst_26645 = (0);
var state_26690__$1 = (function (){var statearr_26707 = state_26690;
(statearr_26707[(8)] = inst_26644);

(statearr_26707[(10)] = inst_26642);

(statearr_26707[(11)] = inst_26645);

(statearr_26707[(12)] = inst_26643);

return statearr_26707;
})();
var statearr_26708_26739 = state_26690__$1;
(statearr_26708_26739[(2)] = null);

(statearr_26708_26739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (17))){
var inst_26656 = (state_26690[(7)]);
var inst_26660 = cljs.core.chunk_first.call(null,inst_26656);
var inst_26661 = cljs.core.chunk_rest.call(null,inst_26656);
var inst_26662 = cljs.core.count.call(null,inst_26660);
var inst_26642 = inst_26661;
var inst_26643 = inst_26660;
var inst_26644 = inst_26662;
var inst_26645 = (0);
var state_26690__$1 = (function (){var statearr_26709 = state_26690;
(statearr_26709[(8)] = inst_26644);

(statearr_26709[(10)] = inst_26642);

(statearr_26709[(11)] = inst_26645);

(statearr_26709[(12)] = inst_26643);

return statearr_26709;
})();
var statearr_26710_26740 = state_26690__$1;
(statearr_26710_26740[(2)] = null);

(statearr_26710_26740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (3))){
var inst_26688 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26690__$1,inst_26688);
} else {
if((state_val_26691 === (12))){
var inst_26676 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
var statearr_26711_26741 = state_26690__$1;
(statearr_26711_26741[(2)] = inst_26676);

(statearr_26711_26741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (2))){
var state_26690__$1 = state_26690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26690__$1,(4),in$);
} else {
if((state_val_26691 === (23))){
var inst_26684 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
var statearr_26712_26742 = state_26690__$1;
(statearr_26712_26742[(2)] = inst_26684);

(statearr_26712_26742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (19))){
var inst_26671 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
var statearr_26713_26743 = state_26690__$1;
(statearr_26713_26743[(2)] = inst_26671);

(statearr_26713_26743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (11))){
var inst_26656 = (state_26690[(7)]);
var inst_26642 = (state_26690[(10)]);
var inst_26656__$1 = cljs.core.seq.call(null,inst_26642);
var state_26690__$1 = (function (){var statearr_26714 = state_26690;
(statearr_26714[(7)] = inst_26656__$1);

return statearr_26714;
})();
if(inst_26656__$1){
var statearr_26715_26744 = state_26690__$1;
(statearr_26715_26744[(1)] = (14));

} else {
var statearr_26716_26745 = state_26690__$1;
(statearr_26716_26745[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (9))){
var inst_26678 = (state_26690[(2)]);
var inst_26679 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26690__$1 = (function (){var statearr_26717 = state_26690;
(statearr_26717[(15)] = inst_26678);

return statearr_26717;
})();
if(cljs.core.truth_(inst_26679)){
var statearr_26718_26746 = state_26690__$1;
(statearr_26718_26746[(1)] = (21));

} else {
var statearr_26719_26747 = state_26690__$1;
(statearr_26719_26747[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (5))){
var inst_26634 = cljs.core.async.close_BANG_.call(null,out);
var state_26690__$1 = state_26690;
var statearr_26720_26748 = state_26690__$1;
(statearr_26720_26748[(2)] = inst_26634);

(statearr_26720_26748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (14))){
var inst_26656 = (state_26690[(7)]);
var inst_26658 = cljs.core.chunked_seq_QMARK_.call(null,inst_26656);
var state_26690__$1 = state_26690;
if(inst_26658){
var statearr_26721_26749 = state_26690__$1;
(statearr_26721_26749[(1)] = (17));

} else {
var statearr_26722_26750 = state_26690__$1;
(statearr_26722_26750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (16))){
var inst_26674 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
var statearr_26723_26751 = state_26690__$1;
(statearr_26723_26751[(2)] = inst_26674);

(statearr_26723_26751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (10))){
var inst_26645 = (state_26690[(11)]);
var inst_26643 = (state_26690[(12)]);
var inst_26650 = cljs.core._nth.call(null,inst_26643,inst_26645);
var state_26690__$1 = state_26690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26690__$1,(13),out,inst_26650);
} else {
if((state_val_26691 === (18))){
var inst_26656 = (state_26690[(7)]);
var inst_26665 = cljs.core.first.call(null,inst_26656);
var state_26690__$1 = state_26690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26690__$1,(20),out,inst_26665);
} else {
if((state_val_26691 === (8))){
var inst_26644 = (state_26690[(8)]);
var inst_26645 = (state_26690[(11)]);
var inst_26647 = (inst_26645 < inst_26644);
var inst_26648 = inst_26647;
var state_26690__$1 = state_26690;
if(cljs.core.truth_(inst_26648)){
var statearr_26724_26752 = state_26690__$1;
(statearr_26724_26752[(1)] = (10));

} else {
var statearr_26725_26753 = state_26690__$1;
(statearr_26725_26753[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24968__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24968__auto____0 = (function (){
var statearr_26726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26726[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24968__auto__);

(statearr_26726[(1)] = (1));

return statearr_26726;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24968__auto____1 = (function (state_26690){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26727){if((e26727 instanceof Object)){
var ex__24971__auto__ = e26727;
var statearr_26728_26754 = state_26690;
(statearr_26728_26754[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26755 = state_26690;
state_26690 = G__26755;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24968__auto__ = function(state_26690){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24968__auto____1.call(this,state_26690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24968__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24968__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26729 = f__25063__auto__.call(null);
(statearr_26729[(6)] = c__25062__auto__);

return statearr_26729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

return c__25062__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26757 = arguments.length;
switch (G__26757) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26760 = arguments.length;
switch (G__26760) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26763 = arguments.length;
switch (G__26763) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25062__auto___26810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26787){
var state_val_26788 = (state_26787[(1)]);
if((state_val_26788 === (7))){
var inst_26782 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
var statearr_26789_26811 = state_26787__$1;
(statearr_26789_26811[(2)] = inst_26782);

(statearr_26789_26811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (1))){
var inst_26764 = null;
var state_26787__$1 = (function (){var statearr_26790 = state_26787;
(statearr_26790[(7)] = inst_26764);

return statearr_26790;
})();
var statearr_26791_26812 = state_26787__$1;
(statearr_26791_26812[(2)] = null);

(statearr_26791_26812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (4))){
var inst_26767 = (state_26787[(8)]);
var inst_26767__$1 = (state_26787[(2)]);
var inst_26768 = (inst_26767__$1 == null);
var inst_26769 = cljs.core.not.call(null,inst_26768);
var state_26787__$1 = (function (){var statearr_26792 = state_26787;
(statearr_26792[(8)] = inst_26767__$1);

return statearr_26792;
})();
if(inst_26769){
var statearr_26793_26813 = state_26787__$1;
(statearr_26793_26813[(1)] = (5));

} else {
var statearr_26794_26814 = state_26787__$1;
(statearr_26794_26814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (6))){
var state_26787__$1 = state_26787;
var statearr_26795_26815 = state_26787__$1;
(statearr_26795_26815[(2)] = null);

(statearr_26795_26815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (3))){
var inst_26784 = (state_26787[(2)]);
var inst_26785 = cljs.core.async.close_BANG_.call(null,out);
var state_26787__$1 = (function (){var statearr_26796 = state_26787;
(statearr_26796[(9)] = inst_26784);

return statearr_26796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26787__$1,inst_26785);
} else {
if((state_val_26788 === (2))){
var state_26787__$1 = state_26787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26787__$1,(4),ch);
} else {
if((state_val_26788 === (11))){
var inst_26767 = (state_26787[(8)]);
var inst_26776 = (state_26787[(2)]);
var inst_26764 = inst_26767;
var state_26787__$1 = (function (){var statearr_26797 = state_26787;
(statearr_26797[(10)] = inst_26776);

(statearr_26797[(7)] = inst_26764);

return statearr_26797;
})();
var statearr_26798_26816 = state_26787__$1;
(statearr_26798_26816[(2)] = null);

(statearr_26798_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (9))){
var inst_26767 = (state_26787[(8)]);
var state_26787__$1 = state_26787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26787__$1,(11),out,inst_26767);
} else {
if((state_val_26788 === (5))){
var inst_26767 = (state_26787[(8)]);
var inst_26764 = (state_26787[(7)]);
var inst_26771 = cljs.core._EQ_.call(null,inst_26767,inst_26764);
var state_26787__$1 = state_26787;
if(inst_26771){
var statearr_26800_26817 = state_26787__$1;
(statearr_26800_26817[(1)] = (8));

} else {
var statearr_26801_26818 = state_26787__$1;
(statearr_26801_26818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (10))){
var inst_26779 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
var statearr_26802_26819 = state_26787__$1;
(statearr_26802_26819[(2)] = inst_26779);

(statearr_26802_26819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (8))){
var inst_26764 = (state_26787[(7)]);
var tmp26799 = inst_26764;
var inst_26764__$1 = tmp26799;
var state_26787__$1 = (function (){var statearr_26803 = state_26787;
(statearr_26803[(7)] = inst_26764__$1);

return statearr_26803;
})();
var statearr_26804_26820 = state_26787__$1;
(statearr_26804_26820[(2)] = null);

(statearr_26804_26820[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_26787){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__24971__auto__ = e26806;
var statearr_26807_26821 = state_26787;
(statearr_26807_26821[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26822 = state_26787;
state_26787 = G__26822;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_26787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_26787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26808 = f__25063__auto__.call(null);
(statearr_26808[(6)] = c__25062__auto___26810);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26824 = arguments.length;
switch (G__26824) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25062__auto___26890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26862){
var state_val_26863 = (state_26862[(1)]);
if((state_val_26863 === (7))){
var inst_26858 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26864_26891 = state_26862__$1;
(statearr_26864_26891[(2)] = inst_26858);

(statearr_26864_26891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (1))){
var inst_26825 = (new Array(n));
var inst_26826 = inst_26825;
var inst_26827 = (0);
var state_26862__$1 = (function (){var statearr_26865 = state_26862;
(statearr_26865[(7)] = inst_26827);

(statearr_26865[(8)] = inst_26826);

return statearr_26865;
})();
var statearr_26866_26892 = state_26862__$1;
(statearr_26866_26892[(2)] = null);

(statearr_26866_26892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (4))){
var inst_26830 = (state_26862[(9)]);
var inst_26830__$1 = (state_26862[(2)]);
var inst_26831 = (inst_26830__$1 == null);
var inst_26832 = cljs.core.not.call(null,inst_26831);
var state_26862__$1 = (function (){var statearr_26867 = state_26862;
(statearr_26867[(9)] = inst_26830__$1);

return statearr_26867;
})();
if(inst_26832){
var statearr_26868_26893 = state_26862__$1;
(statearr_26868_26893[(1)] = (5));

} else {
var statearr_26869_26894 = state_26862__$1;
(statearr_26869_26894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (15))){
var inst_26852 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26870_26895 = state_26862__$1;
(statearr_26870_26895[(2)] = inst_26852);

(statearr_26870_26895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (13))){
var state_26862__$1 = state_26862;
var statearr_26871_26896 = state_26862__$1;
(statearr_26871_26896[(2)] = null);

(statearr_26871_26896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (6))){
var inst_26827 = (state_26862[(7)]);
var inst_26848 = (inst_26827 > (0));
var state_26862__$1 = state_26862;
if(cljs.core.truth_(inst_26848)){
var statearr_26872_26897 = state_26862__$1;
(statearr_26872_26897[(1)] = (12));

} else {
var statearr_26873_26898 = state_26862__$1;
(statearr_26873_26898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (3))){
var inst_26860 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26862__$1,inst_26860);
} else {
if((state_val_26863 === (12))){
var inst_26826 = (state_26862[(8)]);
var inst_26850 = cljs.core.vec.call(null,inst_26826);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26862__$1,(15),out,inst_26850);
} else {
if((state_val_26863 === (2))){
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26862__$1,(4),ch);
} else {
if((state_val_26863 === (11))){
var inst_26842 = (state_26862[(2)]);
var inst_26843 = (new Array(n));
var inst_26826 = inst_26843;
var inst_26827 = (0);
var state_26862__$1 = (function (){var statearr_26874 = state_26862;
(statearr_26874[(10)] = inst_26842);

(statearr_26874[(7)] = inst_26827);

(statearr_26874[(8)] = inst_26826);

return statearr_26874;
})();
var statearr_26875_26899 = state_26862__$1;
(statearr_26875_26899[(2)] = null);

(statearr_26875_26899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (9))){
var inst_26826 = (state_26862[(8)]);
var inst_26840 = cljs.core.vec.call(null,inst_26826);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26862__$1,(11),out,inst_26840);
} else {
if((state_val_26863 === (5))){
var inst_26827 = (state_26862[(7)]);
var inst_26830 = (state_26862[(9)]);
var inst_26826 = (state_26862[(8)]);
var inst_26835 = (state_26862[(11)]);
var inst_26834 = (inst_26826[inst_26827] = inst_26830);
var inst_26835__$1 = (inst_26827 + (1));
var inst_26836 = (inst_26835__$1 < n);
var state_26862__$1 = (function (){var statearr_26876 = state_26862;
(statearr_26876[(12)] = inst_26834);

(statearr_26876[(11)] = inst_26835__$1);

return statearr_26876;
})();
if(cljs.core.truth_(inst_26836)){
var statearr_26877_26900 = state_26862__$1;
(statearr_26877_26900[(1)] = (8));

} else {
var statearr_26878_26901 = state_26862__$1;
(statearr_26878_26901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (14))){
var inst_26855 = (state_26862[(2)]);
var inst_26856 = cljs.core.async.close_BANG_.call(null,out);
var state_26862__$1 = (function (){var statearr_26880 = state_26862;
(statearr_26880[(13)] = inst_26855);

return statearr_26880;
})();
var statearr_26881_26902 = state_26862__$1;
(statearr_26881_26902[(2)] = inst_26856);

(statearr_26881_26902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (10))){
var inst_26846 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26882_26903 = state_26862__$1;
(statearr_26882_26903[(2)] = inst_26846);

(statearr_26882_26903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (8))){
var inst_26826 = (state_26862[(8)]);
var inst_26835 = (state_26862[(11)]);
var tmp26879 = inst_26826;
var inst_26826__$1 = tmp26879;
var inst_26827 = inst_26835;
var state_26862__$1 = (function (){var statearr_26883 = state_26862;
(statearr_26883[(7)] = inst_26827);

(statearr_26883[(8)] = inst_26826__$1);

return statearr_26883;
})();
var statearr_26884_26904 = state_26862__$1;
(statearr_26884_26904[(2)] = null);

(statearr_26884_26904[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_26885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26885[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_26885[(1)] = (1));

return statearr_26885;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_26862){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26886){if((e26886 instanceof Object)){
var ex__24971__auto__ = e26886;
var statearr_26887_26905 = state_26862;
(statearr_26887_26905[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26906 = state_26862;
state_26862 = G__26906;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_26862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_26862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26888 = f__25063__auto__.call(null);
(statearr_26888[(6)] = c__25062__auto___26890);

return statearr_26888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26908 = arguments.length;
switch (G__26908) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25062__auto___26978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_26950){
var state_val_26951 = (state_26950[(1)]);
if((state_val_26951 === (7))){
var inst_26946 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26952_26979 = state_26950__$1;
(statearr_26952_26979[(2)] = inst_26946);

(statearr_26952_26979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (1))){
var inst_26909 = [];
var inst_26910 = inst_26909;
var inst_26911 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26950__$1 = (function (){var statearr_26953 = state_26950;
(statearr_26953[(7)] = inst_26910);

(statearr_26953[(8)] = inst_26911);

return statearr_26953;
})();
var statearr_26954_26980 = state_26950__$1;
(statearr_26954_26980[(2)] = null);

(statearr_26954_26980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (4))){
var inst_26914 = (state_26950[(9)]);
var inst_26914__$1 = (state_26950[(2)]);
var inst_26915 = (inst_26914__$1 == null);
var inst_26916 = cljs.core.not.call(null,inst_26915);
var state_26950__$1 = (function (){var statearr_26955 = state_26950;
(statearr_26955[(9)] = inst_26914__$1);

return statearr_26955;
})();
if(inst_26916){
var statearr_26956_26981 = state_26950__$1;
(statearr_26956_26981[(1)] = (5));

} else {
var statearr_26957_26982 = state_26950__$1;
(statearr_26957_26982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (15))){
var inst_26940 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26958_26983 = state_26950__$1;
(statearr_26958_26983[(2)] = inst_26940);

(statearr_26958_26983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (13))){
var state_26950__$1 = state_26950;
var statearr_26959_26984 = state_26950__$1;
(statearr_26959_26984[(2)] = null);

(statearr_26959_26984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (6))){
var inst_26910 = (state_26950[(7)]);
var inst_26935 = inst_26910.length;
var inst_26936 = (inst_26935 > (0));
var state_26950__$1 = state_26950;
if(cljs.core.truth_(inst_26936)){
var statearr_26960_26985 = state_26950__$1;
(statearr_26960_26985[(1)] = (12));

} else {
var statearr_26961_26986 = state_26950__$1;
(statearr_26961_26986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (3))){
var inst_26948 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26950__$1,inst_26948);
} else {
if((state_val_26951 === (12))){
var inst_26910 = (state_26950[(7)]);
var inst_26938 = cljs.core.vec.call(null,inst_26910);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26950__$1,(15),out,inst_26938);
} else {
if((state_val_26951 === (2))){
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26950__$1,(4),ch);
} else {
if((state_val_26951 === (11))){
var inst_26914 = (state_26950[(9)]);
var inst_26918 = (state_26950[(10)]);
var inst_26928 = (state_26950[(2)]);
var inst_26929 = [];
var inst_26930 = inst_26929.push(inst_26914);
var inst_26910 = inst_26929;
var inst_26911 = inst_26918;
var state_26950__$1 = (function (){var statearr_26962 = state_26950;
(statearr_26962[(7)] = inst_26910);

(statearr_26962[(11)] = inst_26928);

(statearr_26962[(8)] = inst_26911);

(statearr_26962[(12)] = inst_26930);

return statearr_26962;
})();
var statearr_26963_26987 = state_26950__$1;
(statearr_26963_26987[(2)] = null);

(statearr_26963_26987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (9))){
var inst_26910 = (state_26950[(7)]);
var inst_26926 = cljs.core.vec.call(null,inst_26910);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26950__$1,(11),out,inst_26926);
} else {
if((state_val_26951 === (5))){
var inst_26914 = (state_26950[(9)]);
var inst_26911 = (state_26950[(8)]);
var inst_26918 = (state_26950[(10)]);
var inst_26918__$1 = f.call(null,inst_26914);
var inst_26919 = cljs.core._EQ_.call(null,inst_26918__$1,inst_26911);
var inst_26920 = cljs.core.keyword_identical_QMARK_.call(null,inst_26911,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26921 = ((inst_26919) || (inst_26920));
var state_26950__$1 = (function (){var statearr_26964 = state_26950;
(statearr_26964[(10)] = inst_26918__$1);

return statearr_26964;
})();
if(cljs.core.truth_(inst_26921)){
var statearr_26965_26988 = state_26950__$1;
(statearr_26965_26988[(1)] = (8));

} else {
var statearr_26966_26989 = state_26950__$1;
(statearr_26966_26989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (14))){
var inst_26943 = (state_26950[(2)]);
var inst_26944 = cljs.core.async.close_BANG_.call(null,out);
var state_26950__$1 = (function (){var statearr_26968 = state_26950;
(statearr_26968[(13)] = inst_26943);

return statearr_26968;
})();
var statearr_26969_26990 = state_26950__$1;
(statearr_26969_26990[(2)] = inst_26944);

(statearr_26969_26990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (10))){
var inst_26933 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26970_26991 = state_26950__$1;
(statearr_26970_26991[(2)] = inst_26933);

(statearr_26970_26991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (8))){
var inst_26910 = (state_26950[(7)]);
var inst_26914 = (state_26950[(9)]);
var inst_26918 = (state_26950[(10)]);
var inst_26923 = inst_26910.push(inst_26914);
var tmp26967 = inst_26910;
var inst_26910__$1 = tmp26967;
var inst_26911 = inst_26918;
var state_26950__$1 = (function (){var statearr_26971 = state_26950;
(statearr_26971[(7)] = inst_26910__$1);

(statearr_26971[(8)] = inst_26911);

(statearr_26971[(14)] = inst_26923);

return statearr_26971;
})();
var statearr_26972_26992 = state_26950__$1;
(statearr_26972_26992[(2)] = null);

(statearr_26972_26992[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24968__auto__ = null;
var cljs$core$async$state_machine__24968__auto____0 = (function (){
var statearr_26973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26973[(0)] = cljs$core$async$state_machine__24968__auto__);

(statearr_26973[(1)] = (1));

return statearr_26973;
});
var cljs$core$async$state_machine__24968__auto____1 = (function (state_26950){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_26950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e26974){if((e26974 instanceof Object)){
var ex__24971__auto__ = e26974;
var statearr_26975_26993 = state_26950;
(statearr_26975_26993[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26994 = state_26950;
state_26950 = G__26994;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs$core$async$state_machine__24968__auto__ = function(state_26950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24968__auto____1.call(this,state_26950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24968__auto____0;
cljs$core$async$state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24968__auto____1;
return cljs$core$async$state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_26976 = f__25063__auto__.call(null);
(statearr_26976[(6)] = c__25062__auto___26978);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1696052574626
