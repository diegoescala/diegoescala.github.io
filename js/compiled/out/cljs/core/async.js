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
var G__26365 = arguments.length;
switch (G__26365) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26366 = (function (f,blockable,meta26367){
this.f = f;
this.blockable = blockable;
this.meta26367 = meta26367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26368,meta26367__$1){
var self__ = this;
var _26368__$1 = this;
return (new cljs.core.async.t_cljs$core$async26366(self__.f,self__.blockable,meta26367__$1));
});

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26368){
var self__ = this;
var _26368__$1 = this;
return self__.meta26367;
});

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26367","meta26367",-1380903031,null)], null);
});

cljs.core.async.t_cljs$core$async26366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26366";

cljs.core.async.t_cljs$core$async26366.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26366");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26366.
 */
cljs.core.async.__GT_t_cljs$core$async26366 = (function cljs$core$async$__GT_t_cljs$core$async26366(f__$1,blockable__$1,meta26367){
return (new cljs.core.async.t_cljs$core$async26366(f__$1,blockable__$1,meta26367));
});

}

return (new cljs.core.async.t_cljs$core$async26366(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26372 = arguments.length;
switch (G__26372) {
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
var G__26375 = arguments.length;
switch (G__26375) {
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
var G__26378 = arguments.length;
switch (G__26378) {
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
var val_26380 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26380);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26380,ret){
return (function (){
return fn1.call(null,val_26380);
});})(val_26380,ret))
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
var G__26382 = arguments.length;
switch (G__26382) {
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
var n__4607__auto___26384 = n;
var x_26385 = (0);
while(true){
if((x_26385 < n__4607__auto___26384)){
(a[x_26385] = x_26385);

var G__26386 = (x_26385 + (1));
x_26385 = G__26386;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26387 = (function (flag,meta26388){
this.flag = flag;
this.meta26388 = meta26388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26389,meta26388__$1){
var self__ = this;
var _26389__$1 = this;
return (new cljs.core.async.t_cljs$core$async26387(self__.flag,meta26388__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26389){
var self__ = this;
var _26389__$1 = this;
return self__.meta26388;
});})(flag))
;

cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26387.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26388","meta26388",731658834,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26387";

cljs.core.async.t_cljs$core$async26387.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26387");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26387.
 */
cljs.core.async.__GT_t_cljs$core$async26387 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26387(flag__$1,meta26388){
return (new cljs.core.async.t_cljs$core$async26387(flag__$1,meta26388));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26387(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26390 = (function (flag,cb,meta26391){
this.flag = flag;
this.cb = cb;
this.meta26391 = meta26391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26392,meta26391__$1){
var self__ = this;
var _26392__$1 = this;
return (new cljs.core.async.t_cljs$core$async26390(self__.flag,self__.cb,meta26391__$1));
});

cljs.core.async.t_cljs$core$async26390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26392){
var self__ = this;
var _26392__$1 = this;
return self__.meta26391;
});

cljs.core.async.t_cljs$core$async26390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26391","meta26391",-255861366,null)], null);
});

cljs.core.async.t_cljs$core$async26390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26390";

cljs.core.async.t_cljs$core$async26390.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26390");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26390.
 */
cljs.core.async.__GT_t_cljs$core$async26390 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26390(flag__$1,cb__$1,meta26391){
return (new cljs.core.async.t_cljs$core$async26390(flag__$1,cb__$1,meta26391));
});

}

return (new cljs.core.async.t_cljs$core$async26390(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26393_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26393_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26394_SHARP_,port], null));
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
var G__26395 = (i + (1));
i = G__26395;
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
var len__4730__auto___26401 = arguments.length;
var i__4731__auto___26402 = (0);
while(true){
if((i__4731__auto___26402 < len__4730__auto___26401)){
args__4736__auto__.push((arguments[i__4731__auto___26402]));

var G__26403 = (i__4731__auto___26402 + (1));
i__4731__auto___26402 = G__26403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26398){
var map__26399 = p__26398;
var map__26399__$1 = (((((!((map__26399 == null))))?(((((map__26399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26399):map__26399);
var opts = map__26399__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26396){
var G__26397 = cljs.core.first.call(null,seq26396);
var seq26396__$1 = cljs.core.next.call(null,seq26396);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26397,seq26396__$1);
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
var G__26405 = arguments.length;
switch (G__26405) {
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
var c__26305__auto___26451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___26451){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___26451){
return (function (state_26429){
var state_val_26430 = (state_26429[(1)]);
if((state_val_26430 === (7))){
var inst_26425 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26431_26452 = state_26429__$1;
(statearr_26431_26452[(2)] = inst_26425);

(statearr_26431_26452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (1))){
var state_26429__$1 = state_26429;
var statearr_26432_26453 = state_26429__$1;
(statearr_26432_26453[(2)] = null);

(statearr_26432_26453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (4))){
var inst_26408 = (state_26429[(7)]);
var inst_26408__$1 = (state_26429[(2)]);
var inst_26409 = (inst_26408__$1 == null);
var state_26429__$1 = (function (){var statearr_26433 = state_26429;
(statearr_26433[(7)] = inst_26408__$1);

return statearr_26433;
})();
if(cljs.core.truth_(inst_26409)){
var statearr_26434_26454 = state_26429__$1;
(statearr_26434_26454[(1)] = (5));

} else {
var statearr_26435_26455 = state_26429__$1;
(statearr_26435_26455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (13))){
var state_26429__$1 = state_26429;
var statearr_26436_26456 = state_26429__$1;
(statearr_26436_26456[(2)] = null);

(statearr_26436_26456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (6))){
var inst_26408 = (state_26429[(7)]);
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26429__$1,(11),to,inst_26408);
} else {
if((state_val_26430 === (3))){
var inst_26427 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26429__$1,inst_26427);
} else {
if((state_val_26430 === (12))){
var state_26429__$1 = state_26429;
var statearr_26437_26457 = state_26429__$1;
(statearr_26437_26457[(2)] = null);

(statearr_26437_26457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (2))){
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26429__$1,(4),from);
} else {
if((state_val_26430 === (11))){
var inst_26418 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
if(cljs.core.truth_(inst_26418)){
var statearr_26438_26458 = state_26429__$1;
(statearr_26438_26458[(1)] = (12));

} else {
var statearr_26439_26459 = state_26429__$1;
(statearr_26439_26459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (9))){
var state_26429__$1 = state_26429;
var statearr_26440_26460 = state_26429__$1;
(statearr_26440_26460[(2)] = null);

(statearr_26440_26460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (5))){
var state_26429__$1 = state_26429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26441_26461 = state_26429__$1;
(statearr_26441_26461[(1)] = (8));

} else {
var statearr_26442_26462 = state_26429__$1;
(statearr_26442_26462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (14))){
var inst_26423 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26443_26463 = state_26429__$1;
(statearr_26443_26463[(2)] = inst_26423);

(statearr_26443_26463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (10))){
var inst_26415 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26444_26464 = state_26429__$1;
(statearr_26444_26464[(2)] = inst_26415);

(statearr_26444_26464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (8))){
var inst_26412 = cljs.core.async.close_BANG_.call(null,to);
var state_26429__$1 = state_26429;
var statearr_26445_26465 = state_26429__$1;
(statearr_26445_26465[(2)] = inst_26412);

(statearr_26445_26465[(1)] = (10));


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
});})(c__26305__auto___26451))
;
return ((function (switch__26210__auto__,c__26305__auto___26451){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_26446 = [null,null,null,null,null,null,null,null];
(statearr_26446[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_26446[(1)] = (1));

return statearr_26446;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_26429){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26447){if((e26447 instanceof Object)){
var ex__26214__auto__ = e26447;
var statearr_26448_26466 = state_26429;
(statearr_26448_26466[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26467 = state_26429;
state_26429 = G__26467;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_26429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_26429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___26451))
})();
var state__26307__auto__ = (function (){var statearr_26449 = f__26306__auto__.call(null);
(statearr_26449[(6)] = c__26305__auto___26451);

return statearr_26449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___26451))
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
return (function (p__26468){
var vec__26469 = p__26468;
var v = cljs.core.nth.call(null,vec__26469,(0),null);
var p = cljs.core.nth.call(null,vec__26469,(1),null);
var job = vec__26469;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26305__auto___26640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___26640,res,vec__26469,v,p,job,jobs,results){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___26640,res,vec__26469,v,p,job,jobs,results){
return (function (state_26476){
var state_val_26477 = (state_26476[(1)]);
if((state_val_26477 === (1))){
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26476__$1,(2),res,v);
} else {
if((state_val_26477 === (2))){
var inst_26473 = (state_26476[(2)]);
var inst_26474 = cljs.core.async.close_BANG_.call(null,res);
var state_26476__$1 = (function (){var statearr_26478 = state_26476;
(statearr_26478[(7)] = inst_26473);

return statearr_26478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26476__$1,inst_26474);
} else {
return null;
}
}
});})(c__26305__auto___26640,res,vec__26469,v,p,job,jobs,results))
;
return ((function (switch__26210__auto__,c__26305__auto___26640,res,vec__26469,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0 = (function (){
var statearr_26479 = [null,null,null,null,null,null,null,null];
(statearr_26479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__);

(statearr_26479[(1)] = (1));

return statearr_26479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1 = (function (state_26476){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26480){if((e26480 instanceof Object)){
var ex__26214__auto__ = e26480;
var statearr_26481_26641 = state_26476;
(statearr_26481_26641[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26642 = state_26476;
state_26476 = G__26642;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = function(state_26476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1.call(this,state_26476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___26640,res,vec__26469,v,p,job,jobs,results))
})();
var state__26307__auto__ = (function (){var statearr_26482 = f__26306__auto__.call(null);
(statearr_26482[(6)] = c__26305__auto___26640);

return statearr_26482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___26640,res,vec__26469,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26483){
var vec__26484 = p__26483;
var v = cljs.core.nth.call(null,vec__26484,(0),null);
var p = cljs.core.nth.call(null,vec__26484,(1),null);
var job = vec__26484;
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
var n__4607__auto___26643 = n;
var __26644 = (0);
while(true){
if((__26644 < n__4607__auto___26643)){
var G__26487_26645 = type;
var G__26487_26646__$1 = (((G__26487_26645 instanceof cljs.core.Keyword))?G__26487_26645.fqn:null);
switch (G__26487_26646__$1) {
case "compute":
var c__26305__auto___26648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26644,c__26305__auto___26648,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (__26644,c__26305__auto___26648,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async){
return (function (state_26500){
var state_val_26501 = (state_26500[(1)]);
if((state_val_26501 === (1))){
var state_26500__$1 = state_26500;
var statearr_26502_26649 = state_26500__$1;
(statearr_26502_26649[(2)] = null);

(statearr_26502_26649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (2))){
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26500__$1,(4),jobs);
} else {
if((state_val_26501 === (3))){
var inst_26498 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26500__$1,inst_26498);
} else {
if((state_val_26501 === (4))){
var inst_26490 = (state_26500[(2)]);
var inst_26491 = process.call(null,inst_26490);
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26491)){
var statearr_26503_26650 = state_26500__$1;
(statearr_26503_26650[(1)] = (5));

} else {
var statearr_26504_26651 = state_26500__$1;
(statearr_26504_26651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (5))){
var state_26500__$1 = state_26500;
var statearr_26505_26652 = state_26500__$1;
(statearr_26505_26652[(2)] = null);

(statearr_26505_26652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (6))){
var state_26500__$1 = state_26500;
var statearr_26506_26653 = state_26500__$1;
(statearr_26506_26653[(2)] = null);

(statearr_26506_26653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (7))){
var inst_26496 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26507_26654 = state_26500__$1;
(statearr_26507_26654[(2)] = inst_26496);

(statearr_26507_26654[(1)] = (3));


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
});})(__26644,c__26305__auto___26648,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async))
;
return ((function (__26644,switch__26210__auto__,c__26305__auto___26648,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0 = (function (){
var statearr_26508 = [null,null,null,null,null,null,null];
(statearr_26508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__);

(statearr_26508[(1)] = (1));

return statearr_26508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1 = (function (state_26500){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26509){if((e26509 instanceof Object)){
var ex__26214__auto__ = e26509;
var statearr_26510_26655 = state_26500;
(statearr_26510_26655[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26656 = state_26500;
state_26500 = G__26656;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = function(state_26500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1.call(this,state_26500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__;
})()
;})(__26644,switch__26210__auto__,c__26305__auto___26648,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async))
})();
var state__26307__auto__ = (function (){var statearr_26511 = f__26306__auto__.call(null);
(statearr_26511[(6)] = c__26305__auto___26648);

return statearr_26511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(__26644,c__26305__auto___26648,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async))
);


break;
case "async":
var c__26305__auto___26657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26644,c__26305__auto___26657,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (__26644,c__26305__auto___26657,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async){
return (function (state_26524){
var state_val_26525 = (state_26524[(1)]);
if((state_val_26525 === (1))){
var state_26524__$1 = state_26524;
var statearr_26526_26658 = state_26524__$1;
(statearr_26526_26658[(2)] = null);

(statearr_26526_26658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (2))){
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26524__$1,(4),jobs);
} else {
if((state_val_26525 === (3))){
var inst_26522 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26524__$1,inst_26522);
} else {
if((state_val_26525 === (4))){
var inst_26514 = (state_26524[(2)]);
var inst_26515 = async.call(null,inst_26514);
var state_26524__$1 = state_26524;
if(cljs.core.truth_(inst_26515)){
var statearr_26527_26659 = state_26524__$1;
(statearr_26527_26659[(1)] = (5));

} else {
var statearr_26528_26660 = state_26524__$1;
(statearr_26528_26660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (5))){
var state_26524__$1 = state_26524;
var statearr_26529_26661 = state_26524__$1;
(statearr_26529_26661[(2)] = null);

(statearr_26529_26661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (6))){
var state_26524__$1 = state_26524;
var statearr_26530_26662 = state_26524__$1;
(statearr_26530_26662[(2)] = null);

(statearr_26530_26662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (7))){
var inst_26520 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26531_26663 = state_26524__$1;
(statearr_26531_26663[(2)] = inst_26520);

(statearr_26531_26663[(1)] = (3));


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
});})(__26644,c__26305__auto___26657,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async))
;
return ((function (__26644,switch__26210__auto__,c__26305__auto___26657,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0 = (function (){
var statearr_26532 = [null,null,null,null,null,null,null];
(statearr_26532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__);

(statearr_26532[(1)] = (1));

return statearr_26532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1 = (function (state_26524){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26533){if((e26533 instanceof Object)){
var ex__26214__auto__ = e26533;
var statearr_26534_26664 = state_26524;
(statearr_26534_26664[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26665 = state_26524;
state_26524 = G__26665;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = function(state_26524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1.call(this,state_26524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__;
})()
;})(__26644,switch__26210__auto__,c__26305__auto___26657,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async))
})();
var state__26307__auto__ = (function (){var statearr_26535 = f__26306__auto__.call(null);
(statearr_26535[(6)] = c__26305__auto___26657);

return statearr_26535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(__26644,c__26305__auto___26657,G__26487_26645,G__26487_26646__$1,n__4607__auto___26643,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26487_26646__$1)].join('')));

}

var G__26666 = (__26644 + (1));
__26644 = G__26666;
continue;
} else {
}
break;
}

var c__26305__auto___26667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___26667,jobs,results,process,async){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___26667,jobs,results,process,async){
return (function (state_26557){
var state_val_26558 = (state_26557[(1)]);
if((state_val_26558 === (7))){
var inst_26553 = (state_26557[(2)]);
var state_26557__$1 = state_26557;
var statearr_26559_26668 = state_26557__$1;
(statearr_26559_26668[(2)] = inst_26553);

(statearr_26559_26668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (1))){
var state_26557__$1 = state_26557;
var statearr_26560_26669 = state_26557__$1;
(statearr_26560_26669[(2)] = null);

(statearr_26560_26669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (4))){
var inst_26538 = (state_26557[(7)]);
var inst_26538__$1 = (state_26557[(2)]);
var inst_26539 = (inst_26538__$1 == null);
var state_26557__$1 = (function (){var statearr_26561 = state_26557;
(statearr_26561[(7)] = inst_26538__$1);

return statearr_26561;
})();
if(cljs.core.truth_(inst_26539)){
var statearr_26562_26670 = state_26557__$1;
(statearr_26562_26670[(1)] = (5));

} else {
var statearr_26563_26671 = state_26557__$1;
(statearr_26563_26671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (6))){
var inst_26538 = (state_26557[(7)]);
var inst_26543 = (state_26557[(8)]);
var inst_26543__$1 = cljs.core.async.chan.call(null,(1));
var inst_26544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26545 = [inst_26538,inst_26543__$1];
var inst_26546 = (new cljs.core.PersistentVector(null,2,(5),inst_26544,inst_26545,null));
var state_26557__$1 = (function (){var statearr_26564 = state_26557;
(statearr_26564[(8)] = inst_26543__$1);

return statearr_26564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26557__$1,(8),jobs,inst_26546);
} else {
if((state_val_26558 === (3))){
var inst_26555 = (state_26557[(2)]);
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26557__$1,inst_26555);
} else {
if((state_val_26558 === (2))){
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26557__$1,(4),from);
} else {
if((state_val_26558 === (9))){
var inst_26550 = (state_26557[(2)]);
var state_26557__$1 = (function (){var statearr_26565 = state_26557;
(statearr_26565[(9)] = inst_26550);

return statearr_26565;
})();
var statearr_26566_26672 = state_26557__$1;
(statearr_26566_26672[(2)] = null);

(statearr_26566_26672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (5))){
var inst_26541 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26557__$1 = state_26557;
var statearr_26567_26673 = state_26557__$1;
(statearr_26567_26673[(2)] = inst_26541);

(statearr_26567_26673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (8))){
var inst_26543 = (state_26557[(8)]);
var inst_26548 = (state_26557[(2)]);
var state_26557__$1 = (function (){var statearr_26568 = state_26557;
(statearr_26568[(10)] = inst_26548);

return statearr_26568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26557__$1,(9),results,inst_26543);
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
});})(c__26305__auto___26667,jobs,results,process,async))
;
return ((function (switch__26210__auto__,c__26305__auto___26667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0 = (function (){
var statearr_26569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__);

(statearr_26569[(1)] = (1));

return statearr_26569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1 = (function (state_26557){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26570){if((e26570 instanceof Object)){
var ex__26214__auto__ = e26570;
var statearr_26571_26674 = state_26557;
(statearr_26571_26674[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26675 = state_26557;
state_26557 = G__26675;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = function(state_26557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1.call(this,state_26557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___26667,jobs,results,process,async))
})();
var state__26307__auto__ = (function (){var statearr_26572 = f__26306__auto__.call(null);
(statearr_26572[(6)] = c__26305__auto___26667);

return statearr_26572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___26667,jobs,results,process,async))
);


var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__,jobs,results,process,async){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__,jobs,results,process,async){
return (function (state_26610){
var state_val_26611 = (state_26610[(1)]);
if((state_val_26611 === (7))){
var inst_26606 = (state_26610[(2)]);
var state_26610__$1 = state_26610;
var statearr_26612_26676 = state_26610__$1;
(statearr_26612_26676[(2)] = inst_26606);

(statearr_26612_26676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (20))){
var state_26610__$1 = state_26610;
var statearr_26613_26677 = state_26610__$1;
(statearr_26613_26677[(2)] = null);

(statearr_26613_26677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (1))){
var state_26610__$1 = state_26610;
var statearr_26614_26678 = state_26610__$1;
(statearr_26614_26678[(2)] = null);

(statearr_26614_26678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (4))){
var inst_26575 = (state_26610[(7)]);
var inst_26575__$1 = (state_26610[(2)]);
var inst_26576 = (inst_26575__$1 == null);
var state_26610__$1 = (function (){var statearr_26615 = state_26610;
(statearr_26615[(7)] = inst_26575__$1);

return statearr_26615;
})();
if(cljs.core.truth_(inst_26576)){
var statearr_26616_26679 = state_26610__$1;
(statearr_26616_26679[(1)] = (5));

} else {
var statearr_26617_26680 = state_26610__$1;
(statearr_26617_26680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (15))){
var inst_26588 = (state_26610[(8)]);
var state_26610__$1 = state_26610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26610__$1,(18),to,inst_26588);
} else {
if((state_val_26611 === (21))){
var inst_26601 = (state_26610[(2)]);
var state_26610__$1 = state_26610;
var statearr_26618_26681 = state_26610__$1;
(statearr_26618_26681[(2)] = inst_26601);

(statearr_26618_26681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (13))){
var inst_26603 = (state_26610[(2)]);
var state_26610__$1 = (function (){var statearr_26619 = state_26610;
(statearr_26619[(9)] = inst_26603);

return statearr_26619;
})();
var statearr_26620_26682 = state_26610__$1;
(statearr_26620_26682[(2)] = null);

(statearr_26620_26682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (6))){
var inst_26575 = (state_26610[(7)]);
var state_26610__$1 = state_26610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26610__$1,(11),inst_26575);
} else {
if((state_val_26611 === (17))){
var inst_26596 = (state_26610[(2)]);
var state_26610__$1 = state_26610;
if(cljs.core.truth_(inst_26596)){
var statearr_26621_26683 = state_26610__$1;
(statearr_26621_26683[(1)] = (19));

} else {
var statearr_26622_26684 = state_26610__$1;
(statearr_26622_26684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (3))){
var inst_26608 = (state_26610[(2)]);
var state_26610__$1 = state_26610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26610__$1,inst_26608);
} else {
if((state_val_26611 === (12))){
var inst_26585 = (state_26610[(10)]);
var state_26610__$1 = state_26610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26610__$1,(14),inst_26585);
} else {
if((state_val_26611 === (2))){
var state_26610__$1 = state_26610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26610__$1,(4),results);
} else {
if((state_val_26611 === (19))){
var state_26610__$1 = state_26610;
var statearr_26623_26685 = state_26610__$1;
(statearr_26623_26685[(2)] = null);

(statearr_26623_26685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (11))){
var inst_26585 = (state_26610[(2)]);
var state_26610__$1 = (function (){var statearr_26624 = state_26610;
(statearr_26624[(10)] = inst_26585);

return statearr_26624;
})();
var statearr_26625_26686 = state_26610__$1;
(statearr_26625_26686[(2)] = null);

(statearr_26625_26686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (9))){
var state_26610__$1 = state_26610;
var statearr_26626_26687 = state_26610__$1;
(statearr_26626_26687[(2)] = null);

(statearr_26626_26687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (5))){
var state_26610__$1 = state_26610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26627_26688 = state_26610__$1;
(statearr_26627_26688[(1)] = (8));

} else {
var statearr_26628_26689 = state_26610__$1;
(statearr_26628_26689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (14))){
var inst_26588 = (state_26610[(8)]);
var inst_26590 = (state_26610[(11)]);
var inst_26588__$1 = (state_26610[(2)]);
var inst_26589 = (inst_26588__$1 == null);
var inst_26590__$1 = cljs.core.not.call(null,inst_26589);
var state_26610__$1 = (function (){var statearr_26629 = state_26610;
(statearr_26629[(8)] = inst_26588__$1);

(statearr_26629[(11)] = inst_26590__$1);

return statearr_26629;
})();
if(inst_26590__$1){
var statearr_26630_26690 = state_26610__$1;
(statearr_26630_26690[(1)] = (15));

} else {
var statearr_26631_26691 = state_26610__$1;
(statearr_26631_26691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (16))){
var inst_26590 = (state_26610[(11)]);
var state_26610__$1 = state_26610;
var statearr_26632_26692 = state_26610__$1;
(statearr_26632_26692[(2)] = inst_26590);

(statearr_26632_26692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (10))){
var inst_26582 = (state_26610[(2)]);
var state_26610__$1 = state_26610;
var statearr_26633_26693 = state_26610__$1;
(statearr_26633_26693[(2)] = inst_26582);

(statearr_26633_26693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (18))){
var inst_26593 = (state_26610[(2)]);
var state_26610__$1 = state_26610;
var statearr_26634_26694 = state_26610__$1;
(statearr_26634_26694[(2)] = inst_26593);

(statearr_26634_26694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (8))){
var inst_26579 = cljs.core.async.close_BANG_.call(null,to);
var state_26610__$1 = state_26610;
var statearr_26635_26695 = state_26610__$1;
(statearr_26635_26695[(2)] = inst_26579);

(statearr_26635_26695[(1)] = (10));


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
});})(c__26305__auto__,jobs,results,process,async))
;
return ((function (switch__26210__auto__,c__26305__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0 = (function (){
var statearr_26636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__);

(statearr_26636[(1)] = (1));

return statearr_26636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1 = (function (state_26610){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26637){if((e26637 instanceof Object)){
var ex__26214__auto__ = e26637;
var statearr_26638_26696 = state_26610;
(statearr_26638_26696[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26697 = state_26610;
state_26610 = G__26697;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__ = function(state_26610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1.call(this,state_26610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__,jobs,results,process,async))
})();
var state__26307__auto__ = (function (){var statearr_26639 = f__26306__auto__.call(null);
(statearr_26639[(6)] = c__26305__auto__);

return statearr_26639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__,jobs,results,process,async))
);

return c__26305__auto__;
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
var G__26699 = arguments.length;
switch (G__26699) {
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
var G__26702 = arguments.length;
switch (G__26702) {
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
var G__26705 = arguments.length;
switch (G__26705) {
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
var c__26305__auto___26754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___26754,tc,fc){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___26754,tc,fc){
return (function (state_26731){
var state_val_26732 = (state_26731[(1)]);
if((state_val_26732 === (7))){
var inst_26727 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26733_26755 = state_26731__$1;
(statearr_26733_26755[(2)] = inst_26727);

(statearr_26733_26755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (1))){
var state_26731__$1 = state_26731;
var statearr_26734_26756 = state_26731__$1;
(statearr_26734_26756[(2)] = null);

(statearr_26734_26756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (4))){
var inst_26708 = (state_26731[(7)]);
var inst_26708__$1 = (state_26731[(2)]);
var inst_26709 = (inst_26708__$1 == null);
var state_26731__$1 = (function (){var statearr_26735 = state_26731;
(statearr_26735[(7)] = inst_26708__$1);

return statearr_26735;
})();
if(cljs.core.truth_(inst_26709)){
var statearr_26736_26757 = state_26731__$1;
(statearr_26736_26757[(1)] = (5));

} else {
var statearr_26737_26758 = state_26731__$1;
(statearr_26737_26758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (13))){
var state_26731__$1 = state_26731;
var statearr_26738_26759 = state_26731__$1;
(statearr_26738_26759[(2)] = null);

(statearr_26738_26759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (6))){
var inst_26708 = (state_26731[(7)]);
var inst_26714 = p.call(null,inst_26708);
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26714)){
var statearr_26739_26760 = state_26731__$1;
(statearr_26739_26760[(1)] = (9));

} else {
var statearr_26740_26761 = state_26731__$1;
(statearr_26740_26761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (3))){
var inst_26729 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26731__$1,inst_26729);
} else {
if((state_val_26732 === (12))){
var state_26731__$1 = state_26731;
var statearr_26741_26762 = state_26731__$1;
(statearr_26741_26762[(2)] = null);

(statearr_26741_26762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (2))){
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26731__$1,(4),ch);
} else {
if((state_val_26732 === (11))){
var inst_26708 = (state_26731[(7)]);
var inst_26718 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26731__$1,(8),inst_26718,inst_26708);
} else {
if((state_val_26732 === (9))){
var state_26731__$1 = state_26731;
var statearr_26742_26763 = state_26731__$1;
(statearr_26742_26763[(2)] = tc);

(statearr_26742_26763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (5))){
var inst_26711 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26712 = cljs.core.async.close_BANG_.call(null,fc);
var state_26731__$1 = (function (){var statearr_26743 = state_26731;
(statearr_26743[(8)] = inst_26711);

return statearr_26743;
})();
var statearr_26744_26764 = state_26731__$1;
(statearr_26744_26764[(2)] = inst_26712);

(statearr_26744_26764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (14))){
var inst_26725 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26745_26765 = state_26731__$1;
(statearr_26745_26765[(2)] = inst_26725);

(statearr_26745_26765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (10))){
var state_26731__$1 = state_26731;
var statearr_26746_26766 = state_26731__$1;
(statearr_26746_26766[(2)] = fc);

(statearr_26746_26766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (8))){
var inst_26720 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26720)){
var statearr_26747_26767 = state_26731__$1;
(statearr_26747_26767[(1)] = (12));

} else {
var statearr_26748_26768 = state_26731__$1;
(statearr_26748_26768[(1)] = (13));

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
});})(c__26305__auto___26754,tc,fc))
;
return ((function (switch__26210__auto__,c__26305__auto___26754,tc,fc){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_26749 = [null,null,null,null,null,null,null,null,null];
(statearr_26749[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_26749[(1)] = (1));

return statearr_26749;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_26731){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26750){if((e26750 instanceof Object)){
var ex__26214__auto__ = e26750;
var statearr_26751_26769 = state_26731;
(statearr_26751_26769[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26770 = state_26731;
state_26731 = G__26770;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_26731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_26731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___26754,tc,fc))
})();
var state__26307__auto__ = (function (){var statearr_26752 = f__26306__auto__.call(null);
(statearr_26752[(6)] = c__26305__auto___26754);

return statearr_26752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___26754,tc,fc))
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
var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__){
return (function (state_26791){
var state_val_26792 = (state_26791[(1)]);
if((state_val_26792 === (7))){
var inst_26787 = (state_26791[(2)]);
var state_26791__$1 = state_26791;
var statearr_26793_26811 = state_26791__$1;
(statearr_26793_26811[(2)] = inst_26787);

(statearr_26793_26811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (1))){
var inst_26771 = init;
var state_26791__$1 = (function (){var statearr_26794 = state_26791;
(statearr_26794[(7)] = inst_26771);

return statearr_26794;
})();
var statearr_26795_26812 = state_26791__$1;
(statearr_26795_26812[(2)] = null);

(statearr_26795_26812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (4))){
var inst_26774 = (state_26791[(8)]);
var inst_26774__$1 = (state_26791[(2)]);
var inst_26775 = (inst_26774__$1 == null);
var state_26791__$1 = (function (){var statearr_26796 = state_26791;
(statearr_26796[(8)] = inst_26774__$1);

return statearr_26796;
})();
if(cljs.core.truth_(inst_26775)){
var statearr_26797_26813 = state_26791__$1;
(statearr_26797_26813[(1)] = (5));

} else {
var statearr_26798_26814 = state_26791__$1;
(statearr_26798_26814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (6))){
var inst_26771 = (state_26791[(7)]);
var inst_26774 = (state_26791[(8)]);
var inst_26778 = (state_26791[(9)]);
var inst_26778__$1 = f.call(null,inst_26771,inst_26774);
var inst_26779 = cljs.core.reduced_QMARK_.call(null,inst_26778__$1);
var state_26791__$1 = (function (){var statearr_26799 = state_26791;
(statearr_26799[(9)] = inst_26778__$1);

return statearr_26799;
})();
if(inst_26779){
var statearr_26800_26815 = state_26791__$1;
(statearr_26800_26815[(1)] = (8));

} else {
var statearr_26801_26816 = state_26791__$1;
(statearr_26801_26816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (3))){
var inst_26789 = (state_26791[(2)]);
var state_26791__$1 = state_26791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26791__$1,inst_26789);
} else {
if((state_val_26792 === (2))){
var state_26791__$1 = state_26791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26791__$1,(4),ch);
} else {
if((state_val_26792 === (9))){
var inst_26778 = (state_26791[(9)]);
var inst_26771 = inst_26778;
var state_26791__$1 = (function (){var statearr_26802 = state_26791;
(statearr_26802[(7)] = inst_26771);

return statearr_26802;
})();
var statearr_26803_26817 = state_26791__$1;
(statearr_26803_26817[(2)] = null);

(statearr_26803_26817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (5))){
var inst_26771 = (state_26791[(7)]);
var state_26791__$1 = state_26791;
var statearr_26804_26818 = state_26791__$1;
(statearr_26804_26818[(2)] = inst_26771);

(statearr_26804_26818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (10))){
var inst_26785 = (state_26791[(2)]);
var state_26791__$1 = state_26791;
var statearr_26805_26819 = state_26791__$1;
(statearr_26805_26819[(2)] = inst_26785);

(statearr_26805_26819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (8))){
var inst_26778 = (state_26791[(9)]);
var inst_26781 = cljs.core.deref.call(null,inst_26778);
var state_26791__$1 = state_26791;
var statearr_26806_26820 = state_26791__$1;
(statearr_26806_26820[(2)] = inst_26781);

(statearr_26806_26820[(1)] = (10));


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
});})(c__26305__auto__))
;
return ((function (switch__26210__auto__,c__26305__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26211__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26211__auto____0 = (function (){
var statearr_26807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26807[(0)] = cljs$core$async$reduce_$_state_machine__26211__auto__);

(statearr_26807[(1)] = (1));

return statearr_26807;
});
var cljs$core$async$reduce_$_state_machine__26211__auto____1 = (function (state_26791){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26808){if((e26808 instanceof Object)){
var ex__26214__auto__ = e26808;
var statearr_26809_26821 = state_26791;
(statearr_26809_26821[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26822 = state_26791;
state_26791 = G__26822;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26211__auto__ = function(state_26791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26211__auto____1.call(this,state_26791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26211__auto____0;
cljs$core$async$reduce_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26211__auto____1;
return cljs$core$async$reduce_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__))
})();
var state__26307__auto__ = (function (){var statearr_26810 = f__26306__auto__.call(null);
(statearr_26810[(6)] = c__26305__auto__);

return statearr_26810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__))
);

return c__26305__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__,f__$1){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__,f__$1){
return (function (state_26828){
var state_val_26829 = (state_26828[(1)]);
if((state_val_26829 === (1))){
var inst_26823 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26828__$1 = state_26828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26828__$1,(2),inst_26823);
} else {
if((state_val_26829 === (2))){
var inst_26825 = (state_26828[(2)]);
var inst_26826 = f__$1.call(null,inst_26825);
var state_26828__$1 = state_26828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26828__$1,inst_26826);
} else {
return null;
}
}
});})(c__26305__auto__,f__$1))
;
return ((function (switch__26210__auto__,c__26305__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26211__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26211__auto____0 = (function (){
var statearr_26830 = [null,null,null,null,null,null,null];
(statearr_26830[(0)] = cljs$core$async$transduce_$_state_machine__26211__auto__);

(statearr_26830[(1)] = (1));

return statearr_26830;
});
var cljs$core$async$transduce_$_state_machine__26211__auto____1 = (function (state_26828){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26831){if((e26831 instanceof Object)){
var ex__26214__auto__ = e26831;
var statearr_26832_26834 = state_26828;
(statearr_26832_26834[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26835 = state_26828;
state_26828 = G__26835;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26211__auto__ = function(state_26828){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26211__auto____1.call(this,state_26828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26211__auto____0;
cljs$core$async$transduce_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26211__auto____1;
return cljs$core$async$transduce_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__,f__$1))
})();
var state__26307__auto__ = (function (){var statearr_26833 = f__26306__auto__.call(null);
(statearr_26833[(6)] = c__26305__auto__);

return statearr_26833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__,f__$1))
);

return c__26305__auto__;
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
var G__26837 = arguments.length;
switch (G__26837) {
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
var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__){
return (function (state_26862){
var state_val_26863 = (state_26862[(1)]);
if((state_val_26863 === (7))){
var inst_26844 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26864_26885 = state_26862__$1;
(statearr_26864_26885[(2)] = inst_26844);

(statearr_26864_26885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (1))){
var inst_26838 = cljs.core.seq.call(null,coll);
var inst_26839 = inst_26838;
var state_26862__$1 = (function (){var statearr_26865 = state_26862;
(statearr_26865[(7)] = inst_26839);

return statearr_26865;
})();
var statearr_26866_26886 = state_26862__$1;
(statearr_26866_26886[(2)] = null);

(statearr_26866_26886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (4))){
var inst_26839 = (state_26862[(7)]);
var inst_26842 = cljs.core.first.call(null,inst_26839);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26862__$1,(7),ch,inst_26842);
} else {
if((state_val_26863 === (13))){
var inst_26856 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26867_26887 = state_26862__$1;
(statearr_26867_26887[(2)] = inst_26856);

(statearr_26867_26887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (6))){
var inst_26847 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
if(cljs.core.truth_(inst_26847)){
var statearr_26868_26888 = state_26862__$1;
(statearr_26868_26888[(1)] = (8));

} else {
var statearr_26869_26889 = state_26862__$1;
(statearr_26869_26889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (3))){
var inst_26860 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26862__$1,inst_26860);
} else {
if((state_val_26863 === (12))){
var state_26862__$1 = state_26862;
var statearr_26870_26890 = state_26862__$1;
(statearr_26870_26890[(2)] = null);

(statearr_26870_26890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (2))){
var inst_26839 = (state_26862[(7)]);
var state_26862__$1 = state_26862;
if(cljs.core.truth_(inst_26839)){
var statearr_26871_26891 = state_26862__$1;
(statearr_26871_26891[(1)] = (4));

} else {
var statearr_26872_26892 = state_26862__$1;
(statearr_26872_26892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (11))){
var inst_26853 = cljs.core.async.close_BANG_.call(null,ch);
var state_26862__$1 = state_26862;
var statearr_26873_26893 = state_26862__$1;
(statearr_26873_26893[(2)] = inst_26853);

(statearr_26873_26893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (9))){
var state_26862__$1 = state_26862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26874_26894 = state_26862__$1;
(statearr_26874_26894[(1)] = (11));

} else {
var statearr_26875_26895 = state_26862__$1;
(statearr_26875_26895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (5))){
var inst_26839 = (state_26862[(7)]);
var state_26862__$1 = state_26862;
var statearr_26876_26896 = state_26862__$1;
(statearr_26876_26896[(2)] = inst_26839);

(statearr_26876_26896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (10))){
var inst_26858 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26877_26897 = state_26862__$1;
(statearr_26877_26897[(2)] = inst_26858);

(statearr_26877_26897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (8))){
var inst_26839 = (state_26862[(7)]);
var inst_26849 = cljs.core.next.call(null,inst_26839);
var inst_26839__$1 = inst_26849;
var state_26862__$1 = (function (){var statearr_26878 = state_26862;
(statearr_26878[(7)] = inst_26839__$1);

return statearr_26878;
})();
var statearr_26879_26898 = state_26862__$1;
(statearr_26879_26898[(2)] = null);

(statearr_26879_26898[(1)] = (2));


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
});})(c__26305__auto__))
;
return ((function (switch__26210__auto__,c__26305__auto__){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_26880 = [null,null,null,null,null,null,null,null];
(statearr_26880[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_26880[(1)] = (1));

return statearr_26880;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_26862){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_26862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e26881){if((e26881 instanceof Object)){
var ex__26214__auto__ = e26881;
var statearr_26882_26899 = state_26862;
(statearr_26882_26899[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26900 = state_26862;
state_26862 = G__26900;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_26862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_26862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__))
})();
var state__26307__auto__ = (function (){var statearr_26883 = f__26306__auto__.call(null);
(statearr_26883[(6)] = c__26305__auto__);

return statearr_26883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__))
);

return c__26305__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26901 = (function (ch,cs,meta26902){
this.ch = ch;
this.cs = cs;
this.meta26902 = meta26902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26903,meta26902__$1){
var self__ = this;
var _26903__$1 = this;
return (new cljs.core.async.t_cljs$core$async26901(self__.ch,self__.cs,meta26902__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26903){
var self__ = this;
var _26903__$1 = this;
return self__.meta26902;
});})(cs))
;

cljs.core.async.t_cljs$core$async26901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26901.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26901.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26901.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26901.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26901.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26902","meta26902",657850381,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26901";

cljs.core.async.t_cljs$core$async26901.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26901");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26901.
 */
cljs.core.async.__GT_t_cljs$core$async26901 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26901(ch__$1,cs__$1,meta26902){
return (new cljs.core.async.t_cljs$core$async26901(ch__$1,cs__$1,meta26902));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26901(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26305__auto___27123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___27123,cs,m,dchan,dctr,done){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___27123,cs,m,dchan,dctr,done){
return (function (state_27038){
var state_val_27039 = (state_27038[(1)]);
if((state_val_27039 === (7))){
var inst_27034 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27040_27124 = state_27038__$1;
(statearr_27040_27124[(2)] = inst_27034);

(statearr_27040_27124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (20))){
var inst_26937 = (state_27038[(7)]);
var inst_26949 = cljs.core.first.call(null,inst_26937);
var inst_26950 = cljs.core.nth.call(null,inst_26949,(0),null);
var inst_26951 = cljs.core.nth.call(null,inst_26949,(1),null);
var state_27038__$1 = (function (){var statearr_27041 = state_27038;
(statearr_27041[(8)] = inst_26950);

return statearr_27041;
})();
if(cljs.core.truth_(inst_26951)){
var statearr_27042_27125 = state_27038__$1;
(statearr_27042_27125[(1)] = (22));

} else {
var statearr_27043_27126 = state_27038__$1;
(statearr_27043_27126[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (27))){
var inst_26979 = (state_27038[(9)]);
var inst_26981 = (state_27038[(10)]);
var inst_26906 = (state_27038[(11)]);
var inst_26986 = (state_27038[(12)]);
var inst_26986__$1 = cljs.core._nth.call(null,inst_26979,inst_26981);
var inst_26987 = cljs.core.async.put_BANG_.call(null,inst_26986__$1,inst_26906,done);
var state_27038__$1 = (function (){var statearr_27044 = state_27038;
(statearr_27044[(12)] = inst_26986__$1);

return statearr_27044;
})();
if(cljs.core.truth_(inst_26987)){
var statearr_27045_27127 = state_27038__$1;
(statearr_27045_27127[(1)] = (30));

} else {
var statearr_27046_27128 = state_27038__$1;
(statearr_27046_27128[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (1))){
var state_27038__$1 = state_27038;
var statearr_27047_27129 = state_27038__$1;
(statearr_27047_27129[(2)] = null);

(statearr_27047_27129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (24))){
var inst_26937 = (state_27038[(7)]);
var inst_26956 = (state_27038[(2)]);
var inst_26957 = cljs.core.next.call(null,inst_26937);
var inst_26915 = inst_26957;
var inst_26916 = null;
var inst_26917 = (0);
var inst_26918 = (0);
var state_27038__$1 = (function (){var statearr_27048 = state_27038;
(statearr_27048[(13)] = inst_26916);

(statearr_27048[(14)] = inst_26917);

(statearr_27048[(15)] = inst_26956);

(statearr_27048[(16)] = inst_26918);

(statearr_27048[(17)] = inst_26915);

return statearr_27048;
})();
var statearr_27049_27130 = state_27038__$1;
(statearr_27049_27130[(2)] = null);

(statearr_27049_27130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (39))){
var state_27038__$1 = state_27038;
var statearr_27053_27131 = state_27038__$1;
(statearr_27053_27131[(2)] = null);

(statearr_27053_27131[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (4))){
var inst_26906 = (state_27038[(11)]);
var inst_26906__$1 = (state_27038[(2)]);
var inst_26907 = (inst_26906__$1 == null);
var state_27038__$1 = (function (){var statearr_27054 = state_27038;
(statearr_27054[(11)] = inst_26906__$1);

return statearr_27054;
})();
if(cljs.core.truth_(inst_26907)){
var statearr_27055_27132 = state_27038__$1;
(statearr_27055_27132[(1)] = (5));

} else {
var statearr_27056_27133 = state_27038__$1;
(statearr_27056_27133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (15))){
var inst_26916 = (state_27038[(13)]);
var inst_26917 = (state_27038[(14)]);
var inst_26918 = (state_27038[(16)]);
var inst_26915 = (state_27038[(17)]);
var inst_26933 = (state_27038[(2)]);
var inst_26934 = (inst_26918 + (1));
var tmp27050 = inst_26916;
var tmp27051 = inst_26917;
var tmp27052 = inst_26915;
var inst_26915__$1 = tmp27052;
var inst_26916__$1 = tmp27050;
var inst_26917__$1 = tmp27051;
var inst_26918__$1 = inst_26934;
var state_27038__$1 = (function (){var statearr_27057 = state_27038;
(statearr_27057[(13)] = inst_26916__$1);

(statearr_27057[(18)] = inst_26933);

(statearr_27057[(14)] = inst_26917__$1);

(statearr_27057[(16)] = inst_26918__$1);

(statearr_27057[(17)] = inst_26915__$1);

return statearr_27057;
})();
var statearr_27058_27134 = state_27038__$1;
(statearr_27058_27134[(2)] = null);

(statearr_27058_27134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (21))){
var inst_26960 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27062_27135 = state_27038__$1;
(statearr_27062_27135[(2)] = inst_26960);

(statearr_27062_27135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (31))){
var inst_26986 = (state_27038[(12)]);
var inst_26990 = done.call(null,null);
var inst_26991 = cljs.core.async.untap_STAR_.call(null,m,inst_26986);
var state_27038__$1 = (function (){var statearr_27063 = state_27038;
(statearr_27063[(19)] = inst_26990);

return statearr_27063;
})();
var statearr_27064_27136 = state_27038__$1;
(statearr_27064_27136[(2)] = inst_26991);

(statearr_27064_27136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (32))){
var inst_26979 = (state_27038[(9)]);
var inst_26981 = (state_27038[(10)]);
var inst_26978 = (state_27038[(20)]);
var inst_26980 = (state_27038[(21)]);
var inst_26993 = (state_27038[(2)]);
var inst_26994 = (inst_26981 + (1));
var tmp27059 = inst_26979;
var tmp27060 = inst_26978;
var tmp27061 = inst_26980;
var inst_26978__$1 = tmp27060;
var inst_26979__$1 = tmp27059;
var inst_26980__$1 = tmp27061;
var inst_26981__$1 = inst_26994;
var state_27038__$1 = (function (){var statearr_27065 = state_27038;
(statearr_27065[(9)] = inst_26979__$1);

(statearr_27065[(22)] = inst_26993);

(statearr_27065[(10)] = inst_26981__$1);

(statearr_27065[(20)] = inst_26978__$1);

(statearr_27065[(21)] = inst_26980__$1);

return statearr_27065;
})();
var statearr_27066_27137 = state_27038__$1;
(statearr_27066_27137[(2)] = null);

(statearr_27066_27137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (40))){
var inst_27006 = (state_27038[(23)]);
var inst_27010 = done.call(null,null);
var inst_27011 = cljs.core.async.untap_STAR_.call(null,m,inst_27006);
var state_27038__$1 = (function (){var statearr_27067 = state_27038;
(statearr_27067[(24)] = inst_27010);

return statearr_27067;
})();
var statearr_27068_27138 = state_27038__$1;
(statearr_27068_27138[(2)] = inst_27011);

(statearr_27068_27138[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (33))){
var inst_26997 = (state_27038[(25)]);
var inst_26999 = cljs.core.chunked_seq_QMARK_.call(null,inst_26997);
var state_27038__$1 = state_27038;
if(inst_26999){
var statearr_27069_27139 = state_27038__$1;
(statearr_27069_27139[(1)] = (36));

} else {
var statearr_27070_27140 = state_27038__$1;
(statearr_27070_27140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (13))){
var inst_26927 = (state_27038[(26)]);
var inst_26930 = cljs.core.async.close_BANG_.call(null,inst_26927);
var state_27038__$1 = state_27038;
var statearr_27071_27141 = state_27038__$1;
(statearr_27071_27141[(2)] = inst_26930);

(statearr_27071_27141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (22))){
var inst_26950 = (state_27038[(8)]);
var inst_26953 = cljs.core.async.close_BANG_.call(null,inst_26950);
var state_27038__$1 = state_27038;
var statearr_27072_27142 = state_27038__$1;
(statearr_27072_27142[(2)] = inst_26953);

(statearr_27072_27142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (36))){
var inst_26997 = (state_27038[(25)]);
var inst_27001 = cljs.core.chunk_first.call(null,inst_26997);
var inst_27002 = cljs.core.chunk_rest.call(null,inst_26997);
var inst_27003 = cljs.core.count.call(null,inst_27001);
var inst_26978 = inst_27002;
var inst_26979 = inst_27001;
var inst_26980 = inst_27003;
var inst_26981 = (0);
var state_27038__$1 = (function (){var statearr_27073 = state_27038;
(statearr_27073[(9)] = inst_26979);

(statearr_27073[(10)] = inst_26981);

(statearr_27073[(20)] = inst_26978);

(statearr_27073[(21)] = inst_26980);

return statearr_27073;
})();
var statearr_27074_27143 = state_27038__$1;
(statearr_27074_27143[(2)] = null);

(statearr_27074_27143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (41))){
var inst_26997 = (state_27038[(25)]);
var inst_27013 = (state_27038[(2)]);
var inst_27014 = cljs.core.next.call(null,inst_26997);
var inst_26978 = inst_27014;
var inst_26979 = null;
var inst_26980 = (0);
var inst_26981 = (0);
var state_27038__$1 = (function (){var statearr_27075 = state_27038;
(statearr_27075[(27)] = inst_27013);

(statearr_27075[(9)] = inst_26979);

(statearr_27075[(10)] = inst_26981);

(statearr_27075[(20)] = inst_26978);

(statearr_27075[(21)] = inst_26980);

return statearr_27075;
})();
var statearr_27076_27144 = state_27038__$1;
(statearr_27076_27144[(2)] = null);

(statearr_27076_27144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (43))){
var state_27038__$1 = state_27038;
var statearr_27077_27145 = state_27038__$1;
(statearr_27077_27145[(2)] = null);

(statearr_27077_27145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (29))){
var inst_27022 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27078_27146 = state_27038__$1;
(statearr_27078_27146[(2)] = inst_27022);

(statearr_27078_27146[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (44))){
var inst_27031 = (state_27038[(2)]);
var state_27038__$1 = (function (){var statearr_27079 = state_27038;
(statearr_27079[(28)] = inst_27031);

return statearr_27079;
})();
var statearr_27080_27147 = state_27038__$1;
(statearr_27080_27147[(2)] = null);

(statearr_27080_27147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (6))){
var inst_26970 = (state_27038[(29)]);
var inst_26969 = cljs.core.deref.call(null,cs);
var inst_26970__$1 = cljs.core.keys.call(null,inst_26969);
var inst_26971 = cljs.core.count.call(null,inst_26970__$1);
var inst_26972 = cljs.core.reset_BANG_.call(null,dctr,inst_26971);
var inst_26977 = cljs.core.seq.call(null,inst_26970__$1);
var inst_26978 = inst_26977;
var inst_26979 = null;
var inst_26980 = (0);
var inst_26981 = (0);
var state_27038__$1 = (function (){var statearr_27081 = state_27038;
(statearr_27081[(9)] = inst_26979);

(statearr_27081[(29)] = inst_26970__$1);

(statearr_27081[(10)] = inst_26981);

(statearr_27081[(30)] = inst_26972);

(statearr_27081[(20)] = inst_26978);

(statearr_27081[(21)] = inst_26980);

return statearr_27081;
})();
var statearr_27082_27148 = state_27038__$1;
(statearr_27082_27148[(2)] = null);

(statearr_27082_27148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (28))){
var inst_26997 = (state_27038[(25)]);
var inst_26978 = (state_27038[(20)]);
var inst_26997__$1 = cljs.core.seq.call(null,inst_26978);
var state_27038__$1 = (function (){var statearr_27083 = state_27038;
(statearr_27083[(25)] = inst_26997__$1);

return statearr_27083;
})();
if(inst_26997__$1){
var statearr_27084_27149 = state_27038__$1;
(statearr_27084_27149[(1)] = (33));

} else {
var statearr_27085_27150 = state_27038__$1;
(statearr_27085_27150[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (25))){
var inst_26981 = (state_27038[(10)]);
var inst_26980 = (state_27038[(21)]);
var inst_26983 = (inst_26981 < inst_26980);
var inst_26984 = inst_26983;
var state_27038__$1 = state_27038;
if(cljs.core.truth_(inst_26984)){
var statearr_27086_27151 = state_27038__$1;
(statearr_27086_27151[(1)] = (27));

} else {
var statearr_27087_27152 = state_27038__$1;
(statearr_27087_27152[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (34))){
var state_27038__$1 = state_27038;
var statearr_27088_27153 = state_27038__$1;
(statearr_27088_27153[(2)] = null);

(statearr_27088_27153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (17))){
var state_27038__$1 = state_27038;
var statearr_27089_27154 = state_27038__$1;
(statearr_27089_27154[(2)] = null);

(statearr_27089_27154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (3))){
var inst_27036 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27038__$1,inst_27036);
} else {
if((state_val_27039 === (12))){
var inst_26965 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27090_27155 = state_27038__$1;
(statearr_27090_27155[(2)] = inst_26965);

(statearr_27090_27155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (2))){
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27038__$1,(4),ch);
} else {
if((state_val_27039 === (23))){
var state_27038__$1 = state_27038;
var statearr_27091_27156 = state_27038__$1;
(statearr_27091_27156[(2)] = null);

(statearr_27091_27156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (35))){
var inst_27020 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27092_27157 = state_27038__$1;
(statearr_27092_27157[(2)] = inst_27020);

(statearr_27092_27157[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (19))){
var inst_26937 = (state_27038[(7)]);
var inst_26941 = cljs.core.chunk_first.call(null,inst_26937);
var inst_26942 = cljs.core.chunk_rest.call(null,inst_26937);
var inst_26943 = cljs.core.count.call(null,inst_26941);
var inst_26915 = inst_26942;
var inst_26916 = inst_26941;
var inst_26917 = inst_26943;
var inst_26918 = (0);
var state_27038__$1 = (function (){var statearr_27093 = state_27038;
(statearr_27093[(13)] = inst_26916);

(statearr_27093[(14)] = inst_26917);

(statearr_27093[(16)] = inst_26918);

(statearr_27093[(17)] = inst_26915);

return statearr_27093;
})();
var statearr_27094_27158 = state_27038__$1;
(statearr_27094_27158[(2)] = null);

(statearr_27094_27158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (11))){
var inst_26937 = (state_27038[(7)]);
var inst_26915 = (state_27038[(17)]);
var inst_26937__$1 = cljs.core.seq.call(null,inst_26915);
var state_27038__$1 = (function (){var statearr_27095 = state_27038;
(statearr_27095[(7)] = inst_26937__$1);

return statearr_27095;
})();
if(inst_26937__$1){
var statearr_27096_27159 = state_27038__$1;
(statearr_27096_27159[(1)] = (16));

} else {
var statearr_27097_27160 = state_27038__$1;
(statearr_27097_27160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (9))){
var inst_26967 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27098_27161 = state_27038__$1;
(statearr_27098_27161[(2)] = inst_26967);

(statearr_27098_27161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (5))){
var inst_26913 = cljs.core.deref.call(null,cs);
var inst_26914 = cljs.core.seq.call(null,inst_26913);
var inst_26915 = inst_26914;
var inst_26916 = null;
var inst_26917 = (0);
var inst_26918 = (0);
var state_27038__$1 = (function (){var statearr_27099 = state_27038;
(statearr_27099[(13)] = inst_26916);

(statearr_27099[(14)] = inst_26917);

(statearr_27099[(16)] = inst_26918);

(statearr_27099[(17)] = inst_26915);

return statearr_27099;
})();
var statearr_27100_27162 = state_27038__$1;
(statearr_27100_27162[(2)] = null);

(statearr_27100_27162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (14))){
var state_27038__$1 = state_27038;
var statearr_27101_27163 = state_27038__$1;
(statearr_27101_27163[(2)] = null);

(statearr_27101_27163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (45))){
var inst_27028 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27102_27164 = state_27038__$1;
(statearr_27102_27164[(2)] = inst_27028);

(statearr_27102_27164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (26))){
var inst_26970 = (state_27038[(29)]);
var inst_27024 = (state_27038[(2)]);
var inst_27025 = cljs.core.seq.call(null,inst_26970);
var state_27038__$1 = (function (){var statearr_27103 = state_27038;
(statearr_27103[(31)] = inst_27024);

return statearr_27103;
})();
if(inst_27025){
var statearr_27104_27165 = state_27038__$1;
(statearr_27104_27165[(1)] = (42));

} else {
var statearr_27105_27166 = state_27038__$1;
(statearr_27105_27166[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (16))){
var inst_26937 = (state_27038[(7)]);
var inst_26939 = cljs.core.chunked_seq_QMARK_.call(null,inst_26937);
var state_27038__$1 = state_27038;
if(inst_26939){
var statearr_27106_27167 = state_27038__$1;
(statearr_27106_27167[(1)] = (19));

} else {
var statearr_27107_27168 = state_27038__$1;
(statearr_27107_27168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (38))){
var inst_27017 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27108_27169 = state_27038__$1;
(statearr_27108_27169[(2)] = inst_27017);

(statearr_27108_27169[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (30))){
var state_27038__$1 = state_27038;
var statearr_27109_27170 = state_27038__$1;
(statearr_27109_27170[(2)] = null);

(statearr_27109_27170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (10))){
var inst_26916 = (state_27038[(13)]);
var inst_26918 = (state_27038[(16)]);
var inst_26926 = cljs.core._nth.call(null,inst_26916,inst_26918);
var inst_26927 = cljs.core.nth.call(null,inst_26926,(0),null);
var inst_26928 = cljs.core.nth.call(null,inst_26926,(1),null);
var state_27038__$1 = (function (){var statearr_27110 = state_27038;
(statearr_27110[(26)] = inst_26927);

return statearr_27110;
})();
if(cljs.core.truth_(inst_26928)){
var statearr_27111_27171 = state_27038__$1;
(statearr_27111_27171[(1)] = (13));

} else {
var statearr_27112_27172 = state_27038__$1;
(statearr_27112_27172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (18))){
var inst_26963 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27113_27173 = state_27038__$1;
(statearr_27113_27173[(2)] = inst_26963);

(statearr_27113_27173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (42))){
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27038__$1,(45),dchan);
} else {
if((state_val_27039 === (37))){
var inst_27006 = (state_27038[(23)]);
var inst_26997 = (state_27038[(25)]);
var inst_26906 = (state_27038[(11)]);
var inst_27006__$1 = cljs.core.first.call(null,inst_26997);
var inst_27007 = cljs.core.async.put_BANG_.call(null,inst_27006__$1,inst_26906,done);
var state_27038__$1 = (function (){var statearr_27114 = state_27038;
(statearr_27114[(23)] = inst_27006__$1);

return statearr_27114;
})();
if(cljs.core.truth_(inst_27007)){
var statearr_27115_27174 = state_27038__$1;
(statearr_27115_27174[(1)] = (39));

} else {
var statearr_27116_27175 = state_27038__$1;
(statearr_27116_27175[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (8))){
var inst_26917 = (state_27038[(14)]);
var inst_26918 = (state_27038[(16)]);
var inst_26920 = (inst_26918 < inst_26917);
var inst_26921 = inst_26920;
var state_27038__$1 = state_27038;
if(cljs.core.truth_(inst_26921)){
var statearr_27117_27176 = state_27038__$1;
(statearr_27117_27176[(1)] = (10));

} else {
var statearr_27118_27177 = state_27038__$1;
(statearr_27118_27177[(1)] = (11));

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
});})(c__26305__auto___27123,cs,m,dchan,dctr,done))
;
return ((function (switch__26210__auto__,c__26305__auto___27123,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26211__auto__ = null;
var cljs$core$async$mult_$_state_machine__26211__auto____0 = (function (){
var statearr_27119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27119[(0)] = cljs$core$async$mult_$_state_machine__26211__auto__);

(statearr_27119[(1)] = (1));

return statearr_27119;
});
var cljs$core$async$mult_$_state_machine__26211__auto____1 = (function (state_27038){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_27038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e27120){if((e27120 instanceof Object)){
var ex__26214__auto__ = e27120;
var statearr_27121_27178 = state_27038;
(statearr_27121_27178[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27179 = state_27038;
state_27038 = G__27179;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26211__auto__ = function(state_27038){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26211__auto____1.call(this,state_27038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26211__auto____0;
cljs$core$async$mult_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26211__auto____1;
return cljs$core$async$mult_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___27123,cs,m,dchan,dctr,done))
})();
var state__26307__auto__ = (function (){var statearr_27122 = f__26306__auto__.call(null);
(statearr_27122[(6)] = c__26305__auto___27123);

return statearr_27122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___27123,cs,m,dchan,dctr,done))
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
var G__27181 = arguments.length;
switch (G__27181) {
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
var len__4730__auto___27193 = arguments.length;
var i__4731__auto___27194 = (0);
while(true){
if((i__4731__auto___27194 < len__4730__auto___27193)){
args__4736__auto__.push((arguments[i__4731__auto___27194]));

var G__27195 = (i__4731__auto___27194 + (1));
i__4731__auto___27194 = G__27195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27187){
var map__27188 = p__27187;
var map__27188__$1 = (((((!((map__27188 == null))))?(((((map__27188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27188):map__27188);
var opts = map__27188__$1;
var statearr_27190_27196 = state;
(statearr_27190_27196[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__27188,map__27188__$1,opts){
return (function (val){
var statearr_27191_27197 = state;
(statearr_27191_27197[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27188,map__27188__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27192_27198 = state;
(statearr_27192_27198[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27183){
var G__27184 = cljs.core.first.call(null,seq27183);
var seq27183__$1 = cljs.core.next.call(null,seq27183);
var G__27185 = cljs.core.first.call(null,seq27183__$1);
var seq27183__$2 = cljs.core.next.call(null,seq27183__$1);
var G__27186 = cljs.core.first.call(null,seq27183__$2);
var seq27183__$3 = cljs.core.next.call(null,seq27183__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27184,G__27185,G__27186,seq27183__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27199 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27200){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27200 = meta27200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27201,meta27200__$1){
var self__ = this;
var _27201__$1 = this;
return (new cljs.core.async.t_cljs$core$async27199(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27200__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27201){
var self__ = this;
var _27201__$1 = this;
return self__.meta27200;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27199.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27200","meta27200",600386470,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27199";

cljs.core.async.t_cljs$core$async27199.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27199");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27199.
 */
cljs.core.async.__GT_t_cljs$core$async27199 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27199(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27200){
return (new cljs.core.async.t_cljs$core$async27199(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27200));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27199(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26305__auto___27363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___27363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___27363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27303){
var state_val_27304 = (state_27303[(1)]);
if((state_val_27304 === (7))){
var inst_27218 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27305_27364 = state_27303__$1;
(statearr_27305_27364[(2)] = inst_27218);

(statearr_27305_27364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (20))){
var inst_27230 = (state_27303[(7)]);
var state_27303__$1 = state_27303;
var statearr_27306_27365 = state_27303__$1;
(statearr_27306_27365[(2)] = inst_27230);

(statearr_27306_27365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (27))){
var state_27303__$1 = state_27303;
var statearr_27307_27366 = state_27303__$1;
(statearr_27307_27366[(2)] = null);

(statearr_27307_27366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (1))){
var inst_27205 = (state_27303[(8)]);
var inst_27205__$1 = calc_state.call(null);
var inst_27207 = (inst_27205__$1 == null);
var inst_27208 = cljs.core.not.call(null,inst_27207);
var state_27303__$1 = (function (){var statearr_27308 = state_27303;
(statearr_27308[(8)] = inst_27205__$1);

return statearr_27308;
})();
if(inst_27208){
var statearr_27309_27367 = state_27303__$1;
(statearr_27309_27367[(1)] = (2));

} else {
var statearr_27310_27368 = state_27303__$1;
(statearr_27310_27368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (24))){
var inst_27263 = (state_27303[(9)]);
var inst_27254 = (state_27303[(10)]);
var inst_27277 = (state_27303[(11)]);
var inst_27277__$1 = inst_27254.call(null,inst_27263);
var state_27303__$1 = (function (){var statearr_27311 = state_27303;
(statearr_27311[(11)] = inst_27277__$1);

return statearr_27311;
})();
if(cljs.core.truth_(inst_27277__$1)){
var statearr_27312_27369 = state_27303__$1;
(statearr_27312_27369[(1)] = (29));

} else {
var statearr_27313_27370 = state_27303__$1;
(statearr_27313_27370[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (4))){
var inst_27221 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27221)){
var statearr_27314_27371 = state_27303__$1;
(statearr_27314_27371[(1)] = (8));

} else {
var statearr_27315_27372 = state_27303__$1;
(statearr_27315_27372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (15))){
var inst_27248 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27248)){
var statearr_27316_27373 = state_27303__$1;
(statearr_27316_27373[(1)] = (19));

} else {
var statearr_27317_27374 = state_27303__$1;
(statearr_27317_27374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (21))){
var inst_27253 = (state_27303[(12)]);
var inst_27253__$1 = (state_27303[(2)]);
var inst_27254 = cljs.core.get.call(null,inst_27253__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27255 = cljs.core.get.call(null,inst_27253__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27256 = cljs.core.get.call(null,inst_27253__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27303__$1 = (function (){var statearr_27318 = state_27303;
(statearr_27318[(12)] = inst_27253__$1);

(statearr_27318[(13)] = inst_27255);

(statearr_27318[(10)] = inst_27254);

return statearr_27318;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27303__$1,(22),inst_27256);
} else {
if((state_val_27304 === (31))){
var inst_27285 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27285)){
var statearr_27319_27375 = state_27303__$1;
(statearr_27319_27375[(1)] = (32));

} else {
var statearr_27320_27376 = state_27303__$1;
(statearr_27320_27376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (32))){
var inst_27262 = (state_27303[(14)]);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27303__$1,(35),out,inst_27262);
} else {
if((state_val_27304 === (33))){
var inst_27253 = (state_27303[(12)]);
var inst_27230 = inst_27253;
var state_27303__$1 = (function (){var statearr_27321 = state_27303;
(statearr_27321[(7)] = inst_27230);

return statearr_27321;
})();
var statearr_27322_27377 = state_27303__$1;
(statearr_27322_27377[(2)] = null);

(statearr_27322_27377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (13))){
var inst_27230 = (state_27303[(7)]);
var inst_27237 = inst_27230.cljs$lang$protocol_mask$partition0$;
var inst_27238 = (inst_27237 & (64));
var inst_27239 = inst_27230.cljs$core$ISeq$;
var inst_27240 = (cljs.core.PROTOCOL_SENTINEL === inst_27239);
var inst_27241 = ((inst_27238) || (inst_27240));
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27241)){
var statearr_27323_27378 = state_27303__$1;
(statearr_27323_27378[(1)] = (16));

} else {
var statearr_27324_27379 = state_27303__$1;
(statearr_27324_27379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (22))){
var inst_27263 = (state_27303[(9)]);
var inst_27262 = (state_27303[(14)]);
var inst_27261 = (state_27303[(2)]);
var inst_27262__$1 = cljs.core.nth.call(null,inst_27261,(0),null);
var inst_27263__$1 = cljs.core.nth.call(null,inst_27261,(1),null);
var inst_27264 = (inst_27262__$1 == null);
var inst_27265 = cljs.core._EQ_.call(null,inst_27263__$1,change);
var inst_27266 = ((inst_27264) || (inst_27265));
var state_27303__$1 = (function (){var statearr_27325 = state_27303;
(statearr_27325[(9)] = inst_27263__$1);

(statearr_27325[(14)] = inst_27262__$1);

return statearr_27325;
})();
if(cljs.core.truth_(inst_27266)){
var statearr_27326_27380 = state_27303__$1;
(statearr_27326_27380[(1)] = (23));

} else {
var statearr_27327_27381 = state_27303__$1;
(statearr_27327_27381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (36))){
var inst_27253 = (state_27303[(12)]);
var inst_27230 = inst_27253;
var state_27303__$1 = (function (){var statearr_27328 = state_27303;
(statearr_27328[(7)] = inst_27230);

return statearr_27328;
})();
var statearr_27329_27382 = state_27303__$1;
(statearr_27329_27382[(2)] = null);

(statearr_27329_27382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (29))){
var inst_27277 = (state_27303[(11)]);
var state_27303__$1 = state_27303;
var statearr_27330_27383 = state_27303__$1;
(statearr_27330_27383[(2)] = inst_27277);

(statearr_27330_27383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (6))){
var state_27303__$1 = state_27303;
var statearr_27331_27384 = state_27303__$1;
(statearr_27331_27384[(2)] = false);

(statearr_27331_27384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (28))){
var inst_27273 = (state_27303[(2)]);
var inst_27274 = calc_state.call(null);
var inst_27230 = inst_27274;
var state_27303__$1 = (function (){var statearr_27332 = state_27303;
(statearr_27332[(15)] = inst_27273);

(statearr_27332[(7)] = inst_27230);

return statearr_27332;
})();
var statearr_27333_27385 = state_27303__$1;
(statearr_27333_27385[(2)] = null);

(statearr_27333_27385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (25))){
var inst_27299 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27334_27386 = state_27303__$1;
(statearr_27334_27386[(2)] = inst_27299);

(statearr_27334_27386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (34))){
var inst_27297 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27335_27387 = state_27303__$1;
(statearr_27335_27387[(2)] = inst_27297);

(statearr_27335_27387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (17))){
var state_27303__$1 = state_27303;
var statearr_27336_27388 = state_27303__$1;
(statearr_27336_27388[(2)] = false);

(statearr_27336_27388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (3))){
var state_27303__$1 = state_27303;
var statearr_27337_27389 = state_27303__$1;
(statearr_27337_27389[(2)] = false);

(statearr_27337_27389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (12))){
var inst_27301 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27303__$1,inst_27301);
} else {
if((state_val_27304 === (2))){
var inst_27205 = (state_27303[(8)]);
var inst_27210 = inst_27205.cljs$lang$protocol_mask$partition0$;
var inst_27211 = (inst_27210 & (64));
var inst_27212 = inst_27205.cljs$core$ISeq$;
var inst_27213 = (cljs.core.PROTOCOL_SENTINEL === inst_27212);
var inst_27214 = ((inst_27211) || (inst_27213));
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27214)){
var statearr_27338_27390 = state_27303__$1;
(statearr_27338_27390[(1)] = (5));

} else {
var statearr_27339_27391 = state_27303__$1;
(statearr_27339_27391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (23))){
var inst_27262 = (state_27303[(14)]);
var inst_27268 = (inst_27262 == null);
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27268)){
var statearr_27340_27392 = state_27303__$1;
(statearr_27340_27392[(1)] = (26));

} else {
var statearr_27341_27393 = state_27303__$1;
(statearr_27341_27393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (35))){
var inst_27288 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27288)){
var statearr_27342_27394 = state_27303__$1;
(statearr_27342_27394[(1)] = (36));

} else {
var statearr_27343_27395 = state_27303__$1;
(statearr_27343_27395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (19))){
var inst_27230 = (state_27303[(7)]);
var inst_27250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27230);
var state_27303__$1 = state_27303;
var statearr_27344_27396 = state_27303__$1;
(statearr_27344_27396[(2)] = inst_27250);

(statearr_27344_27396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (11))){
var inst_27230 = (state_27303[(7)]);
var inst_27234 = (inst_27230 == null);
var inst_27235 = cljs.core.not.call(null,inst_27234);
var state_27303__$1 = state_27303;
if(inst_27235){
var statearr_27345_27397 = state_27303__$1;
(statearr_27345_27397[(1)] = (13));

} else {
var statearr_27346_27398 = state_27303__$1;
(statearr_27346_27398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (9))){
var inst_27205 = (state_27303[(8)]);
var state_27303__$1 = state_27303;
var statearr_27347_27399 = state_27303__$1;
(statearr_27347_27399[(2)] = inst_27205);

(statearr_27347_27399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (5))){
var state_27303__$1 = state_27303;
var statearr_27348_27400 = state_27303__$1;
(statearr_27348_27400[(2)] = true);

(statearr_27348_27400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (14))){
var state_27303__$1 = state_27303;
var statearr_27349_27401 = state_27303__$1;
(statearr_27349_27401[(2)] = false);

(statearr_27349_27401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (26))){
var inst_27263 = (state_27303[(9)]);
var inst_27270 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27263);
var state_27303__$1 = state_27303;
var statearr_27350_27402 = state_27303__$1;
(statearr_27350_27402[(2)] = inst_27270);

(statearr_27350_27402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (16))){
var state_27303__$1 = state_27303;
var statearr_27351_27403 = state_27303__$1;
(statearr_27351_27403[(2)] = true);

(statearr_27351_27403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (38))){
var inst_27293 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27352_27404 = state_27303__$1;
(statearr_27352_27404[(2)] = inst_27293);

(statearr_27352_27404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (30))){
var inst_27255 = (state_27303[(13)]);
var inst_27263 = (state_27303[(9)]);
var inst_27254 = (state_27303[(10)]);
var inst_27280 = cljs.core.empty_QMARK_.call(null,inst_27254);
var inst_27281 = inst_27255.call(null,inst_27263);
var inst_27282 = cljs.core.not.call(null,inst_27281);
var inst_27283 = ((inst_27280) && (inst_27282));
var state_27303__$1 = state_27303;
var statearr_27353_27405 = state_27303__$1;
(statearr_27353_27405[(2)] = inst_27283);

(statearr_27353_27405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (10))){
var inst_27205 = (state_27303[(8)]);
var inst_27226 = (state_27303[(2)]);
var inst_27227 = cljs.core.get.call(null,inst_27226,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27228 = cljs.core.get.call(null,inst_27226,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27229 = cljs.core.get.call(null,inst_27226,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27230 = inst_27205;
var state_27303__$1 = (function (){var statearr_27354 = state_27303;
(statearr_27354[(16)] = inst_27227);

(statearr_27354[(17)] = inst_27229);

(statearr_27354[(7)] = inst_27230);

(statearr_27354[(18)] = inst_27228);

return statearr_27354;
})();
var statearr_27355_27406 = state_27303__$1;
(statearr_27355_27406[(2)] = null);

(statearr_27355_27406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (18))){
var inst_27245 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27356_27407 = state_27303__$1;
(statearr_27356_27407[(2)] = inst_27245);

(statearr_27356_27407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (37))){
var state_27303__$1 = state_27303;
var statearr_27357_27408 = state_27303__$1;
(statearr_27357_27408[(2)] = null);

(statearr_27357_27408[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (8))){
var inst_27205 = (state_27303[(8)]);
var inst_27223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27205);
var state_27303__$1 = state_27303;
var statearr_27358_27409 = state_27303__$1;
(statearr_27358_27409[(2)] = inst_27223);

(statearr_27358_27409[(1)] = (10));


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
});})(c__26305__auto___27363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26210__auto__,c__26305__auto___27363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26211__auto__ = null;
var cljs$core$async$mix_$_state_machine__26211__auto____0 = (function (){
var statearr_27359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27359[(0)] = cljs$core$async$mix_$_state_machine__26211__auto__);

(statearr_27359[(1)] = (1));

return statearr_27359;
});
var cljs$core$async$mix_$_state_machine__26211__auto____1 = (function (state_27303){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_27303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e27360){if((e27360 instanceof Object)){
var ex__26214__auto__ = e27360;
var statearr_27361_27410 = state_27303;
(statearr_27361_27410[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27411 = state_27303;
state_27303 = G__27411;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26211__auto__ = function(state_27303){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26211__auto____1.call(this,state_27303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26211__auto____0;
cljs$core$async$mix_$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26211__auto____1;
return cljs$core$async$mix_$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___27363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26307__auto__ = (function (){var statearr_27362 = f__26306__auto__.call(null);
(statearr_27362[(6)] = c__26305__auto___27363);

return statearr_27362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___27363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27413 = arguments.length;
switch (G__27413) {
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
var G__27417 = arguments.length;
switch (G__27417) {
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
return (function (p1__27415_SHARP_){
if(cljs.core.truth_(p1__27415_SHARP_.call(null,topic))){
return p1__27415_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27415_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27418 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27419){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27419 = meta27419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27420,meta27419__$1){
var self__ = this;
var _27420__$1 = this;
return (new cljs.core.async.t_cljs$core$async27418(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27419__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27420){
var self__ = this;
var _27420__$1 = this;
return self__.meta27419;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27418.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27419","meta27419",978009016,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27418";

cljs.core.async.t_cljs$core$async27418.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27418");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27418.
 */
cljs.core.async.__GT_t_cljs$core$async27418 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27419){
return (new cljs.core.async.t_cljs$core$async27418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27419));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27418(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26305__auto___27538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___27538,mults,ensure_mult,p){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___27538,mults,ensure_mult,p){
return (function (state_27492){
var state_val_27493 = (state_27492[(1)]);
if((state_val_27493 === (7))){
var inst_27488 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27494_27539 = state_27492__$1;
(statearr_27494_27539[(2)] = inst_27488);

(statearr_27494_27539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (20))){
var state_27492__$1 = state_27492;
var statearr_27495_27540 = state_27492__$1;
(statearr_27495_27540[(2)] = null);

(statearr_27495_27540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (1))){
var state_27492__$1 = state_27492;
var statearr_27496_27541 = state_27492__$1;
(statearr_27496_27541[(2)] = null);

(statearr_27496_27541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (24))){
var inst_27471 = (state_27492[(7)]);
var inst_27480 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27471);
var state_27492__$1 = state_27492;
var statearr_27497_27542 = state_27492__$1;
(statearr_27497_27542[(2)] = inst_27480);

(statearr_27497_27542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (4))){
var inst_27423 = (state_27492[(8)]);
var inst_27423__$1 = (state_27492[(2)]);
var inst_27424 = (inst_27423__$1 == null);
var state_27492__$1 = (function (){var statearr_27498 = state_27492;
(statearr_27498[(8)] = inst_27423__$1);

return statearr_27498;
})();
if(cljs.core.truth_(inst_27424)){
var statearr_27499_27543 = state_27492__$1;
(statearr_27499_27543[(1)] = (5));

} else {
var statearr_27500_27544 = state_27492__$1;
(statearr_27500_27544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (15))){
var inst_27465 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27501_27545 = state_27492__$1;
(statearr_27501_27545[(2)] = inst_27465);

(statearr_27501_27545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (21))){
var inst_27485 = (state_27492[(2)]);
var state_27492__$1 = (function (){var statearr_27502 = state_27492;
(statearr_27502[(9)] = inst_27485);

return statearr_27502;
})();
var statearr_27503_27546 = state_27492__$1;
(statearr_27503_27546[(2)] = null);

(statearr_27503_27546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (13))){
var inst_27447 = (state_27492[(10)]);
var inst_27449 = cljs.core.chunked_seq_QMARK_.call(null,inst_27447);
var state_27492__$1 = state_27492;
if(inst_27449){
var statearr_27504_27547 = state_27492__$1;
(statearr_27504_27547[(1)] = (16));

} else {
var statearr_27505_27548 = state_27492__$1;
(statearr_27505_27548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (22))){
var inst_27477 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
if(cljs.core.truth_(inst_27477)){
var statearr_27506_27549 = state_27492__$1;
(statearr_27506_27549[(1)] = (23));

} else {
var statearr_27507_27550 = state_27492__$1;
(statearr_27507_27550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (6))){
var inst_27423 = (state_27492[(8)]);
var inst_27471 = (state_27492[(7)]);
var inst_27473 = (state_27492[(11)]);
var inst_27471__$1 = topic_fn.call(null,inst_27423);
var inst_27472 = cljs.core.deref.call(null,mults);
var inst_27473__$1 = cljs.core.get.call(null,inst_27472,inst_27471__$1);
var state_27492__$1 = (function (){var statearr_27508 = state_27492;
(statearr_27508[(7)] = inst_27471__$1);

(statearr_27508[(11)] = inst_27473__$1);

return statearr_27508;
})();
if(cljs.core.truth_(inst_27473__$1)){
var statearr_27509_27551 = state_27492__$1;
(statearr_27509_27551[(1)] = (19));

} else {
var statearr_27510_27552 = state_27492__$1;
(statearr_27510_27552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (25))){
var inst_27482 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27511_27553 = state_27492__$1;
(statearr_27511_27553[(2)] = inst_27482);

(statearr_27511_27553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (17))){
var inst_27447 = (state_27492[(10)]);
var inst_27456 = cljs.core.first.call(null,inst_27447);
var inst_27457 = cljs.core.async.muxch_STAR_.call(null,inst_27456);
var inst_27458 = cljs.core.async.close_BANG_.call(null,inst_27457);
var inst_27459 = cljs.core.next.call(null,inst_27447);
var inst_27433 = inst_27459;
var inst_27434 = null;
var inst_27435 = (0);
var inst_27436 = (0);
var state_27492__$1 = (function (){var statearr_27512 = state_27492;
(statearr_27512[(12)] = inst_27436);

(statearr_27512[(13)] = inst_27433);

(statearr_27512[(14)] = inst_27458);

(statearr_27512[(15)] = inst_27434);

(statearr_27512[(16)] = inst_27435);

return statearr_27512;
})();
var statearr_27513_27554 = state_27492__$1;
(statearr_27513_27554[(2)] = null);

(statearr_27513_27554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (3))){
var inst_27490 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27492__$1,inst_27490);
} else {
if((state_val_27493 === (12))){
var inst_27467 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27514_27555 = state_27492__$1;
(statearr_27514_27555[(2)] = inst_27467);

(statearr_27514_27555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (2))){
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27492__$1,(4),ch);
} else {
if((state_val_27493 === (23))){
var state_27492__$1 = state_27492;
var statearr_27515_27556 = state_27492__$1;
(statearr_27515_27556[(2)] = null);

(statearr_27515_27556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (19))){
var inst_27423 = (state_27492[(8)]);
var inst_27473 = (state_27492[(11)]);
var inst_27475 = cljs.core.async.muxch_STAR_.call(null,inst_27473);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27492__$1,(22),inst_27475,inst_27423);
} else {
if((state_val_27493 === (11))){
var inst_27433 = (state_27492[(13)]);
var inst_27447 = (state_27492[(10)]);
var inst_27447__$1 = cljs.core.seq.call(null,inst_27433);
var state_27492__$1 = (function (){var statearr_27516 = state_27492;
(statearr_27516[(10)] = inst_27447__$1);

return statearr_27516;
})();
if(inst_27447__$1){
var statearr_27517_27557 = state_27492__$1;
(statearr_27517_27557[(1)] = (13));

} else {
var statearr_27518_27558 = state_27492__$1;
(statearr_27518_27558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (9))){
var inst_27469 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27519_27559 = state_27492__$1;
(statearr_27519_27559[(2)] = inst_27469);

(statearr_27519_27559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (5))){
var inst_27430 = cljs.core.deref.call(null,mults);
var inst_27431 = cljs.core.vals.call(null,inst_27430);
var inst_27432 = cljs.core.seq.call(null,inst_27431);
var inst_27433 = inst_27432;
var inst_27434 = null;
var inst_27435 = (0);
var inst_27436 = (0);
var state_27492__$1 = (function (){var statearr_27520 = state_27492;
(statearr_27520[(12)] = inst_27436);

(statearr_27520[(13)] = inst_27433);

(statearr_27520[(15)] = inst_27434);

(statearr_27520[(16)] = inst_27435);

return statearr_27520;
})();
var statearr_27521_27560 = state_27492__$1;
(statearr_27521_27560[(2)] = null);

(statearr_27521_27560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (14))){
var state_27492__$1 = state_27492;
var statearr_27525_27561 = state_27492__$1;
(statearr_27525_27561[(2)] = null);

(statearr_27525_27561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (16))){
var inst_27447 = (state_27492[(10)]);
var inst_27451 = cljs.core.chunk_first.call(null,inst_27447);
var inst_27452 = cljs.core.chunk_rest.call(null,inst_27447);
var inst_27453 = cljs.core.count.call(null,inst_27451);
var inst_27433 = inst_27452;
var inst_27434 = inst_27451;
var inst_27435 = inst_27453;
var inst_27436 = (0);
var state_27492__$1 = (function (){var statearr_27526 = state_27492;
(statearr_27526[(12)] = inst_27436);

(statearr_27526[(13)] = inst_27433);

(statearr_27526[(15)] = inst_27434);

(statearr_27526[(16)] = inst_27435);

return statearr_27526;
})();
var statearr_27527_27562 = state_27492__$1;
(statearr_27527_27562[(2)] = null);

(statearr_27527_27562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (10))){
var inst_27436 = (state_27492[(12)]);
var inst_27433 = (state_27492[(13)]);
var inst_27434 = (state_27492[(15)]);
var inst_27435 = (state_27492[(16)]);
var inst_27441 = cljs.core._nth.call(null,inst_27434,inst_27436);
var inst_27442 = cljs.core.async.muxch_STAR_.call(null,inst_27441);
var inst_27443 = cljs.core.async.close_BANG_.call(null,inst_27442);
var inst_27444 = (inst_27436 + (1));
var tmp27522 = inst_27433;
var tmp27523 = inst_27434;
var tmp27524 = inst_27435;
var inst_27433__$1 = tmp27522;
var inst_27434__$1 = tmp27523;
var inst_27435__$1 = tmp27524;
var inst_27436__$1 = inst_27444;
var state_27492__$1 = (function (){var statearr_27528 = state_27492;
(statearr_27528[(17)] = inst_27443);

(statearr_27528[(12)] = inst_27436__$1);

(statearr_27528[(13)] = inst_27433__$1);

(statearr_27528[(15)] = inst_27434__$1);

(statearr_27528[(16)] = inst_27435__$1);

return statearr_27528;
})();
var statearr_27529_27563 = state_27492__$1;
(statearr_27529_27563[(2)] = null);

(statearr_27529_27563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (18))){
var inst_27462 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27530_27564 = state_27492__$1;
(statearr_27530_27564[(2)] = inst_27462);

(statearr_27530_27564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (8))){
var inst_27436 = (state_27492[(12)]);
var inst_27435 = (state_27492[(16)]);
var inst_27438 = (inst_27436 < inst_27435);
var inst_27439 = inst_27438;
var state_27492__$1 = state_27492;
if(cljs.core.truth_(inst_27439)){
var statearr_27531_27565 = state_27492__$1;
(statearr_27531_27565[(1)] = (10));

} else {
var statearr_27532_27566 = state_27492__$1;
(statearr_27532_27566[(1)] = (11));

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
});})(c__26305__auto___27538,mults,ensure_mult,p))
;
return ((function (switch__26210__auto__,c__26305__auto___27538,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_27533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27533[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_27533[(1)] = (1));

return statearr_27533;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_27492){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_27492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e27534){if((e27534 instanceof Object)){
var ex__26214__auto__ = e27534;
var statearr_27535_27567 = state_27492;
(statearr_27535_27567[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27568 = state_27492;
state_27492 = G__27568;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_27492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_27492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___27538,mults,ensure_mult,p))
})();
var state__26307__auto__ = (function (){var statearr_27536 = f__26306__auto__.call(null);
(statearr_27536[(6)] = c__26305__auto___27538);

return statearr_27536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___27538,mults,ensure_mult,p))
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
var G__27570 = arguments.length;
switch (G__27570) {
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
var G__27573 = arguments.length;
switch (G__27573) {
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
var G__27576 = arguments.length;
switch (G__27576) {
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
var c__26305__auto___27643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___27643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___27643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27615){
var state_val_27616 = (state_27615[(1)]);
if((state_val_27616 === (7))){
var state_27615__$1 = state_27615;
var statearr_27617_27644 = state_27615__$1;
(statearr_27617_27644[(2)] = null);

(statearr_27617_27644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (1))){
var state_27615__$1 = state_27615;
var statearr_27618_27645 = state_27615__$1;
(statearr_27618_27645[(2)] = null);

(statearr_27618_27645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (4))){
var inst_27579 = (state_27615[(7)]);
var inst_27581 = (inst_27579 < cnt);
var state_27615__$1 = state_27615;
if(cljs.core.truth_(inst_27581)){
var statearr_27619_27646 = state_27615__$1;
(statearr_27619_27646[(1)] = (6));

} else {
var statearr_27620_27647 = state_27615__$1;
(statearr_27620_27647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (15))){
var inst_27611 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27621_27648 = state_27615__$1;
(statearr_27621_27648[(2)] = inst_27611);

(statearr_27621_27648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (13))){
var inst_27604 = cljs.core.async.close_BANG_.call(null,out);
var state_27615__$1 = state_27615;
var statearr_27622_27649 = state_27615__$1;
(statearr_27622_27649[(2)] = inst_27604);

(statearr_27622_27649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (6))){
var state_27615__$1 = state_27615;
var statearr_27623_27650 = state_27615__$1;
(statearr_27623_27650[(2)] = null);

(statearr_27623_27650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (3))){
var inst_27613 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27615__$1,inst_27613);
} else {
if((state_val_27616 === (12))){
var inst_27601 = (state_27615[(8)]);
var inst_27601__$1 = (state_27615[(2)]);
var inst_27602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27601__$1);
var state_27615__$1 = (function (){var statearr_27624 = state_27615;
(statearr_27624[(8)] = inst_27601__$1);

return statearr_27624;
})();
if(cljs.core.truth_(inst_27602)){
var statearr_27625_27651 = state_27615__$1;
(statearr_27625_27651[(1)] = (13));

} else {
var statearr_27626_27652 = state_27615__$1;
(statearr_27626_27652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (2))){
var inst_27578 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27579 = (0);
var state_27615__$1 = (function (){var statearr_27627 = state_27615;
(statearr_27627[(7)] = inst_27579);

(statearr_27627[(9)] = inst_27578);

return statearr_27627;
})();
var statearr_27628_27653 = state_27615__$1;
(statearr_27628_27653[(2)] = null);

(statearr_27628_27653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (11))){
var inst_27579 = (state_27615[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27615,(10),Object,null,(9));
var inst_27588 = chs__$1.call(null,inst_27579);
var inst_27589 = done.call(null,inst_27579);
var inst_27590 = cljs.core.async.take_BANG_.call(null,inst_27588,inst_27589);
var state_27615__$1 = state_27615;
var statearr_27629_27654 = state_27615__$1;
(statearr_27629_27654[(2)] = inst_27590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (9))){
var inst_27579 = (state_27615[(7)]);
var inst_27592 = (state_27615[(2)]);
var inst_27593 = (inst_27579 + (1));
var inst_27579__$1 = inst_27593;
var state_27615__$1 = (function (){var statearr_27630 = state_27615;
(statearr_27630[(7)] = inst_27579__$1);

(statearr_27630[(10)] = inst_27592);

return statearr_27630;
})();
var statearr_27631_27655 = state_27615__$1;
(statearr_27631_27655[(2)] = null);

(statearr_27631_27655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (5))){
var inst_27599 = (state_27615[(2)]);
var state_27615__$1 = (function (){var statearr_27632 = state_27615;
(statearr_27632[(11)] = inst_27599);

return statearr_27632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27615__$1,(12),dchan);
} else {
if((state_val_27616 === (14))){
var inst_27601 = (state_27615[(8)]);
var inst_27606 = cljs.core.apply.call(null,f,inst_27601);
var state_27615__$1 = state_27615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27615__$1,(16),out,inst_27606);
} else {
if((state_val_27616 === (16))){
var inst_27608 = (state_27615[(2)]);
var state_27615__$1 = (function (){var statearr_27633 = state_27615;
(statearr_27633[(12)] = inst_27608);

return statearr_27633;
})();
var statearr_27634_27656 = state_27615__$1;
(statearr_27634_27656[(2)] = null);

(statearr_27634_27656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (10))){
var inst_27583 = (state_27615[(2)]);
var inst_27584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27615__$1 = (function (){var statearr_27635 = state_27615;
(statearr_27635[(13)] = inst_27583);

return statearr_27635;
})();
var statearr_27636_27657 = state_27615__$1;
(statearr_27636_27657[(2)] = inst_27584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27616 === (8))){
var inst_27597 = (state_27615[(2)]);
var state_27615__$1 = state_27615;
var statearr_27637_27658 = state_27615__$1;
(statearr_27637_27658[(2)] = inst_27597);

(statearr_27637_27658[(1)] = (5));


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
});})(c__26305__auto___27643,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26210__auto__,c__26305__auto___27643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_27638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27638[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_27638[(1)] = (1));

return statearr_27638;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_27615){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_27615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e27639){if((e27639 instanceof Object)){
var ex__26214__auto__ = e27639;
var statearr_27640_27659 = state_27615;
(statearr_27640_27659[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27660 = state_27615;
state_27615 = G__27660;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_27615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_27615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___27643,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26307__auto__ = (function (){var statearr_27641 = f__26306__auto__.call(null);
(statearr_27641[(6)] = c__26305__auto___27643);

return statearr_27641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___27643,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27663 = arguments.length;
switch (G__27663) {
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
var c__26305__auto___27717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___27717,out){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___27717,out){
return (function (state_27695){
var state_val_27696 = (state_27695[(1)]);
if((state_val_27696 === (7))){
var inst_27674 = (state_27695[(7)]);
var inst_27675 = (state_27695[(8)]);
var inst_27674__$1 = (state_27695[(2)]);
var inst_27675__$1 = cljs.core.nth.call(null,inst_27674__$1,(0),null);
var inst_27676 = cljs.core.nth.call(null,inst_27674__$1,(1),null);
var inst_27677 = (inst_27675__$1 == null);
var state_27695__$1 = (function (){var statearr_27697 = state_27695;
(statearr_27697[(7)] = inst_27674__$1);

(statearr_27697[(9)] = inst_27676);

(statearr_27697[(8)] = inst_27675__$1);

return statearr_27697;
})();
if(cljs.core.truth_(inst_27677)){
var statearr_27698_27718 = state_27695__$1;
(statearr_27698_27718[(1)] = (8));

} else {
var statearr_27699_27719 = state_27695__$1;
(statearr_27699_27719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (1))){
var inst_27664 = cljs.core.vec.call(null,chs);
var inst_27665 = inst_27664;
var state_27695__$1 = (function (){var statearr_27700 = state_27695;
(statearr_27700[(10)] = inst_27665);

return statearr_27700;
})();
var statearr_27701_27720 = state_27695__$1;
(statearr_27701_27720[(2)] = null);

(statearr_27701_27720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (4))){
var inst_27665 = (state_27695[(10)]);
var state_27695__$1 = state_27695;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27695__$1,(7),inst_27665);
} else {
if((state_val_27696 === (6))){
var inst_27691 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27702_27721 = state_27695__$1;
(statearr_27702_27721[(2)] = inst_27691);

(statearr_27702_27721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (3))){
var inst_27693 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27695__$1,inst_27693);
} else {
if((state_val_27696 === (2))){
var inst_27665 = (state_27695[(10)]);
var inst_27667 = cljs.core.count.call(null,inst_27665);
var inst_27668 = (inst_27667 > (0));
var state_27695__$1 = state_27695;
if(cljs.core.truth_(inst_27668)){
var statearr_27704_27722 = state_27695__$1;
(statearr_27704_27722[(1)] = (4));

} else {
var statearr_27705_27723 = state_27695__$1;
(statearr_27705_27723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (11))){
var inst_27665 = (state_27695[(10)]);
var inst_27684 = (state_27695[(2)]);
var tmp27703 = inst_27665;
var inst_27665__$1 = tmp27703;
var state_27695__$1 = (function (){var statearr_27706 = state_27695;
(statearr_27706[(10)] = inst_27665__$1);

(statearr_27706[(11)] = inst_27684);

return statearr_27706;
})();
var statearr_27707_27724 = state_27695__$1;
(statearr_27707_27724[(2)] = null);

(statearr_27707_27724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (9))){
var inst_27675 = (state_27695[(8)]);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27695__$1,(11),out,inst_27675);
} else {
if((state_val_27696 === (5))){
var inst_27689 = cljs.core.async.close_BANG_.call(null,out);
var state_27695__$1 = state_27695;
var statearr_27708_27725 = state_27695__$1;
(statearr_27708_27725[(2)] = inst_27689);

(statearr_27708_27725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (10))){
var inst_27687 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27709_27726 = state_27695__$1;
(statearr_27709_27726[(2)] = inst_27687);

(statearr_27709_27726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (8))){
var inst_27665 = (state_27695[(10)]);
var inst_27674 = (state_27695[(7)]);
var inst_27676 = (state_27695[(9)]);
var inst_27675 = (state_27695[(8)]);
var inst_27679 = (function (){var cs = inst_27665;
var vec__27670 = inst_27674;
var v = inst_27675;
var c = inst_27676;
return ((function (cs,vec__27670,v,c,inst_27665,inst_27674,inst_27676,inst_27675,state_val_27696,c__26305__auto___27717,out){
return (function (p1__27661_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27661_SHARP_);
});
;})(cs,vec__27670,v,c,inst_27665,inst_27674,inst_27676,inst_27675,state_val_27696,c__26305__auto___27717,out))
})();
var inst_27680 = cljs.core.filterv.call(null,inst_27679,inst_27665);
var inst_27665__$1 = inst_27680;
var state_27695__$1 = (function (){var statearr_27710 = state_27695;
(statearr_27710[(10)] = inst_27665__$1);

return statearr_27710;
})();
var statearr_27711_27727 = state_27695__$1;
(statearr_27711_27727[(2)] = null);

(statearr_27711_27727[(1)] = (2));


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
});})(c__26305__auto___27717,out))
;
return ((function (switch__26210__auto__,c__26305__auto___27717,out){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_27712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27712[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_27712[(1)] = (1));

return statearr_27712;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_27695){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_27695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e27713){if((e27713 instanceof Object)){
var ex__26214__auto__ = e27713;
var statearr_27714_27728 = state_27695;
(statearr_27714_27728[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27729 = state_27695;
state_27695 = G__27729;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_27695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_27695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___27717,out))
})();
var state__26307__auto__ = (function (){var statearr_27715 = f__26306__auto__.call(null);
(statearr_27715[(6)] = c__26305__auto___27717);

return statearr_27715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___27717,out))
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
var G__27731 = arguments.length;
switch (G__27731) {
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
var c__26305__auto___27776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___27776,out){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___27776,out){
return (function (state_27755){
var state_val_27756 = (state_27755[(1)]);
if((state_val_27756 === (7))){
var inst_27737 = (state_27755[(7)]);
var inst_27737__$1 = (state_27755[(2)]);
var inst_27738 = (inst_27737__$1 == null);
var inst_27739 = cljs.core.not.call(null,inst_27738);
var state_27755__$1 = (function (){var statearr_27757 = state_27755;
(statearr_27757[(7)] = inst_27737__$1);

return statearr_27757;
})();
if(inst_27739){
var statearr_27758_27777 = state_27755__$1;
(statearr_27758_27777[(1)] = (8));

} else {
var statearr_27759_27778 = state_27755__$1;
(statearr_27759_27778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (1))){
var inst_27732 = (0);
var state_27755__$1 = (function (){var statearr_27760 = state_27755;
(statearr_27760[(8)] = inst_27732);

return statearr_27760;
})();
var statearr_27761_27779 = state_27755__$1;
(statearr_27761_27779[(2)] = null);

(statearr_27761_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (4))){
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27755__$1,(7),ch);
} else {
if((state_val_27756 === (6))){
var inst_27750 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27762_27780 = state_27755__$1;
(statearr_27762_27780[(2)] = inst_27750);

(statearr_27762_27780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (3))){
var inst_27752 = (state_27755[(2)]);
var inst_27753 = cljs.core.async.close_BANG_.call(null,out);
var state_27755__$1 = (function (){var statearr_27763 = state_27755;
(statearr_27763[(9)] = inst_27752);

return statearr_27763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27755__$1,inst_27753);
} else {
if((state_val_27756 === (2))){
var inst_27732 = (state_27755[(8)]);
var inst_27734 = (inst_27732 < n);
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27734)){
var statearr_27764_27781 = state_27755__$1;
(statearr_27764_27781[(1)] = (4));

} else {
var statearr_27765_27782 = state_27755__$1;
(statearr_27765_27782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (11))){
var inst_27732 = (state_27755[(8)]);
var inst_27742 = (state_27755[(2)]);
var inst_27743 = (inst_27732 + (1));
var inst_27732__$1 = inst_27743;
var state_27755__$1 = (function (){var statearr_27766 = state_27755;
(statearr_27766[(10)] = inst_27742);

(statearr_27766[(8)] = inst_27732__$1);

return statearr_27766;
})();
var statearr_27767_27783 = state_27755__$1;
(statearr_27767_27783[(2)] = null);

(statearr_27767_27783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (9))){
var state_27755__$1 = state_27755;
var statearr_27768_27784 = state_27755__$1;
(statearr_27768_27784[(2)] = null);

(statearr_27768_27784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (5))){
var state_27755__$1 = state_27755;
var statearr_27769_27785 = state_27755__$1;
(statearr_27769_27785[(2)] = null);

(statearr_27769_27785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (10))){
var inst_27747 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27770_27786 = state_27755__$1;
(statearr_27770_27786[(2)] = inst_27747);

(statearr_27770_27786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (8))){
var inst_27737 = (state_27755[(7)]);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27755__$1,(11),out,inst_27737);
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
});})(c__26305__auto___27776,out))
;
return ((function (switch__26210__auto__,c__26305__auto___27776,out){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_27771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27771[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_27771[(1)] = (1));

return statearr_27771;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_27755){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_27755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e27772){if((e27772 instanceof Object)){
var ex__26214__auto__ = e27772;
var statearr_27773_27787 = state_27755;
(statearr_27773_27787[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27788 = state_27755;
state_27755 = G__27788;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_27755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_27755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___27776,out))
})();
var state__26307__auto__ = (function (){var statearr_27774 = f__26306__auto__.call(null);
(statearr_27774[(6)] = c__26305__auto___27776);

return statearr_27774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___27776,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27790 = (function (f,ch,meta27791){
this.f = f;
this.ch = ch;
this.meta27791 = meta27791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27792,meta27791__$1){
var self__ = this;
var _27792__$1 = this;
return (new cljs.core.async.t_cljs$core$async27790(self__.f,self__.ch,meta27791__$1));
});

cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27792){
var self__ = this;
var _27792__$1 = this;
return self__.meta27791;
});

cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27793 = (function (f,ch,meta27791,_,fn1,meta27794){
this.f = f;
this.ch = ch;
this.meta27791 = meta27791;
this._ = _;
this.fn1 = fn1;
this.meta27794 = meta27794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27795,meta27794__$1){
var self__ = this;
var _27795__$1 = this;
return (new cljs.core.async.t_cljs$core$async27793(self__.f,self__.ch,self__.meta27791,self__._,self__.fn1,meta27794__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27795){
var self__ = this;
var _27795__$1 = this;
return self__.meta27794;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27789_SHARP_){
return f1.call(null,(((p1__27789_SHARP_ == null))?null:self__.f.call(null,p1__27789_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27793.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27791","meta27791",-1369679581,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27790","cljs.core.async/t_cljs$core$async27790",-1113866778,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27794","meta27794",-1424219801,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27793";

cljs.core.async.t_cljs$core$async27793.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27793");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27793.
 */
cljs.core.async.__GT_t_cljs$core$async27793 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27793(f__$1,ch__$1,meta27791__$1,___$2,fn1__$1,meta27794){
return (new cljs.core.async.t_cljs$core$async27793(f__$1,ch__$1,meta27791__$1,___$2,fn1__$1,meta27794));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27793(self__.f,self__.ch,self__.meta27791,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27791","meta27791",-1369679581,null)], null);
});

cljs.core.async.t_cljs$core$async27790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27790";

cljs.core.async.t_cljs$core$async27790.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27790");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27790.
 */
cljs.core.async.__GT_t_cljs$core$async27790 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27790(f__$1,ch__$1,meta27791){
return (new cljs.core.async.t_cljs$core$async27790(f__$1,ch__$1,meta27791));
});

}

return (new cljs.core.async.t_cljs$core$async27790(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27796 = (function (f,ch,meta27797){
this.f = f;
this.ch = ch;
this.meta27797 = meta27797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27798,meta27797__$1){
var self__ = this;
var _27798__$1 = this;
return (new cljs.core.async.t_cljs$core$async27796(self__.f,self__.ch,meta27797__$1));
});

cljs.core.async.t_cljs$core$async27796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27798){
var self__ = this;
var _27798__$1 = this;
return self__.meta27797;
});

cljs.core.async.t_cljs$core$async27796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27797","meta27797",1434973511,null)], null);
});

cljs.core.async.t_cljs$core$async27796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27796";

cljs.core.async.t_cljs$core$async27796.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27796");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27796.
 */
cljs.core.async.__GT_t_cljs$core$async27796 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27796(f__$1,ch__$1,meta27797){
return (new cljs.core.async.t_cljs$core$async27796(f__$1,ch__$1,meta27797));
});

}

return (new cljs.core.async.t_cljs$core$async27796(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27799 = (function (p,ch,meta27800){
this.p = p;
this.ch = ch;
this.meta27800 = meta27800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27801,meta27800__$1){
var self__ = this;
var _27801__$1 = this;
return (new cljs.core.async.t_cljs$core$async27799(self__.p,self__.ch,meta27800__$1));
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27801){
var self__ = this;
var _27801__$1 = this;
return self__.meta27800;
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27800","meta27800",-879328782,null)], null);
});

cljs.core.async.t_cljs$core$async27799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27799";

cljs.core.async.t_cljs$core$async27799.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27799");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27799.
 */
cljs.core.async.__GT_t_cljs$core$async27799 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27799(p__$1,ch__$1,meta27800){
return (new cljs.core.async.t_cljs$core$async27799(p__$1,ch__$1,meta27800));
});

}

return (new cljs.core.async.t_cljs$core$async27799(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27803 = arguments.length;
switch (G__27803) {
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
var c__26305__auto___27843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___27843,out){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___27843,out){
return (function (state_27824){
var state_val_27825 = (state_27824[(1)]);
if((state_val_27825 === (7))){
var inst_27820 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27826_27844 = state_27824__$1;
(statearr_27826_27844[(2)] = inst_27820);

(statearr_27826_27844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (1))){
var state_27824__$1 = state_27824;
var statearr_27827_27845 = state_27824__$1;
(statearr_27827_27845[(2)] = null);

(statearr_27827_27845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (4))){
var inst_27806 = (state_27824[(7)]);
var inst_27806__$1 = (state_27824[(2)]);
var inst_27807 = (inst_27806__$1 == null);
var state_27824__$1 = (function (){var statearr_27828 = state_27824;
(statearr_27828[(7)] = inst_27806__$1);

return statearr_27828;
})();
if(cljs.core.truth_(inst_27807)){
var statearr_27829_27846 = state_27824__$1;
(statearr_27829_27846[(1)] = (5));

} else {
var statearr_27830_27847 = state_27824__$1;
(statearr_27830_27847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (6))){
var inst_27806 = (state_27824[(7)]);
var inst_27811 = p.call(null,inst_27806);
var state_27824__$1 = state_27824;
if(cljs.core.truth_(inst_27811)){
var statearr_27831_27848 = state_27824__$1;
(statearr_27831_27848[(1)] = (8));

} else {
var statearr_27832_27849 = state_27824__$1;
(statearr_27832_27849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (3))){
var inst_27822 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27824__$1,inst_27822);
} else {
if((state_val_27825 === (2))){
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27824__$1,(4),ch);
} else {
if((state_val_27825 === (11))){
var inst_27814 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27833_27850 = state_27824__$1;
(statearr_27833_27850[(2)] = inst_27814);

(statearr_27833_27850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (9))){
var state_27824__$1 = state_27824;
var statearr_27834_27851 = state_27824__$1;
(statearr_27834_27851[(2)] = null);

(statearr_27834_27851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (5))){
var inst_27809 = cljs.core.async.close_BANG_.call(null,out);
var state_27824__$1 = state_27824;
var statearr_27835_27852 = state_27824__$1;
(statearr_27835_27852[(2)] = inst_27809);

(statearr_27835_27852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (10))){
var inst_27817 = (state_27824[(2)]);
var state_27824__$1 = (function (){var statearr_27836 = state_27824;
(statearr_27836[(8)] = inst_27817);

return statearr_27836;
})();
var statearr_27837_27853 = state_27824__$1;
(statearr_27837_27853[(2)] = null);

(statearr_27837_27853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (8))){
var inst_27806 = (state_27824[(7)]);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27824__$1,(11),out,inst_27806);
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
});})(c__26305__auto___27843,out))
;
return ((function (switch__26210__auto__,c__26305__auto___27843,out){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_27838 = [null,null,null,null,null,null,null,null,null];
(statearr_27838[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_27838[(1)] = (1));

return statearr_27838;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_27824){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_27824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e27839){if((e27839 instanceof Object)){
var ex__26214__auto__ = e27839;
var statearr_27840_27854 = state_27824;
(statearr_27840_27854[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27855 = state_27824;
state_27824 = G__27855;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_27824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_27824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___27843,out))
})();
var state__26307__auto__ = (function (){var statearr_27841 = f__26306__auto__.call(null);
(statearr_27841[(6)] = c__26305__auto___27843);

return statearr_27841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___27843,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27857 = arguments.length;
switch (G__27857) {
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
var c__26305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto__){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto__){
return (function (state_27920){
var state_val_27921 = (state_27920[(1)]);
if((state_val_27921 === (7))){
var inst_27916 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27922_27960 = state_27920__$1;
(statearr_27922_27960[(2)] = inst_27916);

(statearr_27922_27960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (20))){
var inst_27886 = (state_27920[(7)]);
var inst_27897 = (state_27920[(2)]);
var inst_27898 = cljs.core.next.call(null,inst_27886);
var inst_27872 = inst_27898;
var inst_27873 = null;
var inst_27874 = (0);
var inst_27875 = (0);
var state_27920__$1 = (function (){var statearr_27923 = state_27920;
(statearr_27923[(8)] = inst_27874);

(statearr_27923[(9)] = inst_27875);

(statearr_27923[(10)] = inst_27873);

(statearr_27923[(11)] = inst_27897);

(statearr_27923[(12)] = inst_27872);

return statearr_27923;
})();
var statearr_27924_27961 = state_27920__$1;
(statearr_27924_27961[(2)] = null);

(statearr_27924_27961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (1))){
var state_27920__$1 = state_27920;
var statearr_27925_27962 = state_27920__$1;
(statearr_27925_27962[(2)] = null);

(statearr_27925_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (4))){
var inst_27861 = (state_27920[(13)]);
var inst_27861__$1 = (state_27920[(2)]);
var inst_27862 = (inst_27861__$1 == null);
var state_27920__$1 = (function (){var statearr_27926 = state_27920;
(statearr_27926[(13)] = inst_27861__$1);

return statearr_27926;
})();
if(cljs.core.truth_(inst_27862)){
var statearr_27927_27963 = state_27920__$1;
(statearr_27927_27963[(1)] = (5));

} else {
var statearr_27928_27964 = state_27920__$1;
(statearr_27928_27964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (15))){
var state_27920__$1 = state_27920;
var statearr_27932_27965 = state_27920__$1;
(statearr_27932_27965[(2)] = null);

(statearr_27932_27965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (21))){
var state_27920__$1 = state_27920;
var statearr_27933_27966 = state_27920__$1;
(statearr_27933_27966[(2)] = null);

(statearr_27933_27966[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (13))){
var inst_27874 = (state_27920[(8)]);
var inst_27875 = (state_27920[(9)]);
var inst_27873 = (state_27920[(10)]);
var inst_27872 = (state_27920[(12)]);
var inst_27882 = (state_27920[(2)]);
var inst_27883 = (inst_27875 + (1));
var tmp27929 = inst_27874;
var tmp27930 = inst_27873;
var tmp27931 = inst_27872;
var inst_27872__$1 = tmp27931;
var inst_27873__$1 = tmp27930;
var inst_27874__$1 = tmp27929;
var inst_27875__$1 = inst_27883;
var state_27920__$1 = (function (){var statearr_27934 = state_27920;
(statearr_27934[(14)] = inst_27882);

(statearr_27934[(8)] = inst_27874__$1);

(statearr_27934[(9)] = inst_27875__$1);

(statearr_27934[(10)] = inst_27873__$1);

(statearr_27934[(12)] = inst_27872__$1);

return statearr_27934;
})();
var statearr_27935_27967 = state_27920__$1;
(statearr_27935_27967[(2)] = null);

(statearr_27935_27967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (22))){
var state_27920__$1 = state_27920;
var statearr_27936_27968 = state_27920__$1;
(statearr_27936_27968[(2)] = null);

(statearr_27936_27968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (6))){
var inst_27861 = (state_27920[(13)]);
var inst_27870 = f.call(null,inst_27861);
var inst_27871 = cljs.core.seq.call(null,inst_27870);
var inst_27872 = inst_27871;
var inst_27873 = null;
var inst_27874 = (0);
var inst_27875 = (0);
var state_27920__$1 = (function (){var statearr_27937 = state_27920;
(statearr_27937[(8)] = inst_27874);

(statearr_27937[(9)] = inst_27875);

(statearr_27937[(10)] = inst_27873);

(statearr_27937[(12)] = inst_27872);

return statearr_27937;
})();
var statearr_27938_27969 = state_27920__$1;
(statearr_27938_27969[(2)] = null);

(statearr_27938_27969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (17))){
var inst_27886 = (state_27920[(7)]);
var inst_27890 = cljs.core.chunk_first.call(null,inst_27886);
var inst_27891 = cljs.core.chunk_rest.call(null,inst_27886);
var inst_27892 = cljs.core.count.call(null,inst_27890);
var inst_27872 = inst_27891;
var inst_27873 = inst_27890;
var inst_27874 = inst_27892;
var inst_27875 = (0);
var state_27920__$1 = (function (){var statearr_27939 = state_27920;
(statearr_27939[(8)] = inst_27874);

(statearr_27939[(9)] = inst_27875);

(statearr_27939[(10)] = inst_27873);

(statearr_27939[(12)] = inst_27872);

return statearr_27939;
})();
var statearr_27940_27970 = state_27920__$1;
(statearr_27940_27970[(2)] = null);

(statearr_27940_27970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (3))){
var inst_27918 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27920__$1,inst_27918);
} else {
if((state_val_27921 === (12))){
var inst_27906 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27941_27971 = state_27920__$1;
(statearr_27941_27971[(2)] = inst_27906);

(statearr_27941_27971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (2))){
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27920__$1,(4),in$);
} else {
if((state_val_27921 === (23))){
var inst_27914 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27942_27972 = state_27920__$1;
(statearr_27942_27972[(2)] = inst_27914);

(statearr_27942_27972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (19))){
var inst_27901 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27943_27973 = state_27920__$1;
(statearr_27943_27973[(2)] = inst_27901);

(statearr_27943_27973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (11))){
var inst_27886 = (state_27920[(7)]);
var inst_27872 = (state_27920[(12)]);
var inst_27886__$1 = cljs.core.seq.call(null,inst_27872);
var state_27920__$1 = (function (){var statearr_27944 = state_27920;
(statearr_27944[(7)] = inst_27886__$1);

return statearr_27944;
})();
if(inst_27886__$1){
var statearr_27945_27974 = state_27920__$1;
(statearr_27945_27974[(1)] = (14));

} else {
var statearr_27946_27975 = state_27920__$1;
(statearr_27946_27975[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (9))){
var inst_27908 = (state_27920[(2)]);
var inst_27909 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27920__$1 = (function (){var statearr_27947 = state_27920;
(statearr_27947[(15)] = inst_27908);

return statearr_27947;
})();
if(cljs.core.truth_(inst_27909)){
var statearr_27948_27976 = state_27920__$1;
(statearr_27948_27976[(1)] = (21));

} else {
var statearr_27949_27977 = state_27920__$1;
(statearr_27949_27977[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (5))){
var inst_27864 = cljs.core.async.close_BANG_.call(null,out);
var state_27920__$1 = state_27920;
var statearr_27950_27978 = state_27920__$1;
(statearr_27950_27978[(2)] = inst_27864);

(statearr_27950_27978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (14))){
var inst_27886 = (state_27920[(7)]);
var inst_27888 = cljs.core.chunked_seq_QMARK_.call(null,inst_27886);
var state_27920__$1 = state_27920;
if(inst_27888){
var statearr_27951_27979 = state_27920__$1;
(statearr_27951_27979[(1)] = (17));

} else {
var statearr_27952_27980 = state_27920__$1;
(statearr_27952_27980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (16))){
var inst_27904 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27953_27981 = state_27920__$1;
(statearr_27953_27981[(2)] = inst_27904);

(statearr_27953_27981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (10))){
var inst_27875 = (state_27920[(9)]);
var inst_27873 = (state_27920[(10)]);
var inst_27880 = cljs.core._nth.call(null,inst_27873,inst_27875);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27920__$1,(13),out,inst_27880);
} else {
if((state_val_27921 === (18))){
var inst_27886 = (state_27920[(7)]);
var inst_27895 = cljs.core.first.call(null,inst_27886);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27920__$1,(20),out,inst_27895);
} else {
if((state_val_27921 === (8))){
var inst_27874 = (state_27920[(8)]);
var inst_27875 = (state_27920[(9)]);
var inst_27877 = (inst_27875 < inst_27874);
var inst_27878 = inst_27877;
var state_27920__$1 = state_27920;
if(cljs.core.truth_(inst_27878)){
var statearr_27954_27982 = state_27920__$1;
(statearr_27954_27982[(1)] = (10));

} else {
var statearr_27955_27983 = state_27920__$1;
(statearr_27955_27983[(1)] = (11));

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
});})(c__26305__auto__))
;
return ((function (switch__26210__auto__,c__26305__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26211__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26211__auto____0 = (function (){
var statearr_27956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27956[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26211__auto__);

(statearr_27956[(1)] = (1));

return statearr_27956;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26211__auto____1 = (function (state_27920){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_27920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e27957){if((e27957 instanceof Object)){
var ex__26214__auto__ = e27957;
var statearr_27958_27984 = state_27920;
(statearr_27958_27984[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27985 = state_27920;
state_27920 = G__27985;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26211__auto__ = function(state_27920){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26211__auto____1.call(this,state_27920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26211__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26211__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto__))
})();
var state__26307__auto__ = (function (){var statearr_27959 = f__26306__auto__.call(null);
(statearr_27959[(6)] = c__26305__auto__);

return statearr_27959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto__))
);

return c__26305__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27987 = arguments.length;
switch (G__27987) {
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
var G__27990 = arguments.length;
switch (G__27990) {
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
var G__27993 = arguments.length;
switch (G__27993) {
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
var c__26305__auto___28040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___28040,out){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___28040,out){
return (function (state_28017){
var state_val_28018 = (state_28017[(1)]);
if((state_val_28018 === (7))){
var inst_28012 = (state_28017[(2)]);
var state_28017__$1 = state_28017;
var statearr_28019_28041 = state_28017__$1;
(statearr_28019_28041[(2)] = inst_28012);

(statearr_28019_28041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (1))){
var inst_27994 = null;
var state_28017__$1 = (function (){var statearr_28020 = state_28017;
(statearr_28020[(7)] = inst_27994);

return statearr_28020;
})();
var statearr_28021_28042 = state_28017__$1;
(statearr_28021_28042[(2)] = null);

(statearr_28021_28042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (4))){
var inst_27997 = (state_28017[(8)]);
var inst_27997__$1 = (state_28017[(2)]);
var inst_27998 = (inst_27997__$1 == null);
var inst_27999 = cljs.core.not.call(null,inst_27998);
var state_28017__$1 = (function (){var statearr_28022 = state_28017;
(statearr_28022[(8)] = inst_27997__$1);

return statearr_28022;
})();
if(inst_27999){
var statearr_28023_28043 = state_28017__$1;
(statearr_28023_28043[(1)] = (5));

} else {
var statearr_28024_28044 = state_28017__$1;
(statearr_28024_28044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (6))){
var state_28017__$1 = state_28017;
var statearr_28025_28045 = state_28017__$1;
(statearr_28025_28045[(2)] = null);

(statearr_28025_28045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (3))){
var inst_28014 = (state_28017[(2)]);
var inst_28015 = cljs.core.async.close_BANG_.call(null,out);
var state_28017__$1 = (function (){var statearr_28026 = state_28017;
(statearr_28026[(9)] = inst_28014);

return statearr_28026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28017__$1,inst_28015);
} else {
if((state_val_28018 === (2))){
var state_28017__$1 = state_28017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28017__$1,(4),ch);
} else {
if((state_val_28018 === (11))){
var inst_27997 = (state_28017[(8)]);
var inst_28006 = (state_28017[(2)]);
var inst_27994 = inst_27997;
var state_28017__$1 = (function (){var statearr_28027 = state_28017;
(statearr_28027[(10)] = inst_28006);

(statearr_28027[(7)] = inst_27994);

return statearr_28027;
})();
var statearr_28028_28046 = state_28017__$1;
(statearr_28028_28046[(2)] = null);

(statearr_28028_28046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (9))){
var inst_27997 = (state_28017[(8)]);
var state_28017__$1 = state_28017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28017__$1,(11),out,inst_27997);
} else {
if((state_val_28018 === (5))){
var inst_27997 = (state_28017[(8)]);
var inst_27994 = (state_28017[(7)]);
var inst_28001 = cljs.core._EQ_.call(null,inst_27997,inst_27994);
var state_28017__$1 = state_28017;
if(inst_28001){
var statearr_28030_28047 = state_28017__$1;
(statearr_28030_28047[(1)] = (8));

} else {
var statearr_28031_28048 = state_28017__$1;
(statearr_28031_28048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (10))){
var inst_28009 = (state_28017[(2)]);
var state_28017__$1 = state_28017;
var statearr_28032_28049 = state_28017__$1;
(statearr_28032_28049[(2)] = inst_28009);

(statearr_28032_28049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (8))){
var inst_27994 = (state_28017[(7)]);
var tmp28029 = inst_27994;
var inst_27994__$1 = tmp28029;
var state_28017__$1 = (function (){var statearr_28033 = state_28017;
(statearr_28033[(7)] = inst_27994__$1);

return statearr_28033;
})();
var statearr_28034_28050 = state_28017__$1;
(statearr_28034_28050[(2)] = null);

(statearr_28034_28050[(1)] = (2));


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
});})(c__26305__auto___28040,out))
;
return ((function (switch__26210__auto__,c__26305__auto___28040,out){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_28035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28035[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_28035[(1)] = (1));

return statearr_28035;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_28017){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_28017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e28036){if((e28036 instanceof Object)){
var ex__26214__auto__ = e28036;
var statearr_28037_28051 = state_28017;
(statearr_28037_28051[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28052 = state_28017;
state_28017 = G__28052;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_28017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_28017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___28040,out))
})();
var state__26307__auto__ = (function (){var statearr_28038 = f__26306__auto__.call(null);
(statearr_28038[(6)] = c__26305__auto___28040);

return statearr_28038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___28040,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28054 = arguments.length;
switch (G__28054) {
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
var c__26305__auto___28120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___28120,out){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___28120,out){
return (function (state_28092){
var state_val_28093 = (state_28092[(1)]);
if((state_val_28093 === (7))){
var inst_28088 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28094_28121 = state_28092__$1;
(statearr_28094_28121[(2)] = inst_28088);

(statearr_28094_28121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (1))){
var inst_28055 = (new Array(n));
var inst_28056 = inst_28055;
var inst_28057 = (0);
var state_28092__$1 = (function (){var statearr_28095 = state_28092;
(statearr_28095[(7)] = inst_28057);

(statearr_28095[(8)] = inst_28056);

return statearr_28095;
})();
var statearr_28096_28122 = state_28092__$1;
(statearr_28096_28122[(2)] = null);

(statearr_28096_28122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (4))){
var inst_28060 = (state_28092[(9)]);
var inst_28060__$1 = (state_28092[(2)]);
var inst_28061 = (inst_28060__$1 == null);
var inst_28062 = cljs.core.not.call(null,inst_28061);
var state_28092__$1 = (function (){var statearr_28097 = state_28092;
(statearr_28097[(9)] = inst_28060__$1);

return statearr_28097;
})();
if(inst_28062){
var statearr_28098_28123 = state_28092__$1;
(statearr_28098_28123[(1)] = (5));

} else {
var statearr_28099_28124 = state_28092__$1;
(statearr_28099_28124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (15))){
var inst_28082 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28100_28125 = state_28092__$1;
(statearr_28100_28125[(2)] = inst_28082);

(statearr_28100_28125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (13))){
var state_28092__$1 = state_28092;
var statearr_28101_28126 = state_28092__$1;
(statearr_28101_28126[(2)] = null);

(statearr_28101_28126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (6))){
var inst_28057 = (state_28092[(7)]);
var inst_28078 = (inst_28057 > (0));
var state_28092__$1 = state_28092;
if(cljs.core.truth_(inst_28078)){
var statearr_28102_28127 = state_28092__$1;
(statearr_28102_28127[(1)] = (12));

} else {
var statearr_28103_28128 = state_28092__$1;
(statearr_28103_28128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (3))){
var inst_28090 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28092__$1,inst_28090);
} else {
if((state_val_28093 === (12))){
var inst_28056 = (state_28092[(8)]);
var inst_28080 = cljs.core.vec.call(null,inst_28056);
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28092__$1,(15),out,inst_28080);
} else {
if((state_val_28093 === (2))){
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28092__$1,(4),ch);
} else {
if((state_val_28093 === (11))){
var inst_28072 = (state_28092[(2)]);
var inst_28073 = (new Array(n));
var inst_28056 = inst_28073;
var inst_28057 = (0);
var state_28092__$1 = (function (){var statearr_28104 = state_28092;
(statearr_28104[(7)] = inst_28057);

(statearr_28104[(8)] = inst_28056);

(statearr_28104[(10)] = inst_28072);

return statearr_28104;
})();
var statearr_28105_28129 = state_28092__$1;
(statearr_28105_28129[(2)] = null);

(statearr_28105_28129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (9))){
var inst_28056 = (state_28092[(8)]);
var inst_28070 = cljs.core.vec.call(null,inst_28056);
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28092__$1,(11),out,inst_28070);
} else {
if((state_val_28093 === (5))){
var inst_28057 = (state_28092[(7)]);
var inst_28065 = (state_28092[(11)]);
var inst_28060 = (state_28092[(9)]);
var inst_28056 = (state_28092[(8)]);
var inst_28064 = (inst_28056[inst_28057] = inst_28060);
var inst_28065__$1 = (inst_28057 + (1));
var inst_28066 = (inst_28065__$1 < n);
var state_28092__$1 = (function (){var statearr_28106 = state_28092;
(statearr_28106[(11)] = inst_28065__$1);

(statearr_28106[(12)] = inst_28064);

return statearr_28106;
})();
if(cljs.core.truth_(inst_28066)){
var statearr_28107_28130 = state_28092__$1;
(statearr_28107_28130[(1)] = (8));

} else {
var statearr_28108_28131 = state_28092__$1;
(statearr_28108_28131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (14))){
var inst_28085 = (state_28092[(2)]);
var inst_28086 = cljs.core.async.close_BANG_.call(null,out);
var state_28092__$1 = (function (){var statearr_28110 = state_28092;
(statearr_28110[(13)] = inst_28085);

return statearr_28110;
})();
var statearr_28111_28132 = state_28092__$1;
(statearr_28111_28132[(2)] = inst_28086);

(statearr_28111_28132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (10))){
var inst_28076 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28112_28133 = state_28092__$1;
(statearr_28112_28133[(2)] = inst_28076);

(statearr_28112_28133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (8))){
var inst_28065 = (state_28092[(11)]);
var inst_28056 = (state_28092[(8)]);
var tmp28109 = inst_28056;
var inst_28056__$1 = tmp28109;
var inst_28057 = inst_28065;
var state_28092__$1 = (function (){var statearr_28113 = state_28092;
(statearr_28113[(7)] = inst_28057);

(statearr_28113[(8)] = inst_28056__$1);

return statearr_28113;
})();
var statearr_28114_28134 = state_28092__$1;
(statearr_28114_28134[(2)] = null);

(statearr_28114_28134[(1)] = (2));


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
});})(c__26305__auto___28120,out))
;
return ((function (switch__26210__auto__,c__26305__auto___28120,out){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_28115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28115[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_28115[(1)] = (1));

return statearr_28115;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_28092){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_28092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object)){
var ex__26214__auto__ = e28116;
var statearr_28117_28135 = state_28092;
(statearr_28117_28135[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28136 = state_28092;
state_28092 = G__28136;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_28092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_28092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___28120,out))
})();
var state__26307__auto__ = (function (){var statearr_28118 = f__26306__auto__.call(null);
(statearr_28118[(6)] = c__26305__auto___28120);

return statearr_28118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___28120,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28138 = arguments.length;
switch (G__28138) {
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
var c__26305__auto___28208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26305__auto___28208,out){
return (function (){
var f__26306__auto__ = (function (){var switch__26210__auto__ = ((function (c__26305__auto___28208,out){
return (function (state_28180){
var state_val_28181 = (state_28180[(1)]);
if((state_val_28181 === (7))){
var inst_28176 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28182_28209 = state_28180__$1;
(statearr_28182_28209[(2)] = inst_28176);

(statearr_28182_28209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (1))){
var inst_28139 = [];
var inst_28140 = inst_28139;
var inst_28141 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28180__$1 = (function (){var statearr_28183 = state_28180;
(statearr_28183[(7)] = inst_28140);

(statearr_28183[(8)] = inst_28141);

return statearr_28183;
})();
var statearr_28184_28210 = state_28180__$1;
(statearr_28184_28210[(2)] = null);

(statearr_28184_28210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (4))){
var inst_28144 = (state_28180[(9)]);
var inst_28144__$1 = (state_28180[(2)]);
var inst_28145 = (inst_28144__$1 == null);
var inst_28146 = cljs.core.not.call(null,inst_28145);
var state_28180__$1 = (function (){var statearr_28185 = state_28180;
(statearr_28185[(9)] = inst_28144__$1);

return statearr_28185;
})();
if(inst_28146){
var statearr_28186_28211 = state_28180__$1;
(statearr_28186_28211[(1)] = (5));

} else {
var statearr_28187_28212 = state_28180__$1;
(statearr_28187_28212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (15))){
var inst_28170 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28188_28213 = state_28180__$1;
(statearr_28188_28213[(2)] = inst_28170);

(statearr_28188_28213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (13))){
var state_28180__$1 = state_28180;
var statearr_28189_28214 = state_28180__$1;
(statearr_28189_28214[(2)] = null);

(statearr_28189_28214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (6))){
var inst_28140 = (state_28180[(7)]);
var inst_28165 = inst_28140.length;
var inst_28166 = (inst_28165 > (0));
var state_28180__$1 = state_28180;
if(cljs.core.truth_(inst_28166)){
var statearr_28190_28215 = state_28180__$1;
(statearr_28190_28215[(1)] = (12));

} else {
var statearr_28191_28216 = state_28180__$1;
(statearr_28191_28216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (3))){
var inst_28178 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28180__$1,inst_28178);
} else {
if((state_val_28181 === (12))){
var inst_28140 = (state_28180[(7)]);
var inst_28168 = cljs.core.vec.call(null,inst_28140);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28180__$1,(15),out,inst_28168);
} else {
if((state_val_28181 === (2))){
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28180__$1,(4),ch);
} else {
if((state_val_28181 === (11))){
var inst_28148 = (state_28180[(10)]);
var inst_28144 = (state_28180[(9)]);
var inst_28158 = (state_28180[(2)]);
var inst_28159 = [];
var inst_28160 = inst_28159.push(inst_28144);
var inst_28140 = inst_28159;
var inst_28141 = inst_28148;
var state_28180__$1 = (function (){var statearr_28192 = state_28180;
(statearr_28192[(7)] = inst_28140);

(statearr_28192[(8)] = inst_28141);

(statearr_28192[(11)] = inst_28158);

(statearr_28192[(12)] = inst_28160);

return statearr_28192;
})();
var statearr_28193_28217 = state_28180__$1;
(statearr_28193_28217[(2)] = null);

(statearr_28193_28217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (9))){
var inst_28140 = (state_28180[(7)]);
var inst_28156 = cljs.core.vec.call(null,inst_28140);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28180__$1,(11),out,inst_28156);
} else {
if((state_val_28181 === (5))){
var inst_28148 = (state_28180[(10)]);
var inst_28141 = (state_28180[(8)]);
var inst_28144 = (state_28180[(9)]);
var inst_28148__$1 = f.call(null,inst_28144);
var inst_28149 = cljs.core._EQ_.call(null,inst_28148__$1,inst_28141);
var inst_28150 = cljs.core.keyword_identical_QMARK_.call(null,inst_28141,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28151 = ((inst_28149) || (inst_28150));
var state_28180__$1 = (function (){var statearr_28194 = state_28180;
(statearr_28194[(10)] = inst_28148__$1);

return statearr_28194;
})();
if(cljs.core.truth_(inst_28151)){
var statearr_28195_28218 = state_28180__$1;
(statearr_28195_28218[(1)] = (8));

} else {
var statearr_28196_28219 = state_28180__$1;
(statearr_28196_28219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (14))){
var inst_28173 = (state_28180[(2)]);
var inst_28174 = cljs.core.async.close_BANG_.call(null,out);
var state_28180__$1 = (function (){var statearr_28198 = state_28180;
(statearr_28198[(13)] = inst_28173);

return statearr_28198;
})();
var statearr_28199_28220 = state_28180__$1;
(statearr_28199_28220[(2)] = inst_28174);

(statearr_28199_28220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (10))){
var inst_28163 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28200_28221 = state_28180__$1;
(statearr_28200_28221[(2)] = inst_28163);

(statearr_28200_28221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (8))){
var inst_28148 = (state_28180[(10)]);
var inst_28140 = (state_28180[(7)]);
var inst_28144 = (state_28180[(9)]);
var inst_28153 = inst_28140.push(inst_28144);
var tmp28197 = inst_28140;
var inst_28140__$1 = tmp28197;
var inst_28141 = inst_28148;
var state_28180__$1 = (function (){var statearr_28201 = state_28180;
(statearr_28201[(7)] = inst_28140__$1);

(statearr_28201[(8)] = inst_28141);

(statearr_28201[(14)] = inst_28153);

return statearr_28201;
})();
var statearr_28202_28222 = state_28180__$1;
(statearr_28202_28222[(2)] = null);

(statearr_28202_28222[(1)] = (2));


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
});})(c__26305__auto___28208,out))
;
return ((function (switch__26210__auto__,c__26305__auto___28208,out){
return (function() {
var cljs$core$async$state_machine__26211__auto__ = null;
var cljs$core$async$state_machine__26211__auto____0 = (function (){
var statearr_28203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28203[(0)] = cljs$core$async$state_machine__26211__auto__);

(statearr_28203[(1)] = (1));

return statearr_28203;
});
var cljs$core$async$state_machine__26211__auto____1 = (function (state_28180){
while(true){
var ret_value__26212__auto__ = (function (){try{while(true){
var result__26213__auto__ = switch__26210__auto__.call(null,state_28180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26213__auto__;
}
break;
}
}catch (e28204){if((e28204 instanceof Object)){
var ex__26214__auto__ = e28204;
var statearr_28205_28223 = state_28180;
(statearr_28205_28223[(5)] = ex__26214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28224 = state_28180;
state_28180 = G__28224;
continue;
} else {
return ret_value__26212__auto__;
}
break;
}
});
cljs$core$async$state_machine__26211__auto__ = function(state_28180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26211__auto____1.call(this,state_28180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26211__auto____0;
cljs$core$async$state_machine__26211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26211__auto____1;
return cljs$core$async$state_machine__26211__auto__;
})()
;})(switch__26210__auto__,c__26305__auto___28208,out))
})();
var state__26307__auto__ = (function (){var statearr_28206 = f__26306__auto__.call(null);
(statearr_28206[(6)] = c__26305__auto___28208);

return statearr_28206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26307__auto__);
});})(c__26305__auto___28208,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1599595552619
