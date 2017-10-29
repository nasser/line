// Compiled by ClojureScript 1.9.908 {}
goog.provide('khtut.core');
goog.require('cljs.core');
goog.require('reagent.core');
khtut.core.state = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855),Math.PI,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605),(30),new cljs.core.Keyword(null,"angle","angle",1622094254),(-2),new cljs.core.Keyword(null,"width","width",-384071477),(25)], null)], null));
khtut.core.ui_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-handles?","show-handles?",-1473489390),true,new cljs.core.Keyword(null,"show-centerlines?","show-centerlines?",1455591228),false], null));
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
return ((((a * khtut.core.pow.call(null,((1) - t),(3))) + (((b * (3)) * t) * khtut.core.pow.call(null,((1) - t),(2)))) + (((c * (3)) * ((1) - t)) * khtut.core.pow.call(null,t,(2)))) + (d * khtut.core.pow.call(null,t,(3))));
});
khtut.core.redraw_canvas = (function khtut$core$redraw_canvas(s){
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var pairs = cljs.core.partition.call(null,(2),(1),s);
ctx.clearRect((0),(0),canvas.width,canvas.height);

var seq__57468 = cljs.core.seq.call(null,pairs);
var chunk__57469 = null;
var count__57470 = (0);
var i__57471 = (0);
while(true){
if((i__57471 < count__57470)){
var vec__57472 = cljs.core._nth.call(null,chunk__57469,i__57471);
var map__57475 = cljs.core.nth.call(null,vec__57472,(0),null);
var map__57475__$1 = ((((!((map__57475 == null)))?((((map__57475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57475):map__57475);
var x1 = cljs.core.get.call(null,map__57475__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__57475__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle1 = cljs.core.get.call(null,map__57475__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width1 = cljs.core.get.call(null,map__57475__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tangle1 = cljs.core.get.call(null,map__57475__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tsize1 = cljs.core.get.call(null,map__57475__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var map__57476 = cljs.core.nth.call(null,vec__57472,(1),null);
var map__57476__$1 = ((((!((map__57476 == null)))?((((map__57476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57476):map__57476);
var x2 = cljs.core.get.call(null,map__57476__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__57476__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle2 = cljs.core.get.call(null,map__57476__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width2 = cljs.core.get.call(null,map__57476__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tangle2 = cljs.core.get.call(null,map__57476__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tsize2 = cljs.core.get.call(null,map__57476__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var control1_x_57494 = (x1 + (tsize1 * khtut.core.cos.call(null,tangle1)));
var control1_y_57495 = (y1 + (tsize1 * khtut.core.sin.call(null,tangle1)));
var control2_x_57496 = (x2 - (tsize2 * khtut.core.cos.call(null,tangle2)));
var control2_y_57497 = (y2 - (tsize2 * khtut.core.sin.call(null,tangle2)));
var seq__57479_57498 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(1),0.005));
var chunk__57480_57499 = null;
var count__57481_57500 = (0);
var i__57482_57501 = (0);
while(true){
if((i__57482_57501 < count__57481_57500)){
var t_57502 = cljs.core._nth.call(null,chunk__57480_57499,i__57482_57501);
var x_STAR__57503 = khtut.core.bezier.call(null,t_57502,x1,control1_x_57494,control2_x_57496,x2);
var y_STAR__57504 = khtut.core.bezier.call(null,t_57502,y1,control1_y_57495,control2_y_57497,y2);
var angle_STAR__57505 = khtut.core.lerp.call(null,t_57502,angle1,angle2);
var width_STAR__57506 = khtut.core.lerp.call(null,t_57502,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__57503,y_STAR__57504,width_STAR__57506,(2),angle_STAR__57505,(0),((2) * Math.PI));

ctx.fill();

var G__57507 = seq__57479_57498;
var G__57508 = chunk__57480_57499;
var G__57509 = count__57481_57500;
var G__57510 = (i__57482_57501 + (1));
seq__57479_57498 = G__57507;
chunk__57480_57499 = G__57508;
count__57481_57500 = G__57509;
i__57482_57501 = G__57510;
continue;
} else {
var temp__4657__auto___57511 = cljs.core.seq.call(null,seq__57479_57498);
if(temp__4657__auto___57511){
var seq__57479_57512__$1 = temp__4657__auto___57511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57479_57512__$1)){
var c__28828__auto___57513 = cljs.core.chunk_first.call(null,seq__57479_57512__$1);
var G__57514 = cljs.core.chunk_rest.call(null,seq__57479_57512__$1);
var G__57515 = c__28828__auto___57513;
var G__57516 = cljs.core.count.call(null,c__28828__auto___57513);
var G__57517 = (0);
seq__57479_57498 = G__57514;
chunk__57480_57499 = G__57515;
count__57481_57500 = G__57516;
i__57482_57501 = G__57517;
continue;
} else {
var t_57518 = cljs.core.first.call(null,seq__57479_57512__$1);
var x_STAR__57519 = khtut.core.bezier.call(null,t_57518,x1,control1_x_57494,control2_x_57496,x2);
var y_STAR__57520 = khtut.core.bezier.call(null,t_57518,y1,control1_y_57495,control2_y_57497,y2);
var angle_STAR__57521 = khtut.core.lerp.call(null,t_57518,angle1,angle2);
var width_STAR__57522 = khtut.core.lerp.call(null,t_57518,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__57519,y_STAR__57520,width_STAR__57522,(2),angle_STAR__57521,(0),((2) * Math.PI));

ctx.fill();

var G__57523 = cljs.core.next.call(null,seq__57479_57512__$1);
var G__57524 = null;
var G__57525 = (0);
var G__57526 = (0);
seq__57479_57498 = G__57523;
chunk__57480_57499 = G__57524;
count__57481_57500 = G__57525;
i__57482_57501 = G__57526;
continue;
}
} else {
}
}
break;
}

var G__57527 = seq__57468;
var G__57528 = chunk__57469;
var G__57529 = count__57470;
var G__57530 = (i__57471 + (1));
seq__57468 = G__57527;
chunk__57469 = G__57528;
count__57470 = G__57529;
i__57471 = G__57530;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57468);
if(temp__4657__auto__){
var seq__57468__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57468__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__57468__$1);
var G__57531 = cljs.core.chunk_rest.call(null,seq__57468__$1);
var G__57532 = c__28828__auto__;
var G__57533 = cljs.core.count.call(null,c__28828__auto__);
var G__57534 = (0);
seq__57468 = G__57531;
chunk__57469 = G__57532;
count__57470 = G__57533;
i__57471 = G__57534;
continue;
} else {
var vec__57483 = cljs.core.first.call(null,seq__57468__$1);
var map__57486 = cljs.core.nth.call(null,vec__57483,(0),null);
var map__57486__$1 = ((((!((map__57486 == null)))?((((map__57486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57486):map__57486);
var x1 = cljs.core.get.call(null,map__57486__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__57486__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle1 = cljs.core.get.call(null,map__57486__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width1 = cljs.core.get.call(null,map__57486__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tangle1 = cljs.core.get.call(null,map__57486__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tsize1 = cljs.core.get.call(null,map__57486__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var map__57487 = cljs.core.nth.call(null,vec__57483,(1),null);
var map__57487__$1 = ((((!((map__57487 == null)))?((((map__57487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57487):map__57487);
var x2 = cljs.core.get.call(null,map__57487__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__57487__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle2 = cljs.core.get.call(null,map__57487__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width2 = cljs.core.get.call(null,map__57487__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tangle2 = cljs.core.get.call(null,map__57487__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tsize2 = cljs.core.get.call(null,map__57487__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var control1_x_57535 = (x1 + (tsize1 * khtut.core.cos.call(null,tangle1)));
var control1_y_57536 = (y1 + (tsize1 * khtut.core.sin.call(null,tangle1)));
var control2_x_57537 = (x2 - (tsize2 * khtut.core.cos.call(null,tangle2)));
var control2_y_57538 = (y2 - (tsize2 * khtut.core.sin.call(null,tangle2)));
var seq__57490_57539 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(1),0.005));
var chunk__57491_57540 = null;
var count__57492_57541 = (0);
var i__57493_57542 = (0);
while(true){
if((i__57493_57542 < count__57492_57541)){
var t_57543 = cljs.core._nth.call(null,chunk__57491_57540,i__57493_57542);
var x_STAR__57544 = khtut.core.bezier.call(null,t_57543,x1,control1_x_57535,control2_x_57537,x2);
var y_STAR__57545 = khtut.core.bezier.call(null,t_57543,y1,control1_y_57536,control2_y_57538,y2);
var angle_STAR__57546 = khtut.core.lerp.call(null,t_57543,angle1,angle2);
var width_STAR__57547 = khtut.core.lerp.call(null,t_57543,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__57544,y_STAR__57545,width_STAR__57547,(2),angle_STAR__57546,(0),((2) * Math.PI));

ctx.fill();

var G__57548 = seq__57490_57539;
var G__57549 = chunk__57491_57540;
var G__57550 = count__57492_57541;
var G__57551 = (i__57493_57542 + (1));
seq__57490_57539 = G__57548;
chunk__57491_57540 = G__57549;
count__57492_57541 = G__57550;
i__57493_57542 = G__57551;
continue;
} else {
var temp__4657__auto___57552__$1 = cljs.core.seq.call(null,seq__57490_57539);
if(temp__4657__auto___57552__$1){
var seq__57490_57553__$1 = temp__4657__auto___57552__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57490_57553__$1)){
var c__28828__auto___57554 = cljs.core.chunk_first.call(null,seq__57490_57553__$1);
var G__57555 = cljs.core.chunk_rest.call(null,seq__57490_57553__$1);
var G__57556 = c__28828__auto___57554;
var G__57557 = cljs.core.count.call(null,c__28828__auto___57554);
var G__57558 = (0);
seq__57490_57539 = G__57555;
chunk__57491_57540 = G__57556;
count__57492_57541 = G__57557;
i__57493_57542 = G__57558;
continue;
} else {
var t_57559 = cljs.core.first.call(null,seq__57490_57553__$1);
var x_STAR__57560 = khtut.core.bezier.call(null,t_57559,x1,control1_x_57535,control2_x_57537,x2);
var y_STAR__57561 = khtut.core.bezier.call(null,t_57559,y1,control1_y_57536,control2_y_57538,y2);
var angle_STAR__57562 = khtut.core.lerp.call(null,t_57559,angle1,angle2);
var width_STAR__57563 = khtut.core.lerp.call(null,t_57559,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__57560,y_STAR__57561,width_STAR__57563,(2),angle_STAR__57562,(0),((2) * Math.PI));

ctx.fill();

var G__57564 = cljs.core.next.call(null,seq__57490_57553__$1);
var G__57565 = null;
var G__57566 = (0);
var G__57567 = (0);
seq__57490_57539 = G__57564;
chunk__57491_57540 = G__57565;
count__57492_57541 = G__57566;
i__57493_57542 = G__57567;
continue;
}
} else {
}
}
break;
}

var G__57568 = cljs.core.next.call(null,seq__57468__$1);
var G__57569 = null;
var G__57570 = (0);
var G__57571 = (0);
seq__57468 = G__57568;
chunk__57469 = G__57569;
count__57470 = G__57570;
i__57471 = G__57571;
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
var d = f.call(null,cursor,e);
var drag_fn = ((function (d){
return (function (e_STAR_){
d.call(null,e_STAR_);

return khtut.core.redraw_canvas.call(null,cljs.core.deref.call(null,khtut.core.state));
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
var down_coord = khtut.core.client_to_page.call(null,evt_init);
var offset_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor)) - down_coord.x);
var offset_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor)) - down_coord.y);
return ((function (down_coord,offset_x,offset_y){
return (function (evt_drag){
var p = khtut.core.client_to_page.call(null,evt_drag);
cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(p.x + offset_x));

return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),(p.y + offset_y));
});
;})(down_coord,offset_x,offset_y))
});
khtut.core.distance = (function khtut$core$distance(x1,y1,x2,y2){
return Math.sqrt((Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2))));
});
khtut.core.drag_handle = (function khtut$core$drag_handle(c){
var map__57572 = cljs.core.deref.call(null,c);
var map__57572__$1 = ((((!((map__57572 == null)))?((((map__57572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57572):map__57572);
var x = cljs.core.get.call(null,map__57572__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__57572__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.handle","circle.handle",-1031774755),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(6),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),khtut.core.handle_fn.call(null,c,khtut.core.drag_interaction)], null)], null);
});
khtut.core.nib_interaction = (function khtut$core$nib_interaction(cursor){
var origin_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
var origin_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
return ((function (origin_x,origin_y){
return (function (evt_drag){
var p = khtut.core.client_to_page.call(null,evt_drag);
var srad = khtut.core.atan2.call(null,(p.y - origin_y),(p.x - origin_x));
cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"angle","angle",1622094254),srad);

return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),khtut.core.distance.call(null,p.x,p.y,origin_x,origin_y));
});
;})(origin_x,origin_y))
});
khtut.core.nib_handle = (function khtut$core$nib_handle(data){
var map__57574 = cljs.core.deref.call(null,data);
var map__57574__$1 = ((((!((map__57574 == null)))?((((map__57574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57574):map__57574);
var x = cljs.core.get.call(null,map__57574__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__57574__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle = cljs.core.get.call(null,map__57574__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width = cljs.core.get.call(null,map__57574__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var x2 = (x - (width * khtut.core.cos.call(null,angle)));
var y2 = (y - (width * khtut.core.sin.call(null,angle)));
var x3 = (x + (width * khtut.core.cos.call(null,angle)));
var y3 = (y + (width * khtut.core.sin.call(null,angle)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.handle","line.handle",-58568531),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.handle","line.handle",-58568531),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x3,new cljs.core.Keyword(null,"y2","y2",-718691301),y3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.rotate","circle.rotate",-1375397350),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x3,new cljs.core.Keyword(null,"cy","cy",755331060),y3,new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),khtut.core.handle_fn.call(null,data,khtut.core.nib_interaction)], null)], null)], null);
});
khtut.core.tangent_interaction = (function khtut$core$tangent_interaction(cursor){
var origin_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
var origin_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
return ((function (origin_x,origin_y){
return (function (evt_drag){
var p = khtut.core.client_to_page.call(null,evt_drag);
var srad = khtut.core.atan2.call(null,(p.y - origin_y),(p.x - origin_x));
cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855),srad);

return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605),khtut.core.distance.call(null,p.x,p.y,origin_x,origin_y));
});
;})(origin_x,origin_y))
});
khtut.core.tangent_handle = (function khtut$core$tangent_handle(data){
var map__57576 = cljs.core.deref.call(null,data);
var map__57576__$1 = ((((!((map__57576 == null)))?((((map__57576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57576):map__57576);
var x = cljs.core.get.call(null,map__57576__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__57576__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tangent_angle = cljs.core.get.call(null,map__57576__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tangent_size = cljs.core.get.call(null,map__57576__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var arrow_degrees = ((180) + (tangent_angle * ((180) / Math.PI)));
var x2 = (x - (tangent_size * khtut.core.cos.call(null,tangent_angle)));
var y2 = (y - (tangent_size * khtut.core.sin.call(null,tangent_angle)));
var x3 = (x + (tangent_size * khtut.core.cos.call(null,tangent_angle)));
var y3 = (y + (tangent_size * khtut.core.sin.call(null,tangent_angle)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.tangent","line.tangent",557124231),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.tangent","line.tangent",557124231),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x3,new cljs.core.Keyword(null,"y2","y2",-718691301),y3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.tangent","circle.tangent",-859513621),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x3,new cljs.core.Keyword(null,"cy","cy",755331060),y3,new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),khtut.core.handle_fn.call(null,data,khtut.core.tangent_interaction)], null)], null)], null);
});
khtut.core.handle = (function khtut$core$handle(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.nib_handle,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.tangent_handle,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.drag_handle,data], null)], null);
});
khtut.core.handles = (function khtut$core$handles(data){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map.call(null,(function (p1__57578_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[khtut.core.handle,reagent.core.cursor.call(null,khtut.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57578_SHARP_], null))],null));
}),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,khtut.core.state)))));
});
khtut.core.toggle = (function khtut$core$toggle(atm,key){
return (function (e){
return cljs.core.swap_BANG_.call(null,atm,cljs.core.update,key,cljs.core.not);
});
});
khtut.core.app = (function khtut$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u0627\u0644\u062E\u0637\u0627\u0637 \u0627\u0644\u0635\u063A\u064A\u0631"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"\u0631\u0645\u0632\u064A \u0646\u0627\u0635\u0631 - \u0639\u0645\u0644 \u062C\u0627\u0631\u064A"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A=\u0623\u0636\u0641 \u0646\u0642\u0637\u0629 \u062A\u062D\u0643\u0645\u060C D=\u0623\u0632\u0627\u0644 \u0646\u0642\u0637\u0629 \u062A\u062D\u0643\u0645\u060C H=\u0625\u062E\u0641\u0627\u0621/\u0623\u0638\u0647\u0631 \u0627\u0644\u0646\u0642\u0627\u0637"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#drawing","div#drawing",-1528818346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"show-handles?","show-handles?",-1473489390).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,khtut.core.ui_state)))?null:"hidden"),new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 600 600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.handles,khtut.core.state], null)], null)], null)], null);
});
khtut.core.mount_root = (function khtut$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.app], null),document.getElementById("app"));
});
document.onkeyup = (function (e){
if(cljs.core._EQ_.call(null,"KeyH",e.code)){
return cljs.core.swap_BANG_.call(null,khtut.core.ui_state,cljs.core.update,new cljs.core.Keyword(null,"show-handles?","show-handles?",-1473489390),cljs.core.not);
} else {
if(cljs.core._EQ_.call(null,"KeyA",e.code)){
return cljs.core.reset_BANG_.call(null,khtut.core.state,cljs.core.conj.call(null,cljs.core.deref.call(null,khtut.core.state),cljs.core.last.call(null,cljs.core.deref.call(null,khtut.core.state))));
} else {
if(cljs.core._EQ_.call(null,"KeyD",e.code)){
return cljs.core.reset_BANG_.call(null,khtut.core.state,cljs.core.vec.call(null,cljs.core.drop_last.call(null,cljs.core.deref.call(null,khtut.core.state))));
} else {
return null;
}
}
}
});
khtut.core.init_BANG_ = (function khtut$core$init_BANG_(){
return khtut.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1509240014431
