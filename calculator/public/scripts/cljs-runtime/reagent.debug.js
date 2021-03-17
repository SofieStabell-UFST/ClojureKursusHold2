goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35648__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35649__i = 0, G__35649__a = new Array(arguments.length -  0);
while (G__35649__i < G__35649__a.length) {G__35649__a[G__35649__i] = arguments[G__35649__i + 0]; ++G__35649__i;}
  args = new cljs.core.IndexedSeq(G__35649__a,0,null);
} 
return G__35648__delegate.call(this,args);};
G__35648.cljs$lang$maxFixedArity = 0;
G__35648.cljs$lang$applyTo = (function (arglist__35650){
var args = cljs.core.seq(arglist__35650);
return G__35648__delegate(args);
});
G__35648.cljs$core$IFn$_invoke$arity$variadic = G__35648__delegate;
return G__35648;
})()
);

(o.error = (function() { 
var G__35651__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35652__i = 0, G__35652__a = new Array(arguments.length -  0);
while (G__35652__i < G__35652__a.length) {G__35652__a[G__35652__i] = arguments[G__35652__i + 0]; ++G__35652__i;}
  args = new cljs.core.IndexedSeq(G__35652__a,0,null);
} 
return G__35651__delegate.call(this,args);};
G__35651.cljs$lang$maxFixedArity = 0;
G__35651.cljs$lang$applyTo = (function (arglist__35653){
var args = cljs.core.seq(arglist__35653);
return G__35651__delegate(args);
});
G__35651.cljs$core$IFn$_invoke$arity$variadic = G__35651__delegate;
return G__35651;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
