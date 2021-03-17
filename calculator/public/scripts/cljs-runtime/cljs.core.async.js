goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29189 = arguments.length;
switch (G__29189) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29191 = (function (f,blockable,meta29192){
this.f = f;
this.blockable = blockable;
this.meta29192 = meta29192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29193,meta29192__$1){
var self__ = this;
var _29193__$1 = this;
return (new cljs.core.async.t_cljs$core$async29191(self__.f,self__.blockable,meta29192__$1));
}));

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29193){
var self__ = this;
var _29193__$1 = this;
return self__.meta29192;
}));

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29192","meta29192",1196159859,null)], null);
}));

(cljs.core.async.t_cljs$core$async29191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29191");

(cljs.core.async.t_cljs$core$async29191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29191.
 */
cljs.core.async.__GT_t_cljs$core$async29191 = (function cljs$core$async$__GT_t_cljs$core$async29191(f__$1,blockable__$1,meta29192){
return (new cljs.core.async.t_cljs$core$async29191(f__$1,blockable__$1,meta29192));
});

}

return (new cljs.core.async.t_cljs$core$async29191(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__29217 = arguments.length;
switch (G__29217) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__29237 = arguments.length;
switch (G__29237) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__29248 = arguments.length;
switch (G__29248) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32281 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32281) : fn1.call(null,val_32281));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32281) : fn1.call(null,val_32281));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__29259 = arguments.length;
switch (G__29259) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32297 = n;
var x_32298 = (0);
while(true){
if((x_32298 < n__4613__auto___32297)){
(a[x_32298] = x_32298);

var G__32300 = (x_32298 + (1));
x_32298 = G__32300;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29268 = (function (flag,meta29269){
this.flag = flag;
this.meta29269 = meta29269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29270,meta29269__$1){
var self__ = this;
var _29270__$1 = this;
return (new cljs.core.async.t_cljs$core$async29268(self__.flag,meta29269__$1));
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29270){
var self__ = this;
var _29270__$1 = this;
return self__.meta29269;
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29269","meta29269",224749849,null)], null);
}));

(cljs.core.async.t_cljs$core$async29268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29268");

(cljs.core.async.t_cljs$core$async29268.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29268.
 */
cljs.core.async.__GT_t_cljs$core$async29268 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29268(flag__$1,meta29269){
return (new cljs.core.async.t_cljs$core$async29268(flag__$1,meta29269));
});

}

return (new cljs.core.async.t_cljs$core$async29268(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29284 = (function (flag,cb,meta29285){
this.flag = flag;
this.cb = cb;
this.meta29285 = meta29285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29286,meta29285__$1){
var self__ = this;
var _29286__$1 = this;
return (new cljs.core.async.t_cljs$core$async29284(self__.flag,self__.cb,meta29285__$1));
}));

(cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29286){
var self__ = this;
var _29286__$1 = this;
return self__.meta29285;
}));

(cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29285","meta29285",-418792060,null)], null);
}));

(cljs.core.async.t_cljs$core$async29284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29284");

(cljs.core.async.t_cljs$core$async29284.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29284.
 */
cljs.core.async.__GT_t_cljs$core$async29284 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29284(flag__$1,cb__$1,meta29285){
return (new cljs.core.async.t_cljs$core$async29284(flag__$1,cb__$1,meta29285));
});

}

return (new cljs.core.async.t_cljs$core$async29284(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29312_SHARP_){
var G__29331 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29312_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29331) : fret.call(null,G__29331));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29313_SHARP_){
var G__29332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29313_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29332) : fret.call(null,G__29332));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32328 = (i + (1));
i = G__32328;
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
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4736__auto___32333 = arguments.length;
var i__4737__auto___32334 = (0);
while(true){
if((i__4737__auto___32334 < len__4736__auto___32333)){
args__4742__auto__.push((arguments[i__4737__auto___32334]));

var G__32335 = (i__4737__auto___32334 + (1));
i__4737__auto___32334 = G__32335;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29356){
var map__29357 = p__29356;
var map__29357__$1 = (((((!((map__29357 == null))))?(((((map__29357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29357):map__29357);
var opts = map__29357__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29333){
var G__29334 = cljs.core.first(seq29333);
var seq29333__$1 = cljs.core.next(seq29333);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29334,seq29333__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__29402 = arguments.length;
switch (G__29402) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29083__auto___32342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_29461){
var state_val_29462 = (state_29461[(1)]);
if((state_val_29462 === (7))){
var inst_29457 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29467_32344 = state_29461__$1;
(statearr_29467_32344[(2)] = inst_29457);

(statearr_29467_32344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (1))){
var state_29461__$1 = state_29461;
var statearr_29470_32345 = state_29461__$1;
(statearr_29470_32345[(2)] = null);

(statearr_29470_32345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (4))){
var inst_29437 = (state_29461[(7)]);
var inst_29437__$1 = (state_29461[(2)]);
var inst_29438 = (inst_29437__$1 == null);
var state_29461__$1 = (function (){var statearr_29471 = state_29461;
(statearr_29471[(7)] = inst_29437__$1);

return statearr_29471;
})();
if(cljs.core.truth_(inst_29438)){
var statearr_29472_32384 = state_29461__$1;
(statearr_29472_32384[(1)] = (5));

} else {
var statearr_29473_32386 = state_29461__$1;
(statearr_29473_32386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (13))){
var state_29461__$1 = state_29461;
var statearr_29474_32387 = state_29461__$1;
(statearr_29474_32387[(2)] = null);

(statearr_29474_32387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (6))){
var inst_29437 = (state_29461[(7)]);
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29461__$1,(11),to,inst_29437);
} else {
if((state_val_29462 === (3))){
var inst_29459 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29461__$1,inst_29459);
} else {
if((state_val_29462 === (12))){
var state_29461__$1 = state_29461;
var statearr_29475_32394 = state_29461__$1;
(statearr_29475_32394[(2)] = null);

(statearr_29475_32394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (2))){
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29461__$1,(4),from);
} else {
if((state_val_29462 === (11))){
var inst_29448 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
if(cljs.core.truth_(inst_29448)){
var statearr_29476_32395 = state_29461__$1;
(statearr_29476_32395[(1)] = (12));

} else {
var statearr_29481_32397 = state_29461__$1;
(statearr_29481_32397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (9))){
var state_29461__$1 = state_29461;
var statearr_29482_32398 = state_29461__$1;
(statearr_29482_32398[(2)] = null);

(statearr_29482_32398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (5))){
var state_29461__$1 = state_29461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29483_32400 = state_29461__$1;
(statearr_29483_32400[(1)] = (8));

} else {
var statearr_29484_32402 = state_29461__$1;
(statearr_29484_32402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (14))){
var inst_29455 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29489_32404 = state_29461__$1;
(statearr_29489_32404[(2)] = inst_29455);

(statearr_29489_32404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (10))){
var inst_29445 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29490_32405 = state_29461__$1;
(statearr_29490_32405[(2)] = inst_29445);

(statearr_29490_32405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (8))){
var inst_29441 = cljs.core.async.close_BANG_(to);
var state_29461__$1 = state_29461;
var statearr_29491_32407 = state_29461__$1;
(statearr_29491_32407[(2)] = inst_29441);

(statearr_29491_32407[(1)] = (10));


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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_29493 = [null,null,null,null,null,null,null,null];
(statearr_29493[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_29493[(1)] = (1));

return statearr_29493;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_29461){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29461);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29498){var ex__28854__auto__ = e29498;
var statearr_29499_32411 = state_29461;
(statearr_29499_32411[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29461[(4)]))){
var statearr_29500_32413 = state_29461;
(statearr_29500_32413[(1)] = cljs.core.first((state_29461[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32414 = state_29461;
state_29461 = G__32414;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_29461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_29461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_29501 = f__29084__auto__();
(statearr_29501[(6)] = c__29083__auto___32342);

return statearr_29501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29503){
var vec__29504 = p__29503;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(1),null);
var job = vec__29504;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29083__auto___32419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_29512){
var state_val_29513 = (state_29512[(1)]);
if((state_val_29513 === (1))){
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29512__$1,(2),res,v);
} else {
if((state_val_29513 === (2))){
var inst_29508 = (state_29512[(2)]);
var inst_29510 = cljs.core.async.close_BANG_(res);
var state_29512__$1 = (function (){var statearr_29521 = state_29512;
(statearr_29521[(7)] = inst_29508);

return statearr_29521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29512__$1,inst_29510);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0 = (function (){
var statearr_29522 = [null,null,null,null,null,null,null,null];
(statearr_29522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__);

(statearr_29522[(1)] = (1));

return statearr_29522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1 = (function (state_29512){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29512);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29523){var ex__28854__auto__ = e29523;
var statearr_29524_32424 = state_29512;
(statearr_29524_32424[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29512[(4)]))){
var statearr_29525_32425 = state_29512;
(statearr_29525_32425[(1)] = cljs.core.first((state_29512[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32427 = state_29512;
state_29512 = G__32427;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = function(state_29512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1.call(this,state_29512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_29526 = f__29084__auto__();
(statearr_29526[(6)] = c__29083__auto___32419);

return statearr_29526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29527){
var vec__29528 = p__29527;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29528,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29528,(1),null);
var job = vec__29528;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32431 = n;
var __32432 = (0);
while(true){
if((__32432 < n__4613__auto___32431)){
var G__29531_32434 = type;
var G__29531_32435__$1 = (((G__29531_32434 instanceof cljs.core.Keyword))?G__29531_32434.fqn:null);
switch (G__29531_32435__$1) {
case "compute":
var c__29083__auto___32437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32432,c__29083__auto___32437,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async){
return (function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = ((function (__32432,c__29083__auto___32437,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async){
return (function (state_29545){
var state_val_29546 = (state_29545[(1)]);
if((state_val_29546 === (1))){
var state_29545__$1 = state_29545;
var statearr_29547_32441 = state_29545__$1;
(statearr_29547_32441[(2)] = null);

(statearr_29547_32441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29546 === (2))){
var state_29545__$1 = state_29545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29545__$1,(4),jobs);
} else {
if((state_val_29546 === (3))){
var inst_29543 = (state_29545[(2)]);
var state_29545__$1 = state_29545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29545__$1,inst_29543);
} else {
if((state_val_29546 === (4))){
var inst_29535 = (state_29545[(2)]);
var inst_29536 = process(inst_29535);
var state_29545__$1 = state_29545;
if(cljs.core.truth_(inst_29536)){
var statearr_29552_32443 = state_29545__$1;
(statearr_29552_32443[(1)] = (5));

} else {
var statearr_29553_32444 = state_29545__$1;
(statearr_29553_32444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29546 === (5))){
var state_29545__$1 = state_29545;
var statearr_29554_32445 = state_29545__$1;
(statearr_29554_32445[(2)] = null);

(statearr_29554_32445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29546 === (6))){
var state_29545__$1 = state_29545;
var statearr_29556_32448 = state_29545__$1;
(statearr_29556_32448[(2)] = null);

(statearr_29556_32448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29546 === (7))){
var inst_29541 = (state_29545[(2)]);
var state_29545__$1 = state_29545;
var statearr_29557_32450 = state_29545__$1;
(statearr_29557_32450[(2)] = inst_29541);

(statearr_29557_32450[(1)] = (3));


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
});})(__32432,c__29083__auto___32437,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async))
;
return ((function (__32432,switch__28850__auto__,c__29083__auto___32437,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0 = (function (){
var statearr_29560 = [null,null,null,null,null,null,null];
(statearr_29560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__);

(statearr_29560[(1)] = (1));

return statearr_29560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1 = (function (state_29545){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29545);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29561){var ex__28854__auto__ = e29561;
var statearr_29562_32453 = state_29545;
(statearr_29562_32453[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29545[(4)]))){
var statearr_29563_32456 = state_29545;
(statearr_29563_32456[(1)] = cljs.core.first((state_29545[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32458 = state_29545;
state_29545 = G__32458;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = function(state_29545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1.call(this,state_29545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__;
})()
;})(__32432,switch__28850__auto__,c__29083__auto___32437,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async))
})();
var state__29085__auto__ = (function (){var statearr_29564 = f__29084__auto__();
(statearr_29564[(6)] = c__29083__auto___32437);

return statearr_29564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
});})(__32432,c__29083__auto___32437,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async))
);


break;
case "async":
var c__29083__auto___32462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32432,c__29083__auto___32462,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async){
return (function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = ((function (__32432,c__29083__auto___32462,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async){
return (function (state_29577){
var state_val_29578 = (state_29577[(1)]);
if((state_val_29578 === (1))){
var state_29577__$1 = state_29577;
var statearr_29583_32466 = state_29577__$1;
(statearr_29583_32466[(2)] = null);

(statearr_29583_32466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (2))){
var state_29577__$1 = state_29577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29577__$1,(4),jobs);
} else {
if((state_val_29578 === (3))){
var inst_29575 = (state_29577[(2)]);
var state_29577__$1 = state_29577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29577__$1,inst_29575);
} else {
if((state_val_29578 === (4))){
var inst_29567 = (state_29577[(2)]);
var inst_29568 = async(inst_29567);
var state_29577__$1 = state_29577;
if(cljs.core.truth_(inst_29568)){
var statearr_29589_32468 = state_29577__$1;
(statearr_29589_32468[(1)] = (5));

} else {
var statearr_29590_32470 = state_29577__$1;
(statearr_29590_32470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (5))){
var state_29577__$1 = state_29577;
var statearr_29591_32471 = state_29577__$1;
(statearr_29591_32471[(2)] = null);

(statearr_29591_32471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (6))){
var state_29577__$1 = state_29577;
var statearr_29592_32472 = state_29577__$1;
(statearr_29592_32472[(2)] = null);

(statearr_29592_32472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (7))){
var inst_29573 = (state_29577[(2)]);
var state_29577__$1 = state_29577;
var statearr_29594_32475 = state_29577__$1;
(statearr_29594_32475[(2)] = inst_29573);

(statearr_29594_32475[(1)] = (3));


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
});})(__32432,c__29083__auto___32462,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async))
;
return ((function (__32432,switch__28850__auto__,c__29083__auto___32462,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0 = (function (){
var statearr_29596 = [null,null,null,null,null,null,null];
(statearr_29596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__);

(statearr_29596[(1)] = (1));

return statearr_29596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1 = (function (state_29577){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29577);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29597){var ex__28854__auto__ = e29597;
var statearr_29598_32481 = state_29577;
(statearr_29598_32481[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29577[(4)]))){
var statearr_29599_32482 = state_29577;
(statearr_29599_32482[(1)] = cljs.core.first((state_29577[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32483 = state_29577;
state_29577 = G__32483;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = function(state_29577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1.call(this,state_29577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__;
})()
;})(__32432,switch__28850__auto__,c__29083__auto___32462,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async))
})();
var state__29085__auto__ = (function (){var statearr_29604 = f__29084__auto__();
(statearr_29604[(6)] = c__29083__auto___32462);

return statearr_29604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
});})(__32432,c__29083__auto___32462,G__29531_32434,G__29531_32435__$1,n__4613__auto___32431,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29531_32435__$1)].join('')));

}

var G__32491 = (__32432 + (1));
__32432 = G__32491;
continue;
} else {
}
break;
}

var c__29083__auto___32492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_29627){
var state_val_29628 = (state_29627[(1)]);
if((state_val_29628 === (7))){
var inst_29623 = (state_29627[(2)]);
var state_29627__$1 = state_29627;
var statearr_29629_32499 = state_29627__$1;
(statearr_29629_32499[(2)] = inst_29623);

(statearr_29629_32499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (1))){
var state_29627__$1 = state_29627;
var statearr_29631_32505 = state_29627__$1;
(statearr_29631_32505[(2)] = null);

(statearr_29631_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (4))){
var inst_29608 = (state_29627[(7)]);
var inst_29608__$1 = (state_29627[(2)]);
var inst_29609 = (inst_29608__$1 == null);
var state_29627__$1 = (function (){var statearr_29634 = state_29627;
(statearr_29634[(7)] = inst_29608__$1);

return statearr_29634;
})();
if(cljs.core.truth_(inst_29609)){
var statearr_29638_32510 = state_29627__$1;
(statearr_29638_32510[(1)] = (5));

} else {
var statearr_29639_32511 = state_29627__$1;
(statearr_29639_32511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (6))){
var inst_29613 = (state_29627[(8)]);
var inst_29608 = (state_29627[(7)]);
var inst_29613__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29614 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29615 = [inst_29608,inst_29613__$1];
var inst_29616 = (new cljs.core.PersistentVector(null,2,(5),inst_29614,inst_29615,null));
var state_29627__$1 = (function (){var statearr_29643 = state_29627;
(statearr_29643[(8)] = inst_29613__$1);

return statearr_29643;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29627__$1,(8),jobs,inst_29616);
} else {
if((state_val_29628 === (3))){
var inst_29625 = (state_29627[(2)]);
var state_29627__$1 = state_29627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29627__$1,inst_29625);
} else {
if((state_val_29628 === (2))){
var state_29627__$1 = state_29627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29627__$1,(4),from);
} else {
if((state_val_29628 === (9))){
var inst_29620 = (state_29627[(2)]);
var state_29627__$1 = (function (){var statearr_29645 = state_29627;
(statearr_29645[(9)] = inst_29620);

return statearr_29645;
})();
var statearr_29647_32517 = state_29627__$1;
(statearr_29647_32517[(2)] = null);

(statearr_29647_32517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (5))){
var inst_29611 = cljs.core.async.close_BANG_(jobs);
var state_29627__$1 = state_29627;
var statearr_29652_32521 = state_29627__$1;
(statearr_29652_32521[(2)] = inst_29611);

(statearr_29652_32521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (8))){
var inst_29613 = (state_29627[(8)]);
var inst_29618 = (state_29627[(2)]);
var state_29627__$1 = (function (){var statearr_29656 = state_29627;
(statearr_29656[(10)] = inst_29618);

return statearr_29656;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29627__$1,(9),results,inst_29613);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0 = (function (){
var statearr_29664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__);

(statearr_29664[(1)] = (1));

return statearr_29664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1 = (function (state_29627){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29627);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29665){var ex__28854__auto__ = e29665;
var statearr_29666_32531 = state_29627;
(statearr_29666_32531[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29627[(4)]))){
var statearr_29667_32532 = state_29627;
(statearr_29667_32532[(1)] = cljs.core.first((state_29627[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32534 = state_29627;
state_29627 = G__32534;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = function(state_29627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1.call(this,state_29627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_29668 = f__29084__auto__();
(statearr_29668[(6)] = c__29083__auto___32492);

return statearr_29668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


var c__29083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_29711){
var state_val_29712 = (state_29711[(1)]);
if((state_val_29712 === (7))){
var inst_29707 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
var statearr_29715_32541 = state_29711__$1;
(statearr_29715_32541[(2)] = inst_29707);

(statearr_29715_32541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (20))){
var state_29711__$1 = state_29711;
var statearr_29718_32542 = state_29711__$1;
(statearr_29718_32542[(2)] = null);

(statearr_29718_32542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (1))){
var state_29711__$1 = state_29711;
var statearr_29719_32544 = state_29711__$1;
(statearr_29719_32544[(2)] = null);

(statearr_29719_32544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (4))){
var inst_29671 = (state_29711[(7)]);
var inst_29671__$1 = (state_29711[(2)]);
var inst_29674 = (inst_29671__$1 == null);
var state_29711__$1 = (function (){var statearr_29720 = state_29711;
(statearr_29720[(7)] = inst_29671__$1);

return statearr_29720;
})();
if(cljs.core.truth_(inst_29674)){
var statearr_29724_32549 = state_29711__$1;
(statearr_29724_32549[(1)] = (5));

} else {
var statearr_29725_32552 = state_29711__$1;
(statearr_29725_32552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (15))){
var inst_29686 = (state_29711[(8)]);
var state_29711__$1 = state_29711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29711__$1,(18),to,inst_29686);
} else {
if((state_val_29712 === (21))){
var inst_29701 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
var statearr_29726_32557 = state_29711__$1;
(statearr_29726_32557[(2)] = inst_29701);

(statearr_29726_32557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (13))){
var inst_29703 = (state_29711[(2)]);
var state_29711__$1 = (function (){var statearr_29727 = state_29711;
(statearr_29727[(9)] = inst_29703);

return statearr_29727;
})();
var statearr_29728_32558 = state_29711__$1;
(statearr_29728_32558[(2)] = null);

(statearr_29728_32558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (6))){
var inst_29671 = (state_29711[(7)]);
var state_29711__$1 = state_29711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29711__$1,(11),inst_29671);
} else {
if((state_val_29712 === (17))){
var inst_29695 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
if(cljs.core.truth_(inst_29695)){
var statearr_29730_32563 = state_29711__$1;
(statearr_29730_32563[(1)] = (19));

} else {
var statearr_29731_32564 = state_29711__$1;
(statearr_29731_32564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (3))){
var inst_29709 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29711__$1,inst_29709);
} else {
if((state_val_29712 === (12))){
var inst_29683 = (state_29711[(10)]);
var state_29711__$1 = state_29711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29711__$1,(14),inst_29683);
} else {
if((state_val_29712 === (2))){
var state_29711__$1 = state_29711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29711__$1,(4),results);
} else {
if((state_val_29712 === (19))){
var state_29711__$1 = state_29711;
var statearr_29739_32568 = state_29711__$1;
(statearr_29739_32568[(2)] = null);

(statearr_29739_32568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (11))){
var inst_29683 = (state_29711[(2)]);
var state_29711__$1 = (function (){var statearr_29740 = state_29711;
(statearr_29740[(10)] = inst_29683);

return statearr_29740;
})();
var statearr_29741_32572 = state_29711__$1;
(statearr_29741_32572[(2)] = null);

(statearr_29741_32572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (9))){
var state_29711__$1 = state_29711;
var statearr_29742_32573 = state_29711__$1;
(statearr_29742_32573[(2)] = null);

(statearr_29742_32573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (5))){
var state_29711__$1 = state_29711;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29744_32575 = state_29711__$1;
(statearr_29744_32575[(1)] = (8));

} else {
var statearr_29745_32577 = state_29711__$1;
(statearr_29745_32577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (14))){
var inst_29686 = (state_29711[(8)]);
var inst_29686__$1 = (state_29711[(2)]);
var inst_29688 = (inst_29686__$1 == null);
var inst_29689 = cljs.core.not(inst_29688);
var state_29711__$1 = (function (){var statearr_29751 = state_29711;
(statearr_29751[(8)] = inst_29686__$1);

return statearr_29751;
})();
if(inst_29689){
var statearr_29752_32580 = state_29711__$1;
(statearr_29752_32580[(1)] = (15));

} else {
var statearr_29753_32581 = state_29711__$1;
(statearr_29753_32581[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (16))){
var state_29711__$1 = state_29711;
var statearr_29754_32583 = state_29711__$1;
(statearr_29754_32583[(2)] = false);

(statearr_29754_32583[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (10))){
var inst_29680 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
var statearr_29755_32584 = state_29711__$1;
(statearr_29755_32584[(2)] = inst_29680);

(statearr_29755_32584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (18))){
var inst_29692 = (state_29711[(2)]);
var state_29711__$1 = state_29711;
var statearr_29756_32587 = state_29711__$1;
(statearr_29756_32587[(2)] = inst_29692);

(statearr_29756_32587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29712 === (8))){
var inst_29677 = cljs.core.async.close_BANG_(to);
var state_29711__$1 = state_29711;
var statearr_29757_32593 = state_29711__$1;
(statearr_29757_32593[(2)] = inst_29677);

(statearr_29757_32593[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0 = (function (){
var statearr_29761 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__);

(statearr_29761[(1)] = (1));

return statearr_29761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1 = (function (state_29711){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29711);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29763){var ex__28854__auto__ = e29763;
var statearr_29764_32595 = state_29711;
(statearr_29764_32595[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29711[(4)]))){
var statearr_29765_32596 = state_29711;
(statearr_29765_32596[(1)] = cljs.core.first((state_29711[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32600 = state_29711;
state_29711 = G__32600;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__ = function(state_29711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1.call(this,state_29711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_29769 = f__29084__auto__();
(statearr_29769[(6)] = c__29083__auto__);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));

return c__29083__auto__;
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
var G__29773 = arguments.length;
switch (G__29773) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__29778 = arguments.length;
switch (G__29778) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__29786 = arguments.length;
switch (G__29786) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29083__auto___32628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_29822){
var state_val_29823 = (state_29822[(1)]);
if((state_val_29823 === (7))){
var inst_29818 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29829_32629 = state_29822__$1;
(statearr_29829_32629[(2)] = inst_29818);

(statearr_29829_32629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (1))){
var state_29822__$1 = state_29822;
var statearr_29830_32631 = state_29822__$1;
(statearr_29830_32631[(2)] = null);

(statearr_29830_32631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (4))){
var inst_29794 = (state_29822[(7)]);
var inst_29794__$1 = (state_29822[(2)]);
var inst_29795 = (inst_29794__$1 == null);
var state_29822__$1 = (function (){var statearr_29831 = state_29822;
(statearr_29831[(7)] = inst_29794__$1);

return statearr_29831;
})();
if(cljs.core.truth_(inst_29795)){
var statearr_29832_32634 = state_29822__$1;
(statearr_29832_32634[(1)] = (5));

} else {
var statearr_29833_32637 = state_29822__$1;
(statearr_29833_32637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (13))){
var state_29822__$1 = state_29822;
var statearr_29834_32639 = state_29822__$1;
(statearr_29834_32639[(2)] = null);

(statearr_29834_32639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (6))){
var inst_29794 = (state_29822[(7)]);
var inst_29804 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29794) : p.call(null,inst_29794));
var state_29822__$1 = state_29822;
if(cljs.core.truth_(inst_29804)){
var statearr_29839_32640 = state_29822__$1;
(statearr_29839_32640[(1)] = (9));

} else {
var statearr_29840_32641 = state_29822__$1;
(statearr_29840_32641[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (3))){
var inst_29820 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29822__$1,inst_29820);
} else {
if((state_val_29823 === (12))){
var state_29822__$1 = state_29822;
var statearr_29841_32646 = state_29822__$1;
(statearr_29841_32646[(2)] = null);

(statearr_29841_32646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (2))){
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29822__$1,(4),ch);
} else {
if((state_val_29823 === (11))){
var inst_29794 = (state_29822[(7)]);
var inst_29809 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29822__$1,(8),inst_29809,inst_29794);
} else {
if((state_val_29823 === (9))){
var state_29822__$1 = state_29822;
var statearr_29848_32653 = state_29822__$1;
(statearr_29848_32653[(2)] = tc);

(statearr_29848_32653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (5))){
var inst_29797 = cljs.core.async.close_BANG_(tc);
var inst_29800 = cljs.core.async.close_BANG_(fc);
var state_29822__$1 = (function (){var statearr_29849 = state_29822;
(statearr_29849[(8)] = inst_29797);

return statearr_29849;
})();
var statearr_29850_32658 = state_29822__$1;
(statearr_29850_32658[(2)] = inst_29800);

(statearr_29850_32658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (14))){
var inst_29816 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29851_32659 = state_29822__$1;
(statearr_29851_32659[(2)] = inst_29816);

(statearr_29851_32659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (10))){
var state_29822__$1 = state_29822;
var statearr_29856_32661 = state_29822__$1;
(statearr_29856_32661[(2)] = fc);

(statearr_29856_32661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (8))){
var inst_29811 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
if(cljs.core.truth_(inst_29811)){
var statearr_29857_32668 = state_29822__$1;
(statearr_29857_32668[(1)] = (12));

} else {
var statearr_29858_32669 = state_29822__$1;
(statearr_29858_32669[(1)] = (13));

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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_29859 = [null,null,null,null,null,null,null,null,null];
(statearr_29859[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_29859[(1)] = (1));

return statearr_29859;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_29822){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29822);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29863){var ex__28854__auto__ = e29863;
var statearr_29864_32675 = state_29822;
(statearr_29864_32675[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29822[(4)]))){
var statearr_29868_32679 = state_29822;
(statearr_29868_32679[(1)] = cljs.core.first((state_29822[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32684 = state_29822;
state_29822 = G__32684;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_29822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_29822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_29869 = f__29084__auto__();
(statearr_29869[(6)] = c__29083__auto___32628);

return statearr_29869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
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
var c__29083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_29896){
var state_val_29897 = (state_29896[(1)]);
if((state_val_29897 === (7))){
var inst_29892 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29899_32689 = state_29896__$1;
(statearr_29899_32689[(2)] = inst_29892);

(statearr_29899_32689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (1))){
var inst_29874 = init;
var inst_29875 = inst_29874;
var state_29896__$1 = (function (){var statearr_29900 = state_29896;
(statearr_29900[(7)] = inst_29875);

return statearr_29900;
})();
var statearr_29901_32693 = state_29896__$1;
(statearr_29901_32693[(2)] = null);

(statearr_29901_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (4))){
var inst_29878 = (state_29896[(8)]);
var inst_29878__$1 = (state_29896[(2)]);
var inst_29879 = (inst_29878__$1 == null);
var state_29896__$1 = (function (){var statearr_29902 = state_29896;
(statearr_29902[(8)] = inst_29878__$1);

return statearr_29902;
})();
if(cljs.core.truth_(inst_29879)){
var statearr_29903_32698 = state_29896__$1;
(statearr_29903_32698[(1)] = (5));

} else {
var statearr_29904_32699 = state_29896__$1;
(statearr_29904_32699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (6))){
var inst_29875 = (state_29896[(7)]);
var inst_29878 = (state_29896[(8)]);
var inst_29882 = (state_29896[(9)]);
var inst_29882__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29875,inst_29878) : f.call(null,inst_29875,inst_29878));
var inst_29883 = cljs.core.reduced_QMARK_(inst_29882__$1);
var state_29896__$1 = (function (){var statearr_29906 = state_29896;
(statearr_29906[(9)] = inst_29882__$1);

return statearr_29906;
})();
if(inst_29883){
var statearr_29907_32707 = state_29896__$1;
(statearr_29907_32707[(1)] = (8));

} else {
var statearr_29908_32708 = state_29896__$1;
(statearr_29908_32708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (3))){
var inst_29894 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29896__$1,inst_29894);
} else {
if((state_val_29897 === (2))){
var state_29896__$1 = state_29896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29896__$1,(4),ch);
} else {
if((state_val_29897 === (9))){
var inst_29882 = (state_29896[(9)]);
var inst_29875 = inst_29882;
var state_29896__$1 = (function (){var statearr_29910 = state_29896;
(statearr_29910[(7)] = inst_29875);

return statearr_29910;
})();
var statearr_29911_32713 = state_29896__$1;
(statearr_29911_32713[(2)] = null);

(statearr_29911_32713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (5))){
var inst_29875 = (state_29896[(7)]);
var state_29896__$1 = state_29896;
var statearr_29912_32714 = state_29896__$1;
(statearr_29912_32714[(2)] = inst_29875);

(statearr_29912_32714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (10))){
var inst_29890 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29915_32717 = state_29896__$1;
(statearr_29915_32717[(2)] = inst_29890);

(statearr_29915_32717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (8))){
var inst_29882 = (state_29896[(9)]);
var inst_29886 = cljs.core.deref(inst_29882);
var state_29896__$1 = state_29896;
var statearr_29917_32722 = state_29896__$1;
(statearr_29917_32722[(2)] = inst_29886);

(statearr_29917_32722[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28851__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28851__auto____0 = (function (){
var statearr_29918 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29918[(0)] = cljs$core$async$reduce_$_state_machine__28851__auto__);

(statearr_29918[(1)] = (1));

return statearr_29918;
});
var cljs$core$async$reduce_$_state_machine__28851__auto____1 = (function (state_29896){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29896);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29919){var ex__28854__auto__ = e29919;
var statearr_29920_32727 = state_29896;
(statearr_29920_32727[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29896[(4)]))){
var statearr_29923_32729 = state_29896;
(statearr_29923_32729[(1)] = cljs.core.first((state_29896[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32732 = state_29896;
state_29896 = G__32732;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28851__auto__ = function(state_29896){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28851__auto____1.call(this,state_29896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28851__auto____0;
cljs$core$async$reduce_$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28851__auto____1;
return cljs$core$async$reduce_$_state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_29925 = f__29084__auto__();
(statearr_29925[(6)] = c__29083__auto__);

return statearr_29925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));

return c__29083__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_29932){
var state_val_29933 = (state_29932[(1)]);
if((state_val_29933 === (1))){
var inst_29927 = cljs.core.async.reduce(f__$1,init,ch);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29932__$1,(2),inst_29927);
} else {
if((state_val_29933 === (2))){
var inst_29929 = (state_29932[(2)]);
var inst_29930 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29929) : f__$1.call(null,inst_29929));
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29932__$1,inst_29930);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28851__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28851__auto____0 = (function (){
var statearr_29938 = [null,null,null,null,null,null,null];
(statearr_29938[(0)] = cljs$core$async$transduce_$_state_machine__28851__auto__);

(statearr_29938[(1)] = (1));

return statearr_29938;
});
var cljs$core$async$transduce_$_state_machine__28851__auto____1 = (function (state_29932){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29932);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e29940){var ex__28854__auto__ = e29940;
var statearr_29941_32741 = state_29932;
(statearr_29941_32741[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29932[(4)]))){
var statearr_29942_32743 = state_29932;
(statearr_29942_32743[(1)] = cljs.core.first((state_29932[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32744 = state_29932;
state_29932 = G__32744;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28851__auto__ = function(state_29932){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28851__auto____1.call(this,state_29932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28851__auto____0;
cljs$core$async$transduce_$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28851__auto____1;
return cljs$core$async$transduce_$_state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_29943 = f__29084__auto__();
(statearr_29943[(6)] = c__29083__auto__);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));

return c__29083__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29949 = arguments.length;
switch (G__29949) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_29980){
var state_val_29981 = (state_29980[(1)]);
if((state_val_29981 === (7))){
var inst_29962 = (state_29980[(2)]);
var state_29980__$1 = state_29980;
var statearr_29982_32750 = state_29980__$1;
(statearr_29982_32750[(2)] = inst_29962);

(statearr_29982_32750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (1))){
var inst_29956 = cljs.core.seq(coll);
var inst_29957 = inst_29956;
var state_29980__$1 = (function (){var statearr_29983 = state_29980;
(statearr_29983[(7)] = inst_29957);

return statearr_29983;
})();
var statearr_29984_32754 = state_29980__$1;
(statearr_29984_32754[(2)] = null);

(statearr_29984_32754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (4))){
var inst_29957 = (state_29980[(7)]);
var inst_29960 = cljs.core.first(inst_29957);
var state_29980__$1 = state_29980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29980__$1,(7),ch,inst_29960);
} else {
if((state_val_29981 === (13))){
var inst_29974 = (state_29980[(2)]);
var state_29980__$1 = state_29980;
var statearr_29987_32758 = state_29980__$1;
(statearr_29987_32758[(2)] = inst_29974);

(statearr_29987_32758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (6))){
var inst_29965 = (state_29980[(2)]);
var state_29980__$1 = state_29980;
if(cljs.core.truth_(inst_29965)){
var statearr_29988_32759 = state_29980__$1;
(statearr_29988_32759[(1)] = (8));

} else {
var statearr_29989_32760 = state_29980__$1;
(statearr_29989_32760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (3))){
var inst_29978 = (state_29980[(2)]);
var state_29980__$1 = state_29980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29980__$1,inst_29978);
} else {
if((state_val_29981 === (12))){
var state_29980__$1 = state_29980;
var statearr_29990_32764 = state_29980__$1;
(statearr_29990_32764[(2)] = null);

(statearr_29990_32764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (2))){
var inst_29957 = (state_29980[(7)]);
var state_29980__$1 = state_29980;
if(cljs.core.truth_(inst_29957)){
var statearr_29993_32769 = state_29980__$1;
(statearr_29993_32769[(1)] = (4));

} else {
var statearr_29999_32770 = state_29980__$1;
(statearr_29999_32770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (11))){
var inst_29971 = cljs.core.async.close_BANG_(ch);
var state_29980__$1 = state_29980;
var statearr_30006_32772 = state_29980__$1;
(statearr_30006_32772[(2)] = inst_29971);

(statearr_30006_32772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (9))){
var state_29980__$1 = state_29980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30012_32777 = state_29980__$1;
(statearr_30012_32777[(1)] = (11));

} else {
var statearr_30014_32778 = state_29980__$1;
(statearr_30014_32778[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (5))){
var inst_29957 = (state_29980[(7)]);
var state_29980__$1 = state_29980;
var statearr_30022_32783 = state_29980__$1;
(statearr_30022_32783[(2)] = inst_29957);

(statearr_30022_32783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (10))){
var inst_29976 = (state_29980[(2)]);
var state_29980__$1 = state_29980;
var statearr_30029_32785 = state_29980__$1;
(statearr_30029_32785[(2)] = inst_29976);

(statearr_30029_32785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29981 === (8))){
var inst_29957 = (state_29980[(7)]);
var inst_29967 = cljs.core.next(inst_29957);
var inst_29957__$1 = inst_29967;
var state_29980__$1 = (function (){var statearr_30031 = state_29980;
(statearr_30031[(7)] = inst_29957__$1);

return statearr_30031;
})();
var statearr_30032_32787 = state_29980__$1;
(statearr_30032_32787[(2)] = null);

(statearr_30032_32787[(1)] = (2));


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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_30035 = [null,null,null,null,null,null,null,null];
(statearr_30035[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_30035[(1)] = (1));

return statearr_30035;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_29980){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_29980);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e30039){var ex__28854__auto__ = e30039;
var statearr_30040_32791 = state_29980;
(statearr_30040_32791[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_29980[(4)]))){
var statearr_30041_32792 = state_29980;
(statearr_30041_32792[(1)] = cljs.core.first((state_29980[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32800 = state_29980;
state_29980 = G__32800;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_29980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_29980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_30044 = f__29084__auto__();
(statearr_30044[(6)] = c__29083__auto__);

return statearr_30044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));

return c__29083__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30050 = arguments.length;
switch (G__30050) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32821 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32821(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32827 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32827(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32829 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32829(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32834 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32834(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30097 = (function (ch,cs,meta30098){
this.ch = ch;
this.cs = cs;
this.meta30098 = meta30098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30099,meta30098__$1){
var self__ = this;
var _30099__$1 = this;
return (new cljs.core.async.t_cljs$core$async30097(self__.ch,self__.cs,meta30098__$1));
}));

(cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30099){
var self__ = this;
var _30099__$1 = this;
return self__.meta30098;
}));

(cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30098","meta30098",-392159283,null)], null);
}));

(cljs.core.async.t_cljs$core$async30097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30097");

(cljs.core.async.t_cljs$core$async30097.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30097.
 */
cljs.core.async.__GT_t_cljs$core$async30097 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30097(ch__$1,cs__$1,meta30098){
return (new cljs.core.async.t_cljs$core$async30097(ch__$1,cs__$1,meta30098));
});

}

return (new cljs.core.async.t_cljs$core$async30097(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29083__auto___32866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_30334){
var state_val_30335 = (state_30334[(1)]);
if((state_val_30335 === (7))){
var inst_30327 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30349_32867 = state_30334__$1;
(statearr_30349_32867[(2)] = inst_30327);

(statearr_30349_32867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (20))){
var inst_30194 = (state_30334[(7)]);
var inst_30206 = cljs.core.first(inst_30194);
var inst_30207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30206,(0),null);
var inst_30208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30206,(1),null);
var state_30334__$1 = (function (){var statearr_30350 = state_30334;
(statearr_30350[(8)] = inst_30207);

return statearr_30350;
})();
if(cljs.core.truth_(inst_30208)){
var statearr_30351_32872 = state_30334__$1;
(statearr_30351_32872[(1)] = (22));

} else {
var statearr_30352_32873 = state_30334__$1;
(statearr_30352_32873[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (27))){
var inst_30156 = (state_30334[(9)]);
var inst_30270 = (state_30334[(10)]);
var inst_30263 = (state_30334[(11)]);
var inst_30265 = (state_30334[(12)]);
var inst_30270__$1 = cljs.core._nth(inst_30263,inst_30265);
var inst_30271 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30270__$1,inst_30156,done);
var state_30334__$1 = (function (){var statearr_30354 = state_30334;
(statearr_30354[(10)] = inst_30270__$1);

return statearr_30354;
})();
if(cljs.core.truth_(inst_30271)){
var statearr_30356_32877 = state_30334__$1;
(statearr_30356_32877[(1)] = (30));

} else {
var statearr_30358_32878 = state_30334__$1;
(statearr_30358_32878[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (1))){
var state_30334__$1 = state_30334;
var statearr_30359_32880 = state_30334__$1;
(statearr_30359_32880[(2)] = null);

(statearr_30359_32880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (24))){
var inst_30194 = (state_30334[(7)]);
var inst_30213 = (state_30334[(2)]);
var inst_30214 = cljs.core.next(inst_30194);
var inst_30165 = inst_30214;
var inst_30167 = null;
var inst_30168 = (0);
var inst_30169 = (0);
var state_30334__$1 = (function (){var statearr_30360 = state_30334;
(statearr_30360[(13)] = inst_30169);

(statearr_30360[(14)] = inst_30168);

(statearr_30360[(15)] = inst_30165);

(statearr_30360[(16)] = inst_30167);

(statearr_30360[(17)] = inst_30213);

return statearr_30360;
})();
var statearr_30365_32881 = state_30334__$1;
(statearr_30365_32881[(2)] = null);

(statearr_30365_32881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (39))){
var state_30334__$1 = state_30334;
var statearr_30371_32885 = state_30334__$1;
(statearr_30371_32885[(2)] = null);

(statearr_30371_32885[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (4))){
var inst_30156 = (state_30334[(9)]);
var inst_30156__$1 = (state_30334[(2)]);
var inst_30157 = (inst_30156__$1 == null);
var state_30334__$1 = (function (){var statearr_30372 = state_30334;
(statearr_30372[(9)] = inst_30156__$1);

return statearr_30372;
})();
if(cljs.core.truth_(inst_30157)){
var statearr_30373_32893 = state_30334__$1;
(statearr_30373_32893[(1)] = (5));

} else {
var statearr_30374_32894 = state_30334__$1;
(statearr_30374_32894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (15))){
var inst_30169 = (state_30334[(13)]);
var inst_30168 = (state_30334[(14)]);
var inst_30165 = (state_30334[(15)]);
var inst_30167 = (state_30334[(16)]);
var inst_30189 = (state_30334[(2)]);
var inst_30190 = (inst_30169 + (1));
var tmp30368 = inst_30168;
var tmp30369 = inst_30165;
var tmp30370 = inst_30167;
var inst_30165__$1 = tmp30369;
var inst_30167__$1 = tmp30370;
var inst_30168__$1 = tmp30368;
var inst_30169__$1 = inst_30190;
var state_30334__$1 = (function (){var statearr_30379 = state_30334;
(statearr_30379[(13)] = inst_30169__$1);

(statearr_30379[(14)] = inst_30168__$1);

(statearr_30379[(15)] = inst_30165__$1);

(statearr_30379[(18)] = inst_30189);

(statearr_30379[(16)] = inst_30167__$1);

return statearr_30379;
})();
var statearr_30380_32897 = state_30334__$1;
(statearr_30380_32897[(2)] = null);

(statearr_30380_32897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (21))){
var inst_30217 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30384_32898 = state_30334__$1;
(statearr_30384_32898[(2)] = inst_30217);

(statearr_30384_32898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (31))){
var inst_30270 = (state_30334[(10)]);
var inst_30283 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30270);
var state_30334__$1 = state_30334;
var statearr_30385_32899 = state_30334__$1;
(statearr_30385_32899[(2)] = inst_30283);

(statearr_30385_32899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (32))){
var inst_30262 = (state_30334[(19)]);
var inst_30263 = (state_30334[(11)]);
var inst_30265 = (state_30334[(12)]);
var inst_30264 = (state_30334[(20)]);
var inst_30285 = (state_30334[(2)]);
var inst_30286 = (inst_30265 + (1));
var tmp30381 = inst_30262;
var tmp30382 = inst_30263;
var tmp30383 = inst_30264;
var inst_30262__$1 = tmp30381;
var inst_30263__$1 = tmp30382;
var inst_30264__$1 = tmp30383;
var inst_30265__$1 = inst_30286;
var state_30334__$1 = (function (){var statearr_30386 = state_30334;
(statearr_30386[(21)] = inst_30285);

(statearr_30386[(19)] = inst_30262__$1);

(statearr_30386[(11)] = inst_30263__$1);

(statearr_30386[(12)] = inst_30265__$1);

(statearr_30386[(20)] = inst_30264__$1);

return statearr_30386;
})();
var statearr_30387_32904 = state_30334__$1;
(statearr_30387_32904[(2)] = null);

(statearr_30387_32904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (40))){
var inst_30300 = (state_30334[(22)]);
var inst_30304 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30300);
var state_30334__$1 = state_30334;
var statearr_30422_32908 = state_30334__$1;
(statearr_30422_32908[(2)] = inst_30304);

(statearr_30422_32908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (33))){
var inst_30290 = (state_30334[(23)]);
var inst_30292 = cljs.core.chunked_seq_QMARK_(inst_30290);
var state_30334__$1 = state_30334;
if(inst_30292){
var statearr_30423_32910 = state_30334__$1;
(statearr_30423_32910[(1)] = (36));

} else {
var statearr_30425_32911 = state_30334__$1;
(statearr_30425_32911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (13))){
var inst_30182 = (state_30334[(24)]);
var inst_30186 = cljs.core.async.close_BANG_(inst_30182);
var state_30334__$1 = state_30334;
var statearr_30426_32912 = state_30334__$1;
(statearr_30426_32912[(2)] = inst_30186);

(statearr_30426_32912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (22))){
var inst_30207 = (state_30334[(8)]);
var inst_30210 = cljs.core.async.close_BANG_(inst_30207);
var state_30334__$1 = state_30334;
var statearr_30427_32913 = state_30334__$1;
(statearr_30427_32913[(2)] = inst_30210);

(statearr_30427_32913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (36))){
var inst_30290 = (state_30334[(23)]);
var inst_30294 = cljs.core.chunk_first(inst_30290);
var inst_30295 = cljs.core.chunk_rest(inst_30290);
var inst_30296 = cljs.core.count(inst_30294);
var inst_30262 = inst_30295;
var inst_30263 = inst_30294;
var inst_30264 = inst_30296;
var inst_30265 = (0);
var state_30334__$1 = (function (){var statearr_30428 = state_30334;
(statearr_30428[(19)] = inst_30262);

(statearr_30428[(11)] = inst_30263);

(statearr_30428[(12)] = inst_30265);

(statearr_30428[(20)] = inst_30264);

return statearr_30428;
})();
var statearr_30430_32924 = state_30334__$1;
(statearr_30430_32924[(2)] = null);

(statearr_30430_32924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (41))){
var inst_30290 = (state_30334[(23)]);
var inst_30306 = (state_30334[(2)]);
var inst_30307 = cljs.core.next(inst_30290);
var inst_30262 = inst_30307;
var inst_30263 = null;
var inst_30264 = (0);
var inst_30265 = (0);
var state_30334__$1 = (function (){var statearr_30431 = state_30334;
(statearr_30431[(19)] = inst_30262);

(statearr_30431[(25)] = inst_30306);

(statearr_30431[(11)] = inst_30263);

(statearr_30431[(12)] = inst_30265);

(statearr_30431[(20)] = inst_30264);

return statearr_30431;
})();
var statearr_30434_32929 = state_30334__$1;
(statearr_30434_32929[(2)] = null);

(statearr_30434_32929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (43))){
var state_30334__$1 = state_30334;
var statearr_30435_32930 = state_30334__$1;
(statearr_30435_32930[(2)] = null);

(statearr_30435_32930[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (29))){
var inst_30315 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30436_32931 = state_30334__$1;
(statearr_30436_32931[(2)] = inst_30315);

(statearr_30436_32931[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (44))){
var inst_30324 = (state_30334[(2)]);
var state_30334__$1 = (function (){var statearr_30437 = state_30334;
(statearr_30437[(26)] = inst_30324);

return statearr_30437;
})();
var statearr_30438_32932 = state_30334__$1;
(statearr_30438_32932[(2)] = null);

(statearr_30438_32932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (6))){
var inst_30254 = (state_30334[(27)]);
var inst_30253 = cljs.core.deref(cs);
var inst_30254__$1 = cljs.core.keys(inst_30253);
var inst_30255 = cljs.core.count(inst_30254__$1);
var inst_30256 = cljs.core.reset_BANG_(dctr,inst_30255);
var inst_30261 = cljs.core.seq(inst_30254__$1);
var inst_30262 = inst_30261;
var inst_30263 = null;
var inst_30264 = (0);
var inst_30265 = (0);
var state_30334__$1 = (function (){var statearr_30439 = state_30334;
(statearr_30439[(19)] = inst_30262);

(statearr_30439[(11)] = inst_30263);

(statearr_30439[(12)] = inst_30265);

(statearr_30439[(28)] = inst_30256);

(statearr_30439[(20)] = inst_30264);

(statearr_30439[(27)] = inst_30254__$1);

return statearr_30439;
})();
var statearr_30440_32937 = state_30334__$1;
(statearr_30440_32937[(2)] = null);

(statearr_30440_32937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (28))){
var inst_30262 = (state_30334[(19)]);
var inst_30290 = (state_30334[(23)]);
var inst_30290__$1 = cljs.core.seq(inst_30262);
var state_30334__$1 = (function (){var statearr_30441 = state_30334;
(statearr_30441[(23)] = inst_30290__$1);

return statearr_30441;
})();
if(inst_30290__$1){
var statearr_30442_32939 = state_30334__$1;
(statearr_30442_32939[(1)] = (33));

} else {
var statearr_30443_32941 = state_30334__$1;
(statearr_30443_32941[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (25))){
var inst_30265 = (state_30334[(12)]);
var inst_30264 = (state_30334[(20)]);
var inst_30267 = (inst_30265 < inst_30264);
var inst_30268 = inst_30267;
var state_30334__$1 = state_30334;
if(cljs.core.truth_(inst_30268)){
var statearr_30444_32942 = state_30334__$1;
(statearr_30444_32942[(1)] = (27));

} else {
var statearr_30445_32943 = state_30334__$1;
(statearr_30445_32943[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (34))){
var state_30334__$1 = state_30334;
var statearr_30446_32950 = state_30334__$1;
(statearr_30446_32950[(2)] = null);

(statearr_30446_32950[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (17))){
var state_30334__$1 = state_30334;
var statearr_30447_32951 = state_30334__$1;
(statearr_30447_32951[(2)] = null);

(statearr_30447_32951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (3))){
var inst_30329 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30334__$1,inst_30329);
} else {
if((state_val_30335 === (12))){
var inst_30248 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30468_32952 = state_30334__$1;
(statearr_30468_32952[(2)] = inst_30248);

(statearr_30468_32952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (2))){
var state_30334__$1 = state_30334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30334__$1,(4),ch);
} else {
if((state_val_30335 === (23))){
var state_30334__$1 = state_30334;
var statearr_30470_32953 = state_30334__$1;
(statearr_30470_32953[(2)] = null);

(statearr_30470_32953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (35))){
var inst_30313 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30471_32958 = state_30334__$1;
(statearr_30471_32958[(2)] = inst_30313);

(statearr_30471_32958[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (19))){
var inst_30194 = (state_30334[(7)]);
var inst_30198 = cljs.core.chunk_first(inst_30194);
var inst_30199 = cljs.core.chunk_rest(inst_30194);
var inst_30200 = cljs.core.count(inst_30198);
var inst_30165 = inst_30199;
var inst_30167 = inst_30198;
var inst_30168 = inst_30200;
var inst_30169 = (0);
var state_30334__$1 = (function (){var statearr_30472 = state_30334;
(statearr_30472[(13)] = inst_30169);

(statearr_30472[(14)] = inst_30168);

(statearr_30472[(15)] = inst_30165);

(statearr_30472[(16)] = inst_30167);

return statearr_30472;
})();
var statearr_30473_32963 = state_30334__$1;
(statearr_30473_32963[(2)] = null);

(statearr_30473_32963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (11))){
var inst_30194 = (state_30334[(7)]);
var inst_30165 = (state_30334[(15)]);
var inst_30194__$1 = cljs.core.seq(inst_30165);
var state_30334__$1 = (function (){var statearr_30477 = state_30334;
(statearr_30477[(7)] = inst_30194__$1);

return statearr_30477;
})();
if(inst_30194__$1){
var statearr_30481_32964 = state_30334__$1;
(statearr_30481_32964[(1)] = (16));

} else {
var statearr_30483_32968 = state_30334__$1;
(statearr_30483_32968[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (9))){
var inst_30250 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30485_32970 = state_30334__$1;
(statearr_30485_32970[(2)] = inst_30250);

(statearr_30485_32970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (5))){
var inst_30163 = cljs.core.deref(cs);
var inst_30164 = cljs.core.seq(inst_30163);
var inst_30165 = inst_30164;
var inst_30167 = null;
var inst_30168 = (0);
var inst_30169 = (0);
var state_30334__$1 = (function (){var statearr_30487 = state_30334;
(statearr_30487[(13)] = inst_30169);

(statearr_30487[(14)] = inst_30168);

(statearr_30487[(15)] = inst_30165);

(statearr_30487[(16)] = inst_30167);

return statearr_30487;
})();
var statearr_30488_32977 = state_30334__$1;
(statearr_30488_32977[(2)] = null);

(statearr_30488_32977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (14))){
var state_30334__$1 = state_30334;
var statearr_30490_32979 = state_30334__$1;
(statearr_30490_32979[(2)] = null);

(statearr_30490_32979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (45))){
var inst_30321 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30491_32980 = state_30334__$1;
(statearr_30491_32980[(2)] = inst_30321);

(statearr_30491_32980[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (26))){
var inst_30254 = (state_30334[(27)]);
var inst_30317 = (state_30334[(2)]);
var inst_30318 = cljs.core.seq(inst_30254);
var state_30334__$1 = (function (){var statearr_30494 = state_30334;
(statearr_30494[(29)] = inst_30317);

return statearr_30494;
})();
if(inst_30318){
var statearr_30496_32981 = state_30334__$1;
(statearr_30496_32981[(1)] = (42));

} else {
var statearr_30506_32982 = state_30334__$1;
(statearr_30506_32982[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (16))){
var inst_30194 = (state_30334[(7)]);
var inst_30196 = cljs.core.chunked_seq_QMARK_(inst_30194);
var state_30334__$1 = state_30334;
if(inst_30196){
var statearr_30508_32986 = state_30334__$1;
(statearr_30508_32986[(1)] = (19));

} else {
var statearr_30509_32988 = state_30334__$1;
(statearr_30509_32988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (38))){
var inst_30310 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30512_32990 = state_30334__$1;
(statearr_30512_32990[(2)] = inst_30310);

(statearr_30512_32990[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (30))){
var state_30334__$1 = state_30334;
var statearr_30513_32991 = state_30334__$1;
(statearr_30513_32991[(2)] = null);

(statearr_30513_32991[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (10))){
var inst_30169 = (state_30334[(13)]);
var inst_30167 = (state_30334[(16)]);
var inst_30179 = cljs.core._nth(inst_30167,inst_30169);
var inst_30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30179,(0),null);
var inst_30184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30179,(1),null);
var state_30334__$1 = (function (){var statearr_30514 = state_30334;
(statearr_30514[(24)] = inst_30182);

return statearr_30514;
})();
if(cljs.core.truth_(inst_30184)){
var statearr_30515_32992 = state_30334__$1;
(statearr_30515_32992[(1)] = (13));

} else {
var statearr_30516_32993 = state_30334__$1;
(statearr_30516_32993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (18))){
var inst_30239 = (state_30334[(2)]);
var state_30334__$1 = state_30334;
var statearr_30519_32994 = state_30334__$1;
(statearr_30519_32994[(2)] = inst_30239);

(statearr_30519_32994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (42))){
var state_30334__$1 = state_30334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30334__$1,(45),dchan);
} else {
if((state_val_30335 === (37))){
var inst_30156 = (state_30334[(9)]);
var inst_30300 = (state_30334[(22)]);
var inst_30290 = (state_30334[(23)]);
var inst_30300__$1 = cljs.core.first(inst_30290);
var inst_30301 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30300__$1,inst_30156,done);
var state_30334__$1 = (function (){var statearr_30529 = state_30334;
(statearr_30529[(22)] = inst_30300__$1);

return statearr_30529;
})();
if(cljs.core.truth_(inst_30301)){
var statearr_30530_33000 = state_30334__$1;
(statearr_30530_33000[(1)] = (39));

} else {
var statearr_30532_33001 = state_30334__$1;
(statearr_30532_33001[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30335 === (8))){
var inst_30169 = (state_30334[(13)]);
var inst_30168 = (state_30334[(14)]);
var inst_30172 = (inst_30169 < inst_30168);
var inst_30173 = inst_30172;
var state_30334__$1 = state_30334;
if(cljs.core.truth_(inst_30173)){
var statearr_30534_33006 = state_30334__$1;
(statearr_30534_33006[(1)] = (10));

} else {
var statearr_30536_33007 = state_30334__$1;
(statearr_30536_33007[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28851__auto__ = null;
var cljs$core$async$mult_$_state_machine__28851__auto____0 = (function (){
var statearr_30544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30544[(0)] = cljs$core$async$mult_$_state_machine__28851__auto__);

(statearr_30544[(1)] = (1));

return statearr_30544;
});
var cljs$core$async$mult_$_state_machine__28851__auto____1 = (function (state_30334){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_30334);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e30545){var ex__28854__auto__ = e30545;
var statearr_30546_33009 = state_30334;
(statearr_30546_33009[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_30334[(4)]))){
var statearr_30547_33010 = state_30334;
(statearr_30547_33010[(1)] = cljs.core.first((state_30334[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33011 = state_30334;
state_30334 = G__33011;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28851__auto__ = function(state_30334){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28851__auto____1.call(this,state_30334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28851__auto____0;
cljs$core$async$mult_$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28851__auto____1;
return cljs$core$async$mult_$_state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_30548 = f__29084__auto__();
(statearr_30548[(6)] = c__29083__auto___32866);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
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
var G__30550 = arguments.length;
switch (G__30550) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33016 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33016(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33018 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33018(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33021 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33021(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33026 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33026(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33029 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33029(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33031 = arguments.length;
var i__4737__auto___33032 = (0);
while(true){
if((i__4737__auto___33032 < len__4736__auto___33031)){
args__4742__auto__.push((arguments[i__4737__auto___33032]));

var G__33034 = (i__4737__auto___33032 + (1));
i__4737__auto___33032 = G__33034;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30587){
var map__30588 = p__30587;
var map__30588__$1 = (((((!((map__30588 == null))))?(((((map__30588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30588):map__30588);
var opts = map__30588__$1;
var statearr_30591_33035 = state;
(statearr_30591_33035[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30592_33036 = state;
(statearr_30592_33036[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30593_33037 = state;
(statearr_30593_33037[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30578){
var G__30579 = cljs.core.first(seq30578);
var seq30578__$1 = cljs.core.next(seq30578);
var G__30580 = cljs.core.first(seq30578__$1);
var seq30578__$2 = cljs.core.next(seq30578__$1);
var G__30581 = cljs.core.first(seq30578__$2);
var seq30578__$3 = cljs.core.next(seq30578__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30579,G__30580,G__30581,seq30578__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30599 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30600){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30600 = meta30600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30601,meta30600__$1){
var self__ = this;
var _30601__$1 = this;
return (new cljs.core.async.t_cljs$core$async30599(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30600__$1));
}));

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30601){
var self__ = this;
var _30601__$1 = this;
return self__.meta30600;
}));

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30599.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30600","meta30600",-1906836243,null)], null);
}));

(cljs.core.async.t_cljs$core$async30599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30599");

(cljs.core.async.t_cljs$core$async30599.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30599.
 */
cljs.core.async.__GT_t_cljs$core$async30599 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30599(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30600){
return (new cljs.core.async.t_cljs$core$async30599(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30600));
});

}

return (new cljs.core.async.t_cljs$core$async30599(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29083__auto___33050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_30713){
var state_val_30714 = (state_30713[(1)]);
if((state_val_30714 === (7))){
var inst_30627 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
var statearr_30715_33053 = state_30713__$1;
(statearr_30715_33053[(2)] = inst_30627);

(statearr_30715_33053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (20))){
var inst_30639 = (state_30713[(7)]);
var state_30713__$1 = state_30713;
var statearr_30716_33058 = state_30713__$1;
(statearr_30716_33058[(2)] = inst_30639);

(statearr_30716_33058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (27))){
var state_30713__$1 = state_30713;
var statearr_30717_33059 = state_30713__$1;
(statearr_30717_33059[(2)] = null);

(statearr_30717_33059[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (1))){
var inst_30614 = (state_30713[(8)]);
var inst_30614__$1 = calc_state();
var inst_30616 = (inst_30614__$1 == null);
var inst_30617 = cljs.core.not(inst_30616);
var state_30713__$1 = (function (){var statearr_30720 = state_30713;
(statearr_30720[(8)] = inst_30614__$1);

return statearr_30720;
})();
if(inst_30617){
var statearr_30723_33067 = state_30713__$1;
(statearr_30723_33067[(1)] = (2));

} else {
var statearr_30726_33068 = state_30713__$1;
(statearr_30726_33068[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (24))){
var inst_30664 = (state_30713[(9)]);
var inst_30687 = (state_30713[(10)]);
var inst_30673 = (state_30713[(11)]);
var inst_30687__$1 = (inst_30664.cljs$core$IFn$_invoke$arity$1 ? inst_30664.cljs$core$IFn$_invoke$arity$1(inst_30673) : inst_30664.call(null,inst_30673));
var state_30713__$1 = (function (){var statearr_30727 = state_30713;
(statearr_30727[(10)] = inst_30687__$1);

return statearr_30727;
})();
if(cljs.core.truth_(inst_30687__$1)){
var statearr_30728_33075 = state_30713__$1;
(statearr_30728_33075[(1)] = (29));

} else {
var statearr_30729_33077 = state_30713__$1;
(statearr_30729_33077[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (4))){
var inst_30630 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
if(cljs.core.truth_(inst_30630)){
var statearr_30731_33085 = state_30713__$1;
(statearr_30731_33085[(1)] = (8));

} else {
var statearr_30732_33086 = state_30713__$1;
(statearr_30732_33086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (15))){
var inst_30657 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
if(cljs.core.truth_(inst_30657)){
var statearr_30733_33087 = state_30713__$1;
(statearr_30733_33087[(1)] = (19));

} else {
var statearr_30734_33092 = state_30713__$1;
(statearr_30734_33092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (21))){
var inst_30662 = (state_30713[(12)]);
var inst_30662__$1 = (state_30713[(2)]);
var inst_30664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30662__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30662__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30662__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30713__$1 = (function (){var statearr_30737 = state_30713;
(statearr_30737[(12)] = inst_30662__$1);

(statearr_30737[(9)] = inst_30664);

(statearr_30737[(13)] = inst_30665);

return statearr_30737;
})();
return cljs.core.async.ioc_alts_BANG_(state_30713__$1,(22),inst_30666);
} else {
if((state_val_30714 === (31))){
var inst_30695 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
if(cljs.core.truth_(inst_30695)){
var statearr_30738_33105 = state_30713__$1;
(statearr_30738_33105[(1)] = (32));

} else {
var statearr_30739_33107 = state_30713__$1;
(statearr_30739_33107[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (32))){
var inst_30672 = (state_30713[(14)]);
var state_30713__$1 = state_30713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30713__$1,(35),out,inst_30672);
} else {
if((state_val_30714 === (33))){
var inst_30662 = (state_30713[(12)]);
var inst_30639 = inst_30662;
var state_30713__$1 = (function (){var statearr_30740 = state_30713;
(statearr_30740[(7)] = inst_30639);

return statearr_30740;
})();
var statearr_30741_33122 = state_30713__$1;
(statearr_30741_33122[(2)] = null);

(statearr_30741_33122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (13))){
var inst_30639 = (state_30713[(7)]);
var inst_30646 = inst_30639.cljs$lang$protocol_mask$partition0$;
var inst_30647 = (inst_30646 & (64));
var inst_30648 = inst_30639.cljs$core$ISeq$;
var inst_30649 = (cljs.core.PROTOCOL_SENTINEL === inst_30648);
var inst_30650 = ((inst_30647) || (inst_30649));
var state_30713__$1 = state_30713;
if(cljs.core.truth_(inst_30650)){
var statearr_30742_33126 = state_30713__$1;
(statearr_30742_33126[(1)] = (16));

} else {
var statearr_30743_33127 = state_30713__$1;
(statearr_30743_33127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (22))){
var inst_30672 = (state_30713[(14)]);
var inst_30673 = (state_30713[(11)]);
var inst_30671 = (state_30713[(2)]);
var inst_30672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30671,(0),null);
var inst_30673__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30671,(1),null);
var inst_30674 = (inst_30672__$1 == null);
var inst_30675 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30673__$1,change);
var inst_30676 = ((inst_30674) || (inst_30675));
var state_30713__$1 = (function (){var statearr_30756 = state_30713;
(statearr_30756[(14)] = inst_30672__$1);

(statearr_30756[(11)] = inst_30673__$1);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30676)){
var statearr_30761_33181 = state_30713__$1;
(statearr_30761_33181[(1)] = (23));

} else {
var statearr_30762_33182 = state_30713__$1;
(statearr_30762_33182[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (36))){
var inst_30662 = (state_30713[(12)]);
var inst_30639 = inst_30662;
var state_30713__$1 = (function (){var statearr_30764 = state_30713;
(statearr_30764[(7)] = inst_30639);

return statearr_30764;
})();
var statearr_30765_33183 = state_30713__$1;
(statearr_30765_33183[(2)] = null);

(statearr_30765_33183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (29))){
var inst_30687 = (state_30713[(10)]);
var state_30713__$1 = state_30713;
var statearr_30767_33184 = state_30713__$1;
(statearr_30767_33184[(2)] = inst_30687);

(statearr_30767_33184[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (6))){
var state_30713__$1 = state_30713;
var statearr_30768_33187 = state_30713__$1;
(statearr_30768_33187[(2)] = false);

(statearr_30768_33187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (28))){
var inst_30683 = (state_30713[(2)]);
var inst_30684 = calc_state();
var inst_30639 = inst_30684;
var state_30713__$1 = (function (){var statearr_30770 = state_30713;
(statearr_30770[(7)] = inst_30639);

(statearr_30770[(15)] = inst_30683);

return statearr_30770;
})();
var statearr_30771_33190 = state_30713__$1;
(statearr_30771_33190[(2)] = null);

(statearr_30771_33190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (25))){
var inst_30709 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
var statearr_30772_33192 = state_30713__$1;
(statearr_30772_33192[(2)] = inst_30709);

(statearr_30772_33192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (34))){
var inst_30707 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
var statearr_30773_33193 = state_30713__$1;
(statearr_30773_33193[(2)] = inst_30707);

(statearr_30773_33193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (17))){
var state_30713__$1 = state_30713;
var statearr_30774_33194 = state_30713__$1;
(statearr_30774_33194[(2)] = false);

(statearr_30774_33194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (3))){
var state_30713__$1 = state_30713;
var statearr_30775_33202 = state_30713__$1;
(statearr_30775_33202[(2)] = false);

(statearr_30775_33202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (12))){
var inst_30711 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30713__$1,inst_30711);
} else {
if((state_val_30714 === (2))){
var inst_30614 = (state_30713[(8)]);
var inst_30619 = inst_30614.cljs$lang$protocol_mask$partition0$;
var inst_30620 = (inst_30619 & (64));
var inst_30621 = inst_30614.cljs$core$ISeq$;
var inst_30622 = (cljs.core.PROTOCOL_SENTINEL === inst_30621);
var inst_30623 = ((inst_30620) || (inst_30622));
var state_30713__$1 = state_30713;
if(cljs.core.truth_(inst_30623)){
var statearr_30778_33216 = state_30713__$1;
(statearr_30778_33216[(1)] = (5));

} else {
var statearr_30779_33217 = state_30713__$1;
(statearr_30779_33217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (23))){
var inst_30672 = (state_30713[(14)]);
var inst_30678 = (inst_30672 == null);
var state_30713__$1 = state_30713;
if(cljs.core.truth_(inst_30678)){
var statearr_30780_33218 = state_30713__$1;
(statearr_30780_33218[(1)] = (26));

} else {
var statearr_30781_33219 = state_30713__$1;
(statearr_30781_33219[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (35))){
var inst_30698 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
if(cljs.core.truth_(inst_30698)){
var statearr_30782_33221 = state_30713__$1;
(statearr_30782_33221[(1)] = (36));

} else {
var statearr_30783_33225 = state_30713__$1;
(statearr_30783_33225[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (19))){
var inst_30639 = (state_30713[(7)]);
var inst_30659 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30639);
var state_30713__$1 = state_30713;
var statearr_30784_33226 = state_30713__$1;
(statearr_30784_33226[(2)] = inst_30659);

(statearr_30784_33226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (11))){
var inst_30639 = (state_30713[(7)]);
var inst_30643 = (inst_30639 == null);
var inst_30644 = cljs.core.not(inst_30643);
var state_30713__$1 = state_30713;
if(inst_30644){
var statearr_30785_33231 = state_30713__$1;
(statearr_30785_33231[(1)] = (13));

} else {
var statearr_30786_33235 = state_30713__$1;
(statearr_30786_33235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (9))){
var inst_30614 = (state_30713[(8)]);
var state_30713__$1 = state_30713;
var statearr_30787_33236 = state_30713__$1;
(statearr_30787_33236[(2)] = inst_30614);

(statearr_30787_33236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (5))){
var state_30713__$1 = state_30713;
var statearr_30788_33241 = state_30713__$1;
(statearr_30788_33241[(2)] = true);

(statearr_30788_33241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (14))){
var state_30713__$1 = state_30713;
var statearr_30789_33242 = state_30713__$1;
(statearr_30789_33242[(2)] = false);

(statearr_30789_33242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (26))){
var inst_30673 = (state_30713[(11)]);
var inst_30680 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30673);
var state_30713__$1 = state_30713;
var statearr_30796_33243 = state_30713__$1;
(statearr_30796_33243[(2)] = inst_30680);

(statearr_30796_33243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (16))){
var state_30713__$1 = state_30713;
var statearr_30797_33247 = state_30713__$1;
(statearr_30797_33247[(2)] = true);

(statearr_30797_33247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (38))){
var inst_30703 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
var statearr_30798_33248 = state_30713__$1;
(statearr_30798_33248[(2)] = inst_30703);

(statearr_30798_33248[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (30))){
var inst_30664 = (state_30713[(9)]);
var inst_30665 = (state_30713[(13)]);
var inst_30673 = (state_30713[(11)]);
var inst_30690 = cljs.core.empty_QMARK_(inst_30664);
var inst_30691 = (inst_30665.cljs$core$IFn$_invoke$arity$1 ? inst_30665.cljs$core$IFn$_invoke$arity$1(inst_30673) : inst_30665.call(null,inst_30673));
var inst_30692 = cljs.core.not(inst_30691);
var inst_30693 = ((inst_30690) && (inst_30692));
var state_30713__$1 = state_30713;
var statearr_30799_33251 = state_30713__$1;
(statearr_30799_33251[(2)] = inst_30693);

(statearr_30799_33251[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (10))){
var inst_30614 = (state_30713[(8)]);
var inst_30635 = (state_30713[(2)]);
var inst_30636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30635,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30635,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30635,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30639 = inst_30614;
var state_30713__$1 = (function (){var statearr_30801 = state_30713;
(statearr_30801[(16)] = inst_30637);

(statearr_30801[(7)] = inst_30639);

(statearr_30801[(17)] = inst_30636);

(statearr_30801[(18)] = inst_30638);

return statearr_30801;
})();
var statearr_30802_33282 = state_30713__$1;
(statearr_30802_33282[(2)] = null);

(statearr_30802_33282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (18))){
var inst_30654 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
var statearr_30804_33283 = state_30713__$1;
(statearr_30804_33283[(2)] = inst_30654);

(statearr_30804_33283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (37))){
var state_30713__$1 = state_30713;
var statearr_30805_33284 = state_30713__$1;
(statearr_30805_33284[(2)] = null);

(statearr_30805_33284[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (8))){
var inst_30614 = (state_30713[(8)]);
var inst_30632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30614);
var state_30713__$1 = state_30713;
var statearr_30806_33289 = state_30713__$1;
(statearr_30806_33289[(2)] = inst_30632);

(statearr_30806_33289[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28851__auto__ = null;
var cljs$core$async$mix_$_state_machine__28851__auto____0 = (function (){
var statearr_30809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30809[(0)] = cljs$core$async$mix_$_state_machine__28851__auto__);

(statearr_30809[(1)] = (1));

return statearr_30809;
});
var cljs$core$async$mix_$_state_machine__28851__auto____1 = (function (state_30713){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_30713);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e30810){var ex__28854__auto__ = e30810;
var statearr_30811_33295 = state_30713;
(statearr_30811_33295[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_30713[(4)]))){
var statearr_30812_33296 = state_30713;
(statearr_30812_33296[(1)] = cljs.core.first((state_30713[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33298 = state_30713;
state_30713 = G__33298;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28851__auto__ = function(state_30713){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28851__auto____1.call(this,state_30713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28851__auto____0;
cljs$core$async$mix_$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28851__auto____1;
return cljs$core$async$mix_$_state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_30813 = f__29084__auto__();
(statearr_30813[(6)] = c__29083__auto___33050);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33305 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33305(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33307 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33307(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33309 = (function() {
var G__33310 = null;
var G__33310__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33310__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33310 = function(p,v){
switch(arguments.length){
case 1:
return G__33310__1.call(this,p);
case 2:
return G__33310__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33310.cljs$core$IFn$_invoke$arity$1 = G__33310__1;
G__33310.cljs$core$IFn$_invoke$arity$2 = G__33310__2;
return G__33310;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30824 = arguments.length;
switch (G__30824) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33309(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33309(p,v);
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
var G__30850 = arguments.length;
switch (G__30850) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30846_SHARP_){
if(cljs.core.truth_((p1__30846_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30846_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30846_SHARP_.call(null,topic)))){
return p1__30846_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30846_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30858 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30859){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30859 = meta30859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30860,meta30859__$1){
var self__ = this;
var _30860__$1 = this;
return (new cljs.core.async.t_cljs$core$async30858(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30859__$1));
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30860){
var self__ = this;
var _30860__$1 = this;
return self__.meta30859;
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30859","meta30859",-1940151226,null)], null);
}));

(cljs.core.async.t_cljs$core$async30858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30858");

(cljs.core.async.t_cljs$core$async30858.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30858.
 */
cljs.core.async.__GT_t_cljs$core$async30858 = (function cljs$core$async$__GT_t_cljs$core$async30858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30859){
return (new cljs.core.async.t_cljs$core$async30858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30859));
});

}

return (new cljs.core.async.t_cljs$core$async30858(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29083__auto___33329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_30961){
var state_val_30962 = (state_30961[(1)]);
if((state_val_30962 === (7))){
var inst_30957 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_30964_33331 = state_30961__$1;
(statearr_30964_33331[(2)] = inst_30957);

(statearr_30964_33331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (20))){
var state_30961__$1 = state_30961;
var statearr_30965_33332 = state_30961__$1;
(statearr_30965_33332[(2)] = null);

(statearr_30965_33332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (1))){
var state_30961__$1 = state_30961;
var statearr_30967_33336 = state_30961__$1;
(statearr_30967_33336[(2)] = null);

(statearr_30967_33336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (24))){
var inst_30940 = (state_30961[(7)]);
var inst_30949 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30940);
var state_30961__$1 = state_30961;
var statearr_30969_33337 = state_30961__$1;
(statearr_30969_33337[(2)] = inst_30949);

(statearr_30969_33337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (4))){
var inst_30886 = (state_30961[(8)]);
var inst_30886__$1 = (state_30961[(2)]);
var inst_30887 = (inst_30886__$1 == null);
var state_30961__$1 = (function (){var statearr_30970 = state_30961;
(statearr_30970[(8)] = inst_30886__$1);

return statearr_30970;
})();
if(cljs.core.truth_(inst_30887)){
var statearr_30971_33338 = state_30961__$1;
(statearr_30971_33338[(1)] = (5));

} else {
var statearr_30972_33339 = state_30961__$1;
(statearr_30972_33339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (15))){
var inst_30934 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_30976_33340 = state_30961__$1;
(statearr_30976_33340[(2)] = inst_30934);

(statearr_30976_33340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (21))){
var inst_30954 = (state_30961[(2)]);
var state_30961__$1 = (function (){var statearr_30977 = state_30961;
(statearr_30977[(9)] = inst_30954);

return statearr_30977;
})();
var statearr_30978_33341 = state_30961__$1;
(statearr_30978_33341[(2)] = null);

(statearr_30978_33341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (13))){
var inst_30914 = (state_30961[(10)]);
var inst_30916 = cljs.core.chunked_seq_QMARK_(inst_30914);
var state_30961__$1 = state_30961;
if(inst_30916){
var statearr_30979_33342 = state_30961__$1;
(statearr_30979_33342[(1)] = (16));

} else {
var statearr_30980_33343 = state_30961__$1;
(statearr_30980_33343[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (22))){
var inst_30946 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
if(cljs.core.truth_(inst_30946)){
var statearr_30982_33344 = state_30961__$1;
(statearr_30982_33344[(1)] = (23));

} else {
var statearr_30985_33345 = state_30961__$1;
(statearr_30985_33345[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (6))){
var inst_30886 = (state_30961[(8)]);
var inst_30940 = (state_30961[(7)]);
var inst_30942 = (state_30961[(11)]);
var inst_30940__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30886) : topic_fn.call(null,inst_30886));
var inst_30941 = cljs.core.deref(mults);
var inst_30942__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30941,inst_30940__$1);
var state_30961__$1 = (function (){var statearr_31022 = state_30961;
(statearr_31022[(7)] = inst_30940__$1);

(statearr_31022[(11)] = inst_30942__$1);

return statearr_31022;
})();
if(cljs.core.truth_(inst_30942__$1)){
var statearr_31023_33346 = state_30961__$1;
(statearr_31023_33346[(1)] = (19));

} else {
var statearr_31024_33347 = state_30961__$1;
(statearr_31024_33347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (25))){
var inst_30951 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_31025_33349 = state_30961__$1;
(statearr_31025_33349[(2)] = inst_30951);

(statearr_31025_33349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (17))){
var inst_30914 = (state_30961[(10)]);
var inst_30924 = cljs.core.first(inst_30914);
var inst_30925 = cljs.core.async.muxch_STAR_(inst_30924);
var inst_30926 = cljs.core.async.close_BANG_(inst_30925);
var inst_30928 = cljs.core.next(inst_30914);
var inst_30896 = inst_30928;
var inst_30897 = null;
var inst_30898 = (0);
var inst_30899 = (0);
var state_30961__$1 = (function (){var statearr_31029 = state_30961;
(statearr_31029[(12)] = inst_30897);

(statearr_31029[(13)] = inst_30898);

(statearr_31029[(14)] = inst_30896);

(statearr_31029[(15)] = inst_30926);

(statearr_31029[(16)] = inst_30899);

return statearr_31029;
})();
var statearr_31030_33357 = state_30961__$1;
(statearr_31030_33357[(2)] = null);

(statearr_31030_33357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (3))){
var inst_30959 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30961__$1,inst_30959);
} else {
if((state_val_30962 === (12))){
var inst_30936 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_31031_33362 = state_30961__$1;
(statearr_31031_33362[(2)] = inst_30936);

(statearr_31031_33362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (2))){
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30961__$1,(4),ch);
} else {
if((state_val_30962 === (23))){
var state_30961__$1 = state_30961;
var statearr_31034_33364 = state_30961__$1;
(statearr_31034_33364[(2)] = null);

(statearr_31034_33364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (19))){
var inst_30886 = (state_30961[(8)]);
var inst_30942 = (state_30961[(11)]);
var inst_30944 = cljs.core.async.muxch_STAR_(inst_30942);
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30961__$1,(22),inst_30944,inst_30886);
} else {
if((state_val_30962 === (11))){
var inst_30914 = (state_30961[(10)]);
var inst_30896 = (state_30961[(14)]);
var inst_30914__$1 = cljs.core.seq(inst_30896);
var state_30961__$1 = (function (){var statearr_31045 = state_30961;
(statearr_31045[(10)] = inst_30914__$1);

return statearr_31045;
})();
if(inst_30914__$1){
var statearr_31046_33366 = state_30961__$1;
(statearr_31046_33366[(1)] = (13));

} else {
var statearr_31047_33367 = state_30961__$1;
(statearr_31047_33367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (9))){
var inst_30938 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_31053_33372 = state_30961__$1;
(statearr_31053_33372[(2)] = inst_30938);

(statearr_31053_33372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (5))){
var inst_30893 = cljs.core.deref(mults);
var inst_30894 = cljs.core.vals(inst_30893);
var inst_30895 = cljs.core.seq(inst_30894);
var inst_30896 = inst_30895;
var inst_30897 = null;
var inst_30898 = (0);
var inst_30899 = (0);
var state_30961__$1 = (function (){var statearr_31058 = state_30961;
(statearr_31058[(12)] = inst_30897);

(statearr_31058[(13)] = inst_30898);

(statearr_31058[(14)] = inst_30896);

(statearr_31058[(16)] = inst_30899);

return statearr_31058;
})();
var statearr_31059_33373 = state_30961__$1;
(statearr_31059_33373[(2)] = null);

(statearr_31059_33373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (14))){
var state_30961__$1 = state_30961;
var statearr_31064_33374 = state_30961__$1;
(statearr_31064_33374[(2)] = null);

(statearr_31064_33374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (16))){
var inst_30914 = (state_30961[(10)]);
var inst_30918 = cljs.core.chunk_first(inst_30914);
var inst_30920 = cljs.core.chunk_rest(inst_30914);
var inst_30921 = cljs.core.count(inst_30918);
var inst_30896 = inst_30920;
var inst_30897 = inst_30918;
var inst_30898 = inst_30921;
var inst_30899 = (0);
var state_30961__$1 = (function (){var statearr_31067 = state_30961;
(statearr_31067[(12)] = inst_30897);

(statearr_31067[(13)] = inst_30898);

(statearr_31067[(14)] = inst_30896);

(statearr_31067[(16)] = inst_30899);

return statearr_31067;
})();
var statearr_31069_33375 = state_30961__$1;
(statearr_31069_33375[(2)] = null);

(statearr_31069_33375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (10))){
var inst_30897 = (state_30961[(12)]);
var inst_30898 = (state_30961[(13)]);
var inst_30896 = (state_30961[(14)]);
var inst_30899 = (state_30961[(16)]);
var inst_30908 = cljs.core._nth(inst_30897,inst_30899);
var inst_30909 = cljs.core.async.muxch_STAR_(inst_30908);
var inst_30910 = cljs.core.async.close_BANG_(inst_30909);
var inst_30911 = (inst_30899 + (1));
var tmp31060 = inst_30897;
var tmp31061 = inst_30898;
var tmp31062 = inst_30896;
var inst_30896__$1 = tmp31062;
var inst_30897__$1 = tmp31060;
var inst_30898__$1 = tmp31061;
var inst_30899__$1 = inst_30911;
var state_30961__$1 = (function (){var statearr_31070 = state_30961;
(statearr_31070[(12)] = inst_30897__$1);

(statearr_31070[(17)] = inst_30910);

(statearr_31070[(13)] = inst_30898__$1);

(statearr_31070[(14)] = inst_30896__$1);

(statearr_31070[(16)] = inst_30899__$1);

return statearr_31070;
})();
var statearr_31071_33376 = state_30961__$1;
(statearr_31071_33376[(2)] = null);

(statearr_31071_33376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (18))){
var inst_30931 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_31072_33377 = state_30961__$1;
(statearr_31072_33377[(2)] = inst_30931);

(statearr_31072_33377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (8))){
var inst_30898 = (state_30961[(13)]);
var inst_30899 = (state_30961[(16)]);
var inst_30901 = (inst_30899 < inst_30898);
var inst_30902 = inst_30901;
var state_30961__$1 = state_30961;
if(cljs.core.truth_(inst_30902)){
var statearr_31073_33378 = state_30961__$1;
(statearr_31073_33378[(1)] = (10));

} else {
var statearr_31075_33379 = state_30961__$1;
(statearr_31075_33379[(1)] = (11));

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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_31080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31080[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_31080[(1)] = (1));

return statearr_31080;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_30961){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_30961);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e31085){var ex__28854__auto__ = e31085;
var statearr_31087_33382 = state_30961;
(statearr_31087_33382[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_30961[(4)]))){
var statearr_31089_33383 = state_30961;
(statearr_31089_33383[(1)] = cljs.core.first((state_30961[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33384 = state_30961;
state_30961 = G__33384;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_30961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_30961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_31096 = f__29084__auto__();
(statearr_31096[(6)] = c__29083__auto___33329);

return statearr_31096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
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
var G__31098 = arguments.length;
switch (G__31098) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31108 = arguments.length;
switch (G__31108) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__31114 = arguments.length;
switch (G__31114) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29083__auto___33394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_31200){
var state_val_31208 = (state_31200[(1)]);
if((state_val_31208 === (7))){
var state_31200__$1 = state_31200;
var statearr_31209_33397 = state_31200__$1;
(statearr_31209_33397[(2)] = null);

(statearr_31209_33397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (1))){
var state_31200__$1 = state_31200;
var statearr_31210_33400 = state_31200__$1;
(statearr_31210_33400[(2)] = null);

(statearr_31210_33400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (4))){
var inst_31129 = (state_31200[(7)]);
var inst_31128 = (state_31200[(8)]);
var inst_31132 = (inst_31129 < inst_31128);
var state_31200__$1 = state_31200;
if(cljs.core.truth_(inst_31132)){
var statearr_31214_33404 = state_31200__$1;
(statearr_31214_33404[(1)] = (6));

} else {
var statearr_31215_33405 = state_31200__$1;
(statearr_31215_33405[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (15))){
var inst_31174 = (state_31200[(9)]);
var inst_31181 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31174);
var state_31200__$1 = state_31200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31200__$1,(17),out,inst_31181);
} else {
if((state_val_31208 === (13))){
var inst_31174 = (state_31200[(9)]);
var inst_31174__$1 = (state_31200[(2)]);
var inst_31175 = cljs.core.some(cljs.core.nil_QMARK_,inst_31174__$1);
var state_31200__$1 = (function (){var statearr_31220 = state_31200;
(statearr_31220[(9)] = inst_31174__$1);

return statearr_31220;
})();
if(cljs.core.truth_(inst_31175)){
var statearr_31221_33406 = state_31200__$1;
(statearr_31221_33406[(1)] = (14));

} else {
var statearr_31222_33410 = state_31200__$1;
(statearr_31222_33410[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (6))){
var state_31200__$1 = state_31200;
var statearr_31227_33411 = state_31200__$1;
(statearr_31227_33411[(2)] = null);

(statearr_31227_33411[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (17))){
var inst_31183 = (state_31200[(2)]);
var state_31200__$1 = (function (){var statearr_31232 = state_31200;
(statearr_31232[(10)] = inst_31183);

return statearr_31232;
})();
var statearr_31233_33412 = state_31200__$1;
(statearr_31233_33412[(2)] = null);

(statearr_31233_33412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (3))){
var inst_31190 = (state_31200[(2)]);
var state_31200__$1 = state_31200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31200__$1,inst_31190);
} else {
if((state_val_31208 === (12))){
var _ = (function (){var statearr_31238 = state_31200;
(statearr_31238[(4)] = cljs.core.rest((state_31200[(4)])));

return statearr_31238;
})();
var state_31200__$1 = state_31200;
var ex31231 = (state_31200__$1[(2)]);
var statearr_31244_33416 = state_31200__$1;
(statearr_31244_33416[(5)] = ex31231);


if((ex31231 instanceof Object)){
var statearr_31247_33417 = state_31200__$1;
(statearr_31247_33417[(1)] = (11));

(statearr_31247_33417[(5)] = null);

} else {
throw ex31231;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (2))){
var inst_31127 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31128 = cnt;
var inst_31129 = (0);
var state_31200__$1 = (function (){var statearr_31249 = state_31200;
(statearr_31249[(7)] = inst_31129);

(statearr_31249[(11)] = inst_31127);

(statearr_31249[(8)] = inst_31128);

return statearr_31249;
})();
var statearr_31250_33418 = state_31200__$1;
(statearr_31250_33418[(2)] = null);

(statearr_31250_33418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (11))){
var inst_31144 = (state_31200[(2)]);
var inst_31151 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31200__$1 = (function (){var statearr_31251 = state_31200;
(statearr_31251[(12)] = inst_31144);

return statearr_31251;
})();
var statearr_31252_33422 = state_31200__$1;
(statearr_31252_33422[(2)] = inst_31151);

(statearr_31252_33422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (9))){
var inst_31129 = (state_31200[(7)]);
var _ = (function (){var statearr_31259 = state_31200;
(statearr_31259[(4)] = cljs.core.cons((12),(state_31200[(4)])));

return statearr_31259;
})();
var inst_31160 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31129) : chs__$1.call(null,inst_31129));
var inst_31161 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31129) : done.call(null,inst_31129));
var inst_31162 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31160,inst_31161);
var ___$1 = (function (){var statearr_31260 = state_31200;
(statearr_31260[(4)] = cljs.core.rest((state_31200[(4)])));

return statearr_31260;
})();
var state_31200__$1 = state_31200;
var statearr_31263_33424 = state_31200__$1;
(statearr_31263_33424[(2)] = inst_31162);

(statearr_31263_33424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (5))){
var inst_31172 = (state_31200[(2)]);
var state_31200__$1 = (function (){var statearr_31264 = state_31200;
(statearr_31264[(13)] = inst_31172);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31200__$1,(13),dchan);
} else {
if((state_val_31208 === (14))){
var inst_31179 = cljs.core.async.close_BANG_(out);
var state_31200__$1 = state_31200;
var statearr_31269_33425 = state_31200__$1;
(statearr_31269_33425[(2)] = inst_31179);

(statearr_31269_33425[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (16))){
var inst_31186 = (state_31200[(2)]);
var state_31200__$1 = state_31200;
var statearr_31270_33426 = state_31200__$1;
(statearr_31270_33426[(2)] = inst_31186);

(statearr_31270_33426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (10))){
var inst_31129 = (state_31200[(7)]);
var inst_31165 = (state_31200[(2)]);
var inst_31166 = (inst_31129 + (1));
var inst_31129__$1 = inst_31166;
var state_31200__$1 = (function (){var statearr_31275 = state_31200;
(statearr_31275[(7)] = inst_31129__$1);

(statearr_31275[(14)] = inst_31165);

return statearr_31275;
})();
var statearr_31276_33436 = state_31200__$1;
(statearr_31276_33436[(2)] = null);

(statearr_31276_33436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (8))){
var inst_31170 = (state_31200[(2)]);
var state_31200__$1 = state_31200;
var statearr_31277_33437 = state_31200__$1;
(statearr_31277_33437[(2)] = inst_31170);

(statearr_31277_33437[(1)] = (5));


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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_31280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31280[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_31280[(1)] = (1));

return statearr_31280;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_31200){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_31200);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e31334){var ex__28854__auto__ = e31334;
var statearr_31335_33444 = state_31200;
(statearr_31335_33444[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_31200[(4)]))){
var statearr_31336_33445 = state_31200;
(statearr_31336_33445[(1)] = cljs.core.first((state_31200[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33446 = state_31200;
state_31200 = G__33446;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_31200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_31200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_31337 = f__29084__auto__();
(statearr_31337[(6)] = c__29083__auto___33394);

return statearr_31337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
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
var G__31340 = arguments.length;
switch (G__31340) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29083__auto___33449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_31373){
var state_val_31374 = (state_31373[(1)]);
if((state_val_31374 === (7))){
var inst_31352 = (state_31373[(7)]);
var inst_31353 = (state_31373[(8)]);
var inst_31352__$1 = (state_31373[(2)]);
var inst_31353__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31352__$1,(0),null);
var inst_31354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31352__$1,(1),null);
var inst_31355 = (inst_31353__$1 == null);
var state_31373__$1 = (function (){var statearr_31375 = state_31373;
(statearr_31375[(7)] = inst_31352__$1);

(statearr_31375[(8)] = inst_31353__$1);

(statearr_31375[(9)] = inst_31354);

return statearr_31375;
})();
if(cljs.core.truth_(inst_31355)){
var statearr_31376_33450 = state_31373__$1;
(statearr_31376_33450[(1)] = (8));

} else {
var statearr_31377_33451 = state_31373__$1;
(statearr_31377_33451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (1))){
var inst_31341 = cljs.core.vec(chs);
var inst_31342 = inst_31341;
var state_31373__$1 = (function (){var statearr_31378 = state_31373;
(statearr_31378[(10)] = inst_31342);

return statearr_31378;
})();
var statearr_31379_33452 = state_31373__$1;
(statearr_31379_33452[(2)] = null);

(statearr_31379_33452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (4))){
var inst_31342 = (state_31373[(10)]);
var state_31373__$1 = state_31373;
return cljs.core.async.ioc_alts_BANG_(state_31373__$1,(7),inst_31342);
} else {
if((state_val_31374 === (6))){
var inst_31369 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31380_33453 = state_31373__$1;
(statearr_31380_33453[(2)] = inst_31369);

(statearr_31380_33453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (3))){
var inst_31371 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31373__$1,inst_31371);
} else {
if((state_val_31374 === (2))){
var inst_31342 = (state_31373[(10)]);
var inst_31344 = cljs.core.count(inst_31342);
var inst_31345 = (inst_31344 > (0));
var state_31373__$1 = state_31373;
if(cljs.core.truth_(inst_31345)){
var statearr_31407_33463 = state_31373__$1;
(statearr_31407_33463[(1)] = (4));

} else {
var statearr_31408_33464 = state_31373__$1;
(statearr_31408_33464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (11))){
var inst_31342 = (state_31373[(10)]);
var inst_31362 = (state_31373[(2)]);
var tmp31394 = inst_31342;
var inst_31342__$1 = tmp31394;
var state_31373__$1 = (function (){var statearr_31409 = state_31373;
(statearr_31409[(11)] = inst_31362);

(statearr_31409[(10)] = inst_31342__$1);

return statearr_31409;
})();
var statearr_31414_33465 = state_31373__$1;
(statearr_31414_33465[(2)] = null);

(statearr_31414_33465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (9))){
var inst_31353 = (state_31373[(8)]);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31373__$1,(11),out,inst_31353);
} else {
if((state_val_31374 === (5))){
var inst_31367 = cljs.core.async.close_BANG_(out);
var state_31373__$1 = state_31373;
var statearr_31419_33466 = state_31373__$1;
(statearr_31419_33466[(2)] = inst_31367);

(statearr_31419_33466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (10))){
var inst_31365 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31420_33467 = state_31373__$1;
(statearr_31420_33467[(2)] = inst_31365);

(statearr_31420_33467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (8))){
var inst_31352 = (state_31373[(7)]);
var inst_31353 = (state_31373[(8)]);
var inst_31354 = (state_31373[(9)]);
var inst_31342 = (state_31373[(10)]);
var inst_31357 = (function (){var cs = inst_31342;
var vec__31348 = inst_31352;
var v = inst_31353;
var c = inst_31354;
return (function (p1__31338_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31338_SHARP_);
});
})();
var inst_31358 = cljs.core.filterv(inst_31357,inst_31342);
var inst_31342__$1 = inst_31358;
var state_31373__$1 = (function (){var statearr_31422 = state_31373;
(statearr_31422[(10)] = inst_31342__$1);

return statearr_31422;
})();
var statearr_31423_33469 = state_31373__$1;
(statearr_31423_33469[(2)] = null);

(statearr_31423_33469[(1)] = (2));


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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_31426 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31426[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_31426[(1)] = (1));

return statearr_31426;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_31373){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_31373);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e31427){var ex__28854__auto__ = e31427;
var statearr_31428_33479 = state_31373;
(statearr_31428_33479[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_31373[(4)]))){
var statearr_31429_33480 = state_31373;
(statearr_31429_33480[(1)] = cljs.core.first((state_31373[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33481 = state_31373;
state_31373 = G__33481;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_31373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_31373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_31431 = f__29084__auto__();
(statearr_31431[(6)] = c__29083__auto___33449);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31434 = arguments.length;
switch (G__31434) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29083__auto___33483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_31475){
var state_val_31476 = (state_31475[(1)]);
if((state_val_31476 === (7))){
var inst_31457 = (state_31475[(7)]);
var inst_31457__$1 = (state_31475[(2)]);
var inst_31458 = (inst_31457__$1 == null);
var inst_31459 = cljs.core.not(inst_31458);
var state_31475__$1 = (function (){var statearr_31478 = state_31475;
(statearr_31478[(7)] = inst_31457__$1);

return statearr_31478;
})();
if(inst_31459){
var statearr_31479_33484 = state_31475__$1;
(statearr_31479_33484[(1)] = (8));

} else {
var statearr_31480_33485 = state_31475__$1;
(statearr_31480_33485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (1))){
var inst_31435 = (0);
var state_31475__$1 = (function (){var statearr_31481 = state_31475;
(statearr_31481[(8)] = inst_31435);

return statearr_31481;
})();
var statearr_31482_33486 = state_31475__$1;
(statearr_31482_33486[(2)] = null);

(statearr_31482_33486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (4))){
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31475__$1,(7),ch);
} else {
if((state_val_31476 === (6))){
var inst_31470 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31500_33487 = state_31475__$1;
(statearr_31500_33487[(2)] = inst_31470);

(statearr_31500_33487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (3))){
var inst_31472 = (state_31475[(2)]);
var inst_31473 = cljs.core.async.close_BANG_(out);
var state_31475__$1 = (function (){var statearr_31501 = state_31475;
(statearr_31501[(9)] = inst_31472);

return statearr_31501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31475__$1,inst_31473);
} else {
if((state_val_31476 === (2))){
var inst_31435 = (state_31475[(8)]);
var inst_31454 = (inst_31435 < n);
var state_31475__$1 = state_31475;
if(cljs.core.truth_(inst_31454)){
var statearr_31505_33494 = state_31475__$1;
(statearr_31505_33494[(1)] = (4));

} else {
var statearr_31506_33495 = state_31475__$1;
(statearr_31506_33495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (11))){
var inst_31435 = (state_31475[(8)]);
var inst_31462 = (state_31475[(2)]);
var inst_31463 = (inst_31435 + (1));
var inst_31435__$1 = inst_31463;
var state_31475__$1 = (function (){var statearr_31509 = state_31475;
(statearr_31509[(8)] = inst_31435__$1);

(statearr_31509[(10)] = inst_31462);

return statearr_31509;
})();
var statearr_31511_33496 = state_31475__$1;
(statearr_31511_33496[(2)] = null);

(statearr_31511_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (9))){
var state_31475__$1 = state_31475;
var statearr_31512_33497 = state_31475__$1;
(statearr_31512_33497[(2)] = null);

(statearr_31512_33497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (5))){
var state_31475__$1 = state_31475;
var statearr_31513_33506 = state_31475__$1;
(statearr_31513_33506[(2)] = null);

(statearr_31513_33506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (10))){
var inst_31467 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31514_33513 = state_31475__$1;
(statearr_31514_33513[(2)] = inst_31467);

(statearr_31514_33513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (8))){
var inst_31457 = (state_31475[(7)]);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31475__$1,(11),out,inst_31457);
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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_31515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31515[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_31515[(1)] = (1));

return statearr_31515;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_31475){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_31475);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e31516){var ex__28854__auto__ = e31516;
var statearr_31517_33521 = state_31475;
(statearr_31517_33521[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_31475[(4)]))){
var statearr_31518_33522 = state_31475;
(statearr_31518_33522[(1)] = cljs.core.first((state_31475[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33523 = state_31475;
state_31475 = G__33523;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_31475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_31475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_31519 = f__29084__auto__();
(statearr_31519[(6)] = c__29083__auto___33483);

return statearr_31519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31529 = (function (f,ch,meta31530){
this.f = f;
this.ch = ch;
this.meta31530 = meta31530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31531,meta31530__$1){
var self__ = this;
var _31531__$1 = this;
return (new cljs.core.async.t_cljs$core$async31529(self__.f,self__.ch,meta31530__$1));
}));

(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31531){
var self__ = this;
var _31531__$1 = this;
return self__.meta31530;
}));

(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31545 = (function (f,ch,meta31530,_,fn1,meta31546){
this.f = f;
this.ch = ch;
this.meta31530 = meta31530;
this._ = _;
this.fn1 = fn1;
this.meta31546 = meta31546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31547,meta31546__$1){
var self__ = this;
var _31547__$1 = this;
return (new cljs.core.async.t_cljs$core$async31545(self__.f,self__.ch,self__.meta31530,self__._,self__.fn1,meta31546__$1));
}));

(cljs.core.async.t_cljs$core$async31545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31547){
var self__ = this;
var _31547__$1 = this;
return self__.meta31546;
}));

(cljs.core.async.t_cljs$core$async31545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31526_SHARP_){
var G__31605 = (((p1__31526_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31526_SHARP_) : self__.f.call(null,p1__31526_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31605) : f1.call(null,G__31605));
});
}));

(cljs.core.async.t_cljs$core$async31545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31530","meta31530",586508120,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31529","cljs.core.async/t_cljs$core$async31529",11337830,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31546","meta31546",-469638411,null)], null);
}));

(cljs.core.async.t_cljs$core$async31545.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31545");

(cljs.core.async.t_cljs$core$async31545.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31545");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31545.
 */
cljs.core.async.__GT_t_cljs$core$async31545 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31545(f__$1,ch__$1,meta31530__$1,___$2,fn1__$1,meta31546){
return (new cljs.core.async.t_cljs$core$async31545(f__$1,ch__$1,meta31530__$1,___$2,fn1__$1,meta31546));
});

}

return (new cljs.core.async.t_cljs$core$async31545(self__.f,self__.ch,self__.meta31530,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31614 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31614) : self__.f.call(null,G__31614));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31529.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31530","meta31530",586508120,null)], null);
}));

(cljs.core.async.t_cljs$core$async31529.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31529");

(cljs.core.async.t_cljs$core$async31529.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31529");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31529.
 */
cljs.core.async.__GT_t_cljs$core$async31529 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31529(f__$1,ch__$1,meta31530){
return (new cljs.core.async.t_cljs$core$async31529(f__$1,ch__$1,meta31530));
});

}

return (new cljs.core.async.t_cljs$core$async31529(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31622 = (function (f,ch,meta31623){
this.f = f;
this.ch = ch;
this.meta31623 = meta31623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31624,meta31623__$1){
var self__ = this;
var _31624__$1 = this;
return (new cljs.core.async.t_cljs$core$async31622(self__.f,self__.ch,meta31623__$1));
}));

(cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31624){
var self__ = this;
var _31624__$1 = this;
return self__.meta31623;
}));

(cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31623","meta31623",-542846247,null)], null);
}));

(cljs.core.async.t_cljs$core$async31622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31622");

(cljs.core.async.t_cljs$core$async31622.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31622.
 */
cljs.core.async.__GT_t_cljs$core$async31622 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31622(f__$1,ch__$1,meta31623){
return (new cljs.core.async.t_cljs$core$async31622(f__$1,ch__$1,meta31623));
});

}

return (new cljs.core.async.t_cljs$core$async31622(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31650 = (function (p,ch,meta31651){
this.p = p;
this.ch = ch;
this.meta31651 = meta31651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31652,meta31651__$1){
var self__ = this;
var _31652__$1 = this;
return (new cljs.core.async.t_cljs$core$async31650(self__.p,self__.ch,meta31651__$1));
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31652){
var self__ = this;
var _31652__$1 = this;
return self__.meta31651;
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31651","meta31651",-1997734691,null)], null);
}));

(cljs.core.async.t_cljs$core$async31650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31650");

(cljs.core.async.t_cljs$core$async31650.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31650.
 */
cljs.core.async.__GT_t_cljs$core$async31650 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31650(p__$1,ch__$1,meta31651){
return (new cljs.core.async.t_cljs$core$async31650(p__$1,ch__$1,meta31651));
});

}

return (new cljs.core.async.t_cljs$core$async31650(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31700 = arguments.length;
switch (G__31700) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29083__auto___33586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_31764){
var state_val_31765 = (state_31764[(1)]);
if((state_val_31765 === (7))){
var inst_31755 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31774_33591 = state_31764__$1;
(statearr_31774_33591[(2)] = inst_31755);

(statearr_31774_33591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (1))){
var state_31764__$1 = state_31764;
var statearr_31781_33592 = state_31764__$1;
(statearr_31781_33592[(2)] = null);

(statearr_31781_33592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (4))){
var inst_31714 = (state_31764[(7)]);
var inst_31714__$1 = (state_31764[(2)]);
var inst_31715 = (inst_31714__$1 == null);
var state_31764__$1 = (function (){var statearr_31783 = state_31764;
(statearr_31783[(7)] = inst_31714__$1);

return statearr_31783;
})();
if(cljs.core.truth_(inst_31715)){
var statearr_31784_33593 = state_31764__$1;
(statearr_31784_33593[(1)] = (5));

} else {
var statearr_31785_33594 = state_31764__$1;
(statearr_31785_33594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (6))){
var inst_31714 = (state_31764[(7)]);
var inst_31719 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31714) : p.call(null,inst_31714));
var state_31764__$1 = state_31764;
if(cljs.core.truth_(inst_31719)){
var statearr_31786_33595 = state_31764__$1;
(statearr_31786_33595[(1)] = (8));

} else {
var statearr_31787_33596 = state_31764__$1;
(statearr_31787_33596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (3))){
var inst_31757 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31764__$1,inst_31757);
} else {
if((state_val_31765 === (2))){
var state_31764__$1 = state_31764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31764__$1,(4),ch);
} else {
if((state_val_31765 === (11))){
var inst_31744 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31794_33597 = state_31764__$1;
(statearr_31794_33597[(2)] = inst_31744);

(statearr_31794_33597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (9))){
var state_31764__$1 = state_31764;
var statearr_31814_33598 = state_31764__$1;
(statearr_31814_33598[(2)] = null);

(statearr_31814_33598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (5))){
var inst_31717 = cljs.core.async.close_BANG_(out);
var state_31764__$1 = state_31764;
var statearr_31818_33599 = state_31764__$1;
(statearr_31818_33599[(2)] = inst_31717);

(statearr_31818_33599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (10))){
var inst_31752 = (state_31764[(2)]);
var state_31764__$1 = (function (){var statearr_31820 = state_31764;
(statearr_31820[(8)] = inst_31752);

return statearr_31820;
})();
var statearr_31822_33600 = state_31764__$1;
(statearr_31822_33600[(2)] = null);

(statearr_31822_33600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (8))){
var inst_31714 = (state_31764[(7)]);
var state_31764__$1 = state_31764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31764__$1,(11),out,inst_31714);
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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_31827 = [null,null,null,null,null,null,null,null,null];
(statearr_31827[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_31827[(1)] = (1));

return statearr_31827;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_31764){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_31764);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e31828){var ex__28854__auto__ = e31828;
var statearr_31829_33604 = state_31764;
(statearr_31829_33604[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_31764[(4)]))){
var statearr_31832_33605 = state_31764;
(statearr_31832_33605[(1)] = cljs.core.first((state_31764[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33606 = state_31764;
state_31764 = G__33606;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_31764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_31764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_31833 = f__29084__auto__();
(statearr_31833[(6)] = c__29083__auto___33586);

return statearr_31833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31836 = arguments.length;
switch (G__31836) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29083__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_31918){
var state_val_31919 = (state_31918[(1)]);
if((state_val_31919 === (7))){
var inst_31913 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31920_33612 = state_31918__$1;
(statearr_31920_33612[(2)] = inst_31913);

(statearr_31920_33612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (20))){
var inst_31883 = (state_31918[(7)]);
var inst_31894 = (state_31918[(2)]);
var inst_31895 = cljs.core.next(inst_31883);
var inst_31854 = inst_31895;
var inst_31855 = null;
var inst_31856 = (0);
var inst_31857 = (0);
var state_31918__$1 = (function (){var statearr_31923 = state_31918;
(statearr_31923[(8)] = inst_31856);

(statearr_31923[(9)] = inst_31855);

(statearr_31923[(10)] = inst_31857);

(statearr_31923[(11)] = inst_31854);

(statearr_31923[(12)] = inst_31894);

return statearr_31923;
})();
var statearr_31925_33621 = state_31918__$1;
(statearr_31925_33621[(2)] = null);

(statearr_31925_33621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (1))){
var state_31918__$1 = state_31918;
var statearr_31926_33622 = state_31918__$1;
(statearr_31926_33622[(2)] = null);

(statearr_31926_33622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (4))){
var inst_31842 = (state_31918[(13)]);
var inst_31842__$1 = (state_31918[(2)]);
var inst_31843 = (inst_31842__$1 == null);
var state_31918__$1 = (function (){var statearr_31927 = state_31918;
(statearr_31927[(13)] = inst_31842__$1);

return statearr_31927;
})();
if(cljs.core.truth_(inst_31843)){
var statearr_31929_33623 = state_31918__$1;
(statearr_31929_33623[(1)] = (5));

} else {
var statearr_31931_33624 = state_31918__$1;
(statearr_31931_33624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (15))){
var state_31918__$1 = state_31918;
var statearr_31937_33625 = state_31918__$1;
(statearr_31937_33625[(2)] = null);

(statearr_31937_33625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (21))){
var state_31918__$1 = state_31918;
var statearr_31938_33626 = state_31918__$1;
(statearr_31938_33626[(2)] = null);

(statearr_31938_33626[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (13))){
var inst_31856 = (state_31918[(8)]);
var inst_31855 = (state_31918[(9)]);
var inst_31857 = (state_31918[(10)]);
var inst_31854 = (state_31918[(11)]);
var inst_31879 = (state_31918[(2)]);
var inst_31880 = (inst_31857 + (1));
var tmp31934 = inst_31856;
var tmp31935 = inst_31855;
var tmp31936 = inst_31854;
var inst_31854__$1 = tmp31936;
var inst_31855__$1 = tmp31935;
var inst_31856__$1 = tmp31934;
var inst_31857__$1 = inst_31880;
var state_31918__$1 = (function (){var statearr_31939 = state_31918;
(statearr_31939[(8)] = inst_31856__$1);

(statearr_31939[(14)] = inst_31879);

(statearr_31939[(9)] = inst_31855__$1);

(statearr_31939[(10)] = inst_31857__$1);

(statearr_31939[(11)] = inst_31854__$1);

return statearr_31939;
})();
var statearr_31940_33628 = state_31918__$1;
(statearr_31940_33628[(2)] = null);

(statearr_31940_33628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (22))){
var state_31918__$1 = state_31918;
var statearr_31941_33629 = state_31918__$1;
(statearr_31941_33629[(2)] = null);

(statearr_31941_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (6))){
var inst_31842 = (state_31918[(13)]);
var inst_31852 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31842) : f.call(null,inst_31842));
var inst_31853 = cljs.core.seq(inst_31852);
var inst_31854 = inst_31853;
var inst_31855 = null;
var inst_31856 = (0);
var inst_31857 = (0);
var state_31918__$1 = (function (){var statearr_31944 = state_31918;
(statearr_31944[(8)] = inst_31856);

(statearr_31944[(9)] = inst_31855);

(statearr_31944[(10)] = inst_31857);

(statearr_31944[(11)] = inst_31854);

return statearr_31944;
})();
var statearr_31945_33631 = state_31918__$1;
(statearr_31945_33631[(2)] = null);

(statearr_31945_33631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (17))){
var inst_31883 = (state_31918[(7)]);
var inst_31887 = cljs.core.chunk_first(inst_31883);
var inst_31888 = cljs.core.chunk_rest(inst_31883);
var inst_31889 = cljs.core.count(inst_31887);
var inst_31854 = inst_31888;
var inst_31855 = inst_31887;
var inst_31856 = inst_31889;
var inst_31857 = (0);
var state_31918__$1 = (function (){var statearr_31947 = state_31918;
(statearr_31947[(8)] = inst_31856);

(statearr_31947[(9)] = inst_31855);

(statearr_31947[(10)] = inst_31857);

(statearr_31947[(11)] = inst_31854);

return statearr_31947;
})();
var statearr_31948_33632 = state_31918__$1;
(statearr_31948_33632[(2)] = null);

(statearr_31948_33632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (3))){
var inst_31915 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31918__$1,inst_31915);
} else {
if((state_val_31919 === (12))){
var inst_31903 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31949_33633 = state_31918__$1;
(statearr_31949_33633[(2)] = inst_31903);

(statearr_31949_33633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (2))){
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31918__$1,(4),in$);
} else {
if((state_val_31919 === (23))){
var inst_31911 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31950_33634 = state_31918__$1;
(statearr_31950_33634[(2)] = inst_31911);

(statearr_31950_33634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (19))){
var inst_31898 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31951_33635 = state_31918__$1;
(statearr_31951_33635[(2)] = inst_31898);

(statearr_31951_33635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (11))){
var inst_31883 = (state_31918[(7)]);
var inst_31854 = (state_31918[(11)]);
var inst_31883__$1 = cljs.core.seq(inst_31854);
var state_31918__$1 = (function (){var statearr_31956 = state_31918;
(statearr_31956[(7)] = inst_31883__$1);

return statearr_31956;
})();
if(inst_31883__$1){
var statearr_31961_33636 = state_31918__$1;
(statearr_31961_33636[(1)] = (14));

} else {
var statearr_31962_33637 = state_31918__$1;
(statearr_31962_33637[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (9))){
var inst_31905 = (state_31918[(2)]);
var inst_31906 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31918__$1 = (function (){var statearr_31968 = state_31918;
(statearr_31968[(15)] = inst_31905);

return statearr_31968;
})();
if(cljs.core.truth_(inst_31906)){
var statearr_31969_33638 = state_31918__$1;
(statearr_31969_33638[(1)] = (21));

} else {
var statearr_31970_33639 = state_31918__$1;
(statearr_31970_33639[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (5))){
var inst_31845 = cljs.core.async.close_BANG_(out);
var state_31918__$1 = state_31918;
var statearr_31971_33640 = state_31918__$1;
(statearr_31971_33640[(2)] = inst_31845);

(statearr_31971_33640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (14))){
var inst_31883 = (state_31918[(7)]);
var inst_31885 = cljs.core.chunked_seq_QMARK_(inst_31883);
var state_31918__$1 = state_31918;
if(inst_31885){
var statearr_31972_33642 = state_31918__$1;
(statearr_31972_33642[(1)] = (17));

} else {
var statearr_31973_33643 = state_31918__$1;
(statearr_31973_33643[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (16))){
var inst_31901 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31974_33645 = state_31918__$1;
(statearr_31974_33645[(2)] = inst_31901);

(statearr_31974_33645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (10))){
var inst_31855 = (state_31918[(9)]);
var inst_31857 = (state_31918[(10)]);
var inst_31877 = cljs.core._nth(inst_31855,inst_31857);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31918__$1,(13),out,inst_31877);
} else {
if((state_val_31919 === (18))){
var inst_31883 = (state_31918[(7)]);
var inst_31892 = cljs.core.first(inst_31883);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31918__$1,(20),out,inst_31892);
} else {
if((state_val_31919 === (8))){
var inst_31856 = (state_31918[(8)]);
var inst_31857 = (state_31918[(10)]);
var inst_31874 = (inst_31857 < inst_31856);
var inst_31875 = inst_31874;
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31875)){
var statearr_31975_33650 = state_31918__$1;
(statearr_31975_33650[(1)] = (10));

} else {
var statearr_31976_33651 = state_31918__$1;
(statearr_31976_33651[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28851__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28851__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31978[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28851__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28851__auto____1 = (function (state_31918){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_31918);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e31980){var ex__28854__auto__ = e31980;
var statearr_31981_33656 = state_31918;
(statearr_31981_33656[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_31918[(4)]))){
var statearr_31982_33658 = state_31918;
(statearr_31982_33658[(1)] = cljs.core.first((state_31918[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33659 = state_31918;
state_31918 = G__33659;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28851__auto__ = function(state_31918){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28851__auto____1.call(this,state_31918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28851__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28851__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_31983 = f__29084__auto__();
(statearr_31983[(6)] = c__29083__auto__);

return statearr_31983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));

return c__29083__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31987 = arguments.length;
switch (G__31987) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31998 = arguments.length;
switch (G__31998) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32002 = arguments.length;
switch (G__32002) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29083__auto___33667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_32026){
var state_val_32027 = (state_32026[(1)]);
if((state_val_32027 === (7))){
var inst_32021 = (state_32026[(2)]);
var state_32026__$1 = state_32026;
var statearr_32037_33668 = state_32026__$1;
(statearr_32037_33668[(2)] = inst_32021);

(statearr_32037_33668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (1))){
var inst_32003 = null;
var state_32026__$1 = (function (){var statearr_32038 = state_32026;
(statearr_32038[(7)] = inst_32003);

return statearr_32038;
})();
var statearr_32043_33669 = state_32026__$1;
(statearr_32043_33669[(2)] = null);

(statearr_32043_33669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (4))){
var inst_32006 = (state_32026[(8)]);
var inst_32006__$1 = (state_32026[(2)]);
var inst_32007 = (inst_32006__$1 == null);
var inst_32008 = cljs.core.not(inst_32007);
var state_32026__$1 = (function (){var statearr_32044 = state_32026;
(statearr_32044[(8)] = inst_32006__$1);

return statearr_32044;
})();
if(inst_32008){
var statearr_32045_33670 = state_32026__$1;
(statearr_32045_33670[(1)] = (5));

} else {
var statearr_32046_33671 = state_32026__$1;
(statearr_32046_33671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (6))){
var state_32026__$1 = state_32026;
var statearr_32047_33672 = state_32026__$1;
(statearr_32047_33672[(2)] = null);

(statearr_32047_33672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (3))){
var inst_32023 = (state_32026[(2)]);
var inst_32024 = cljs.core.async.close_BANG_(out);
var state_32026__$1 = (function (){var statearr_32049 = state_32026;
(statearr_32049[(9)] = inst_32023);

return statearr_32049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32026__$1,inst_32024);
} else {
if((state_val_32027 === (2))){
var state_32026__$1 = state_32026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32026__$1,(4),ch);
} else {
if((state_val_32027 === (11))){
var inst_32006 = (state_32026[(8)]);
var inst_32015 = (state_32026[(2)]);
var inst_32003 = inst_32006;
var state_32026__$1 = (function (){var statearr_32050 = state_32026;
(statearr_32050[(7)] = inst_32003);

(statearr_32050[(10)] = inst_32015);

return statearr_32050;
})();
var statearr_32051_33673 = state_32026__$1;
(statearr_32051_33673[(2)] = null);

(statearr_32051_33673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (9))){
var inst_32006 = (state_32026[(8)]);
var state_32026__$1 = state_32026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32026__$1,(11),out,inst_32006);
} else {
if((state_val_32027 === (5))){
var inst_32003 = (state_32026[(7)]);
var inst_32006 = (state_32026[(8)]);
var inst_32010 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32006,inst_32003);
var state_32026__$1 = state_32026;
if(inst_32010){
var statearr_32053_33676 = state_32026__$1;
(statearr_32053_33676[(1)] = (8));

} else {
var statearr_32054_33677 = state_32026__$1;
(statearr_32054_33677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (10))){
var inst_32018 = (state_32026[(2)]);
var state_32026__$1 = state_32026;
var statearr_32056_33678 = state_32026__$1;
(statearr_32056_33678[(2)] = inst_32018);

(statearr_32056_33678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (8))){
var inst_32003 = (state_32026[(7)]);
var tmp32052 = inst_32003;
var inst_32003__$1 = tmp32052;
var state_32026__$1 = (function (){var statearr_32057 = state_32026;
(statearr_32057[(7)] = inst_32003__$1);

return statearr_32057;
})();
var statearr_32058_33679 = state_32026__$1;
(statearr_32058_33679[(2)] = null);

(statearr_32058_33679[(1)] = (2));


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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_32060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32060[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_32060[(1)] = (1));

return statearr_32060;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_32026){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_32026);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e32061){var ex__28854__auto__ = e32061;
var statearr_32062_33684 = state_32026;
(statearr_32062_33684[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_32026[(4)]))){
var statearr_32063_33686 = state_32026;
(statearr_32063_33686[(1)] = cljs.core.first((state_32026[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33687 = state_32026;
state_32026 = G__33687;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_32026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_32026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_32064 = f__29084__auto__();
(statearr_32064[(6)] = c__29083__auto___33667);

return statearr_32064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32071 = arguments.length;
switch (G__32071) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29083__auto___33690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_32121){
var state_val_32122 = (state_32121[(1)]);
if((state_val_32122 === (7))){
var inst_32116 = (state_32121[(2)]);
var state_32121__$1 = state_32121;
var statearr_32123_33691 = state_32121__$1;
(statearr_32123_33691[(2)] = inst_32116);

(statearr_32123_33691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (1))){
var inst_32079 = (new Array(n));
var inst_32080 = inst_32079;
var inst_32081 = (0);
var state_32121__$1 = (function (){var statearr_32124 = state_32121;
(statearr_32124[(7)] = inst_32081);

(statearr_32124[(8)] = inst_32080);

return statearr_32124;
})();
var statearr_32125_33700 = state_32121__$1;
(statearr_32125_33700[(2)] = null);

(statearr_32125_33700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (4))){
var inst_32086 = (state_32121[(9)]);
var inst_32086__$1 = (state_32121[(2)]);
var inst_32088 = (inst_32086__$1 == null);
var inst_32089 = cljs.core.not(inst_32088);
var state_32121__$1 = (function (){var statearr_32128 = state_32121;
(statearr_32128[(9)] = inst_32086__$1);

return statearr_32128;
})();
if(inst_32089){
var statearr_32129_33704 = state_32121__$1;
(statearr_32129_33704[(1)] = (5));

} else {
var statearr_32130_33708 = state_32121__$1;
(statearr_32130_33708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (15))){
var inst_32110 = (state_32121[(2)]);
var state_32121__$1 = state_32121;
var statearr_32132_33709 = state_32121__$1;
(statearr_32132_33709[(2)] = inst_32110);

(statearr_32132_33709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (13))){
var state_32121__$1 = state_32121;
var statearr_32133_33710 = state_32121__$1;
(statearr_32133_33710[(2)] = null);

(statearr_32133_33710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (6))){
var inst_32081 = (state_32121[(7)]);
var inst_32106 = (inst_32081 > (0));
var state_32121__$1 = state_32121;
if(cljs.core.truth_(inst_32106)){
var statearr_32136_33712 = state_32121__$1;
(statearr_32136_33712[(1)] = (12));

} else {
var statearr_32137_33713 = state_32121__$1;
(statearr_32137_33713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (3))){
var inst_32118 = (state_32121[(2)]);
var state_32121__$1 = state_32121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32121__$1,inst_32118);
} else {
if((state_val_32122 === (12))){
var inst_32080 = (state_32121[(8)]);
var inst_32108 = cljs.core.vec(inst_32080);
var state_32121__$1 = state_32121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32121__$1,(15),out,inst_32108);
} else {
if((state_val_32122 === (2))){
var state_32121__$1 = state_32121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32121__$1,(4),ch);
} else {
if((state_val_32122 === (11))){
var inst_32100 = (state_32121[(2)]);
var inst_32101 = (new Array(n));
var inst_32080 = inst_32101;
var inst_32081 = (0);
var state_32121__$1 = (function (){var statearr_32144 = state_32121;
(statearr_32144[(7)] = inst_32081);

(statearr_32144[(8)] = inst_32080);

(statearr_32144[(10)] = inst_32100);

return statearr_32144;
})();
var statearr_32145_33730 = state_32121__$1;
(statearr_32145_33730[(2)] = null);

(statearr_32145_33730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (9))){
var inst_32080 = (state_32121[(8)]);
var inst_32098 = cljs.core.vec(inst_32080);
var state_32121__$1 = state_32121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32121__$1,(11),out,inst_32098);
} else {
if((state_val_32122 === (5))){
var inst_32086 = (state_32121[(9)]);
var inst_32081 = (state_32121[(7)]);
var inst_32080 = (state_32121[(8)]);
var inst_32093 = (state_32121[(11)]);
var inst_32092 = (inst_32080[inst_32081] = inst_32086);
var inst_32093__$1 = (inst_32081 + (1));
var inst_32094 = (inst_32093__$1 < n);
var state_32121__$1 = (function (){var statearr_32150 = state_32121;
(statearr_32150[(11)] = inst_32093__$1);

(statearr_32150[(12)] = inst_32092);

return statearr_32150;
})();
if(cljs.core.truth_(inst_32094)){
var statearr_32151_33748 = state_32121__$1;
(statearr_32151_33748[(1)] = (8));

} else {
var statearr_32152_33749 = state_32121__$1;
(statearr_32152_33749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (14))){
var inst_32113 = (state_32121[(2)]);
var inst_32114 = cljs.core.async.close_BANG_(out);
var state_32121__$1 = (function (){var statearr_32154 = state_32121;
(statearr_32154[(13)] = inst_32113);

return statearr_32154;
})();
var statearr_32155_33754 = state_32121__$1;
(statearr_32155_33754[(2)] = inst_32114);

(statearr_32155_33754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (10))){
var inst_32104 = (state_32121[(2)]);
var state_32121__$1 = state_32121;
var statearr_32161_33758 = state_32121__$1;
(statearr_32161_33758[(2)] = inst_32104);

(statearr_32161_33758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32122 === (8))){
var inst_32080 = (state_32121[(8)]);
var inst_32093 = (state_32121[(11)]);
var tmp32153 = inst_32080;
var inst_32080__$1 = tmp32153;
var inst_32081 = inst_32093;
var state_32121__$1 = (function (){var statearr_32162 = state_32121;
(statearr_32162[(7)] = inst_32081);

(statearr_32162[(8)] = inst_32080__$1);

return statearr_32162;
})();
var statearr_32163_33764 = state_32121__$1;
(statearr_32163_33764[(2)] = null);

(statearr_32163_33764[(1)] = (2));


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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_32164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32164[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_32164[(1)] = (1));

return statearr_32164;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_32121){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_32121);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e32165){var ex__28854__auto__ = e32165;
var statearr_32166_33765 = state_32121;
(statearr_32166_33765[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_32121[(4)]))){
var statearr_32167_33768 = state_32121;
(statearr_32167_33768[(1)] = cljs.core.first((state_32121[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33776 = state_32121;
state_32121 = G__33776;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_32121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_32121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_32170 = f__29084__auto__();
(statearr_32170[(6)] = c__29083__auto___33690);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32173 = arguments.length;
switch (G__32173) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29083__auto___33787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_32220){
var state_val_32221 = (state_32220[(1)]);
if((state_val_32221 === (7))){
var inst_32216 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32222_33790 = state_32220__$1;
(statearr_32222_33790[(2)] = inst_32216);

(statearr_32222_33790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (1))){
var inst_32177 = [];
var inst_32178 = inst_32177;
var inst_32179 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32220__$1 = (function (){var statearr_32223 = state_32220;
(statearr_32223[(7)] = inst_32179);

(statearr_32223[(8)] = inst_32178);

return statearr_32223;
})();
var statearr_32225_33791 = state_32220__$1;
(statearr_32225_33791[(2)] = null);

(statearr_32225_33791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (4))){
var inst_32182 = (state_32220[(9)]);
var inst_32182__$1 = (state_32220[(2)]);
var inst_32183 = (inst_32182__$1 == null);
var inst_32184 = cljs.core.not(inst_32183);
var state_32220__$1 = (function (){var statearr_32227 = state_32220;
(statearr_32227[(9)] = inst_32182__$1);

return statearr_32227;
})();
if(inst_32184){
var statearr_32228_33792 = state_32220__$1;
(statearr_32228_33792[(1)] = (5));

} else {
var statearr_32229_33797 = state_32220__$1;
(statearr_32229_33797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (15))){
var inst_32210 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32230_33798 = state_32220__$1;
(statearr_32230_33798[(2)] = inst_32210);

(statearr_32230_33798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (13))){
var state_32220__$1 = state_32220;
var statearr_32231_33803 = state_32220__$1;
(statearr_32231_33803[(2)] = null);

(statearr_32231_33803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (6))){
var inst_32178 = (state_32220[(8)]);
var inst_32205 = inst_32178.length;
var inst_32206 = (inst_32205 > (0));
var state_32220__$1 = state_32220;
if(cljs.core.truth_(inst_32206)){
var statearr_32232_33804 = state_32220__$1;
(statearr_32232_33804[(1)] = (12));

} else {
var statearr_32233_33809 = state_32220__$1;
(statearr_32233_33809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (3))){
var inst_32218 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32220__$1,inst_32218);
} else {
if((state_val_32221 === (12))){
var inst_32178 = (state_32220[(8)]);
var inst_32208 = cljs.core.vec(inst_32178);
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32220__$1,(15),out,inst_32208);
} else {
if((state_val_32221 === (2))){
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32220__$1,(4),ch);
} else {
if((state_val_32221 === (11))){
var inst_32182 = (state_32220[(9)]);
var inst_32186 = (state_32220[(10)]);
var inst_32197 = (state_32220[(2)]);
var inst_32199 = [];
var inst_32200 = inst_32199.push(inst_32182);
var inst_32178 = inst_32199;
var inst_32179 = inst_32186;
var state_32220__$1 = (function (){var statearr_32235 = state_32220;
(statearr_32235[(7)] = inst_32179);

(statearr_32235[(11)] = inst_32197);

(statearr_32235[(8)] = inst_32178);

(statearr_32235[(12)] = inst_32200);

return statearr_32235;
})();
var statearr_32236_33813 = state_32220__$1;
(statearr_32236_33813[(2)] = null);

(statearr_32236_33813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (9))){
var inst_32178 = (state_32220[(8)]);
var inst_32195 = cljs.core.vec(inst_32178);
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32220__$1,(11),out,inst_32195);
} else {
if((state_val_32221 === (5))){
var inst_32179 = (state_32220[(7)]);
var inst_32182 = (state_32220[(9)]);
var inst_32186 = (state_32220[(10)]);
var inst_32186__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32182) : f.call(null,inst_32182));
var inst_32187 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32186__$1,inst_32179);
var inst_32188 = cljs.core.keyword_identical_QMARK_(inst_32179,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32189 = ((inst_32187) || (inst_32188));
var state_32220__$1 = (function (){var statearr_32243 = state_32220;
(statearr_32243[(10)] = inst_32186__$1);

return statearr_32243;
})();
if(cljs.core.truth_(inst_32189)){
var statearr_32244_33818 = state_32220__$1;
(statearr_32244_33818[(1)] = (8));

} else {
var statearr_32245_33819 = state_32220__$1;
(statearr_32245_33819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (14))){
var inst_32213 = (state_32220[(2)]);
var inst_32214 = cljs.core.async.close_BANG_(out);
var state_32220__$1 = (function (){var statearr_32248 = state_32220;
(statearr_32248[(13)] = inst_32213);

return statearr_32248;
})();
var statearr_32249_33820 = state_32220__$1;
(statearr_32249_33820[(2)] = inst_32214);

(statearr_32249_33820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (10))){
var inst_32203 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32250_33821 = state_32220__$1;
(statearr_32250_33821[(2)] = inst_32203);

(statearr_32250_33821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (8))){
var inst_32182 = (state_32220[(9)]);
var inst_32178 = (state_32220[(8)]);
var inst_32186 = (state_32220[(10)]);
var inst_32191 = inst_32178.push(inst_32182);
var tmp32246 = inst_32178;
var inst_32178__$1 = tmp32246;
var inst_32179 = inst_32186;
var state_32220__$1 = (function (){var statearr_32251 = state_32220;
(statearr_32251[(14)] = inst_32191);

(statearr_32251[(7)] = inst_32179);

(statearr_32251[(8)] = inst_32178__$1);

return statearr_32251;
})();
var statearr_32252_33822 = state_32220__$1;
(statearr_32252_33822[(2)] = null);

(statearr_32252_33822[(1)] = (2));


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
var cljs$core$async$state_machine__28851__auto__ = null;
var cljs$core$async$state_machine__28851__auto____0 = (function (){
var statearr_32253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32253[(0)] = cljs$core$async$state_machine__28851__auto__);

(statearr_32253[(1)] = (1));

return statearr_32253;
});
var cljs$core$async$state_machine__28851__auto____1 = (function (state_32220){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_32220);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e32254){var ex__28854__auto__ = e32254;
var statearr_32255_33827 = state_32220;
(statearr_32255_33827[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_32220[(4)]))){
var statearr_32257_33828 = state_32220;
(statearr_32257_33828[(1)] = cljs.core.first((state_32220[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33830 = state_32220;
state_32220 = G__33830;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
cljs$core$async$state_machine__28851__auto__ = function(state_32220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28851__auto____1.call(this,state_32220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28851__auto____0;
cljs$core$async$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28851__auto____1;
return cljs$core$async$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_32259 = f__29084__auto__();
(statearr_32259[(6)] = c__29083__auto___33787);

return statearr_32259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
