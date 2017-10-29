// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56336){
var map__56337 = p__56336;
var map__56337__$1 = ((((!((map__56337 == null)))?((((map__56337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56337):map__56337);
var m = map__56337__$1;
var n = cljs.core.get.call(null,map__56337__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__56337__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56339_56361 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56340_56362 = null;
var count__56341_56363 = (0);
var i__56342_56364 = (0);
while(true){
if((i__56342_56364 < count__56341_56363)){
var f_56365 = cljs.core._nth.call(null,chunk__56340_56362,i__56342_56364);
cljs.core.println.call(null,"  ",f_56365);

var G__56366 = seq__56339_56361;
var G__56367 = chunk__56340_56362;
var G__56368 = count__56341_56363;
var G__56369 = (i__56342_56364 + (1));
seq__56339_56361 = G__56366;
chunk__56340_56362 = G__56367;
count__56341_56363 = G__56368;
i__56342_56364 = G__56369;
continue;
} else {
var temp__4657__auto___56370 = cljs.core.seq.call(null,seq__56339_56361);
if(temp__4657__auto___56370){
var seq__56339_56371__$1 = temp__4657__auto___56370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56339_56371__$1)){
var c__28828__auto___56372 = cljs.core.chunk_first.call(null,seq__56339_56371__$1);
var G__56373 = cljs.core.chunk_rest.call(null,seq__56339_56371__$1);
var G__56374 = c__28828__auto___56372;
var G__56375 = cljs.core.count.call(null,c__28828__auto___56372);
var G__56376 = (0);
seq__56339_56361 = G__56373;
chunk__56340_56362 = G__56374;
count__56341_56363 = G__56375;
i__56342_56364 = G__56376;
continue;
} else {
var f_56377 = cljs.core.first.call(null,seq__56339_56371__$1);
cljs.core.println.call(null,"  ",f_56377);

var G__56378 = cljs.core.next.call(null,seq__56339_56371__$1);
var G__56379 = null;
var G__56380 = (0);
var G__56381 = (0);
seq__56339_56361 = G__56378;
chunk__56340_56362 = G__56379;
count__56341_56363 = G__56380;
i__56342_56364 = G__56381;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56382 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_56382);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_56382)))?cljs.core.second.call(null,arglists_56382):arglists_56382));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56343_56383 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56344_56384 = null;
var count__56345_56385 = (0);
var i__56346_56386 = (0);
while(true){
if((i__56346_56386 < count__56345_56385)){
var vec__56347_56387 = cljs.core._nth.call(null,chunk__56344_56384,i__56346_56386);
var name_56388 = cljs.core.nth.call(null,vec__56347_56387,(0),null);
var map__56350_56389 = cljs.core.nth.call(null,vec__56347_56387,(1),null);
var map__56350_56390__$1 = ((((!((map__56350_56389 == null)))?((((map__56350_56389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56350_56389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56350_56389):map__56350_56389);
var doc_56391 = cljs.core.get.call(null,map__56350_56390__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56392 = cljs.core.get.call(null,map__56350_56390__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56388);

cljs.core.println.call(null," ",arglists_56392);

if(cljs.core.truth_(doc_56391)){
cljs.core.println.call(null," ",doc_56391);
} else {
}

var G__56393 = seq__56343_56383;
var G__56394 = chunk__56344_56384;
var G__56395 = count__56345_56385;
var G__56396 = (i__56346_56386 + (1));
seq__56343_56383 = G__56393;
chunk__56344_56384 = G__56394;
count__56345_56385 = G__56395;
i__56346_56386 = G__56396;
continue;
} else {
var temp__4657__auto___56397 = cljs.core.seq.call(null,seq__56343_56383);
if(temp__4657__auto___56397){
var seq__56343_56398__$1 = temp__4657__auto___56397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56343_56398__$1)){
var c__28828__auto___56399 = cljs.core.chunk_first.call(null,seq__56343_56398__$1);
var G__56400 = cljs.core.chunk_rest.call(null,seq__56343_56398__$1);
var G__56401 = c__28828__auto___56399;
var G__56402 = cljs.core.count.call(null,c__28828__auto___56399);
var G__56403 = (0);
seq__56343_56383 = G__56400;
chunk__56344_56384 = G__56401;
count__56345_56385 = G__56402;
i__56346_56386 = G__56403;
continue;
} else {
var vec__56352_56404 = cljs.core.first.call(null,seq__56343_56398__$1);
var name_56405 = cljs.core.nth.call(null,vec__56352_56404,(0),null);
var map__56355_56406 = cljs.core.nth.call(null,vec__56352_56404,(1),null);
var map__56355_56407__$1 = ((((!((map__56355_56406 == null)))?((((map__56355_56406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56355_56406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56355_56406):map__56355_56406);
var doc_56408 = cljs.core.get.call(null,map__56355_56407__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56409 = cljs.core.get.call(null,map__56355_56407__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56405);

cljs.core.println.call(null," ",arglists_56409);

if(cljs.core.truth_(doc_56408)){
cljs.core.println.call(null," ",doc_56408);
} else {
}

var G__56410 = cljs.core.next.call(null,seq__56343_56398__$1);
var G__56411 = null;
var G__56412 = (0);
var G__56413 = (0);
seq__56343_56383 = G__56410;
chunk__56344_56384 = G__56411;
count__56345_56385 = G__56412;
i__56346_56386 = G__56413;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__56357 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56358 = null;
var count__56359 = (0);
var i__56360 = (0);
while(true){
if((i__56360 < count__56359)){
var role = cljs.core._nth.call(null,chunk__56358,i__56360);
var temp__4657__auto___56414__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___56414__$1)){
var spec_56415 = temp__4657__auto___56414__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56415));
} else {
}

var G__56416 = seq__56357;
var G__56417 = chunk__56358;
var G__56418 = count__56359;
var G__56419 = (i__56360 + (1));
seq__56357 = G__56416;
chunk__56358 = G__56417;
count__56359 = G__56418;
i__56360 = G__56419;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__56357);
if(temp__4657__auto____$1){
var seq__56357__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56357__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__56357__$1);
var G__56420 = cljs.core.chunk_rest.call(null,seq__56357__$1);
var G__56421 = c__28828__auto__;
var G__56422 = cljs.core.count.call(null,c__28828__auto__);
var G__56423 = (0);
seq__56357 = G__56420;
chunk__56358 = G__56421;
count__56359 = G__56422;
i__56360 = G__56423;
continue;
} else {
var role = cljs.core.first.call(null,seq__56357__$1);
var temp__4657__auto___56424__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___56424__$2)){
var spec_56425 = temp__4657__auto___56424__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56425));
} else {
}

var G__56426 = cljs.core.next.call(null,seq__56357__$1);
var G__56427 = null;
var G__56428 = (0);
var G__56429 = (0);
seq__56357 = G__56426;
chunk__56358 = G__56427;
count__56359 = G__56428;
i__56360 = G__56429;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1509236548323
