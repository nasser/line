// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('khtut.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
khtut.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(300),cljs.core.cst$kw$y,(300),cljs.core.cst$kw$tangent_DASH_angle,Math.PI,cljs.core.cst$kw$tangent_DASH_size,(30),cljs.core.cst$kw$angle,(-2),cljs.core.cst$kw$width,(25)], null)], null));
khtut.core.ui_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_handles_QMARK_,true,cljs.core.cst$kw$show_DASH_centerlines_QMARK_,false], null));
khtut.core.client_to_page = (function khtut$core$client_to_page(event){
var svg = document.querySelector("svg");
var pt = svg.createSVGPoint();
pt.x = event.clientX;

pt.y = event.clientY;

return pt.matrixTransform(svg.getScreenCTM().inverse());
});
khtut.core.atan2 = (function khtut$core$atan2(a,b){
return Math.atan2(a,b);
});
khtut.core.sin = (function khtut$core$sin(x){
return Math.sin(x);
});
khtut.core.cos = (function khtut$core$cos(x){
return Math.cos(x);
});
khtut.core.pow = (function khtut$core$pow(x,a){
return Math.pow(x,a);
});
khtut.core.lerp = (function khtut$core$lerp(t,a,b){
return ((((1) - t) * a) + (t * b));
});
khtut.core.bezier = (function khtut$core$bezier(t,a,b,c,d){
return ((((a * khtut.core.pow(((1) - t),(3))) + (((b * (3)) * t) * khtut.core.pow(((1) - t),(2)))) + (((c * (3)) * ((1) - t)) * khtut.core.pow(t,(2)))) + (d * khtut.core.pow(t,(3))));
});
khtut.core.redraw_canvas = (function khtut$core$redraw_canvas(s){
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),s);
ctx.clearRect((0),(0),canvas.width,canvas.height);

var seq__13699 = cljs.core.seq(pairs);
var chunk__13700 = null;
var count__13701 = (0);
var i__13702 = (0);
while(true){
if((i__13702 < count__13701)){
var vec__13703 = chunk__13700.cljs$core$IIndexed$_nth$arity$2(null,i__13702);
var map__13706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(0),null);
var map__13706__$1 = ((((!((map__13706 == null)))?((((map__13706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13706):map__13706);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$x);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$y);
var angle1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$angle);
var width1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$width);
var tangle1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$tangent_DASH_angle);
var tsize1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$tangent_DASH_size);
var map__13707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(1),null);
var map__13707__$1 = ((((!((map__13707 == null)))?((((map__13707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13707):map__13707);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$x);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$y);
var angle2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$angle);
var width2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$width);
var tangle2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$tangent_DASH_angle);
var tsize2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$tangent_DASH_size);
var control1_x_13725 = (x1 + (tsize1 * khtut.core.cos(tangle1)));
var control1_y_13726 = (y1 + (tsize1 * khtut.core.sin(tangle1)));
var control2_x_13727 = (x2 - (tsize2 * khtut.core.cos(tangle2)));
var control2_y_13728 = (y2 - (tsize2 * khtut.core.sin(tangle2)));
var seq__13710_13729 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.005));
var chunk__13711_13730 = null;
var count__13712_13731 = (0);
var i__13713_13732 = (0);
while(true){
if((i__13713_13732 < count__13712_13731)){
var t_13733 = chunk__13711_13730.cljs$core$IIndexed$_nth$arity$2(null,i__13713_13732);
var x_STAR__13734 = khtut.core.bezier(t_13733,x1,control1_x_13725,control2_x_13727,x2);
var y_STAR__13735 = khtut.core.bezier(t_13733,y1,control1_y_13726,control2_y_13728,y2);
var angle_STAR__13736 = khtut.core.lerp(t_13733,angle1,angle2);
var width_STAR__13737 = khtut.core.lerp(t_13733,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__13734,y_STAR__13735,width_STAR__13737,(2),angle_STAR__13736,(0),((2) * Math.PI));

ctx.fill();

var G__13738 = seq__13710_13729;
var G__13739 = chunk__13711_13730;
var G__13740 = count__13712_13731;
var G__13741 = (i__13713_13732 + (1));
seq__13710_13729 = G__13738;
chunk__13711_13730 = G__13739;
count__13712_13731 = G__13740;
i__13713_13732 = G__13741;
continue;
} else {
var temp__4657__auto___13742 = cljs.core.seq(seq__13710_13729);
if(temp__4657__auto___13742){
var seq__13710_13743__$1 = temp__4657__auto___13742;
if(cljs.core.chunked_seq_QMARK_(seq__13710_13743__$1)){
var c__8484__auto___13744 = cljs.core.chunk_first(seq__13710_13743__$1);
var G__13745 = cljs.core.chunk_rest(seq__13710_13743__$1);
var G__13746 = c__8484__auto___13744;
var G__13747 = cljs.core.count(c__8484__auto___13744);
var G__13748 = (0);
seq__13710_13729 = G__13745;
chunk__13711_13730 = G__13746;
count__13712_13731 = G__13747;
i__13713_13732 = G__13748;
continue;
} else {
var t_13749 = cljs.core.first(seq__13710_13743__$1);
var x_STAR__13750 = khtut.core.bezier(t_13749,x1,control1_x_13725,control2_x_13727,x2);
var y_STAR__13751 = khtut.core.bezier(t_13749,y1,control1_y_13726,control2_y_13728,y2);
var angle_STAR__13752 = khtut.core.lerp(t_13749,angle1,angle2);
var width_STAR__13753 = khtut.core.lerp(t_13749,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__13750,y_STAR__13751,width_STAR__13753,(2),angle_STAR__13752,(0),((2) * Math.PI));

ctx.fill();

var G__13754 = cljs.core.next(seq__13710_13743__$1);
var G__13755 = null;
var G__13756 = (0);
var G__13757 = (0);
seq__13710_13729 = G__13754;
chunk__13711_13730 = G__13755;
count__13712_13731 = G__13756;
i__13713_13732 = G__13757;
continue;
}
} else {
}
}
break;
}

var G__13758 = seq__13699;
var G__13759 = chunk__13700;
var G__13760 = count__13701;
var G__13761 = (i__13702 + (1));
seq__13699 = G__13758;
chunk__13700 = G__13759;
count__13701 = G__13760;
i__13702 = G__13761;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13699);
if(temp__4657__auto__){
var seq__13699__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13699__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__13699__$1);
var G__13762 = cljs.core.chunk_rest(seq__13699__$1);
var G__13763 = c__8484__auto__;
var G__13764 = cljs.core.count(c__8484__auto__);
var G__13765 = (0);
seq__13699 = G__13762;
chunk__13700 = G__13763;
count__13701 = G__13764;
i__13702 = G__13765;
continue;
} else {
var vec__13714 = cljs.core.first(seq__13699__$1);
var map__13717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13714,(0),null);
var map__13717__$1 = ((((!((map__13717 == null)))?((((map__13717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13717):map__13717);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13717__$1,cljs.core.cst$kw$x);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13717__$1,cljs.core.cst$kw$y);
var angle1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13717__$1,cljs.core.cst$kw$angle);
var width1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13717__$1,cljs.core.cst$kw$width);
var tangle1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13717__$1,cljs.core.cst$kw$tangent_DASH_angle);
var tsize1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13717__$1,cljs.core.cst$kw$tangent_DASH_size);
var map__13718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13714,(1),null);
var map__13718__$1 = ((((!((map__13718 == null)))?((((map__13718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13718):map__13718);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13718__$1,cljs.core.cst$kw$x);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13718__$1,cljs.core.cst$kw$y);
var angle2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13718__$1,cljs.core.cst$kw$angle);
var width2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13718__$1,cljs.core.cst$kw$width);
var tangle2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13718__$1,cljs.core.cst$kw$tangent_DASH_angle);
var tsize2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13718__$1,cljs.core.cst$kw$tangent_DASH_size);
var control1_x_13766 = (x1 + (tsize1 * khtut.core.cos(tangle1)));
var control1_y_13767 = (y1 + (tsize1 * khtut.core.sin(tangle1)));
var control2_x_13768 = (x2 - (tsize2 * khtut.core.cos(tangle2)));
var control2_y_13769 = (y2 - (tsize2 * khtut.core.sin(tangle2)));
var seq__13721_13770 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.005));
var chunk__13722_13771 = null;
var count__13723_13772 = (0);
var i__13724_13773 = (0);
while(true){
if((i__13724_13773 < count__13723_13772)){
var t_13774 = chunk__13722_13771.cljs$core$IIndexed$_nth$arity$2(null,i__13724_13773);
var x_STAR__13775 = khtut.core.bezier(t_13774,x1,control1_x_13766,control2_x_13768,x2);
var y_STAR__13776 = khtut.core.bezier(t_13774,y1,control1_y_13767,control2_y_13769,y2);
var angle_STAR__13777 = khtut.core.lerp(t_13774,angle1,angle2);
var width_STAR__13778 = khtut.core.lerp(t_13774,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__13775,y_STAR__13776,width_STAR__13778,(2),angle_STAR__13777,(0),((2) * Math.PI));

ctx.fill();

var G__13779 = seq__13721_13770;
var G__13780 = chunk__13722_13771;
var G__13781 = count__13723_13772;
var G__13782 = (i__13724_13773 + (1));
seq__13721_13770 = G__13779;
chunk__13722_13771 = G__13780;
count__13723_13772 = G__13781;
i__13724_13773 = G__13782;
continue;
} else {
var temp__4657__auto___13783__$1 = cljs.core.seq(seq__13721_13770);
if(temp__4657__auto___13783__$1){
var seq__13721_13784__$1 = temp__4657__auto___13783__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13721_13784__$1)){
var c__8484__auto___13785 = cljs.core.chunk_first(seq__13721_13784__$1);
var G__13786 = cljs.core.chunk_rest(seq__13721_13784__$1);
var G__13787 = c__8484__auto___13785;
var G__13788 = cljs.core.count(c__8484__auto___13785);
var G__13789 = (0);
seq__13721_13770 = G__13786;
chunk__13722_13771 = G__13787;
count__13723_13772 = G__13788;
i__13724_13773 = G__13789;
continue;
} else {
var t_13790 = cljs.core.first(seq__13721_13784__$1);
var x_STAR__13791 = khtut.core.bezier(t_13790,x1,control1_x_13766,control2_x_13768,x2);
var y_STAR__13792 = khtut.core.bezier(t_13790,y1,control1_y_13767,control2_y_13769,y2);
var angle_STAR__13793 = khtut.core.lerp(t_13790,angle1,angle2);
var width_STAR__13794 = khtut.core.lerp(t_13790,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__13791,y_STAR__13792,width_STAR__13794,(2),angle_STAR__13793,(0),((2) * Math.PI));

ctx.fill();

var G__13795 = cljs.core.next(seq__13721_13784__$1);
var G__13796 = null;
var G__13797 = (0);
var G__13798 = (0);
seq__13721_13770 = G__13795;
chunk__13722_13771 = G__13796;
count__13723_13772 = G__13797;
i__13724_13773 = G__13798;
continue;
}
} else {
}
}
break;
}

var G__13799 = cljs.core.next(seq__13699__$1);
var G__13800 = null;
var G__13801 = (0);
var G__13802 = (0);
seq__13699 = G__13799;
chunk__13700 = G__13800;
count__13701 = G__13801;
i__13702 = G__13802;
continue;
}
} else {
return null;
}
}
break;
}
});
khtut.core.handle_fn = (function khtut$core$handle_fn(cursor,f){
return (function (e){
var d = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,e) : f.call(null,cursor,e));
var drag_fn = ((function (d){
return (function (e_STAR_){
(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(e_STAR_) : d.call(null,e_STAR_));

return khtut.core.redraw_canvas(cljs.core.deref(khtut.core.state));
});})(d))
;
window.addEventListener("mousemove",drag_fn);

return window.addEventListener("mouseup",((function (d,drag_fn){
return (function (){
return window.removeEventListener("mousemove",drag_fn);
});})(d,drag_fn))
);
});
});
khtut.core.drag_interaction = (function khtut$core$drag_interaction(cursor,evt_init){
var down_coord = khtut.core.client_to_page(evt_init);
var offset_x = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor)) - down_coord.x);
var offset_y = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor)) - down_coord.y);
return ((function (down_coord,offset_x,offset_y){
return (function (evt_drag){
var p = khtut.core.client_to_page(evt_drag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.assoc,cljs.core.cst$kw$x,(p.x + offset_x));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.assoc,cljs.core.cst$kw$y,(p.y + offset_y));
});
;})(down_coord,offset_x,offset_y))
});
khtut.core.distance = (function khtut$core$distance(x1,y1,x2,y2){
var G__13803 = ((function (){var G__13804 = (x2 - x1);
var G__13805 = (2);
return Math.pow(G__13804,G__13805);
})() + (function (){var G__13806 = (y2 - y1);
var G__13807 = (2);
return Math.pow(G__13806,G__13807);
})());
return Math.sqrt(G__13803);
});
khtut.core.drag_handle = (function khtut$core$drag_handle(c){
var map__13808 = cljs.core.deref(c);
var map__13808__$1 = ((((!((map__13808 == null)))?((((map__13808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13808):map__13808);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13808__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13808__$1,cljs.core.cst$kw$y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle$handle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x,cljs.core.cst$kw$cy,y,cljs.core.cst$kw$r,(6),cljs.core.cst$kw$on_DASH_mouse_DASH_down,khtut.core.handle_fn(c,khtut.core.drag_interaction)], null)], null);
});
khtut.core.nib_interaction = (function khtut$core$nib_interaction(cursor){
var origin_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor));
var origin_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor));
return ((function (origin_x,origin_y){
return (function (evt_drag){
var p = khtut.core.client_to_page(evt_drag);
var srad = khtut.core.atan2((p.y - origin_y),(p.x - origin_x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.assoc,cljs.core.cst$kw$angle,srad);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.assoc,cljs.core.cst$kw$width,khtut.core.distance(p.x,p.y,origin_x,origin_y));
});
;})(origin_x,origin_y))
});
khtut.core.nib_handle = (function khtut$core$nib_handle(data){
var map__13810 = cljs.core.deref(data);
var map__13810__$1 = ((((!((map__13810 == null)))?((((map__13810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13810):map__13810);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,cljs.core.cst$kw$y);
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,cljs.core.cst$kw$angle);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,cljs.core.cst$kw$width);
var x2 = (x - (width * khtut.core.cos(angle)));
var y2 = (y - (width * khtut.core.sin(angle)));
var x3 = (x + (width * khtut.core.cos(angle)));
var y3 = (y + (width * khtut.core.sin(angle)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line$handle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,x2,cljs.core.cst$kw$y2,y2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line$handle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,x3,cljs.core.cst$kw$y2,y3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle$rotate,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x3,cljs.core.cst$kw$cy,y3,cljs.core.cst$kw$r,(3),cljs.core.cst$kw$on_DASH_mouse_DASH_down,khtut.core.handle_fn(data,khtut.core.nib_interaction)], null)], null)], null);
});
khtut.core.tangent_interaction = (function khtut$core$tangent_interaction(cursor){
var origin_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor));
var origin_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor));
return ((function (origin_x,origin_y){
return (function (evt_drag){
var p = khtut.core.client_to_page(evt_drag);
var srad = khtut.core.atan2((p.y - origin_y),(p.x - origin_x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.assoc,cljs.core.cst$kw$tangent_DASH_angle,srad);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.assoc,cljs.core.cst$kw$tangent_DASH_size,khtut.core.distance(p.x,p.y,origin_x,origin_y));
});
;})(origin_x,origin_y))
});
khtut.core.tangent_handle = (function khtut$core$tangent_handle(data){
var map__13812 = cljs.core.deref(data);
var map__13812__$1 = ((((!((map__13812 == null)))?((((map__13812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13812):map__13812);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,cljs.core.cst$kw$y);
var tangent_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,cljs.core.cst$kw$tangent_DASH_angle);
var tangent_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,cljs.core.cst$kw$tangent_DASH_size);
var arrow_degrees = ((180) + (tangent_angle * ((180) / Math.PI)));
var x2 = (x - (tangent_size * khtut.core.cos(tangent_angle)));
var y2 = (y - (tangent_size * khtut.core.sin(tangent_angle)));
var x3 = (x + (tangent_size * khtut.core.cos(tangent_angle)));
var y3 = (y + (tangent_size * khtut.core.sin(tangent_angle)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line$tangent,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,x2,cljs.core.cst$kw$y2,y2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line$tangent,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,x3,cljs.core.cst$kw$y2,y3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle$tangent,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x3,cljs.core.cst$kw$cy,y3,cljs.core.cst$kw$r,(3),cljs.core.cst$kw$on_DASH_mouse_DASH_down,khtut.core.handle_fn(data,khtut.core.tangent_interaction)], null)], null)], null);
});
khtut.core.handle = (function khtut$core$handle(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.nib_handle,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.tangent_handle,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.drag_handle,data], null)], null);
});
khtut.core.handles = (function khtut$core$handles(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13814_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[khtut.core.handle,reagent.core.cursor(khtut.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13814_SHARP_], null))],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(khtut.core.state)))));
});
khtut.core.toggle = (function khtut$core$toggle(atm,key){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(atm,cljs.core.update,key,cljs.core.not);
});
});
khtut.core.app = (function khtut$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"\u0627\u0644\u062E\u0637\u0627\u0637 \u0627\u0644\u0635\u063A\u064A\u0631"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$em,"\u0631\u0645\u0632\u064A \u0646\u0627\u0635\u0631 - \u0639\u0645\u0644 \u062C\u0627\u0631\u064A"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"A=\u0623\u0636\u0641 \u0646\u0642\u0637\u0629 \u062A\u062D\u0643\u0645\u060C D=\u0623\u0632\u0627\u0644 \u0646\u0642\u0637\u0629 \u062A\u062D\u0643\u0645\u060C H=\u0625\u062E\u0641\u0627\u0621/\u0623\u0638\u0647\u0631 \u0627\u0644\u0646\u0642\u0627\u0637"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_drawing,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$height,(600)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$show_DASH_handles_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(khtut.core.ui_state)))?null:"hidden"),cljs.core.cst$kw$width,"600px",cljs.core.cst$kw$height,"600px",cljs.core.cst$kw$viewBox,"0 0 600 600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.handles,khtut.core.state], null)], null)], null)], null);
});
khtut.core.mount_root = (function khtut$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.app], null),document.getElementById("app"));
});
document.onkeyup = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("KeyA",e.code)){
return cljs.core.reset_BANG_(khtut.core.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(khtut.core.state),cljs.core.last(cljs.core.deref(khtut.core.state))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("KeyD",e.code)){
return cljs.core.reset_BANG_(khtut.core.state,cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(khtut.core.state))));
} else {
return null;
}
}
});
khtut.core.init_BANG_ = (function khtut$core$init_BANG_(){
return khtut.core.mount_root();
});
