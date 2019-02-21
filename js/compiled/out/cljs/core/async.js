// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26543 = arguments.length;
switch (G__26543) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26544 = (function (f,blockable,meta26545){
this.f = f;
this.blockable = blockable;
this.meta26545 = meta26545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26546,meta26545__$1){
var self__ = this;
var _26546__$1 = this;
return (new cljs.core.async.t_cljs$core$async26544(self__.f,self__.blockable,meta26545__$1));
});

cljs.core.async.t_cljs$core$async26544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26546){
var self__ = this;
var _26546__$1 = this;
return self__.meta26545;
});

cljs.core.async.t_cljs$core$async26544.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26545","meta26545",-639527430,null)], null);
});

cljs.core.async.t_cljs$core$async26544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26544";

cljs.core.async.t_cljs$core$async26544.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26544");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26544.
 */
cljs.core.async.__GT_t_cljs$core$async26544 = (function cljs$core$async$__GT_t_cljs$core$async26544(f__$1,blockable__$1,meta26545){
return (new cljs.core.async.t_cljs$core$async26544(f__$1,blockable__$1,meta26545));
});

}

return (new cljs.core.async.t_cljs$core$async26544(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
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
var G__26550 = arguments.length;
switch (G__26550) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26553 = arguments.length;
switch (G__26553) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__26556 = arguments.length;
switch (G__26556) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26558 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26558);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26558,ret){
return (function (){
return fn1.call(null,val_26558);
});})(val_26558,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26560 = arguments.length;
switch (G__26560) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___26562 = n;
var x_26563 = (0);
while(true){
if((x_26563 < n__4376__auto___26562)){
(a[x_26563] = (0));

var G__26564 = (x_26563 + (1));
x_26563 = G__26564;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26565 = (i + (1));
i = G__26565;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26566 = (function (flag,meta26567){
this.flag = flag;
this.meta26567 = meta26567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26568,meta26567__$1){
var self__ = this;
var _26568__$1 = this;
return (new cljs.core.async.t_cljs$core$async26566(self__.flag,meta26567__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26568){
var self__ = this;
var _26568__$1 = this;
return self__.meta26567;
});})(flag))
;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26566.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26567","meta26567",-1525770078,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26566";

cljs.core.async.t_cljs$core$async26566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26566");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26566.
 */
cljs.core.async.__GT_t_cljs$core$async26566 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26566(flag__$1,meta26567){
return (new cljs.core.async.t_cljs$core$async26566(flag__$1,meta26567));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26566(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26569 = (function (flag,cb,meta26570){
this.flag = flag;
this.cb = cb;
this.meta26570 = meta26570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26571,meta26570__$1){
var self__ = this;
var _26571__$1 = this;
return (new cljs.core.async.t_cljs$core$async26569(self__.flag,self__.cb,meta26570__$1));
});

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26571){
var self__ = this;
var _26571__$1 = this;
return self__.meta26570;
});

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26570","meta26570",1438083756,null)], null);
});

cljs.core.async.t_cljs$core$async26569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26569";

cljs.core.async.t_cljs$core$async26569.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26569");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26569.
 */
cljs.core.async.__GT_t_cljs$core$async26569 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26569(flag__$1,cb__$1,meta26570){
return (new cljs.core.async.t_cljs$core$async26569(flag__$1,cb__$1,meta26570));
});

}

return (new cljs.core.async.t_cljs$core$async26569(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__26572_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26572_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26573_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26573_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26574 = (i + (1));
i = G__26574;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___26580 = arguments.length;
var i__4500__auto___26581 = (0);
while(true){
if((i__4500__auto___26581 < len__4499__auto___26580)){
args__4502__auto__.push((arguments[i__4500__auto___26581]));

var G__26582 = (i__4500__auto___26581 + (1));
i__4500__auto___26581 = G__26582;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26577){
var map__26578 = p__26577;
var map__26578__$1 = ((((!((map__26578 == null)))?(((((map__26578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26578):map__26578);
var opts = map__26578__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26575){
var G__26576 = cljs.core.first.call(null,seq26575);
var seq26575__$1 = cljs.core.next.call(null,seq26575);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26576,seq26575__$1);
});

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
var G__26584 = arguments.length;
switch (G__26584) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26483__auto___26630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___26630){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___26630){
return (function (state_26608){
var state_val_26609 = (state_26608[(1)]);
if((state_val_26609 === (7))){
var inst_26604 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26610_26631 = state_26608__$1;
(statearr_26610_26631[(2)] = inst_26604);

(statearr_26610_26631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (1))){
var state_26608__$1 = state_26608;
var statearr_26611_26632 = state_26608__$1;
(statearr_26611_26632[(2)] = null);

(statearr_26611_26632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (4))){
var inst_26587 = (state_26608[(7)]);
var inst_26587__$1 = (state_26608[(2)]);
var inst_26588 = (inst_26587__$1 == null);
var state_26608__$1 = (function (){var statearr_26612 = state_26608;
(statearr_26612[(7)] = inst_26587__$1);

return statearr_26612;
})();
if(cljs.core.truth_(inst_26588)){
var statearr_26613_26633 = state_26608__$1;
(statearr_26613_26633[(1)] = (5));

} else {
var statearr_26614_26634 = state_26608__$1;
(statearr_26614_26634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (13))){
var state_26608__$1 = state_26608;
var statearr_26615_26635 = state_26608__$1;
(statearr_26615_26635[(2)] = null);

(statearr_26615_26635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (6))){
var inst_26587 = (state_26608[(7)]);
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26608__$1,(11),to,inst_26587);
} else {
if((state_val_26609 === (3))){
var inst_26606 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26608__$1,inst_26606);
} else {
if((state_val_26609 === (12))){
var state_26608__$1 = state_26608;
var statearr_26616_26636 = state_26608__$1;
(statearr_26616_26636[(2)] = null);

(statearr_26616_26636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (2))){
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26608__$1,(4),from);
} else {
if((state_val_26609 === (11))){
var inst_26597 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
if(cljs.core.truth_(inst_26597)){
var statearr_26617_26637 = state_26608__$1;
(statearr_26617_26637[(1)] = (12));

} else {
var statearr_26618_26638 = state_26608__$1;
(statearr_26618_26638[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (9))){
var state_26608__$1 = state_26608;
var statearr_26619_26639 = state_26608__$1;
(statearr_26619_26639[(2)] = null);

(statearr_26619_26639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (5))){
var state_26608__$1 = state_26608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26620_26640 = state_26608__$1;
(statearr_26620_26640[(1)] = (8));

} else {
var statearr_26621_26641 = state_26608__$1;
(statearr_26621_26641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (14))){
var inst_26602 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26622_26642 = state_26608__$1;
(statearr_26622_26642[(2)] = inst_26602);

(statearr_26622_26642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (10))){
var inst_26594 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26623_26643 = state_26608__$1;
(statearr_26623_26643[(2)] = inst_26594);

(statearr_26623_26643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (8))){
var inst_26591 = cljs.core.async.close_BANG_.call(null,to);
var state_26608__$1 = state_26608;
var statearr_26624_26644 = state_26608__$1;
(statearr_26624_26644[(2)] = inst_26591);

(statearr_26624_26644[(1)] = (10));


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
});})(c__26483__auto___26630))
;
return ((function (switch__26460__auto__,c__26483__auto___26630){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_26625 = [null,null,null,null,null,null,null,null];
(statearr_26625[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_26625[(1)] = (1));

return statearr_26625;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_26608){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_26608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e26626){if((e26626 instanceof Object)){
var ex__26464__auto__ = e26626;
var statearr_26627_26645 = state_26608;
(statearr_26627_26645[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26646 = state_26608;
state_26608 = G__26646;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_26608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_26608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___26630))
})();
var state__26485__auto__ = (function (){var statearr_26628 = f__26484__auto__.call(null);
(statearr_26628[(6)] = c__26483__auto___26630);

return statearr_26628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___26630))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26647){
var vec__26648 = p__26647;
var v = cljs.core.nth.call(null,vec__26648,(0),null);
var p = cljs.core.nth.call(null,vec__26648,(1),null);
var job = vec__26648;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26483__auto___26819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___26819,res,vec__26648,v,p,job,jobs,results){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___26819,res,vec__26648,v,p,job,jobs,results){
return (function (state_26655){
var state_val_26656 = (state_26655[(1)]);
if((state_val_26656 === (1))){
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26655__$1,(2),res,v);
} else {
if((state_val_26656 === (2))){
var inst_26652 = (state_26655[(2)]);
var inst_26653 = cljs.core.async.close_BANG_.call(null,res);
var state_26655__$1 = (function (){var statearr_26657 = state_26655;
(statearr_26657[(7)] = inst_26652);

return statearr_26657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26655__$1,inst_26653);
} else {
return null;
}
}
});})(c__26483__auto___26819,res,vec__26648,v,p,job,jobs,results))
;
return ((function (switch__26460__auto__,c__26483__auto___26819,res,vec__26648,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0 = (function (){
var statearr_26658 = [null,null,null,null,null,null,null,null];
(statearr_26658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__);

(statearr_26658[(1)] = (1));

return statearr_26658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1 = (function (state_26655){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_26655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e26659){if((e26659 instanceof Object)){
var ex__26464__auto__ = e26659;
var statearr_26660_26820 = state_26655;
(statearr_26660_26820[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26821 = state_26655;
state_26655 = G__26821;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = function(state_26655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1.call(this,state_26655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___26819,res,vec__26648,v,p,job,jobs,results))
})();
var state__26485__auto__ = (function (){var statearr_26661 = f__26484__auto__.call(null);
(statearr_26661[(6)] = c__26483__auto___26819);

return statearr_26661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___26819,res,vec__26648,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26662){
var vec__26663 = p__26662;
var v = cljs.core.nth.call(null,vec__26663,(0),null);
var p = cljs.core.nth.call(null,vec__26663,(1),null);
var job = vec__26663;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___26822 = n;
var __26823 = (0);
while(true){
if((__26823 < n__4376__auto___26822)){
var G__26666_26824 = type;
var G__26666_26825__$1 = (((G__26666_26824 instanceof cljs.core.Keyword))?G__26666_26824.fqn:null);
switch (G__26666_26825__$1) {
case "compute":
var c__26483__auto___26827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26823,c__26483__auto___26827,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (__26823,c__26483__auto___26827,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async){
return (function (state_26679){
var state_val_26680 = (state_26679[(1)]);
if((state_val_26680 === (1))){
var state_26679__$1 = state_26679;
var statearr_26681_26828 = state_26679__$1;
(statearr_26681_26828[(2)] = null);

(statearr_26681_26828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (2))){
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26679__$1,(4),jobs);
} else {
if((state_val_26680 === (3))){
var inst_26677 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26679__$1,inst_26677);
} else {
if((state_val_26680 === (4))){
var inst_26669 = (state_26679[(2)]);
var inst_26670 = process.call(null,inst_26669);
var state_26679__$1 = state_26679;
if(cljs.core.truth_(inst_26670)){
var statearr_26682_26829 = state_26679__$1;
(statearr_26682_26829[(1)] = (5));

} else {
var statearr_26683_26830 = state_26679__$1;
(statearr_26683_26830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (5))){
var state_26679__$1 = state_26679;
var statearr_26684_26831 = state_26679__$1;
(statearr_26684_26831[(2)] = null);

(statearr_26684_26831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (6))){
var state_26679__$1 = state_26679;
var statearr_26685_26832 = state_26679__$1;
(statearr_26685_26832[(2)] = null);

(statearr_26685_26832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (7))){
var inst_26675 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26686_26833 = state_26679__$1;
(statearr_26686_26833[(2)] = inst_26675);

(statearr_26686_26833[(1)] = (3));


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
});})(__26823,c__26483__auto___26827,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async))
;
return ((function (__26823,switch__26460__auto__,c__26483__auto___26827,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0 = (function (){
var statearr_26687 = [null,null,null,null,null,null,null];
(statearr_26687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__);

(statearr_26687[(1)] = (1));

return statearr_26687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1 = (function (state_26679){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_26679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e26688){if((e26688 instanceof Object)){
var ex__26464__auto__ = e26688;
var statearr_26689_26834 = state_26679;
(statearr_26689_26834[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26835 = state_26679;
state_26679 = G__26835;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = function(state_26679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1.call(this,state_26679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__;
})()
;})(__26823,switch__26460__auto__,c__26483__auto___26827,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async))
})();
var state__26485__auto__ = (function (){var statearr_26690 = f__26484__auto__.call(null);
(statearr_26690[(6)] = c__26483__auto___26827);

return statearr_26690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(__26823,c__26483__auto___26827,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async))
);


break;
case "async":
var c__26483__auto___26836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26823,c__26483__auto___26836,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (__26823,c__26483__auto___26836,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async){
return (function (state_26703){
var state_val_26704 = (state_26703[(1)]);
if((state_val_26704 === (1))){
var state_26703__$1 = state_26703;
var statearr_26705_26837 = state_26703__$1;
(statearr_26705_26837[(2)] = null);

(statearr_26705_26837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26704 === (2))){
var state_26703__$1 = state_26703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26703__$1,(4),jobs);
} else {
if((state_val_26704 === (3))){
var inst_26701 = (state_26703[(2)]);
var state_26703__$1 = state_26703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26703__$1,inst_26701);
} else {
if((state_val_26704 === (4))){
var inst_26693 = (state_26703[(2)]);
var inst_26694 = async.call(null,inst_26693);
var state_26703__$1 = state_26703;
if(cljs.core.truth_(inst_26694)){
var statearr_26706_26838 = state_26703__$1;
(statearr_26706_26838[(1)] = (5));

} else {
var statearr_26707_26839 = state_26703__$1;
(statearr_26707_26839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26704 === (5))){
var state_26703__$1 = state_26703;
var statearr_26708_26840 = state_26703__$1;
(statearr_26708_26840[(2)] = null);

(statearr_26708_26840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26704 === (6))){
var state_26703__$1 = state_26703;
var statearr_26709_26841 = state_26703__$1;
(statearr_26709_26841[(2)] = null);

(statearr_26709_26841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26704 === (7))){
var inst_26699 = (state_26703[(2)]);
var state_26703__$1 = state_26703;
var statearr_26710_26842 = state_26703__$1;
(statearr_26710_26842[(2)] = inst_26699);

(statearr_26710_26842[(1)] = (3));


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
});})(__26823,c__26483__auto___26836,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async))
;
return ((function (__26823,switch__26460__auto__,c__26483__auto___26836,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0 = (function (){
var statearr_26711 = [null,null,null,null,null,null,null];
(statearr_26711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__);

(statearr_26711[(1)] = (1));

return statearr_26711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1 = (function (state_26703){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_26703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e26712){if((e26712 instanceof Object)){
var ex__26464__auto__ = e26712;
var statearr_26713_26843 = state_26703;
(statearr_26713_26843[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26844 = state_26703;
state_26703 = G__26844;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = function(state_26703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1.call(this,state_26703);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__;
})()
;})(__26823,switch__26460__auto__,c__26483__auto___26836,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async))
})();
var state__26485__auto__ = (function (){var statearr_26714 = f__26484__auto__.call(null);
(statearr_26714[(6)] = c__26483__auto___26836);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(__26823,c__26483__auto___26836,G__26666_26824,G__26666_26825__$1,n__4376__auto___26822,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26666_26825__$1)].join('')));

}

var G__26845 = (__26823 + (1));
__26823 = G__26845;
continue;
} else {
}
break;
}

var c__26483__auto___26846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___26846,jobs,results,process,async){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___26846,jobs,results,process,async){
return (function (state_26736){
var state_val_26737 = (state_26736[(1)]);
if((state_val_26737 === (1))){
var state_26736__$1 = state_26736;
var statearr_26738_26847 = state_26736__$1;
(statearr_26738_26847[(2)] = null);

(statearr_26738_26847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (2))){
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26736__$1,(4),from);
} else {
if((state_val_26737 === (3))){
var inst_26734 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26736__$1,inst_26734);
} else {
if((state_val_26737 === (4))){
var inst_26717 = (state_26736[(7)]);
var inst_26717__$1 = (state_26736[(2)]);
var inst_26718 = (inst_26717__$1 == null);
var state_26736__$1 = (function (){var statearr_26739 = state_26736;
(statearr_26739[(7)] = inst_26717__$1);

return statearr_26739;
})();
if(cljs.core.truth_(inst_26718)){
var statearr_26740_26848 = state_26736__$1;
(statearr_26740_26848[(1)] = (5));

} else {
var statearr_26741_26849 = state_26736__$1;
(statearr_26741_26849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (5))){
var inst_26720 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26736__$1 = state_26736;
var statearr_26742_26850 = state_26736__$1;
(statearr_26742_26850[(2)] = inst_26720);

(statearr_26742_26850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (6))){
var inst_26717 = (state_26736[(7)]);
var inst_26722 = (state_26736[(8)]);
var inst_26722__$1 = cljs.core.async.chan.call(null,(1));
var inst_26723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26724 = [inst_26717,inst_26722__$1];
var inst_26725 = (new cljs.core.PersistentVector(null,2,(5),inst_26723,inst_26724,null));
var state_26736__$1 = (function (){var statearr_26743 = state_26736;
(statearr_26743[(8)] = inst_26722__$1);

return statearr_26743;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26736__$1,(8),jobs,inst_26725);
} else {
if((state_val_26737 === (7))){
var inst_26732 = (state_26736[(2)]);
var state_26736__$1 = state_26736;
var statearr_26744_26851 = state_26736__$1;
(statearr_26744_26851[(2)] = inst_26732);

(statearr_26744_26851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26737 === (8))){
var inst_26722 = (state_26736[(8)]);
var inst_26727 = (state_26736[(2)]);
var state_26736__$1 = (function (){var statearr_26745 = state_26736;
(statearr_26745[(9)] = inst_26727);

return statearr_26745;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26736__$1,(9),results,inst_26722);
} else {
if((state_val_26737 === (9))){
var inst_26729 = (state_26736[(2)]);
var state_26736__$1 = (function (){var statearr_26746 = state_26736;
(statearr_26746[(10)] = inst_26729);

return statearr_26746;
})();
var statearr_26747_26852 = state_26736__$1;
(statearr_26747_26852[(2)] = null);

(statearr_26747_26852[(1)] = (2));


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
});})(c__26483__auto___26846,jobs,results,process,async))
;
return ((function (switch__26460__auto__,c__26483__auto___26846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0 = (function (){
var statearr_26748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__);

(statearr_26748[(1)] = (1));

return statearr_26748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1 = (function (state_26736){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_26736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e26749){if((e26749 instanceof Object)){
var ex__26464__auto__ = e26749;
var statearr_26750_26853 = state_26736;
(statearr_26750_26853[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26854 = state_26736;
state_26736 = G__26854;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = function(state_26736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1.call(this,state_26736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___26846,jobs,results,process,async))
})();
var state__26485__auto__ = (function (){var statearr_26751 = f__26484__auto__.call(null);
(statearr_26751[(6)] = c__26483__auto___26846);

return statearr_26751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___26846,jobs,results,process,async))
);


var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__,jobs,results,process,async){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__,jobs,results,process,async){
return (function (state_26789){
var state_val_26790 = (state_26789[(1)]);
if((state_val_26790 === (7))){
var inst_26785 = (state_26789[(2)]);
var state_26789__$1 = state_26789;
var statearr_26791_26855 = state_26789__$1;
(statearr_26791_26855[(2)] = inst_26785);

(statearr_26791_26855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (20))){
var state_26789__$1 = state_26789;
var statearr_26792_26856 = state_26789__$1;
(statearr_26792_26856[(2)] = null);

(statearr_26792_26856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (1))){
var state_26789__$1 = state_26789;
var statearr_26793_26857 = state_26789__$1;
(statearr_26793_26857[(2)] = null);

(statearr_26793_26857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (4))){
var inst_26754 = (state_26789[(7)]);
var inst_26754__$1 = (state_26789[(2)]);
var inst_26755 = (inst_26754__$1 == null);
var state_26789__$1 = (function (){var statearr_26794 = state_26789;
(statearr_26794[(7)] = inst_26754__$1);

return statearr_26794;
})();
if(cljs.core.truth_(inst_26755)){
var statearr_26795_26858 = state_26789__$1;
(statearr_26795_26858[(1)] = (5));

} else {
var statearr_26796_26859 = state_26789__$1;
(statearr_26796_26859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (15))){
var inst_26767 = (state_26789[(8)]);
var state_26789__$1 = state_26789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26789__$1,(18),to,inst_26767);
} else {
if((state_val_26790 === (21))){
var inst_26780 = (state_26789[(2)]);
var state_26789__$1 = state_26789;
var statearr_26797_26860 = state_26789__$1;
(statearr_26797_26860[(2)] = inst_26780);

(statearr_26797_26860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (13))){
var inst_26782 = (state_26789[(2)]);
var state_26789__$1 = (function (){var statearr_26798 = state_26789;
(statearr_26798[(9)] = inst_26782);

return statearr_26798;
})();
var statearr_26799_26861 = state_26789__$1;
(statearr_26799_26861[(2)] = null);

(statearr_26799_26861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (6))){
var inst_26754 = (state_26789[(7)]);
var state_26789__$1 = state_26789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26789__$1,(11),inst_26754);
} else {
if((state_val_26790 === (17))){
var inst_26775 = (state_26789[(2)]);
var state_26789__$1 = state_26789;
if(cljs.core.truth_(inst_26775)){
var statearr_26800_26862 = state_26789__$1;
(statearr_26800_26862[(1)] = (19));

} else {
var statearr_26801_26863 = state_26789__$1;
(statearr_26801_26863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (3))){
var inst_26787 = (state_26789[(2)]);
var state_26789__$1 = state_26789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26789__$1,inst_26787);
} else {
if((state_val_26790 === (12))){
var inst_26764 = (state_26789[(10)]);
var state_26789__$1 = state_26789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26789__$1,(14),inst_26764);
} else {
if((state_val_26790 === (2))){
var state_26789__$1 = state_26789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26789__$1,(4),results);
} else {
if((state_val_26790 === (19))){
var state_26789__$1 = state_26789;
var statearr_26802_26864 = state_26789__$1;
(statearr_26802_26864[(2)] = null);

(statearr_26802_26864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (11))){
var inst_26764 = (state_26789[(2)]);
var state_26789__$1 = (function (){var statearr_26803 = state_26789;
(statearr_26803[(10)] = inst_26764);

return statearr_26803;
})();
var statearr_26804_26865 = state_26789__$1;
(statearr_26804_26865[(2)] = null);

(statearr_26804_26865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (9))){
var state_26789__$1 = state_26789;
var statearr_26805_26866 = state_26789__$1;
(statearr_26805_26866[(2)] = null);

(statearr_26805_26866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (5))){
var state_26789__$1 = state_26789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26806_26867 = state_26789__$1;
(statearr_26806_26867[(1)] = (8));

} else {
var statearr_26807_26868 = state_26789__$1;
(statearr_26807_26868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (14))){
var inst_26769 = (state_26789[(11)]);
var inst_26767 = (state_26789[(8)]);
var inst_26767__$1 = (state_26789[(2)]);
var inst_26768 = (inst_26767__$1 == null);
var inst_26769__$1 = cljs.core.not.call(null,inst_26768);
var state_26789__$1 = (function (){var statearr_26808 = state_26789;
(statearr_26808[(11)] = inst_26769__$1);

(statearr_26808[(8)] = inst_26767__$1);

return statearr_26808;
})();
if(inst_26769__$1){
var statearr_26809_26869 = state_26789__$1;
(statearr_26809_26869[(1)] = (15));

} else {
var statearr_26810_26870 = state_26789__$1;
(statearr_26810_26870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (16))){
var inst_26769 = (state_26789[(11)]);
var state_26789__$1 = state_26789;
var statearr_26811_26871 = state_26789__$1;
(statearr_26811_26871[(2)] = inst_26769);

(statearr_26811_26871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (10))){
var inst_26761 = (state_26789[(2)]);
var state_26789__$1 = state_26789;
var statearr_26812_26872 = state_26789__$1;
(statearr_26812_26872[(2)] = inst_26761);

(statearr_26812_26872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (18))){
var inst_26772 = (state_26789[(2)]);
var state_26789__$1 = state_26789;
var statearr_26813_26873 = state_26789__$1;
(statearr_26813_26873[(2)] = inst_26772);

(statearr_26813_26873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26790 === (8))){
var inst_26758 = cljs.core.async.close_BANG_.call(null,to);
var state_26789__$1 = state_26789;
var statearr_26814_26874 = state_26789__$1;
(statearr_26814_26874[(2)] = inst_26758);

(statearr_26814_26874[(1)] = (10));


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
});})(c__26483__auto__,jobs,results,process,async))
;
return ((function (switch__26460__auto__,c__26483__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0 = (function (){
var statearr_26815 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__);

(statearr_26815[(1)] = (1));

return statearr_26815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1 = (function (state_26789){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_26789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e26816){if((e26816 instanceof Object)){
var ex__26464__auto__ = e26816;
var statearr_26817_26875 = state_26789;
(statearr_26817_26875[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26876 = state_26789;
state_26789 = G__26876;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__ = function(state_26789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1.call(this,state_26789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__,jobs,results,process,async))
})();
var state__26485__auto__ = (function (){var statearr_26818 = f__26484__auto__.call(null);
(statearr_26818[(6)] = c__26483__auto__);

return statearr_26818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__,jobs,results,process,async))
);

return c__26483__auto__;
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
var G__26878 = arguments.length;
switch (G__26878) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__26881 = arguments.length;
switch (G__26881) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__26884 = arguments.length;
switch (G__26884) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26483__auto___26933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___26933,tc,fc){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___26933,tc,fc){
return (function (state_26910){
var state_val_26911 = (state_26910[(1)]);
if((state_val_26911 === (7))){
var inst_26906 = (state_26910[(2)]);
var state_26910__$1 = state_26910;
var statearr_26912_26934 = state_26910__$1;
(statearr_26912_26934[(2)] = inst_26906);

(statearr_26912_26934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (1))){
var state_26910__$1 = state_26910;
var statearr_26913_26935 = state_26910__$1;
(statearr_26913_26935[(2)] = null);

(statearr_26913_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (4))){
var inst_26887 = (state_26910[(7)]);
var inst_26887__$1 = (state_26910[(2)]);
var inst_26888 = (inst_26887__$1 == null);
var state_26910__$1 = (function (){var statearr_26914 = state_26910;
(statearr_26914[(7)] = inst_26887__$1);

return statearr_26914;
})();
if(cljs.core.truth_(inst_26888)){
var statearr_26915_26936 = state_26910__$1;
(statearr_26915_26936[(1)] = (5));

} else {
var statearr_26916_26937 = state_26910__$1;
(statearr_26916_26937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (13))){
var state_26910__$1 = state_26910;
var statearr_26917_26938 = state_26910__$1;
(statearr_26917_26938[(2)] = null);

(statearr_26917_26938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (6))){
var inst_26887 = (state_26910[(7)]);
var inst_26893 = p.call(null,inst_26887);
var state_26910__$1 = state_26910;
if(cljs.core.truth_(inst_26893)){
var statearr_26918_26939 = state_26910__$1;
(statearr_26918_26939[(1)] = (9));

} else {
var statearr_26919_26940 = state_26910__$1;
(statearr_26919_26940[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (3))){
var inst_26908 = (state_26910[(2)]);
var state_26910__$1 = state_26910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26910__$1,inst_26908);
} else {
if((state_val_26911 === (12))){
var state_26910__$1 = state_26910;
var statearr_26920_26941 = state_26910__$1;
(statearr_26920_26941[(2)] = null);

(statearr_26920_26941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (2))){
var state_26910__$1 = state_26910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26910__$1,(4),ch);
} else {
if((state_val_26911 === (11))){
var inst_26887 = (state_26910[(7)]);
var inst_26897 = (state_26910[(2)]);
var state_26910__$1 = state_26910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26910__$1,(8),inst_26897,inst_26887);
} else {
if((state_val_26911 === (9))){
var state_26910__$1 = state_26910;
var statearr_26921_26942 = state_26910__$1;
(statearr_26921_26942[(2)] = tc);

(statearr_26921_26942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (5))){
var inst_26890 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26891 = cljs.core.async.close_BANG_.call(null,fc);
var state_26910__$1 = (function (){var statearr_26922 = state_26910;
(statearr_26922[(8)] = inst_26890);

return statearr_26922;
})();
var statearr_26923_26943 = state_26910__$1;
(statearr_26923_26943[(2)] = inst_26891);

(statearr_26923_26943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (14))){
var inst_26904 = (state_26910[(2)]);
var state_26910__$1 = state_26910;
var statearr_26924_26944 = state_26910__$1;
(statearr_26924_26944[(2)] = inst_26904);

(statearr_26924_26944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (10))){
var state_26910__$1 = state_26910;
var statearr_26925_26945 = state_26910__$1;
(statearr_26925_26945[(2)] = fc);

(statearr_26925_26945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (8))){
var inst_26899 = (state_26910[(2)]);
var state_26910__$1 = state_26910;
if(cljs.core.truth_(inst_26899)){
var statearr_26926_26946 = state_26910__$1;
(statearr_26926_26946[(1)] = (12));

} else {
var statearr_26927_26947 = state_26910__$1;
(statearr_26927_26947[(1)] = (13));

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
});})(c__26483__auto___26933,tc,fc))
;
return ((function (switch__26460__auto__,c__26483__auto___26933,tc,fc){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_26928 = [null,null,null,null,null,null,null,null,null];
(statearr_26928[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_26928[(1)] = (1));

return statearr_26928;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_26910){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_26910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e26929){if((e26929 instanceof Object)){
var ex__26464__auto__ = e26929;
var statearr_26930_26948 = state_26910;
(statearr_26930_26948[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26949 = state_26910;
state_26910 = G__26949;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_26910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_26910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___26933,tc,fc))
})();
var state__26485__auto__ = (function (){var statearr_26931 = f__26484__auto__.call(null);
(statearr_26931[(6)] = c__26483__auto___26933);

return statearr_26931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___26933,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__){
return (function (state_26970){
var state_val_26971 = (state_26970[(1)]);
if((state_val_26971 === (7))){
var inst_26966 = (state_26970[(2)]);
var state_26970__$1 = state_26970;
var statearr_26972_26990 = state_26970__$1;
(statearr_26972_26990[(2)] = inst_26966);

(statearr_26972_26990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (1))){
var inst_26950 = init;
var state_26970__$1 = (function (){var statearr_26973 = state_26970;
(statearr_26973[(7)] = inst_26950);

return statearr_26973;
})();
var statearr_26974_26991 = state_26970__$1;
(statearr_26974_26991[(2)] = null);

(statearr_26974_26991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (4))){
var inst_26953 = (state_26970[(8)]);
var inst_26953__$1 = (state_26970[(2)]);
var inst_26954 = (inst_26953__$1 == null);
var state_26970__$1 = (function (){var statearr_26975 = state_26970;
(statearr_26975[(8)] = inst_26953__$1);

return statearr_26975;
})();
if(cljs.core.truth_(inst_26954)){
var statearr_26976_26992 = state_26970__$1;
(statearr_26976_26992[(1)] = (5));

} else {
var statearr_26977_26993 = state_26970__$1;
(statearr_26977_26993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (6))){
var inst_26953 = (state_26970[(8)]);
var inst_26950 = (state_26970[(7)]);
var inst_26957 = (state_26970[(9)]);
var inst_26957__$1 = f.call(null,inst_26950,inst_26953);
var inst_26958 = cljs.core.reduced_QMARK_.call(null,inst_26957__$1);
var state_26970__$1 = (function (){var statearr_26978 = state_26970;
(statearr_26978[(9)] = inst_26957__$1);

return statearr_26978;
})();
if(inst_26958){
var statearr_26979_26994 = state_26970__$1;
(statearr_26979_26994[(1)] = (8));

} else {
var statearr_26980_26995 = state_26970__$1;
(statearr_26980_26995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (3))){
var inst_26968 = (state_26970[(2)]);
var state_26970__$1 = state_26970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26970__$1,inst_26968);
} else {
if((state_val_26971 === (2))){
var state_26970__$1 = state_26970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26970__$1,(4),ch);
} else {
if((state_val_26971 === (9))){
var inst_26957 = (state_26970[(9)]);
var inst_26950 = inst_26957;
var state_26970__$1 = (function (){var statearr_26981 = state_26970;
(statearr_26981[(7)] = inst_26950);

return statearr_26981;
})();
var statearr_26982_26996 = state_26970__$1;
(statearr_26982_26996[(2)] = null);

(statearr_26982_26996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (5))){
var inst_26950 = (state_26970[(7)]);
var state_26970__$1 = state_26970;
var statearr_26983_26997 = state_26970__$1;
(statearr_26983_26997[(2)] = inst_26950);

(statearr_26983_26997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (10))){
var inst_26964 = (state_26970[(2)]);
var state_26970__$1 = state_26970;
var statearr_26984_26998 = state_26970__$1;
(statearr_26984_26998[(2)] = inst_26964);

(statearr_26984_26998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (8))){
var inst_26957 = (state_26970[(9)]);
var inst_26960 = cljs.core.deref.call(null,inst_26957);
var state_26970__$1 = state_26970;
var statearr_26985_26999 = state_26970__$1;
(statearr_26985_26999[(2)] = inst_26960);

(statearr_26985_26999[(1)] = (10));


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
});})(c__26483__auto__))
;
return ((function (switch__26460__auto__,c__26483__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26461__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26461__auto____0 = (function (){
var statearr_26986 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26986[(0)] = cljs$core$async$reduce_$_state_machine__26461__auto__);

(statearr_26986[(1)] = (1));

return statearr_26986;
});
var cljs$core$async$reduce_$_state_machine__26461__auto____1 = (function (state_26970){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_26970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e26987){if((e26987 instanceof Object)){
var ex__26464__auto__ = e26987;
var statearr_26988_27000 = state_26970;
(statearr_26988_27000[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27001 = state_26970;
state_26970 = G__27001;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26461__auto__ = function(state_26970){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26461__auto____1.call(this,state_26970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26461__auto____0;
cljs$core$async$reduce_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26461__auto____1;
return cljs$core$async$reduce_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__))
})();
var state__26485__auto__ = (function (){var statearr_26989 = f__26484__auto__.call(null);
(statearr_26989[(6)] = c__26483__auto__);

return statearr_26989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__))
);

return c__26483__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__,f__$1){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__,f__$1){
return (function (state_27007){
var state_val_27008 = (state_27007[(1)]);
if((state_val_27008 === (1))){
var inst_27002 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27007__$1 = state_27007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27007__$1,(2),inst_27002);
} else {
if((state_val_27008 === (2))){
var inst_27004 = (state_27007[(2)]);
var inst_27005 = f__$1.call(null,inst_27004);
var state_27007__$1 = state_27007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27007__$1,inst_27005);
} else {
return null;
}
}
});})(c__26483__auto__,f__$1))
;
return ((function (switch__26460__auto__,c__26483__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26461__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26461__auto____0 = (function (){
var statearr_27009 = [null,null,null,null,null,null,null];
(statearr_27009[(0)] = cljs$core$async$transduce_$_state_machine__26461__auto__);

(statearr_27009[(1)] = (1));

return statearr_27009;
});
var cljs$core$async$transduce_$_state_machine__26461__auto____1 = (function (state_27007){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_27007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e27010){if((e27010 instanceof Object)){
var ex__26464__auto__ = e27010;
var statearr_27011_27013 = state_27007;
(statearr_27011_27013[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27014 = state_27007;
state_27007 = G__27014;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26461__auto__ = function(state_27007){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26461__auto____1.call(this,state_27007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26461__auto____0;
cljs$core$async$transduce_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26461__auto____1;
return cljs$core$async$transduce_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__,f__$1))
})();
var state__26485__auto__ = (function (){var statearr_27012 = f__26484__auto__.call(null);
(statearr_27012[(6)] = c__26483__auto__);

return statearr_27012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__,f__$1))
);

return c__26483__auto__;
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
var G__27016 = arguments.length;
switch (G__27016) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__){
return (function (state_27041){
var state_val_27042 = (state_27041[(1)]);
if((state_val_27042 === (7))){
var inst_27023 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
var statearr_27043_27064 = state_27041__$1;
(statearr_27043_27064[(2)] = inst_27023);

(statearr_27043_27064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (1))){
var inst_27017 = cljs.core.seq.call(null,coll);
var inst_27018 = inst_27017;
var state_27041__$1 = (function (){var statearr_27044 = state_27041;
(statearr_27044[(7)] = inst_27018);

return statearr_27044;
})();
var statearr_27045_27065 = state_27041__$1;
(statearr_27045_27065[(2)] = null);

(statearr_27045_27065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (4))){
var inst_27018 = (state_27041[(7)]);
var inst_27021 = cljs.core.first.call(null,inst_27018);
var state_27041__$1 = state_27041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27041__$1,(7),ch,inst_27021);
} else {
if((state_val_27042 === (13))){
var inst_27035 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
var statearr_27046_27066 = state_27041__$1;
(statearr_27046_27066[(2)] = inst_27035);

(statearr_27046_27066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (6))){
var inst_27026 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
if(cljs.core.truth_(inst_27026)){
var statearr_27047_27067 = state_27041__$1;
(statearr_27047_27067[(1)] = (8));

} else {
var statearr_27048_27068 = state_27041__$1;
(statearr_27048_27068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (3))){
var inst_27039 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27041__$1,inst_27039);
} else {
if((state_val_27042 === (12))){
var state_27041__$1 = state_27041;
var statearr_27049_27069 = state_27041__$1;
(statearr_27049_27069[(2)] = null);

(statearr_27049_27069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (2))){
var inst_27018 = (state_27041[(7)]);
var state_27041__$1 = state_27041;
if(cljs.core.truth_(inst_27018)){
var statearr_27050_27070 = state_27041__$1;
(statearr_27050_27070[(1)] = (4));

} else {
var statearr_27051_27071 = state_27041__$1;
(statearr_27051_27071[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (11))){
var inst_27032 = cljs.core.async.close_BANG_.call(null,ch);
var state_27041__$1 = state_27041;
var statearr_27052_27072 = state_27041__$1;
(statearr_27052_27072[(2)] = inst_27032);

(statearr_27052_27072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (9))){
var state_27041__$1 = state_27041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27053_27073 = state_27041__$1;
(statearr_27053_27073[(1)] = (11));

} else {
var statearr_27054_27074 = state_27041__$1;
(statearr_27054_27074[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (5))){
var inst_27018 = (state_27041[(7)]);
var state_27041__$1 = state_27041;
var statearr_27055_27075 = state_27041__$1;
(statearr_27055_27075[(2)] = inst_27018);

(statearr_27055_27075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (10))){
var inst_27037 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
var statearr_27056_27076 = state_27041__$1;
(statearr_27056_27076[(2)] = inst_27037);

(statearr_27056_27076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (8))){
var inst_27018 = (state_27041[(7)]);
var inst_27028 = cljs.core.next.call(null,inst_27018);
var inst_27018__$1 = inst_27028;
var state_27041__$1 = (function (){var statearr_27057 = state_27041;
(statearr_27057[(7)] = inst_27018__$1);

return statearr_27057;
})();
var statearr_27058_27077 = state_27041__$1;
(statearr_27058_27077[(2)] = null);

(statearr_27058_27077[(1)] = (2));


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
});})(c__26483__auto__))
;
return ((function (switch__26460__auto__,c__26483__auto__){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_27059 = [null,null,null,null,null,null,null,null];
(statearr_27059[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_27059[(1)] = (1));

return statearr_27059;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_27041){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_27041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e27060){if((e27060 instanceof Object)){
var ex__26464__auto__ = e27060;
var statearr_27061_27078 = state_27041;
(statearr_27061_27078[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27079 = state_27041;
state_27041 = G__27079;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_27041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_27041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__))
})();
var state__26485__auto__ = (function (){var statearr_27062 = f__26484__auto__.call(null);
(statearr_27062[(6)] = c__26483__auto__);

return statearr_27062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__))
);

return c__26483__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if(typeof cljs.core.async.t_cljs$core$async27080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27080 = (function (ch,cs,meta27081){
this.ch = ch;
this.cs = cs;
this.meta27081 = meta27081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27082,meta27081__$1){
var self__ = this;
var _27082__$1 = this;
return (new cljs.core.async.t_cljs$core$async27080(self__.ch,self__.cs,meta27081__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27082){
var self__ = this;
var _27082__$1 = this;
return self__.meta27081;
});})(cs))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27080.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27081","meta27081",1011471833,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27080";

cljs.core.async.t_cljs$core$async27080.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27080");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27080.
 */
cljs.core.async.__GT_t_cljs$core$async27080 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27080(ch__$1,cs__$1,meta27081){
return (new cljs.core.async.t_cljs$core$async27080(ch__$1,cs__$1,meta27081));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27080(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26483__auto___27302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___27302,cs,m,dchan,dctr,done){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___27302,cs,m,dchan,dctr,done){
return (function (state_27217){
var state_val_27218 = (state_27217[(1)]);
if((state_val_27218 === (7))){
var inst_27213 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27219_27303 = state_27217__$1;
(statearr_27219_27303[(2)] = inst_27213);

(statearr_27219_27303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (20))){
var inst_27116 = (state_27217[(7)]);
var inst_27128 = cljs.core.first.call(null,inst_27116);
var inst_27129 = cljs.core.nth.call(null,inst_27128,(0),null);
var inst_27130 = cljs.core.nth.call(null,inst_27128,(1),null);
var state_27217__$1 = (function (){var statearr_27220 = state_27217;
(statearr_27220[(8)] = inst_27129);

return statearr_27220;
})();
if(cljs.core.truth_(inst_27130)){
var statearr_27221_27304 = state_27217__$1;
(statearr_27221_27304[(1)] = (22));

} else {
var statearr_27222_27305 = state_27217__$1;
(statearr_27222_27305[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (27))){
var inst_27160 = (state_27217[(9)]);
var inst_27158 = (state_27217[(10)]);
var inst_27165 = (state_27217[(11)]);
var inst_27085 = (state_27217[(12)]);
var inst_27165__$1 = cljs.core._nth.call(null,inst_27158,inst_27160);
var inst_27166 = cljs.core.async.put_BANG_.call(null,inst_27165__$1,inst_27085,done);
var state_27217__$1 = (function (){var statearr_27223 = state_27217;
(statearr_27223[(11)] = inst_27165__$1);

return statearr_27223;
})();
if(cljs.core.truth_(inst_27166)){
var statearr_27224_27306 = state_27217__$1;
(statearr_27224_27306[(1)] = (30));

} else {
var statearr_27225_27307 = state_27217__$1;
(statearr_27225_27307[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (1))){
var state_27217__$1 = state_27217;
var statearr_27226_27308 = state_27217__$1;
(statearr_27226_27308[(2)] = null);

(statearr_27226_27308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (24))){
var inst_27116 = (state_27217[(7)]);
var inst_27135 = (state_27217[(2)]);
var inst_27136 = cljs.core.next.call(null,inst_27116);
var inst_27094 = inst_27136;
var inst_27095 = null;
var inst_27096 = (0);
var inst_27097 = (0);
var state_27217__$1 = (function (){var statearr_27227 = state_27217;
(statearr_27227[(13)] = inst_27095);

(statearr_27227[(14)] = inst_27094);

(statearr_27227[(15)] = inst_27096);

(statearr_27227[(16)] = inst_27097);

(statearr_27227[(17)] = inst_27135);

return statearr_27227;
})();
var statearr_27228_27309 = state_27217__$1;
(statearr_27228_27309[(2)] = null);

(statearr_27228_27309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (39))){
var state_27217__$1 = state_27217;
var statearr_27232_27310 = state_27217__$1;
(statearr_27232_27310[(2)] = null);

(statearr_27232_27310[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (4))){
var inst_27085 = (state_27217[(12)]);
var inst_27085__$1 = (state_27217[(2)]);
var inst_27086 = (inst_27085__$1 == null);
var state_27217__$1 = (function (){var statearr_27233 = state_27217;
(statearr_27233[(12)] = inst_27085__$1);

return statearr_27233;
})();
if(cljs.core.truth_(inst_27086)){
var statearr_27234_27311 = state_27217__$1;
(statearr_27234_27311[(1)] = (5));

} else {
var statearr_27235_27312 = state_27217__$1;
(statearr_27235_27312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (15))){
var inst_27095 = (state_27217[(13)]);
var inst_27094 = (state_27217[(14)]);
var inst_27096 = (state_27217[(15)]);
var inst_27097 = (state_27217[(16)]);
var inst_27112 = (state_27217[(2)]);
var inst_27113 = (inst_27097 + (1));
var tmp27229 = inst_27095;
var tmp27230 = inst_27094;
var tmp27231 = inst_27096;
var inst_27094__$1 = tmp27230;
var inst_27095__$1 = tmp27229;
var inst_27096__$1 = tmp27231;
var inst_27097__$1 = inst_27113;
var state_27217__$1 = (function (){var statearr_27236 = state_27217;
(statearr_27236[(13)] = inst_27095__$1);

(statearr_27236[(14)] = inst_27094__$1);

(statearr_27236[(18)] = inst_27112);

(statearr_27236[(15)] = inst_27096__$1);

(statearr_27236[(16)] = inst_27097__$1);

return statearr_27236;
})();
var statearr_27237_27313 = state_27217__$1;
(statearr_27237_27313[(2)] = null);

(statearr_27237_27313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (21))){
var inst_27139 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27241_27314 = state_27217__$1;
(statearr_27241_27314[(2)] = inst_27139);

(statearr_27241_27314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (31))){
var inst_27165 = (state_27217[(11)]);
var inst_27169 = done.call(null,null);
var inst_27170 = cljs.core.async.untap_STAR_.call(null,m,inst_27165);
var state_27217__$1 = (function (){var statearr_27242 = state_27217;
(statearr_27242[(19)] = inst_27169);

return statearr_27242;
})();
var statearr_27243_27315 = state_27217__$1;
(statearr_27243_27315[(2)] = inst_27170);

(statearr_27243_27315[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (32))){
var inst_27160 = (state_27217[(9)]);
var inst_27158 = (state_27217[(10)]);
var inst_27159 = (state_27217[(20)]);
var inst_27157 = (state_27217[(21)]);
var inst_27172 = (state_27217[(2)]);
var inst_27173 = (inst_27160 + (1));
var tmp27238 = inst_27158;
var tmp27239 = inst_27159;
var tmp27240 = inst_27157;
var inst_27157__$1 = tmp27240;
var inst_27158__$1 = tmp27238;
var inst_27159__$1 = tmp27239;
var inst_27160__$1 = inst_27173;
var state_27217__$1 = (function (){var statearr_27244 = state_27217;
(statearr_27244[(9)] = inst_27160__$1);

(statearr_27244[(10)] = inst_27158__$1);

(statearr_27244[(20)] = inst_27159__$1);

(statearr_27244[(22)] = inst_27172);

(statearr_27244[(21)] = inst_27157__$1);

return statearr_27244;
})();
var statearr_27245_27316 = state_27217__$1;
(statearr_27245_27316[(2)] = null);

(statearr_27245_27316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (40))){
var inst_27185 = (state_27217[(23)]);
var inst_27189 = done.call(null,null);
var inst_27190 = cljs.core.async.untap_STAR_.call(null,m,inst_27185);
var state_27217__$1 = (function (){var statearr_27246 = state_27217;
(statearr_27246[(24)] = inst_27189);

return statearr_27246;
})();
var statearr_27247_27317 = state_27217__$1;
(statearr_27247_27317[(2)] = inst_27190);

(statearr_27247_27317[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (33))){
var inst_27176 = (state_27217[(25)]);
var inst_27178 = cljs.core.chunked_seq_QMARK_.call(null,inst_27176);
var state_27217__$1 = state_27217;
if(inst_27178){
var statearr_27248_27318 = state_27217__$1;
(statearr_27248_27318[(1)] = (36));

} else {
var statearr_27249_27319 = state_27217__$1;
(statearr_27249_27319[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (13))){
var inst_27106 = (state_27217[(26)]);
var inst_27109 = cljs.core.async.close_BANG_.call(null,inst_27106);
var state_27217__$1 = state_27217;
var statearr_27250_27320 = state_27217__$1;
(statearr_27250_27320[(2)] = inst_27109);

(statearr_27250_27320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (22))){
var inst_27129 = (state_27217[(8)]);
var inst_27132 = cljs.core.async.close_BANG_.call(null,inst_27129);
var state_27217__$1 = state_27217;
var statearr_27251_27321 = state_27217__$1;
(statearr_27251_27321[(2)] = inst_27132);

(statearr_27251_27321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (36))){
var inst_27176 = (state_27217[(25)]);
var inst_27180 = cljs.core.chunk_first.call(null,inst_27176);
var inst_27181 = cljs.core.chunk_rest.call(null,inst_27176);
var inst_27182 = cljs.core.count.call(null,inst_27180);
var inst_27157 = inst_27181;
var inst_27158 = inst_27180;
var inst_27159 = inst_27182;
var inst_27160 = (0);
var state_27217__$1 = (function (){var statearr_27252 = state_27217;
(statearr_27252[(9)] = inst_27160);

(statearr_27252[(10)] = inst_27158);

(statearr_27252[(20)] = inst_27159);

(statearr_27252[(21)] = inst_27157);

return statearr_27252;
})();
var statearr_27253_27322 = state_27217__$1;
(statearr_27253_27322[(2)] = null);

(statearr_27253_27322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (41))){
var inst_27176 = (state_27217[(25)]);
var inst_27192 = (state_27217[(2)]);
var inst_27193 = cljs.core.next.call(null,inst_27176);
var inst_27157 = inst_27193;
var inst_27158 = null;
var inst_27159 = (0);
var inst_27160 = (0);
var state_27217__$1 = (function (){var statearr_27254 = state_27217;
(statearr_27254[(27)] = inst_27192);

(statearr_27254[(9)] = inst_27160);

(statearr_27254[(10)] = inst_27158);

(statearr_27254[(20)] = inst_27159);

(statearr_27254[(21)] = inst_27157);

return statearr_27254;
})();
var statearr_27255_27323 = state_27217__$1;
(statearr_27255_27323[(2)] = null);

(statearr_27255_27323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (43))){
var state_27217__$1 = state_27217;
var statearr_27256_27324 = state_27217__$1;
(statearr_27256_27324[(2)] = null);

(statearr_27256_27324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (29))){
var inst_27201 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27257_27325 = state_27217__$1;
(statearr_27257_27325[(2)] = inst_27201);

(statearr_27257_27325[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (44))){
var inst_27210 = (state_27217[(2)]);
var state_27217__$1 = (function (){var statearr_27258 = state_27217;
(statearr_27258[(28)] = inst_27210);

return statearr_27258;
})();
var statearr_27259_27326 = state_27217__$1;
(statearr_27259_27326[(2)] = null);

(statearr_27259_27326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (6))){
var inst_27149 = (state_27217[(29)]);
var inst_27148 = cljs.core.deref.call(null,cs);
var inst_27149__$1 = cljs.core.keys.call(null,inst_27148);
var inst_27150 = cljs.core.count.call(null,inst_27149__$1);
var inst_27151 = cljs.core.reset_BANG_.call(null,dctr,inst_27150);
var inst_27156 = cljs.core.seq.call(null,inst_27149__$1);
var inst_27157 = inst_27156;
var inst_27158 = null;
var inst_27159 = (0);
var inst_27160 = (0);
var state_27217__$1 = (function (){var statearr_27260 = state_27217;
(statearr_27260[(9)] = inst_27160);

(statearr_27260[(30)] = inst_27151);

(statearr_27260[(29)] = inst_27149__$1);

(statearr_27260[(10)] = inst_27158);

(statearr_27260[(20)] = inst_27159);

(statearr_27260[(21)] = inst_27157);

return statearr_27260;
})();
var statearr_27261_27327 = state_27217__$1;
(statearr_27261_27327[(2)] = null);

(statearr_27261_27327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (28))){
var inst_27176 = (state_27217[(25)]);
var inst_27157 = (state_27217[(21)]);
var inst_27176__$1 = cljs.core.seq.call(null,inst_27157);
var state_27217__$1 = (function (){var statearr_27262 = state_27217;
(statearr_27262[(25)] = inst_27176__$1);

return statearr_27262;
})();
if(inst_27176__$1){
var statearr_27263_27328 = state_27217__$1;
(statearr_27263_27328[(1)] = (33));

} else {
var statearr_27264_27329 = state_27217__$1;
(statearr_27264_27329[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (25))){
var inst_27160 = (state_27217[(9)]);
var inst_27159 = (state_27217[(20)]);
var inst_27162 = (inst_27160 < inst_27159);
var inst_27163 = inst_27162;
var state_27217__$1 = state_27217;
if(cljs.core.truth_(inst_27163)){
var statearr_27265_27330 = state_27217__$1;
(statearr_27265_27330[(1)] = (27));

} else {
var statearr_27266_27331 = state_27217__$1;
(statearr_27266_27331[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (34))){
var state_27217__$1 = state_27217;
var statearr_27267_27332 = state_27217__$1;
(statearr_27267_27332[(2)] = null);

(statearr_27267_27332[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (17))){
var state_27217__$1 = state_27217;
var statearr_27268_27333 = state_27217__$1;
(statearr_27268_27333[(2)] = null);

(statearr_27268_27333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (3))){
var inst_27215 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27217__$1,inst_27215);
} else {
if((state_val_27218 === (12))){
var inst_27144 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27269_27334 = state_27217__$1;
(statearr_27269_27334[(2)] = inst_27144);

(statearr_27269_27334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (2))){
var state_27217__$1 = state_27217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27217__$1,(4),ch);
} else {
if((state_val_27218 === (23))){
var state_27217__$1 = state_27217;
var statearr_27270_27335 = state_27217__$1;
(statearr_27270_27335[(2)] = null);

(statearr_27270_27335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (35))){
var inst_27199 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27271_27336 = state_27217__$1;
(statearr_27271_27336[(2)] = inst_27199);

(statearr_27271_27336[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (19))){
var inst_27116 = (state_27217[(7)]);
var inst_27120 = cljs.core.chunk_first.call(null,inst_27116);
var inst_27121 = cljs.core.chunk_rest.call(null,inst_27116);
var inst_27122 = cljs.core.count.call(null,inst_27120);
var inst_27094 = inst_27121;
var inst_27095 = inst_27120;
var inst_27096 = inst_27122;
var inst_27097 = (0);
var state_27217__$1 = (function (){var statearr_27272 = state_27217;
(statearr_27272[(13)] = inst_27095);

(statearr_27272[(14)] = inst_27094);

(statearr_27272[(15)] = inst_27096);

(statearr_27272[(16)] = inst_27097);

return statearr_27272;
})();
var statearr_27273_27337 = state_27217__$1;
(statearr_27273_27337[(2)] = null);

(statearr_27273_27337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (11))){
var inst_27094 = (state_27217[(14)]);
var inst_27116 = (state_27217[(7)]);
var inst_27116__$1 = cljs.core.seq.call(null,inst_27094);
var state_27217__$1 = (function (){var statearr_27274 = state_27217;
(statearr_27274[(7)] = inst_27116__$1);

return statearr_27274;
})();
if(inst_27116__$1){
var statearr_27275_27338 = state_27217__$1;
(statearr_27275_27338[(1)] = (16));

} else {
var statearr_27276_27339 = state_27217__$1;
(statearr_27276_27339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (9))){
var inst_27146 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27277_27340 = state_27217__$1;
(statearr_27277_27340[(2)] = inst_27146);

(statearr_27277_27340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (5))){
var inst_27092 = cljs.core.deref.call(null,cs);
var inst_27093 = cljs.core.seq.call(null,inst_27092);
var inst_27094 = inst_27093;
var inst_27095 = null;
var inst_27096 = (0);
var inst_27097 = (0);
var state_27217__$1 = (function (){var statearr_27278 = state_27217;
(statearr_27278[(13)] = inst_27095);

(statearr_27278[(14)] = inst_27094);

(statearr_27278[(15)] = inst_27096);

(statearr_27278[(16)] = inst_27097);

return statearr_27278;
})();
var statearr_27279_27341 = state_27217__$1;
(statearr_27279_27341[(2)] = null);

(statearr_27279_27341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (14))){
var state_27217__$1 = state_27217;
var statearr_27280_27342 = state_27217__$1;
(statearr_27280_27342[(2)] = null);

(statearr_27280_27342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (45))){
var inst_27207 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27281_27343 = state_27217__$1;
(statearr_27281_27343[(2)] = inst_27207);

(statearr_27281_27343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (26))){
var inst_27149 = (state_27217[(29)]);
var inst_27203 = (state_27217[(2)]);
var inst_27204 = cljs.core.seq.call(null,inst_27149);
var state_27217__$1 = (function (){var statearr_27282 = state_27217;
(statearr_27282[(31)] = inst_27203);

return statearr_27282;
})();
if(inst_27204){
var statearr_27283_27344 = state_27217__$1;
(statearr_27283_27344[(1)] = (42));

} else {
var statearr_27284_27345 = state_27217__$1;
(statearr_27284_27345[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (16))){
var inst_27116 = (state_27217[(7)]);
var inst_27118 = cljs.core.chunked_seq_QMARK_.call(null,inst_27116);
var state_27217__$1 = state_27217;
if(inst_27118){
var statearr_27285_27346 = state_27217__$1;
(statearr_27285_27346[(1)] = (19));

} else {
var statearr_27286_27347 = state_27217__$1;
(statearr_27286_27347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (38))){
var inst_27196 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27287_27348 = state_27217__$1;
(statearr_27287_27348[(2)] = inst_27196);

(statearr_27287_27348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (30))){
var state_27217__$1 = state_27217;
var statearr_27288_27349 = state_27217__$1;
(statearr_27288_27349[(2)] = null);

(statearr_27288_27349[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (10))){
var inst_27095 = (state_27217[(13)]);
var inst_27097 = (state_27217[(16)]);
var inst_27105 = cljs.core._nth.call(null,inst_27095,inst_27097);
var inst_27106 = cljs.core.nth.call(null,inst_27105,(0),null);
var inst_27107 = cljs.core.nth.call(null,inst_27105,(1),null);
var state_27217__$1 = (function (){var statearr_27289 = state_27217;
(statearr_27289[(26)] = inst_27106);

return statearr_27289;
})();
if(cljs.core.truth_(inst_27107)){
var statearr_27290_27350 = state_27217__$1;
(statearr_27290_27350[(1)] = (13));

} else {
var statearr_27291_27351 = state_27217__$1;
(statearr_27291_27351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (18))){
var inst_27142 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27292_27352 = state_27217__$1;
(statearr_27292_27352[(2)] = inst_27142);

(statearr_27292_27352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (42))){
var state_27217__$1 = state_27217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27217__$1,(45),dchan);
} else {
if((state_val_27218 === (37))){
var inst_27185 = (state_27217[(23)]);
var inst_27176 = (state_27217[(25)]);
var inst_27085 = (state_27217[(12)]);
var inst_27185__$1 = cljs.core.first.call(null,inst_27176);
var inst_27186 = cljs.core.async.put_BANG_.call(null,inst_27185__$1,inst_27085,done);
var state_27217__$1 = (function (){var statearr_27293 = state_27217;
(statearr_27293[(23)] = inst_27185__$1);

return statearr_27293;
})();
if(cljs.core.truth_(inst_27186)){
var statearr_27294_27353 = state_27217__$1;
(statearr_27294_27353[(1)] = (39));

} else {
var statearr_27295_27354 = state_27217__$1;
(statearr_27295_27354[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (8))){
var inst_27096 = (state_27217[(15)]);
var inst_27097 = (state_27217[(16)]);
var inst_27099 = (inst_27097 < inst_27096);
var inst_27100 = inst_27099;
var state_27217__$1 = state_27217;
if(cljs.core.truth_(inst_27100)){
var statearr_27296_27355 = state_27217__$1;
(statearr_27296_27355[(1)] = (10));

} else {
var statearr_27297_27356 = state_27217__$1;
(statearr_27297_27356[(1)] = (11));

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
});})(c__26483__auto___27302,cs,m,dchan,dctr,done))
;
return ((function (switch__26460__auto__,c__26483__auto___27302,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26461__auto__ = null;
var cljs$core$async$mult_$_state_machine__26461__auto____0 = (function (){
var statearr_27298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27298[(0)] = cljs$core$async$mult_$_state_machine__26461__auto__);

(statearr_27298[(1)] = (1));

return statearr_27298;
});
var cljs$core$async$mult_$_state_machine__26461__auto____1 = (function (state_27217){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_27217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e27299){if((e27299 instanceof Object)){
var ex__26464__auto__ = e27299;
var statearr_27300_27357 = state_27217;
(statearr_27300_27357[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27358 = state_27217;
state_27217 = G__27358;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26461__auto__ = function(state_27217){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26461__auto____1.call(this,state_27217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26461__auto____0;
cljs$core$async$mult_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26461__auto____1;
return cljs$core$async$mult_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___27302,cs,m,dchan,dctr,done))
})();
var state__26485__auto__ = (function (){var statearr_27301 = f__26484__auto__.call(null);
(statearr_27301[(6)] = c__26483__auto___27302);

return statearr_27301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___27302,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27360 = arguments.length;
switch (G__27360) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27372 = arguments.length;
var i__4500__auto___27373 = (0);
while(true){
if((i__4500__auto___27373 < len__4499__auto___27372)){
args__4502__auto__.push((arguments[i__4500__auto___27373]));

var G__27374 = (i__4500__auto___27373 + (1));
i__4500__auto___27373 = G__27374;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27366){
var map__27367 = p__27366;
var map__27367__$1 = ((((!((map__27367 == null)))?(((((map__27367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27367):map__27367);
var opts = map__27367__$1;
var statearr_27369_27375 = state;
(statearr_27369_27375[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27367,map__27367__$1,opts){
return (function (val){
var statearr_27370_27376 = state;
(statearr_27370_27376[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27367,map__27367__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27371_27377 = state;
(statearr_27371_27377[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27362){
var G__27363 = cljs.core.first.call(null,seq27362);
var seq27362__$1 = cljs.core.next.call(null,seq27362);
var G__27364 = cljs.core.first.call(null,seq27362__$1);
var seq27362__$2 = cljs.core.next.call(null,seq27362__$1);
var G__27365 = cljs.core.first.call(null,seq27362__$2);
var seq27362__$3 = cljs.core.next.call(null,seq27362__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27363,G__27364,G__27365,seq27362__$3);
});

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
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27378 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27379){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27379 = meta27379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27380,meta27379__$1){
var self__ = this;
var _27380__$1 = this;
return (new cljs.core.async.t_cljs$core$async27378(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27379__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27380){
var self__ = this;
var _27380__$1 = this;
return self__.meta27379;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27379","meta27379",619746192,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27378";

cljs.core.async.t_cljs$core$async27378.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27378");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27378.
 */
cljs.core.async.__GT_t_cljs$core$async27378 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27378(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27379){
return (new cljs.core.async.t_cljs$core$async27378(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27379));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27378(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26483__auto___27542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___27542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___27542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27482){
var state_val_27483 = (state_27482[(1)]);
if((state_val_27483 === (7))){
var inst_27397 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27484_27543 = state_27482__$1;
(statearr_27484_27543[(2)] = inst_27397);

(statearr_27484_27543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (20))){
var inst_27409 = (state_27482[(7)]);
var state_27482__$1 = state_27482;
var statearr_27485_27544 = state_27482__$1;
(statearr_27485_27544[(2)] = inst_27409);

(statearr_27485_27544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (27))){
var state_27482__$1 = state_27482;
var statearr_27486_27545 = state_27482__$1;
(statearr_27486_27545[(2)] = null);

(statearr_27486_27545[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (1))){
var inst_27384 = (state_27482[(8)]);
var inst_27384__$1 = calc_state.call(null);
var inst_27386 = (inst_27384__$1 == null);
var inst_27387 = cljs.core.not.call(null,inst_27386);
var state_27482__$1 = (function (){var statearr_27487 = state_27482;
(statearr_27487[(8)] = inst_27384__$1);

return statearr_27487;
})();
if(inst_27387){
var statearr_27488_27546 = state_27482__$1;
(statearr_27488_27546[(1)] = (2));

} else {
var statearr_27489_27547 = state_27482__$1;
(statearr_27489_27547[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (24))){
var inst_27433 = (state_27482[(9)]);
var inst_27456 = (state_27482[(10)]);
var inst_27442 = (state_27482[(11)]);
var inst_27456__$1 = inst_27433.call(null,inst_27442);
var state_27482__$1 = (function (){var statearr_27490 = state_27482;
(statearr_27490[(10)] = inst_27456__$1);

return statearr_27490;
})();
if(cljs.core.truth_(inst_27456__$1)){
var statearr_27491_27548 = state_27482__$1;
(statearr_27491_27548[(1)] = (29));

} else {
var statearr_27492_27549 = state_27482__$1;
(statearr_27492_27549[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (4))){
var inst_27400 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27400)){
var statearr_27493_27550 = state_27482__$1;
(statearr_27493_27550[(1)] = (8));

} else {
var statearr_27494_27551 = state_27482__$1;
(statearr_27494_27551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (15))){
var inst_27427 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27427)){
var statearr_27495_27552 = state_27482__$1;
(statearr_27495_27552[(1)] = (19));

} else {
var statearr_27496_27553 = state_27482__$1;
(statearr_27496_27553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (21))){
var inst_27432 = (state_27482[(12)]);
var inst_27432__$1 = (state_27482[(2)]);
var inst_27433 = cljs.core.get.call(null,inst_27432__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27434 = cljs.core.get.call(null,inst_27432__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27435 = cljs.core.get.call(null,inst_27432__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27482__$1 = (function (){var statearr_27497 = state_27482;
(statearr_27497[(9)] = inst_27433);

(statearr_27497[(12)] = inst_27432__$1);

(statearr_27497[(13)] = inst_27434);

return statearr_27497;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27482__$1,(22),inst_27435);
} else {
if((state_val_27483 === (31))){
var inst_27464 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27464)){
var statearr_27498_27554 = state_27482__$1;
(statearr_27498_27554[(1)] = (32));

} else {
var statearr_27499_27555 = state_27482__$1;
(statearr_27499_27555[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (32))){
var inst_27441 = (state_27482[(14)]);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27482__$1,(35),out,inst_27441);
} else {
if((state_val_27483 === (33))){
var inst_27432 = (state_27482[(12)]);
var inst_27409 = inst_27432;
var state_27482__$1 = (function (){var statearr_27500 = state_27482;
(statearr_27500[(7)] = inst_27409);

return statearr_27500;
})();
var statearr_27501_27556 = state_27482__$1;
(statearr_27501_27556[(2)] = null);

(statearr_27501_27556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (13))){
var inst_27409 = (state_27482[(7)]);
var inst_27416 = inst_27409.cljs$lang$protocol_mask$partition0$;
var inst_27417 = (inst_27416 & (64));
var inst_27418 = inst_27409.cljs$core$ISeq$;
var inst_27419 = (cljs.core.PROTOCOL_SENTINEL === inst_27418);
var inst_27420 = ((inst_27417) || (inst_27419));
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27420)){
var statearr_27502_27557 = state_27482__$1;
(statearr_27502_27557[(1)] = (16));

} else {
var statearr_27503_27558 = state_27482__$1;
(statearr_27503_27558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (22))){
var inst_27441 = (state_27482[(14)]);
var inst_27442 = (state_27482[(11)]);
var inst_27440 = (state_27482[(2)]);
var inst_27441__$1 = cljs.core.nth.call(null,inst_27440,(0),null);
var inst_27442__$1 = cljs.core.nth.call(null,inst_27440,(1),null);
var inst_27443 = (inst_27441__$1 == null);
var inst_27444 = cljs.core._EQ_.call(null,inst_27442__$1,change);
var inst_27445 = ((inst_27443) || (inst_27444));
var state_27482__$1 = (function (){var statearr_27504 = state_27482;
(statearr_27504[(14)] = inst_27441__$1);

(statearr_27504[(11)] = inst_27442__$1);

return statearr_27504;
})();
if(cljs.core.truth_(inst_27445)){
var statearr_27505_27559 = state_27482__$1;
(statearr_27505_27559[(1)] = (23));

} else {
var statearr_27506_27560 = state_27482__$1;
(statearr_27506_27560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (36))){
var inst_27432 = (state_27482[(12)]);
var inst_27409 = inst_27432;
var state_27482__$1 = (function (){var statearr_27507 = state_27482;
(statearr_27507[(7)] = inst_27409);

return statearr_27507;
})();
var statearr_27508_27561 = state_27482__$1;
(statearr_27508_27561[(2)] = null);

(statearr_27508_27561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (29))){
var inst_27456 = (state_27482[(10)]);
var state_27482__$1 = state_27482;
var statearr_27509_27562 = state_27482__$1;
(statearr_27509_27562[(2)] = inst_27456);

(statearr_27509_27562[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (6))){
var state_27482__$1 = state_27482;
var statearr_27510_27563 = state_27482__$1;
(statearr_27510_27563[(2)] = false);

(statearr_27510_27563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (28))){
var inst_27452 = (state_27482[(2)]);
var inst_27453 = calc_state.call(null);
var inst_27409 = inst_27453;
var state_27482__$1 = (function (){var statearr_27511 = state_27482;
(statearr_27511[(15)] = inst_27452);

(statearr_27511[(7)] = inst_27409);

return statearr_27511;
})();
var statearr_27512_27564 = state_27482__$1;
(statearr_27512_27564[(2)] = null);

(statearr_27512_27564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (25))){
var inst_27478 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27513_27565 = state_27482__$1;
(statearr_27513_27565[(2)] = inst_27478);

(statearr_27513_27565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (34))){
var inst_27476 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27514_27566 = state_27482__$1;
(statearr_27514_27566[(2)] = inst_27476);

(statearr_27514_27566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (17))){
var state_27482__$1 = state_27482;
var statearr_27515_27567 = state_27482__$1;
(statearr_27515_27567[(2)] = false);

(statearr_27515_27567[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (3))){
var state_27482__$1 = state_27482;
var statearr_27516_27568 = state_27482__$1;
(statearr_27516_27568[(2)] = false);

(statearr_27516_27568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (12))){
var inst_27480 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27482__$1,inst_27480);
} else {
if((state_val_27483 === (2))){
var inst_27384 = (state_27482[(8)]);
var inst_27389 = inst_27384.cljs$lang$protocol_mask$partition0$;
var inst_27390 = (inst_27389 & (64));
var inst_27391 = inst_27384.cljs$core$ISeq$;
var inst_27392 = (cljs.core.PROTOCOL_SENTINEL === inst_27391);
var inst_27393 = ((inst_27390) || (inst_27392));
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27393)){
var statearr_27517_27569 = state_27482__$1;
(statearr_27517_27569[(1)] = (5));

} else {
var statearr_27518_27570 = state_27482__$1;
(statearr_27518_27570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (23))){
var inst_27441 = (state_27482[(14)]);
var inst_27447 = (inst_27441 == null);
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27447)){
var statearr_27519_27571 = state_27482__$1;
(statearr_27519_27571[(1)] = (26));

} else {
var statearr_27520_27572 = state_27482__$1;
(statearr_27520_27572[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (35))){
var inst_27467 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27467)){
var statearr_27521_27573 = state_27482__$1;
(statearr_27521_27573[(1)] = (36));

} else {
var statearr_27522_27574 = state_27482__$1;
(statearr_27522_27574[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (19))){
var inst_27409 = (state_27482[(7)]);
var inst_27429 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27409);
var state_27482__$1 = state_27482;
var statearr_27523_27575 = state_27482__$1;
(statearr_27523_27575[(2)] = inst_27429);

(statearr_27523_27575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (11))){
var inst_27409 = (state_27482[(7)]);
var inst_27413 = (inst_27409 == null);
var inst_27414 = cljs.core.not.call(null,inst_27413);
var state_27482__$1 = state_27482;
if(inst_27414){
var statearr_27524_27576 = state_27482__$1;
(statearr_27524_27576[(1)] = (13));

} else {
var statearr_27525_27577 = state_27482__$1;
(statearr_27525_27577[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (9))){
var inst_27384 = (state_27482[(8)]);
var state_27482__$1 = state_27482;
var statearr_27526_27578 = state_27482__$1;
(statearr_27526_27578[(2)] = inst_27384);

(statearr_27526_27578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (5))){
var state_27482__$1 = state_27482;
var statearr_27527_27579 = state_27482__$1;
(statearr_27527_27579[(2)] = true);

(statearr_27527_27579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (14))){
var state_27482__$1 = state_27482;
var statearr_27528_27580 = state_27482__$1;
(statearr_27528_27580[(2)] = false);

(statearr_27528_27580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (26))){
var inst_27442 = (state_27482[(11)]);
var inst_27449 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27442);
var state_27482__$1 = state_27482;
var statearr_27529_27581 = state_27482__$1;
(statearr_27529_27581[(2)] = inst_27449);

(statearr_27529_27581[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (16))){
var state_27482__$1 = state_27482;
var statearr_27530_27582 = state_27482__$1;
(statearr_27530_27582[(2)] = true);

(statearr_27530_27582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (38))){
var inst_27472 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27531_27583 = state_27482__$1;
(statearr_27531_27583[(2)] = inst_27472);

(statearr_27531_27583[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (30))){
var inst_27433 = (state_27482[(9)]);
var inst_27434 = (state_27482[(13)]);
var inst_27442 = (state_27482[(11)]);
var inst_27459 = cljs.core.empty_QMARK_.call(null,inst_27433);
var inst_27460 = inst_27434.call(null,inst_27442);
var inst_27461 = cljs.core.not.call(null,inst_27460);
var inst_27462 = ((inst_27459) && (inst_27461));
var state_27482__$1 = state_27482;
var statearr_27532_27584 = state_27482__$1;
(statearr_27532_27584[(2)] = inst_27462);

(statearr_27532_27584[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (10))){
var inst_27384 = (state_27482[(8)]);
var inst_27405 = (state_27482[(2)]);
var inst_27406 = cljs.core.get.call(null,inst_27405,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27407 = cljs.core.get.call(null,inst_27405,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27408 = cljs.core.get.call(null,inst_27405,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27409 = inst_27384;
var state_27482__$1 = (function (){var statearr_27533 = state_27482;
(statearr_27533[(16)] = inst_27408);

(statearr_27533[(17)] = inst_27407);

(statearr_27533[(7)] = inst_27409);

(statearr_27533[(18)] = inst_27406);

return statearr_27533;
})();
var statearr_27534_27585 = state_27482__$1;
(statearr_27534_27585[(2)] = null);

(statearr_27534_27585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (18))){
var inst_27424 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27535_27586 = state_27482__$1;
(statearr_27535_27586[(2)] = inst_27424);

(statearr_27535_27586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (37))){
var state_27482__$1 = state_27482;
var statearr_27536_27587 = state_27482__$1;
(statearr_27536_27587[(2)] = null);

(statearr_27536_27587[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (8))){
var inst_27384 = (state_27482[(8)]);
var inst_27402 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27384);
var state_27482__$1 = state_27482;
var statearr_27537_27588 = state_27482__$1;
(statearr_27537_27588[(2)] = inst_27402);

(statearr_27537_27588[(1)] = (10));


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
});})(c__26483__auto___27542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26460__auto__,c__26483__auto___27542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26461__auto__ = null;
var cljs$core$async$mix_$_state_machine__26461__auto____0 = (function (){
var statearr_27538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27538[(0)] = cljs$core$async$mix_$_state_machine__26461__auto__);

(statearr_27538[(1)] = (1));

return statearr_27538;
});
var cljs$core$async$mix_$_state_machine__26461__auto____1 = (function (state_27482){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_27482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e27539){if((e27539 instanceof Object)){
var ex__26464__auto__ = e27539;
var statearr_27540_27589 = state_27482;
(statearr_27540_27589[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27590 = state_27482;
state_27482 = G__27590;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26461__auto__ = function(state_27482){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26461__auto____1.call(this,state_27482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26461__auto____0;
cljs$core$async$mix_$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26461__auto____1;
return cljs$core$async$mix_$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___27542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26485__auto__ = (function (){var statearr_27541 = f__26484__auto__.call(null);
(statearr_27541[(6)] = c__26483__auto___27542);

return statearr_27541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___27542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27592 = arguments.length;
switch (G__27592) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__27596 = arguments.length;
switch (G__27596) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__27594_SHARP_){
if(cljs.core.truth_(p1__27594_SHARP_.call(null,topic))){
return p1__27594_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27594_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27597 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27598){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27598 = meta27598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27599,meta27598__$1){
var self__ = this;
var _27599__$1 = this;
return (new cljs.core.async.t_cljs$core$async27597(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27598__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27599){
var self__ = this;
var _27599__$1 = this;
return self__.meta27598;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27597.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27597.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27598","meta27598",1009995458,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27597";

cljs.core.async.t_cljs$core$async27597.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27597");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27597.
 */
cljs.core.async.__GT_t_cljs$core$async27597 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27597(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27598){
return (new cljs.core.async.t_cljs$core$async27597(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27598));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27597(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26483__auto___27717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___27717,mults,ensure_mult,p){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___27717,mults,ensure_mult,p){
return (function (state_27671){
var state_val_27672 = (state_27671[(1)]);
if((state_val_27672 === (7))){
var inst_27667 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27673_27718 = state_27671__$1;
(statearr_27673_27718[(2)] = inst_27667);

(statearr_27673_27718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (20))){
var state_27671__$1 = state_27671;
var statearr_27674_27719 = state_27671__$1;
(statearr_27674_27719[(2)] = null);

(statearr_27674_27719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (1))){
var state_27671__$1 = state_27671;
var statearr_27675_27720 = state_27671__$1;
(statearr_27675_27720[(2)] = null);

(statearr_27675_27720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (24))){
var inst_27650 = (state_27671[(7)]);
var inst_27659 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27650);
var state_27671__$1 = state_27671;
var statearr_27676_27721 = state_27671__$1;
(statearr_27676_27721[(2)] = inst_27659);

(statearr_27676_27721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (4))){
var inst_27602 = (state_27671[(8)]);
var inst_27602__$1 = (state_27671[(2)]);
var inst_27603 = (inst_27602__$1 == null);
var state_27671__$1 = (function (){var statearr_27677 = state_27671;
(statearr_27677[(8)] = inst_27602__$1);

return statearr_27677;
})();
if(cljs.core.truth_(inst_27603)){
var statearr_27678_27722 = state_27671__$1;
(statearr_27678_27722[(1)] = (5));

} else {
var statearr_27679_27723 = state_27671__$1;
(statearr_27679_27723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (15))){
var inst_27644 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27680_27724 = state_27671__$1;
(statearr_27680_27724[(2)] = inst_27644);

(statearr_27680_27724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (21))){
var inst_27664 = (state_27671[(2)]);
var state_27671__$1 = (function (){var statearr_27681 = state_27671;
(statearr_27681[(9)] = inst_27664);

return statearr_27681;
})();
var statearr_27682_27725 = state_27671__$1;
(statearr_27682_27725[(2)] = null);

(statearr_27682_27725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (13))){
var inst_27626 = (state_27671[(10)]);
var inst_27628 = cljs.core.chunked_seq_QMARK_.call(null,inst_27626);
var state_27671__$1 = state_27671;
if(inst_27628){
var statearr_27683_27726 = state_27671__$1;
(statearr_27683_27726[(1)] = (16));

} else {
var statearr_27684_27727 = state_27671__$1;
(statearr_27684_27727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (22))){
var inst_27656 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27656)){
var statearr_27685_27728 = state_27671__$1;
(statearr_27685_27728[(1)] = (23));

} else {
var statearr_27686_27729 = state_27671__$1;
(statearr_27686_27729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (6))){
var inst_27652 = (state_27671[(11)]);
var inst_27602 = (state_27671[(8)]);
var inst_27650 = (state_27671[(7)]);
var inst_27650__$1 = topic_fn.call(null,inst_27602);
var inst_27651 = cljs.core.deref.call(null,mults);
var inst_27652__$1 = cljs.core.get.call(null,inst_27651,inst_27650__$1);
var state_27671__$1 = (function (){var statearr_27687 = state_27671;
(statearr_27687[(11)] = inst_27652__$1);

(statearr_27687[(7)] = inst_27650__$1);

return statearr_27687;
})();
if(cljs.core.truth_(inst_27652__$1)){
var statearr_27688_27730 = state_27671__$1;
(statearr_27688_27730[(1)] = (19));

} else {
var statearr_27689_27731 = state_27671__$1;
(statearr_27689_27731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (25))){
var inst_27661 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27690_27732 = state_27671__$1;
(statearr_27690_27732[(2)] = inst_27661);

(statearr_27690_27732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (17))){
var inst_27626 = (state_27671[(10)]);
var inst_27635 = cljs.core.first.call(null,inst_27626);
var inst_27636 = cljs.core.async.muxch_STAR_.call(null,inst_27635);
var inst_27637 = cljs.core.async.close_BANG_.call(null,inst_27636);
var inst_27638 = cljs.core.next.call(null,inst_27626);
var inst_27612 = inst_27638;
var inst_27613 = null;
var inst_27614 = (0);
var inst_27615 = (0);
var state_27671__$1 = (function (){var statearr_27691 = state_27671;
(statearr_27691[(12)] = inst_27612);

(statearr_27691[(13)] = inst_27613);

(statearr_27691[(14)] = inst_27615);

(statearr_27691[(15)] = inst_27614);

(statearr_27691[(16)] = inst_27637);

return statearr_27691;
})();
var statearr_27692_27733 = state_27671__$1;
(statearr_27692_27733[(2)] = null);

(statearr_27692_27733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (3))){
var inst_27669 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27671__$1,inst_27669);
} else {
if((state_val_27672 === (12))){
var inst_27646 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27693_27734 = state_27671__$1;
(statearr_27693_27734[(2)] = inst_27646);

(statearr_27693_27734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (2))){
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(4),ch);
} else {
if((state_val_27672 === (23))){
var state_27671__$1 = state_27671;
var statearr_27694_27735 = state_27671__$1;
(statearr_27694_27735[(2)] = null);

(statearr_27694_27735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (19))){
var inst_27652 = (state_27671[(11)]);
var inst_27602 = (state_27671[(8)]);
var inst_27654 = cljs.core.async.muxch_STAR_.call(null,inst_27652);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27671__$1,(22),inst_27654,inst_27602);
} else {
if((state_val_27672 === (11))){
var inst_27612 = (state_27671[(12)]);
var inst_27626 = (state_27671[(10)]);
var inst_27626__$1 = cljs.core.seq.call(null,inst_27612);
var state_27671__$1 = (function (){var statearr_27695 = state_27671;
(statearr_27695[(10)] = inst_27626__$1);

return statearr_27695;
})();
if(inst_27626__$1){
var statearr_27696_27736 = state_27671__$1;
(statearr_27696_27736[(1)] = (13));

} else {
var statearr_27697_27737 = state_27671__$1;
(statearr_27697_27737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (9))){
var inst_27648 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27698_27738 = state_27671__$1;
(statearr_27698_27738[(2)] = inst_27648);

(statearr_27698_27738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (5))){
var inst_27609 = cljs.core.deref.call(null,mults);
var inst_27610 = cljs.core.vals.call(null,inst_27609);
var inst_27611 = cljs.core.seq.call(null,inst_27610);
var inst_27612 = inst_27611;
var inst_27613 = null;
var inst_27614 = (0);
var inst_27615 = (0);
var state_27671__$1 = (function (){var statearr_27699 = state_27671;
(statearr_27699[(12)] = inst_27612);

(statearr_27699[(13)] = inst_27613);

(statearr_27699[(14)] = inst_27615);

(statearr_27699[(15)] = inst_27614);

return statearr_27699;
})();
var statearr_27700_27739 = state_27671__$1;
(statearr_27700_27739[(2)] = null);

(statearr_27700_27739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (14))){
var state_27671__$1 = state_27671;
var statearr_27704_27740 = state_27671__$1;
(statearr_27704_27740[(2)] = null);

(statearr_27704_27740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (16))){
var inst_27626 = (state_27671[(10)]);
var inst_27630 = cljs.core.chunk_first.call(null,inst_27626);
var inst_27631 = cljs.core.chunk_rest.call(null,inst_27626);
var inst_27632 = cljs.core.count.call(null,inst_27630);
var inst_27612 = inst_27631;
var inst_27613 = inst_27630;
var inst_27614 = inst_27632;
var inst_27615 = (0);
var state_27671__$1 = (function (){var statearr_27705 = state_27671;
(statearr_27705[(12)] = inst_27612);

(statearr_27705[(13)] = inst_27613);

(statearr_27705[(14)] = inst_27615);

(statearr_27705[(15)] = inst_27614);

return statearr_27705;
})();
var statearr_27706_27741 = state_27671__$1;
(statearr_27706_27741[(2)] = null);

(statearr_27706_27741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (10))){
var inst_27612 = (state_27671[(12)]);
var inst_27613 = (state_27671[(13)]);
var inst_27615 = (state_27671[(14)]);
var inst_27614 = (state_27671[(15)]);
var inst_27620 = cljs.core._nth.call(null,inst_27613,inst_27615);
var inst_27621 = cljs.core.async.muxch_STAR_.call(null,inst_27620);
var inst_27622 = cljs.core.async.close_BANG_.call(null,inst_27621);
var inst_27623 = (inst_27615 + (1));
var tmp27701 = inst_27612;
var tmp27702 = inst_27613;
var tmp27703 = inst_27614;
var inst_27612__$1 = tmp27701;
var inst_27613__$1 = tmp27702;
var inst_27614__$1 = tmp27703;
var inst_27615__$1 = inst_27623;
var state_27671__$1 = (function (){var statearr_27707 = state_27671;
(statearr_27707[(12)] = inst_27612__$1);

(statearr_27707[(17)] = inst_27622);

(statearr_27707[(13)] = inst_27613__$1);

(statearr_27707[(14)] = inst_27615__$1);

(statearr_27707[(15)] = inst_27614__$1);

return statearr_27707;
})();
var statearr_27708_27742 = state_27671__$1;
(statearr_27708_27742[(2)] = null);

(statearr_27708_27742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (18))){
var inst_27641 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27709_27743 = state_27671__$1;
(statearr_27709_27743[(2)] = inst_27641);

(statearr_27709_27743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (8))){
var inst_27615 = (state_27671[(14)]);
var inst_27614 = (state_27671[(15)]);
var inst_27617 = (inst_27615 < inst_27614);
var inst_27618 = inst_27617;
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27618)){
var statearr_27710_27744 = state_27671__$1;
(statearr_27710_27744[(1)] = (10));

} else {
var statearr_27711_27745 = state_27671__$1;
(statearr_27711_27745[(1)] = (11));

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
});})(c__26483__auto___27717,mults,ensure_mult,p))
;
return ((function (switch__26460__auto__,c__26483__auto___27717,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_27712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27712[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_27712[(1)] = (1));

return statearr_27712;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_27671){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_27671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e27713){if((e27713 instanceof Object)){
var ex__26464__auto__ = e27713;
var statearr_27714_27746 = state_27671;
(statearr_27714_27746[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27747 = state_27671;
state_27671 = G__27747;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_27671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_27671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___27717,mults,ensure_mult,p))
})();
var state__26485__auto__ = (function (){var statearr_27715 = f__26484__auto__.call(null);
(statearr_27715[(6)] = c__26483__auto___27717);

return statearr_27715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___27717,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27749 = arguments.length;
switch (G__27749) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__27752 = arguments.length;
switch (G__27752) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__27755 = arguments.length;
switch (G__27755) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26483__auto___27822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___27822,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___27822,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27794){
var state_val_27795 = (state_27794[(1)]);
if((state_val_27795 === (7))){
var state_27794__$1 = state_27794;
var statearr_27796_27823 = state_27794__$1;
(statearr_27796_27823[(2)] = null);

(statearr_27796_27823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (1))){
var state_27794__$1 = state_27794;
var statearr_27797_27824 = state_27794__$1;
(statearr_27797_27824[(2)] = null);

(statearr_27797_27824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (4))){
var inst_27758 = (state_27794[(7)]);
var inst_27760 = (inst_27758 < cnt);
var state_27794__$1 = state_27794;
if(cljs.core.truth_(inst_27760)){
var statearr_27798_27825 = state_27794__$1;
(statearr_27798_27825[(1)] = (6));

} else {
var statearr_27799_27826 = state_27794__$1;
(statearr_27799_27826[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (15))){
var inst_27790 = (state_27794[(2)]);
var state_27794__$1 = state_27794;
var statearr_27800_27827 = state_27794__$1;
(statearr_27800_27827[(2)] = inst_27790);

(statearr_27800_27827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (13))){
var inst_27783 = cljs.core.async.close_BANG_.call(null,out);
var state_27794__$1 = state_27794;
var statearr_27801_27828 = state_27794__$1;
(statearr_27801_27828[(2)] = inst_27783);

(statearr_27801_27828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (6))){
var state_27794__$1 = state_27794;
var statearr_27802_27829 = state_27794__$1;
(statearr_27802_27829[(2)] = null);

(statearr_27802_27829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (3))){
var inst_27792 = (state_27794[(2)]);
var state_27794__$1 = state_27794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27794__$1,inst_27792);
} else {
if((state_val_27795 === (12))){
var inst_27780 = (state_27794[(8)]);
var inst_27780__$1 = (state_27794[(2)]);
var inst_27781 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27780__$1);
var state_27794__$1 = (function (){var statearr_27803 = state_27794;
(statearr_27803[(8)] = inst_27780__$1);

return statearr_27803;
})();
if(cljs.core.truth_(inst_27781)){
var statearr_27804_27830 = state_27794__$1;
(statearr_27804_27830[(1)] = (13));

} else {
var statearr_27805_27831 = state_27794__$1;
(statearr_27805_27831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (2))){
var inst_27757 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27758 = (0);
var state_27794__$1 = (function (){var statearr_27806 = state_27794;
(statearr_27806[(9)] = inst_27757);

(statearr_27806[(7)] = inst_27758);

return statearr_27806;
})();
var statearr_27807_27832 = state_27794__$1;
(statearr_27807_27832[(2)] = null);

(statearr_27807_27832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (11))){
var inst_27758 = (state_27794[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27794,(10),Object,null,(9));
var inst_27767 = chs__$1.call(null,inst_27758);
var inst_27768 = done.call(null,inst_27758);
var inst_27769 = cljs.core.async.take_BANG_.call(null,inst_27767,inst_27768);
var state_27794__$1 = state_27794;
var statearr_27808_27833 = state_27794__$1;
(statearr_27808_27833[(2)] = inst_27769);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (9))){
var inst_27758 = (state_27794[(7)]);
var inst_27771 = (state_27794[(2)]);
var inst_27772 = (inst_27758 + (1));
var inst_27758__$1 = inst_27772;
var state_27794__$1 = (function (){var statearr_27809 = state_27794;
(statearr_27809[(10)] = inst_27771);

(statearr_27809[(7)] = inst_27758__$1);

return statearr_27809;
})();
var statearr_27810_27834 = state_27794__$1;
(statearr_27810_27834[(2)] = null);

(statearr_27810_27834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (5))){
var inst_27778 = (state_27794[(2)]);
var state_27794__$1 = (function (){var statearr_27811 = state_27794;
(statearr_27811[(11)] = inst_27778);

return statearr_27811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27794__$1,(12),dchan);
} else {
if((state_val_27795 === (14))){
var inst_27780 = (state_27794[(8)]);
var inst_27785 = cljs.core.apply.call(null,f,inst_27780);
var state_27794__$1 = state_27794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27794__$1,(16),out,inst_27785);
} else {
if((state_val_27795 === (16))){
var inst_27787 = (state_27794[(2)]);
var state_27794__$1 = (function (){var statearr_27812 = state_27794;
(statearr_27812[(12)] = inst_27787);

return statearr_27812;
})();
var statearr_27813_27835 = state_27794__$1;
(statearr_27813_27835[(2)] = null);

(statearr_27813_27835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (10))){
var inst_27762 = (state_27794[(2)]);
var inst_27763 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27794__$1 = (function (){var statearr_27814 = state_27794;
(statearr_27814[(13)] = inst_27762);

return statearr_27814;
})();
var statearr_27815_27836 = state_27794__$1;
(statearr_27815_27836[(2)] = inst_27763);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (8))){
var inst_27776 = (state_27794[(2)]);
var state_27794__$1 = state_27794;
var statearr_27816_27837 = state_27794__$1;
(statearr_27816_27837[(2)] = inst_27776);

(statearr_27816_27837[(1)] = (5));


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
});})(c__26483__auto___27822,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26460__auto__,c__26483__auto___27822,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_27817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27817[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_27817[(1)] = (1));

return statearr_27817;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_27794){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_27794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e27818){if((e27818 instanceof Object)){
var ex__26464__auto__ = e27818;
var statearr_27819_27838 = state_27794;
(statearr_27819_27838[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27839 = state_27794;
state_27794 = G__27839;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_27794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_27794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___27822,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26485__auto__ = (function (){var statearr_27820 = f__26484__auto__.call(null);
(statearr_27820[(6)] = c__26483__auto___27822);

return statearr_27820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___27822,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27842 = arguments.length;
switch (G__27842) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26483__auto___27896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___27896,out){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___27896,out){
return (function (state_27874){
var state_val_27875 = (state_27874[(1)]);
if((state_val_27875 === (7))){
var inst_27853 = (state_27874[(7)]);
var inst_27854 = (state_27874[(8)]);
var inst_27853__$1 = (state_27874[(2)]);
var inst_27854__$1 = cljs.core.nth.call(null,inst_27853__$1,(0),null);
var inst_27855 = cljs.core.nth.call(null,inst_27853__$1,(1),null);
var inst_27856 = (inst_27854__$1 == null);
var state_27874__$1 = (function (){var statearr_27876 = state_27874;
(statearr_27876[(7)] = inst_27853__$1);

(statearr_27876[(8)] = inst_27854__$1);

(statearr_27876[(9)] = inst_27855);

return statearr_27876;
})();
if(cljs.core.truth_(inst_27856)){
var statearr_27877_27897 = state_27874__$1;
(statearr_27877_27897[(1)] = (8));

} else {
var statearr_27878_27898 = state_27874__$1;
(statearr_27878_27898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (1))){
var inst_27843 = cljs.core.vec.call(null,chs);
var inst_27844 = inst_27843;
var state_27874__$1 = (function (){var statearr_27879 = state_27874;
(statearr_27879[(10)] = inst_27844);

return statearr_27879;
})();
var statearr_27880_27899 = state_27874__$1;
(statearr_27880_27899[(2)] = null);

(statearr_27880_27899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (4))){
var inst_27844 = (state_27874[(10)]);
var state_27874__$1 = state_27874;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27874__$1,(7),inst_27844);
} else {
if((state_val_27875 === (6))){
var inst_27870 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27881_27900 = state_27874__$1;
(statearr_27881_27900[(2)] = inst_27870);

(statearr_27881_27900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (3))){
var inst_27872 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27874__$1,inst_27872);
} else {
if((state_val_27875 === (2))){
var inst_27844 = (state_27874[(10)]);
var inst_27846 = cljs.core.count.call(null,inst_27844);
var inst_27847 = (inst_27846 > (0));
var state_27874__$1 = state_27874;
if(cljs.core.truth_(inst_27847)){
var statearr_27883_27901 = state_27874__$1;
(statearr_27883_27901[(1)] = (4));

} else {
var statearr_27884_27902 = state_27874__$1;
(statearr_27884_27902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (11))){
var inst_27844 = (state_27874[(10)]);
var inst_27863 = (state_27874[(2)]);
var tmp27882 = inst_27844;
var inst_27844__$1 = tmp27882;
var state_27874__$1 = (function (){var statearr_27885 = state_27874;
(statearr_27885[(10)] = inst_27844__$1);

(statearr_27885[(11)] = inst_27863);

return statearr_27885;
})();
var statearr_27886_27903 = state_27874__$1;
(statearr_27886_27903[(2)] = null);

(statearr_27886_27903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (9))){
var inst_27854 = (state_27874[(8)]);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27874__$1,(11),out,inst_27854);
} else {
if((state_val_27875 === (5))){
var inst_27868 = cljs.core.async.close_BANG_.call(null,out);
var state_27874__$1 = state_27874;
var statearr_27887_27904 = state_27874__$1;
(statearr_27887_27904[(2)] = inst_27868);

(statearr_27887_27904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (10))){
var inst_27866 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27888_27905 = state_27874__$1;
(statearr_27888_27905[(2)] = inst_27866);

(statearr_27888_27905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (8))){
var inst_27844 = (state_27874[(10)]);
var inst_27853 = (state_27874[(7)]);
var inst_27854 = (state_27874[(8)]);
var inst_27855 = (state_27874[(9)]);
var inst_27858 = (function (){var cs = inst_27844;
var vec__27849 = inst_27853;
var v = inst_27854;
var c = inst_27855;
return ((function (cs,vec__27849,v,c,inst_27844,inst_27853,inst_27854,inst_27855,state_val_27875,c__26483__auto___27896,out){
return (function (p1__27840_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27840_SHARP_);
});
;})(cs,vec__27849,v,c,inst_27844,inst_27853,inst_27854,inst_27855,state_val_27875,c__26483__auto___27896,out))
})();
var inst_27859 = cljs.core.filterv.call(null,inst_27858,inst_27844);
var inst_27844__$1 = inst_27859;
var state_27874__$1 = (function (){var statearr_27889 = state_27874;
(statearr_27889[(10)] = inst_27844__$1);

return statearr_27889;
})();
var statearr_27890_27906 = state_27874__$1;
(statearr_27890_27906[(2)] = null);

(statearr_27890_27906[(1)] = (2));


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
});})(c__26483__auto___27896,out))
;
return ((function (switch__26460__auto__,c__26483__auto___27896,out){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_27891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27891[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_27891[(1)] = (1));

return statearr_27891;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_27874){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_27874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e27892){if((e27892 instanceof Object)){
var ex__26464__auto__ = e27892;
var statearr_27893_27907 = state_27874;
(statearr_27893_27907[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27908 = state_27874;
state_27874 = G__27908;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_27874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_27874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___27896,out))
})();
var state__26485__auto__ = (function (){var statearr_27894 = f__26484__auto__.call(null);
(statearr_27894[(6)] = c__26483__auto___27896);

return statearr_27894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___27896,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__27910 = arguments.length;
switch (G__27910) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26483__auto___27955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___27955,out){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___27955,out){
return (function (state_27934){
var state_val_27935 = (state_27934[(1)]);
if((state_val_27935 === (7))){
var inst_27916 = (state_27934[(7)]);
var inst_27916__$1 = (state_27934[(2)]);
var inst_27917 = (inst_27916__$1 == null);
var inst_27918 = cljs.core.not.call(null,inst_27917);
var state_27934__$1 = (function (){var statearr_27936 = state_27934;
(statearr_27936[(7)] = inst_27916__$1);

return statearr_27936;
})();
if(inst_27918){
var statearr_27937_27956 = state_27934__$1;
(statearr_27937_27956[(1)] = (8));

} else {
var statearr_27938_27957 = state_27934__$1;
(statearr_27938_27957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (1))){
var inst_27911 = (0);
var state_27934__$1 = (function (){var statearr_27939 = state_27934;
(statearr_27939[(8)] = inst_27911);

return statearr_27939;
})();
var statearr_27940_27958 = state_27934__$1;
(statearr_27940_27958[(2)] = null);

(statearr_27940_27958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (4))){
var state_27934__$1 = state_27934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27934__$1,(7),ch);
} else {
if((state_val_27935 === (6))){
var inst_27929 = (state_27934[(2)]);
var state_27934__$1 = state_27934;
var statearr_27941_27959 = state_27934__$1;
(statearr_27941_27959[(2)] = inst_27929);

(statearr_27941_27959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (3))){
var inst_27931 = (state_27934[(2)]);
var inst_27932 = cljs.core.async.close_BANG_.call(null,out);
var state_27934__$1 = (function (){var statearr_27942 = state_27934;
(statearr_27942[(9)] = inst_27931);

return statearr_27942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27934__$1,inst_27932);
} else {
if((state_val_27935 === (2))){
var inst_27911 = (state_27934[(8)]);
var inst_27913 = (inst_27911 < n);
var state_27934__$1 = state_27934;
if(cljs.core.truth_(inst_27913)){
var statearr_27943_27960 = state_27934__$1;
(statearr_27943_27960[(1)] = (4));

} else {
var statearr_27944_27961 = state_27934__$1;
(statearr_27944_27961[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (11))){
var inst_27911 = (state_27934[(8)]);
var inst_27921 = (state_27934[(2)]);
var inst_27922 = (inst_27911 + (1));
var inst_27911__$1 = inst_27922;
var state_27934__$1 = (function (){var statearr_27945 = state_27934;
(statearr_27945[(10)] = inst_27921);

(statearr_27945[(8)] = inst_27911__$1);

return statearr_27945;
})();
var statearr_27946_27962 = state_27934__$1;
(statearr_27946_27962[(2)] = null);

(statearr_27946_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (9))){
var state_27934__$1 = state_27934;
var statearr_27947_27963 = state_27934__$1;
(statearr_27947_27963[(2)] = null);

(statearr_27947_27963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (5))){
var state_27934__$1 = state_27934;
var statearr_27948_27964 = state_27934__$1;
(statearr_27948_27964[(2)] = null);

(statearr_27948_27964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (10))){
var inst_27926 = (state_27934[(2)]);
var state_27934__$1 = state_27934;
var statearr_27949_27965 = state_27934__$1;
(statearr_27949_27965[(2)] = inst_27926);

(statearr_27949_27965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (8))){
var inst_27916 = (state_27934[(7)]);
var state_27934__$1 = state_27934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27934__$1,(11),out,inst_27916);
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
});})(c__26483__auto___27955,out))
;
return ((function (switch__26460__auto__,c__26483__auto___27955,out){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_27950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27950[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_27950[(1)] = (1));

return statearr_27950;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_27934){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_27934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e27951){if((e27951 instanceof Object)){
var ex__26464__auto__ = e27951;
var statearr_27952_27966 = state_27934;
(statearr_27952_27966[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27967 = state_27934;
state_27934 = G__27967;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_27934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_27934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___27955,out))
})();
var state__26485__auto__ = (function (){var statearr_27953 = f__26484__auto__.call(null);
(statearr_27953[(6)] = c__26483__auto___27955);

return statearr_27953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___27955,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27969 = (function (f,ch,meta27970){
this.f = f;
this.ch = ch;
this.meta27970 = meta27970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27971,meta27970__$1){
var self__ = this;
var _27971__$1 = this;
return (new cljs.core.async.t_cljs$core$async27969(self__.f,self__.ch,meta27970__$1));
});

cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27971){
var self__ = this;
var _27971__$1 = this;
return self__.meta27970;
});

cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27972 = (function (f,ch,meta27970,_,fn1,meta27973){
this.f = f;
this.ch = ch;
this.meta27970 = meta27970;
this._ = _;
this.fn1 = fn1;
this.meta27973 = meta27973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27974,meta27973__$1){
var self__ = this;
var _27974__$1 = this;
return (new cljs.core.async.t_cljs$core$async27972(self__.f,self__.ch,self__.meta27970,self__._,self__.fn1,meta27973__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27974){
var self__ = this;
var _27974__$1 = this;
return self__.meta27973;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27972.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27968_SHARP_){
return f1.call(null,(((p1__27968_SHARP_ == null))?null:self__.f.call(null,p1__27968_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27972.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27970","meta27970",1532341460,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27969","cljs.core.async/t_cljs$core$async27969",1846330960,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27973","meta27973",1893161480,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27972";

cljs.core.async.t_cljs$core$async27972.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27972");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27972.
 */
cljs.core.async.__GT_t_cljs$core$async27972 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27972(f__$1,ch__$1,meta27970__$1,___$2,fn1__$1,meta27973){
return (new cljs.core.async.t_cljs$core$async27972(f__$1,ch__$1,meta27970__$1,___$2,fn1__$1,meta27973));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27972(self__.f,self__.ch,self__.meta27970,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27970","meta27970",1532341460,null)], null);
});

cljs.core.async.t_cljs$core$async27969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27969";

cljs.core.async.t_cljs$core$async27969.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27969");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27969.
 */
cljs.core.async.__GT_t_cljs$core$async27969 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27969(f__$1,ch__$1,meta27970){
return (new cljs.core.async.t_cljs$core$async27969(f__$1,ch__$1,meta27970));
});

}

return (new cljs.core.async.t_cljs$core$async27969(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27975 = (function (f,ch,meta27976){
this.f = f;
this.ch = ch;
this.meta27976 = meta27976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27977,meta27976__$1){
var self__ = this;
var _27977__$1 = this;
return (new cljs.core.async.t_cljs$core$async27975(self__.f,self__.ch,meta27976__$1));
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27977){
var self__ = this;
var _27977__$1 = this;
return self__.meta27976;
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27976","meta27976",-930188623,null)], null);
});

cljs.core.async.t_cljs$core$async27975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27975";

cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27975");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27975.
 */
cljs.core.async.__GT_t_cljs$core$async27975 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27975(f__$1,ch__$1,meta27976){
return (new cljs.core.async.t_cljs$core$async27975(f__$1,ch__$1,meta27976));
});

}

return (new cljs.core.async.t_cljs$core$async27975(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27978 = (function (p,ch,meta27979){
this.p = p;
this.ch = ch;
this.meta27979 = meta27979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27980,meta27979__$1){
var self__ = this;
var _27980__$1 = this;
return (new cljs.core.async.t_cljs$core$async27978(self__.p,self__.ch,meta27979__$1));
});

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27980){
var self__ = this;
var _27980__$1 = this;
return self__.meta27979;
});

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27979","meta27979",-394629800,null)], null);
});

cljs.core.async.t_cljs$core$async27978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27978";

cljs.core.async.t_cljs$core$async27978.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27978");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27978.
 */
cljs.core.async.__GT_t_cljs$core$async27978 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27978(p__$1,ch__$1,meta27979){
return (new cljs.core.async.t_cljs$core$async27978(p__$1,ch__$1,meta27979));
});

}

return (new cljs.core.async.t_cljs$core$async27978(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27982 = arguments.length;
switch (G__27982) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26483__auto___28022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___28022,out){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___28022,out){
return (function (state_28003){
var state_val_28004 = (state_28003[(1)]);
if((state_val_28004 === (7))){
var inst_27999 = (state_28003[(2)]);
var state_28003__$1 = state_28003;
var statearr_28005_28023 = state_28003__$1;
(statearr_28005_28023[(2)] = inst_27999);

(statearr_28005_28023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28004 === (1))){
var state_28003__$1 = state_28003;
var statearr_28006_28024 = state_28003__$1;
(statearr_28006_28024[(2)] = null);

(statearr_28006_28024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28004 === (4))){
var inst_27985 = (state_28003[(7)]);
var inst_27985__$1 = (state_28003[(2)]);
var inst_27986 = (inst_27985__$1 == null);
var state_28003__$1 = (function (){var statearr_28007 = state_28003;
(statearr_28007[(7)] = inst_27985__$1);

return statearr_28007;
})();
if(cljs.core.truth_(inst_27986)){
var statearr_28008_28025 = state_28003__$1;
(statearr_28008_28025[(1)] = (5));

} else {
var statearr_28009_28026 = state_28003__$1;
(statearr_28009_28026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28004 === (6))){
var inst_27985 = (state_28003[(7)]);
var inst_27990 = p.call(null,inst_27985);
var state_28003__$1 = state_28003;
if(cljs.core.truth_(inst_27990)){
var statearr_28010_28027 = state_28003__$1;
(statearr_28010_28027[(1)] = (8));

} else {
var statearr_28011_28028 = state_28003__$1;
(statearr_28011_28028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28004 === (3))){
var inst_28001 = (state_28003[(2)]);
var state_28003__$1 = state_28003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28003__$1,inst_28001);
} else {
if((state_val_28004 === (2))){
var state_28003__$1 = state_28003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28003__$1,(4),ch);
} else {
if((state_val_28004 === (11))){
var inst_27993 = (state_28003[(2)]);
var state_28003__$1 = state_28003;
var statearr_28012_28029 = state_28003__$1;
(statearr_28012_28029[(2)] = inst_27993);

(statearr_28012_28029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28004 === (9))){
var state_28003__$1 = state_28003;
var statearr_28013_28030 = state_28003__$1;
(statearr_28013_28030[(2)] = null);

(statearr_28013_28030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28004 === (5))){
var inst_27988 = cljs.core.async.close_BANG_.call(null,out);
var state_28003__$1 = state_28003;
var statearr_28014_28031 = state_28003__$1;
(statearr_28014_28031[(2)] = inst_27988);

(statearr_28014_28031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28004 === (10))){
var inst_27996 = (state_28003[(2)]);
var state_28003__$1 = (function (){var statearr_28015 = state_28003;
(statearr_28015[(8)] = inst_27996);

return statearr_28015;
})();
var statearr_28016_28032 = state_28003__$1;
(statearr_28016_28032[(2)] = null);

(statearr_28016_28032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28004 === (8))){
var inst_27985 = (state_28003[(7)]);
var state_28003__$1 = state_28003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28003__$1,(11),out,inst_27985);
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
});})(c__26483__auto___28022,out))
;
return ((function (switch__26460__auto__,c__26483__auto___28022,out){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_28017 = [null,null,null,null,null,null,null,null,null];
(statearr_28017[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_28017[(1)] = (1));

return statearr_28017;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_28003){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_28003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e28018){if((e28018 instanceof Object)){
var ex__26464__auto__ = e28018;
var statearr_28019_28033 = state_28003;
(statearr_28019_28033[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28034 = state_28003;
state_28003 = G__28034;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_28003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_28003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___28022,out))
})();
var state__26485__auto__ = (function (){var statearr_28020 = f__26484__auto__.call(null);
(statearr_28020[(6)] = c__26483__auto___28022);

return statearr_28020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___28022,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28036 = arguments.length;
switch (G__28036) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto__){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto__){
return (function (state_28099){
var state_val_28100 = (state_28099[(1)]);
if((state_val_28100 === (7))){
var inst_28095 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28101_28139 = state_28099__$1;
(statearr_28101_28139[(2)] = inst_28095);

(statearr_28101_28139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (20))){
var inst_28065 = (state_28099[(7)]);
var inst_28076 = (state_28099[(2)]);
var inst_28077 = cljs.core.next.call(null,inst_28065);
var inst_28051 = inst_28077;
var inst_28052 = null;
var inst_28053 = (0);
var inst_28054 = (0);
var state_28099__$1 = (function (){var statearr_28102 = state_28099;
(statearr_28102[(8)] = inst_28053);

(statearr_28102[(9)] = inst_28054);

(statearr_28102[(10)] = inst_28052);

(statearr_28102[(11)] = inst_28076);

(statearr_28102[(12)] = inst_28051);

return statearr_28102;
})();
var statearr_28103_28140 = state_28099__$1;
(statearr_28103_28140[(2)] = null);

(statearr_28103_28140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (1))){
var state_28099__$1 = state_28099;
var statearr_28104_28141 = state_28099__$1;
(statearr_28104_28141[(2)] = null);

(statearr_28104_28141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (4))){
var inst_28040 = (state_28099[(13)]);
var inst_28040__$1 = (state_28099[(2)]);
var inst_28041 = (inst_28040__$1 == null);
var state_28099__$1 = (function (){var statearr_28105 = state_28099;
(statearr_28105[(13)] = inst_28040__$1);

return statearr_28105;
})();
if(cljs.core.truth_(inst_28041)){
var statearr_28106_28142 = state_28099__$1;
(statearr_28106_28142[(1)] = (5));

} else {
var statearr_28107_28143 = state_28099__$1;
(statearr_28107_28143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (15))){
var state_28099__$1 = state_28099;
var statearr_28111_28144 = state_28099__$1;
(statearr_28111_28144[(2)] = null);

(statearr_28111_28144[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (21))){
var state_28099__$1 = state_28099;
var statearr_28112_28145 = state_28099__$1;
(statearr_28112_28145[(2)] = null);

(statearr_28112_28145[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (13))){
var inst_28053 = (state_28099[(8)]);
var inst_28054 = (state_28099[(9)]);
var inst_28052 = (state_28099[(10)]);
var inst_28051 = (state_28099[(12)]);
var inst_28061 = (state_28099[(2)]);
var inst_28062 = (inst_28054 + (1));
var tmp28108 = inst_28053;
var tmp28109 = inst_28052;
var tmp28110 = inst_28051;
var inst_28051__$1 = tmp28110;
var inst_28052__$1 = tmp28109;
var inst_28053__$1 = tmp28108;
var inst_28054__$1 = inst_28062;
var state_28099__$1 = (function (){var statearr_28113 = state_28099;
(statearr_28113[(8)] = inst_28053__$1);

(statearr_28113[(9)] = inst_28054__$1);

(statearr_28113[(10)] = inst_28052__$1);

(statearr_28113[(14)] = inst_28061);

(statearr_28113[(12)] = inst_28051__$1);

return statearr_28113;
})();
var statearr_28114_28146 = state_28099__$1;
(statearr_28114_28146[(2)] = null);

(statearr_28114_28146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (22))){
var state_28099__$1 = state_28099;
var statearr_28115_28147 = state_28099__$1;
(statearr_28115_28147[(2)] = null);

(statearr_28115_28147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (6))){
var inst_28040 = (state_28099[(13)]);
var inst_28049 = f.call(null,inst_28040);
var inst_28050 = cljs.core.seq.call(null,inst_28049);
var inst_28051 = inst_28050;
var inst_28052 = null;
var inst_28053 = (0);
var inst_28054 = (0);
var state_28099__$1 = (function (){var statearr_28116 = state_28099;
(statearr_28116[(8)] = inst_28053);

(statearr_28116[(9)] = inst_28054);

(statearr_28116[(10)] = inst_28052);

(statearr_28116[(12)] = inst_28051);

return statearr_28116;
})();
var statearr_28117_28148 = state_28099__$1;
(statearr_28117_28148[(2)] = null);

(statearr_28117_28148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (17))){
var inst_28065 = (state_28099[(7)]);
var inst_28069 = cljs.core.chunk_first.call(null,inst_28065);
var inst_28070 = cljs.core.chunk_rest.call(null,inst_28065);
var inst_28071 = cljs.core.count.call(null,inst_28069);
var inst_28051 = inst_28070;
var inst_28052 = inst_28069;
var inst_28053 = inst_28071;
var inst_28054 = (0);
var state_28099__$1 = (function (){var statearr_28118 = state_28099;
(statearr_28118[(8)] = inst_28053);

(statearr_28118[(9)] = inst_28054);

(statearr_28118[(10)] = inst_28052);

(statearr_28118[(12)] = inst_28051);

return statearr_28118;
})();
var statearr_28119_28149 = state_28099__$1;
(statearr_28119_28149[(2)] = null);

(statearr_28119_28149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (3))){
var inst_28097 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28099__$1,inst_28097);
} else {
if((state_val_28100 === (12))){
var inst_28085 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28120_28150 = state_28099__$1;
(statearr_28120_28150[(2)] = inst_28085);

(statearr_28120_28150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (2))){
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(4),in$);
} else {
if((state_val_28100 === (23))){
var inst_28093 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28121_28151 = state_28099__$1;
(statearr_28121_28151[(2)] = inst_28093);

(statearr_28121_28151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (19))){
var inst_28080 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28122_28152 = state_28099__$1;
(statearr_28122_28152[(2)] = inst_28080);

(statearr_28122_28152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (11))){
var inst_28065 = (state_28099[(7)]);
var inst_28051 = (state_28099[(12)]);
var inst_28065__$1 = cljs.core.seq.call(null,inst_28051);
var state_28099__$1 = (function (){var statearr_28123 = state_28099;
(statearr_28123[(7)] = inst_28065__$1);

return statearr_28123;
})();
if(inst_28065__$1){
var statearr_28124_28153 = state_28099__$1;
(statearr_28124_28153[(1)] = (14));

} else {
var statearr_28125_28154 = state_28099__$1;
(statearr_28125_28154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (9))){
var inst_28087 = (state_28099[(2)]);
var inst_28088 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28099__$1 = (function (){var statearr_28126 = state_28099;
(statearr_28126[(15)] = inst_28087);

return statearr_28126;
})();
if(cljs.core.truth_(inst_28088)){
var statearr_28127_28155 = state_28099__$1;
(statearr_28127_28155[(1)] = (21));

} else {
var statearr_28128_28156 = state_28099__$1;
(statearr_28128_28156[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (5))){
var inst_28043 = cljs.core.async.close_BANG_.call(null,out);
var state_28099__$1 = state_28099;
var statearr_28129_28157 = state_28099__$1;
(statearr_28129_28157[(2)] = inst_28043);

(statearr_28129_28157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (14))){
var inst_28065 = (state_28099[(7)]);
var inst_28067 = cljs.core.chunked_seq_QMARK_.call(null,inst_28065);
var state_28099__$1 = state_28099;
if(inst_28067){
var statearr_28130_28158 = state_28099__$1;
(statearr_28130_28158[(1)] = (17));

} else {
var statearr_28131_28159 = state_28099__$1;
(statearr_28131_28159[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (16))){
var inst_28083 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28132_28160 = state_28099__$1;
(statearr_28132_28160[(2)] = inst_28083);

(statearr_28132_28160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (10))){
var inst_28054 = (state_28099[(9)]);
var inst_28052 = (state_28099[(10)]);
var inst_28059 = cljs.core._nth.call(null,inst_28052,inst_28054);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28099__$1,(13),out,inst_28059);
} else {
if((state_val_28100 === (18))){
var inst_28065 = (state_28099[(7)]);
var inst_28074 = cljs.core.first.call(null,inst_28065);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28099__$1,(20),out,inst_28074);
} else {
if((state_val_28100 === (8))){
var inst_28053 = (state_28099[(8)]);
var inst_28054 = (state_28099[(9)]);
var inst_28056 = (inst_28054 < inst_28053);
var inst_28057 = inst_28056;
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28057)){
var statearr_28133_28161 = state_28099__$1;
(statearr_28133_28161[(1)] = (10));

} else {
var statearr_28134_28162 = state_28099__$1;
(statearr_28134_28162[(1)] = (11));

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
});})(c__26483__auto__))
;
return ((function (switch__26460__auto__,c__26483__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26461__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26461__auto____0 = (function (){
var statearr_28135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28135[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26461__auto__);

(statearr_28135[(1)] = (1));

return statearr_28135;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26461__auto____1 = (function (state_28099){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_28099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e28136){if((e28136 instanceof Object)){
var ex__26464__auto__ = e28136;
var statearr_28137_28163 = state_28099;
(statearr_28137_28163[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28164 = state_28099;
state_28099 = G__28164;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26461__auto__ = function(state_28099){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26461__auto____1.call(this,state_28099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26461__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26461__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto__))
})();
var state__26485__auto__ = (function (){var statearr_28138 = f__26484__auto__.call(null);
(statearr_28138[(6)] = c__26483__auto__);

return statearr_28138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto__))
);

return c__26483__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28166 = arguments.length;
switch (G__28166) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28169 = arguments.length;
switch (G__28169) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28172 = arguments.length;
switch (G__28172) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26483__auto___28219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___28219,out){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___28219,out){
return (function (state_28196){
var state_val_28197 = (state_28196[(1)]);
if((state_val_28197 === (7))){
var inst_28191 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28198_28220 = state_28196__$1;
(statearr_28198_28220[(2)] = inst_28191);

(statearr_28198_28220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (1))){
var inst_28173 = null;
var state_28196__$1 = (function (){var statearr_28199 = state_28196;
(statearr_28199[(7)] = inst_28173);

return statearr_28199;
})();
var statearr_28200_28221 = state_28196__$1;
(statearr_28200_28221[(2)] = null);

(statearr_28200_28221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (4))){
var inst_28176 = (state_28196[(8)]);
var inst_28176__$1 = (state_28196[(2)]);
var inst_28177 = (inst_28176__$1 == null);
var inst_28178 = cljs.core.not.call(null,inst_28177);
var state_28196__$1 = (function (){var statearr_28201 = state_28196;
(statearr_28201[(8)] = inst_28176__$1);

return statearr_28201;
})();
if(inst_28178){
var statearr_28202_28222 = state_28196__$1;
(statearr_28202_28222[(1)] = (5));

} else {
var statearr_28203_28223 = state_28196__$1;
(statearr_28203_28223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (6))){
var state_28196__$1 = state_28196;
var statearr_28204_28224 = state_28196__$1;
(statearr_28204_28224[(2)] = null);

(statearr_28204_28224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (3))){
var inst_28193 = (state_28196[(2)]);
var inst_28194 = cljs.core.async.close_BANG_.call(null,out);
var state_28196__$1 = (function (){var statearr_28205 = state_28196;
(statearr_28205[(9)] = inst_28193);

return statearr_28205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28196__$1,inst_28194);
} else {
if((state_val_28197 === (2))){
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(4),ch);
} else {
if((state_val_28197 === (11))){
var inst_28176 = (state_28196[(8)]);
var inst_28185 = (state_28196[(2)]);
var inst_28173 = inst_28176;
var state_28196__$1 = (function (){var statearr_28206 = state_28196;
(statearr_28206[(10)] = inst_28185);

(statearr_28206[(7)] = inst_28173);

return statearr_28206;
})();
var statearr_28207_28225 = state_28196__$1;
(statearr_28207_28225[(2)] = null);

(statearr_28207_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (9))){
var inst_28176 = (state_28196[(8)]);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28196__$1,(11),out,inst_28176);
} else {
if((state_val_28197 === (5))){
var inst_28176 = (state_28196[(8)]);
var inst_28173 = (state_28196[(7)]);
var inst_28180 = cljs.core._EQ_.call(null,inst_28176,inst_28173);
var state_28196__$1 = state_28196;
if(inst_28180){
var statearr_28209_28226 = state_28196__$1;
(statearr_28209_28226[(1)] = (8));

} else {
var statearr_28210_28227 = state_28196__$1;
(statearr_28210_28227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (10))){
var inst_28188 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28211_28228 = state_28196__$1;
(statearr_28211_28228[(2)] = inst_28188);

(statearr_28211_28228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (8))){
var inst_28173 = (state_28196[(7)]);
var tmp28208 = inst_28173;
var inst_28173__$1 = tmp28208;
var state_28196__$1 = (function (){var statearr_28212 = state_28196;
(statearr_28212[(7)] = inst_28173__$1);

return statearr_28212;
})();
var statearr_28213_28229 = state_28196__$1;
(statearr_28213_28229[(2)] = null);

(statearr_28213_28229[(1)] = (2));


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
});})(c__26483__auto___28219,out))
;
return ((function (switch__26460__auto__,c__26483__auto___28219,out){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_28214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28214[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_28214[(1)] = (1));

return statearr_28214;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_28196){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_28196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e28215){if((e28215 instanceof Object)){
var ex__26464__auto__ = e28215;
var statearr_28216_28230 = state_28196;
(statearr_28216_28230[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28231 = state_28196;
state_28196 = G__28231;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_28196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_28196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___28219,out))
})();
var state__26485__auto__ = (function (){var statearr_28217 = f__26484__auto__.call(null);
(statearr_28217[(6)] = c__26483__auto___28219);

return statearr_28217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___28219,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28233 = arguments.length;
switch (G__28233) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26483__auto___28299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___28299,out){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___28299,out){
return (function (state_28271){
var state_val_28272 = (state_28271[(1)]);
if((state_val_28272 === (7))){
var inst_28267 = (state_28271[(2)]);
var state_28271__$1 = state_28271;
var statearr_28273_28300 = state_28271__$1;
(statearr_28273_28300[(2)] = inst_28267);

(statearr_28273_28300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (1))){
var inst_28234 = (new Array(n));
var inst_28235 = inst_28234;
var inst_28236 = (0);
var state_28271__$1 = (function (){var statearr_28274 = state_28271;
(statearr_28274[(7)] = inst_28235);

(statearr_28274[(8)] = inst_28236);

return statearr_28274;
})();
var statearr_28275_28301 = state_28271__$1;
(statearr_28275_28301[(2)] = null);

(statearr_28275_28301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (4))){
var inst_28239 = (state_28271[(9)]);
var inst_28239__$1 = (state_28271[(2)]);
var inst_28240 = (inst_28239__$1 == null);
var inst_28241 = cljs.core.not.call(null,inst_28240);
var state_28271__$1 = (function (){var statearr_28276 = state_28271;
(statearr_28276[(9)] = inst_28239__$1);

return statearr_28276;
})();
if(inst_28241){
var statearr_28277_28302 = state_28271__$1;
(statearr_28277_28302[(1)] = (5));

} else {
var statearr_28278_28303 = state_28271__$1;
(statearr_28278_28303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (15))){
var inst_28261 = (state_28271[(2)]);
var state_28271__$1 = state_28271;
var statearr_28279_28304 = state_28271__$1;
(statearr_28279_28304[(2)] = inst_28261);

(statearr_28279_28304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (13))){
var state_28271__$1 = state_28271;
var statearr_28280_28305 = state_28271__$1;
(statearr_28280_28305[(2)] = null);

(statearr_28280_28305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (6))){
var inst_28236 = (state_28271[(8)]);
var inst_28257 = (inst_28236 > (0));
var state_28271__$1 = state_28271;
if(cljs.core.truth_(inst_28257)){
var statearr_28281_28306 = state_28271__$1;
(statearr_28281_28306[(1)] = (12));

} else {
var statearr_28282_28307 = state_28271__$1;
(statearr_28282_28307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (3))){
var inst_28269 = (state_28271[(2)]);
var state_28271__$1 = state_28271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28271__$1,inst_28269);
} else {
if((state_val_28272 === (12))){
var inst_28235 = (state_28271[(7)]);
var inst_28259 = cljs.core.vec.call(null,inst_28235);
var state_28271__$1 = state_28271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28271__$1,(15),out,inst_28259);
} else {
if((state_val_28272 === (2))){
var state_28271__$1 = state_28271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28271__$1,(4),ch);
} else {
if((state_val_28272 === (11))){
var inst_28251 = (state_28271[(2)]);
var inst_28252 = (new Array(n));
var inst_28235 = inst_28252;
var inst_28236 = (0);
var state_28271__$1 = (function (){var statearr_28283 = state_28271;
(statearr_28283[(7)] = inst_28235);

(statearr_28283[(8)] = inst_28236);

(statearr_28283[(10)] = inst_28251);

return statearr_28283;
})();
var statearr_28284_28308 = state_28271__$1;
(statearr_28284_28308[(2)] = null);

(statearr_28284_28308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (9))){
var inst_28235 = (state_28271[(7)]);
var inst_28249 = cljs.core.vec.call(null,inst_28235);
var state_28271__$1 = state_28271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28271__$1,(11),out,inst_28249);
} else {
if((state_val_28272 === (5))){
var inst_28239 = (state_28271[(9)]);
var inst_28244 = (state_28271[(11)]);
var inst_28235 = (state_28271[(7)]);
var inst_28236 = (state_28271[(8)]);
var inst_28243 = (inst_28235[inst_28236] = inst_28239);
var inst_28244__$1 = (inst_28236 + (1));
var inst_28245 = (inst_28244__$1 < n);
var state_28271__$1 = (function (){var statearr_28285 = state_28271;
(statearr_28285[(11)] = inst_28244__$1);

(statearr_28285[(12)] = inst_28243);

return statearr_28285;
})();
if(cljs.core.truth_(inst_28245)){
var statearr_28286_28309 = state_28271__$1;
(statearr_28286_28309[(1)] = (8));

} else {
var statearr_28287_28310 = state_28271__$1;
(statearr_28287_28310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (14))){
var inst_28264 = (state_28271[(2)]);
var inst_28265 = cljs.core.async.close_BANG_.call(null,out);
var state_28271__$1 = (function (){var statearr_28289 = state_28271;
(statearr_28289[(13)] = inst_28264);

return statearr_28289;
})();
var statearr_28290_28311 = state_28271__$1;
(statearr_28290_28311[(2)] = inst_28265);

(statearr_28290_28311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (10))){
var inst_28255 = (state_28271[(2)]);
var state_28271__$1 = state_28271;
var statearr_28291_28312 = state_28271__$1;
(statearr_28291_28312[(2)] = inst_28255);

(statearr_28291_28312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28272 === (8))){
var inst_28244 = (state_28271[(11)]);
var inst_28235 = (state_28271[(7)]);
var tmp28288 = inst_28235;
var inst_28235__$1 = tmp28288;
var inst_28236 = inst_28244;
var state_28271__$1 = (function (){var statearr_28292 = state_28271;
(statearr_28292[(7)] = inst_28235__$1);

(statearr_28292[(8)] = inst_28236);

return statearr_28292;
})();
var statearr_28293_28313 = state_28271__$1;
(statearr_28293_28313[(2)] = null);

(statearr_28293_28313[(1)] = (2));


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
});})(c__26483__auto___28299,out))
;
return ((function (switch__26460__auto__,c__26483__auto___28299,out){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_28294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28294[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_28294[(1)] = (1));

return statearr_28294;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_28271){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_28271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e28295){if((e28295 instanceof Object)){
var ex__26464__auto__ = e28295;
var statearr_28296_28314 = state_28271;
(statearr_28296_28314[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28315 = state_28271;
state_28271 = G__28315;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_28271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_28271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___28299,out))
})();
var state__26485__auto__ = (function (){var statearr_28297 = f__26484__auto__.call(null);
(statearr_28297[(6)] = c__26483__auto___28299);

return statearr_28297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___28299,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28317 = arguments.length;
switch (G__28317) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26483__auto___28387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26483__auto___28387,out){
return (function (){
var f__26484__auto__ = (function (){var switch__26460__auto__ = ((function (c__26483__auto___28387,out){
return (function (state_28359){
var state_val_28360 = (state_28359[(1)]);
if((state_val_28360 === (7))){
var inst_28355 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
var statearr_28361_28388 = state_28359__$1;
(statearr_28361_28388[(2)] = inst_28355);

(statearr_28361_28388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (1))){
var inst_28318 = [];
var inst_28319 = inst_28318;
var inst_28320 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28359__$1 = (function (){var statearr_28362 = state_28359;
(statearr_28362[(7)] = inst_28320);

(statearr_28362[(8)] = inst_28319);

return statearr_28362;
})();
var statearr_28363_28389 = state_28359__$1;
(statearr_28363_28389[(2)] = null);

(statearr_28363_28389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (4))){
var inst_28323 = (state_28359[(9)]);
var inst_28323__$1 = (state_28359[(2)]);
var inst_28324 = (inst_28323__$1 == null);
var inst_28325 = cljs.core.not.call(null,inst_28324);
var state_28359__$1 = (function (){var statearr_28364 = state_28359;
(statearr_28364[(9)] = inst_28323__$1);

return statearr_28364;
})();
if(inst_28325){
var statearr_28365_28390 = state_28359__$1;
(statearr_28365_28390[(1)] = (5));

} else {
var statearr_28366_28391 = state_28359__$1;
(statearr_28366_28391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (15))){
var inst_28349 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
var statearr_28367_28392 = state_28359__$1;
(statearr_28367_28392[(2)] = inst_28349);

(statearr_28367_28392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (13))){
var state_28359__$1 = state_28359;
var statearr_28368_28393 = state_28359__$1;
(statearr_28368_28393[(2)] = null);

(statearr_28368_28393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (6))){
var inst_28319 = (state_28359[(8)]);
var inst_28344 = inst_28319.length;
var inst_28345 = (inst_28344 > (0));
var state_28359__$1 = state_28359;
if(cljs.core.truth_(inst_28345)){
var statearr_28369_28394 = state_28359__$1;
(statearr_28369_28394[(1)] = (12));

} else {
var statearr_28370_28395 = state_28359__$1;
(statearr_28370_28395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (3))){
var inst_28357 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28359__$1,inst_28357);
} else {
if((state_val_28360 === (12))){
var inst_28319 = (state_28359[(8)]);
var inst_28347 = cljs.core.vec.call(null,inst_28319);
var state_28359__$1 = state_28359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28359__$1,(15),out,inst_28347);
} else {
if((state_val_28360 === (2))){
var state_28359__$1 = state_28359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28359__$1,(4),ch);
} else {
if((state_val_28360 === (11))){
var inst_28327 = (state_28359[(10)]);
var inst_28323 = (state_28359[(9)]);
var inst_28337 = (state_28359[(2)]);
var inst_28338 = [];
var inst_28339 = inst_28338.push(inst_28323);
var inst_28319 = inst_28338;
var inst_28320 = inst_28327;
var state_28359__$1 = (function (){var statearr_28371 = state_28359;
(statearr_28371[(11)] = inst_28337);

(statearr_28371[(7)] = inst_28320);

(statearr_28371[(12)] = inst_28339);

(statearr_28371[(8)] = inst_28319);

return statearr_28371;
})();
var statearr_28372_28396 = state_28359__$1;
(statearr_28372_28396[(2)] = null);

(statearr_28372_28396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (9))){
var inst_28319 = (state_28359[(8)]);
var inst_28335 = cljs.core.vec.call(null,inst_28319);
var state_28359__$1 = state_28359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28359__$1,(11),out,inst_28335);
} else {
if((state_val_28360 === (5))){
var inst_28327 = (state_28359[(10)]);
var inst_28323 = (state_28359[(9)]);
var inst_28320 = (state_28359[(7)]);
var inst_28327__$1 = f.call(null,inst_28323);
var inst_28328 = cljs.core._EQ_.call(null,inst_28327__$1,inst_28320);
var inst_28329 = cljs.core.keyword_identical_QMARK_.call(null,inst_28320,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28330 = ((inst_28328) || (inst_28329));
var state_28359__$1 = (function (){var statearr_28373 = state_28359;
(statearr_28373[(10)] = inst_28327__$1);

return statearr_28373;
})();
if(cljs.core.truth_(inst_28330)){
var statearr_28374_28397 = state_28359__$1;
(statearr_28374_28397[(1)] = (8));

} else {
var statearr_28375_28398 = state_28359__$1;
(statearr_28375_28398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (14))){
var inst_28352 = (state_28359[(2)]);
var inst_28353 = cljs.core.async.close_BANG_.call(null,out);
var state_28359__$1 = (function (){var statearr_28377 = state_28359;
(statearr_28377[(13)] = inst_28352);

return statearr_28377;
})();
var statearr_28378_28399 = state_28359__$1;
(statearr_28378_28399[(2)] = inst_28353);

(statearr_28378_28399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (10))){
var inst_28342 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
var statearr_28379_28400 = state_28359__$1;
(statearr_28379_28400[(2)] = inst_28342);

(statearr_28379_28400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (8))){
var inst_28327 = (state_28359[(10)]);
var inst_28323 = (state_28359[(9)]);
var inst_28319 = (state_28359[(8)]);
var inst_28332 = inst_28319.push(inst_28323);
var tmp28376 = inst_28319;
var inst_28319__$1 = tmp28376;
var inst_28320 = inst_28327;
var state_28359__$1 = (function (){var statearr_28380 = state_28359;
(statearr_28380[(7)] = inst_28320);

(statearr_28380[(8)] = inst_28319__$1);

(statearr_28380[(14)] = inst_28332);

return statearr_28380;
})();
var statearr_28381_28401 = state_28359__$1;
(statearr_28381_28401[(2)] = null);

(statearr_28381_28401[(1)] = (2));


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
});})(c__26483__auto___28387,out))
;
return ((function (switch__26460__auto__,c__26483__auto___28387,out){
return (function() {
var cljs$core$async$state_machine__26461__auto__ = null;
var cljs$core$async$state_machine__26461__auto____0 = (function (){
var statearr_28382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28382[(0)] = cljs$core$async$state_machine__26461__auto__);

(statearr_28382[(1)] = (1));

return statearr_28382;
});
var cljs$core$async$state_machine__26461__auto____1 = (function (state_28359){
while(true){
var ret_value__26462__auto__ = (function (){try{while(true){
var result__26463__auto__ = switch__26460__auto__.call(null,state_28359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26463__auto__;
}
break;
}
}catch (e28383){if((e28383 instanceof Object)){
var ex__26464__auto__ = e28383;
var statearr_28384_28402 = state_28359;
(statearr_28384_28402[(5)] = ex__26464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28403 = state_28359;
state_28359 = G__28403;
continue;
} else {
return ret_value__26462__auto__;
}
break;
}
});
cljs$core$async$state_machine__26461__auto__ = function(state_28359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26461__auto____1.call(this,state_28359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26461__auto____0;
cljs$core$async$state_machine__26461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26461__auto____1;
return cljs$core$async$state_machine__26461__auto__;
})()
;})(switch__26460__auto__,c__26483__auto___28387,out))
})();
var state__26485__auto__ = (function (){var statearr_28385 = f__26484__auto__.call(null);
(statearr_28385[(6)] = c__26483__auto___28387);

return statearr_28385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26485__auto__);
});})(c__26483__auto___28387,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1550771774989
