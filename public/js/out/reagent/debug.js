// Compiled by ClojureScript 1.9.908 {}
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
var G__12052__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12053__i = 0, G__12053__a = new Array(arguments.length -  0);
while (G__12053__i < G__12053__a.length) {G__12053__a[G__12053__i] = arguments[G__12053__i + 0]; ++G__12053__i;}
  args = new cljs.core.IndexedSeq(G__12053__a,0,null);
} 
return G__12052__delegate.call(this,args);};
G__12052.cljs$lang$maxFixedArity = 0;
G__12052.cljs$lang$applyTo = (function (arglist__12054){
var args = cljs.core.seq(arglist__12054);
return G__12052__delegate(args);
});
G__12052.cljs$core$IFn$_invoke$arity$variadic = G__12052__delegate;
return G__12052;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12055__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12056__i = 0, G__12056__a = new Array(arguments.length -  0);
while (G__12056__i < G__12056__a.length) {G__12056__a[G__12056__i] = arguments[G__12056__i + 0]; ++G__12056__i;}
  args = new cljs.core.IndexedSeq(G__12056__a,0,null);
} 
return G__12055__delegate.call(this,args);};
G__12055.cljs$lang$maxFixedArity = 0;
G__12055.cljs$lang$applyTo = (function (arglist__12057){
var args = cljs.core.seq(arglist__12057);
return G__12055__delegate(args);
});
G__12055.cljs$core$IFn$_invoke$arity$variadic = G__12055__delegate;
return G__12055;
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

//# sourceMappingURL=debug.js.map
