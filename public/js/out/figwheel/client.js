// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e56624){if((e56624 instanceof Error)){
var e = e56624;
return "Error: Unable to stringify";
} else {
throw e56624;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__56627 = arguments.length;
switch (G__56627) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__56625_SHARP_){
if(typeof p1__56625_SHARP_ === 'string'){
return p1__56625_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__56625_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___56630 = arguments.length;
var i__29159__auto___56631 = (0);
while(true){
if((i__29159__auto___56631 < len__29158__auto___56630)){
args__29165__auto__.push((arguments[i__29159__auto___56631]));

var G__56632 = (i__29159__auto___56631 + (1));
i__29159__auto___56631 = G__56632;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq56629){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56629));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___56634 = arguments.length;
var i__29159__auto___56635 = (0);
while(true){
if((i__29159__auto___56635 < len__29158__auto___56634)){
args__29165__auto__.push((arguments[i__29159__auto___56635]));

var G__56636 = (i__29159__auto___56635 + (1));
i__29159__auto___56635 = G__56636;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq56633){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56633));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__56637){
var map__56638 = p__56637;
var map__56638__$1 = ((((!((map__56638 == null)))?((((map__56638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56638):map__56638);
var message = cljs.core.get.call(null,map__56638__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__56638__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27989__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27977__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27977__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27977__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30467__auto___56717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___56717,ch){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___56717,ch){
return (function (state_56689){
var state_val_56690 = (state_56689[(1)]);
if((state_val_56690 === (7))){
var inst_56685 = (state_56689[(2)]);
var state_56689__$1 = state_56689;
var statearr_56691_56718 = state_56689__$1;
(statearr_56691_56718[(2)] = inst_56685);

(statearr_56691_56718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (1))){
var state_56689__$1 = state_56689;
var statearr_56692_56719 = state_56689__$1;
(statearr_56692_56719[(2)] = null);

(statearr_56692_56719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (4))){
var inst_56642 = (state_56689[(7)]);
var inst_56642__$1 = (state_56689[(2)]);
var state_56689__$1 = (function (){var statearr_56693 = state_56689;
(statearr_56693[(7)] = inst_56642__$1);

return statearr_56693;
})();
if(cljs.core.truth_(inst_56642__$1)){
var statearr_56694_56720 = state_56689__$1;
(statearr_56694_56720[(1)] = (5));

} else {
var statearr_56695_56721 = state_56689__$1;
(statearr_56695_56721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (15))){
var inst_56649 = (state_56689[(8)]);
var inst_56664 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56649);
var inst_56665 = cljs.core.first.call(null,inst_56664);
var inst_56666 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_56665);
var inst_56667 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56666)].join('');
var inst_56668 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_56667);
var state_56689__$1 = state_56689;
var statearr_56696_56722 = state_56689__$1;
(statearr_56696_56722[(2)] = inst_56668);

(statearr_56696_56722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (13))){
var inst_56673 = (state_56689[(2)]);
var state_56689__$1 = state_56689;
var statearr_56697_56723 = state_56689__$1;
(statearr_56697_56723[(2)] = inst_56673);

(statearr_56697_56723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (6))){
var state_56689__$1 = state_56689;
var statearr_56698_56724 = state_56689__$1;
(statearr_56698_56724[(2)] = null);

(statearr_56698_56724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (17))){
var inst_56671 = (state_56689[(2)]);
var state_56689__$1 = state_56689;
var statearr_56699_56725 = state_56689__$1;
(statearr_56699_56725[(2)] = inst_56671);

(statearr_56699_56725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (3))){
var inst_56687 = (state_56689[(2)]);
var state_56689__$1 = state_56689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56689__$1,inst_56687);
} else {
if((state_val_56690 === (12))){
var inst_56648 = (state_56689[(9)]);
var inst_56662 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_56648,opts);
var state_56689__$1 = state_56689;
if(cljs.core.truth_(inst_56662)){
var statearr_56700_56726 = state_56689__$1;
(statearr_56700_56726[(1)] = (15));

} else {
var statearr_56701_56727 = state_56689__$1;
(statearr_56701_56727[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (2))){
var state_56689__$1 = state_56689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56689__$1,(4),ch);
} else {
if((state_val_56690 === (11))){
var inst_56649 = (state_56689[(8)]);
var inst_56654 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56655 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_56649);
var inst_56656 = cljs.core.async.timeout.call(null,(1000));
var inst_56657 = [inst_56655,inst_56656];
var inst_56658 = (new cljs.core.PersistentVector(null,2,(5),inst_56654,inst_56657,null));
var state_56689__$1 = state_56689;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56689__$1,(14),inst_56658);
} else {
if((state_val_56690 === (9))){
var inst_56649 = (state_56689[(8)]);
var inst_56675 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_56676 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56649);
var inst_56677 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56676);
var inst_56678 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56677)].join('');
var inst_56679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_56678);
var state_56689__$1 = (function (){var statearr_56702 = state_56689;
(statearr_56702[(10)] = inst_56675);

return statearr_56702;
})();
var statearr_56703_56728 = state_56689__$1;
(statearr_56703_56728[(2)] = inst_56679);

(statearr_56703_56728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (5))){
var inst_56642 = (state_56689[(7)]);
var inst_56644 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_56645 = (new cljs.core.PersistentArrayMap(null,2,inst_56644,null));
var inst_56646 = (new cljs.core.PersistentHashSet(null,inst_56645,null));
var inst_56647 = figwheel.client.focus_msgs.call(null,inst_56646,inst_56642);
var inst_56648 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_56647);
var inst_56649 = cljs.core.first.call(null,inst_56647);
var inst_56650 = figwheel.client.autoload_QMARK_.call(null);
var state_56689__$1 = (function (){var statearr_56704 = state_56689;
(statearr_56704[(9)] = inst_56648);

(statearr_56704[(8)] = inst_56649);

return statearr_56704;
})();
if(cljs.core.truth_(inst_56650)){
var statearr_56705_56729 = state_56689__$1;
(statearr_56705_56729[(1)] = (8));

} else {
var statearr_56706_56730 = state_56689__$1;
(statearr_56706_56730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (14))){
var inst_56660 = (state_56689[(2)]);
var state_56689__$1 = state_56689;
var statearr_56707_56731 = state_56689__$1;
(statearr_56707_56731[(2)] = inst_56660);

(statearr_56707_56731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (16))){
var state_56689__$1 = state_56689;
var statearr_56708_56732 = state_56689__$1;
(statearr_56708_56732[(2)] = null);

(statearr_56708_56732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (10))){
var inst_56681 = (state_56689[(2)]);
var state_56689__$1 = (function (){var statearr_56709 = state_56689;
(statearr_56709[(11)] = inst_56681);

return statearr_56709;
})();
var statearr_56710_56733 = state_56689__$1;
(statearr_56710_56733[(2)] = null);

(statearr_56710_56733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56690 === (8))){
var inst_56648 = (state_56689[(9)]);
var inst_56652 = figwheel.client.reload_file_state_QMARK_.call(null,inst_56648,opts);
var state_56689__$1 = state_56689;
if(cljs.core.truth_(inst_56652)){
var statearr_56711_56734 = state_56689__$1;
(statearr_56711_56734[(1)] = (11));

} else {
var statearr_56712_56735 = state_56689__$1;
(statearr_56712_56735[(1)] = (12));

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
});})(c__30467__auto___56717,ch))
;
return ((function (switch__30446__auto__,c__30467__auto___56717,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____0 = (function (){
var statearr_56713 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56713[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__);

(statearr_56713[(1)] = (1));

return statearr_56713;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____1 = (function (state_56689){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_56689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e56714){if((e56714 instanceof Object)){
var ex__30450__auto__ = e56714;
var statearr_56715_56736 = state_56689;
(statearr_56715_56736[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56737 = state_56689;
state_56689 = G__56737;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__ = function(state_56689){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____1.call(this,state_56689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___56717,ch))
})();
var state__30469__auto__ = (function (){var statearr_56716 = f__30468__auto__.call(null);
(statearr_56716[(6)] = c__30467__auto___56717);

return statearr_56716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___56717,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__56738_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__56738_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_56740 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_56740){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e56739){if((e56739 instanceof Error)){
var e = e56739;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_56740], null));
} else {
var e = e56739;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_56740))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__56741){
var map__56742 = p__56741;
var map__56742__$1 = ((((!((map__56742 == null)))?((((map__56742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56742):map__56742);
var opts = map__56742__$1;
var build_id = cljs.core.get.call(null,map__56742__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__56742,map__56742__$1,opts,build_id){
return (function (p__56744){
var vec__56745 = p__56744;
var seq__56746 = cljs.core.seq.call(null,vec__56745);
var first__56747 = cljs.core.first.call(null,seq__56746);
var seq__56746__$1 = cljs.core.next.call(null,seq__56746);
var map__56748 = first__56747;
var map__56748__$1 = ((((!((map__56748 == null)))?((((map__56748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56748):map__56748);
var msg = map__56748__$1;
var msg_name = cljs.core.get.call(null,map__56748__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56746__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__56745,seq__56746,first__56747,seq__56746__$1,map__56748,map__56748__$1,msg,msg_name,_,map__56742,map__56742__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__56745,seq__56746,first__56747,seq__56746__$1,map__56748,map__56748__$1,msg,msg_name,_,map__56742,map__56742__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__56742,map__56742__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56750){
var vec__56751 = p__56750;
var seq__56752 = cljs.core.seq.call(null,vec__56751);
var first__56753 = cljs.core.first.call(null,seq__56752);
var seq__56752__$1 = cljs.core.next.call(null,seq__56752);
var map__56754 = first__56753;
var map__56754__$1 = ((((!((map__56754 == null)))?((((map__56754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56754):map__56754);
var msg = map__56754__$1;
var msg_name = cljs.core.get.call(null,map__56754__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56752__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56756){
var map__56757 = p__56756;
var map__56757__$1 = ((((!((map__56757 == null)))?((((map__56757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56757):map__56757);
var on_compile_warning = cljs.core.get.call(null,map__56757__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56757__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__56757,map__56757__$1,on_compile_warning,on_compile_fail){
return (function (p__56759){
var vec__56760 = p__56759;
var seq__56761 = cljs.core.seq.call(null,vec__56760);
var first__56762 = cljs.core.first.call(null,seq__56761);
var seq__56761__$1 = cljs.core.next.call(null,seq__56761);
var map__56763 = first__56762;
var map__56763__$1 = ((((!((map__56763 == null)))?((((map__56763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56763):map__56763);
var msg = map__56763__$1;
var msg_name = cljs.core.get.call(null,map__56763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56761__$1;
var pred__56765 = cljs.core._EQ_;
var expr__56766 = msg_name;
if(cljs.core.truth_(pred__56765.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56766))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56765.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56766))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__56757,map__56757__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__,msg_hist,msg_names,msg){
return (function (state_56855){
var state_val_56856 = (state_56855[(1)]);
if((state_val_56856 === (7))){
var inst_56775 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56775)){
var statearr_56857_56904 = state_56855__$1;
(statearr_56857_56904[(1)] = (8));

} else {
var statearr_56858_56905 = state_56855__$1;
(statearr_56858_56905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (20))){
var inst_56849 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56859_56906 = state_56855__$1;
(statearr_56859_56906[(2)] = inst_56849);

(statearr_56859_56906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (27))){
var inst_56845 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56860_56907 = state_56855__$1;
(statearr_56860_56907[(2)] = inst_56845);

(statearr_56860_56907[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (1))){
var inst_56768 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56768)){
var statearr_56861_56908 = state_56855__$1;
(statearr_56861_56908[(1)] = (2));

} else {
var statearr_56862_56909 = state_56855__$1;
(statearr_56862_56909[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (24))){
var inst_56847 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56863_56910 = state_56855__$1;
(statearr_56863_56910[(2)] = inst_56847);

(statearr_56863_56910[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (4))){
var inst_56853 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56855__$1,inst_56853);
} else {
if((state_val_56856 === (15))){
var inst_56851 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56864_56911 = state_56855__$1;
(statearr_56864_56911[(2)] = inst_56851);

(statearr_56864_56911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (21))){
var inst_56804 = (state_56855[(2)]);
var inst_56805 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56806 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56805);
var state_56855__$1 = (function (){var statearr_56865 = state_56855;
(statearr_56865[(7)] = inst_56804);

return statearr_56865;
})();
var statearr_56866_56912 = state_56855__$1;
(statearr_56866_56912[(2)] = inst_56806);

(statearr_56866_56912[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (31))){
var inst_56834 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56834)){
var statearr_56867_56913 = state_56855__$1;
(statearr_56867_56913[(1)] = (34));

} else {
var statearr_56868_56914 = state_56855__$1;
(statearr_56868_56914[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (32))){
var inst_56843 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56869_56915 = state_56855__$1;
(statearr_56869_56915[(2)] = inst_56843);

(statearr_56869_56915[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (33))){
var inst_56830 = (state_56855[(2)]);
var inst_56831 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56832 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56831);
var state_56855__$1 = (function (){var statearr_56870 = state_56855;
(statearr_56870[(8)] = inst_56830);

return statearr_56870;
})();
var statearr_56871_56916 = state_56855__$1;
(statearr_56871_56916[(2)] = inst_56832);

(statearr_56871_56916[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (13))){
var inst_56789 = figwheel.client.heads_up.clear.call(null);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(16),inst_56789);
} else {
if((state_val_56856 === (22))){
var inst_56810 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56811 = figwheel.client.heads_up.append_warning_message.call(null,inst_56810);
var state_56855__$1 = state_56855;
var statearr_56872_56917 = state_56855__$1;
(statearr_56872_56917[(2)] = inst_56811);

(statearr_56872_56917[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (36))){
var inst_56841 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56873_56918 = state_56855__$1;
(statearr_56873_56918[(2)] = inst_56841);

(statearr_56873_56918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (29))){
var inst_56821 = (state_56855[(2)]);
var inst_56822 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56823 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56822);
var state_56855__$1 = (function (){var statearr_56874 = state_56855;
(statearr_56874[(9)] = inst_56821);

return statearr_56874;
})();
var statearr_56875_56919 = state_56855__$1;
(statearr_56875_56919[(2)] = inst_56823);

(statearr_56875_56919[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (6))){
var inst_56770 = (state_56855[(10)]);
var state_56855__$1 = state_56855;
var statearr_56876_56920 = state_56855__$1;
(statearr_56876_56920[(2)] = inst_56770);

(statearr_56876_56920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (28))){
var inst_56817 = (state_56855[(2)]);
var inst_56818 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56819 = figwheel.client.heads_up.display_warning.call(null,inst_56818);
var state_56855__$1 = (function (){var statearr_56877 = state_56855;
(statearr_56877[(11)] = inst_56817);

return statearr_56877;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(29),inst_56819);
} else {
if((state_val_56856 === (25))){
var inst_56815 = figwheel.client.heads_up.clear.call(null);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(28),inst_56815);
} else {
if((state_val_56856 === (34))){
var inst_56836 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(37),inst_56836);
} else {
if((state_val_56856 === (17))){
var inst_56795 = (state_56855[(2)]);
var inst_56796 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56797 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56796);
var state_56855__$1 = (function (){var statearr_56878 = state_56855;
(statearr_56878[(12)] = inst_56795);

return statearr_56878;
})();
var statearr_56879_56921 = state_56855__$1;
(statearr_56879_56921[(2)] = inst_56797);

(statearr_56879_56921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (3))){
var inst_56787 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56787)){
var statearr_56880_56922 = state_56855__$1;
(statearr_56880_56922[(1)] = (13));

} else {
var statearr_56881_56923 = state_56855__$1;
(statearr_56881_56923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (12))){
var inst_56783 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56882_56924 = state_56855__$1;
(statearr_56882_56924[(2)] = inst_56783);

(statearr_56882_56924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (2))){
var inst_56770 = (state_56855[(10)]);
var inst_56770__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56855__$1 = (function (){var statearr_56883 = state_56855;
(statearr_56883[(10)] = inst_56770__$1);

return statearr_56883;
})();
if(cljs.core.truth_(inst_56770__$1)){
var statearr_56884_56925 = state_56855__$1;
(statearr_56884_56925[(1)] = (5));

} else {
var statearr_56885_56926 = state_56855__$1;
(statearr_56885_56926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (23))){
var inst_56813 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56813)){
var statearr_56886_56927 = state_56855__$1;
(statearr_56886_56927[(1)] = (25));

} else {
var statearr_56887_56928 = state_56855__$1;
(statearr_56887_56928[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (35))){
var state_56855__$1 = state_56855;
var statearr_56888_56929 = state_56855__$1;
(statearr_56888_56929[(2)] = null);

(statearr_56888_56929[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (19))){
var inst_56808 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56808)){
var statearr_56889_56930 = state_56855__$1;
(statearr_56889_56930[(1)] = (22));

} else {
var statearr_56890_56931 = state_56855__$1;
(statearr_56890_56931[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (11))){
var inst_56779 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56891_56932 = state_56855__$1;
(statearr_56891_56932[(2)] = inst_56779);

(statearr_56891_56932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (9))){
var inst_56781 = figwheel.client.heads_up.clear.call(null);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(12),inst_56781);
} else {
if((state_val_56856 === (5))){
var inst_56772 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56855__$1 = state_56855;
var statearr_56892_56933 = state_56855__$1;
(statearr_56892_56933[(2)] = inst_56772);

(statearr_56892_56933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (14))){
var inst_56799 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56799)){
var statearr_56893_56934 = state_56855__$1;
(statearr_56893_56934[(1)] = (18));

} else {
var statearr_56894_56935 = state_56855__$1;
(statearr_56894_56935[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (26))){
var inst_56825 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56825)){
var statearr_56895_56936 = state_56855__$1;
(statearr_56895_56936[(1)] = (30));

} else {
var statearr_56896_56937 = state_56855__$1;
(statearr_56896_56937[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (16))){
var inst_56791 = (state_56855[(2)]);
var inst_56792 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56793 = figwheel.client.heads_up.display_exception.call(null,inst_56792);
var state_56855__$1 = (function (){var statearr_56897 = state_56855;
(statearr_56897[(13)] = inst_56791);

return statearr_56897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(17),inst_56793);
} else {
if((state_val_56856 === (30))){
var inst_56827 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56828 = figwheel.client.heads_up.display_warning.call(null,inst_56827);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(33),inst_56828);
} else {
if((state_val_56856 === (10))){
var inst_56785 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56898_56938 = state_56855__$1;
(statearr_56898_56938[(2)] = inst_56785);

(statearr_56898_56938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (18))){
var inst_56801 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56802 = figwheel.client.heads_up.display_exception.call(null,inst_56801);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(21),inst_56802);
} else {
if((state_val_56856 === (37))){
var inst_56838 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56899_56939 = state_56855__$1;
(statearr_56899_56939[(2)] = inst_56838);

(statearr_56899_56939[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (8))){
var inst_56777 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56855__$1,(11),inst_56777);
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
});})(c__30467__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30446__auto__,c__30467__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____0 = (function (){
var statearr_56900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56900[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__);

(statearr_56900[(1)] = (1));

return statearr_56900;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____1 = (function (state_56855){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_56855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e56901){if((e56901 instanceof Object)){
var ex__30450__auto__ = e56901;
var statearr_56902_56940 = state_56855;
(statearr_56902_56940[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56941 = state_56855;
state_56855 = G__56941;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__ = function(state_56855){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____1.call(this,state_56855);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__,msg_hist,msg_names,msg))
})();
var state__30469__auto__ = (function (){var statearr_56903 = f__30468__auto__.call(null);
(statearr_56903[(6)] = c__30467__auto__);

return statearr_56903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__,msg_hist,msg_names,msg))
);

return c__30467__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30467__auto___56970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___56970,ch){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___56970,ch){
return (function (state_56956){
var state_val_56957 = (state_56956[(1)]);
if((state_val_56957 === (1))){
var state_56956__$1 = state_56956;
var statearr_56958_56971 = state_56956__$1;
(statearr_56958_56971[(2)] = null);

(statearr_56958_56971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (2))){
var state_56956__$1 = state_56956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56956__$1,(4),ch);
} else {
if((state_val_56957 === (3))){
var inst_56954 = (state_56956[(2)]);
var state_56956__$1 = state_56956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56956__$1,inst_56954);
} else {
if((state_val_56957 === (4))){
var inst_56944 = (state_56956[(7)]);
var inst_56944__$1 = (state_56956[(2)]);
var state_56956__$1 = (function (){var statearr_56959 = state_56956;
(statearr_56959[(7)] = inst_56944__$1);

return statearr_56959;
})();
if(cljs.core.truth_(inst_56944__$1)){
var statearr_56960_56972 = state_56956__$1;
(statearr_56960_56972[(1)] = (5));

} else {
var statearr_56961_56973 = state_56956__$1;
(statearr_56961_56973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (5))){
var inst_56944 = (state_56956[(7)]);
var inst_56946 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56944);
var state_56956__$1 = state_56956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56956__$1,(8),inst_56946);
} else {
if((state_val_56957 === (6))){
var state_56956__$1 = state_56956;
var statearr_56962_56974 = state_56956__$1;
(statearr_56962_56974[(2)] = null);

(statearr_56962_56974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (7))){
var inst_56952 = (state_56956[(2)]);
var state_56956__$1 = state_56956;
var statearr_56963_56975 = state_56956__$1;
(statearr_56963_56975[(2)] = inst_56952);

(statearr_56963_56975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56957 === (8))){
var inst_56948 = (state_56956[(2)]);
var state_56956__$1 = (function (){var statearr_56964 = state_56956;
(statearr_56964[(8)] = inst_56948);

return statearr_56964;
})();
var statearr_56965_56976 = state_56956__$1;
(statearr_56965_56976[(2)] = null);

(statearr_56965_56976[(1)] = (2));


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
});})(c__30467__auto___56970,ch))
;
return ((function (switch__30446__auto__,c__30467__auto___56970,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30447__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30447__auto____0 = (function (){
var statearr_56966 = [null,null,null,null,null,null,null,null,null];
(statearr_56966[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30447__auto__);

(statearr_56966[(1)] = (1));

return statearr_56966;
});
var figwheel$client$heads_up_plugin_$_state_machine__30447__auto____1 = (function (state_56956){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_56956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e56967){if((e56967 instanceof Object)){
var ex__30450__auto__ = e56967;
var statearr_56968_56977 = state_56956;
(statearr_56968_56977[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56978 = state_56956;
state_56956 = G__56978;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30447__auto__ = function(state_56956){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30447__auto____1.call(this,state_56956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30447__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30447__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___56970,ch))
})();
var state__30469__auto__ = (function (){var statearr_56969 = f__30468__auto__.call(null);
(statearr_56969[(6)] = c__30467__auto___56970);

return statearr_56969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___56970,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__){
return (function (state_56984){
var state_val_56985 = (state_56984[(1)]);
if((state_val_56985 === (1))){
var inst_56979 = cljs.core.async.timeout.call(null,(3000));
var state_56984__$1 = state_56984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56984__$1,(2),inst_56979);
} else {
if((state_val_56985 === (2))){
var inst_56981 = (state_56984[(2)]);
var inst_56982 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56984__$1 = (function (){var statearr_56986 = state_56984;
(statearr_56986[(7)] = inst_56981);

return statearr_56986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56984__$1,inst_56982);
} else {
return null;
}
}
});})(c__30467__auto__))
;
return ((function (switch__30446__auto__,c__30467__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____0 = (function (){
var statearr_56987 = [null,null,null,null,null,null,null,null];
(statearr_56987[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__);

(statearr_56987[(1)] = (1));

return statearr_56987;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____1 = (function (state_56984){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_56984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e56988){if((e56988 instanceof Object)){
var ex__30450__auto__ = e56988;
var statearr_56989_56991 = state_56984;
(statearr_56989_56991[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56992 = state_56984;
state_56984 = G__56992;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__ = function(state_56984){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____1.call(this,state_56984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__))
})();
var state__30469__auto__ = (function (){var statearr_56990 = f__30468__auto__.call(null);
(statearr_56990[(6)] = c__30467__auto__);

return statearr_56990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__))
);

return c__30467__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__,figwheel_version,temp__4657__auto__){
return (function (state_56999){
var state_val_57000 = (state_56999[(1)]);
if((state_val_57000 === (1))){
var inst_56993 = cljs.core.async.timeout.call(null,(2000));
var state_56999__$1 = state_56999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56999__$1,(2),inst_56993);
} else {
if((state_val_57000 === (2))){
var inst_56995 = (state_56999[(2)]);
var inst_56996 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_56997 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_56996);
var state_56999__$1 = (function (){var statearr_57001 = state_56999;
(statearr_57001[(7)] = inst_56995);

return statearr_57001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56999__$1,inst_56997);
} else {
return null;
}
}
});})(c__30467__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30446__auto__,c__30467__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____0 = (function (){
var statearr_57002 = [null,null,null,null,null,null,null,null];
(statearr_57002[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__);

(statearr_57002[(1)] = (1));

return statearr_57002;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____1 = (function (state_56999){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_56999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e57003){if((e57003 instanceof Object)){
var ex__30450__auto__ = e57003;
var statearr_57004_57006 = state_56999;
(statearr_57004_57006[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57007 = state_56999;
state_56999 = G__57007;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__ = function(state_56999){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____1.call(this,state_56999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30469__auto__ = (function (){var statearr_57005 = f__30468__auto__.call(null);
(statearr_57005[(6)] = c__30467__auto__);

return statearr_57005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__,figwheel_version,temp__4657__auto__))
);

return c__30467__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__57008){
var map__57009 = p__57008;
var map__57009__$1 = ((((!((map__57009 == null)))?((((map__57009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57009):map__57009);
var file = cljs.core.get.call(null,map__57009__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__57009__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__57009__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__57011 = "";
var G__57011__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57011),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__57011);
var G__57011__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57011__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__57011__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = line;
if(cljs.core.truth_(and__27977__auto__)){
return column;
} else {
return and__27977__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57011__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__57011__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__57012){
var map__57013 = p__57012;
var map__57013__$1 = ((((!((map__57013 == null)))?((((map__57013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57013):map__57013);
var ed = map__57013__$1;
var formatted_exception = cljs.core.get.call(null,map__57013__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__57013__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__57013__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__57015_57019 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__57016_57020 = null;
var count__57017_57021 = (0);
var i__57018_57022 = (0);
while(true){
if((i__57018_57022 < count__57017_57021)){
var msg_57023 = cljs.core._nth.call(null,chunk__57016_57020,i__57018_57022);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_57023);

var G__57024 = seq__57015_57019;
var G__57025 = chunk__57016_57020;
var G__57026 = count__57017_57021;
var G__57027 = (i__57018_57022 + (1));
seq__57015_57019 = G__57024;
chunk__57016_57020 = G__57025;
count__57017_57021 = G__57026;
i__57018_57022 = G__57027;
continue;
} else {
var temp__4657__auto___57028 = cljs.core.seq.call(null,seq__57015_57019);
if(temp__4657__auto___57028){
var seq__57015_57029__$1 = temp__4657__auto___57028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57015_57029__$1)){
var c__28828__auto___57030 = cljs.core.chunk_first.call(null,seq__57015_57029__$1);
var G__57031 = cljs.core.chunk_rest.call(null,seq__57015_57029__$1);
var G__57032 = c__28828__auto___57030;
var G__57033 = cljs.core.count.call(null,c__28828__auto___57030);
var G__57034 = (0);
seq__57015_57019 = G__57031;
chunk__57016_57020 = G__57032;
count__57017_57021 = G__57033;
i__57018_57022 = G__57034;
continue;
} else {
var msg_57035 = cljs.core.first.call(null,seq__57015_57029__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_57035);

var G__57036 = cljs.core.next.call(null,seq__57015_57029__$1);
var G__57037 = null;
var G__57038 = (0);
var G__57039 = (0);
seq__57015_57019 = G__57036;
chunk__57016_57020 = G__57037;
count__57017_57021 = G__57038;
i__57018_57022 = G__57039;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__57040){
var map__57041 = p__57040;
var map__57041__$1 = ((((!((map__57041 == null)))?((((map__57041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57041):map__57041);
var w = map__57041__$1;
var message = cljs.core.get.call(null,map__57041__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27977__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27977__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__57043 = cljs.core.seq.call(null,plugins);
var chunk__57044 = null;
var count__57045 = (0);
var i__57046 = (0);
while(true){
if((i__57046 < count__57045)){
var vec__57047 = cljs.core._nth.call(null,chunk__57044,i__57046);
var k = cljs.core.nth.call(null,vec__57047,(0),null);
var plugin = cljs.core.nth.call(null,vec__57047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57043,chunk__57044,count__57045,i__57046,pl_57053,vec__57047,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57053.call(null,msg_hist);
});})(seq__57043,chunk__57044,count__57045,i__57046,pl_57053,vec__57047,k,plugin))
);
} else {
}

var G__57054 = seq__57043;
var G__57055 = chunk__57044;
var G__57056 = count__57045;
var G__57057 = (i__57046 + (1));
seq__57043 = G__57054;
chunk__57044 = G__57055;
count__57045 = G__57056;
i__57046 = G__57057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57043);
if(temp__4657__auto__){
var seq__57043__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57043__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__57043__$1);
var G__57058 = cljs.core.chunk_rest.call(null,seq__57043__$1);
var G__57059 = c__28828__auto__;
var G__57060 = cljs.core.count.call(null,c__28828__auto__);
var G__57061 = (0);
seq__57043 = G__57058;
chunk__57044 = G__57059;
count__57045 = G__57060;
i__57046 = G__57061;
continue;
} else {
var vec__57050 = cljs.core.first.call(null,seq__57043__$1);
var k = cljs.core.nth.call(null,vec__57050,(0),null);
var plugin = cljs.core.nth.call(null,vec__57050,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57062 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57043,chunk__57044,count__57045,i__57046,pl_57062,vec__57050,k,plugin,seq__57043__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57062.call(null,msg_hist);
});})(seq__57043,chunk__57044,count__57045,i__57046,pl_57062,vec__57050,k,plugin,seq__57043__$1,temp__4657__auto__))
);
} else {
}

var G__57063 = cljs.core.next.call(null,seq__57043__$1);
var G__57064 = null;
var G__57065 = (0);
var G__57066 = (0);
seq__57043 = G__57063;
chunk__57044 = G__57064;
count__57045 = G__57065;
i__57046 = G__57066;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__57068 = arguments.length;
switch (G__57068) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__57069_57074 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57070_57075 = null;
var count__57071_57076 = (0);
var i__57072_57077 = (0);
while(true){
if((i__57072_57077 < count__57071_57076)){
var msg_57078 = cljs.core._nth.call(null,chunk__57070_57075,i__57072_57077);
figwheel.client.socket.handle_incoming_message.call(null,msg_57078);

var G__57079 = seq__57069_57074;
var G__57080 = chunk__57070_57075;
var G__57081 = count__57071_57076;
var G__57082 = (i__57072_57077 + (1));
seq__57069_57074 = G__57079;
chunk__57070_57075 = G__57080;
count__57071_57076 = G__57081;
i__57072_57077 = G__57082;
continue;
} else {
var temp__4657__auto___57083 = cljs.core.seq.call(null,seq__57069_57074);
if(temp__4657__auto___57083){
var seq__57069_57084__$1 = temp__4657__auto___57083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57069_57084__$1)){
var c__28828__auto___57085 = cljs.core.chunk_first.call(null,seq__57069_57084__$1);
var G__57086 = cljs.core.chunk_rest.call(null,seq__57069_57084__$1);
var G__57087 = c__28828__auto___57085;
var G__57088 = cljs.core.count.call(null,c__28828__auto___57085);
var G__57089 = (0);
seq__57069_57074 = G__57086;
chunk__57070_57075 = G__57087;
count__57071_57076 = G__57088;
i__57072_57077 = G__57089;
continue;
} else {
var msg_57090 = cljs.core.first.call(null,seq__57069_57084__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57090);

var G__57091 = cljs.core.next.call(null,seq__57069_57084__$1);
var G__57092 = null;
var G__57093 = (0);
var G__57094 = (0);
seq__57069_57074 = G__57091;
chunk__57070_57075 = G__57092;
count__57071_57076 = G__57093;
i__57072_57077 = G__57094;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29165__auto__ = [];
var len__29158__auto___57099 = arguments.length;
var i__29159__auto___57100 = (0);
while(true){
if((i__29159__auto___57100 < len__29158__auto___57099)){
args__29165__auto__.push((arguments[i__29159__auto___57100]));

var G__57101 = (i__29159__auto___57100 + (1));
i__29159__auto___57100 = G__57101;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57096){
var map__57097 = p__57096;
var map__57097__$1 = ((((!((map__57097 == null)))?((((map__57097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57097):map__57097);
var opts = map__57097__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57095){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57095));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57102){if((e57102 instanceof Error)){
var e = e57102;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e57102;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__57103){
var map__57104 = p__57103;
var map__57104__$1 = ((((!((map__57104 == null)))?((((map__57104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57104):map__57104);
var msg_name = cljs.core.get.call(null,map__57104__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509236549038
