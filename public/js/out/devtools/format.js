// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8328__auto__ = (((value == null))?null:value);
var m__8329__auto__ = (devtools.format._header[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,value);
} else {
var m__8329__auto____$1 = (devtools.format._header["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8328__auto__ = (((value == null))?null:value);
var m__8329__auto__ = (devtools.format._has_body[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,value);
} else {
var m__8329__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8328__auto__ = (((value == null))?null:value);
var m__8329__auto__ = (devtools.format._body[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,value);
} else {
var m__8329__auto____$1 = (devtools.format._body["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9294 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9294["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9295 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9295["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9296 = temp__4655__auto____$2;
return (o9296["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9297 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9297["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9298 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9298["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9299 = temp__4655__auto____$2;
return (o9299["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9300 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9300["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9301 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9301["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9302 = temp__4655__auto____$2;
return (o9302["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9303 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9303["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9304 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9304["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9305 = temp__4655__auto____$2;
return (o9305["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9306 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9306["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9307 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9307["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9308 = temp__4655__auto____$2;
return (o9308["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9309 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9309["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9310 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9310["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9311 = temp__4655__auto____$2;
return (o9311["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9312 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9312["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9313 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9313["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9314 = temp__4655__auto____$2;
return (o9314["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9316 = arguments.length;
var i__8815__auto___9317 = (0);
while(true){
if((i__8815__auto___9317 < len__8814__auto___9316)){
args__8821__auto__.push((arguments[i__8815__auto___9317]));

var G__9318 = (i__8815__auto___9317 + (1));
i__8815__auto___9317 = G__9318;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq9315){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9315));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9320 = arguments.length;
var i__8815__auto___9321 = (0);
while(true){
if((i__8815__auto___9321 < len__8814__auto___9320)){
args__8821__auto__.push((arguments[i__8815__auto___9321]));

var G__9322 = (i__8815__auto___9321 + (1));
i__8815__auto___9321 = G__9322;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq9319){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9319));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9324 = arguments.length;
var i__8815__auto___9325 = (0);
while(true){
if((i__8815__auto___9325 < len__8814__auto___9324)){
args__8821__auto__.push((arguments[i__8815__auto___9325]));

var G__9326 = (i__8815__auto___9325 + (1));
i__8815__auto___9325 = G__9326;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq9323){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9323));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9328 = arguments.length;
var i__8815__auto___9329 = (0);
while(true){
if((i__8815__auto___9329 < len__8814__auto___9328)){
args__8821__auto__.push((arguments[i__8815__auto___9329]));

var G__9330 = (i__8815__auto___9329 + (1));
i__8815__auto___9329 = G__9330;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq9327){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9327));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9332 = arguments.length;
var i__8815__auto___9333 = (0);
while(true){
if((i__8815__auto___9333 < len__8814__auto___9332)){
args__8821__auto__.push((arguments[i__8815__auto___9333]));

var G__9334 = (i__8815__auto___9333 + (1));
i__8815__auto___9333 = G__9334;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq9331){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9331));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9336 = arguments.length;
var i__8815__auto___9337 = (0);
while(true){
if((i__8815__auto___9337 < len__8814__auto___9336)){
args__8821__auto__.push((arguments[i__8815__auto___9337]));

var G__9338 = (i__8815__auto___9337 + (1));
i__8815__auto___9337 = G__9338;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq9335){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9335));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9340 = arguments.length;
var i__8815__auto___9341 = (0);
while(true){
if((i__8815__auto___9341 < len__8814__auto___9340)){
args__8821__auto__.push((arguments[i__8815__auto___9341]));

var G__9342 = (i__8815__auto___9341 + (1));
i__8815__auto___9341 = G__9342;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq9339){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9339));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9350 = arguments.length;
var i__8815__auto___9351 = (0);
while(true){
if((i__8815__auto___9351 < len__8814__auto___9350)){
args__8821__auto__.push((arguments[i__8815__auto___9351]));

var G__9352 = (i__8815__auto___9351 + (1));
i__8815__auto___9351 = G__9352;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__9346){
var vec__9347 = p__9346;
var state_override = cljs.core.nth.call(null,vec__9347,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__9347,state_override){
return (function (p1__9343_SHARP_){
return cljs.core.merge.call(null,p1__9343_SHARP_,state_override);
});})(vec__9347,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq9344){
var G__9345 = cljs.core.first.call(null,seq9344);
var seq9344__$1 = cljs.core.next.call(null,seq9344);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__9345,seq9344__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9354 = arguments.length;
var i__8815__auto___9355 = (0);
while(true){
if((i__8815__auto___9355 < len__8814__auto___9354)){
args__8821__auto__.push((arguments[i__8815__auto___9355]));

var G__9356 = (i__8815__auto___9355 + (1));
i__8815__auto___9355 = G__9356;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq9353){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9353));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8821__auto__ = [];
var len__8814__auto___9359 = arguments.length;
var i__8815__auto___9360 = (0);
while(true){
if((i__8815__auto___9360 < len__8814__auto___9359)){
args__8821__auto__.push((arguments[i__8815__auto___9360]));

var G__9361 = (i__8815__auto___9360 + (1));
i__8815__auto___9360 = G__9361;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq9357){
var G__9358 = cljs.core.first.call(null,seq9357);
var seq9357__$1 = cljs.core.next.call(null,seq9357);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__9358,seq9357__$1);
});


//# sourceMappingURL=format.js.map
