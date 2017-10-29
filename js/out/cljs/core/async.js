// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__52651 = arguments.length;
switch (G__52651) {
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
if(typeof cljs.core.async.t_cljs$core$async52652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52652 = (function (f,blockable,meta52653){
this.f = f;
this.blockable = blockable;
this.meta52653 = meta52653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52654,meta52653__$1){
var self__ = this;
var _52654__$1 = this;
return (new cljs.core.async.t_cljs$core$async52652(self__.f,self__.blockable,meta52653__$1));
});

cljs.core.async.t_cljs$core$async52652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52654){
var self__ = this;
var _52654__$1 = this;
return self__.meta52653;
});

cljs.core.async.t_cljs$core$async52652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52653","meta52653",247467635,null)], null);
});

cljs.core.async.t_cljs$core$async52652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52652";

cljs.core.async.t_cljs$core$async52652.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async52652");
});

cljs.core.async.__GT_t_cljs$core$async52652 = (function cljs$core$async$__GT_t_cljs$core$async52652(f__$1,blockable__$1,meta52653){
return (new cljs.core.async.t_cljs$core$async52652(f__$1,blockable__$1,meta52653));
});

}

return (new cljs.core.async.t_cljs$core$async52652(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__52658 = arguments.length;
switch (G__52658) {
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
var G__52661 = arguments.length;
switch (G__52661) {
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
var G__52664 = arguments.length;
switch (G__52664) {
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
var val_52666 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_52666);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_52666,ret){
return (function (){
return fn1.call(null,val_52666);
});})(val_52666,ret))
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
var G__52668 = arguments.length;
switch (G__52668) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__28934__auto___52670 = n;
var x_52671 = (0);
while(true){
if((x_52671 < n__28934__auto___52670)){
(a[x_52671] = (0));

var G__52672 = (x_52671 + (1));
x_52671 = G__52672;
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

var G__52673 = (i + (1));
i = G__52673;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async52674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52674 = (function (flag,meta52675){
this.flag = flag;
this.meta52675 = meta52675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52676,meta52675__$1){
var self__ = this;
var _52676__$1 = this;
return (new cljs.core.async.t_cljs$core$async52674(self__.flag,meta52675__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52676){
var self__ = this;
var _52676__$1 = this;
return self__.meta52675;
});})(flag))
;

cljs.core.async.t_cljs$core$async52674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52674.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52675","meta52675",636208392,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52674";

cljs.core.async.t_cljs$core$async52674.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async52674");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async52674 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52674(flag__$1,meta52675){
return (new cljs.core.async.t_cljs$core$async52674(flag__$1,meta52675));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52674(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async52677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52677 = (function (flag,cb,meta52678){
this.flag = flag;
this.cb = cb;
this.meta52678 = meta52678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52679,meta52678__$1){
var self__ = this;
var _52679__$1 = this;
return (new cljs.core.async.t_cljs$core$async52677(self__.flag,self__.cb,meta52678__$1));
});

cljs.core.async.t_cljs$core$async52677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52679){
var self__ = this;
var _52679__$1 = this;
return self__.meta52678;
});

cljs.core.async.t_cljs$core$async52677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async52677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52678","meta52678",623704283,null)], null);
});

cljs.core.async.t_cljs$core$async52677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52677";

cljs.core.async.t_cljs$core$async52677.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async52677");
});

cljs.core.async.__GT_t_cljs$core$async52677 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52677(flag__$1,cb__$1,meta52678){
return (new cljs.core.async.t_cljs$core$async52677(flag__$1,cb__$1,meta52678));
});

}

return (new cljs.core.async.t_cljs$core$async52677(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__52680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52680_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52681_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52681_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27989__auto__ = wport;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52682 = (i + (1));
i = G__52682;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27989__auto__ = ret;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27977__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27977__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27977__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__29165__auto__ = [];
var len__29158__auto___52688 = arguments.length;
var i__29159__auto___52689 = (0);
while(true){
if((i__29159__auto___52689 < len__29158__auto___52688)){
args__29165__auto__.push((arguments[i__29159__auto___52689]));

var G__52690 = (i__29159__auto___52689 + (1));
i__29159__auto___52689 = G__52690;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52685){
var map__52686 = p__52685;
var map__52686__$1 = ((((!((map__52686 == null)))?((((map__52686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52686):map__52686);
var opts = map__52686__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52683){
var G__52684 = cljs.core.first.call(null,seq52683);
var seq52683__$1 = cljs.core.next.call(null,seq52683);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52684,seq52683__$1);
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
var G__52692 = arguments.length;
switch (G__52692) {
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
var c__30467__auto___52738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___52738){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___52738){
return (function (state_52716){
var state_val_52717 = (state_52716[(1)]);
if((state_val_52717 === (7))){
var inst_52712 = (state_52716[(2)]);
var state_52716__$1 = state_52716;
var statearr_52718_52739 = state_52716__$1;
(statearr_52718_52739[(2)] = inst_52712);

(statearr_52718_52739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (1))){
var state_52716__$1 = state_52716;
var statearr_52719_52740 = state_52716__$1;
(statearr_52719_52740[(2)] = null);

(statearr_52719_52740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (4))){
var inst_52695 = (state_52716[(7)]);
var inst_52695__$1 = (state_52716[(2)]);
var inst_52696 = (inst_52695__$1 == null);
var state_52716__$1 = (function (){var statearr_52720 = state_52716;
(statearr_52720[(7)] = inst_52695__$1);

return statearr_52720;
})();
if(cljs.core.truth_(inst_52696)){
var statearr_52721_52741 = state_52716__$1;
(statearr_52721_52741[(1)] = (5));

} else {
var statearr_52722_52742 = state_52716__$1;
(statearr_52722_52742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (13))){
var state_52716__$1 = state_52716;
var statearr_52723_52743 = state_52716__$1;
(statearr_52723_52743[(2)] = null);

(statearr_52723_52743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (6))){
var inst_52695 = (state_52716[(7)]);
var state_52716__$1 = state_52716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52716__$1,(11),to,inst_52695);
} else {
if((state_val_52717 === (3))){
var inst_52714 = (state_52716[(2)]);
var state_52716__$1 = state_52716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52716__$1,inst_52714);
} else {
if((state_val_52717 === (12))){
var state_52716__$1 = state_52716;
var statearr_52724_52744 = state_52716__$1;
(statearr_52724_52744[(2)] = null);

(statearr_52724_52744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (2))){
var state_52716__$1 = state_52716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52716__$1,(4),from);
} else {
if((state_val_52717 === (11))){
var inst_52705 = (state_52716[(2)]);
var state_52716__$1 = state_52716;
if(cljs.core.truth_(inst_52705)){
var statearr_52725_52745 = state_52716__$1;
(statearr_52725_52745[(1)] = (12));

} else {
var statearr_52726_52746 = state_52716__$1;
(statearr_52726_52746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (9))){
var state_52716__$1 = state_52716;
var statearr_52727_52747 = state_52716__$1;
(statearr_52727_52747[(2)] = null);

(statearr_52727_52747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (5))){
var state_52716__$1 = state_52716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52728_52748 = state_52716__$1;
(statearr_52728_52748[(1)] = (8));

} else {
var statearr_52729_52749 = state_52716__$1;
(statearr_52729_52749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (14))){
var inst_52710 = (state_52716[(2)]);
var state_52716__$1 = state_52716;
var statearr_52730_52750 = state_52716__$1;
(statearr_52730_52750[(2)] = inst_52710);

(statearr_52730_52750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (10))){
var inst_52702 = (state_52716[(2)]);
var state_52716__$1 = state_52716;
var statearr_52731_52751 = state_52716__$1;
(statearr_52731_52751[(2)] = inst_52702);

(statearr_52731_52751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52717 === (8))){
var inst_52699 = cljs.core.async.close_BANG_.call(null,to);
var state_52716__$1 = state_52716;
var statearr_52732_52752 = state_52716__$1;
(statearr_52732_52752[(2)] = inst_52699);

(statearr_52732_52752[(1)] = (10));


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
});})(c__30467__auto___52738))
;
return ((function (switch__30446__auto__,c__30467__auto___52738){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_52733 = [null,null,null,null,null,null,null,null];
(statearr_52733[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_52733[(1)] = (1));

return statearr_52733;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_52716){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_52716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e52734){if((e52734 instanceof Object)){
var ex__30450__auto__ = e52734;
var statearr_52735_52753 = state_52716;
(statearr_52735_52753[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52754 = state_52716;
state_52716 = G__52754;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_52716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_52716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___52738))
})();
var state__30469__auto__ = (function (){var statearr_52736 = f__30468__auto__.call(null);
(statearr_52736[(6)] = c__30467__auto___52738);

return statearr_52736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___52738))
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
return (function (p__52755){
var vec__52756 = p__52755;
var v = cljs.core.nth.call(null,vec__52756,(0),null);
var p = cljs.core.nth.call(null,vec__52756,(1),null);
var job = vec__52756;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30467__auto___52927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___52927,res,vec__52756,v,p,job,jobs,results){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___52927,res,vec__52756,v,p,job,jobs,results){
return (function (state_52763){
var state_val_52764 = (state_52763[(1)]);
if((state_val_52764 === (1))){
var state_52763__$1 = state_52763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52763__$1,(2),res,v);
} else {
if((state_val_52764 === (2))){
var inst_52760 = (state_52763[(2)]);
var inst_52761 = cljs.core.async.close_BANG_.call(null,res);
var state_52763__$1 = (function (){var statearr_52765 = state_52763;
(statearr_52765[(7)] = inst_52760);

return statearr_52765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52763__$1,inst_52761);
} else {
return null;
}
}
});})(c__30467__auto___52927,res,vec__52756,v,p,job,jobs,results))
;
return ((function (switch__30446__auto__,c__30467__auto___52927,res,vec__52756,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_52766 = [null,null,null,null,null,null,null,null];
(statearr_52766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_52766[(1)] = (1));

return statearr_52766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_52763){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_52763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e52767){if((e52767 instanceof Object)){
var ex__30450__auto__ = e52767;
var statearr_52768_52928 = state_52763;
(statearr_52768_52928[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52929 = state_52763;
state_52763 = G__52929;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_52763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_52763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___52927,res,vec__52756,v,p,job,jobs,results))
})();
var state__30469__auto__ = (function (){var statearr_52769 = f__30468__auto__.call(null);
(statearr_52769[(6)] = c__30467__auto___52927);

return statearr_52769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___52927,res,vec__52756,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52770){
var vec__52771 = p__52770;
var v = cljs.core.nth.call(null,vec__52771,(0),null);
var p = cljs.core.nth.call(null,vec__52771,(1),null);
var job = vec__52771;
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
var n__28934__auto___52930 = n;
var __52931 = (0);
while(true){
if((__52931 < n__28934__auto___52930)){
var G__52774_52932 = type;
var G__52774_52933__$1 = (((G__52774_52932 instanceof cljs.core.Keyword))?G__52774_52932.fqn:null);
switch (G__52774_52933__$1) {
case "compute":
var c__30467__auto___52935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52931,c__30467__auto___52935,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (__52931,c__30467__auto___52935,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async){
return (function (state_52787){
var state_val_52788 = (state_52787[(1)]);
if((state_val_52788 === (1))){
var state_52787__$1 = state_52787;
var statearr_52789_52936 = state_52787__$1;
(statearr_52789_52936[(2)] = null);

(statearr_52789_52936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52788 === (2))){
var state_52787__$1 = state_52787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52787__$1,(4),jobs);
} else {
if((state_val_52788 === (3))){
var inst_52785 = (state_52787[(2)]);
var state_52787__$1 = state_52787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52787__$1,inst_52785);
} else {
if((state_val_52788 === (4))){
var inst_52777 = (state_52787[(2)]);
var inst_52778 = process.call(null,inst_52777);
var state_52787__$1 = state_52787;
if(cljs.core.truth_(inst_52778)){
var statearr_52790_52937 = state_52787__$1;
(statearr_52790_52937[(1)] = (5));

} else {
var statearr_52791_52938 = state_52787__$1;
(statearr_52791_52938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52788 === (5))){
var state_52787__$1 = state_52787;
var statearr_52792_52939 = state_52787__$1;
(statearr_52792_52939[(2)] = null);

(statearr_52792_52939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52788 === (6))){
var state_52787__$1 = state_52787;
var statearr_52793_52940 = state_52787__$1;
(statearr_52793_52940[(2)] = null);

(statearr_52793_52940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52788 === (7))){
var inst_52783 = (state_52787[(2)]);
var state_52787__$1 = state_52787;
var statearr_52794_52941 = state_52787__$1;
(statearr_52794_52941[(2)] = inst_52783);

(statearr_52794_52941[(1)] = (3));


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
});})(__52931,c__30467__auto___52935,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async))
;
return ((function (__52931,switch__30446__auto__,c__30467__auto___52935,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_52795 = [null,null,null,null,null,null,null];
(statearr_52795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_52795[(1)] = (1));

return statearr_52795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_52787){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_52787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e52796){if((e52796 instanceof Object)){
var ex__30450__auto__ = e52796;
var statearr_52797_52942 = state_52787;
(statearr_52797_52942[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52943 = state_52787;
state_52787 = G__52943;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_52787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_52787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(__52931,switch__30446__auto__,c__30467__auto___52935,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async))
})();
var state__30469__auto__ = (function (){var statearr_52798 = f__30468__auto__.call(null);
(statearr_52798[(6)] = c__30467__auto___52935);

return statearr_52798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(__52931,c__30467__auto___52935,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async))
);


break;
case "async":
var c__30467__auto___52944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52931,c__30467__auto___52944,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (__52931,c__30467__auto___52944,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async){
return (function (state_52811){
var state_val_52812 = (state_52811[(1)]);
if((state_val_52812 === (1))){
var state_52811__$1 = state_52811;
var statearr_52813_52945 = state_52811__$1;
(statearr_52813_52945[(2)] = null);

(statearr_52813_52945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52812 === (2))){
var state_52811__$1 = state_52811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52811__$1,(4),jobs);
} else {
if((state_val_52812 === (3))){
var inst_52809 = (state_52811[(2)]);
var state_52811__$1 = state_52811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52811__$1,inst_52809);
} else {
if((state_val_52812 === (4))){
var inst_52801 = (state_52811[(2)]);
var inst_52802 = async.call(null,inst_52801);
var state_52811__$1 = state_52811;
if(cljs.core.truth_(inst_52802)){
var statearr_52814_52946 = state_52811__$1;
(statearr_52814_52946[(1)] = (5));

} else {
var statearr_52815_52947 = state_52811__$1;
(statearr_52815_52947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52812 === (5))){
var state_52811__$1 = state_52811;
var statearr_52816_52948 = state_52811__$1;
(statearr_52816_52948[(2)] = null);

(statearr_52816_52948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52812 === (6))){
var state_52811__$1 = state_52811;
var statearr_52817_52949 = state_52811__$1;
(statearr_52817_52949[(2)] = null);

(statearr_52817_52949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52812 === (7))){
var inst_52807 = (state_52811[(2)]);
var state_52811__$1 = state_52811;
var statearr_52818_52950 = state_52811__$1;
(statearr_52818_52950[(2)] = inst_52807);

(statearr_52818_52950[(1)] = (3));


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
});})(__52931,c__30467__auto___52944,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async))
;
return ((function (__52931,switch__30446__auto__,c__30467__auto___52944,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_52819 = [null,null,null,null,null,null,null];
(statearr_52819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_52819[(1)] = (1));

return statearr_52819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_52811){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_52811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e52820){if((e52820 instanceof Object)){
var ex__30450__auto__ = e52820;
var statearr_52821_52951 = state_52811;
(statearr_52821_52951[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52952 = state_52811;
state_52811 = G__52952;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_52811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_52811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(__52931,switch__30446__auto__,c__30467__auto___52944,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async))
})();
var state__30469__auto__ = (function (){var statearr_52822 = f__30468__auto__.call(null);
(statearr_52822[(6)] = c__30467__auto___52944);

return statearr_52822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(__52931,c__30467__auto___52944,G__52774_52932,G__52774_52933__$1,n__28934__auto___52930,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52774_52933__$1)].join('')));

}

var G__52953 = (__52931 + (1));
__52931 = G__52953;
continue;
} else {
}
break;
}

var c__30467__auto___52954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___52954,jobs,results,process,async){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___52954,jobs,results,process,async){
return (function (state_52844){
var state_val_52845 = (state_52844[(1)]);
if((state_val_52845 === (1))){
var state_52844__$1 = state_52844;
var statearr_52846_52955 = state_52844__$1;
(statearr_52846_52955[(2)] = null);

(statearr_52846_52955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52845 === (2))){
var state_52844__$1 = state_52844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52844__$1,(4),from);
} else {
if((state_val_52845 === (3))){
var inst_52842 = (state_52844[(2)]);
var state_52844__$1 = state_52844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52844__$1,inst_52842);
} else {
if((state_val_52845 === (4))){
var inst_52825 = (state_52844[(7)]);
var inst_52825__$1 = (state_52844[(2)]);
var inst_52826 = (inst_52825__$1 == null);
var state_52844__$1 = (function (){var statearr_52847 = state_52844;
(statearr_52847[(7)] = inst_52825__$1);

return statearr_52847;
})();
if(cljs.core.truth_(inst_52826)){
var statearr_52848_52956 = state_52844__$1;
(statearr_52848_52956[(1)] = (5));

} else {
var statearr_52849_52957 = state_52844__$1;
(statearr_52849_52957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52845 === (5))){
var inst_52828 = cljs.core.async.close_BANG_.call(null,jobs);
var state_52844__$1 = state_52844;
var statearr_52850_52958 = state_52844__$1;
(statearr_52850_52958[(2)] = inst_52828);

(statearr_52850_52958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52845 === (6))){
var inst_52830 = (state_52844[(8)]);
var inst_52825 = (state_52844[(7)]);
var inst_52830__$1 = cljs.core.async.chan.call(null,(1));
var inst_52831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52832 = [inst_52825,inst_52830__$1];
var inst_52833 = (new cljs.core.PersistentVector(null,2,(5),inst_52831,inst_52832,null));
var state_52844__$1 = (function (){var statearr_52851 = state_52844;
(statearr_52851[(8)] = inst_52830__$1);

return statearr_52851;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52844__$1,(8),jobs,inst_52833);
} else {
if((state_val_52845 === (7))){
var inst_52840 = (state_52844[(2)]);
var state_52844__$1 = state_52844;
var statearr_52852_52959 = state_52844__$1;
(statearr_52852_52959[(2)] = inst_52840);

(statearr_52852_52959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52845 === (8))){
var inst_52830 = (state_52844[(8)]);
var inst_52835 = (state_52844[(2)]);
var state_52844__$1 = (function (){var statearr_52853 = state_52844;
(statearr_52853[(9)] = inst_52835);

return statearr_52853;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52844__$1,(9),results,inst_52830);
} else {
if((state_val_52845 === (9))){
var inst_52837 = (state_52844[(2)]);
var state_52844__$1 = (function (){var statearr_52854 = state_52844;
(statearr_52854[(10)] = inst_52837);

return statearr_52854;
})();
var statearr_52855_52960 = state_52844__$1;
(statearr_52855_52960[(2)] = null);

(statearr_52855_52960[(1)] = (2));


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
});})(c__30467__auto___52954,jobs,results,process,async))
;
return ((function (switch__30446__auto__,c__30467__auto___52954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_52856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_52856[(1)] = (1));

return statearr_52856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_52844){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_52844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e52857){if((e52857 instanceof Object)){
var ex__30450__auto__ = e52857;
var statearr_52858_52961 = state_52844;
(statearr_52858_52961[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52962 = state_52844;
state_52844 = G__52962;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_52844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_52844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___52954,jobs,results,process,async))
})();
var state__30469__auto__ = (function (){var statearr_52859 = f__30468__auto__.call(null);
(statearr_52859[(6)] = c__30467__auto___52954);

return statearr_52859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___52954,jobs,results,process,async))
);


var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__,jobs,results,process,async){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__,jobs,results,process,async){
return (function (state_52897){
var state_val_52898 = (state_52897[(1)]);
if((state_val_52898 === (7))){
var inst_52893 = (state_52897[(2)]);
var state_52897__$1 = state_52897;
var statearr_52899_52963 = state_52897__$1;
(statearr_52899_52963[(2)] = inst_52893);

(statearr_52899_52963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (20))){
var state_52897__$1 = state_52897;
var statearr_52900_52964 = state_52897__$1;
(statearr_52900_52964[(2)] = null);

(statearr_52900_52964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (1))){
var state_52897__$1 = state_52897;
var statearr_52901_52965 = state_52897__$1;
(statearr_52901_52965[(2)] = null);

(statearr_52901_52965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (4))){
var inst_52862 = (state_52897[(7)]);
var inst_52862__$1 = (state_52897[(2)]);
var inst_52863 = (inst_52862__$1 == null);
var state_52897__$1 = (function (){var statearr_52902 = state_52897;
(statearr_52902[(7)] = inst_52862__$1);

return statearr_52902;
})();
if(cljs.core.truth_(inst_52863)){
var statearr_52903_52966 = state_52897__$1;
(statearr_52903_52966[(1)] = (5));

} else {
var statearr_52904_52967 = state_52897__$1;
(statearr_52904_52967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (15))){
var inst_52875 = (state_52897[(8)]);
var state_52897__$1 = state_52897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52897__$1,(18),to,inst_52875);
} else {
if((state_val_52898 === (21))){
var inst_52888 = (state_52897[(2)]);
var state_52897__$1 = state_52897;
var statearr_52905_52968 = state_52897__$1;
(statearr_52905_52968[(2)] = inst_52888);

(statearr_52905_52968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (13))){
var inst_52890 = (state_52897[(2)]);
var state_52897__$1 = (function (){var statearr_52906 = state_52897;
(statearr_52906[(9)] = inst_52890);

return statearr_52906;
})();
var statearr_52907_52969 = state_52897__$1;
(statearr_52907_52969[(2)] = null);

(statearr_52907_52969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (6))){
var inst_52862 = (state_52897[(7)]);
var state_52897__$1 = state_52897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52897__$1,(11),inst_52862);
} else {
if((state_val_52898 === (17))){
var inst_52883 = (state_52897[(2)]);
var state_52897__$1 = state_52897;
if(cljs.core.truth_(inst_52883)){
var statearr_52908_52970 = state_52897__$1;
(statearr_52908_52970[(1)] = (19));

} else {
var statearr_52909_52971 = state_52897__$1;
(statearr_52909_52971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (3))){
var inst_52895 = (state_52897[(2)]);
var state_52897__$1 = state_52897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52897__$1,inst_52895);
} else {
if((state_val_52898 === (12))){
var inst_52872 = (state_52897[(10)]);
var state_52897__$1 = state_52897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52897__$1,(14),inst_52872);
} else {
if((state_val_52898 === (2))){
var state_52897__$1 = state_52897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52897__$1,(4),results);
} else {
if((state_val_52898 === (19))){
var state_52897__$1 = state_52897;
var statearr_52910_52972 = state_52897__$1;
(statearr_52910_52972[(2)] = null);

(statearr_52910_52972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (11))){
var inst_52872 = (state_52897[(2)]);
var state_52897__$1 = (function (){var statearr_52911 = state_52897;
(statearr_52911[(10)] = inst_52872);

return statearr_52911;
})();
var statearr_52912_52973 = state_52897__$1;
(statearr_52912_52973[(2)] = null);

(statearr_52912_52973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (9))){
var state_52897__$1 = state_52897;
var statearr_52913_52974 = state_52897__$1;
(statearr_52913_52974[(2)] = null);

(statearr_52913_52974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (5))){
var state_52897__$1 = state_52897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52914_52975 = state_52897__$1;
(statearr_52914_52975[(1)] = (8));

} else {
var statearr_52915_52976 = state_52897__$1;
(statearr_52915_52976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (14))){
var inst_52875 = (state_52897[(8)]);
var inst_52877 = (state_52897[(11)]);
var inst_52875__$1 = (state_52897[(2)]);
var inst_52876 = (inst_52875__$1 == null);
var inst_52877__$1 = cljs.core.not.call(null,inst_52876);
var state_52897__$1 = (function (){var statearr_52916 = state_52897;
(statearr_52916[(8)] = inst_52875__$1);

(statearr_52916[(11)] = inst_52877__$1);

return statearr_52916;
})();
if(inst_52877__$1){
var statearr_52917_52977 = state_52897__$1;
(statearr_52917_52977[(1)] = (15));

} else {
var statearr_52918_52978 = state_52897__$1;
(statearr_52918_52978[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (16))){
var inst_52877 = (state_52897[(11)]);
var state_52897__$1 = state_52897;
var statearr_52919_52979 = state_52897__$1;
(statearr_52919_52979[(2)] = inst_52877);

(statearr_52919_52979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (10))){
var inst_52869 = (state_52897[(2)]);
var state_52897__$1 = state_52897;
var statearr_52920_52980 = state_52897__$1;
(statearr_52920_52980[(2)] = inst_52869);

(statearr_52920_52980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (18))){
var inst_52880 = (state_52897[(2)]);
var state_52897__$1 = state_52897;
var statearr_52921_52981 = state_52897__$1;
(statearr_52921_52981[(2)] = inst_52880);

(statearr_52921_52981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52898 === (8))){
var inst_52866 = cljs.core.async.close_BANG_.call(null,to);
var state_52897__$1 = state_52897;
var statearr_52922_52982 = state_52897__$1;
(statearr_52922_52982[(2)] = inst_52866);

(statearr_52922_52982[(1)] = (10));


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
});})(c__30467__auto__,jobs,results,process,async))
;
return ((function (switch__30446__auto__,c__30467__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_52923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_52923[(1)] = (1));

return statearr_52923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_52897){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_52897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e52924){if((e52924 instanceof Object)){
var ex__30450__auto__ = e52924;
var statearr_52925_52983 = state_52897;
(statearr_52925_52983[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52984 = state_52897;
state_52897 = G__52984;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_52897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_52897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__,jobs,results,process,async))
})();
var state__30469__auto__ = (function (){var statearr_52926 = f__30468__auto__.call(null);
(statearr_52926[(6)] = c__30467__auto__);

return statearr_52926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__,jobs,results,process,async))
);

return c__30467__auto__;
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
var G__52986 = arguments.length;
switch (G__52986) {
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
var G__52989 = arguments.length;
switch (G__52989) {
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
var G__52992 = arguments.length;
switch (G__52992) {
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
var c__30467__auto___53041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___53041,tc,fc){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___53041,tc,fc){
return (function (state_53018){
var state_val_53019 = (state_53018[(1)]);
if((state_val_53019 === (7))){
var inst_53014 = (state_53018[(2)]);
var state_53018__$1 = state_53018;
var statearr_53020_53042 = state_53018__$1;
(statearr_53020_53042[(2)] = inst_53014);

(statearr_53020_53042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (1))){
var state_53018__$1 = state_53018;
var statearr_53021_53043 = state_53018__$1;
(statearr_53021_53043[(2)] = null);

(statearr_53021_53043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (4))){
var inst_52995 = (state_53018[(7)]);
var inst_52995__$1 = (state_53018[(2)]);
var inst_52996 = (inst_52995__$1 == null);
var state_53018__$1 = (function (){var statearr_53022 = state_53018;
(statearr_53022[(7)] = inst_52995__$1);

return statearr_53022;
})();
if(cljs.core.truth_(inst_52996)){
var statearr_53023_53044 = state_53018__$1;
(statearr_53023_53044[(1)] = (5));

} else {
var statearr_53024_53045 = state_53018__$1;
(statearr_53024_53045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (13))){
var state_53018__$1 = state_53018;
var statearr_53025_53046 = state_53018__$1;
(statearr_53025_53046[(2)] = null);

(statearr_53025_53046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (6))){
var inst_52995 = (state_53018[(7)]);
var inst_53001 = p.call(null,inst_52995);
var state_53018__$1 = state_53018;
if(cljs.core.truth_(inst_53001)){
var statearr_53026_53047 = state_53018__$1;
(statearr_53026_53047[(1)] = (9));

} else {
var statearr_53027_53048 = state_53018__$1;
(statearr_53027_53048[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (3))){
var inst_53016 = (state_53018[(2)]);
var state_53018__$1 = state_53018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53018__$1,inst_53016);
} else {
if((state_val_53019 === (12))){
var state_53018__$1 = state_53018;
var statearr_53028_53049 = state_53018__$1;
(statearr_53028_53049[(2)] = null);

(statearr_53028_53049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (2))){
var state_53018__$1 = state_53018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53018__$1,(4),ch);
} else {
if((state_val_53019 === (11))){
var inst_52995 = (state_53018[(7)]);
var inst_53005 = (state_53018[(2)]);
var state_53018__$1 = state_53018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53018__$1,(8),inst_53005,inst_52995);
} else {
if((state_val_53019 === (9))){
var state_53018__$1 = state_53018;
var statearr_53029_53050 = state_53018__$1;
(statearr_53029_53050[(2)] = tc);

(statearr_53029_53050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (5))){
var inst_52998 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52999 = cljs.core.async.close_BANG_.call(null,fc);
var state_53018__$1 = (function (){var statearr_53030 = state_53018;
(statearr_53030[(8)] = inst_52998);

return statearr_53030;
})();
var statearr_53031_53051 = state_53018__$1;
(statearr_53031_53051[(2)] = inst_52999);

(statearr_53031_53051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (14))){
var inst_53012 = (state_53018[(2)]);
var state_53018__$1 = state_53018;
var statearr_53032_53052 = state_53018__$1;
(statearr_53032_53052[(2)] = inst_53012);

(statearr_53032_53052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (10))){
var state_53018__$1 = state_53018;
var statearr_53033_53053 = state_53018__$1;
(statearr_53033_53053[(2)] = fc);

(statearr_53033_53053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53019 === (8))){
var inst_53007 = (state_53018[(2)]);
var state_53018__$1 = state_53018;
if(cljs.core.truth_(inst_53007)){
var statearr_53034_53054 = state_53018__$1;
(statearr_53034_53054[(1)] = (12));

} else {
var statearr_53035_53055 = state_53018__$1;
(statearr_53035_53055[(1)] = (13));

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
});})(c__30467__auto___53041,tc,fc))
;
return ((function (switch__30446__auto__,c__30467__auto___53041,tc,fc){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_53036 = [null,null,null,null,null,null,null,null,null];
(statearr_53036[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_53036[(1)] = (1));

return statearr_53036;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_53018){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e53037){if((e53037 instanceof Object)){
var ex__30450__auto__ = e53037;
var statearr_53038_53056 = state_53018;
(statearr_53038_53056[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53057 = state_53018;
state_53018 = G__53057;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_53018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_53018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___53041,tc,fc))
})();
var state__30469__auto__ = (function (){var statearr_53039 = f__30468__auto__.call(null);
(statearr_53039[(6)] = c__30467__auto___53041);

return statearr_53039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___53041,tc,fc))
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
var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__){
return (function (state_53078){
var state_val_53079 = (state_53078[(1)]);
if((state_val_53079 === (7))){
var inst_53074 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53080_53098 = state_53078__$1;
(statearr_53080_53098[(2)] = inst_53074);

(statearr_53080_53098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (1))){
var inst_53058 = init;
var state_53078__$1 = (function (){var statearr_53081 = state_53078;
(statearr_53081[(7)] = inst_53058);

return statearr_53081;
})();
var statearr_53082_53099 = state_53078__$1;
(statearr_53082_53099[(2)] = null);

(statearr_53082_53099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (4))){
var inst_53061 = (state_53078[(8)]);
var inst_53061__$1 = (state_53078[(2)]);
var inst_53062 = (inst_53061__$1 == null);
var state_53078__$1 = (function (){var statearr_53083 = state_53078;
(statearr_53083[(8)] = inst_53061__$1);

return statearr_53083;
})();
if(cljs.core.truth_(inst_53062)){
var statearr_53084_53100 = state_53078__$1;
(statearr_53084_53100[(1)] = (5));

} else {
var statearr_53085_53101 = state_53078__$1;
(statearr_53085_53101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (6))){
var inst_53058 = (state_53078[(7)]);
var inst_53065 = (state_53078[(9)]);
var inst_53061 = (state_53078[(8)]);
var inst_53065__$1 = f.call(null,inst_53058,inst_53061);
var inst_53066 = cljs.core.reduced_QMARK_.call(null,inst_53065__$1);
var state_53078__$1 = (function (){var statearr_53086 = state_53078;
(statearr_53086[(9)] = inst_53065__$1);

return statearr_53086;
})();
if(inst_53066){
var statearr_53087_53102 = state_53078__$1;
(statearr_53087_53102[(1)] = (8));

} else {
var statearr_53088_53103 = state_53078__$1;
(statearr_53088_53103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (3))){
var inst_53076 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53078__$1,inst_53076);
} else {
if((state_val_53079 === (2))){
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53078__$1,(4),ch);
} else {
if((state_val_53079 === (9))){
var inst_53065 = (state_53078[(9)]);
var inst_53058 = inst_53065;
var state_53078__$1 = (function (){var statearr_53089 = state_53078;
(statearr_53089[(7)] = inst_53058);

return statearr_53089;
})();
var statearr_53090_53104 = state_53078__$1;
(statearr_53090_53104[(2)] = null);

(statearr_53090_53104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (5))){
var inst_53058 = (state_53078[(7)]);
var state_53078__$1 = state_53078;
var statearr_53091_53105 = state_53078__$1;
(statearr_53091_53105[(2)] = inst_53058);

(statearr_53091_53105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (10))){
var inst_53072 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53092_53106 = state_53078__$1;
(statearr_53092_53106[(2)] = inst_53072);

(statearr_53092_53106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (8))){
var inst_53065 = (state_53078[(9)]);
var inst_53068 = cljs.core.deref.call(null,inst_53065);
var state_53078__$1 = state_53078;
var statearr_53093_53107 = state_53078__$1;
(statearr_53093_53107[(2)] = inst_53068);

(statearr_53093_53107[(1)] = (10));


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
});})(c__30467__auto__))
;
return ((function (switch__30446__auto__,c__30467__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30447__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30447__auto____0 = (function (){
var statearr_53094 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53094[(0)] = cljs$core$async$reduce_$_state_machine__30447__auto__);

(statearr_53094[(1)] = (1));

return statearr_53094;
});
var cljs$core$async$reduce_$_state_machine__30447__auto____1 = (function (state_53078){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e53095){if((e53095 instanceof Object)){
var ex__30450__auto__ = e53095;
var statearr_53096_53108 = state_53078;
(statearr_53096_53108[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53109 = state_53078;
state_53078 = G__53109;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30447__auto__ = function(state_53078){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30447__auto____1.call(this,state_53078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30447__auto____0;
cljs$core$async$reduce_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30447__auto____1;
return cljs$core$async$reduce_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__))
})();
var state__30469__auto__ = (function (){var statearr_53097 = f__30468__auto__.call(null);
(statearr_53097[(6)] = c__30467__auto__);

return statearr_53097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__))
);

return c__30467__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__,f__$1){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__,f__$1){
return (function (state_53115){
var state_val_53116 = (state_53115[(1)]);
if((state_val_53116 === (1))){
var inst_53110 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_53115__$1 = state_53115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53115__$1,(2),inst_53110);
} else {
if((state_val_53116 === (2))){
var inst_53112 = (state_53115[(2)]);
var inst_53113 = f__$1.call(null,inst_53112);
var state_53115__$1 = state_53115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53115__$1,inst_53113);
} else {
return null;
}
}
});})(c__30467__auto__,f__$1))
;
return ((function (switch__30446__auto__,c__30467__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30447__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30447__auto____0 = (function (){
var statearr_53117 = [null,null,null,null,null,null,null];
(statearr_53117[(0)] = cljs$core$async$transduce_$_state_machine__30447__auto__);

(statearr_53117[(1)] = (1));

return statearr_53117;
});
var cljs$core$async$transduce_$_state_machine__30447__auto____1 = (function (state_53115){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e53118){if((e53118 instanceof Object)){
var ex__30450__auto__ = e53118;
var statearr_53119_53121 = state_53115;
(statearr_53119_53121[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53122 = state_53115;
state_53115 = G__53122;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30447__auto__ = function(state_53115){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30447__auto____1.call(this,state_53115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30447__auto____0;
cljs$core$async$transduce_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30447__auto____1;
return cljs$core$async$transduce_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__,f__$1))
})();
var state__30469__auto__ = (function (){var statearr_53120 = f__30468__auto__.call(null);
(statearr_53120[(6)] = c__30467__auto__);

return statearr_53120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__,f__$1))
);

return c__30467__auto__;
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
var G__53124 = arguments.length;
switch (G__53124) {
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
var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__){
return (function (state_53149){
var state_val_53150 = (state_53149[(1)]);
if((state_val_53150 === (7))){
var inst_53131 = (state_53149[(2)]);
var state_53149__$1 = state_53149;
var statearr_53151_53172 = state_53149__$1;
(statearr_53151_53172[(2)] = inst_53131);

(statearr_53151_53172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (1))){
var inst_53125 = cljs.core.seq.call(null,coll);
var inst_53126 = inst_53125;
var state_53149__$1 = (function (){var statearr_53152 = state_53149;
(statearr_53152[(7)] = inst_53126);

return statearr_53152;
})();
var statearr_53153_53173 = state_53149__$1;
(statearr_53153_53173[(2)] = null);

(statearr_53153_53173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (4))){
var inst_53126 = (state_53149[(7)]);
var inst_53129 = cljs.core.first.call(null,inst_53126);
var state_53149__$1 = state_53149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53149__$1,(7),ch,inst_53129);
} else {
if((state_val_53150 === (13))){
var inst_53143 = (state_53149[(2)]);
var state_53149__$1 = state_53149;
var statearr_53154_53174 = state_53149__$1;
(statearr_53154_53174[(2)] = inst_53143);

(statearr_53154_53174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (6))){
var inst_53134 = (state_53149[(2)]);
var state_53149__$1 = state_53149;
if(cljs.core.truth_(inst_53134)){
var statearr_53155_53175 = state_53149__$1;
(statearr_53155_53175[(1)] = (8));

} else {
var statearr_53156_53176 = state_53149__$1;
(statearr_53156_53176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (3))){
var inst_53147 = (state_53149[(2)]);
var state_53149__$1 = state_53149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53149__$1,inst_53147);
} else {
if((state_val_53150 === (12))){
var state_53149__$1 = state_53149;
var statearr_53157_53177 = state_53149__$1;
(statearr_53157_53177[(2)] = null);

(statearr_53157_53177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (2))){
var inst_53126 = (state_53149[(7)]);
var state_53149__$1 = state_53149;
if(cljs.core.truth_(inst_53126)){
var statearr_53158_53178 = state_53149__$1;
(statearr_53158_53178[(1)] = (4));

} else {
var statearr_53159_53179 = state_53149__$1;
(statearr_53159_53179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (11))){
var inst_53140 = cljs.core.async.close_BANG_.call(null,ch);
var state_53149__$1 = state_53149;
var statearr_53160_53180 = state_53149__$1;
(statearr_53160_53180[(2)] = inst_53140);

(statearr_53160_53180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (9))){
var state_53149__$1 = state_53149;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53161_53181 = state_53149__$1;
(statearr_53161_53181[(1)] = (11));

} else {
var statearr_53162_53182 = state_53149__$1;
(statearr_53162_53182[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (5))){
var inst_53126 = (state_53149[(7)]);
var state_53149__$1 = state_53149;
var statearr_53163_53183 = state_53149__$1;
(statearr_53163_53183[(2)] = inst_53126);

(statearr_53163_53183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (10))){
var inst_53145 = (state_53149[(2)]);
var state_53149__$1 = state_53149;
var statearr_53164_53184 = state_53149__$1;
(statearr_53164_53184[(2)] = inst_53145);

(statearr_53164_53184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53150 === (8))){
var inst_53126 = (state_53149[(7)]);
var inst_53136 = cljs.core.next.call(null,inst_53126);
var inst_53126__$1 = inst_53136;
var state_53149__$1 = (function (){var statearr_53165 = state_53149;
(statearr_53165[(7)] = inst_53126__$1);

return statearr_53165;
})();
var statearr_53166_53185 = state_53149__$1;
(statearr_53166_53185[(2)] = null);

(statearr_53166_53185[(1)] = (2));


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
});})(c__30467__auto__))
;
return ((function (switch__30446__auto__,c__30467__auto__){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_53167 = [null,null,null,null,null,null,null,null];
(statearr_53167[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_53167[(1)] = (1));

return statearr_53167;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_53149){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e53168){if((e53168 instanceof Object)){
var ex__30450__auto__ = e53168;
var statearr_53169_53186 = state_53149;
(statearr_53169_53186[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53187 = state_53149;
state_53149 = G__53187;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_53149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_53149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__))
})();
var state__30469__auto__ = (function (){var statearr_53170 = f__30468__auto__.call(null);
(statearr_53170[(6)] = c__30467__auto__);

return statearr_53170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__))
);

return c__30467__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28672__auto__ = (((_ == null))?null:_);
var m__28673__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,_);
} else {
var m__28673__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async53188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53188 = (function (ch,cs,meta53189){
this.ch = ch;
this.cs = cs;
this.meta53189 = meta53189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_53190,meta53189__$1){
var self__ = this;
var _53190__$1 = this;
return (new cljs.core.async.t_cljs$core$async53188(self__.ch,self__.cs,meta53189__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async53188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_53190){
var self__ = this;
var _53190__$1 = this;
return self__.meta53189;
});})(cs))
;

cljs.core.async.t_cljs$core$async53188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async53188.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53188.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53188.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53188.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53188.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta53189","meta53189",518193772,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async53188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53188";

cljs.core.async.t_cljs$core$async53188.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async53188");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async53188 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async53188(ch__$1,cs__$1,meta53189){
return (new cljs.core.async.t_cljs$core$async53188(ch__$1,cs__$1,meta53189));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async53188(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30467__auto___53410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___53410,cs,m,dchan,dctr,done){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___53410,cs,m,dchan,dctr,done){
return (function (state_53325){
var state_val_53326 = (state_53325[(1)]);
if((state_val_53326 === (7))){
var inst_53321 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53327_53411 = state_53325__$1;
(statearr_53327_53411[(2)] = inst_53321);

(statearr_53327_53411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (20))){
var inst_53224 = (state_53325[(7)]);
var inst_53236 = cljs.core.first.call(null,inst_53224);
var inst_53237 = cljs.core.nth.call(null,inst_53236,(0),null);
var inst_53238 = cljs.core.nth.call(null,inst_53236,(1),null);
var state_53325__$1 = (function (){var statearr_53328 = state_53325;
(statearr_53328[(8)] = inst_53237);

return statearr_53328;
})();
if(cljs.core.truth_(inst_53238)){
var statearr_53329_53412 = state_53325__$1;
(statearr_53329_53412[(1)] = (22));

} else {
var statearr_53330_53413 = state_53325__$1;
(statearr_53330_53413[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (27))){
var inst_53268 = (state_53325[(9)]);
var inst_53193 = (state_53325[(10)]);
var inst_53273 = (state_53325[(11)]);
var inst_53266 = (state_53325[(12)]);
var inst_53273__$1 = cljs.core._nth.call(null,inst_53266,inst_53268);
var inst_53274 = cljs.core.async.put_BANG_.call(null,inst_53273__$1,inst_53193,done);
var state_53325__$1 = (function (){var statearr_53331 = state_53325;
(statearr_53331[(11)] = inst_53273__$1);

return statearr_53331;
})();
if(cljs.core.truth_(inst_53274)){
var statearr_53332_53414 = state_53325__$1;
(statearr_53332_53414[(1)] = (30));

} else {
var statearr_53333_53415 = state_53325__$1;
(statearr_53333_53415[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (1))){
var state_53325__$1 = state_53325;
var statearr_53334_53416 = state_53325__$1;
(statearr_53334_53416[(2)] = null);

(statearr_53334_53416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (24))){
var inst_53224 = (state_53325[(7)]);
var inst_53243 = (state_53325[(2)]);
var inst_53244 = cljs.core.next.call(null,inst_53224);
var inst_53202 = inst_53244;
var inst_53203 = null;
var inst_53204 = (0);
var inst_53205 = (0);
var state_53325__$1 = (function (){var statearr_53335 = state_53325;
(statearr_53335[(13)] = inst_53202);

(statearr_53335[(14)] = inst_53205);

(statearr_53335[(15)] = inst_53243);

(statearr_53335[(16)] = inst_53204);

(statearr_53335[(17)] = inst_53203);

return statearr_53335;
})();
var statearr_53336_53417 = state_53325__$1;
(statearr_53336_53417[(2)] = null);

(statearr_53336_53417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (39))){
var state_53325__$1 = state_53325;
var statearr_53340_53418 = state_53325__$1;
(statearr_53340_53418[(2)] = null);

(statearr_53340_53418[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (4))){
var inst_53193 = (state_53325[(10)]);
var inst_53193__$1 = (state_53325[(2)]);
var inst_53194 = (inst_53193__$1 == null);
var state_53325__$1 = (function (){var statearr_53341 = state_53325;
(statearr_53341[(10)] = inst_53193__$1);

return statearr_53341;
})();
if(cljs.core.truth_(inst_53194)){
var statearr_53342_53419 = state_53325__$1;
(statearr_53342_53419[(1)] = (5));

} else {
var statearr_53343_53420 = state_53325__$1;
(statearr_53343_53420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (15))){
var inst_53202 = (state_53325[(13)]);
var inst_53205 = (state_53325[(14)]);
var inst_53204 = (state_53325[(16)]);
var inst_53203 = (state_53325[(17)]);
var inst_53220 = (state_53325[(2)]);
var inst_53221 = (inst_53205 + (1));
var tmp53337 = inst_53202;
var tmp53338 = inst_53204;
var tmp53339 = inst_53203;
var inst_53202__$1 = tmp53337;
var inst_53203__$1 = tmp53339;
var inst_53204__$1 = tmp53338;
var inst_53205__$1 = inst_53221;
var state_53325__$1 = (function (){var statearr_53344 = state_53325;
(statearr_53344[(13)] = inst_53202__$1);

(statearr_53344[(14)] = inst_53205__$1);

(statearr_53344[(16)] = inst_53204__$1);

(statearr_53344[(18)] = inst_53220);

(statearr_53344[(17)] = inst_53203__$1);

return statearr_53344;
})();
var statearr_53345_53421 = state_53325__$1;
(statearr_53345_53421[(2)] = null);

(statearr_53345_53421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (21))){
var inst_53247 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53349_53422 = state_53325__$1;
(statearr_53349_53422[(2)] = inst_53247);

(statearr_53349_53422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (31))){
var inst_53273 = (state_53325[(11)]);
var inst_53277 = done.call(null,null);
var inst_53278 = cljs.core.async.untap_STAR_.call(null,m,inst_53273);
var state_53325__$1 = (function (){var statearr_53350 = state_53325;
(statearr_53350[(19)] = inst_53277);

return statearr_53350;
})();
var statearr_53351_53423 = state_53325__$1;
(statearr_53351_53423[(2)] = inst_53278);

(statearr_53351_53423[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (32))){
var inst_53267 = (state_53325[(20)]);
var inst_53268 = (state_53325[(9)]);
var inst_53265 = (state_53325[(21)]);
var inst_53266 = (state_53325[(12)]);
var inst_53280 = (state_53325[(2)]);
var inst_53281 = (inst_53268 + (1));
var tmp53346 = inst_53267;
var tmp53347 = inst_53265;
var tmp53348 = inst_53266;
var inst_53265__$1 = tmp53347;
var inst_53266__$1 = tmp53348;
var inst_53267__$1 = tmp53346;
var inst_53268__$1 = inst_53281;
var state_53325__$1 = (function (){var statearr_53352 = state_53325;
(statearr_53352[(20)] = inst_53267__$1);

(statearr_53352[(9)] = inst_53268__$1);

(statearr_53352[(21)] = inst_53265__$1);

(statearr_53352[(22)] = inst_53280);

(statearr_53352[(12)] = inst_53266__$1);

return statearr_53352;
})();
var statearr_53353_53424 = state_53325__$1;
(statearr_53353_53424[(2)] = null);

(statearr_53353_53424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (40))){
var inst_53293 = (state_53325[(23)]);
var inst_53297 = done.call(null,null);
var inst_53298 = cljs.core.async.untap_STAR_.call(null,m,inst_53293);
var state_53325__$1 = (function (){var statearr_53354 = state_53325;
(statearr_53354[(24)] = inst_53297);

return statearr_53354;
})();
var statearr_53355_53425 = state_53325__$1;
(statearr_53355_53425[(2)] = inst_53298);

(statearr_53355_53425[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (33))){
var inst_53284 = (state_53325[(25)]);
var inst_53286 = cljs.core.chunked_seq_QMARK_.call(null,inst_53284);
var state_53325__$1 = state_53325;
if(inst_53286){
var statearr_53356_53426 = state_53325__$1;
(statearr_53356_53426[(1)] = (36));

} else {
var statearr_53357_53427 = state_53325__$1;
(statearr_53357_53427[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (13))){
var inst_53214 = (state_53325[(26)]);
var inst_53217 = cljs.core.async.close_BANG_.call(null,inst_53214);
var state_53325__$1 = state_53325;
var statearr_53358_53428 = state_53325__$1;
(statearr_53358_53428[(2)] = inst_53217);

(statearr_53358_53428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (22))){
var inst_53237 = (state_53325[(8)]);
var inst_53240 = cljs.core.async.close_BANG_.call(null,inst_53237);
var state_53325__$1 = state_53325;
var statearr_53359_53429 = state_53325__$1;
(statearr_53359_53429[(2)] = inst_53240);

(statearr_53359_53429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (36))){
var inst_53284 = (state_53325[(25)]);
var inst_53288 = cljs.core.chunk_first.call(null,inst_53284);
var inst_53289 = cljs.core.chunk_rest.call(null,inst_53284);
var inst_53290 = cljs.core.count.call(null,inst_53288);
var inst_53265 = inst_53289;
var inst_53266 = inst_53288;
var inst_53267 = inst_53290;
var inst_53268 = (0);
var state_53325__$1 = (function (){var statearr_53360 = state_53325;
(statearr_53360[(20)] = inst_53267);

(statearr_53360[(9)] = inst_53268);

(statearr_53360[(21)] = inst_53265);

(statearr_53360[(12)] = inst_53266);

return statearr_53360;
})();
var statearr_53361_53430 = state_53325__$1;
(statearr_53361_53430[(2)] = null);

(statearr_53361_53430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (41))){
var inst_53284 = (state_53325[(25)]);
var inst_53300 = (state_53325[(2)]);
var inst_53301 = cljs.core.next.call(null,inst_53284);
var inst_53265 = inst_53301;
var inst_53266 = null;
var inst_53267 = (0);
var inst_53268 = (0);
var state_53325__$1 = (function (){var statearr_53362 = state_53325;
(statearr_53362[(27)] = inst_53300);

(statearr_53362[(20)] = inst_53267);

(statearr_53362[(9)] = inst_53268);

(statearr_53362[(21)] = inst_53265);

(statearr_53362[(12)] = inst_53266);

return statearr_53362;
})();
var statearr_53363_53431 = state_53325__$1;
(statearr_53363_53431[(2)] = null);

(statearr_53363_53431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (43))){
var state_53325__$1 = state_53325;
var statearr_53364_53432 = state_53325__$1;
(statearr_53364_53432[(2)] = null);

(statearr_53364_53432[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (29))){
var inst_53309 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53365_53433 = state_53325__$1;
(statearr_53365_53433[(2)] = inst_53309);

(statearr_53365_53433[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (44))){
var inst_53318 = (state_53325[(2)]);
var state_53325__$1 = (function (){var statearr_53366 = state_53325;
(statearr_53366[(28)] = inst_53318);

return statearr_53366;
})();
var statearr_53367_53434 = state_53325__$1;
(statearr_53367_53434[(2)] = null);

(statearr_53367_53434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (6))){
var inst_53257 = (state_53325[(29)]);
var inst_53256 = cljs.core.deref.call(null,cs);
var inst_53257__$1 = cljs.core.keys.call(null,inst_53256);
var inst_53258 = cljs.core.count.call(null,inst_53257__$1);
var inst_53259 = cljs.core.reset_BANG_.call(null,dctr,inst_53258);
var inst_53264 = cljs.core.seq.call(null,inst_53257__$1);
var inst_53265 = inst_53264;
var inst_53266 = null;
var inst_53267 = (0);
var inst_53268 = (0);
var state_53325__$1 = (function (){var statearr_53368 = state_53325;
(statearr_53368[(30)] = inst_53259);

(statearr_53368[(29)] = inst_53257__$1);

(statearr_53368[(20)] = inst_53267);

(statearr_53368[(9)] = inst_53268);

(statearr_53368[(21)] = inst_53265);

(statearr_53368[(12)] = inst_53266);

return statearr_53368;
})();
var statearr_53369_53435 = state_53325__$1;
(statearr_53369_53435[(2)] = null);

(statearr_53369_53435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (28))){
var inst_53284 = (state_53325[(25)]);
var inst_53265 = (state_53325[(21)]);
var inst_53284__$1 = cljs.core.seq.call(null,inst_53265);
var state_53325__$1 = (function (){var statearr_53370 = state_53325;
(statearr_53370[(25)] = inst_53284__$1);

return statearr_53370;
})();
if(inst_53284__$1){
var statearr_53371_53436 = state_53325__$1;
(statearr_53371_53436[(1)] = (33));

} else {
var statearr_53372_53437 = state_53325__$1;
(statearr_53372_53437[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (25))){
var inst_53267 = (state_53325[(20)]);
var inst_53268 = (state_53325[(9)]);
var inst_53270 = (inst_53268 < inst_53267);
var inst_53271 = inst_53270;
var state_53325__$1 = state_53325;
if(cljs.core.truth_(inst_53271)){
var statearr_53373_53438 = state_53325__$1;
(statearr_53373_53438[(1)] = (27));

} else {
var statearr_53374_53439 = state_53325__$1;
(statearr_53374_53439[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (34))){
var state_53325__$1 = state_53325;
var statearr_53375_53440 = state_53325__$1;
(statearr_53375_53440[(2)] = null);

(statearr_53375_53440[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (17))){
var state_53325__$1 = state_53325;
var statearr_53376_53441 = state_53325__$1;
(statearr_53376_53441[(2)] = null);

(statearr_53376_53441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (3))){
var inst_53323 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53325__$1,inst_53323);
} else {
if((state_val_53326 === (12))){
var inst_53252 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53377_53442 = state_53325__$1;
(statearr_53377_53442[(2)] = inst_53252);

(statearr_53377_53442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (2))){
var state_53325__$1 = state_53325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53325__$1,(4),ch);
} else {
if((state_val_53326 === (23))){
var state_53325__$1 = state_53325;
var statearr_53378_53443 = state_53325__$1;
(statearr_53378_53443[(2)] = null);

(statearr_53378_53443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (35))){
var inst_53307 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53379_53444 = state_53325__$1;
(statearr_53379_53444[(2)] = inst_53307);

(statearr_53379_53444[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (19))){
var inst_53224 = (state_53325[(7)]);
var inst_53228 = cljs.core.chunk_first.call(null,inst_53224);
var inst_53229 = cljs.core.chunk_rest.call(null,inst_53224);
var inst_53230 = cljs.core.count.call(null,inst_53228);
var inst_53202 = inst_53229;
var inst_53203 = inst_53228;
var inst_53204 = inst_53230;
var inst_53205 = (0);
var state_53325__$1 = (function (){var statearr_53380 = state_53325;
(statearr_53380[(13)] = inst_53202);

(statearr_53380[(14)] = inst_53205);

(statearr_53380[(16)] = inst_53204);

(statearr_53380[(17)] = inst_53203);

return statearr_53380;
})();
var statearr_53381_53445 = state_53325__$1;
(statearr_53381_53445[(2)] = null);

(statearr_53381_53445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (11))){
var inst_53202 = (state_53325[(13)]);
var inst_53224 = (state_53325[(7)]);
var inst_53224__$1 = cljs.core.seq.call(null,inst_53202);
var state_53325__$1 = (function (){var statearr_53382 = state_53325;
(statearr_53382[(7)] = inst_53224__$1);

return statearr_53382;
})();
if(inst_53224__$1){
var statearr_53383_53446 = state_53325__$1;
(statearr_53383_53446[(1)] = (16));

} else {
var statearr_53384_53447 = state_53325__$1;
(statearr_53384_53447[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (9))){
var inst_53254 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53385_53448 = state_53325__$1;
(statearr_53385_53448[(2)] = inst_53254);

(statearr_53385_53448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (5))){
var inst_53200 = cljs.core.deref.call(null,cs);
var inst_53201 = cljs.core.seq.call(null,inst_53200);
var inst_53202 = inst_53201;
var inst_53203 = null;
var inst_53204 = (0);
var inst_53205 = (0);
var state_53325__$1 = (function (){var statearr_53386 = state_53325;
(statearr_53386[(13)] = inst_53202);

(statearr_53386[(14)] = inst_53205);

(statearr_53386[(16)] = inst_53204);

(statearr_53386[(17)] = inst_53203);

return statearr_53386;
})();
var statearr_53387_53449 = state_53325__$1;
(statearr_53387_53449[(2)] = null);

(statearr_53387_53449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (14))){
var state_53325__$1 = state_53325;
var statearr_53388_53450 = state_53325__$1;
(statearr_53388_53450[(2)] = null);

(statearr_53388_53450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (45))){
var inst_53315 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53389_53451 = state_53325__$1;
(statearr_53389_53451[(2)] = inst_53315);

(statearr_53389_53451[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (26))){
var inst_53257 = (state_53325[(29)]);
var inst_53311 = (state_53325[(2)]);
var inst_53312 = cljs.core.seq.call(null,inst_53257);
var state_53325__$1 = (function (){var statearr_53390 = state_53325;
(statearr_53390[(31)] = inst_53311);

return statearr_53390;
})();
if(inst_53312){
var statearr_53391_53452 = state_53325__$1;
(statearr_53391_53452[(1)] = (42));

} else {
var statearr_53392_53453 = state_53325__$1;
(statearr_53392_53453[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (16))){
var inst_53224 = (state_53325[(7)]);
var inst_53226 = cljs.core.chunked_seq_QMARK_.call(null,inst_53224);
var state_53325__$1 = state_53325;
if(inst_53226){
var statearr_53393_53454 = state_53325__$1;
(statearr_53393_53454[(1)] = (19));

} else {
var statearr_53394_53455 = state_53325__$1;
(statearr_53394_53455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (38))){
var inst_53304 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53395_53456 = state_53325__$1;
(statearr_53395_53456[(2)] = inst_53304);

(statearr_53395_53456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (30))){
var state_53325__$1 = state_53325;
var statearr_53396_53457 = state_53325__$1;
(statearr_53396_53457[(2)] = null);

(statearr_53396_53457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (10))){
var inst_53205 = (state_53325[(14)]);
var inst_53203 = (state_53325[(17)]);
var inst_53213 = cljs.core._nth.call(null,inst_53203,inst_53205);
var inst_53214 = cljs.core.nth.call(null,inst_53213,(0),null);
var inst_53215 = cljs.core.nth.call(null,inst_53213,(1),null);
var state_53325__$1 = (function (){var statearr_53397 = state_53325;
(statearr_53397[(26)] = inst_53214);

return statearr_53397;
})();
if(cljs.core.truth_(inst_53215)){
var statearr_53398_53458 = state_53325__$1;
(statearr_53398_53458[(1)] = (13));

} else {
var statearr_53399_53459 = state_53325__$1;
(statearr_53399_53459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (18))){
var inst_53250 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53400_53460 = state_53325__$1;
(statearr_53400_53460[(2)] = inst_53250);

(statearr_53400_53460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (42))){
var state_53325__$1 = state_53325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53325__$1,(45),dchan);
} else {
if((state_val_53326 === (37))){
var inst_53293 = (state_53325[(23)]);
var inst_53284 = (state_53325[(25)]);
var inst_53193 = (state_53325[(10)]);
var inst_53293__$1 = cljs.core.first.call(null,inst_53284);
var inst_53294 = cljs.core.async.put_BANG_.call(null,inst_53293__$1,inst_53193,done);
var state_53325__$1 = (function (){var statearr_53401 = state_53325;
(statearr_53401[(23)] = inst_53293__$1);

return statearr_53401;
})();
if(cljs.core.truth_(inst_53294)){
var statearr_53402_53461 = state_53325__$1;
(statearr_53402_53461[(1)] = (39));

} else {
var statearr_53403_53462 = state_53325__$1;
(statearr_53403_53462[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (8))){
var inst_53205 = (state_53325[(14)]);
var inst_53204 = (state_53325[(16)]);
var inst_53207 = (inst_53205 < inst_53204);
var inst_53208 = inst_53207;
var state_53325__$1 = state_53325;
if(cljs.core.truth_(inst_53208)){
var statearr_53404_53463 = state_53325__$1;
(statearr_53404_53463[(1)] = (10));

} else {
var statearr_53405_53464 = state_53325__$1;
(statearr_53405_53464[(1)] = (11));

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
});})(c__30467__auto___53410,cs,m,dchan,dctr,done))
;
return ((function (switch__30446__auto__,c__30467__auto___53410,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30447__auto__ = null;
var cljs$core$async$mult_$_state_machine__30447__auto____0 = (function (){
var statearr_53406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53406[(0)] = cljs$core$async$mult_$_state_machine__30447__auto__);

(statearr_53406[(1)] = (1));

return statearr_53406;
});
var cljs$core$async$mult_$_state_machine__30447__auto____1 = (function (state_53325){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e53407){if((e53407 instanceof Object)){
var ex__30450__auto__ = e53407;
var statearr_53408_53465 = state_53325;
(statearr_53408_53465[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53466 = state_53325;
state_53325 = G__53466;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30447__auto__ = function(state_53325){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30447__auto____1.call(this,state_53325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30447__auto____0;
cljs$core$async$mult_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30447__auto____1;
return cljs$core$async$mult_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___53410,cs,m,dchan,dctr,done))
})();
var state__30469__auto__ = (function (){var statearr_53409 = f__30468__auto__.call(null);
(statearr_53409[(6)] = c__30467__auto___53410);

return statearr_53409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___53410,cs,m,dchan,dctr,done))
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
var G__53468 = arguments.length;
switch (G__53468) {
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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,state_map);
} else {
var m__28673__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,mode);
} else {
var m__28673__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___53480 = arguments.length;
var i__29159__auto___53481 = (0);
while(true){
if((i__29159__auto___53481 < len__29158__auto___53480)){
args__29165__auto__.push((arguments[i__29159__auto___53481]));

var G__53482 = (i__29159__auto___53481 + (1));
i__29159__auto___53481 = G__53482;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((3) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53474){
var map__53475 = p__53474;
var map__53475__$1 = ((((!((map__53475 == null)))?((((map__53475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53475):map__53475);
var opts = map__53475__$1;
var statearr_53477_53483 = state;
(statearr_53477_53483[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__53475,map__53475__$1,opts){
return (function (val){
var statearr_53478_53484 = state;
(statearr_53478_53484[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__53475,map__53475__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_53479_53485 = state;
(statearr_53479_53485[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53470){
var G__53471 = cljs.core.first.call(null,seq53470);
var seq53470__$1 = cljs.core.next.call(null,seq53470);
var G__53472 = cljs.core.first.call(null,seq53470__$1);
var seq53470__$2 = cljs.core.next.call(null,seq53470__$1);
var G__53473 = cljs.core.first.call(null,seq53470__$2);
var seq53470__$3 = cljs.core.next.call(null,seq53470__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53471,G__53472,G__53473,seq53470__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async53486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53486 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta53487){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta53487 = meta53487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53488,meta53487__$1){
var self__ = this;
var _53488__$1 = this;
return (new cljs.core.async.t_cljs$core$async53486(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta53487__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53488){
var self__ = this;
var _53488__$1 = this;
return self__.meta53487;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async53486.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta53487","meta53487",-24703191,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53486";

cljs.core.async.t_cljs$core$async53486.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async53486");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async53486 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async53486(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta53487){
return (new cljs.core.async.t_cljs$core$async53486(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta53487));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async53486(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30467__auto___53650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___53650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___53650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53590){
var state_val_53591 = (state_53590[(1)]);
if((state_val_53591 === (7))){
var inst_53505 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53592_53651 = state_53590__$1;
(statearr_53592_53651[(2)] = inst_53505);

(statearr_53592_53651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (20))){
var inst_53517 = (state_53590[(7)]);
var state_53590__$1 = state_53590;
var statearr_53593_53652 = state_53590__$1;
(statearr_53593_53652[(2)] = inst_53517);

(statearr_53593_53652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (27))){
var state_53590__$1 = state_53590;
var statearr_53594_53653 = state_53590__$1;
(statearr_53594_53653[(2)] = null);

(statearr_53594_53653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (1))){
var inst_53492 = (state_53590[(8)]);
var inst_53492__$1 = calc_state.call(null);
var inst_53494 = (inst_53492__$1 == null);
var inst_53495 = cljs.core.not.call(null,inst_53494);
var state_53590__$1 = (function (){var statearr_53595 = state_53590;
(statearr_53595[(8)] = inst_53492__$1);

return statearr_53595;
})();
if(inst_53495){
var statearr_53596_53654 = state_53590__$1;
(statearr_53596_53654[(1)] = (2));

} else {
var statearr_53597_53655 = state_53590__$1;
(statearr_53597_53655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (24))){
var inst_53541 = (state_53590[(9)]);
var inst_53550 = (state_53590[(10)]);
var inst_53564 = (state_53590[(11)]);
var inst_53564__$1 = inst_53541.call(null,inst_53550);
var state_53590__$1 = (function (){var statearr_53598 = state_53590;
(statearr_53598[(11)] = inst_53564__$1);

return statearr_53598;
})();
if(cljs.core.truth_(inst_53564__$1)){
var statearr_53599_53656 = state_53590__$1;
(statearr_53599_53656[(1)] = (29));

} else {
var statearr_53600_53657 = state_53590__$1;
(statearr_53600_53657[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (4))){
var inst_53508 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
if(cljs.core.truth_(inst_53508)){
var statearr_53601_53658 = state_53590__$1;
(statearr_53601_53658[(1)] = (8));

} else {
var statearr_53602_53659 = state_53590__$1;
(statearr_53602_53659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (15))){
var inst_53535 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
if(cljs.core.truth_(inst_53535)){
var statearr_53603_53660 = state_53590__$1;
(statearr_53603_53660[(1)] = (19));

} else {
var statearr_53604_53661 = state_53590__$1;
(statearr_53604_53661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (21))){
var inst_53540 = (state_53590[(12)]);
var inst_53540__$1 = (state_53590[(2)]);
var inst_53541 = cljs.core.get.call(null,inst_53540__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53542 = cljs.core.get.call(null,inst_53540__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53543 = cljs.core.get.call(null,inst_53540__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53590__$1 = (function (){var statearr_53605 = state_53590;
(statearr_53605[(9)] = inst_53541);

(statearr_53605[(13)] = inst_53542);

(statearr_53605[(12)] = inst_53540__$1);

return statearr_53605;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53590__$1,(22),inst_53543);
} else {
if((state_val_53591 === (31))){
var inst_53572 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
if(cljs.core.truth_(inst_53572)){
var statearr_53606_53662 = state_53590__$1;
(statearr_53606_53662[(1)] = (32));

} else {
var statearr_53607_53663 = state_53590__$1;
(statearr_53607_53663[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (32))){
var inst_53549 = (state_53590[(14)]);
var state_53590__$1 = state_53590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53590__$1,(35),out,inst_53549);
} else {
if((state_val_53591 === (33))){
var inst_53540 = (state_53590[(12)]);
var inst_53517 = inst_53540;
var state_53590__$1 = (function (){var statearr_53608 = state_53590;
(statearr_53608[(7)] = inst_53517);

return statearr_53608;
})();
var statearr_53609_53664 = state_53590__$1;
(statearr_53609_53664[(2)] = null);

(statearr_53609_53664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (13))){
var inst_53517 = (state_53590[(7)]);
var inst_53524 = inst_53517.cljs$lang$protocol_mask$partition0$;
var inst_53525 = (inst_53524 & (64));
var inst_53526 = inst_53517.cljs$core$ISeq$;
var inst_53527 = (cljs.core.PROTOCOL_SENTINEL === inst_53526);
var inst_53528 = (inst_53525) || (inst_53527);
var state_53590__$1 = state_53590;
if(cljs.core.truth_(inst_53528)){
var statearr_53610_53665 = state_53590__$1;
(statearr_53610_53665[(1)] = (16));

} else {
var statearr_53611_53666 = state_53590__$1;
(statearr_53611_53666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (22))){
var inst_53550 = (state_53590[(10)]);
var inst_53549 = (state_53590[(14)]);
var inst_53548 = (state_53590[(2)]);
var inst_53549__$1 = cljs.core.nth.call(null,inst_53548,(0),null);
var inst_53550__$1 = cljs.core.nth.call(null,inst_53548,(1),null);
var inst_53551 = (inst_53549__$1 == null);
var inst_53552 = cljs.core._EQ_.call(null,inst_53550__$1,change);
var inst_53553 = (inst_53551) || (inst_53552);
var state_53590__$1 = (function (){var statearr_53612 = state_53590;
(statearr_53612[(10)] = inst_53550__$1);

(statearr_53612[(14)] = inst_53549__$1);

return statearr_53612;
})();
if(cljs.core.truth_(inst_53553)){
var statearr_53613_53667 = state_53590__$1;
(statearr_53613_53667[(1)] = (23));

} else {
var statearr_53614_53668 = state_53590__$1;
(statearr_53614_53668[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (36))){
var inst_53540 = (state_53590[(12)]);
var inst_53517 = inst_53540;
var state_53590__$1 = (function (){var statearr_53615 = state_53590;
(statearr_53615[(7)] = inst_53517);

return statearr_53615;
})();
var statearr_53616_53669 = state_53590__$1;
(statearr_53616_53669[(2)] = null);

(statearr_53616_53669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (29))){
var inst_53564 = (state_53590[(11)]);
var state_53590__$1 = state_53590;
var statearr_53617_53670 = state_53590__$1;
(statearr_53617_53670[(2)] = inst_53564);

(statearr_53617_53670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (6))){
var state_53590__$1 = state_53590;
var statearr_53618_53671 = state_53590__$1;
(statearr_53618_53671[(2)] = false);

(statearr_53618_53671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (28))){
var inst_53560 = (state_53590[(2)]);
var inst_53561 = calc_state.call(null);
var inst_53517 = inst_53561;
var state_53590__$1 = (function (){var statearr_53619 = state_53590;
(statearr_53619[(7)] = inst_53517);

(statearr_53619[(15)] = inst_53560);

return statearr_53619;
})();
var statearr_53620_53672 = state_53590__$1;
(statearr_53620_53672[(2)] = null);

(statearr_53620_53672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (25))){
var inst_53586 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53621_53673 = state_53590__$1;
(statearr_53621_53673[(2)] = inst_53586);

(statearr_53621_53673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (34))){
var inst_53584 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53622_53674 = state_53590__$1;
(statearr_53622_53674[(2)] = inst_53584);

(statearr_53622_53674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (17))){
var state_53590__$1 = state_53590;
var statearr_53623_53675 = state_53590__$1;
(statearr_53623_53675[(2)] = false);

(statearr_53623_53675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (3))){
var state_53590__$1 = state_53590;
var statearr_53624_53676 = state_53590__$1;
(statearr_53624_53676[(2)] = false);

(statearr_53624_53676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (12))){
var inst_53588 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53590__$1,inst_53588);
} else {
if((state_val_53591 === (2))){
var inst_53492 = (state_53590[(8)]);
var inst_53497 = inst_53492.cljs$lang$protocol_mask$partition0$;
var inst_53498 = (inst_53497 & (64));
var inst_53499 = inst_53492.cljs$core$ISeq$;
var inst_53500 = (cljs.core.PROTOCOL_SENTINEL === inst_53499);
var inst_53501 = (inst_53498) || (inst_53500);
var state_53590__$1 = state_53590;
if(cljs.core.truth_(inst_53501)){
var statearr_53625_53677 = state_53590__$1;
(statearr_53625_53677[(1)] = (5));

} else {
var statearr_53626_53678 = state_53590__$1;
(statearr_53626_53678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (23))){
var inst_53549 = (state_53590[(14)]);
var inst_53555 = (inst_53549 == null);
var state_53590__$1 = state_53590;
if(cljs.core.truth_(inst_53555)){
var statearr_53627_53679 = state_53590__$1;
(statearr_53627_53679[(1)] = (26));

} else {
var statearr_53628_53680 = state_53590__$1;
(statearr_53628_53680[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (35))){
var inst_53575 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
if(cljs.core.truth_(inst_53575)){
var statearr_53629_53681 = state_53590__$1;
(statearr_53629_53681[(1)] = (36));

} else {
var statearr_53630_53682 = state_53590__$1;
(statearr_53630_53682[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (19))){
var inst_53517 = (state_53590[(7)]);
var inst_53537 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53517);
var state_53590__$1 = state_53590;
var statearr_53631_53683 = state_53590__$1;
(statearr_53631_53683[(2)] = inst_53537);

(statearr_53631_53683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (11))){
var inst_53517 = (state_53590[(7)]);
var inst_53521 = (inst_53517 == null);
var inst_53522 = cljs.core.not.call(null,inst_53521);
var state_53590__$1 = state_53590;
if(inst_53522){
var statearr_53632_53684 = state_53590__$1;
(statearr_53632_53684[(1)] = (13));

} else {
var statearr_53633_53685 = state_53590__$1;
(statearr_53633_53685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (9))){
var inst_53492 = (state_53590[(8)]);
var state_53590__$1 = state_53590;
var statearr_53634_53686 = state_53590__$1;
(statearr_53634_53686[(2)] = inst_53492);

(statearr_53634_53686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (5))){
var state_53590__$1 = state_53590;
var statearr_53635_53687 = state_53590__$1;
(statearr_53635_53687[(2)] = true);

(statearr_53635_53687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (14))){
var state_53590__$1 = state_53590;
var statearr_53636_53688 = state_53590__$1;
(statearr_53636_53688[(2)] = false);

(statearr_53636_53688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (26))){
var inst_53550 = (state_53590[(10)]);
var inst_53557 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53550);
var state_53590__$1 = state_53590;
var statearr_53637_53689 = state_53590__$1;
(statearr_53637_53689[(2)] = inst_53557);

(statearr_53637_53689[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (16))){
var state_53590__$1 = state_53590;
var statearr_53638_53690 = state_53590__$1;
(statearr_53638_53690[(2)] = true);

(statearr_53638_53690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (38))){
var inst_53580 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53639_53691 = state_53590__$1;
(statearr_53639_53691[(2)] = inst_53580);

(statearr_53639_53691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (30))){
var inst_53541 = (state_53590[(9)]);
var inst_53550 = (state_53590[(10)]);
var inst_53542 = (state_53590[(13)]);
var inst_53567 = cljs.core.empty_QMARK_.call(null,inst_53541);
var inst_53568 = inst_53542.call(null,inst_53550);
var inst_53569 = cljs.core.not.call(null,inst_53568);
var inst_53570 = (inst_53567) && (inst_53569);
var state_53590__$1 = state_53590;
var statearr_53640_53692 = state_53590__$1;
(statearr_53640_53692[(2)] = inst_53570);

(statearr_53640_53692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (10))){
var inst_53492 = (state_53590[(8)]);
var inst_53513 = (state_53590[(2)]);
var inst_53514 = cljs.core.get.call(null,inst_53513,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53515 = cljs.core.get.call(null,inst_53513,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53516 = cljs.core.get.call(null,inst_53513,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53517 = inst_53492;
var state_53590__$1 = (function (){var statearr_53641 = state_53590;
(statearr_53641[(16)] = inst_53515);

(statearr_53641[(7)] = inst_53517);

(statearr_53641[(17)] = inst_53514);

(statearr_53641[(18)] = inst_53516);

return statearr_53641;
})();
var statearr_53642_53693 = state_53590__$1;
(statearr_53642_53693[(2)] = null);

(statearr_53642_53693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (18))){
var inst_53532 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53643_53694 = state_53590__$1;
(statearr_53643_53694[(2)] = inst_53532);

(statearr_53643_53694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (37))){
var state_53590__$1 = state_53590;
var statearr_53644_53695 = state_53590__$1;
(statearr_53644_53695[(2)] = null);

(statearr_53644_53695[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (8))){
var inst_53492 = (state_53590[(8)]);
var inst_53510 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53492);
var state_53590__$1 = state_53590;
var statearr_53645_53696 = state_53590__$1;
(statearr_53645_53696[(2)] = inst_53510);

(statearr_53645_53696[(1)] = (10));


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
});})(c__30467__auto___53650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30446__auto__,c__30467__auto___53650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30447__auto__ = null;
var cljs$core$async$mix_$_state_machine__30447__auto____0 = (function (){
var statearr_53646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53646[(0)] = cljs$core$async$mix_$_state_machine__30447__auto__);

(statearr_53646[(1)] = (1));

return statearr_53646;
});
var cljs$core$async$mix_$_state_machine__30447__auto____1 = (function (state_53590){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e53647){if((e53647 instanceof Object)){
var ex__30450__auto__ = e53647;
var statearr_53648_53697 = state_53590;
(statearr_53648_53697[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53698 = state_53590;
state_53590 = G__53698;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30447__auto__ = function(state_53590){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30447__auto____1.call(this,state_53590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30447__auto____0;
cljs$core$async$mix_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30447__auto____1;
return cljs$core$async$mix_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___53650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30469__auto__ = (function (){var statearr_53649 = f__30468__auto__.call(null);
(statearr_53649[(6)] = c__30467__auto___53650);

return statearr_53649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___53650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53700 = arguments.length;
switch (G__53700) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v);
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
var G__53704 = arguments.length;
switch (G__53704) {
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
var or__27989__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27989__auto__,mults){
return (function (p1__53702_SHARP_){
if(cljs.core.truth_(p1__53702_SHARP_.call(null,topic))){
return p1__53702_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__53702_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27989__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async53705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53705 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53706){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53706 = meta53706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53707,meta53706__$1){
var self__ = this;
var _53707__$1 = this;
return (new cljs.core.async.t_cljs$core$async53705(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53706__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53707){
var self__ = this;
var _53707__$1 = this;
return self__.meta53706;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53705.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53706","meta53706",933080603,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53705";

cljs.core.async.t_cljs$core$async53705.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async53705");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async53705 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53706){
return (new cljs.core.async.t_cljs$core$async53705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53706));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53705(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30467__auto___53825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___53825,mults,ensure_mult,p){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___53825,mults,ensure_mult,p){
return (function (state_53779){
var state_val_53780 = (state_53779[(1)]);
if((state_val_53780 === (7))){
var inst_53775 = (state_53779[(2)]);
var state_53779__$1 = state_53779;
var statearr_53781_53826 = state_53779__$1;
(statearr_53781_53826[(2)] = inst_53775);

(statearr_53781_53826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (20))){
var state_53779__$1 = state_53779;
var statearr_53782_53827 = state_53779__$1;
(statearr_53782_53827[(2)] = null);

(statearr_53782_53827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (1))){
var state_53779__$1 = state_53779;
var statearr_53783_53828 = state_53779__$1;
(statearr_53783_53828[(2)] = null);

(statearr_53783_53828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (24))){
var inst_53758 = (state_53779[(7)]);
var inst_53767 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53758);
var state_53779__$1 = state_53779;
var statearr_53784_53829 = state_53779__$1;
(statearr_53784_53829[(2)] = inst_53767);

(statearr_53784_53829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (4))){
var inst_53710 = (state_53779[(8)]);
var inst_53710__$1 = (state_53779[(2)]);
var inst_53711 = (inst_53710__$1 == null);
var state_53779__$1 = (function (){var statearr_53785 = state_53779;
(statearr_53785[(8)] = inst_53710__$1);

return statearr_53785;
})();
if(cljs.core.truth_(inst_53711)){
var statearr_53786_53830 = state_53779__$1;
(statearr_53786_53830[(1)] = (5));

} else {
var statearr_53787_53831 = state_53779__$1;
(statearr_53787_53831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (15))){
var inst_53752 = (state_53779[(2)]);
var state_53779__$1 = state_53779;
var statearr_53788_53832 = state_53779__$1;
(statearr_53788_53832[(2)] = inst_53752);

(statearr_53788_53832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (21))){
var inst_53772 = (state_53779[(2)]);
var state_53779__$1 = (function (){var statearr_53789 = state_53779;
(statearr_53789[(9)] = inst_53772);

return statearr_53789;
})();
var statearr_53790_53833 = state_53779__$1;
(statearr_53790_53833[(2)] = null);

(statearr_53790_53833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (13))){
var inst_53734 = (state_53779[(10)]);
var inst_53736 = cljs.core.chunked_seq_QMARK_.call(null,inst_53734);
var state_53779__$1 = state_53779;
if(inst_53736){
var statearr_53791_53834 = state_53779__$1;
(statearr_53791_53834[(1)] = (16));

} else {
var statearr_53792_53835 = state_53779__$1;
(statearr_53792_53835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (22))){
var inst_53764 = (state_53779[(2)]);
var state_53779__$1 = state_53779;
if(cljs.core.truth_(inst_53764)){
var statearr_53793_53836 = state_53779__$1;
(statearr_53793_53836[(1)] = (23));

} else {
var statearr_53794_53837 = state_53779__$1;
(statearr_53794_53837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (6))){
var inst_53760 = (state_53779[(11)]);
var inst_53758 = (state_53779[(7)]);
var inst_53710 = (state_53779[(8)]);
var inst_53758__$1 = topic_fn.call(null,inst_53710);
var inst_53759 = cljs.core.deref.call(null,mults);
var inst_53760__$1 = cljs.core.get.call(null,inst_53759,inst_53758__$1);
var state_53779__$1 = (function (){var statearr_53795 = state_53779;
(statearr_53795[(11)] = inst_53760__$1);

(statearr_53795[(7)] = inst_53758__$1);

return statearr_53795;
})();
if(cljs.core.truth_(inst_53760__$1)){
var statearr_53796_53838 = state_53779__$1;
(statearr_53796_53838[(1)] = (19));

} else {
var statearr_53797_53839 = state_53779__$1;
(statearr_53797_53839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (25))){
var inst_53769 = (state_53779[(2)]);
var state_53779__$1 = state_53779;
var statearr_53798_53840 = state_53779__$1;
(statearr_53798_53840[(2)] = inst_53769);

(statearr_53798_53840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (17))){
var inst_53734 = (state_53779[(10)]);
var inst_53743 = cljs.core.first.call(null,inst_53734);
var inst_53744 = cljs.core.async.muxch_STAR_.call(null,inst_53743);
var inst_53745 = cljs.core.async.close_BANG_.call(null,inst_53744);
var inst_53746 = cljs.core.next.call(null,inst_53734);
var inst_53720 = inst_53746;
var inst_53721 = null;
var inst_53722 = (0);
var inst_53723 = (0);
var state_53779__$1 = (function (){var statearr_53799 = state_53779;
(statearr_53799[(12)] = inst_53745);

(statearr_53799[(13)] = inst_53723);

(statearr_53799[(14)] = inst_53721);

(statearr_53799[(15)] = inst_53722);

(statearr_53799[(16)] = inst_53720);

return statearr_53799;
})();
var statearr_53800_53841 = state_53779__$1;
(statearr_53800_53841[(2)] = null);

(statearr_53800_53841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (3))){
var inst_53777 = (state_53779[(2)]);
var state_53779__$1 = state_53779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53779__$1,inst_53777);
} else {
if((state_val_53780 === (12))){
var inst_53754 = (state_53779[(2)]);
var state_53779__$1 = state_53779;
var statearr_53801_53842 = state_53779__$1;
(statearr_53801_53842[(2)] = inst_53754);

(statearr_53801_53842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (2))){
var state_53779__$1 = state_53779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53779__$1,(4),ch);
} else {
if((state_val_53780 === (23))){
var state_53779__$1 = state_53779;
var statearr_53802_53843 = state_53779__$1;
(statearr_53802_53843[(2)] = null);

(statearr_53802_53843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (19))){
var inst_53760 = (state_53779[(11)]);
var inst_53710 = (state_53779[(8)]);
var inst_53762 = cljs.core.async.muxch_STAR_.call(null,inst_53760);
var state_53779__$1 = state_53779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53779__$1,(22),inst_53762,inst_53710);
} else {
if((state_val_53780 === (11))){
var inst_53734 = (state_53779[(10)]);
var inst_53720 = (state_53779[(16)]);
var inst_53734__$1 = cljs.core.seq.call(null,inst_53720);
var state_53779__$1 = (function (){var statearr_53803 = state_53779;
(statearr_53803[(10)] = inst_53734__$1);

return statearr_53803;
})();
if(inst_53734__$1){
var statearr_53804_53844 = state_53779__$1;
(statearr_53804_53844[(1)] = (13));

} else {
var statearr_53805_53845 = state_53779__$1;
(statearr_53805_53845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (9))){
var inst_53756 = (state_53779[(2)]);
var state_53779__$1 = state_53779;
var statearr_53806_53846 = state_53779__$1;
(statearr_53806_53846[(2)] = inst_53756);

(statearr_53806_53846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (5))){
var inst_53717 = cljs.core.deref.call(null,mults);
var inst_53718 = cljs.core.vals.call(null,inst_53717);
var inst_53719 = cljs.core.seq.call(null,inst_53718);
var inst_53720 = inst_53719;
var inst_53721 = null;
var inst_53722 = (0);
var inst_53723 = (0);
var state_53779__$1 = (function (){var statearr_53807 = state_53779;
(statearr_53807[(13)] = inst_53723);

(statearr_53807[(14)] = inst_53721);

(statearr_53807[(15)] = inst_53722);

(statearr_53807[(16)] = inst_53720);

return statearr_53807;
})();
var statearr_53808_53847 = state_53779__$1;
(statearr_53808_53847[(2)] = null);

(statearr_53808_53847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (14))){
var state_53779__$1 = state_53779;
var statearr_53812_53848 = state_53779__$1;
(statearr_53812_53848[(2)] = null);

(statearr_53812_53848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (16))){
var inst_53734 = (state_53779[(10)]);
var inst_53738 = cljs.core.chunk_first.call(null,inst_53734);
var inst_53739 = cljs.core.chunk_rest.call(null,inst_53734);
var inst_53740 = cljs.core.count.call(null,inst_53738);
var inst_53720 = inst_53739;
var inst_53721 = inst_53738;
var inst_53722 = inst_53740;
var inst_53723 = (0);
var state_53779__$1 = (function (){var statearr_53813 = state_53779;
(statearr_53813[(13)] = inst_53723);

(statearr_53813[(14)] = inst_53721);

(statearr_53813[(15)] = inst_53722);

(statearr_53813[(16)] = inst_53720);

return statearr_53813;
})();
var statearr_53814_53849 = state_53779__$1;
(statearr_53814_53849[(2)] = null);

(statearr_53814_53849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (10))){
var inst_53723 = (state_53779[(13)]);
var inst_53721 = (state_53779[(14)]);
var inst_53722 = (state_53779[(15)]);
var inst_53720 = (state_53779[(16)]);
var inst_53728 = cljs.core._nth.call(null,inst_53721,inst_53723);
var inst_53729 = cljs.core.async.muxch_STAR_.call(null,inst_53728);
var inst_53730 = cljs.core.async.close_BANG_.call(null,inst_53729);
var inst_53731 = (inst_53723 + (1));
var tmp53809 = inst_53721;
var tmp53810 = inst_53722;
var tmp53811 = inst_53720;
var inst_53720__$1 = tmp53811;
var inst_53721__$1 = tmp53809;
var inst_53722__$1 = tmp53810;
var inst_53723__$1 = inst_53731;
var state_53779__$1 = (function (){var statearr_53815 = state_53779;
(statearr_53815[(17)] = inst_53730);

(statearr_53815[(13)] = inst_53723__$1);

(statearr_53815[(14)] = inst_53721__$1);

(statearr_53815[(15)] = inst_53722__$1);

(statearr_53815[(16)] = inst_53720__$1);

return statearr_53815;
})();
var statearr_53816_53850 = state_53779__$1;
(statearr_53816_53850[(2)] = null);

(statearr_53816_53850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (18))){
var inst_53749 = (state_53779[(2)]);
var state_53779__$1 = state_53779;
var statearr_53817_53851 = state_53779__$1;
(statearr_53817_53851[(2)] = inst_53749);

(statearr_53817_53851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53780 === (8))){
var inst_53723 = (state_53779[(13)]);
var inst_53722 = (state_53779[(15)]);
var inst_53725 = (inst_53723 < inst_53722);
var inst_53726 = inst_53725;
var state_53779__$1 = state_53779;
if(cljs.core.truth_(inst_53726)){
var statearr_53818_53852 = state_53779__$1;
(statearr_53818_53852[(1)] = (10));

} else {
var statearr_53819_53853 = state_53779__$1;
(statearr_53819_53853[(1)] = (11));

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
});})(c__30467__auto___53825,mults,ensure_mult,p))
;
return ((function (switch__30446__auto__,c__30467__auto___53825,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_53820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53820[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_53820[(1)] = (1));

return statearr_53820;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_53779){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e53821){if((e53821 instanceof Object)){
var ex__30450__auto__ = e53821;
var statearr_53822_53854 = state_53779;
(statearr_53822_53854[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53855 = state_53779;
state_53779 = G__53855;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_53779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_53779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___53825,mults,ensure_mult,p))
})();
var state__30469__auto__ = (function (){var statearr_53823 = f__30468__auto__.call(null);
(statearr_53823[(6)] = c__30467__auto___53825);

return statearr_53823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___53825,mults,ensure_mult,p))
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
var G__53857 = arguments.length;
switch (G__53857) {
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
var G__53860 = arguments.length;
switch (G__53860) {
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
var G__53863 = arguments.length;
switch (G__53863) {
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
var c__30467__auto___53930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___53930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___53930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53902){
var state_val_53903 = (state_53902[(1)]);
if((state_val_53903 === (7))){
var state_53902__$1 = state_53902;
var statearr_53904_53931 = state_53902__$1;
(statearr_53904_53931[(2)] = null);

(statearr_53904_53931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (1))){
var state_53902__$1 = state_53902;
var statearr_53905_53932 = state_53902__$1;
(statearr_53905_53932[(2)] = null);

(statearr_53905_53932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (4))){
var inst_53866 = (state_53902[(7)]);
var inst_53868 = (inst_53866 < cnt);
var state_53902__$1 = state_53902;
if(cljs.core.truth_(inst_53868)){
var statearr_53906_53933 = state_53902__$1;
(statearr_53906_53933[(1)] = (6));

} else {
var statearr_53907_53934 = state_53902__$1;
(statearr_53907_53934[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (15))){
var inst_53898 = (state_53902[(2)]);
var state_53902__$1 = state_53902;
var statearr_53908_53935 = state_53902__$1;
(statearr_53908_53935[(2)] = inst_53898);

(statearr_53908_53935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (13))){
var inst_53891 = cljs.core.async.close_BANG_.call(null,out);
var state_53902__$1 = state_53902;
var statearr_53909_53936 = state_53902__$1;
(statearr_53909_53936[(2)] = inst_53891);

(statearr_53909_53936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (6))){
var state_53902__$1 = state_53902;
var statearr_53910_53937 = state_53902__$1;
(statearr_53910_53937[(2)] = null);

(statearr_53910_53937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (3))){
var inst_53900 = (state_53902[(2)]);
var state_53902__$1 = state_53902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53902__$1,inst_53900);
} else {
if((state_val_53903 === (12))){
var inst_53888 = (state_53902[(8)]);
var inst_53888__$1 = (state_53902[(2)]);
var inst_53889 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53888__$1);
var state_53902__$1 = (function (){var statearr_53911 = state_53902;
(statearr_53911[(8)] = inst_53888__$1);

return statearr_53911;
})();
if(cljs.core.truth_(inst_53889)){
var statearr_53912_53938 = state_53902__$1;
(statearr_53912_53938[(1)] = (13));

} else {
var statearr_53913_53939 = state_53902__$1;
(statearr_53913_53939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (2))){
var inst_53865 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_53866 = (0);
var state_53902__$1 = (function (){var statearr_53914 = state_53902;
(statearr_53914[(9)] = inst_53865);

(statearr_53914[(7)] = inst_53866);

return statearr_53914;
})();
var statearr_53915_53940 = state_53902__$1;
(statearr_53915_53940[(2)] = null);

(statearr_53915_53940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (11))){
var inst_53866 = (state_53902[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53902,(10),Object,null,(9));
var inst_53875 = chs__$1.call(null,inst_53866);
var inst_53876 = done.call(null,inst_53866);
var inst_53877 = cljs.core.async.take_BANG_.call(null,inst_53875,inst_53876);
var state_53902__$1 = state_53902;
var statearr_53916_53941 = state_53902__$1;
(statearr_53916_53941[(2)] = inst_53877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (9))){
var inst_53866 = (state_53902[(7)]);
var inst_53879 = (state_53902[(2)]);
var inst_53880 = (inst_53866 + (1));
var inst_53866__$1 = inst_53880;
var state_53902__$1 = (function (){var statearr_53917 = state_53902;
(statearr_53917[(10)] = inst_53879);

(statearr_53917[(7)] = inst_53866__$1);

return statearr_53917;
})();
var statearr_53918_53942 = state_53902__$1;
(statearr_53918_53942[(2)] = null);

(statearr_53918_53942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (5))){
var inst_53886 = (state_53902[(2)]);
var state_53902__$1 = (function (){var statearr_53919 = state_53902;
(statearr_53919[(11)] = inst_53886);

return statearr_53919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53902__$1,(12),dchan);
} else {
if((state_val_53903 === (14))){
var inst_53888 = (state_53902[(8)]);
var inst_53893 = cljs.core.apply.call(null,f,inst_53888);
var state_53902__$1 = state_53902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53902__$1,(16),out,inst_53893);
} else {
if((state_val_53903 === (16))){
var inst_53895 = (state_53902[(2)]);
var state_53902__$1 = (function (){var statearr_53920 = state_53902;
(statearr_53920[(12)] = inst_53895);

return statearr_53920;
})();
var statearr_53921_53943 = state_53902__$1;
(statearr_53921_53943[(2)] = null);

(statearr_53921_53943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (10))){
var inst_53870 = (state_53902[(2)]);
var inst_53871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_53902__$1 = (function (){var statearr_53922 = state_53902;
(statearr_53922[(13)] = inst_53870);

return statearr_53922;
})();
var statearr_53923_53944 = state_53902__$1;
(statearr_53923_53944[(2)] = inst_53871);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53903 === (8))){
var inst_53884 = (state_53902[(2)]);
var state_53902__$1 = state_53902;
var statearr_53924_53945 = state_53902__$1;
(statearr_53924_53945[(2)] = inst_53884);

(statearr_53924_53945[(1)] = (5));


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
});})(c__30467__auto___53930,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30446__auto__,c__30467__auto___53930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_53925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53925[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_53925[(1)] = (1));

return statearr_53925;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_53902){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e53926){if((e53926 instanceof Object)){
var ex__30450__auto__ = e53926;
var statearr_53927_53946 = state_53902;
(statearr_53927_53946[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53947 = state_53902;
state_53902 = G__53947;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_53902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_53902);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___53930,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30469__auto__ = (function (){var statearr_53928 = f__30468__auto__.call(null);
(statearr_53928[(6)] = c__30467__auto___53930);

return statearr_53928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___53930,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__53950 = arguments.length;
switch (G__53950) {
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
var c__30467__auto___54004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___54004,out){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___54004,out){
return (function (state_53982){
var state_val_53983 = (state_53982[(1)]);
if((state_val_53983 === (7))){
var inst_53961 = (state_53982[(7)]);
var inst_53962 = (state_53982[(8)]);
var inst_53961__$1 = (state_53982[(2)]);
var inst_53962__$1 = cljs.core.nth.call(null,inst_53961__$1,(0),null);
var inst_53963 = cljs.core.nth.call(null,inst_53961__$1,(1),null);
var inst_53964 = (inst_53962__$1 == null);
var state_53982__$1 = (function (){var statearr_53984 = state_53982;
(statearr_53984[(9)] = inst_53963);

(statearr_53984[(7)] = inst_53961__$1);

(statearr_53984[(8)] = inst_53962__$1);

return statearr_53984;
})();
if(cljs.core.truth_(inst_53964)){
var statearr_53985_54005 = state_53982__$1;
(statearr_53985_54005[(1)] = (8));

} else {
var statearr_53986_54006 = state_53982__$1;
(statearr_53986_54006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (1))){
var inst_53951 = cljs.core.vec.call(null,chs);
var inst_53952 = inst_53951;
var state_53982__$1 = (function (){var statearr_53987 = state_53982;
(statearr_53987[(10)] = inst_53952);

return statearr_53987;
})();
var statearr_53988_54007 = state_53982__$1;
(statearr_53988_54007[(2)] = null);

(statearr_53988_54007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (4))){
var inst_53952 = (state_53982[(10)]);
var state_53982__$1 = state_53982;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53982__$1,(7),inst_53952);
} else {
if((state_val_53983 === (6))){
var inst_53978 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
var statearr_53989_54008 = state_53982__$1;
(statearr_53989_54008[(2)] = inst_53978);

(statearr_53989_54008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (3))){
var inst_53980 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53982__$1,inst_53980);
} else {
if((state_val_53983 === (2))){
var inst_53952 = (state_53982[(10)]);
var inst_53954 = cljs.core.count.call(null,inst_53952);
var inst_53955 = (inst_53954 > (0));
var state_53982__$1 = state_53982;
if(cljs.core.truth_(inst_53955)){
var statearr_53991_54009 = state_53982__$1;
(statearr_53991_54009[(1)] = (4));

} else {
var statearr_53992_54010 = state_53982__$1;
(statearr_53992_54010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (11))){
var inst_53952 = (state_53982[(10)]);
var inst_53971 = (state_53982[(2)]);
var tmp53990 = inst_53952;
var inst_53952__$1 = tmp53990;
var state_53982__$1 = (function (){var statearr_53993 = state_53982;
(statearr_53993[(10)] = inst_53952__$1);

(statearr_53993[(11)] = inst_53971);

return statearr_53993;
})();
var statearr_53994_54011 = state_53982__$1;
(statearr_53994_54011[(2)] = null);

(statearr_53994_54011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (9))){
var inst_53962 = (state_53982[(8)]);
var state_53982__$1 = state_53982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53982__$1,(11),out,inst_53962);
} else {
if((state_val_53983 === (5))){
var inst_53976 = cljs.core.async.close_BANG_.call(null,out);
var state_53982__$1 = state_53982;
var statearr_53995_54012 = state_53982__$1;
(statearr_53995_54012[(2)] = inst_53976);

(statearr_53995_54012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (10))){
var inst_53974 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
var statearr_53996_54013 = state_53982__$1;
(statearr_53996_54013[(2)] = inst_53974);

(statearr_53996_54013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (8))){
var inst_53963 = (state_53982[(9)]);
var inst_53952 = (state_53982[(10)]);
var inst_53961 = (state_53982[(7)]);
var inst_53962 = (state_53982[(8)]);
var inst_53966 = (function (){var cs = inst_53952;
var vec__53957 = inst_53961;
var v = inst_53962;
var c = inst_53963;
return ((function (cs,vec__53957,v,c,inst_53963,inst_53952,inst_53961,inst_53962,state_val_53983,c__30467__auto___54004,out){
return (function (p1__53948_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__53948_SHARP_);
});
;})(cs,vec__53957,v,c,inst_53963,inst_53952,inst_53961,inst_53962,state_val_53983,c__30467__auto___54004,out))
})();
var inst_53967 = cljs.core.filterv.call(null,inst_53966,inst_53952);
var inst_53952__$1 = inst_53967;
var state_53982__$1 = (function (){var statearr_53997 = state_53982;
(statearr_53997[(10)] = inst_53952__$1);

return statearr_53997;
})();
var statearr_53998_54014 = state_53982__$1;
(statearr_53998_54014[(2)] = null);

(statearr_53998_54014[(1)] = (2));


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
});})(c__30467__auto___54004,out))
;
return ((function (switch__30446__auto__,c__30467__auto___54004,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_53999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53999[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_53999[(1)] = (1));

return statearr_53999;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_53982){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_53982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e54000){if((e54000 instanceof Object)){
var ex__30450__auto__ = e54000;
var statearr_54001_54015 = state_53982;
(statearr_54001_54015[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54016 = state_53982;
state_53982 = G__54016;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_53982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_53982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___54004,out))
})();
var state__30469__auto__ = (function (){var statearr_54002 = f__30468__auto__.call(null);
(statearr_54002[(6)] = c__30467__auto___54004);

return statearr_54002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___54004,out))
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
var G__54018 = arguments.length;
switch (G__54018) {
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
var c__30467__auto___54063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___54063,out){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___54063,out){
return (function (state_54042){
var state_val_54043 = (state_54042[(1)]);
if((state_val_54043 === (7))){
var inst_54024 = (state_54042[(7)]);
var inst_54024__$1 = (state_54042[(2)]);
var inst_54025 = (inst_54024__$1 == null);
var inst_54026 = cljs.core.not.call(null,inst_54025);
var state_54042__$1 = (function (){var statearr_54044 = state_54042;
(statearr_54044[(7)] = inst_54024__$1);

return statearr_54044;
})();
if(inst_54026){
var statearr_54045_54064 = state_54042__$1;
(statearr_54045_54064[(1)] = (8));

} else {
var statearr_54046_54065 = state_54042__$1;
(statearr_54046_54065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54043 === (1))){
var inst_54019 = (0);
var state_54042__$1 = (function (){var statearr_54047 = state_54042;
(statearr_54047[(8)] = inst_54019);

return statearr_54047;
})();
var statearr_54048_54066 = state_54042__$1;
(statearr_54048_54066[(2)] = null);

(statearr_54048_54066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54043 === (4))){
var state_54042__$1 = state_54042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54042__$1,(7),ch);
} else {
if((state_val_54043 === (6))){
var inst_54037 = (state_54042[(2)]);
var state_54042__$1 = state_54042;
var statearr_54049_54067 = state_54042__$1;
(statearr_54049_54067[(2)] = inst_54037);

(statearr_54049_54067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54043 === (3))){
var inst_54039 = (state_54042[(2)]);
var inst_54040 = cljs.core.async.close_BANG_.call(null,out);
var state_54042__$1 = (function (){var statearr_54050 = state_54042;
(statearr_54050[(9)] = inst_54039);

return statearr_54050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54042__$1,inst_54040);
} else {
if((state_val_54043 === (2))){
var inst_54019 = (state_54042[(8)]);
var inst_54021 = (inst_54019 < n);
var state_54042__$1 = state_54042;
if(cljs.core.truth_(inst_54021)){
var statearr_54051_54068 = state_54042__$1;
(statearr_54051_54068[(1)] = (4));

} else {
var statearr_54052_54069 = state_54042__$1;
(statearr_54052_54069[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54043 === (11))){
var inst_54019 = (state_54042[(8)]);
var inst_54029 = (state_54042[(2)]);
var inst_54030 = (inst_54019 + (1));
var inst_54019__$1 = inst_54030;
var state_54042__$1 = (function (){var statearr_54053 = state_54042;
(statearr_54053[(10)] = inst_54029);

(statearr_54053[(8)] = inst_54019__$1);

return statearr_54053;
})();
var statearr_54054_54070 = state_54042__$1;
(statearr_54054_54070[(2)] = null);

(statearr_54054_54070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54043 === (9))){
var state_54042__$1 = state_54042;
var statearr_54055_54071 = state_54042__$1;
(statearr_54055_54071[(2)] = null);

(statearr_54055_54071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54043 === (5))){
var state_54042__$1 = state_54042;
var statearr_54056_54072 = state_54042__$1;
(statearr_54056_54072[(2)] = null);

(statearr_54056_54072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54043 === (10))){
var inst_54034 = (state_54042[(2)]);
var state_54042__$1 = state_54042;
var statearr_54057_54073 = state_54042__$1;
(statearr_54057_54073[(2)] = inst_54034);

(statearr_54057_54073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54043 === (8))){
var inst_54024 = (state_54042[(7)]);
var state_54042__$1 = state_54042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54042__$1,(11),out,inst_54024);
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
});})(c__30467__auto___54063,out))
;
return ((function (switch__30446__auto__,c__30467__auto___54063,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_54058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54058[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_54058[(1)] = (1));

return statearr_54058;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_54042){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_54042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e54059){if((e54059 instanceof Object)){
var ex__30450__auto__ = e54059;
var statearr_54060_54074 = state_54042;
(statearr_54060_54074[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54075 = state_54042;
state_54042 = G__54075;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_54042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_54042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___54063,out))
})();
var state__30469__auto__ = (function (){var statearr_54061 = f__30468__auto__.call(null);
(statearr_54061[(6)] = c__30467__auto___54063);

return statearr_54061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___54063,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async54077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54077 = (function (f,ch,meta54078){
this.f = f;
this.ch = ch;
this.meta54078 = meta54078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54079,meta54078__$1){
var self__ = this;
var _54079__$1 = this;
return (new cljs.core.async.t_cljs$core$async54077(self__.f,self__.ch,meta54078__$1));
});

cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54079){
var self__ = this;
var _54079__$1 = this;
return self__.meta54078;
});

cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async54080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54080 = (function (f,ch,meta54078,_,fn1,meta54081){
this.f = f;
this.ch = ch;
this.meta54078 = meta54078;
this._ = _;
this.fn1 = fn1;
this.meta54081 = meta54081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_54082,meta54081__$1){
var self__ = this;
var _54082__$1 = this;
return (new cljs.core.async.t_cljs$core$async54080(self__.f,self__.ch,self__.meta54078,self__._,self__.fn1,meta54081__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async54080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_54082){
var self__ = this;
var _54082__$1 = this;
return self__.meta54081;
});})(___$1))
;

cljs.core.async.t_cljs$core$async54080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async54080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async54080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__54076_SHARP_){
return f1.call(null,(((p1__54076_SHARP_ == null))?null:self__.f.call(null,p1__54076_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async54080.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54078","meta54078",-643438450,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async54077","cljs.core.async/t_cljs$core$async54077",1057028300,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta54081","meta54081",75841917,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async54080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54080";

cljs.core.async.t_cljs$core$async54080.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async54080");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async54080 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54080(f__$1,ch__$1,meta54078__$1,___$2,fn1__$1,meta54081){
return (new cljs.core.async.t_cljs$core$async54080(f__$1,ch__$1,meta54078__$1,___$2,fn1__$1,meta54081));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async54080(self__.f,self__.ch,self__.meta54078,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27977__auto__ = ret;
if(cljs.core.truth_(and__27977__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27977__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async54077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54078","meta54078",-643438450,null)], null);
});

cljs.core.async.t_cljs$core$async54077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54077";

cljs.core.async.t_cljs$core$async54077.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async54077");
});

cljs.core.async.__GT_t_cljs$core$async54077 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54077(f__$1,ch__$1,meta54078){
return (new cljs.core.async.t_cljs$core$async54077(f__$1,ch__$1,meta54078));
});

}

return (new cljs.core.async.t_cljs$core$async54077(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async54083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54083 = (function (f,ch,meta54084){
this.f = f;
this.ch = ch;
this.meta54084 = meta54084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54085,meta54084__$1){
var self__ = this;
var _54085__$1 = this;
return (new cljs.core.async.t_cljs$core$async54083(self__.f,self__.ch,meta54084__$1));
});

cljs.core.async.t_cljs$core$async54083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54085){
var self__ = this;
var _54085__$1 = this;
return self__.meta54084;
});

cljs.core.async.t_cljs$core$async54083.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54083.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async54083.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async54083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54084","meta54084",441112752,null)], null);
});

cljs.core.async.t_cljs$core$async54083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54083";

cljs.core.async.t_cljs$core$async54083.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async54083");
});

cljs.core.async.__GT_t_cljs$core$async54083 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async54083(f__$1,ch__$1,meta54084){
return (new cljs.core.async.t_cljs$core$async54083(f__$1,ch__$1,meta54084));
});

}

return (new cljs.core.async.t_cljs$core$async54083(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async54086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54086 = (function (p,ch,meta54087){
this.p = p;
this.ch = ch;
this.meta54087 = meta54087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54088,meta54087__$1){
var self__ = this;
var _54088__$1 = this;
return (new cljs.core.async.t_cljs$core$async54086(self__.p,self__.ch,meta54087__$1));
});

cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54088){
var self__ = this;
var _54088__$1 = this;
return self__.meta54087;
});

cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async54086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54087","meta54087",1913480513,null)], null);
});

cljs.core.async.t_cljs$core$async54086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54086";

cljs.core.async.t_cljs$core$async54086.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async54086");
});

cljs.core.async.__GT_t_cljs$core$async54086 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async54086(p__$1,ch__$1,meta54087){
return (new cljs.core.async.t_cljs$core$async54086(p__$1,ch__$1,meta54087));
});

}

return (new cljs.core.async.t_cljs$core$async54086(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54090 = arguments.length;
switch (G__54090) {
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
var c__30467__auto___54130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___54130,out){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___54130,out){
return (function (state_54111){
var state_val_54112 = (state_54111[(1)]);
if((state_val_54112 === (7))){
var inst_54107 = (state_54111[(2)]);
var state_54111__$1 = state_54111;
var statearr_54113_54131 = state_54111__$1;
(statearr_54113_54131[(2)] = inst_54107);

(statearr_54113_54131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54112 === (1))){
var state_54111__$1 = state_54111;
var statearr_54114_54132 = state_54111__$1;
(statearr_54114_54132[(2)] = null);

(statearr_54114_54132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54112 === (4))){
var inst_54093 = (state_54111[(7)]);
var inst_54093__$1 = (state_54111[(2)]);
var inst_54094 = (inst_54093__$1 == null);
var state_54111__$1 = (function (){var statearr_54115 = state_54111;
(statearr_54115[(7)] = inst_54093__$1);

return statearr_54115;
})();
if(cljs.core.truth_(inst_54094)){
var statearr_54116_54133 = state_54111__$1;
(statearr_54116_54133[(1)] = (5));

} else {
var statearr_54117_54134 = state_54111__$1;
(statearr_54117_54134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54112 === (6))){
var inst_54093 = (state_54111[(7)]);
var inst_54098 = p.call(null,inst_54093);
var state_54111__$1 = state_54111;
if(cljs.core.truth_(inst_54098)){
var statearr_54118_54135 = state_54111__$1;
(statearr_54118_54135[(1)] = (8));

} else {
var statearr_54119_54136 = state_54111__$1;
(statearr_54119_54136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54112 === (3))){
var inst_54109 = (state_54111[(2)]);
var state_54111__$1 = state_54111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54111__$1,inst_54109);
} else {
if((state_val_54112 === (2))){
var state_54111__$1 = state_54111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54111__$1,(4),ch);
} else {
if((state_val_54112 === (11))){
var inst_54101 = (state_54111[(2)]);
var state_54111__$1 = state_54111;
var statearr_54120_54137 = state_54111__$1;
(statearr_54120_54137[(2)] = inst_54101);

(statearr_54120_54137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54112 === (9))){
var state_54111__$1 = state_54111;
var statearr_54121_54138 = state_54111__$1;
(statearr_54121_54138[(2)] = null);

(statearr_54121_54138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54112 === (5))){
var inst_54096 = cljs.core.async.close_BANG_.call(null,out);
var state_54111__$1 = state_54111;
var statearr_54122_54139 = state_54111__$1;
(statearr_54122_54139[(2)] = inst_54096);

(statearr_54122_54139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54112 === (10))){
var inst_54104 = (state_54111[(2)]);
var state_54111__$1 = (function (){var statearr_54123 = state_54111;
(statearr_54123[(8)] = inst_54104);

return statearr_54123;
})();
var statearr_54124_54140 = state_54111__$1;
(statearr_54124_54140[(2)] = null);

(statearr_54124_54140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54112 === (8))){
var inst_54093 = (state_54111[(7)]);
var state_54111__$1 = state_54111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54111__$1,(11),out,inst_54093);
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
});})(c__30467__auto___54130,out))
;
return ((function (switch__30446__auto__,c__30467__auto___54130,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_54125 = [null,null,null,null,null,null,null,null,null];
(statearr_54125[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_54125[(1)] = (1));

return statearr_54125;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_54111){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_54111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e54126){if((e54126 instanceof Object)){
var ex__30450__auto__ = e54126;
var statearr_54127_54141 = state_54111;
(statearr_54127_54141[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54142 = state_54111;
state_54111 = G__54142;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_54111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_54111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___54130,out))
})();
var state__30469__auto__ = (function (){var statearr_54128 = f__30468__auto__.call(null);
(statearr_54128[(6)] = c__30467__auto___54130);

return statearr_54128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___54130,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__54144 = arguments.length;
switch (G__54144) {
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
var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__){
return (function (state_54207){
var state_val_54208 = (state_54207[(1)]);
if((state_val_54208 === (7))){
var inst_54203 = (state_54207[(2)]);
var state_54207__$1 = state_54207;
var statearr_54209_54247 = state_54207__$1;
(statearr_54209_54247[(2)] = inst_54203);

(statearr_54209_54247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (20))){
var inst_54173 = (state_54207[(7)]);
var inst_54184 = (state_54207[(2)]);
var inst_54185 = cljs.core.next.call(null,inst_54173);
var inst_54159 = inst_54185;
var inst_54160 = null;
var inst_54161 = (0);
var inst_54162 = (0);
var state_54207__$1 = (function (){var statearr_54210 = state_54207;
(statearr_54210[(8)] = inst_54162);

(statearr_54210[(9)] = inst_54159);

(statearr_54210[(10)] = inst_54161);

(statearr_54210[(11)] = inst_54184);

(statearr_54210[(12)] = inst_54160);

return statearr_54210;
})();
var statearr_54211_54248 = state_54207__$1;
(statearr_54211_54248[(2)] = null);

(statearr_54211_54248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (1))){
var state_54207__$1 = state_54207;
var statearr_54212_54249 = state_54207__$1;
(statearr_54212_54249[(2)] = null);

(statearr_54212_54249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (4))){
var inst_54148 = (state_54207[(13)]);
var inst_54148__$1 = (state_54207[(2)]);
var inst_54149 = (inst_54148__$1 == null);
var state_54207__$1 = (function (){var statearr_54213 = state_54207;
(statearr_54213[(13)] = inst_54148__$1);

return statearr_54213;
})();
if(cljs.core.truth_(inst_54149)){
var statearr_54214_54250 = state_54207__$1;
(statearr_54214_54250[(1)] = (5));

} else {
var statearr_54215_54251 = state_54207__$1;
(statearr_54215_54251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (15))){
var state_54207__$1 = state_54207;
var statearr_54219_54252 = state_54207__$1;
(statearr_54219_54252[(2)] = null);

(statearr_54219_54252[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (21))){
var state_54207__$1 = state_54207;
var statearr_54220_54253 = state_54207__$1;
(statearr_54220_54253[(2)] = null);

(statearr_54220_54253[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (13))){
var inst_54162 = (state_54207[(8)]);
var inst_54159 = (state_54207[(9)]);
var inst_54161 = (state_54207[(10)]);
var inst_54160 = (state_54207[(12)]);
var inst_54169 = (state_54207[(2)]);
var inst_54170 = (inst_54162 + (1));
var tmp54216 = inst_54159;
var tmp54217 = inst_54161;
var tmp54218 = inst_54160;
var inst_54159__$1 = tmp54216;
var inst_54160__$1 = tmp54218;
var inst_54161__$1 = tmp54217;
var inst_54162__$1 = inst_54170;
var state_54207__$1 = (function (){var statearr_54221 = state_54207;
(statearr_54221[(8)] = inst_54162__$1);

(statearr_54221[(9)] = inst_54159__$1);

(statearr_54221[(10)] = inst_54161__$1);

(statearr_54221[(14)] = inst_54169);

(statearr_54221[(12)] = inst_54160__$1);

return statearr_54221;
})();
var statearr_54222_54254 = state_54207__$1;
(statearr_54222_54254[(2)] = null);

(statearr_54222_54254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (22))){
var state_54207__$1 = state_54207;
var statearr_54223_54255 = state_54207__$1;
(statearr_54223_54255[(2)] = null);

(statearr_54223_54255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (6))){
var inst_54148 = (state_54207[(13)]);
var inst_54157 = f.call(null,inst_54148);
var inst_54158 = cljs.core.seq.call(null,inst_54157);
var inst_54159 = inst_54158;
var inst_54160 = null;
var inst_54161 = (0);
var inst_54162 = (0);
var state_54207__$1 = (function (){var statearr_54224 = state_54207;
(statearr_54224[(8)] = inst_54162);

(statearr_54224[(9)] = inst_54159);

(statearr_54224[(10)] = inst_54161);

(statearr_54224[(12)] = inst_54160);

return statearr_54224;
})();
var statearr_54225_54256 = state_54207__$1;
(statearr_54225_54256[(2)] = null);

(statearr_54225_54256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (17))){
var inst_54173 = (state_54207[(7)]);
var inst_54177 = cljs.core.chunk_first.call(null,inst_54173);
var inst_54178 = cljs.core.chunk_rest.call(null,inst_54173);
var inst_54179 = cljs.core.count.call(null,inst_54177);
var inst_54159 = inst_54178;
var inst_54160 = inst_54177;
var inst_54161 = inst_54179;
var inst_54162 = (0);
var state_54207__$1 = (function (){var statearr_54226 = state_54207;
(statearr_54226[(8)] = inst_54162);

(statearr_54226[(9)] = inst_54159);

(statearr_54226[(10)] = inst_54161);

(statearr_54226[(12)] = inst_54160);

return statearr_54226;
})();
var statearr_54227_54257 = state_54207__$1;
(statearr_54227_54257[(2)] = null);

(statearr_54227_54257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (3))){
var inst_54205 = (state_54207[(2)]);
var state_54207__$1 = state_54207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54207__$1,inst_54205);
} else {
if((state_val_54208 === (12))){
var inst_54193 = (state_54207[(2)]);
var state_54207__$1 = state_54207;
var statearr_54228_54258 = state_54207__$1;
(statearr_54228_54258[(2)] = inst_54193);

(statearr_54228_54258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (2))){
var state_54207__$1 = state_54207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54207__$1,(4),in$);
} else {
if((state_val_54208 === (23))){
var inst_54201 = (state_54207[(2)]);
var state_54207__$1 = state_54207;
var statearr_54229_54259 = state_54207__$1;
(statearr_54229_54259[(2)] = inst_54201);

(statearr_54229_54259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (19))){
var inst_54188 = (state_54207[(2)]);
var state_54207__$1 = state_54207;
var statearr_54230_54260 = state_54207__$1;
(statearr_54230_54260[(2)] = inst_54188);

(statearr_54230_54260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (11))){
var inst_54159 = (state_54207[(9)]);
var inst_54173 = (state_54207[(7)]);
var inst_54173__$1 = cljs.core.seq.call(null,inst_54159);
var state_54207__$1 = (function (){var statearr_54231 = state_54207;
(statearr_54231[(7)] = inst_54173__$1);

return statearr_54231;
})();
if(inst_54173__$1){
var statearr_54232_54261 = state_54207__$1;
(statearr_54232_54261[(1)] = (14));

} else {
var statearr_54233_54262 = state_54207__$1;
(statearr_54233_54262[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (9))){
var inst_54195 = (state_54207[(2)]);
var inst_54196 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_54207__$1 = (function (){var statearr_54234 = state_54207;
(statearr_54234[(15)] = inst_54195);

return statearr_54234;
})();
if(cljs.core.truth_(inst_54196)){
var statearr_54235_54263 = state_54207__$1;
(statearr_54235_54263[(1)] = (21));

} else {
var statearr_54236_54264 = state_54207__$1;
(statearr_54236_54264[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (5))){
var inst_54151 = cljs.core.async.close_BANG_.call(null,out);
var state_54207__$1 = state_54207;
var statearr_54237_54265 = state_54207__$1;
(statearr_54237_54265[(2)] = inst_54151);

(statearr_54237_54265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (14))){
var inst_54173 = (state_54207[(7)]);
var inst_54175 = cljs.core.chunked_seq_QMARK_.call(null,inst_54173);
var state_54207__$1 = state_54207;
if(inst_54175){
var statearr_54238_54266 = state_54207__$1;
(statearr_54238_54266[(1)] = (17));

} else {
var statearr_54239_54267 = state_54207__$1;
(statearr_54239_54267[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (16))){
var inst_54191 = (state_54207[(2)]);
var state_54207__$1 = state_54207;
var statearr_54240_54268 = state_54207__$1;
(statearr_54240_54268[(2)] = inst_54191);

(statearr_54240_54268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54208 === (10))){
var inst_54162 = (state_54207[(8)]);
var inst_54160 = (state_54207[(12)]);
var inst_54167 = cljs.core._nth.call(null,inst_54160,inst_54162);
var state_54207__$1 = state_54207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54207__$1,(13),out,inst_54167);
} else {
if((state_val_54208 === (18))){
var inst_54173 = (state_54207[(7)]);
var inst_54182 = cljs.core.first.call(null,inst_54173);
var state_54207__$1 = state_54207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54207__$1,(20),out,inst_54182);
} else {
if((state_val_54208 === (8))){
var inst_54162 = (state_54207[(8)]);
var inst_54161 = (state_54207[(10)]);
var inst_54164 = (inst_54162 < inst_54161);
var inst_54165 = inst_54164;
var state_54207__$1 = state_54207;
if(cljs.core.truth_(inst_54165)){
var statearr_54241_54269 = state_54207__$1;
(statearr_54241_54269[(1)] = (10));

} else {
var statearr_54242_54270 = state_54207__$1;
(statearr_54242_54270[(1)] = (11));

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
});})(c__30467__auto__))
;
return ((function (switch__30446__auto__,c__30467__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_54243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54243[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__);

(statearr_54243[(1)] = (1));

return statearr_54243;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____1 = (function (state_54207){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_54207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e54244){if((e54244 instanceof Object)){
var ex__30450__auto__ = e54244;
var statearr_54245_54271 = state_54207;
(statearr_54245_54271[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54272 = state_54207;
state_54207 = G__54272;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__ = function(state_54207){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____1.call(this,state_54207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__))
})();
var state__30469__auto__ = (function (){var statearr_54246 = f__30468__auto__.call(null);
(statearr_54246[(6)] = c__30467__auto__);

return statearr_54246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__))
);

return c__30467__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__54274 = arguments.length;
switch (G__54274) {
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
var G__54277 = arguments.length;
switch (G__54277) {
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
var G__54280 = arguments.length;
switch (G__54280) {
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
var c__30467__auto___54327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___54327,out){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___54327,out){
return (function (state_54304){
var state_val_54305 = (state_54304[(1)]);
if((state_val_54305 === (7))){
var inst_54299 = (state_54304[(2)]);
var state_54304__$1 = state_54304;
var statearr_54306_54328 = state_54304__$1;
(statearr_54306_54328[(2)] = inst_54299);

(statearr_54306_54328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54305 === (1))){
var inst_54281 = null;
var state_54304__$1 = (function (){var statearr_54307 = state_54304;
(statearr_54307[(7)] = inst_54281);

return statearr_54307;
})();
var statearr_54308_54329 = state_54304__$1;
(statearr_54308_54329[(2)] = null);

(statearr_54308_54329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54305 === (4))){
var inst_54284 = (state_54304[(8)]);
var inst_54284__$1 = (state_54304[(2)]);
var inst_54285 = (inst_54284__$1 == null);
var inst_54286 = cljs.core.not.call(null,inst_54285);
var state_54304__$1 = (function (){var statearr_54309 = state_54304;
(statearr_54309[(8)] = inst_54284__$1);

return statearr_54309;
})();
if(inst_54286){
var statearr_54310_54330 = state_54304__$1;
(statearr_54310_54330[(1)] = (5));

} else {
var statearr_54311_54331 = state_54304__$1;
(statearr_54311_54331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54305 === (6))){
var state_54304__$1 = state_54304;
var statearr_54312_54332 = state_54304__$1;
(statearr_54312_54332[(2)] = null);

(statearr_54312_54332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54305 === (3))){
var inst_54301 = (state_54304[(2)]);
var inst_54302 = cljs.core.async.close_BANG_.call(null,out);
var state_54304__$1 = (function (){var statearr_54313 = state_54304;
(statearr_54313[(9)] = inst_54301);

return statearr_54313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54304__$1,inst_54302);
} else {
if((state_val_54305 === (2))){
var state_54304__$1 = state_54304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54304__$1,(4),ch);
} else {
if((state_val_54305 === (11))){
var inst_54284 = (state_54304[(8)]);
var inst_54293 = (state_54304[(2)]);
var inst_54281 = inst_54284;
var state_54304__$1 = (function (){var statearr_54314 = state_54304;
(statearr_54314[(7)] = inst_54281);

(statearr_54314[(10)] = inst_54293);

return statearr_54314;
})();
var statearr_54315_54333 = state_54304__$1;
(statearr_54315_54333[(2)] = null);

(statearr_54315_54333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54305 === (9))){
var inst_54284 = (state_54304[(8)]);
var state_54304__$1 = state_54304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54304__$1,(11),out,inst_54284);
} else {
if((state_val_54305 === (5))){
var inst_54281 = (state_54304[(7)]);
var inst_54284 = (state_54304[(8)]);
var inst_54288 = cljs.core._EQ_.call(null,inst_54284,inst_54281);
var state_54304__$1 = state_54304;
if(inst_54288){
var statearr_54317_54334 = state_54304__$1;
(statearr_54317_54334[(1)] = (8));

} else {
var statearr_54318_54335 = state_54304__$1;
(statearr_54318_54335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54305 === (10))){
var inst_54296 = (state_54304[(2)]);
var state_54304__$1 = state_54304;
var statearr_54319_54336 = state_54304__$1;
(statearr_54319_54336[(2)] = inst_54296);

(statearr_54319_54336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54305 === (8))){
var inst_54281 = (state_54304[(7)]);
var tmp54316 = inst_54281;
var inst_54281__$1 = tmp54316;
var state_54304__$1 = (function (){var statearr_54320 = state_54304;
(statearr_54320[(7)] = inst_54281__$1);

return statearr_54320;
})();
var statearr_54321_54337 = state_54304__$1;
(statearr_54321_54337[(2)] = null);

(statearr_54321_54337[(1)] = (2));


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
});})(c__30467__auto___54327,out))
;
return ((function (switch__30446__auto__,c__30467__auto___54327,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_54322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54322[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_54322[(1)] = (1));

return statearr_54322;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_54304){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_54304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e54323){if((e54323 instanceof Object)){
var ex__30450__auto__ = e54323;
var statearr_54324_54338 = state_54304;
(statearr_54324_54338[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54339 = state_54304;
state_54304 = G__54339;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_54304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_54304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___54327,out))
})();
var state__30469__auto__ = (function (){var statearr_54325 = f__30468__auto__.call(null);
(statearr_54325[(6)] = c__30467__auto___54327);

return statearr_54325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___54327,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__54341 = arguments.length;
switch (G__54341) {
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
var c__30467__auto___54407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___54407,out){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___54407,out){
return (function (state_54379){
var state_val_54380 = (state_54379[(1)]);
if((state_val_54380 === (7))){
var inst_54375 = (state_54379[(2)]);
var state_54379__$1 = state_54379;
var statearr_54381_54408 = state_54379__$1;
(statearr_54381_54408[(2)] = inst_54375);

(statearr_54381_54408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (1))){
var inst_54342 = (new Array(n));
var inst_54343 = inst_54342;
var inst_54344 = (0);
var state_54379__$1 = (function (){var statearr_54382 = state_54379;
(statearr_54382[(7)] = inst_54344);

(statearr_54382[(8)] = inst_54343);

return statearr_54382;
})();
var statearr_54383_54409 = state_54379__$1;
(statearr_54383_54409[(2)] = null);

(statearr_54383_54409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (4))){
var inst_54347 = (state_54379[(9)]);
var inst_54347__$1 = (state_54379[(2)]);
var inst_54348 = (inst_54347__$1 == null);
var inst_54349 = cljs.core.not.call(null,inst_54348);
var state_54379__$1 = (function (){var statearr_54384 = state_54379;
(statearr_54384[(9)] = inst_54347__$1);

return statearr_54384;
})();
if(inst_54349){
var statearr_54385_54410 = state_54379__$1;
(statearr_54385_54410[(1)] = (5));

} else {
var statearr_54386_54411 = state_54379__$1;
(statearr_54386_54411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (15))){
var inst_54369 = (state_54379[(2)]);
var state_54379__$1 = state_54379;
var statearr_54387_54412 = state_54379__$1;
(statearr_54387_54412[(2)] = inst_54369);

(statearr_54387_54412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (13))){
var state_54379__$1 = state_54379;
var statearr_54388_54413 = state_54379__$1;
(statearr_54388_54413[(2)] = null);

(statearr_54388_54413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (6))){
var inst_54344 = (state_54379[(7)]);
var inst_54365 = (inst_54344 > (0));
var state_54379__$1 = state_54379;
if(cljs.core.truth_(inst_54365)){
var statearr_54389_54414 = state_54379__$1;
(statearr_54389_54414[(1)] = (12));

} else {
var statearr_54390_54415 = state_54379__$1;
(statearr_54390_54415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (3))){
var inst_54377 = (state_54379[(2)]);
var state_54379__$1 = state_54379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54379__$1,inst_54377);
} else {
if((state_val_54380 === (12))){
var inst_54343 = (state_54379[(8)]);
var inst_54367 = cljs.core.vec.call(null,inst_54343);
var state_54379__$1 = state_54379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54379__$1,(15),out,inst_54367);
} else {
if((state_val_54380 === (2))){
var state_54379__$1 = state_54379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54379__$1,(4),ch);
} else {
if((state_val_54380 === (11))){
var inst_54359 = (state_54379[(2)]);
var inst_54360 = (new Array(n));
var inst_54343 = inst_54360;
var inst_54344 = (0);
var state_54379__$1 = (function (){var statearr_54391 = state_54379;
(statearr_54391[(7)] = inst_54344);

(statearr_54391[(8)] = inst_54343);

(statearr_54391[(10)] = inst_54359);

return statearr_54391;
})();
var statearr_54392_54416 = state_54379__$1;
(statearr_54392_54416[(2)] = null);

(statearr_54392_54416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (9))){
var inst_54343 = (state_54379[(8)]);
var inst_54357 = cljs.core.vec.call(null,inst_54343);
var state_54379__$1 = state_54379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54379__$1,(11),out,inst_54357);
} else {
if((state_val_54380 === (5))){
var inst_54344 = (state_54379[(7)]);
var inst_54352 = (state_54379[(11)]);
var inst_54343 = (state_54379[(8)]);
var inst_54347 = (state_54379[(9)]);
var inst_54351 = (inst_54343[inst_54344] = inst_54347);
var inst_54352__$1 = (inst_54344 + (1));
var inst_54353 = (inst_54352__$1 < n);
var state_54379__$1 = (function (){var statearr_54393 = state_54379;
(statearr_54393[(11)] = inst_54352__$1);

(statearr_54393[(12)] = inst_54351);

return statearr_54393;
})();
if(cljs.core.truth_(inst_54353)){
var statearr_54394_54417 = state_54379__$1;
(statearr_54394_54417[(1)] = (8));

} else {
var statearr_54395_54418 = state_54379__$1;
(statearr_54395_54418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (14))){
var inst_54372 = (state_54379[(2)]);
var inst_54373 = cljs.core.async.close_BANG_.call(null,out);
var state_54379__$1 = (function (){var statearr_54397 = state_54379;
(statearr_54397[(13)] = inst_54372);

return statearr_54397;
})();
var statearr_54398_54419 = state_54379__$1;
(statearr_54398_54419[(2)] = inst_54373);

(statearr_54398_54419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (10))){
var inst_54363 = (state_54379[(2)]);
var state_54379__$1 = state_54379;
var statearr_54399_54420 = state_54379__$1;
(statearr_54399_54420[(2)] = inst_54363);

(statearr_54399_54420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54380 === (8))){
var inst_54352 = (state_54379[(11)]);
var inst_54343 = (state_54379[(8)]);
var tmp54396 = inst_54343;
var inst_54343__$1 = tmp54396;
var inst_54344 = inst_54352;
var state_54379__$1 = (function (){var statearr_54400 = state_54379;
(statearr_54400[(7)] = inst_54344);

(statearr_54400[(8)] = inst_54343__$1);

return statearr_54400;
})();
var statearr_54401_54421 = state_54379__$1;
(statearr_54401_54421[(2)] = null);

(statearr_54401_54421[(1)] = (2));


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
});})(c__30467__auto___54407,out))
;
return ((function (switch__30446__auto__,c__30467__auto___54407,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_54402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54402[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_54402[(1)] = (1));

return statearr_54402;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_54379){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_54379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e54403){if((e54403 instanceof Object)){
var ex__30450__auto__ = e54403;
var statearr_54404_54422 = state_54379;
(statearr_54404_54422[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54423 = state_54379;
state_54379 = G__54423;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_54379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_54379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___54407,out))
})();
var state__30469__auto__ = (function (){var statearr_54405 = f__30468__auto__.call(null);
(statearr_54405[(6)] = c__30467__auto___54407);

return statearr_54405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___54407,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__54425 = arguments.length;
switch (G__54425) {
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
var c__30467__auto___54495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___54495,out){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___54495,out){
return (function (state_54467){
var state_val_54468 = (state_54467[(1)]);
if((state_val_54468 === (7))){
var inst_54463 = (state_54467[(2)]);
var state_54467__$1 = state_54467;
var statearr_54469_54496 = state_54467__$1;
(statearr_54469_54496[(2)] = inst_54463);

(statearr_54469_54496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (1))){
var inst_54426 = [];
var inst_54427 = inst_54426;
var inst_54428 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54467__$1 = (function (){var statearr_54470 = state_54467;
(statearr_54470[(7)] = inst_54427);

(statearr_54470[(8)] = inst_54428);

return statearr_54470;
})();
var statearr_54471_54497 = state_54467__$1;
(statearr_54471_54497[(2)] = null);

(statearr_54471_54497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (4))){
var inst_54431 = (state_54467[(9)]);
var inst_54431__$1 = (state_54467[(2)]);
var inst_54432 = (inst_54431__$1 == null);
var inst_54433 = cljs.core.not.call(null,inst_54432);
var state_54467__$1 = (function (){var statearr_54472 = state_54467;
(statearr_54472[(9)] = inst_54431__$1);

return statearr_54472;
})();
if(inst_54433){
var statearr_54473_54498 = state_54467__$1;
(statearr_54473_54498[(1)] = (5));

} else {
var statearr_54474_54499 = state_54467__$1;
(statearr_54474_54499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (15))){
var inst_54457 = (state_54467[(2)]);
var state_54467__$1 = state_54467;
var statearr_54475_54500 = state_54467__$1;
(statearr_54475_54500[(2)] = inst_54457);

(statearr_54475_54500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (13))){
var state_54467__$1 = state_54467;
var statearr_54476_54501 = state_54467__$1;
(statearr_54476_54501[(2)] = null);

(statearr_54476_54501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (6))){
var inst_54427 = (state_54467[(7)]);
var inst_54452 = inst_54427.length;
var inst_54453 = (inst_54452 > (0));
var state_54467__$1 = state_54467;
if(cljs.core.truth_(inst_54453)){
var statearr_54477_54502 = state_54467__$1;
(statearr_54477_54502[(1)] = (12));

} else {
var statearr_54478_54503 = state_54467__$1;
(statearr_54478_54503[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (3))){
var inst_54465 = (state_54467[(2)]);
var state_54467__$1 = state_54467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54467__$1,inst_54465);
} else {
if((state_val_54468 === (12))){
var inst_54427 = (state_54467[(7)]);
var inst_54455 = cljs.core.vec.call(null,inst_54427);
var state_54467__$1 = state_54467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54467__$1,(15),out,inst_54455);
} else {
if((state_val_54468 === (2))){
var state_54467__$1 = state_54467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54467__$1,(4),ch);
} else {
if((state_val_54468 === (11))){
var inst_54431 = (state_54467[(9)]);
var inst_54435 = (state_54467[(10)]);
var inst_54445 = (state_54467[(2)]);
var inst_54446 = [];
var inst_54447 = inst_54446.push(inst_54431);
var inst_54427 = inst_54446;
var inst_54428 = inst_54435;
var state_54467__$1 = (function (){var statearr_54479 = state_54467;
(statearr_54479[(11)] = inst_54447);

(statearr_54479[(12)] = inst_54445);

(statearr_54479[(7)] = inst_54427);

(statearr_54479[(8)] = inst_54428);

return statearr_54479;
})();
var statearr_54480_54504 = state_54467__$1;
(statearr_54480_54504[(2)] = null);

(statearr_54480_54504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (9))){
var inst_54427 = (state_54467[(7)]);
var inst_54443 = cljs.core.vec.call(null,inst_54427);
var state_54467__$1 = state_54467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54467__$1,(11),out,inst_54443);
} else {
if((state_val_54468 === (5))){
var inst_54431 = (state_54467[(9)]);
var inst_54428 = (state_54467[(8)]);
var inst_54435 = (state_54467[(10)]);
var inst_54435__$1 = f.call(null,inst_54431);
var inst_54436 = cljs.core._EQ_.call(null,inst_54435__$1,inst_54428);
var inst_54437 = cljs.core.keyword_identical_QMARK_.call(null,inst_54428,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54438 = (inst_54436) || (inst_54437);
var state_54467__$1 = (function (){var statearr_54481 = state_54467;
(statearr_54481[(10)] = inst_54435__$1);

return statearr_54481;
})();
if(cljs.core.truth_(inst_54438)){
var statearr_54482_54505 = state_54467__$1;
(statearr_54482_54505[(1)] = (8));

} else {
var statearr_54483_54506 = state_54467__$1;
(statearr_54483_54506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (14))){
var inst_54460 = (state_54467[(2)]);
var inst_54461 = cljs.core.async.close_BANG_.call(null,out);
var state_54467__$1 = (function (){var statearr_54485 = state_54467;
(statearr_54485[(13)] = inst_54460);

return statearr_54485;
})();
var statearr_54486_54507 = state_54467__$1;
(statearr_54486_54507[(2)] = inst_54461);

(statearr_54486_54507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (10))){
var inst_54450 = (state_54467[(2)]);
var state_54467__$1 = state_54467;
var statearr_54487_54508 = state_54467__$1;
(statearr_54487_54508[(2)] = inst_54450);

(statearr_54487_54508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (8))){
var inst_54431 = (state_54467[(9)]);
var inst_54427 = (state_54467[(7)]);
var inst_54435 = (state_54467[(10)]);
var inst_54440 = inst_54427.push(inst_54431);
var tmp54484 = inst_54427;
var inst_54427__$1 = tmp54484;
var inst_54428 = inst_54435;
var state_54467__$1 = (function (){var statearr_54488 = state_54467;
(statearr_54488[(7)] = inst_54427__$1);

(statearr_54488[(8)] = inst_54428);

(statearr_54488[(14)] = inst_54440);

return statearr_54488;
})();
var statearr_54489_54509 = state_54467__$1;
(statearr_54489_54509[(2)] = null);

(statearr_54489_54509[(1)] = (2));


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
});})(c__30467__auto___54495,out))
;
return ((function (switch__30446__auto__,c__30467__auto___54495,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_54490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54490[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_54490[(1)] = (1));

return statearr_54490;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_54467){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_54467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e54491){if((e54491 instanceof Object)){
var ex__30450__auto__ = e54491;
var statearr_54492_54510 = state_54467;
(statearr_54492_54510[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54511 = state_54467;
state_54467 = G__54511;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_54467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_54467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___54495,out))
})();
var state__30469__auto__ = (function (){var statearr_54493 = f__30468__auto__.call(null);
(statearr_54493[(6)] = c__30467__auto___54495);

return statearr_54493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___54495,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509236544452
