// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('khtut.core');
goog.require('figwheel.client.utils');
goog.require('khtut.dev');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__57583__delegate = function (x){
if(cljs.core.truth_(khtut.core.mount_root)){
return cljs.core.apply.call(null,khtut.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'khtut.core/mount-root' is missing");
}
};
var G__57583 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__57584__i = 0, G__57584__a = new Array(arguments.length -  0);
while (G__57584__i < G__57584__a.length) {G__57584__a[G__57584__i] = arguments[G__57584__i + 0]; ++G__57584__i;}
  x = new cljs.core.IndexedSeq(G__57584__a,0,null);
} 
return G__57583__delegate.call(this,x);};
G__57583.cljs$lang$maxFixedArity = 0;
G__57583.cljs$lang$applyTo = (function (arglist__57585){
var x = cljs.core.seq(arglist__57585);
return G__57583__delegate(x);
});
G__57583.cljs$core$IFn$_invoke$arity$variadic = G__57583__delegate;
return G__57583;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1509240014493
