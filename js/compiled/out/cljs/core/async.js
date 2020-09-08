// Compiled by ClojureScript 1.10.520 {}
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
var G__26361 = arguments.length;
switch (G__26361) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26362 = (function (f,blockable,meta26363){
this.f = f;
this.blockable = blockable;
this.meta26363 = meta26363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26364,meta26363__$1){
var self__ = this;
var _26364__$1 = this;
return (new cljs.core.async.t_cljs$core$async26362(self__.f,self__.blockable,meta26363__$1));
});

cljs.core.async.t_cljs$core$async26362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26364){
var self__ = this;
var _26364__$1 = this;
return self__.meta26363;
});

cljs.core.async.t_cljs$core$async26362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26363","meta26363",-1949798934,null)], null);
});

cljs.core.async.t_cljs$core$async26362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26362";

cljs.core.async.t_cljs$core$async26362.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26362");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26362.
 */
cljs.core.async.__GT_t_cljs$core$async26362 = (function cljs$core$async$__GT_t_cljs$core$async26362(f__$1,blockable__$1,meta26363){
return (new cljs.core.async.t_cljs$core$async26362(f__$1,blockable__$1,meta26363));
});

}

return (new cljs.core.async.t_cljs$core$async26362(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26368 = arguments.length;
switch (G__26368) {
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
var G__26371 = arguments.length;
switch (G__26371) {
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
var G__26374 = arguments.length;
switch (G__26374) {
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
var val_26376 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26376);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26376,ret){
return (function (){
return fn1.call(null,val_26376);
});})(val_26376,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26378 = arguments.length;
switch (G__26378) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4607__auto___26380 = n;
var x_26381 = (0);
while(true){
if((x_26381 < n__4607__auto___26380)){
(a[x_26381] = x_26381);

var G__26382 = (x_26381 + (1));
x_26381 = G__26382;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26383 = (function (flag,meta26384){
this.flag = flag;
this.meta26384 = meta26384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26385,meta26384__$1){
var self__ = this;
var _26385__$1 = this;
return (new cljs.core.async.t_cljs$core$async26383(self__.flag,meta26384__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26385){
var self__ = this;
var _26385__$1 = this;
return self__.meta26384;
});})(flag))
;

cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26383.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26384","meta26384",-553346828,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26383.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26383";

cljs.core.async.t_cljs$core$async26383.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26383");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26383.
 */
cljs.core.async.__GT_t_cljs$core$async26383 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26383(flag__$1,meta26384){
return (new cljs.core.async.t_cljs$core$async26383(flag__$1,meta26384));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26383(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26386 = (function (flag,cb,meta26387){
this.flag = flag;
this.cb = cb;
this.meta26387 = meta26387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26388,meta26387__$1){
var self__ = this;
var _26388__$1 = this;
return (new cljs.core.async.t_cljs$core$async26386(self__.flag,self__.cb,meta26387__$1));
});

cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26388){
var self__ = this;
var _26388__$1 = this;
return self__.meta26387;
});

cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26387","meta26387",-669542641,null)], null);
});

cljs.core.async.t_cljs$core$async26386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26386";

cljs.core.async.t_cljs$core$async26386.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26386");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26386.
 */
cljs.core.async.__GT_t_cljs$core$async26386 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26386(flag__$1,cb__$1,meta26387){
return (new cljs.core.async.t_cljs$core$async26386(flag__$1,cb__$1,meta26387));
});

}

return (new cljs.core.async.t_cljs$core$async26386(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26389_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26389_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26390_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26390_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26391 = (i + (1));
i = G__26391;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___26397 = arguments.length;
var i__4731__auto___26398 = (0);
while(true){
if((i__4731__auto___26398 < len__4730__auto___26397)){
args__4736__auto__.push((arguments[i__4731__auto___26398]));

var G__26399 = (i__4731__auto___26398 + (1));
i__4731__auto___26398 = G__26399;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26394){
var map__26395 = p__26394;
var map__26395__$1 = (((((!((map__26395 == null))))?(((((map__26395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26395):map__26395);
var opts = map__26395__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26392){
var G__26393 = cljs.core.first.call(null,seq26392);
var seq26392__$1 = cljs.core.next.call(null,seq26392);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26393,seq26392__$1);
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
var G__26401 = arguments.length;
switch (G__26401) {
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
var c__26301__auto___26447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___26447){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___26447){
return (function (state_26425){
var state_val_26426 = (state_26425[(1)]);
if((state_val_26426 === (7))){
var inst_26421 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26427_26448 = state_26425__$1;
(statearr_26427_26448[(2)] = inst_26421);

(statearr_26427_26448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (1))){
var state_26425__$1 = state_26425;
var statearr_26428_26449 = state_26425__$1;
(statearr_26428_26449[(2)] = null);

(statearr_26428_26449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (4))){
var inst_26404 = (state_26425[(7)]);
var inst_26404__$1 = (state_26425[(2)]);
var inst_26405 = (inst_26404__$1 == null);
var state_26425__$1 = (function (){var statearr_26429 = state_26425;
(statearr_26429[(7)] = inst_26404__$1);

return statearr_26429;
})();
if(cljs.core.truth_(inst_26405)){
var statearr_26430_26450 = state_26425__$1;
(statearr_26430_26450[(1)] = (5));

} else {
var statearr_26431_26451 = state_26425__$1;
(statearr_26431_26451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (13))){
var state_26425__$1 = state_26425;
var statearr_26432_26452 = state_26425__$1;
(statearr_26432_26452[(2)] = null);

(statearr_26432_26452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (6))){
var inst_26404 = (state_26425[(7)]);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26425__$1,(11),to,inst_26404);
} else {
if((state_val_26426 === (3))){
var inst_26423 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26425__$1,inst_26423);
} else {
if((state_val_26426 === (12))){
var state_26425__$1 = state_26425;
var statearr_26433_26453 = state_26425__$1;
(statearr_26433_26453[(2)] = null);

(statearr_26433_26453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (2))){
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(4),from);
} else {
if((state_val_26426 === (11))){
var inst_26414 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26414)){
var statearr_26434_26454 = state_26425__$1;
(statearr_26434_26454[(1)] = (12));

} else {
var statearr_26435_26455 = state_26425__$1;
(statearr_26435_26455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (9))){
var state_26425__$1 = state_26425;
var statearr_26436_26456 = state_26425__$1;
(statearr_26436_26456[(2)] = null);

(statearr_26436_26456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (5))){
var state_26425__$1 = state_26425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26437_26457 = state_26425__$1;
(statearr_26437_26457[(1)] = (8));

} else {
var statearr_26438_26458 = state_26425__$1;
(statearr_26438_26458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (14))){
var inst_26419 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26439_26459 = state_26425__$1;
(statearr_26439_26459[(2)] = inst_26419);

(statearr_26439_26459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (10))){
var inst_26411 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26440_26460 = state_26425__$1;
(statearr_26440_26460[(2)] = inst_26411);

(statearr_26440_26460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (8))){
var inst_26408 = cljs.core.async.close_BANG_.call(null,to);
var state_26425__$1 = state_26425;
var statearr_26441_26461 = state_26425__$1;
(statearr_26441_26461[(2)] = inst_26408);

(statearr_26441_26461[(1)] = (10));


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
});})(c__26301__auto___26447))
;
return ((function (switch__26206__auto__,c__26301__auto___26447){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_26442 = [null,null,null,null,null,null,null,null];
(statearr_26442[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_26442[(1)] = (1));

return statearr_26442;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_26425){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26443){if((e26443 instanceof Object)){
var ex__26210__auto__ = e26443;
var statearr_26444_26462 = state_26425;
(statearr_26444_26462[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26463 = state_26425;
state_26425 = G__26463;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_26425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_26425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___26447))
})();
var state__26303__auto__ = (function (){var statearr_26445 = f__26302__auto__.call(null);
(statearr_26445[(6)] = c__26301__auto___26447);

return statearr_26445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___26447))
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
return (function (p__26464){
var vec__26465 = p__26464;
var v = cljs.core.nth.call(null,vec__26465,(0),null);
var p = cljs.core.nth.call(null,vec__26465,(1),null);
var job = vec__26465;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26301__auto___26636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___26636,res,vec__26465,v,p,job,jobs,results){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___26636,res,vec__26465,v,p,job,jobs,results){
return (function (state_26472){
var state_val_26473 = (state_26472[(1)]);
if((state_val_26473 === (1))){
var state_26472__$1 = state_26472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26472__$1,(2),res,v);
} else {
if((state_val_26473 === (2))){
var inst_26469 = (state_26472[(2)]);
var inst_26470 = cljs.core.async.close_BANG_.call(null,res);
var state_26472__$1 = (function (){var statearr_26474 = state_26472;
(statearr_26474[(7)] = inst_26469);

return statearr_26474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26472__$1,inst_26470);
} else {
return null;
}
}
});})(c__26301__auto___26636,res,vec__26465,v,p,job,jobs,results))
;
return ((function (switch__26206__auto__,c__26301__auto___26636,res,vec__26465,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0 = (function (){
var statearr_26475 = [null,null,null,null,null,null,null,null];
(statearr_26475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__);

(statearr_26475[(1)] = (1));

return statearr_26475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1 = (function (state_26472){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26476){if((e26476 instanceof Object)){
var ex__26210__auto__ = e26476;
var statearr_26477_26637 = state_26472;
(statearr_26477_26637[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26638 = state_26472;
state_26472 = G__26638;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = function(state_26472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1.call(this,state_26472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___26636,res,vec__26465,v,p,job,jobs,results))
})();
var state__26303__auto__ = (function (){var statearr_26478 = f__26302__auto__.call(null);
(statearr_26478[(6)] = c__26301__auto___26636);

return statearr_26478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___26636,res,vec__26465,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26479){
var vec__26480 = p__26479;
var v = cljs.core.nth.call(null,vec__26480,(0),null);
var p = cljs.core.nth.call(null,vec__26480,(1),null);
var job = vec__26480;
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
var n__4607__auto___26639 = n;
var __26640 = (0);
while(true){
if((__26640 < n__4607__auto___26639)){
var G__26483_26641 = type;
var G__26483_26642__$1 = (((G__26483_26641 instanceof cljs.core.Keyword))?G__26483_26641.fqn:null);
switch (G__26483_26642__$1) {
case "compute":
var c__26301__auto___26644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26640,c__26301__auto___26644,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (__26640,c__26301__auto___26644,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async){
return (function (state_26496){
var state_val_26497 = (state_26496[(1)]);
if((state_val_26497 === (1))){
var state_26496__$1 = state_26496;
var statearr_26498_26645 = state_26496__$1;
(statearr_26498_26645[(2)] = null);

(statearr_26498_26645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26497 === (2))){
var state_26496__$1 = state_26496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26496__$1,(4),jobs);
} else {
if((state_val_26497 === (3))){
var inst_26494 = (state_26496[(2)]);
var state_26496__$1 = state_26496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26496__$1,inst_26494);
} else {
if((state_val_26497 === (4))){
var inst_26486 = (state_26496[(2)]);
var inst_26487 = process.call(null,inst_26486);
var state_26496__$1 = state_26496;
if(cljs.core.truth_(inst_26487)){
var statearr_26499_26646 = state_26496__$1;
(statearr_26499_26646[(1)] = (5));

} else {
var statearr_26500_26647 = state_26496__$1;
(statearr_26500_26647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26497 === (5))){
var state_26496__$1 = state_26496;
var statearr_26501_26648 = state_26496__$1;
(statearr_26501_26648[(2)] = null);

(statearr_26501_26648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26497 === (6))){
var state_26496__$1 = state_26496;
var statearr_26502_26649 = state_26496__$1;
(statearr_26502_26649[(2)] = null);

(statearr_26502_26649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26497 === (7))){
var inst_26492 = (state_26496[(2)]);
var state_26496__$1 = state_26496;
var statearr_26503_26650 = state_26496__$1;
(statearr_26503_26650[(2)] = inst_26492);

(statearr_26503_26650[(1)] = (3));


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
});})(__26640,c__26301__auto___26644,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async))
;
return ((function (__26640,switch__26206__auto__,c__26301__auto___26644,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0 = (function (){
var statearr_26504 = [null,null,null,null,null,null,null];
(statearr_26504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__);

(statearr_26504[(1)] = (1));

return statearr_26504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1 = (function (state_26496){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26505){if((e26505 instanceof Object)){
var ex__26210__auto__ = e26505;
var statearr_26506_26651 = state_26496;
(statearr_26506_26651[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26652 = state_26496;
state_26496 = G__26652;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = function(state_26496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1.call(this,state_26496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__;
})()
;})(__26640,switch__26206__auto__,c__26301__auto___26644,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async))
})();
var state__26303__auto__ = (function (){var statearr_26507 = f__26302__auto__.call(null);
(statearr_26507[(6)] = c__26301__auto___26644);

return statearr_26507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(__26640,c__26301__auto___26644,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async))
);


break;
case "async":
var c__26301__auto___26653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26640,c__26301__auto___26653,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (__26640,c__26301__auto___26653,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async){
return (function (state_26520){
var state_val_26521 = (state_26520[(1)]);
if((state_val_26521 === (1))){
var state_26520__$1 = state_26520;
var statearr_26522_26654 = state_26520__$1;
(statearr_26522_26654[(2)] = null);

(statearr_26522_26654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (2))){
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26520__$1,(4),jobs);
} else {
if((state_val_26521 === (3))){
var inst_26518 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26520__$1,inst_26518);
} else {
if((state_val_26521 === (4))){
var inst_26510 = (state_26520[(2)]);
var inst_26511 = async.call(null,inst_26510);
var state_26520__$1 = state_26520;
if(cljs.core.truth_(inst_26511)){
var statearr_26523_26655 = state_26520__$1;
(statearr_26523_26655[(1)] = (5));

} else {
var statearr_26524_26656 = state_26520__$1;
(statearr_26524_26656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (5))){
var state_26520__$1 = state_26520;
var statearr_26525_26657 = state_26520__$1;
(statearr_26525_26657[(2)] = null);

(statearr_26525_26657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (6))){
var state_26520__$1 = state_26520;
var statearr_26526_26658 = state_26520__$1;
(statearr_26526_26658[(2)] = null);

(statearr_26526_26658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (7))){
var inst_26516 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
var statearr_26527_26659 = state_26520__$1;
(statearr_26527_26659[(2)] = inst_26516);

(statearr_26527_26659[(1)] = (3));


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
});})(__26640,c__26301__auto___26653,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async))
;
return ((function (__26640,switch__26206__auto__,c__26301__auto___26653,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0 = (function (){
var statearr_26528 = [null,null,null,null,null,null,null];
(statearr_26528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__);

(statearr_26528[(1)] = (1));

return statearr_26528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1 = (function (state_26520){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26529){if((e26529 instanceof Object)){
var ex__26210__auto__ = e26529;
var statearr_26530_26660 = state_26520;
(statearr_26530_26660[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26661 = state_26520;
state_26520 = G__26661;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = function(state_26520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1.call(this,state_26520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__;
})()
;})(__26640,switch__26206__auto__,c__26301__auto___26653,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async))
})();
var state__26303__auto__ = (function (){var statearr_26531 = f__26302__auto__.call(null);
(statearr_26531[(6)] = c__26301__auto___26653);

return statearr_26531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(__26640,c__26301__auto___26653,G__26483_26641,G__26483_26642__$1,n__4607__auto___26639,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26483_26642__$1)].join('')));

}

var G__26662 = (__26640 + (1));
__26640 = G__26662;
continue;
} else {
}
break;
}

var c__26301__auto___26663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___26663,jobs,results,process,async){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___26663,jobs,results,process,async){
return (function (state_26553){
var state_val_26554 = (state_26553[(1)]);
if((state_val_26554 === (7))){
var inst_26549 = (state_26553[(2)]);
var state_26553__$1 = state_26553;
var statearr_26555_26664 = state_26553__$1;
(statearr_26555_26664[(2)] = inst_26549);

(statearr_26555_26664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (1))){
var state_26553__$1 = state_26553;
var statearr_26556_26665 = state_26553__$1;
(statearr_26556_26665[(2)] = null);

(statearr_26556_26665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (4))){
var inst_26534 = (state_26553[(7)]);
var inst_26534__$1 = (state_26553[(2)]);
var inst_26535 = (inst_26534__$1 == null);
var state_26553__$1 = (function (){var statearr_26557 = state_26553;
(statearr_26557[(7)] = inst_26534__$1);

return statearr_26557;
})();
if(cljs.core.truth_(inst_26535)){
var statearr_26558_26666 = state_26553__$1;
(statearr_26558_26666[(1)] = (5));

} else {
var statearr_26559_26667 = state_26553__$1;
(statearr_26559_26667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (6))){
var inst_26534 = (state_26553[(7)]);
var inst_26539 = (state_26553[(8)]);
var inst_26539__$1 = cljs.core.async.chan.call(null,(1));
var inst_26540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26541 = [inst_26534,inst_26539__$1];
var inst_26542 = (new cljs.core.PersistentVector(null,2,(5),inst_26540,inst_26541,null));
var state_26553__$1 = (function (){var statearr_26560 = state_26553;
(statearr_26560[(8)] = inst_26539__$1);

return statearr_26560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26553__$1,(8),jobs,inst_26542);
} else {
if((state_val_26554 === (3))){
var inst_26551 = (state_26553[(2)]);
var state_26553__$1 = state_26553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26553__$1,inst_26551);
} else {
if((state_val_26554 === (2))){
var state_26553__$1 = state_26553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26553__$1,(4),from);
} else {
if((state_val_26554 === (9))){
var inst_26546 = (state_26553[(2)]);
var state_26553__$1 = (function (){var statearr_26561 = state_26553;
(statearr_26561[(9)] = inst_26546);

return statearr_26561;
})();
var statearr_26562_26668 = state_26553__$1;
(statearr_26562_26668[(2)] = null);

(statearr_26562_26668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (5))){
var inst_26537 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26553__$1 = state_26553;
var statearr_26563_26669 = state_26553__$1;
(statearr_26563_26669[(2)] = inst_26537);

(statearr_26563_26669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26554 === (8))){
var inst_26539 = (state_26553[(8)]);
var inst_26544 = (state_26553[(2)]);
var state_26553__$1 = (function (){var statearr_26564 = state_26553;
(statearr_26564[(10)] = inst_26544);

return statearr_26564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26553__$1,(9),results,inst_26539);
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
});})(c__26301__auto___26663,jobs,results,process,async))
;
return ((function (switch__26206__auto__,c__26301__auto___26663,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0 = (function (){
var statearr_26565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__);

(statearr_26565[(1)] = (1));

return statearr_26565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1 = (function (state_26553){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26566){if((e26566 instanceof Object)){
var ex__26210__auto__ = e26566;
var statearr_26567_26670 = state_26553;
(statearr_26567_26670[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26671 = state_26553;
state_26553 = G__26671;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = function(state_26553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1.call(this,state_26553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___26663,jobs,results,process,async))
})();
var state__26303__auto__ = (function (){var statearr_26568 = f__26302__auto__.call(null);
(statearr_26568[(6)] = c__26301__auto___26663);

return statearr_26568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___26663,jobs,results,process,async))
);


var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__,jobs,results,process,async){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__,jobs,results,process,async){
return (function (state_26606){
var state_val_26607 = (state_26606[(1)]);
if((state_val_26607 === (7))){
var inst_26602 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26608_26672 = state_26606__$1;
(statearr_26608_26672[(2)] = inst_26602);

(statearr_26608_26672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (20))){
var state_26606__$1 = state_26606;
var statearr_26609_26673 = state_26606__$1;
(statearr_26609_26673[(2)] = null);

(statearr_26609_26673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (1))){
var state_26606__$1 = state_26606;
var statearr_26610_26674 = state_26606__$1;
(statearr_26610_26674[(2)] = null);

(statearr_26610_26674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (4))){
var inst_26571 = (state_26606[(7)]);
var inst_26571__$1 = (state_26606[(2)]);
var inst_26572 = (inst_26571__$1 == null);
var state_26606__$1 = (function (){var statearr_26611 = state_26606;
(statearr_26611[(7)] = inst_26571__$1);

return statearr_26611;
})();
if(cljs.core.truth_(inst_26572)){
var statearr_26612_26675 = state_26606__$1;
(statearr_26612_26675[(1)] = (5));

} else {
var statearr_26613_26676 = state_26606__$1;
(statearr_26613_26676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (15))){
var inst_26584 = (state_26606[(8)]);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26606__$1,(18),to,inst_26584);
} else {
if((state_val_26607 === (21))){
var inst_26597 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26614_26677 = state_26606__$1;
(statearr_26614_26677[(2)] = inst_26597);

(statearr_26614_26677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (13))){
var inst_26599 = (state_26606[(2)]);
var state_26606__$1 = (function (){var statearr_26615 = state_26606;
(statearr_26615[(9)] = inst_26599);

return statearr_26615;
})();
var statearr_26616_26678 = state_26606__$1;
(statearr_26616_26678[(2)] = null);

(statearr_26616_26678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (6))){
var inst_26571 = (state_26606[(7)]);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26606__$1,(11),inst_26571);
} else {
if((state_val_26607 === (17))){
var inst_26592 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
if(cljs.core.truth_(inst_26592)){
var statearr_26617_26679 = state_26606__$1;
(statearr_26617_26679[(1)] = (19));

} else {
var statearr_26618_26680 = state_26606__$1;
(statearr_26618_26680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (3))){
var inst_26604 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26606__$1,inst_26604);
} else {
if((state_val_26607 === (12))){
var inst_26581 = (state_26606[(10)]);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26606__$1,(14),inst_26581);
} else {
if((state_val_26607 === (2))){
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26606__$1,(4),results);
} else {
if((state_val_26607 === (19))){
var state_26606__$1 = state_26606;
var statearr_26619_26681 = state_26606__$1;
(statearr_26619_26681[(2)] = null);

(statearr_26619_26681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (11))){
var inst_26581 = (state_26606[(2)]);
var state_26606__$1 = (function (){var statearr_26620 = state_26606;
(statearr_26620[(10)] = inst_26581);

return statearr_26620;
})();
var statearr_26621_26682 = state_26606__$1;
(statearr_26621_26682[(2)] = null);

(statearr_26621_26682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (9))){
var state_26606__$1 = state_26606;
var statearr_26622_26683 = state_26606__$1;
(statearr_26622_26683[(2)] = null);

(statearr_26622_26683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (5))){
var state_26606__$1 = state_26606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26623_26684 = state_26606__$1;
(statearr_26623_26684[(1)] = (8));

} else {
var statearr_26624_26685 = state_26606__$1;
(statearr_26624_26685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (14))){
var inst_26586 = (state_26606[(11)]);
var inst_26584 = (state_26606[(8)]);
var inst_26584__$1 = (state_26606[(2)]);
var inst_26585 = (inst_26584__$1 == null);
var inst_26586__$1 = cljs.core.not.call(null,inst_26585);
var state_26606__$1 = (function (){var statearr_26625 = state_26606;
(statearr_26625[(11)] = inst_26586__$1);

(statearr_26625[(8)] = inst_26584__$1);

return statearr_26625;
})();
if(inst_26586__$1){
var statearr_26626_26686 = state_26606__$1;
(statearr_26626_26686[(1)] = (15));

} else {
var statearr_26627_26687 = state_26606__$1;
(statearr_26627_26687[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (16))){
var inst_26586 = (state_26606[(11)]);
var state_26606__$1 = state_26606;
var statearr_26628_26688 = state_26606__$1;
(statearr_26628_26688[(2)] = inst_26586);

(statearr_26628_26688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (10))){
var inst_26578 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26629_26689 = state_26606__$1;
(statearr_26629_26689[(2)] = inst_26578);

(statearr_26629_26689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (18))){
var inst_26589 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26630_26690 = state_26606__$1;
(statearr_26630_26690[(2)] = inst_26589);

(statearr_26630_26690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (8))){
var inst_26575 = cljs.core.async.close_BANG_.call(null,to);
var state_26606__$1 = state_26606;
var statearr_26631_26691 = state_26606__$1;
(statearr_26631_26691[(2)] = inst_26575);

(statearr_26631_26691[(1)] = (10));


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
});})(c__26301__auto__,jobs,results,process,async))
;
return ((function (switch__26206__auto__,c__26301__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0 = (function (){
var statearr_26632 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__);

(statearr_26632[(1)] = (1));

return statearr_26632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1 = (function (state_26606){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26633){if((e26633 instanceof Object)){
var ex__26210__auto__ = e26633;
var statearr_26634_26692 = state_26606;
(statearr_26634_26692[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26693 = state_26606;
state_26606 = G__26693;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__ = function(state_26606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1.call(this,state_26606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__,jobs,results,process,async))
})();
var state__26303__auto__ = (function (){var statearr_26635 = f__26302__auto__.call(null);
(statearr_26635[(6)] = c__26301__auto__);

return statearr_26635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__,jobs,results,process,async))
);

return c__26301__auto__;
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
var G__26695 = arguments.length;
switch (G__26695) {
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
var G__26698 = arguments.length;
switch (G__26698) {
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
var G__26701 = arguments.length;
switch (G__26701) {
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
var c__26301__auto___26750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___26750,tc,fc){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___26750,tc,fc){
return (function (state_26727){
var state_val_26728 = (state_26727[(1)]);
if((state_val_26728 === (7))){
var inst_26723 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26729_26751 = state_26727__$1;
(statearr_26729_26751[(2)] = inst_26723);

(statearr_26729_26751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (1))){
var state_26727__$1 = state_26727;
var statearr_26730_26752 = state_26727__$1;
(statearr_26730_26752[(2)] = null);

(statearr_26730_26752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (4))){
var inst_26704 = (state_26727[(7)]);
var inst_26704__$1 = (state_26727[(2)]);
var inst_26705 = (inst_26704__$1 == null);
var state_26727__$1 = (function (){var statearr_26731 = state_26727;
(statearr_26731[(7)] = inst_26704__$1);

return statearr_26731;
})();
if(cljs.core.truth_(inst_26705)){
var statearr_26732_26753 = state_26727__$1;
(statearr_26732_26753[(1)] = (5));

} else {
var statearr_26733_26754 = state_26727__$1;
(statearr_26733_26754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (13))){
var state_26727__$1 = state_26727;
var statearr_26734_26755 = state_26727__$1;
(statearr_26734_26755[(2)] = null);

(statearr_26734_26755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (6))){
var inst_26704 = (state_26727[(7)]);
var inst_26710 = p.call(null,inst_26704);
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26710)){
var statearr_26735_26756 = state_26727__$1;
(statearr_26735_26756[(1)] = (9));

} else {
var statearr_26736_26757 = state_26727__$1;
(statearr_26736_26757[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (3))){
var inst_26725 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26727__$1,inst_26725);
} else {
if((state_val_26728 === (12))){
var state_26727__$1 = state_26727;
var statearr_26737_26758 = state_26727__$1;
(statearr_26737_26758[(2)] = null);

(statearr_26737_26758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (2))){
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26727__$1,(4),ch);
} else {
if((state_val_26728 === (11))){
var inst_26704 = (state_26727[(7)]);
var inst_26714 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26727__$1,(8),inst_26714,inst_26704);
} else {
if((state_val_26728 === (9))){
var state_26727__$1 = state_26727;
var statearr_26738_26759 = state_26727__$1;
(statearr_26738_26759[(2)] = tc);

(statearr_26738_26759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (5))){
var inst_26707 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26708 = cljs.core.async.close_BANG_.call(null,fc);
var state_26727__$1 = (function (){var statearr_26739 = state_26727;
(statearr_26739[(8)] = inst_26707);

return statearr_26739;
})();
var statearr_26740_26760 = state_26727__$1;
(statearr_26740_26760[(2)] = inst_26708);

(statearr_26740_26760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (14))){
var inst_26721 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26741_26761 = state_26727__$1;
(statearr_26741_26761[(2)] = inst_26721);

(statearr_26741_26761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (10))){
var state_26727__$1 = state_26727;
var statearr_26742_26762 = state_26727__$1;
(statearr_26742_26762[(2)] = fc);

(statearr_26742_26762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (8))){
var inst_26716 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26716)){
var statearr_26743_26763 = state_26727__$1;
(statearr_26743_26763[(1)] = (12));

} else {
var statearr_26744_26764 = state_26727__$1;
(statearr_26744_26764[(1)] = (13));

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
});})(c__26301__auto___26750,tc,fc))
;
return ((function (switch__26206__auto__,c__26301__auto___26750,tc,fc){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_26745 = [null,null,null,null,null,null,null,null,null];
(statearr_26745[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_26745[(1)] = (1));

return statearr_26745;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_26727){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26746){if((e26746 instanceof Object)){
var ex__26210__auto__ = e26746;
var statearr_26747_26765 = state_26727;
(statearr_26747_26765[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26766 = state_26727;
state_26727 = G__26766;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_26727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_26727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___26750,tc,fc))
})();
var state__26303__auto__ = (function (){var statearr_26748 = f__26302__auto__.call(null);
(statearr_26748[(6)] = c__26301__auto___26750);

return statearr_26748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___26750,tc,fc))
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
var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__){
return (function (state_26787){
var state_val_26788 = (state_26787[(1)]);
if((state_val_26788 === (7))){
var inst_26783 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
var statearr_26789_26807 = state_26787__$1;
(statearr_26789_26807[(2)] = inst_26783);

(statearr_26789_26807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (1))){
var inst_26767 = init;
var state_26787__$1 = (function (){var statearr_26790 = state_26787;
(statearr_26790[(7)] = inst_26767);

return statearr_26790;
})();
var statearr_26791_26808 = state_26787__$1;
(statearr_26791_26808[(2)] = null);

(statearr_26791_26808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (4))){
var inst_26770 = (state_26787[(8)]);
var inst_26770__$1 = (state_26787[(2)]);
var inst_26771 = (inst_26770__$1 == null);
var state_26787__$1 = (function (){var statearr_26792 = state_26787;
(statearr_26792[(8)] = inst_26770__$1);

return statearr_26792;
})();
if(cljs.core.truth_(inst_26771)){
var statearr_26793_26809 = state_26787__$1;
(statearr_26793_26809[(1)] = (5));

} else {
var statearr_26794_26810 = state_26787__$1;
(statearr_26794_26810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (6))){
var inst_26770 = (state_26787[(8)]);
var inst_26767 = (state_26787[(7)]);
var inst_26774 = (state_26787[(9)]);
var inst_26774__$1 = f.call(null,inst_26767,inst_26770);
var inst_26775 = cljs.core.reduced_QMARK_.call(null,inst_26774__$1);
var state_26787__$1 = (function (){var statearr_26795 = state_26787;
(statearr_26795[(9)] = inst_26774__$1);

return statearr_26795;
})();
if(inst_26775){
var statearr_26796_26811 = state_26787__$1;
(statearr_26796_26811[(1)] = (8));

} else {
var statearr_26797_26812 = state_26787__$1;
(statearr_26797_26812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (3))){
var inst_26785 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26787__$1,inst_26785);
} else {
if((state_val_26788 === (2))){
var state_26787__$1 = state_26787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26787__$1,(4),ch);
} else {
if((state_val_26788 === (9))){
var inst_26774 = (state_26787[(9)]);
var inst_26767 = inst_26774;
var state_26787__$1 = (function (){var statearr_26798 = state_26787;
(statearr_26798[(7)] = inst_26767);

return statearr_26798;
})();
var statearr_26799_26813 = state_26787__$1;
(statearr_26799_26813[(2)] = null);

(statearr_26799_26813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (5))){
var inst_26767 = (state_26787[(7)]);
var state_26787__$1 = state_26787;
var statearr_26800_26814 = state_26787__$1;
(statearr_26800_26814[(2)] = inst_26767);

(statearr_26800_26814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (10))){
var inst_26781 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
var statearr_26801_26815 = state_26787__$1;
(statearr_26801_26815[(2)] = inst_26781);

(statearr_26801_26815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (8))){
var inst_26774 = (state_26787[(9)]);
var inst_26777 = cljs.core.deref.call(null,inst_26774);
var state_26787__$1 = state_26787;
var statearr_26802_26816 = state_26787__$1;
(statearr_26802_26816[(2)] = inst_26777);

(statearr_26802_26816[(1)] = (10));


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
});})(c__26301__auto__))
;
return ((function (switch__26206__auto__,c__26301__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26207__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26207__auto____0 = (function (){
var statearr_26803 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26803[(0)] = cljs$core$async$reduce_$_state_machine__26207__auto__);

(statearr_26803[(1)] = (1));

return statearr_26803;
});
var cljs$core$async$reduce_$_state_machine__26207__auto____1 = (function (state_26787){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26804){if((e26804 instanceof Object)){
var ex__26210__auto__ = e26804;
var statearr_26805_26817 = state_26787;
(statearr_26805_26817[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26818 = state_26787;
state_26787 = G__26818;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26207__auto__ = function(state_26787){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26207__auto____1.call(this,state_26787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26207__auto____0;
cljs$core$async$reduce_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26207__auto____1;
return cljs$core$async$reduce_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__))
})();
var state__26303__auto__ = (function (){var statearr_26806 = f__26302__auto__.call(null);
(statearr_26806[(6)] = c__26301__auto__);

return statearr_26806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__))
);

return c__26301__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__,f__$1){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__,f__$1){
return (function (state_26824){
var state_val_26825 = (state_26824[(1)]);
if((state_val_26825 === (1))){
var inst_26819 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26824__$1 = state_26824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26824__$1,(2),inst_26819);
} else {
if((state_val_26825 === (2))){
var inst_26821 = (state_26824[(2)]);
var inst_26822 = f__$1.call(null,inst_26821);
var state_26824__$1 = state_26824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26824__$1,inst_26822);
} else {
return null;
}
}
});})(c__26301__auto__,f__$1))
;
return ((function (switch__26206__auto__,c__26301__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26207__auto____0 = (function (){
var statearr_26826 = [null,null,null,null,null,null,null];
(statearr_26826[(0)] = cljs$core$async$transduce_$_state_machine__26207__auto__);

(statearr_26826[(1)] = (1));

return statearr_26826;
});
var cljs$core$async$transduce_$_state_machine__26207__auto____1 = (function (state_26824){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26827){if((e26827 instanceof Object)){
var ex__26210__auto__ = e26827;
var statearr_26828_26830 = state_26824;
(statearr_26828_26830[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26831 = state_26824;
state_26824 = G__26831;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26207__auto__ = function(state_26824){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26207__auto____1.call(this,state_26824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26207__auto____0;
cljs$core$async$transduce_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26207__auto____1;
return cljs$core$async$transduce_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__,f__$1))
})();
var state__26303__auto__ = (function (){var statearr_26829 = f__26302__auto__.call(null);
(statearr_26829[(6)] = c__26301__auto__);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__,f__$1))
);

return c__26301__auto__;
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
var G__26833 = arguments.length;
switch (G__26833) {
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
var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__){
return (function (state_26858){
var state_val_26859 = (state_26858[(1)]);
if((state_val_26859 === (7))){
var inst_26840 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
var statearr_26860_26881 = state_26858__$1;
(statearr_26860_26881[(2)] = inst_26840);

(statearr_26860_26881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (1))){
var inst_26834 = cljs.core.seq.call(null,coll);
var inst_26835 = inst_26834;
var state_26858__$1 = (function (){var statearr_26861 = state_26858;
(statearr_26861[(7)] = inst_26835);

return statearr_26861;
})();
var statearr_26862_26882 = state_26858__$1;
(statearr_26862_26882[(2)] = null);

(statearr_26862_26882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (4))){
var inst_26835 = (state_26858[(7)]);
var inst_26838 = cljs.core.first.call(null,inst_26835);
var state_26858__$1 = state_26858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26858__$1,(7),ch,inst_26838);
} else {
if((state_val_26859 === (13))){
var inst_26852 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
var statearr_26863_26883 = state_26858__$1;
(statearr_26863_26883[(2)] = inst_26852);

(statearr_26863_26883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (6))){
var inst_26843 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
if(cljs.core.truth_(inst_26843)){
var statearr_26864_26884 = state_26858__$1;
(statearr_26864_26884[(1)] = (8));

} else {
var statearr_26865_26885 = state_26858__$1;
(statearr_26865_26885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (3))){
var inst_26856 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26858__$1,inst_26856);
} else {
if((state_val_26859 === (12))){
var state_26858__$1 = state_26858;
var statearr_26866_26886 = state_26858__$1;
(statearr_26866_26886[(2)] = null);

(statearr_26866_26886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (2))){
var inst_26835 = (state_26858[(7)]);
var state_26858__$1 = state_26858;
if(cljs.core.truth_(inst_26835)){
var statearr_26867_26887 = state_26858__$1;
(statearr_26867_26887[(1)] = (4));

} else {
var statearr_26868_26888 = state_26858__$1;
(statearr_26868_26888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (11))){
var inst_26849 = cljs.core.async.close_BANG_.call(null,ch);
var state_26858__$1 = state_26858;
var statearr_26869_26889 = state_26858__$1;
(statearr_26869_26889[(2)] = inst_26849);

(statearr_26869_26889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (9))){
var state_26858__$1 = state_26858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26870_26890 = state_26858__$1;
(statearr_26870_26890[(1)] = (11));

} else {
var statearr_26871_26891 = state_26858__$1;
(statearr_26871_26891[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (5))){
var inst_26835 = (state_26858[(7)]);
var state_26858__$1 = state_26858;
var statearr_26872_26892 = state_26858__$1;
(statearr_26872_26892[(2)] = inst_26835);

(statearr_26872_26892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (10))){
var inst_26854 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
var statearr_26873_26893 = state_26858__$1;
(statearr_26873_26893[(2)] = inst_26854);

(statearr_26873_26893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (8))){
var inst_26835 = (state_26858[(7)]);
var inst_26845 = cljs.core.next.call(null,inst_26835);
var inst_26835__$1 = inst_26845;
var state_26858__$1 = (function (){var statearr_26874 = state_26858;
(statearr_26874[(7)] = inst_26835__$1);

return statearr_26874;
})();
var statearr_26875_26894 = state_26858__$1;
(statearr_26875_26894[(2)] = null);

(statearr_26875_26894[(1)] = (2));


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
});})(c__26301__auto__))
;
return ((function (switch__26206__auto__,c__26301__auto__){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_26876 = [null,null,null,null,null,null,null,null];
(statearr_26876[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_26876[(1)] = (1));

return statearr_26876;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_26858){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_26858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e26877){if((e26877 instanceof Object)){
var ex__26210__auto__ = e26877;
var statearr_26878_26895 = state_26858;
(statearr_26878_26895[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26896 = state_26858;
state_26858 = G__26896;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_26858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_26858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__))
})();
var state__26303__auto__ = (function (){var statearr_26879 = f__26302__auto__.call(null);
(statearr_26879[(6)] = c__26301__auto__);

return statearr_26879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__))
);

return c__26301__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26897 = (function (ch,cs,meta26898){
this.ch = ch;
this.cs = cs;
this.meta26898 = meta26898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26899,meta26898__$1){
var self__ = this;
var _26899__$1 = this;
return (new cljs.core.async.t_cljs$core$async26897(self__.ch,self__.cs,meta26898__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26899){
var self__ = this;
var _26899__$1 = this;
return self__.meta26898;
});})(cs))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26897.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26898","meta26898",-305443877,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26897";

cljs.core.async.t_cljs$core$async26897.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26897");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26897.
 */
cljs.core.async.__GT_t_cljs$core$async26897 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26897(ch__$1,cs__$1,meta26898){
return (new cljs.core.async.t_cljs$core$async26897(ch__$1,cs__$1,meta26898));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26897(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26301__auto___27119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___27119,cs,m,dchan,dctr,done){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___27119,cs,m,dchan,dctr,done){
return (function (state_27034){
var state_val_27035 = (state_27034[(1)]);
if((state_val_27035 === (7))){
var inst_27030 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27036_27120 = state_27034__$1;
(statearr_27036_27120[(2)] = inst_27030);

(statearr_27036_27120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (20))){
var inst_26933 = (state_27034[(7)]);
var inst_26945 = cljs.core.first.call(null,inst_26933);
var inst_26946 = cljs.core.nth.call(null,inst_26945,(0),null);
var inst_26947 = cljs.core.nth.call(null,inst_26945,(1),null);
var state_27034__$1 = (function (){var statearr_27037 = state_27034;
(statearr_27037[(8)] = inst_26946);

return statearr_27037;
})();
if(cljs.core.truth_(inst_26947)){
var statearr_27038_27121 = state_27034__$1;
(statearr_27038_27121[(1)] = (22));

} else {
var statearr_27039_27122 = state_27034__$1;
(statearr_27039_27122[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (27))){
var inst_26982 = (state_27034[(9)]);
var inst_26975 = (state_27034[(10)]);
var inst_26977 = (state_27034[(11)]);
var inst_26902 = (state_27034[(12)]);
var inst_26982__$1 = cljs.core._nth.call(null,inst_26975,inst_26977);
var inst_26983 = cljs.core.async.put_BANG_.call(null,inst_26982__$1,inst_26902,done);
var state_27034__$1 = (function (){var statearr_27040 = state_27034;
(statearr_27040[(9)] = inst_26982__$1);

return statearr_27040;
})();
if(cljs.core.truth_(inst_26983)){
var statearr_27041_27123 = state_27034__$1;
(statearr_27041_27123[(1)] = (30));

} else {
var statearr_27042_27124 = state_27034__$1;
(statearr_27042_27124[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (1))){
var state_27034__$1 = state_27034;
var statearr_27043_27125 = state_27034__$1;
(statearr_27043_27125[(2)] = null);

(statearr_27043_27125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (24))){
var inst_26933 = (state_27034[(7)]);
var inst_26952 = (state_27034[(2)]);
var inst_26953 = cljs.core.next.call(null,inst_26933);
var inst_26911 = inst_26953;
var inst_26912 = null;
var inst_26913 = (0);
var inst_26914 = (0);
var state_27034__$1 = (function (){var statearr_27044 = state_27034;
(statearr_27044[(13)] = inst_26914);

(statearr_27044[(14)] = inst_26952);

(statearr_27044[(15)] = inst_26912);

(statearr_27044[(16)] = inst_26911);

(statearr_27044[(17)] = inst_26913);

return statearr_27044;
})();
var statearr_27045_27126 = state_27034__$1;
(statearr_27045_27126[(2)] = null);

(statearr_27045_27126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (39))){
var state_27034__$1 = state_27034;
var statearr_27049_27127 = state_27034__$1;
(statearr_27049_27127[(2)] = null);

(statearr_27049_27127[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (4))){
var inst_26902 = (state_27034[(12)]);
var inst_26902__$1 = (state_27034[(2)]);
var inst_26903 = (inst_26902__$1 == null);
var state_27034__$1 = (function (){var statearr_27050 = state_27034;
(statearr_27050[(12)] = inst_26902__$1);

return statearr_27050;
})();
if(cljs.core.truth_(inst_26903)){
var statearr_27051_27128 = state_27034__$1;
(statearr_27051_27128[(1)] = (5));

} else {
var statearr_27052_27129 = state_27034__$1;
(statearr_27052_27129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (15))){
var inst_26914 = (state_27034[(13)]);
var inst_26912 = (state_27034[(15)]);
var inst_26911 = (state_27034[(16)]);
var inst_26913 = (state_27034[(17)]);
var inst_26929 = (state_27034[(2)]);
var inst_26930 = (inst_26914 + (1));
var tmp27046 = inst_26912;
var tmp27047 = inst_26911;
var tmp27048 = inst_26913;
var inst_26911__$1 = tmp27047;
var inst_26912__$1 = tmp27046;
var inst_26913__$1 = tmp27048;
var inst_26914__$1 = inst_26930;
var state_27034__$1 = (function (){var statearr_27053 = state_27034;
(statearr_27053[(13)] = inst_26914__$1);

(statearr_27053[(15)] = inst_26912__$1);

(statearr_27053[(16)] = inst_26911__$1);

(statearr_27053[(17)] = inst_26913__$1);

(statearr_27053[(18)] = inst_26929);

return statearr_27053;
})();
var statearr_27054_27130 = state_27034__$1;
(statearr_27054_27130[(2)] = null);

(statearr_27054_27130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (21))){
var inst_26956 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27058_27131 = state_27034__$1;
(statearr_27058_27131[(2)] = inst_26956);

(statearr_27058_27131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (31))){
var inst_26982 = (state_27034[(9)]);
var inst_26986 = done.call(null,null);
var inst_26987 = cljs.core.async.untap_STAR_.call(null,m,inst_26982);
var state_27034__$1 = (function (){var statearr_27059 = state_27034;
(statearr_27059[(19)] = inst_26986);

return statearr_27059;
})();
var statearr_27060_27132 = state_27034__$1;
(statearr_27060_27132[(2)] = inst_26987);

(statearr_27060_27132[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (32))){
var inst_26974 = (state_27034[(20)]);
var inst_26976 = (state_27034[(21)]);
var inst_26975 = (state_27034[(10)]);
var inst_26977 = (state_27034[(11)]);
var inst_26989 = (state_27034[(2)]);
var inst_26990 = (inst_26977 + (1));
var tmp27055 = inst_26974;
var tmp27056 = inst_26976;
var tmp27057 = inst_26975;
var inst_26974__$1 = tmp27055;
var inst_26975__$1 = tmp27057;
var inst_26976__$1 = tmp27056;
var inst_26977__$1 = inst_26990;
var state_27034__$1 = (function (){var statearr_27061 = state_27034;
(statearr_27061[(20)] = inst_26974__$1);

(statearr_27061[(21)] = inst_26976__$1);

(statearr_27061[(10)] = inst_26975__$1);

(statearr_27061[(11)] = inst_26977__$1);

(statearr_27061[(22)] = inst_26989);

return statearr_27061;
})();
var statearr_27062_27133 = state_27034__$1;
(statearr_27062_27133[(2)] = null);

(statearr_27062_27133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (40))){
var inst_27002 = (state_27034[(23)]);
var inst_27006 = done.call(null,null);
var inst_27007 = cljs.core.async.untap_STAR_.call(null,m,inst_27002);
var state_27034__$1 = (function (){var statearr_27063 = state_27034;
(statearr_27063[(24)] = inst_27006);

return statearr_27063;
})();
var statearr_27064_27134 = state_27034__$1;
(statearr_27064_27134[(2)] = inst_27007);

(statearr_27064_27134[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (33))){
var inst_26993 = (state_27034[(25)]);
var inst_26995 = cljs.core.chunked_seq_QMARK_.call(null,inst_26993);
var state_27034__$1 = state_27034;
if(inst_26995){
var statearr_27065_27135 = state_27034__$1;
(statearr_27065_27135[(1)] = (36));

} else {
var statearr_27066_27136 = state_27034__$1;
(statearr_27066_27136[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (13))){
var inst_26923 = (state_27034[(26)]);
var inst_26926 = cljs.core.async.close_BANG_.call(null,inst_26923);
var state_27034__$1 = state_27034;
var statearr_27067_27137 = state_27034__$1;
(statearr_27067_27137[(2)] = inst_26926);

(statearr_27067_27137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (22))){
var inst_26946 = (state_27034[(8)]);
var inst_26949 = cljs.core.async.close_BANG_.call(null,inst_26946);
var state_27034__$1 = state_27034;
var statearr_27068_27138 = state_27034__$1;
(statearr_27068_27138[(2)] = inst_26949);

(statearr_27068_27138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (36))){
var inst_26993 = (state_27034[(25)]);
var inst_26997 = cljs.core.chunk_first.call(null,inst_26993);
var inst_26998 = cljs.core.chunk_rest.call(null,inst_26993);
var inst_26999 = cljs.core.count.call(null,inst_26997);
var inst_26974 = inst_26998;
var inst_26975 = inst_26997;
var inst_26976 = inst_26999;
var inst_26977 = (0);
var state_27034__$1 = (function (){var statearr_27069 = state_27034;
(statearr_27069[(20)] = inst_26974);

(statearr_27069[(21)] = inst_26976);

(statearr_27069[(10)] = inst_26975);

(statearr_27069[(11)] = inst_26977);

return statearr_27069;
})();
var statearr_27070_27139 = state_27034__$1;
(statearr_27070_27139[(2)] = null);

(statearr_27070_27139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (41))){
var inst_26993 = (state_27034[(25)]);
var inst_27009 = (state_27034[(2)]);
var inst_27010 = cljs.core.next.call(null,inst_26993);
var inst_26974 = inst_27010;
var inst_26975 = null;
var inst_26976 = (0);
var inst_26977 = (0);
var state_27034__$1 = (function (){var statearr_27071 = state_27034;
(statearr_27071[(20)] = inst_26974);

(statearr_27071[(21)] = inst_26976);

(statearr_27071[(10)] = inst_26975);

(statearr_27071[(11)] = inst_26977);

(statearr_27071[(27)] = inst_27009);

return statearr_27071;
})();
var statearr_27072_27140 = state_27034__$1;
(statearr_27072_27140[(2)] = null);

(statearr_27072_27140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (43))){
var state_27034__$1 = state_27034;
var statearr_27073_27141 = state_27034__$1;
(statearr_27073_27141[(2)] = null);

(statearr_27073_27141[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (29))){
var inst_27018 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27074_27142 = state_27034__$1;
(statearr_27074_27142[(2)] = inst_27018);

(statearr_27074_27142[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (44))){
var inst_27027 = (state_27034[(2)]);
var state_27034__$1 = (function (){var statearr_27075 = state_27034;
(statearr_27075[(28)] = inst_27027);

return statearr_27075;
})();
var statearr_27076_27143 = state_27034__$1;
(statearr_27076_27143[(2)] = null);

(statearr_27076_27143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (6))){
var inst_26966 = (state_27034[(29)]);
var inst_26965 = cljs.core.deref.call(null,cs);
var inst_26966__$1 = cljs.core.keys.call(null,inst_26965);
var inst_26967 = cljs.core.count.call(null,inst_26966__$1);
var inst_26968 = cljs.core.reset_BANG_.call(null,dctr,inst_26967);
var inst_26973 = cljs.core.seq.call(null,inst_26966__$1);
var inst_26974 = inst_26973;
var inst_26975 = null;
var inst_26976 = (0);
var inst_26977 = (0);
var state_27034__$1 = (function (){var statearr_27077 = state_27034;
(statearr_27077[(20)] = inst_26974);

(statearr_27077[(21)] = inst_26976);

(statearr_27077[(30)] = inst_26968);

(statearr_27077[(10)] = inst_26975);

(statearr_27077[(11)] = inst_26977);

(statearr_27077[(29)] = inst_26966__$1);

return statearr_27077;
})();
var statearr_27078_27144 = state_27034__$1;
(statearr_27078_27144[(2)] = null);

(statearr_27078_27144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (28))){
var inst_26974 = (state_27034[(20)]);
var inst_26993 = (state_27034[(25)]);
var inst_26993__$1 = cljs.core.seq.call(null,inst_26974);
var state_27034__$1 = (function (){var statearr_27079 = state_27034;
(statearr_27079[(25)] = inst_26993__$1);

return statearr_27079;
})();
if(inst_26993__$1){
var statearr_27080_27145 = state_27034__$1;
(statearr_27080_27145[(1)] = (33));

} else {
var statearr_27081_27146 = state_27034__$1;
(statearr_27081_27146[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (25))){
var inst_26976 = (state_27034[(21)]);
var inst_26977 = (state_27034[(11)]);
var inst_26979 = (inst_26977 < inst_26976);
var inst_26980 = inst_26979;
var state_27034__$1 = state_27034;
if(cljs.core.truth_(inst_26980)){
var statearr_27082_27147 = state_27034__$1;
(statearr_27082_27147[(1)] = (27));

} else {
var statearr_27083_27148 = state_27034__$1;
(statearr_27083_27148[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (34))){
var state_27034__$1 = state_27034;
var statearr_27084_27149 = state_27034__$1;
(statearr_27084_27149[(2)] = null);

(statearr_27084_27149[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (17))){
var state_27034__$1 = state_27034;
var statearr_27085_27150 = state_27034__$1;
(statearr_27085_27150[(2)] = null);

(statearr_27085_27150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (3))){
var inst_27032 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27034__$1,inst_27032);
} else {
if((state_val_27035 === (12))){
var inst_26961 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27086_27151 = state_27034__$1;
(statearr_27086_27151[(2)] = inst_26961);

(statearr_27086_27151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (2))){
var state_27034__$1 = state_27034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27034__$1,(4),ch);
} else {
if((state_val_27035 === (23))){
var state_27034__$1 = state_27034;
var statearr_27087_27152 = state_27034__$1;
(statearr_27087_27152[(2)] = null);

(statearr_27087_27152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (35))){
var inst_27016 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27088_27153 = state_27034__$1;
(statearr_27088_27153[(2)] = inst_27016);

(statearr_27088_27153[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (19))){
var inst_26933 = (state_27034[(7)]);
var inst_26937 = cljs.core.chunk_first.call(null,inst_26933);
var inst_26938 = cljs.core.chunk_rest.call(null,inst_26933);
var inst_26939 = cljs.core.count.call(null,inst_26937);
var inst_26911 = inst_26938;
var inst_26912 = inst_26937;
var inst_26913 = inst_26939;
var inst_26914 = (0);
var state_27034__$1 = (function (){var statearr_27089 = state_27034;
(statearr_27089[(13)] = inst_26914);

(statearr_27089[(15)] = inst_26912);

(statearr_27089[(16)] = inst_26911);

(statearr_27089[(17)] = inst_26913);

return statearr_27089;
})();
var statearr_27090_27154 = state_27034__$1;
(statearr_27090_27154[(2)] = null);

(statearr_27090_27154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (11))){
var inst_26933 = (state_27034[(7)]);
var inst_26911 = (state_27034[(16)]);
var inst_26933__$1 = cljs.core.seq.call(null,inst_26911);
var state_27034__$1 = (function (){var statearr_27091 = state_27034;
(statearr_27091[(7)] = inst_26933__$1);

return statearr_27091;
})();
if(inst_26933__$1){
var statearr_27092_27155 = state_27034__$1;
(statearr_27092_27155[(1)] = (16));

} else {
var statearr_27093_27156 = state_27034__$1;
(statearr_27093_27156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (9))){
var inst_26963 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27094_27157 = state_27034__$1;
(statearr_27094_27157[(2)] = inst_26963);

(statearr_27094_27157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (5))){
var inst_26909 = cljs.core.deref.call(null,cs);
var inst_26910 = cljs.core.seq.call(null,inst_26909);
var inst_26911 = inst_26910;
var inst_26912 = null;
var inst_26913 = (0);
var inst_26914 = (0);
var state_27034__$1 = (function (){var statearr_27095 = state_27034;
(statearr_27095[(13)] = inst_26914);

(statearr_27095[(15)] = inst_26912);

(statearr_27095[(16)] = inst_26911);

(statearr_27095[(17)] = inst_26913);

return statearr_27095;
})();
var statearr_27096_27158 = state_27034__$1;
(statearr_27096_27158[(2)] = null);

(statearr_27096_27158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (14))){
var state_27034__$1 = state_27034;
var statearr_27097_27159 = state_27034__$1;
(statearr_27097_27159[(2)] = null);

(statearr_27097_27159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (45))){
var inst_27024 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27098_27160 = state_27034__$1;
(statearr_27098_27160[(2)] = inst_27024);

(statearr_27098_27160[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (26))){
var inst_26966 = (state_27034[(29)]);
var inst_27020 = (state_27034[(2)]);
var inst_27021 = cljs.core.seq.call(null,inst_26966);
var state_27034__$1 = (function (){var statearr_27099 = state_27034;
(statearr_27099[(31)] = inst_27020);

return statearr_27099;
})();
if(inst_27021){
var statearr_27100_27161 = state_27034__$1;
(statearr_27100_27161[(1)] = (42));

} else {
var statearr_27101_27162 = state_27034__$1;
(statearr_27101_27162[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (16))){
var inst_26933 = (state_27034[(7)]);
var inst_26935 = cljs.core.chunked_seq_QMARK_.call(null,inst_26933);
var state_27034__$1 = state_27034;
if(inst_26935){
var statearr_27102_27163 = state_27034__$1;
(statearr_27102_27163[(1)] = (19));

} else {
var statearr_27103_27164 = state_27034__$1;
(statearr_27103_27164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (38))){
var inst_27013 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27104_27165 = state_27034__$1;
(statearr_27104_27165[(2)] = inst_27013);

(statearr_27104_27165[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (30))){
var state_27034__$1 = state_27034;
var statearr_27105_27166 = state_27034__$1;
(statearr_27105_27166[(2)] = null);

(statearr_27105_27166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (10))){
var inst_26914 = (state_27034[(13)]);
var inst_26912 = (state_27034[(15)]);
var inst_26922 = cljs.core._nth.call(null,inst_26912,inst_26914);
var inst_26923 = cljs.core.nth.call(null,inst_26922,(0),null);
var inst_26924 = cljs.core.nth.call(null,inst_26922,(1),null);
var state_27034__$1 = (function (){var statearr_27106 = state_27034;
(statearr_27106[(26)] = inst_26923);

return statearr_27106;
})();
if(cljs.core.truth_(inst_26924)){
var statearr_27107_27167 = state_27034__$1;
(statearr_27107_27167[(1)] = (13));

} else {
var statearr_27108_27168 = state_27034__$1;
(statearr_27108_27168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (18))){
var inst_26959 = (state_27034[(2)]);
var state_27034__$1 = state_27034;
var statearr_27109_27169 = state_27034__$1;
(statearr_27109_27169[(2)] = inst_26959);

(statearr_27109_27169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (42))){
var state_27034__$1 = state_27034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27034__$1,(45),dchan);
} else {
if((state_val_27035 === (37))){
var inst_27002 = (state_27034[(23)]);
var inst_26902 = (state_27034[(12)]);
var inst_26993 = (state_27034[(25)]);
var inst_27002__$1 = cljs.core.first.call(null,inst_26993);
var inst_27003 = cljs.core.async.put_BANG_.call(null,inst_27002__$1,inst_26902,done);
var state_27034__$1 = (function (){var statearr_27110 = state_27034;
(statearr_27110[(23)] = inst_27002__$1);

return statearr_27110;
})();
if(cljs.core.truth_(inst_27003)){
var statearr_27111_27170 = state_27034__$1;
(statearr_27111_27170[(1)] = (39));

} else {
var statearr_27112_27171 = state_27034__$1;
(statearr_27112_27171[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27035 === (8))){
var inst_26914 = (state_27034[(13)]);
var inst_26913 = (state_27034[(17)]);
var inst_26916 = (inst_26914 < inst_26913);
var inst_26917 = inst_26916;
var state_27034__$1 = state_27034;
if(cljs.core.truth_(inst_26917)){
var statearr_27113_27172 = state_27034__$1;
(statearr_27113_27172[(1)] = (10));

} else {
var statearr_27114_27173 = state_27034__$1;
(statearr_27114_27173[(1)] = (11));

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
});})(c__26301__auto___27119,cs,m,dchan,dctr,done))
;
return ((function (switch__26206__auto__,c__26301__auto___27119,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26207__auto__ = null;
var cljs$core$async$mult_$_state_machine__26207__auto____0 = (function (){
var statearr_27115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27115[(0)] = cljs$core$async$mult_$_state_machine__26207__auto__);

(statearr_27115[(1)] = (1));

return statearr_27115;
});
var cljs$core$async$mult_$_state_machine__26207__auto____1 = (function (state_27034){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_27034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e27116){if((e27116 instanceof Object)){
var ex__26210__auto__ = e27116;
var statearr_27117_27174 = state_27034;
(statearr_27117_27174[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27175 = state_27034;
state_27034 = G__27175;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26207__auto__ = function(state_27034){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26207__auto____1.call(this,state_27034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26207__auto____0;
cljs$core$async$mult_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26207__auto____1;
return cljs$core$async$mult_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___27119,cs,m,dchan,dctr,done))
})();
var state__26303__auto__ = (function (){var statearr_27118 = f__26302__auto__.call(null);
(statearr_27118[(6)] = c__26301__auto___27119);

return statearr_27118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___27119,cs,m,dchan,dctr,done))
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
var G__27177 = arguments.length;
switch (G__27177) {
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27189 = arguments.length;
var i__4731__auto___27190 = (0);
while(true){
if((i__4731__auto___27190 < len__4730__auto___27189)){
args__4736__auto__.push((arguments[i__4731__auto___27190]));

var G__27191 = (i__4731__auto___27190 + (1));
i__4731__auto___27190 = G__27191;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27183){
var map__27184 = p__27183;
var map__27184__$1 = (((((!((map__27184 == null))))?(((((map__27184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27184):map__27184);
var opts = map__27184__$1;
var statearr_27186_27192 = state;
(statearr_27186_27192[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__27184,map__27184__$1,opts){
return (function (val){
var statearr_27187_27193 = state;
(statearr_27187_27193[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27184,map__27184__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27188_27194 = state;
(statearr_27188_27194[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27179){
var G__27180 = cljs.core.first.call(null,seq27179);
var seq27179__$1 = cljs.core.next.call(null,seq27179);
var G__27181 = cljs.core.first.call(null,seq27179__$1);
var seq27179__$2 = cljs.core.next.call(null,seq27179__$1);
var G__27182 = cljs.core.first.call(null,seq27179__$2);
var seq27179__$3 = cljs.core.next.call(null,seq27179__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27180,G__27181,G__27182,seq27179__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27195 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27196){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27196 = meta27196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27197,meta27196__$1){
var self__ = this;
var _27197__$1 = this;
return (new cljs.core.async.t_cljs$core$async27195(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27196__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27197){
var self__ = this;
var _27197__$1 = this;
return self__.meta27196;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27196","meta27196",909689159,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27195";

cljs.core.async.t_cljs$core$async27195.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27195");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27195.
 */
cljs.core.async.__GT_t_cljs$core$async27195 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27195(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27196){
return (new cljs.core.async.t_cljs$core$async27195(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27196));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27195(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26301__auto___27359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___27359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___27359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27299){
var state_val_27300 = (state_27299[(1)]);
if((state_val_27300 === (7))){
var inst_27214 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27301_27360 = state_27299__$1;
(statearr_27301_27360[(2)] = inst_27214);

(statearr_27301_27360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (20))){
var inst_27226 = (state_27299[(7)]);
var state_27299__$1 = state_27299;
var statearr_27302_27361 = state_27299__$1;
(statearr_27302_27361[(2)] = inst_27226);

(statearr_27302_27361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (27))){
var state_27299__$1 = state_27299;
var statearr_27303_27362 = state_27299__$1;
(statearr_27303_27362[(2)] = null);

(statearr_27303_27362[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (1))){
var inst_27201 = (state_27299[(8)]);
var inst_27201__$1 = calc_state.call(null);
var inst_27203 = (inst_27201__$1 == null);
var inst_27204 = cljs.core.not.call(null,inst_27203);
var state_27299__$1 = (function (){var statearr_27304 = state_27299;
(statearr_27304[(8)] = inst_27201__$1);

return statearr_27304;
})();
if(inst_27204){
var statearr_27305_27363 = state_27299__$1;
(statearr_27305_27363[(1)] = (2));

} else {
var statearr_27306_27364 = state_27299__$1;
(statearr_27306_27364[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (24))){
var inst_27273 = (state_27299[(9)]);
var inst_27259 = (state_27299[(10)]);
var inst_27250 = (state_27299[(11)]);
var inst_27273__$1 = inst_27250.call(null,inst_27259);
var state_27299__$1 = (function (){var statearr_27307 = state_27299;
(statearr_27307[(9)] = inst_27273__$1);

return statearr_27307;
})();
if(cljs.core.truth_(inst_27273__$1)){
var statearr_27308_27365 = state_27299__$1;
(statearr_27308_27365[(1)] = (29));

} else {
var statearr_27309_27366 = state_27299__$1;
(statearr_27309_27366[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (4))){
var inst_27217 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27217)){
var statearr_27310_27367 = state_27299__$1;
(statearr_27310_27367[(1)] = (8));

} else {
var statearr_27311_27368 = state_27299__$1;
(statearr_27311_27368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (15))){
var inst_27244 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27244)){
var statearr_27312_27369 = state_27299__$1;
(statearr_27312_27369[(1)] = (19));

} else {
var statearr_27313_27370 = state_27299__$1;
(statearr_27313_27370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (21))){
var inst_27249 = (state_27299[(12)]);
var inst_27249__$1 = (state_27299[(2)]);
var inst_27250 = cljs.core.get.call(null,inst_27249__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27251 = cljs.core.get.call(null,inst_27249__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27252 = cljs.core.get.call(null,inst_27249__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27299__$1 = (function (){var statearr_27314 = state_27299;
(statearr_27314[(12)] = inst_27249__$1);

(statearr_27314[(11)] = inst_27250);

(statearr_27314[(13)] = inst_27251);

return statearr_27314;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27299__$1,(22),inst_27252);
} else {
if((state_val_27300 === (31))){
var inst_27281 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27281)){
var statearr_27315_27371 = state_27299__$1;
(statearr_27315_27371[(1)] = (32));

} else {
var statearr_27316_27372 = state_27299__$1;
(statearr_27316_27372[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (32))){
var inst_27258 = (state_27299[(14)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27299__$1,(35),out,inst_27258);
} else {
if((state_val_27300 === (33))){
var inst_27249 = (state_27299[(12)]);
var inst_27226 = inst_27249;
var state_27299__$1 = (function (){var statearr_27317 = state_27299;
(statearr_27317[(7)] = inst_27226);

return statearr_27317;
})();
var statearr_27318_27373 = state_27299__$1;
(statearr_27318_27373[(2)] = null);

(statearr_27318_27373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (13))){
var inst_27226 = (state_27299[(7)]);
var inst_27233 = inst_27226.cljs$lang$protocol_mask$partition0$;
var inst_27234 = (inst_27233 & (64));
var inst_27235 = inst_27226.cljs$core$ISeq$;
var inst_27236 = (cljs.core.PROTOCOL_SENTINEL === inst_27235);
var inst_27237 = ((inst_27234) || (inst_27236));
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27237)){
var statearr_27319_27374 = state_27299__$1;
(statearr_27319_27374[(1)] = (16));

} else {
var statearr_27320_27375 = state_27299__$1;
(statearr_27320_27375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (22))){
var inst_27259 = (state_27299[(10)]);
var inst_27258 = (state_27299[(14)]);
var inst_27257 = (state_27299[(2)]);
var inst_27258__$1 = cljs.core.nth.call(null,inst_27257,(0),null);
var inst_27259__$1 = cljs.core.nth.call(null,inst_27257,(1),null);
var inst_27260 = (inst_27258__$1 == null);
var inst_27261 = cljs.core._EQ_.call(null,inst_27259__$1,change);
var inst_27262 = ((inst_27260) || (inst_27261));
var state_27299__$1 = (function (){var statearr_27321 = state_27299;
(statearr_27321[(10)] = inst_27259__$1);

(statearr_27321[(14)] = inst_27258__$1);

return statearr_27321;
})();
if(cljs.core.truth_(inst_27262)){
var statearr_27322_27376 = state_27299__$1;
(statearr_27322_27376[(1)] = (23));

} else {
var statearr_27323_27377 = state_27299__$1;
(statearr_27323_27377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (36))){
var inst_27249 = (state_27299[(12)]);
var inst_27226 = inst_27249;
var state_27299__$1 = (function (){var statearr_27324 = state_27299;
(statearr_27324[(7)] = inst_27226);

return statearr_27324;
})();
var statearr_27325_27378 = state_27299__$1;
(statearr_27325_27378[(2)] = null);

(statearr_27325_27378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (29))){
var inst_27273 = (state_27299[(9)]);
var state_27299__$1 = state_27299;
var statearr_27326_27379 = state_27299__$1;
(statearr_27326_27379[(2)] = inst_27273);

(statearr_27326_27379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (6))){
var state_27299__$1 = state_27299;
var statearr_27327_27380 = state_27299__$1;
(statearr_27327_27380[(2)] = false);

(statearr_27327_27380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (28))){
var inst_27269 = (state_27299[(2)]);
var inst_27270 = calc_state.call(null);
var inst_27226 = inst_27270;
var state_27299__$1 = (function (){var statearr_27328 = state_27299;
(statearr_27328[(7)] = inst_27226);

(statearr_27328[(15)] = inst_27269);

return statearr_27328;
})();
var statearr_27329_27381 = state_27299__$1;
(statearr_27329_27381[(2)] = null);

(statearr_27329_27381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (25))){
var inst_27295 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27330_27382 = state_27299__$1;
(statearr_27330_27382[(2)] = inst_27295);

(statearr_27330_27382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (34))){
var inst_27293 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27331_27383 = state_27299__$1;
(statearr_27331_27383[(2)] = inst_27293);

(statearr_27331_27383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (17))){
var state_27299__$1 = state_27299;
var statearr_27332_27384 = state_27299__$1;
(statearr_27332_27384[(2)] = false);

(statearr_27332_27384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (3))){
var state_27299__$1 = state_27299;
var statearr_27333_27385 = state_27299__$1;
(statearr_27333_27385[(2)] = false);

(statearr_27333_27385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (12))){
var inst_27297 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27299__$1,inst_27297);
} else {
if((state_val_27300 === (2))){
var inst_27201 = (state_27299[(8)]);
var inst_27206 = inst_27201.cljs$lang$protocol_mask$partition0$;
var inst_27207 = (inst_27206 & (64));
var inst_27208 = inst_27201.cljs$core$ISeq$;
var inst_27209 = (cljs.core.PROTOCOL_SENTINEL === inst_27208);
var inst_27210 = ((inst_27207) || (inst_27209));
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27210)){
var statearr_27334_27386 = state_27299__$1;
(statearr_27334_27386[(1)] = (5));

} else {
var statearr_27335_27387 = state_27299__$1;
(statearr_27335_27387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (23))){
var inst_27258 = (state_27299[(14)]);
var inst_27264 = (inst_27258 == null);
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27264)){
var statearr_27336_27388 = state_27299__$1;
(statearr_27336_27388[(1)] = (26));

} else {
var statearr_27337_27389 = state_27299__$1;
(statearr_27337_27389[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (35))){
var inst_27284 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27284)){
var statearr_27338_27390 = state_27299__$1;
(statearr_27338_27390[(1)] = (36));

} else {
var statearr_27339_27391 = state_27299__$1;
(statearr_27339_27391[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (19))){
var inst_27226 = (state_27299[(7)]);
var inst_27246 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27226);
var state_27299__$1 = state_27299;
var statearr_27340_27392 = state_27299__$1;
(statearr_27340_27392[(2)] = inst_27246);

(statearr_27340_27392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (11))){
var inst_27226 = (state_27299[(7)]);
var inst_27230 = (inst_27226 == null);
var inst_27231 = cljs.core.not.call(null,inst_27230);
var state_27299__$1 = state_27299;
if(inst_27231){
var statearr_27341_27393 = state_27299__$1;
(statearr_27341_27393[(1)] = (13));

} else {
var statearr_27342_27394 = state_27299__$1;
(statearr_27342_27394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (9))){
var inst_27201 = (state_27299[(8)]);
var state_27299__$1 = state_27299;
var statearr_27343_27395 = state_27299__$1;
(statearr_27343_27395[(2)] = inst_27201);

(statearr_27343_27395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (5))){
var state_27299__$1 = state_27299;
var statearr_27344_27396 = state_27299__$1;
(statearr_27344_27396[(2)] = true);

(statearr_27344_27396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (14))){
var state_27299__$1 = state_27299;
var statearr_27345_27397 = state_27299__$1;
(statearr_27345_27397[(2)] = false);

(statearr_27345_27397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (26))){
var inst_27259 = (state_27299[(10)]);
var inst_27266 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27259);
var state_27299__$1 = state_27299;
var statearr_27346_27398 = state_27299__$1;
(statearr_27346_27398[(2)] = inst_27266);

(statearr_27346_27398[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (16))){
var state_27299__$1 = state_27299;
var statearr_27347_27399 = state_27299__$1;
(statearr_27347_27399[(2)] = true);

(statearr_27347_27399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (38))){
var inst_27289 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27348_27400 = state_27299__$1;
(statearr_27348_27400[(2)] = inst_27289);

(statearr_27348_27400[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (30))){
var inst_27259 = (state_27299[(10)]);
var inst_27250 = (state_27299[(11)]);
var inst_27251 = (state_27299[(13)]);
var inst_27276 = cljs.core.empty_QMARK_.call(null,inst_27250);
var inst_27277 = inst_27251.call(null,inst_27259);
var inst_27278 = cljs.core.not.call(null,inst_27277);
var inst_27279 = ((inst_27276) && (inst_27278));
var state_27299__$1 = state_27299;
var statearr_27349_27401 = state_27299__$1;
(statearr_27349_27401[(2)] = inst_27279);

(statearr_27349_27401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (10))){
var inst_27201 = (state_27299[(8)]);
var inst_27222 = (state_27299[(2)]);
var inst_27223 = cljs.core.get.call(null,inst_27222,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27224 = cljs.core.get.call(null,inst_27222,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27225 = cljs.core.get.call(null,inst_27222,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27226 = inst_27201;
var state_27299__$1 = (function (){var statearr_27350 = state_27299;
(statearr_27350[(16)] = inst_27224);

(statearr_27350[(7)] = inst_27226);

(statearr_27350[(17)] = inst_27223);

(statearr_27350[(18)] = inst_27225);

return statearr_27350;
})();
var statearr_27351_27402 = state_27299__$1;
(statearr_27351_27402[(2)] = null);

(statearr_27351_27402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (18))){
var inst_27241 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27352_27403 = state_27299__$1;
(statearr_27352_27403[(2)] = inst_27241);

(statearr_27352_27403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (37))){
var state_27299__$1 = state_27299;
var statearr_27353_27404 = state_27299__$1;
(statearr_27353_27404[(2)] = null);

(statearr_27353_27404[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (8))){
var inst_27201 = (state_27299[(8)]);
var inst_27219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27201);
var state_27299__$1 = state_27299;
var statearr_27354_27405 = state_27299__$1;
(statearr_27354_27405[(2)] = inst_27219);

(statearr_27354_27405[(1)] = (10));


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
});})(c__26301__auto___27359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26206__auto__,c__26301__auto___27359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26207__auto__ = null;
var cljs$core$async$mix_$_state_machine__26207__auto____0 = (function (){
var statearr_27355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27355[(0)] = cljs$core$async$mix_$_state_machine__26207__auto__);

(statearr_27355[(1)] = (1));

return statearr_27355;
});
var cljs$core$async$mix_$_state_machine__26207__auto____1 = (function (state_27299){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_27299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e27356){if((e27356 instanceof Object)){
var ex__26210__auto__ = e27356;
var statearr_27357_27406 = state_27299;
(statearr_27357_27406[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27407 = state_27299;
state_27299 = G__27407;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26207__auto__ = function(state_27299){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26207__auto____1.call(this,state_27299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26207__auto____0;
cljs$core$async$mix_$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26207__auto____1;
return cljs$core$async$mix_$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___27359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26303__auto__ = (function (){var statearr_27358 = f__26302__auto__.call(null);
(statearr_27358[(6)] = c__26301__auto___27359);

return statearr_27358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___27359,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27409 = arguments.length;
switch (G__27409) {
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__27413 = arguments.length;
switch (G__27413) {
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
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__27411_SHARP_){
if(cljs.core.truth_(p1__27411_SHARP_.call(null,topic))){
return p1__27411_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27411_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27414 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27415){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27415 = meta27415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27416,meta27415__$1){
var self__ = this;
var _27416__$1 = this;
return (new cljs.core.async.t_cljs$core$async27414(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27415__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27416){
var self__ = this;
var _27416__$1 = this;
return self__.meta27415;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27414.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27415","meta27415",1001845516,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27414";

cljs.core.async.t_cljs$core$async27414.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27414");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27414.
 */
cljs.core.async.__GT_t_cljs$core$async27414 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27414(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27415){
return (new cljs.core.async.t_cljs$core$async27414(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27415));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27414(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26301__auto___27534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___27534,mults,ensure_mult,p){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___27534,mults,ensure_mult,p){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (7))){
var inst_27484 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27490_27535 = state_27488__$1;
(statearr_27490_27535[(2)] = inst_27484);

(statearr_27490_27535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (20))){
var state_27488__$1 = state_27488;
var statearr_27491_27536 = state_27488__$1;
(statearr_27491_27536[(2)] = null);

(statearr_27491_27536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (1))){
var state_27488__$1 = state_27488;
var statearr_27492_27537 = state_27488__$1;
(statearr_27492_27537[(2)] = null);

(statearr_27492_27537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (24))){
var inst_27467 = (state_27488[(7)]);
var inst_27476 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27467);
var state_27488__$1 = state_27488;
var statearr_27493_27538 = state_27488__$1;
(statearr_27493_27538[(2)] = inst_27476);

(statearr_27493_27538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (4))){
var inst_27419 = (state_27488[(8)]);
var inst_27419__$1 = (state_27488[(2)]);
var inst_27420 = (inst_27419__$1 == null);
var state_27488__$1 = (function (){var statearr_27494 = state_27488;
(statearr_27494[(8)] = inst_27419__$1);

return statearr_27494;
})();
if(cljs.core.truth_(inst_27420)){
var statearr_27495_27539 = state_27488__$1;
(statearr_27495_27539[(1)] = (5));

} else {
var statearr_27496_27540 = state_27488__$1;
(statearr_27496_27540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (15))){
var inst_27461 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27497_27541 = state_27488__$1;
(statearr_27497_27541[(2)] = inst_27461);

(statearr_27497_27541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (21))){
var inst_27481 = (state_27488[(2)]);
var state_27488__$1 = (function (){var statearr_27498 = state_27488;
(statearr_27498[(9)] = inst_27481);

return statearr_27498;
})();
var statearr_27499_27542 = state_27488__$1;
(statearr_27499_27542[(2)] = null);

(statearr_27499_27542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (13))){
var inst_27443 = (state_27488[(10)]);
var inst_27445 = cljs.core.chunked_seq_QMARK_.call(null,inst_27443);
var state_27488__$1 = state_27488;
if(inst_27445){
var statearr_27500_27543 = state_27488__$1;
(statearr_27500_27543[(1)] = (16));

} else {
var statearr_27501_27544 = state_27488__$1;
(statearr_27501_27544[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (22))){
var inst_27473 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27473)){
var statearr_27502_27545 = state_27488__$1;
(statearr_27502_27545[(1)] = (23));

} else {
var statearr_27503_27546 = state_27488__$1;
(statearr_27503_27546[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (6))){
var inst_27467 = (state_27488[(7)]);
var inst_27469 = (state_27488[(11)]);
var inst_27419 = (state_27488[(8)]);
var inst_27467__$1 = topic_fn.call(null,inst_27419);
var inst_27468 = cljs.core.deref.call(null,mults);
var inst_27469__$1 = cljs.core.get.call(null,inst_27468,inst_27467__$1);
var state_27488__$1 = (function (){var statearr_27504 = state_27488;
(statearr_27504[(7)] = inst_27467__$1);

(statearr_27504[(11)] = inst_27469__$1);

return statearr_27504;
})();
if(cljs.core.truth_(inst_27469__$1)){
var statearr_27505_27547 = state_27488__$1;
(statearr_27505_27547[(1)] = (19));

} else {
var statearr_27506_27548 = state_27488__$1;
(statearr_27506_27548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (25))){
var inst_27478 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27507_27549 = state_27488__$1;
(statearr_27507_27549[(2)] = inst_27478);

(statearr_27507_27549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (17))){
var inst_27443 = (state_27488[(10)]);
var inst_27452 = cljs.core.first.call(null,inst_27443);
var inst_27453 = cljs.core.async.muxch_STAR_.call(null,inst_27452);
var inst_27454 = cljs.core.async.close_BANG_.call(null,inst_27453);
var inst_27455 = cljs.core.next.call(null,inst_27443);
var inst_27429 = inst_27455;
var inst_27430 = null;
var inst_27431 = (0);
var inst_27432 = (0);
var state_27488__$1 = (function (){var statearr_27508 = state_27488;
(statearr_27508[(12)] = inst_27430);

(statearr_27508[(13)] = inst_27432);

(statearr_27508[(14)] = inst_27429);

(statearr_27508[(15)] = inst_27454);

(statearr_27508[(16)] = inst_27431);

return statearr_27508;
})();
var statearr_27509_27550 = state_27488__$1;
(statearr_27509_27550[(2)] = null);

(statearr_27509_27550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (3))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
if((state_val_27489 === (12))){
var inst_27463 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27510_27551 = state_27488__$1;
(statearr_27510_27551[(2)] = inst_27463);

(statearr_27510_27551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (2))){
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(4),ch);
} else {
if((state_val_27489 === (23))){
var state_27488__$1 = state_27488;
var statearr_27511_27552 = state_27488__$1;
(statearr_27511_27552[(2)] = null);

(statearr_27511_27552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (19))){
var inst_27469 = (state_27488[(11)]);
var inst_27419 = (state_27488[(8)]);
var inst_27471 = cljs.core.async.muxch_STAR_.call(null,inst_27469);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27488__$1,(22),inst_27471,inst_27419);
} else {
if((state_val_27489 === (11))){
var inst_27443 = (state_27488[(10)]);
var inst_27429 = (state_27488[(14)]);
var inst_27443__$1 = cljs.core.seq.call(null,inst_27429);
var state_27488__$1 = (function (){var statearr_27512 = state_27488;
(statearr_27512[(10)] = inst_27443__$1);

return statearr_27512;
})();
if(inst_27443__$1){
var statearr_27513_27553 = state_27488__$1;
(statearr_27513_27553[(1)] = (13));

} else {
var statearr_27514_27554 = state_27488__$1;
(statearr_27514_27554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (9))){
var inst_27465 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27515_27555 = state_27488__$1;
(statearr_27515_27555[(2)] = inst_27465);

(statearr_27515_27555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (5))){
var inst_27426 = cljs.core.deref.call(null,mults);
var inst_27427 = cljs.core.vals.call(null,inst_27426);
var inst_27428 = cljs.core.seq.call(null,inst_27427);
var inst_27429 = inst_27428;
var inst_27430 = null;
var inst_27431 = (0);
var inst_27432 = (0);
var state_27488__$1 = (function (){var statearr_27516 = state_27488;
(statearr_27516[(12)] = inst_27430);

(statearr_27516[(13)] = inst_27432);

(statearr_27516[(14)] = inst_27429);

(statearr_27516[(16)] = inst_27431);

return statearr_27516;
})();
var statearr_27517_27556 = state_27488__$1;
(statearr_27517_27556[(2)] = null);

(statearr_27517_27556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (14))){
var state_27488__$1 = state_27488;
var statearr_27521_27557 = state_27488__$1;
(statearr_27521_27557[(2)] = null);

(statearr_27521_27557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (16))){
var inst_27443 = (state_27488[(10)]);
var inst_27447 = cljs.core.chunk_first.call(null,inst_27443);
var inst_27448 = cljs.core.chunk_rest.call(null,inst_27443);
var inst_27449 = cljs.core.count.call(null,inst_27447);
var inst_27429 = inst_27448;
var inst_27430 = inst_27447;
var inst_27431 = inst_27449;
var inst_27432 = (0);
var state_27488__$1 = (function (){var statearr_27522 = state_27488;
(statearr_27522[(12)] = inst_27430);

(statearr_27522[(13)] = inst_27432);

(statearr_27522[(14)] = inst_27429);

(statearr_27522[(16)] = inst_27431);

return statearr_27522;
})();
var statearr_27523_27558 = state_27488__$1;
(statearr_27523_27558[(2)] = null);

(statearr_27523_27558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (10))){
var inst_27430 = (state_27488[(12)]);
var inst_27432 = (state_27488[(13)]);
var inst_27429 = (state_27488[(14)]);
var inst_27431 = (state_27488[(16)]);
var inst_27437 = cljs.core._nth.call(null,inst_27430,inst_27432);
var inst_27438 = cljs.core.async.muxch_STAR_.call(null,inst_27437);
var inst_27439 = cljs.core.async.close_BANG_.call(null,inst_27438);
var inst_27440 = (inst_27432 + (1));
var tmp27518 = inst_27430;
var tmp27519 = inst_27429;
var tmp27520 = inst_27431;
var inst_27429__$1 = tmp27519;
var inst_27430__$1 = tmp27518;
var inst_27431__$1 = tmp27520;
var inst_27432__$1 = inst_27440;
var state_27488__$1 = (function (){var statearr_27524 = state_27488;
(statearr_27524[(12)] = inst_27430__$1);

(statearr_27524[(13)] = inst_27432__$1);

(statearr_27524[(14)] = inst_27429__$1);

(statearr_27524[(16)] = inst_27431__$1);

(statearr_27524[(17)] = inst_27439);

return statearr_27524;
})();
var statearr_27525_27559 = state_27488__$1;
(statearr_27525_27559[(2)] = null);

(statearr_27525_27559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (18))){
var inst_27458 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27526_27560 = state_27488__$1;
(statearr_27526_27560[(2)] = inst_27458);

(statearr_27526_27560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (8))){
var inst_27432 = (state_27488[(13)]);
var inst_27431 = (state_27488[(16)]);
var inst_27434 = (inst_27432 < inst_27431);
var inst_27435 = inst_27434;
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27435)){
var statearr_27527_27561 = state_27488__$1;
(statearr_27527_27561[(1)] = (10));

} else {
var statearr_27528_27562 = state_27488__$1;
(statearr_27528_27562[(1)] = (11));

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
});})(c__26301__auto___27534,mults,ensure_mult,p))
;
return ((function (switch__26206__auto__,c__26301__auto___27534,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_27529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27529[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_27529[(1)] = (1));

return statearr_27529;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_27488){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e27530){if((e27530 instanceof Object)){
var ex__26210__auto__ = e27530;
var statearr_27531_27563 = state_27488;
(statearr_27531_27563[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27564 = state_27488;
state_27488 = G__27564;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___27534,mults,ensure_mult,p))
})();
var state__26303__auto__ = (function (){var statearr_27532 = f__26302__auto__.call(null);
(statearr_27532[(6)] = c__26301__auto___27534);

return statearr_27532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___27534,mults,ensure_mult,p))
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
var G__27566 = arguments.length;
switch (G__27566) {
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
var G__27569 = arguments.length;
switch (G__27569) {
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
var G__27572 = arguments.length;
switch (G__27572) {
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
var c__26301__auto___27639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___27639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___27639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27611){
var state_val_27612 = (state_27611[(1)]);
if((state_val_27612 === (7))){
var state_27611__$1 = state_27611;
var statearr_27613_27640 = state_27611__$1;
(statearr_27613_27640[(2)] = null);

(statearr_27613_27640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (1))){
var state_27611__$1 = state_27611;
var statearr_27614_27641 = state_27611__$1;
(statearr_27614_27641[(2)] = null);

(statearr_27614_27641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (4))){
var inst_27575 = (state_27611[(7)]);
var inst_27577 = (inst_27575 < cnt);
var state_27611__$1 = state_27611;
if(cljs.core.truth_(inst_27577)){
var statearr_27615_27642 = state_27611__$1;
(statearr_27615_27642[(1)] = (6));

} else {
var statearr_27616_27643 = state_27611__$1;
(statearr_27616_27643[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (15))){
var inst_27607 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27617_27644 = state_27611__$1;
(statearr_27617_27644[(2)] = inst_27607);

(statearr_27617_27644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (13))){
var inst_27600 = cljs.core.async.close_BANG_.call(null,out);
var state_27611__$1 = state_27611;
var statearr_27618_27645 = state_27611__$1;
(statearr_27618_27645[(2)] = inst_27600);

(statearr_27618_27645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (6))){
var state_27611__$1 = state_27611;
var statearr_27619_27646 = state_27611__$1;
(statearr_27619_27646[(2)] = null);

(statearr_27619_27646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (3))){
var inst_27609 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27611__$1,inst_27609);
} else {
if((state_val_27612 === (12))){
var inst_27597 = (state_27611[(8)]);
var inst_27597__$1 = (state_27611[(2)]);
var inst_27598 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27597__$1);
var state_27611__$1 = (function (){var statearr_27620 = state_27611;
(statearr_27620[(8)] = inst_27597__$1);

return statearr_27620;
})();
if(cljs.core.truth_(inst_27598)){
var statearr_27621_27647 = state_27611__$1;
(statearr_27621_27647[(1)] = (13));

} else {
var statearr_27622_27648 = state_27611__$1;
(statearr_27622_27648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (2))){
var inst_27574 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27575 = (0);
var state_27611__$1 = (function (){var statearr_27623 = state_27611;
(statearr_27623[(9)] = inst_27574);

(statearr_27623[(7)] = inst_27575);

return statearr_27623;
})();
var statearr_27624_27649 = state_27611__$1;
(statearr_27624_27649[(2)] = null);

(statearr_27624_27649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (11))){
var inst_27575 = (state_27611[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27611,(10),Object,null,(9));
var inst_27584 = chs__$1.call(null,inst_27575);
var inst_27585 = done.call(null,inst_27575);
var inst_27586 = cljs.core.async.take_BANG_.call(null,inst_27584,inst_27585);
var state_27611__$1 = state_27611;
var statearr_27625_27650 = state_27611__$1;
(statearr_27625_27650[(2)] = inst_27586);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27611__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (9))){
var inst_27575 = (state_27611[(7)]);
var inst_27588 = (state_27611[(2)]);
var inst_27589 = (inst_27575 + (1));
var inst_27575__$1 = inst_27589;
var state_27611__$1 = (function (){var statearr_27626 = state_27611;
(statearr_27626[(10)] = inst_27588);

(statearr_27626[(7)] = inst_27575__$1);

return statearr_27626;
})();
var statearr_27627_27651 = state_27611__$1;
(statearr_27627_27651[(2)] = null);

(statearr_27627_27651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (5))){
var inst_27595 = (state_27611[(2)]);
var state_27611__$1 = (function (){var statearr_27628 = state_27611;
(statearr_27628[(11)] = inst_27595);

return statearr_27628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27611__$1,(12),dchan);
} else {
if((state_val_27612 === (14))){
var inst_27597 = (state_27611[(8)]);
var inst_27602 = cljs.core.apply.call(null,f,inst_27597);
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27611__$1,(16),out,inst_27602);
} else {
if((state_val_27612 === (16))){
var inst_27604 = (state_27611[(2)]);
var state_27611__$1 = (function (){var statearr_27629 = state_27611;
(statearr_27629[(12)] = inst_27604);

return statearr_27629;
})();
var statearr_27630_27652 = state_27611__$1;
(statearr_27630_27652[(2)] = null);

(statearr_27630_27652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (10))){
var inst_27579 = (state_27611[(2)]);
var inst_27580 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27611__$1 = (function (){var statearr_27631 = state_27611;
(statearr_27631[(13)] = inst_27579);

return statearr_27631;
})();
var statearr_27632_27653 = state_27611__$1;
(statearr_27632_27653[(2)] = inst_27580);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27611__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (8))){
var inst_27593 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27633_27654 = state_27611__$1;
(statearr_27633_27654[(2)] = inst_27593);

(statearr_27633_27654[(1)] = (5));


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
});})(c__26301__auto___27639,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26206__auto__,c__26301__auto___27639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_27634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27634[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_27634[(1)] = (1));

return statearr_27634;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_27611){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_27611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e27635){if((e27635 instanceof Object)){
var ex__26210__auto__ = e27635;
var statearr_27636_27655 = state_27611;
(statearr_27636_27655[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27656 = state_27611;
state_27611 = G__27656;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_27611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_27611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___27639,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26303__auto__ = (function (){var statearr_27637 = f__26302__auto__.call(null);
(statearr_27637[(6)] = c__26301__auto___27639);

return statearr_27637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___27639,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27659 = arguments.length;
switch (G__27659) {
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
var c__26301__auto___27713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___27713,out){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___27713,out){
return (function (state_27691){
var state_val_27692 = (state_27691[(1)]);
if((state_val_27692 === (7))){
var inst_27670 = (state_27691[(7)]);
var inst_27671 = (state_27691[(8)]);
var inst_27670__$1 = (state_27691[(2)]);
var inst_27671__$1 = cljs.core.nth.call(null,inst_27670__$1,(0),null);
var inst_27672 = cljs.core.nth.call(null,inst_27670__$1,(1),null);
var inst_27673 = (inst_27671__$1 == null);
var state_27691__$1 = (function (){var statearr_27693 = state_27691;
(statearr_27693[(7)] = inst_27670__$1);

(statearr_27693[(9)] = inst_27672);

(statearr_27693[(8)] = inst_27671__$1);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27673)){
var statearr_27694_27714 = state_27691__$1;
(statearr_27694_27714[(1)] = (8));

} else {
var statearr_27695_27715 = state_27691__$1;
(statearr_27695_27715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (1))){
var inst_27660 = cljs.core.vec.call(null,chs);
var inst_27661 = inst_27660;
var state_27691__$1 = (function (){var statearr_27696 = state_27691;
(statearr_27696[(10)] = inst_27661);

return statearr_27696;
})();
var statearr_27697_27716 = state_27691__$1;
(statearr_27697_27716[(2)] = null);

(statearr_27697_27716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (4))){
var inst_27661 = (state_27691[(10)]);
var state_27691__$1 = state_27691;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27691__$1,(7),inst_27661);
} else {
if((state_val_27692 === (6))){
var inst_27687 = (state_27691[(2)]);
var state_27691__$1 = state_27691;
var statearr_27698_27717 = state_27691__$1;
(statearr_27698_27717[(2)] = inst_27687);

(statearr_27698_27717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (3))){
var inst_27689 = (state_27691[(2)]);
var state_27691__$1 = state_27691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27691__$1,inst_27689);
} else {
if((state_val_27692 === (2))){
var inst_27661 = (state_27691[(10)]);
var inst_27663 = cljs.core.count.call(null,inst_27661);
var inst_27664 = (inst_27663 > (0));
var state_27691__$1 = state_27691;
if(cljs.core.truth_(inst_27664)){
var statearr_27700_27718 = state_27691__$1;
(statearr_27700_27718[(1)] = (4));

} else {
var statearr_27701_27719 = state_27691__$1;
(statearr_27701_27719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (11))){
var inst_27661 = (state_27691[(10)]);
var inst_27680 = (state_27691[(2)]);
var tmp27699 = inst_27661;
var inst_27661__$1 = tmp27699;
var state_27691__$1 = (function (){var statearr_27702 = state_27691;
(statearr_27702[(11)] = inst_27680);

(statearr_27702[(10)] = inst_27661__$1);

return statearr_27702;
})();
var statearr_27703_27720 = state_27691__$1;
(statearr_27703_27720[(2)] = null);

(statearr_27703_27720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (9))){
var inst_27671 = (state_27691[(8)]);
var state_27691__$1 = state_27691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27691__$1,(11),out,inst_27671);
} else {
if((state_val_27692 === (5))){
var inst_27685 = cljs.core.async.close_BANG_.call(null,out);
var state_27691__$1 = state_27691;
var statearr_27704_27721 = state_27691__$1;
(statearr_27704_27721[(2)] = inst_27685);

(statearr_27704_27721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (10))){
var inst_27683 = (state_27691[(2)]);
var state_27691__$1 = state_27691;
var statearr_27705_27722 = state_27691__$1;
(statearr_27705_27722[(2)] = inst_27683);

(statearr_27705_27722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (8))){
var inst_27670 = (state_27691[(7)]);
var inst_27672 = (state_27691[(9)]);
var inst_27661 = (state_27691[(10)]);
var inst_27671 = (state_27691[(8)]);
var inst_27675 = (function (){var cs = inst_27661;
var vec__27666 = inst_27670;
var v = inst_27671;
var c = inst_27672;
return ((function (cs,vec__27666,v,c,inst_27670,inst_27672,inst_27661,inst_27671,state_val_27692,c__26301__auto___27713,out){
return (function (p1__27657_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27657_SHARP_);
});
;})(cs,vec__27666,v,c,inst_27670,inst_27672,inst_27661,inst_27671,state_val_27692,c__26301__auto___27713,out))
})();
var inst_27676 = cljs.core.filterv.call(null,inst_27675,inst_27661);
var inst_27661__$1 = inst_27676;
var state_27691__$1 = (function (){var statearr_27706 = state_27691;
(statearr_27706[(10)] = inst_27661__$1);

return statearr_27706;
})();
var statearr_27707_27723 = state_27691__$1;
(statearr_27707_27723[(2)] = null);

(statearr_27707_27723[(1)] = (2));


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
});})(c__26301__auto___27713,out))
;
return ((function (switch__26206__auto__,c__26301__auto___27713,out){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_27708 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27708[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_27708[(1)] = (1));

return statearr_27708;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_27691){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_27691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e27709){if((e27709 instanceof Object)){
var ex__26210__auto__ = e27709;
var statearr_27710_27724 = state_27691;
(statearr_27710_27724[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27725 = state_27691;
state_27691 = G__27725;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_27691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_27691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___27713,out))
})();
var state__26303__auto__ = (function (){var statearr_27711 = f__26302__auto__.call(null);
(statearr_27711[(6)] = c__26301__auto___27713);

return statearr_27711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___27713,out))
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
var G__27727 = arguments.length;
switch (G__27727) {
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
var c__26301__auto___27772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___27772,out){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___27772,out){
return (function (state_27751){
var state_val_27752 = (state_27751[(1)]);
if((state_val_27752 === (7))){
var inst_27733 = (state_27751[(7)]);
var inst_27733__$1 = (state_27751[(2)]);
var inst_27734 = (inst_27733__$1 == null);
var inst_27735 = cljs.core.not.call(null,inst_27734);
var state_27751__$1 = (function (){var statearr_27753 = state_27751;
(statearr_27753[(7)] = inst_27733__$1);

return statearr_27753;
})();
if(inst_27735){
var statearr_27754_27773 = state_27751__$1;
(statearr_27754_27773[(1)] = (8));

} else {
var statearr_27755_27774 = state_27751__$1;
(statearr_27755_27774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (1))){
var inst_27728 = (0);
var state_27751__$1 = (function (){var statearr_27756 = state_27751;
(statearr_27756[(8)] = inst_27728);

return statearr_27756;
})();
var statearr_27757_27775 = state_27751__$1;
(statearr_27757_27775[(2)] = null);

(statearr_27757_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (4))){
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27751__$1,(7),ch);
} else {
if((state_val_27752 === (6))){
var inst_27746 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27758_27776 = state_27751__$1;
(statearr_27758_27776[(2)] = inst_27746);

(statearr_27758_27776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (3))){
var inst_27748 = (state_27751[(2)]);
var inst_27749 = cljs.core.async.close_BANG_.call(null,out);
var state_27751__$1 = (function (){var statearr_27759 = state_27751;
(statearr_27759[(9)] = inst_27748);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27751__$1,inst_27749);
} else {
if((state_val_27752 === (2))){
var inst_27728 = (state_27751[(8)]);
var inst_27730 = (inst_27728 < n);
var state_27751__$1 = state_27751;
if(cljs.core.truth_(inst_27730)){
var statearr_27760_27777 = state_27751__$1;
(statearr_27760_27777[(1)] = (4));

} else {
var statearr_27761_27778 = state_27751__$1;
(statearr_27761_27778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (11))){
var inst_27728 = (state_27751[(8)]);
var inst_27738 = (state_27751[(2)]);
var inst_27739 = (inst_27728 + (1));
var inst_27728__$1 = inst_27739;
var state_27751__$1 = (function (){var statearr_27762 = state_27751;
(statearr_27762[(10)] = inst_27738);

(statearr_27762[(8)] = inst_27728__$1);

return statearr_27762;
})();
var statearr_27763_27779 = state_27751__$1;
(statearr_27763_27779[(2)] = null);

(statearr_27763_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (9))){
var state_27751__$1 = state_27751;
var statearr_27764_27780 = state_27751__$1;
(statearr_27764_27780[(2)] = null);

(statearr_27764_27780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (5))){
var state_27751__$1 = state_27751;
var statearr_27765_27781 = state_27751__$1;
(statearr_27765_27781[(2)] = null);

(statearr_27765_27781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (10))){
var inst_27743 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27766_27782 = state_27751__$1;
(statearr_27766_27782[(2)] = inst_27743);

(statearr_27766_27782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (8))){
var inst_27733 = (state_27751[(7)]);
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27751__$1,(11),out,inst_27733);
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
});})(c__26301__auto___27772,out))
;
return ((function (switch__26206__auto__,c__26301__auto___27772,out){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_27767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27767[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_27767[(1)] = (1));

return statearr_27767;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_27751){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_27751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e27768){if((e27768 instanceof Object)){
var ex__26210__auto__ = e27768;
var statearr_27769_27783 = state_27751;
(statearr_27769_27783[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27784 = state_27751;
state_27751 = G__27784;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_27751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_27751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___27772,out))
})();
var state__26303__auto__ = (function (){var statearr_27770 = f__26302__auto__.call(null);
(statearr_27770[(6)] = c__26301__auto___27772);

return statearr_27770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___27772,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27786 = (function (f,ch,meta27787){
this.f = f;
this.ch = ch;
this.meta27787 = meta27787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27788,meta27787__$1){
var self__ = this;
var _27788__$1 = this;
return (new cljs.core.async.t_cljs$core$async27786(self__.f,self__.ch,meta27787__$1));
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27788){
var self__ = this;
var _27788__$1 = this;
return self__.meta27787;
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27789 = (function (f,ch,meta27787,_,fn1,meta27790){
this.f = f;
this.ch = ch;
this.meta27787 = meta27787;
this._ = _;
this.fn1 = fn1;
this.meta27790 = meta27790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27791,meta27790__$1){
var self__ = this;
var _27791__$1 = this;
return (new cljs.core.async.t_cljs$core$async27789(self__.f,self__.ch,self__.meta27787,self__._,self__.fn1,meta27790__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27791){
var self__ = this;
var _27791__$1 = this;
return self__.meta27790;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27785_SHARP_){
return f1.call(null,(((p1__27785_SHARP_ == null))?null:self__.f.call(null,p1__27785_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27789.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27787","meta27787",1587884988,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27786","cljs.core.async/t_cljs$core$async27786",1156782984,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27790","meta27790",53124351,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27789";

cljs.core.async.t_cljs$core$async27789.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27789");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27789.
 */
cljs.core.async.__GT_t_cljs$core$async27789 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27789(f__$1,ch__$1,meta27787__$1,___$2,fn1__$1,meta27790){
return (new cljs.core.async.t_cljs$core$async27789(f__$1,ch__$1,meta27787__$1,___$2,fn1__$1,meta27790));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27789(self__.f,self__.ch,self__.meta27787,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27787","meta27787",1587884988,null)], null);
});

cljs.core.async.t_cljs$core$async27786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27786";

cljs.core.async.t_cljs$core$async27786.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27786");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27786.
 */
cljs.core.async.__GT_t_cljs$core$async27786 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27786(f__$1,ch__$1,meta27787){
return (new cljs.core.async.t_cljs$core$async27786(f__$1,ch__$1,meta27787));
});

}

return (new cljs.core.async.t_cljs$core$async27786(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27792 = (function (f,ch,meta27793){
this.f = f;
this.ch = ch;
this.meta27793 = meta27793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27794,meta27793__$1){
var self__ = this;
var _27794__$1 = this;
return (new cljs.core.async.t_cljs$core$async27792(self__.f,self__.ch,meta27793__$1));
});

cljs.core.async.t_cljs$core$async27792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27794){
var self__ = this;
var _27794__$1 = this;
return self__.meta27793;
});

cljs.core.async.t_cljs$core$async27792.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27792.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27792.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27793","meta27793",-134379554,null)], null);
});

cljs.core.async.t_cljs$core$async27792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27792";

cljs.core.async.t_cljs$core$async27792.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27792");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27792.
 */
cljs.core.async.__GT_t_cljs$core$async27792 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27792(f__$1,ch__$1,meta27793){
return (new cljs.core.async.t_cljs$core$async27792(f__$1,ch__$1,meta27793));
});

}

return (new cljs.core.async.t_cljs$core$async27792(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27795 = (function (p,ch,meta27796){
this.p = p;
this.ch = ch;
this.meta27796 = meta27796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27797,meta27796__$1){
var self__ = this;
var _27797__$1 = this;
return (new cljs.core.async.t_cljs$core$async27795(self__.p,self__.ch,meta27796__$1));
});

cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27797){
var self__ = this;
var _27797__$1 = this;
return self__.meta27796;
});

cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27796","meta27796",661627705,null)], null);
});

cljs.core.async.t_cljs$core$async27795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27795";

cljs.core.async.t_cljs$core$async27795.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27795");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27795.
 */
cljs.core.async.__GT_t_cljs$core$async27795 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27795(p__$1,ch__$1,meta27796){
return (new cljs.core.async.t_cljs$core$async27795(p__$1,ch__$1,meta27796));
});

}

return (new cljs.core.async.t_cljs$core$async27795(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27799 = arguments.length;
switch (G__27799) {
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
var c__26301__auto___27839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___27839,out){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___27839,out){
return (function (state_27820){
var state_val_27821 = (state_27820[(1)]);
if((state_val_27821 === (7))){
var inst_27816 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27822_27840 = state_27820__$1;
(statearr_27822_27840[(2)] = inst_27816);

(statearr_27822_27840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (1))){
var state_27820__$1 = state_27820;
var statearr_27823_27841 = state_27820__$1;
(statearr_27823_27841[(2)] = null);

(statearr_27823_27841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (4))){
var inst_27802 = (state_27820[(7)]);
var inst_27802__$1 = (state_27820[(2)]);
var inst_27803 = (inst_27802__$1 == null);
var state_27820__$1 = (function (){var statearr_27824 = state_27820;
(statearr_27824[(7)] = inst_27802__$1);

return statearr_27824;
})();
if(cljs.core.truth_(inst_27803)){
var statearr_27825_27842 = state_27820__$1;
(statearr_27825_27842[(1)] = (5));

} else {
var statearr_27826_27843 = state_27820__$1;
(statearr_27826_27843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (6))){
var inst_27802 = (state_27820[(7)]);
var inst_27807 = p.call(null,inst_27802);
var state_27820__$1 = state_27820;
if(cljs.core.truth_(inst_27807)){
var statearr_27827_27844 = state_27820__$1;
(statearr_27827_27844[(1)] = (8));

} else {
var statearr_27828_27845 = state_27820__$1;
(statearr_27828_27845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (3))){
var inst_27818 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27820__$1,inst_27818);
} else {
if((state_val_27821 === (2))){
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27820__$1,(4),ch);
} else {
if((state_val_27821 === (11))){
var inst_27810 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27829_27846 = state_27820__$1;
(statearr_27829_27846[(2)] = inst_27810);

(statearr_27829_27846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (9))){
var state_27820__$1 = state_27820;
var statearr_27830_27847 = state_27820__$1;
(statearr_27830_27847[(2)] = null);

(statearr_27830_27847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (5))){
var inst_27805 = cljs.core.async.close_BANG_.call(null,out);
var state_27820__$1 = state_27820;
var statearr_27831_27848 = state_27820__$1;
(statearr_27831_27848[(2)] = inst_27805);

(statearr_27831_27848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (10))){
var inst_27813 = (state_27820[(2)]);
var state_27820__$1 = (function (){var statearr_27832 = state_27820;
(statearr_27832[(8)] = inst_27813);

return statearr_27832;
})();
var statearr_27833_27849 = state_27820__$1;
(statearr_27833_27849[(2)] = null);

(statearr_27833_27849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (8))){
var inst_27802 = (state_27820[(7)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27820__$1,(11),out,inst_27802);
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
});})(c__26301__auto___27839,out))
;
return ((function (switch__26206__auto__,c__26301__auto___27839,out){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_27834 = [null,null,null,null,null,null,null,null,null];
(statearr_27834[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_27834[(1)] = (1));

return statearr_27834;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_27820){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_27820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e27835){if((e27835 instanceof Object)){
var ex__26210__auto__ = e27835;
var statearr_27836_27850 = state_27820;
(statearr_27836_27850[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27851 = state_27820;
state_27820 = G__27851;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_27820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_27820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___27839,out))
})();
var state__26303__auto__ = (function (){var statearr_27837 = f__26302__auto__.call(null);
(statearr_27837[(6)] = c__26301__auto___27839);

return statearr_27837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___27839,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27853 = arguments.length;
switch (G__27853) {
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
var c__26301__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto__){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto__){
return (function (state_27916){
var state_val_27917 = (state_27916[(1)]);
if((state_val_27917 === (7))){
var inst_27912 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
var statearr_27918_27956 = state_27916__$1;
(statearr_27918_27956[(2)] = inst_27912);

(statearr_27918_27956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (20))){
var inst_27882 = (state_27916[(7)]);
var inst_27893 = (state_27916[(2)]);
var inst_27894 = cljs.core.next.call(null,inst_27882);
var inst_27868 = inst_27894;
var inst_27869 = null;
var inst_27870 = (0);
var inst_27871 = (0);
var state_27916__$1 = (function (){var statearr_27919 = state_27916;
(statearr_27919[(8)] = inst_27868);

(statearr_27919[(9)] = inst_27893);

(statearr_27919[(10)] = inst_27869);

(statearr_27919[(11)] = inst_27870);

(statearr_27919[(12)] = inst_27871);

return statearr_27919;
})();
var statearr_27920_27957 = state_27916__$1;
(statearr_27920_27957[(2)] = null);

(statearr_27920_27957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (1))){
var state_27916__$1 = state_27916;
var statearr_27921_27958 = state_27916__$1;
(statearr_27921_27958[(2)] = null);

(statearr_27921_27958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (4))){
var inst_27857 = (state_27916[(13)]);
var inst_27857__$1 = (state_27916[(2)]);
var inst_27858 = (inst_27857__$1 == null);
var state_27916__$1 = (function (){var statearr_27922 = state_27916;
(statearr_27922[(13)] = inst_27857__$1);

return statearr_27922;
})();
if(cljs.core.truth_(inst_27858)){
var statearr_27923_27959 = state_27916__$1;
(statearr_27923_27959[(1)] = (5));

} else {
var statearr_27924_27960 = state_27916__$1;
(statearr_27924_27960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (15))){
var state_27916__$1 = state_27916;
var statearr_27928_27961 = state_27916__$1;
(statearr_27928_27961[(2)] = null);

(statearr_27928_27961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (21))){
var state_27916__$1 = state_27916;
var statearr_27929_27962 = state_27916__$1;
(statearr_27929_27962[(2)] = null);

(statearr_27929_27962[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (13))){
var inst_27868 = (state_27916[(8)]);
var inst_27869 = (state_27916[(10)]);
var inst_27870 = (state_27916[(11)]);
var inst_27871 = (state_27916[(12)]);
var inst_27878 = (state_27916[(2)]);
var inst_27879 = (inst_27871 + (1));
var tmp27925 = inst_27868;
var tmp27926 = inst_27869;
var tmp27927 = inst_27870;
var inst_27868__$1 = tmp27925;
var inst_27869__$1 = tmp27926;
var inst_27870__$1 = tmp27927;
var inst_27871__$1 = inst_27879;
var state_27916__$1 = (function (){var statearr_27930 = state_27916;
(statearr_27930[(8)] = inst_27868__$1);

(statearr_27930[(10)] = inst_27869__$1);

(statearr_27930[(11)] = inst_27870__$1);

(statearr_27930[(12)] = inst_27871__$1);

(statearr_27930[(14)] = inst_27878);

return statearr_27930;
})();
var statearr_27931_27963 = state_27916__$1;
(statearr_27931_27963[(2)] = null);

(statearr_27931_27963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (22))){
var state_27916__$1 = state_27916;
var statearr_27932_27964 = state_27916__$1;
(statearr_27932_27964[(2)] = null);

(statearr_27932_27964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (6))){
var inst_27857 = (state_27916[(13)]);
var inst_27866 = f.call(null,inst_27857);
var inst_27867 = cljs.core.seq.call(null,inst_27866);
var inst_27868 = inst_27867;
var inst_27869 = null;
var inst_27870 = (0);
var inst_27871 = (0);
var state_27916__$1 = (function (){var statearr_27933 = state_27916;
(statearr_27933[(8)] = inst_27868);

(statearr_27933[(10)] = inst_27869);

(statearr_27933[(11)] = inst_27870);

(statearr_27933[(12)] = inst_27871);

return statearr_27933;
})();
var statearr_27934_27965 = state_27916__$1;
(statearr_27934_27965[(2)] = null);

(statearr_27934_27965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (17))){
var inst_27882 = (state_27916[(7)]);
var inst_27886 = cljs.core.chunk_first.call(null,inst_27882);
var inst_27887 = cljs.core.chunk_rest.call(null,inst_27882);
var inst_27888 = cljs.core.count.call(null,inst_27886);
var inst_27868 = inst_27887;
var inst_27869 = inst_27886;
var inst_27870 = inst_27888;
var inst_27871 = (0);
var state_27916__$1 = (function (){var statearr_27935 = state_27916;
(statearr_27935[(8)] = inst_27868);

(statearr_27935[(10)] = inst_27869);

(statearr_27935[(11)] = inst_27870);

(statearr_27935[(12)] = inst_27871);

return statearr_27935;
})();
var statearr_27936_27966 = state_27916__$1;
(statearr_27936_27966[(2)] = null);

(statearr_27936_27966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (3))){
var inst_27914 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27916__$1,inst_27914);
} else {
if((state_val_27917 === (12))){
var inst_27902 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
var statearr_27937_27967 = state_27916__$1;
(statearr_27937_27967[(2)] = inst_27902);

(statearr_27937_27967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (2))){
var state_27916__$1 = state_27916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27916__$1,(4),in$);
} else {
if((state_val_27917 === (23))){
var inst_27910 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
var statearr_27938_27968 = state_27916__$1;
(statearr_27938_27968[(2)] = inst_27910);

(statearr_27938_27968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (19))){
var inst_27897 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
var statearr_27939_27969 = state_27916__$1;
(statearr_27939_27969[(2)] = inst_27897);

(statearr_27939_27969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (11))){
var inst_27882 = (state_27916[(7)]);
var inst_27868 = (state_27916[(8)]);
var inst_27882__$1 = cljs.core.seq.call(null,inst_27868);
var state_27916__$1 = (function (){var statearr_27940 = state_27916;
(statearr_27940[(7)] = inst_27882__$1);

return statearr_27940;
})();
if(inst_27882__$1){
var statearr_27941_27970 = state_27916__$1;
(statearr_27941_27970[(1)] = (14));

} else {
var statearr_27942_27971 = state_27916__$1;
(statearr_27942_27971[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (9))){
var inst_27904 = (state_27916[(2)]);
var inst_27905 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27916__$1 = (function (){var statearr_27943 = state_27916;
(statearr_27943[(15)] = inst_27904);

return statearr_27943;
})();
if(cljs.core.truth_(inst_27905)){
var statearr_27944_27972 = state_27916__$1;
(statearr_27944_27972[(1)] = (21));

} else {
var statearr_27945_27973 = state_27916__$1;
(statearr_27945_27973[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (5))){
var inst_27860 = cljs.core.async.close_BANG_.call(null,out);
var state_27916__$1 = state_27916;
var statearr_27946_27974 = state_27916__$1;
(statearr_27946_27974[(2)] = inst_27860);

(statearr_27946_27974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (14))){
var inst_27882 = (state_27916[(7)]);
var inst_27884 = cljs.core.chunked_seq_QMARK_.call(null,inst_27882);
var state_27916__$1 = state_27916;
if(inst_27884){
var statearr_27947_27975 = state_27916__$1;
(statearr_27947_27975[(1)] = (17));

} else {
var statearr_27948_27976 = state_27916__$1;
(statearr_27948_27976[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (16))){
var inst_27900 = (state_27916[(2)]);
var state_27916__$1 = state_27916;
var statearr_27949_27977 = state_27916__$1;
(statearr_27949_27977[(2)] = inst_27900);

(statearr_27949_27977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27917 === (10))){
var inst_27869 = (state_27916[(10)]);
var inst_27871 = (state_27916[(12)]);
var inst_27876 = cljs.core._nth.call(null,inst_27869,inst_27871);
var state_27916__$1 = state_27916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27916__$1,(13),out,inst_27876);
} else {
if((state_val_27917 === (18))){
var inst_27882 = (state_27916[(7)]);
var inst_27891 = cljs.core.first.call(null,inst_27882);
var state_27916__$1 = state_27916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27916__$1,(20),out,inst_27891);
} else {
if((state_val_27917 === (8))){
var inst_27870 = (state_27916[(11)]);
var inst_27871 = (state_27916[(12)]);
var inst_27873 = (inst_27871 < inst_27870);
var inst_27874 = inst_27873;
var state_27916__$1 = state_27916;
if(cljs.core.truth_(inst_27874)){
var statearr_27950_27978 = state_27916__$1;
(statearr_27950_27978[(1)] = (10));

} else {
var statearr_27951_27979 = state_27916__$1;
(statearr_27951_27979[(1)] = (11));

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
});})(c__26301__auto__))
;
return ((function (switch__26206__auto__,c__26301__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26207__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26207__auto____0 = (function (){
var statearr_27952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27952[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26207__auto__);

(statearr_27952[(1)] = (1));

return statearr_27952;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26207__auto____1 = (function (state_27916){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_27916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e27953){if((e27953 instanceof Object)){
var ex__26210__auto__ = e27953;
var statearr_27954_27980 = state_27916;
(statearr_27954_27980[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27981 = state_27916;
state_27916 = G__27981;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26207__auto__ = function(state_27916){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26207__auto____1.call(this,state_27916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto__))
})();
var state__26303__auto__ = (function (){var statearr_27955 = f__26302__auto__.call(null);
(statearr_27955[(6)] = c__26301__auto__);

return statearr_27955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto__))
);

return c__26301__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27983 = arguments.length;
switch (G__27983) {
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
var G__27986 = arguments.length;
switch (G__27986) {
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
var G__27989 = arguments.length;
switch (G__27989) {
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
var c__26301__auto___28036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___28036,out){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___28036,out){
return (function (state_28013){
var state_val_28014 = (state_28013[(1)]);
if((state_val_28014 === (7))){
var inst_28008 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28015_28037 = state_28013__$1;
(statearr_28015_28037[(2)] = inst_28008);

(statearr_28015_28037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (1))){
var inst_27990 = null;
var state_28013__$1 = (function (){var statearr_28016 = state_28013;
(statearr_28016[(7)] = inst_27990);

return statearr_28016;
})();
var statearr_28017_28038 = state_28013__$1;
(statearr_28017_28038[(2)] = null);

(statearr_28017_28038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (4))){
var inst_27993 = (state_28013[(8)]);
var inst_27993__$1 = (state_28013[(2)]);
var inst_27994 = (inst_27993__$1 == null);
var inst_27995 = cljs.core.not.call(null,inst_27994);
var state_28013__$1 = (function (){var statearr_28018 = state_28013;
(statearr_28018[(8)] = inst_27993__$1);

return statearr_28018;
})();
if(inst_27995){
var statearr_28019_28039 = state_28013__$1;
(statearr_28019_28039[(1)] = (5));

} else {
var statearr_28020_28040 = state_28013__$1;
(statearr_28020_28040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (6))){
var state_28013__$1 = state_28013;
var statearr_28021_28041 = state_28013__$1;
(statearr_28021_28041[(2)] = null);

(statearr_28021_28041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (3))){
var inst_28010 = (state_28013[(2)]);
var inst_28011 = cljs.core.async.close_BANG_.call(null,out);
var state_28013__$1 = (function (){var statearr_28022 = state_28013;
(statearr_28022[(9)] = inst_28010);

return statearr_28022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28013__$1,inst_28011);
} else {
if((state_val_28014 === (2))){
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28013__$1,(4),ch);
} else {
if((state_val_28014 === (11))){
var inst_27993 = (state_28013[(8)]);
var inst_28002 = (state_28013[(2)]);
var inst_27990 = inst_27993;
var state_28013__$1 = (function (){var statearr_28023 = state_28013;
(statearr_28023[(10)] = inst_28002);

(statearr_28023[(7)] = inst_27990);

return statearr_28023;
})();
var statearr_28024_28042 = state_28013__$1;
(statearr_28024_28042[(2)] = null);

(statearr_28024_28042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (9))){
var inst_27993 = (state_28013[(8)]);
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28013__$1,(11),out,inst_27993);
} else {
if((state_val_28014 === (5))){
var inst_27993 = (state_28013[(8)]);
var inst_27990 = (state_28013[(7)]);
var inst_27997 = cljs.core._EQ_.call(null,inst_27993,inst_27990);
var state_28013__$1 = state_28013;
if(inst_27997){
var statearr_28026_28043 = state_28013__$1;
(statearr_28026_28043[(1)] = (8));

} else {
var statearr_28027_28044 = state_28013__$1;
(statearr_28027_28044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (10))){
var inst_28005 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28028_28045 = state_28013__$1;
(statearr_28028_28045[(2)] = inst_28005);

(statearr_28028_28045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (8))){
var inst_27990 = (state_28013[(7)]);
var tmp28025 = inst_27990;
var inst_27990__$1 = tmp28025;
var state_28013__$1 = (function (){var statearr_28029 = state_28013;
(statearr_28029[(7)] = inst_27990__$1);

return statearr_28029;
})();
var statearr_28030_28046 = state_28013__$1;
(statearr_28030_28046[(2)] = null);

(statearr_28030_28046[(1)] = (2));


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
});})(c__26301__auto___28036,out))
;
return ((function (switch__26206__auto__,c__26301__auto___28036,out){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_28031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28031[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_28031[(1)] = (1));

return statearr_28031;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_28013){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_28013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e28032){if((e28032 instanceof Object)){
var ex__26210__auto__ = e28032;
var statearr_28033_28047 = state_28013;
(statearr_28033_28047[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28048 = state_28013;
state_28013 = G__28048;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_28013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_28013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___28036,out))
})();
var state__26303__auto__ = (function (){var statearr_28034 = f__26302__auto__.call(null);
(statearr_28034[(6)] = c__26301__auto___28036);

return statearr_28034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___28036,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28050 = arguments.length;
switch (G__28050) {
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
var c__26301__auto___28116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___28116,out){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___28116,out){
return (function (state_28088){
var state_val_28089 = (state_28088[(1)]);
if((state_val_28089 === (7))){
var inst_28084 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28090_28117 = state_28088__$1;
(statearr_28090_28117[(2)] = inst_28084);

(statearr_28090_28117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (1))){
var inst_28051 = (new Array(n));
var inst_28052 = inst_28051;
var inst_28053 = (0);
var state_28088__$1 = (function (){var statearr_28091 = state_28088;
(statearr_28091[(7)] = inst_28053);

(statearr_28091[(8)] = inst_28052);

return statearr_28091;
})();
var statearr_28092_28118 = state_28088__$1;
(statearr_28092_28118[(2)] = null);

(statearr_28092_28118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (4))){
var inst_28056 = (state_28088[(9)]);
var inst_28056__$1 = (state_28088[(2)]);
var inst_28057 = (inst_28056__$1 == null);
var inst_28058 = cljs.core.not.call(null,inst_28057);
var state_28088__$1 = (function (){var statearr_28093 = state_28088;
(statearr_28093[(9)] = inst_28056__$1);

return statearr_28093;
})();
if(inst_28058){
var statearr_28094_28119 = state_28088__$1;
(statearr_28094_28119[(1)] = (5));

} else {
var statearr_28095_28120 = state_28088__$1;
(statearr_28095_28120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (15))){
var inst_28078 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28096_28121 = state_28088__$1;
(statearr_28096_28121[(2)] = inst_28078);

(statearr_28096_28121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (13))){
var state_28088__$1 = state_28088;
var statearr_28097_28122 = state_28088__$1;
(statearr_28097_28122[(2)] = null);

(statearr_28097_28122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (6))){
var inst_28053 = (state_28088[(7)]);
var inst_28074 = (inst_28053 > (0));
var state_28088__$1 = state_28088;
if(cljs.core.truth_(inst_28074)){
var statearr_28098_28123 = state_28088__$1;
(statearr_28098_28123[(1)] = (12));

} else {
var statearr_28099_28124 = state_28088__$1;
(statearr_28099_28124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (3))){
var inst_28086 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28088__$1,inst_28086);
} else {
if((state_val_28089 === (12))){
var inst_28052 = (state_28088[(8)]);
var inst_28076 = cljs.core.vec.call(null,inst_28052);
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28088__$1,(15),out,inst_28076);
} else {
if((state_val_28089 === (2))){
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28088__$1,(4),ch);
} else {
if((state_val_28089 === (11))){
var inst_28068 = (state_28088[(2)]);
var inst_28069 = (new Array(n));
var inst_28052 = inst_28069;
var inst_28053 = (0);
var state_28088__$1 = (function (){var statearr_28100 = state_28088;
(statearr_28100[(7)] = inst_28053);

(statearr_28100[(8)] = inst_28052);

(statearr_28100[(10)] = inst_28068);

return statearr_28100;
})();
var statearr_28101_28125 = state_28088__$1;
(statearr_28101_28125[(2)] = null);

(statearr_28101_28125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (9))){
var inst_28052 = (state_28088[(8)]);
var inst_28066 = cljs.core.vec.call(null,inst_28052);
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28088__$1,(11),out,inst_28066);
} else {
if((state_val_28089 === (5))){
var inst_28053 = (state_28088[(7)]);
var inst_28052 = (state_28088[(8)]);
var inst_28061 = (state_28088[(11)]);
var inst_28056 = (state_28088[(9)]);
var inst_28060 = (inst_28052[inst_28053] = inst_28056);
var inst_28061__$1 = (inst_28053 + (1));
var inst_28062 = (inst_28061__$1 < n);
var state_28088__$1 = (function (){var statearr_28102 = state_28088;
(statearr_28102[(12)] = inst_28060);

(statearr_28102[(11)] = inst_28061__$1);

return statearr_28102;
})();
if(cljs.core.truth_(inst_28062)){
var statearr_28103_28126 = state_28088__$1;
(statearr_28103_28126[(1)] = (8));

} else {
var statearr_28104_28127 = state_28088__$1;
(statearr_28104_28127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (14))){
var inst_28081 = (state_28088[(2)]);
var inst_28082 = cljs.core.async.close_BANG_.call(null,out);
var state_28088__$1 = (function (){var statearr_28106 = state_28088;
(statearr_28106[(13)] = inst_28081);

return statearr_28106;
})();
var statearr_28107_28128 = state_28088__$1;
(statearr_28107_28128[(2)] = inst_28082);

(statearr_28107_28128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (10))){
var inst_28072 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28108_28129 = state_28088__$1;
(statearr_28108_28129[(2)] = inst_28072);

(statearr_28108_28129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (8))){
var inst_28052 = (state_28088[(8)]);
var inst_28061 = (state_28088[(11)]);
var tmp28105 = inst_28052;
var inst_28052__$1 = tmp28105;
var inst_28053 = inst_28061;
var state_28088__$1 = (function (){var statearr_28109 = state_28088;
(statearr_28109[(7)] = inst_28053);

(statearr_28109[(8)] = inst_28052__$1);

return statearr_28109;
})();
var statearr_28110_28130 = state_28088__$1;
(statearr_28110_28130[(2)] = null);

(statearr_28110_28130[(1)] = (2));


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
});})(c__26301__auto___28116,out))
;
return ((function (switch__26206__auto__,c__26301__auto___28116,out){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_28111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28111[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_28111[(1)] = (1));

return statearr_28111;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_28088){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_28088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e28112){if((e28112 instanceof Object)){
var ex__26210__auto__ = e28112;
var statearr_28113_28131 = state_28088;
(statearr_28113_28131[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28132 = state_28088;
state_28088 = G__28132;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_28088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_28088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___28116,out))
})();
var state__26303__auto__ = (function (){var statearr_28114 = f__26302__auto__.call(null);
(statearr_28114[(6)] = c__26301__auto___28116);

return statearr_28114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___28116,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28134 = arguments.length;
switch (G__28134) {
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
var c__26301__auto___28204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26301__auto___28204,out){
return (function (){
var f__26302__auto__ = (function (){var switch__26206__auto__ = ((function (c__26301__auto___28204,out){
return (function (state_28176){
var state_val_28177 = (state_28176[(1)]);
if((state_val_28177 === (7))){
var inst_28172 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28178_28205 = state_28176__$1;
(statearr_28178_28205[(2)] = inst_28172);

(statearr_28178_28205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (1))){
var inst_28135 = [];
var inst_28136 = inst_28135;
var inst_28137 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28176__$1 = (function (){var statearr_28179 = state_28176;
(statearr_28179[(7)] = inst_28136);

(statearr_28179[(8)] = inst_28137);

return statearr_28179;
})();
var statearr_28180_28206 = state_28176__$1;
(statearr_28180_28206[(2)] = null);

(statearr_28180_28206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (4))){
var inst_28140 = (state_28176[(9)]);
var inst_28140__$1 = (state_28176[(2)]);
var inst_28141 = (inst_28140__$1 == null);
var inst_28142 = cljs.core.not.call(null,inst_28141);
var state_28176__$1 = (function (){var statearr_28181 = state_28176;
(statearr_28181[(9)] = inst_28140__$1);

return statearr_28181;
})();
if(inst_28142){
var statearr_28182_28207 = state_28176__$1;
(statearr_28182_28207[(1)] = (5));

} else {
var statearr_28183_28208 = state_28176__$1;
(statearr_28183_28208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (15))){
var inst_28166 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28184_28209 = state_28176__$1;
(statearr_28184_28209[(2)] = inst_28166);

(statearr_28184_28209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (13))){
var state_28176__$1 = state_28176;
var statearr_28185_28210 = state_28176__$1;
(statearr_28185_28210[(2)] = null);

(statearr_28185_28210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (6))){
var inst_28136 = (state_28176[(7)]);
var inst_28161 = inst_28136.length;
var inst_28162 = (inst_28161 > (0));
var state_28176__$1 = state_28176;
if(cljs.core.truth_(inst_28162)){
var statearr_28186_28211 = state_28176__$1;
(statearr_28186_28211[(1)] = (12));

} else {
var statearr_28187_28212 = state_28176__$1;
(statearr_28187_28212[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (3))){
var inst_28174 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28176__$1,inst_28174);
} else {
if((state_val_28177 === (12))){
var inst_28136 = (state_28176[(7)]);
var inst_28164 = cljs.core.vec.call(null,inst_28136);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28176__$1,(15),out,inst_28164);
} else {
if((state_val_28177 === (2))){
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28176__$1,(4),ch);
} else {
if((state_val_28177 === (11))){
var inst_28140 = (state_28176[(9)]);
var inst_28144 = (state_28176[(10)]);
var inst_28154 = (state_28176[(2)]);
var inst_28155 = [];
var inst_28156 = inst_28155.push(inst_28140);
var inst_28136 = inst_28155;
var inst_28137 = inst_28144;
var state_28176__$1 = (function (){var statearr_28188 = state_28176;
(statearr_28188[(7)] = inst_28136);

(statearr_28188[(11)] = inst_28154);

(statearr_28188[(12)] = inst_28156);

(statearr_28188[(8)] = inst_28137);

return statearr_28188;
})();
var statearr_28189_28213 = state_28176__$1;
(statearr_28189_28213[(2)] = null);

(statearr_28189_28213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (9))){
var inst_28136 = (state_28176[(7)]);
var inst_28152 = cljs.core.vec.call(null,inst_28136);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28176__$1,(11),out,inst_28152);
} else {
if((state_val_28177 === (5))){
var inst_28140 = (state_28176[(9)]);
var inst_28144 = (state_28176[(10)]);
var inst_28137 = (state_28176[(8)]);
var inst_28144__$1 = f.call(null,inst_28140);
var inst_28145 = cljs.core._EQ_.call(null,inst_28144__$1,inst_28137);
var inst_28146 = cljs.core.keyword_identical_QMARK_.call(null,inst_28137,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28147 = ((inst_28145) || (inst_28146));
var state_28176__$1 = (function (){var statearr_28190 = state_28176;
(statearr_28190[(10)] = inst_28144__$1);

return statearr_28190;
})();
if(cljs.core.truth_(inst_28147)){
var statearr_28191_28214 = state_28176__$1;
(statearr_28191_28214[(1)] = (8));

} else {
var statearr_28192_28215 = state_28176__$1;
(statearr_28192_28215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (14))){
var inst_28169 = (state_28176[(2)]);
var inst_28170 = cljs.core.async.close_BANG_.call(null,out);
var state_28176__$1 = (function (){var statearr_28194 = state_28176;
(statearr_28194[(13)] = inst_28169);

return statearr_28194;
})();
var statearr_28195_28216 = state_28176__$1;
(statearr_28195_28216[(2)] = inst_28170);

(statearr_28195_28216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (10))){
var inst_28159 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28196_28217 = state_28176__$1;
(statearr_28196_28217[(2)] = inst_28159);

(statearr_28196_28217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (8))){
var inst_28136 = (state_28176[(7)]);
var inst_28140 = (state_28176[(9)]);
var inst_28144 = (state_28176[(10)]);
var inst_28149 = inst_28136.push(inst_28140);
var tmp28193 = inst_28136;
var inst_28136__$1 = tmp28193;
var inst_28137 = inst_28144;
var state_28176__$1 = (function (){var statearr_28197 = state_28176;
(statearr_28197[(7)] = inst_28136__$1);

(statearr_28197[(14)] = inst_28149);

(statearr_28197[(8)] = inst_28137);

return statearr_28197;
})();
var statearr_28198_28218 = state_28176__$1;
(statearr_28198_28218[(2)] = null);

(statearr_28198_28218[(1)] = (2));


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
});})(c__26301__auto___28204,out))
;
return ((function (switch__26206__auto__,c__26301__auto___28204,out){
return (function() {
var cljs$core$async$state_machine__26207__auto__ = null;
var cljs$core$async$state_machine__26207__auto____0 = (function (){
var statearr_28199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28199[(0)] = cljs$core$async$state_machine__26207__auto__);

(statearr_28199[(1)] = (1));

return statearr_28199;
});
var cljs$core$async$state_machine__26207__auto____1 = (function (state_28176){
while(true){
var ret_value__26208__auto__ = (function (){try{while(true){
var result__26209__auto__ = switch__26206__auto__.call(null,state_28176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26209__auto__;
}
break;
}
}catch (e28200){if((e28200 instanceof Object)){
var ex__26210__auto__ = e28200;
var statearr_28201_28219 = state_28176;
(statearr_28201_28219[(5)] = ex__26210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28220 = state_28176;
state_28176 = G__28220;
continue;
} else {
return ret_value__26208__auto__;
}
break;
}
});
cljs$core$async$state_machine__26207__auto__ = function(state_28176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26207__auto____1.call(this,state_28176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26207__auto____0;
cljs$core$async$state_machine__26207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26207__auto____1;
return cljs$core$async$state_machine__26207__auto__;
})()
;})(switch__26206__auto__,c__26301__auto___28204,out))
})();
var state__26303__auto__ = (function (){var statearr_28202 = f__26302__auto__.call(null);
(statearr_28202[(6)] = c__26301__auto___28204);

return statearr_28202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26303__auto__);
});})(c__26301__auto___28204,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581970846443
