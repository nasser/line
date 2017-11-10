// Compiled by ClojureScript 1.9.908 {}
goog.provide('khtut.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof khtut.core.state !== 'undefined'){
} else {
khtut.core.state = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855),Math.PI,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605),(30),new cljs.core.Keyword(null,"angle","angle",1622094254),(-2),new cljs.core.Keyword(null,"width","width",-384071477),(25),new cljs.core.Keyword(null,"tension-top","tension-top",748997116),(50),new cljs.core.Keyword(null,"tension-bottom","tension-bottom",-1048301847),(50)], null)], null)], null));
}
if(typeof khtut.core.ui_state !== 'undefined'){
} else {
khtut.core.ui_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-handles?","show-handles?",-1473489390),true,new cljs.core.Keyword(null,"show-centerlines?","show-centerlines?",1455591228),false], null));
}
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
khtut.core.stroke_colors = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black"], null));
khtut.core.rasterize_stroke = (function khtut$core$rasterize_stroke(ctx,s,color){
ctx.fillStyle = color;

ctx.strokeStyle = "Red";

var pairs = cljs.core.partition.call(null,(2),(1),s);
var seq__100067 = cljs.core.seq.call(null,pairs);
var chunk__100068 = null;
var count__100069 = (0);
var i__100070 = (0);
while(true){
if((i__100070 < count__100069)){
var vec__100071 = cljs.core._nth.call(null,chunk__100068,i__100070);
var map__100074 = cljs.core.nth.call(null,vec__100071,(0),null);
var map__100074__$1 = ((((!((map__100074 == null)))?((((map__100074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100074):map__100074);
var x1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tsize1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var tangle1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tension_bottom1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"tension-bottom","tension-bottom",-1048301847));
var y1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle_control1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"angle-control","angle-control",-1038953640));
var tension_top1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"tension-top","tension-top",748997116));
var angle1 = cljs.core.get.call(null,map__100074__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__100075 = cljs.core.nth.call(null,vec__100071,(1),null);
var map__100075__$1 = ((((!((map__100075 == null)))?((((map__100075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100075):map__100075);
var tsize2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var y2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var angle_control2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"angle-control","angle-control",-1038953640));
var tension_bottom2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"tension-bottom","tension-bottom",-1048301847));
var width2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tension_top2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"tension-top","tension-top",748997116));
var tangle2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var angle2 = cljs.core.get.call(null,map__100075__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var control1_x_100105 = (x1 + (tsize1 * khtut.core.cos.call(null,tangle1)));
var control1_y_100106 = (y1 + (tsize1 * khtut.core.sin.call(null,tangle1)));
var control2_x_100107 = (x2 - (tsize2 * khtut.core.cos.call(null,tangle2)));
var control2_y_100108 = (y2 - (tsize2 * khtut.core.sin.call(null,tangle2)));
var angle1_PLUS_90_100109 = (angle1 + ((90) * ((180) / Math.PI)));
var angle2_PLUS_90_100110 = (angle2 + ((90) * ((180) / Math.PI)));
var top1_x_100111 = (x1 - (width1 * khtut.core.cos.call(null,angle1)));
var top1_y_100112 = (y1 - (width1 * khtut.core.sin.call(null,angle1)));
var bot1_x_100113 = (x1 + (width1 * khtut.core.cos.call(null,angle1)));
var bot1_y_100114 = (y1 + (width1 * khtut.core.sin.call(null,angle1)));
var top2_x_100115 = (x2 - (width2 * khtut.core.cos.call(null,angle2)));
var top2_y_100116 = (y2 - (width2 * khtut.core.sin.call(null,angle2)));
var bot2_x_100117 = (x2 + (width2 * khtut.core.cos.call(null,angle2)));
var bot2_y_100118 = (y2 + (width2 * khtut.core.sin.call(null,angle2)));
var vec__100078_100119 = tension2control((new Vector(top1_x_100111,top1_y_100112)),tangle1,(0.025 * tension_top1),(0.025 * tension_top2),tangle2,(new Vector(top2_x_100115,top2_y_100116)));
var top_u_100120 = cljs.core.nth.call(null,vec__100078_100119,(0),null);
var top_v_100121 = cljs.core.nth.call(null,vec__100078_100119,(1),null);
var vec__100081_100122 = tension2control((new Vector(bot1_x_100113,bot1_y_100114)),tangle1,(0.025 * tension_bottom1),(0.025 * tension_bottom2),tangle2,(new Vector(bot2_x_100117,bot2_y_100118)));
var bot_u_100123 = cljs.core.nth.call(null,vec__100081_100122,(0),null);
var bot_v_100124 = cljs.core.nth.call(null,vec__100081_100122,(1),null);
var seq__100084_100125 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(1),0.005));
var chunk__100085_100126 = null;
var count__100086_100127 = (0);
var i__100087_100128 = (0);
while(true){
if((i__100087_100128 < count__100086_100127)){
var t_100129 = cljs.core._nth.call(null,chunk__100085_100126,i__100087_100128);
var x_STAR__100130 = khtut.core.bezier.call(null,t_100129,x1,control1_x_100105,control2_x_100107,x2);
var y_STAR__100131 = khtut.core.bezier.call(null,t_100129,y1,control1_y_100106,control2_y_100108,y2);
var angle_STAR__100132 = khtut.core.lerp.call(null,t_100129,angle1,angle2);
var width_STAR__100133 = khtut.core.lerp.call(null,t_100129,width1,width2);
var thickness_STAR__100134 = (3);
ctx.beginPath();

ctx.ellipse(x_STAR__100130,y_STAR__100131,width_STAR__100133,thickness_STAR__100134,angle_STAR__100132,(0),((2) * Math.PI));

ctx.fill();

var G__100135 = seq__100084_100125;
var G__100136 = chunk__100085_100126;
var G__100137 = count__100086_100127;
var G__100138 = (i__100087_100128 + (1));
seq__100084_100125 = G__100135;
chunk__100085_100126 = G__100136;
count__100086_100127 = G__100137;
i__100087_100128 = G__100138;
continue;
} else {
var temp__4657__auto___100139 = cljs.core.seq.call(null,seq__100084_100125);
if(temp__4657__auto___100139){
var seq__100084_100140__$1 = temp__4657__auto___100139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100084_100140__$1)){
var c__28828__auto___100141 = cljs.core.chunk_first.call(null,seq__100084_100140__$1);
var G__100142 = cljs.core.chunk_rest.call(null,seq__100084_100140__$1);
var G__100143 = c__28828__auto___100141;
var G__100144 = cljs.core.count.call(null,c__28828__auto___100141);
var G__100145 = (0);
seq__100084_100125 = G__100142;
chunk__100085_100126 = G__100143;
count__100086_100127 = G__100144;
i__100087_100128 = G__100145;
continue;
} else {
var t_100146 = cljs.core.first.call(null,seq__100084_100140__$1);
var x_STAR__100147 = khtut.core.bezier.call(null,t_100146,x1,control1_x_100105,control2_x_100107,x2);
var y_STAR__100148 = khtut.core.bezier.call(null,t_100146,y1,control1_y_100106,control2_y_100108,y2);
var angle_STAR__100149 = khtut.core.lerp.call(null,t_100146,angle1,angle2);
var width_STAR__100150 = khtut.core.lerp.call(null,t_100146,width1,width2);
var thickness_STAR__100151 = (3);
ctx.beginPath();

ctx.ellipse(x_STAR__100147,y_STAR__100148,width_STAR__100150,thickness_STAR__100151,angle_STAR__100149,(0),((2) * Math.PI));

ctx.fill();

var G__100152 = cljs.core.next.call(null,seq__100084_100140__$1);
var G__100153 = null;
var G__100154 = (0);
var G__100155 = (0);
seq__100084_100125 = G__100152;
chunk__100085_100126 = G__100153;
count__100086_100127 = G__100154;
i__100087_100128 = G__100155;
continue;
}
} else {
}
}
break;
}

ctx.strokeStyle = "white";

ctx.beginPath();

ctx.moveTo(x1,y1);

ctx.bezierCurveTo(control1_x_100105,control1_y_100106,control2_x_100107,control2_y_100108,x2,y2);

ctx.stroke();

var G__100156 = seq__100067;
var G__100157 = chunk__100068;
var G__100158 = count__100069;
var G__100159 = (i__100070 + (1));
seq__100067 = G__100156;
chunk__100068 = G__100157;
count__100069 = G__100158;
i__100070 = G__100159;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__100067);
if(temp__4657__auto__){
var seq__100067__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100067__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__100067__$1);
var G__100160 = cljs.core.chunk_rest.call(null,seq__100067__$1);
var G__100161 = c__28828__auto__;
var G__100162 = cljs.core.count.call(null,c__28828__auto__);
var G__100163 = (0);
seq__100067 = G__100160;
chunk__100068 = G__100161;
count__100069 = G__100162;
i__100070 = G__100163;
continue;
} else {
var vec__100088 = cljs.core.first.call(null,seq__100067__$1);
var map__100091 = cljs.core.nth.call(null,vec__100088,(0),null);
var map__100091__$1 = ((((!((map__100091 == null)))?((((map__100091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100091):map__100091);
var x1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tsize1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var tangle1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tension_bottom1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"tension-bottom","tension-bottom",-1048301847));
var y1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle_control1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"angle-control","angle-control",-1038953640));
var tension_top1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"tension-top","tension-top",748997116));
var angle1 = cljs.core.get.call(null,map__100091__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var map__100092 = cljs.core.nth.call(null,vec__100088,(1),null);
var map__100092__$1 = ((((!((map__100092 == null)))?((((map__100092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100092):map__100092);
var tsize2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var y2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var angle_control2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"angle-control","angle-control",-1038953640));
var tension_bottom2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"tension-bottom","tension-bottom",-1048301847));
var width2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tension_top2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"tension-top","tension-top",748997116));
var tangle2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var angle2 = cljs.core.get.call(null,map__100092__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var control1_x_100164 = (x1 + (tsize1 * khtut.core.cos.call(null,tangle1)));
var control1_y_100165 = (y1 + (tsize1 * khtut.core.sin.call(null,tangle1)));
var control2_x_100166 = (x2 - (tsize2 * khtut.core.cos.call(null,tangle2)));
var control2_y_100167 = (y2 - (tsize2 * khtut.core.sin.call(null,tangle2)));
var angle1_PLUS_90_100168 = (angle1 + ((90) * ((180) / Math.PI)));
var angle2_PLUS_90_100169 = (angle2 + ((90) * ((180) / Math.PI)));
var top1_x_100170 = (x1 - (width1 * khtut.core.cos.call(null,angle1)));
var top1_y_100171 = (y1 - (width1 * khtut.core.sin.call(null,angle1)));
var bot1_x_100172 = (x1 + (width1 * khtut.core.cos.call(null,angle1)));
var bot1_y_100173 = (y1 + (width1 * khtut.core.sin.call(null,angle1)));
var top2_x_100174 = (x2 - (width2 * khtut.core.cos.call(null,angle2)));
var top2_y_100175 = (y2 - (width2 * khtut.core.sin.call(null,angle2)));
var bot2_x_100176 = (x2 + (width2 * khtut.core.cos.call(null,angle2)));
var bot2_y_100177 = (y2 + (width2 * khtut.core.sin.call(null,angle2)));
var vec__100095_100178 = tension2control((new Vector(top1_x_100170,top1_y_100171)),tangle1,(0.025 * tension_top1),(0.025 * tension_top2),tangle2,(new Vector(top2_x_100174,top2_y_100175)));
var top_u_100179 = cljs.core.nth.call(null,vec__100095_100178,(0),null);
var top_v_100180 = cljs.core.nth.call(null,vec__100095_100178,(1),null);
var vec__100098_100181 = tension2control((new Vector(bot1_x_100172,bot1_y_100173)),tangle1,(0.025 * tension_bottom1),(0.025 * tension_bottom2),tangle2,(new Vector(bot2_x_100176,bot2_y_100177)));
var bot_u_100182 = cljs.core.nth.call(null,vec__100098_100181,(0),null);
var bot_v_100183 = cljs.core.nth.call(null,vec__100098_100181,(1),null);
var seq__100101_100184 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(1),0.005));
var chunk__100102_100185 = null;
var count__100103_100186 = (0);
var i__100104_100187 = (0);
while(true){
if((i__100104_100187 < count__100103_100186)){
var t_100188 = cljs.core._nth.call(null,chunk__100102_100185,i__100104_100187);
var x_STAR__100189 = khtut.core.bezier.call(null,t_100188,x1,control1_x_100164,control2_x_100166,x2);
var y_STAR__100190 = khtut.core.bezier.call(null,t_100188,y1,control1_y_100165,control2_y_100167,y2);
var angle_STAR__100191 = khtut.core.lerp.call(null,t_100188,angle1,angle2);
var width_STAR__100192 = khtut.core.lerp.call(null,t_100188,width1,width2);
var thickness_STAR__100193 = (3);
ctx.beginPath();

ctx.ellipse(x_STAR__100189,y_STAR__100190,width_STAR__100192,thickness_STAR__100193,angle_STAR__100191,(0),((2) * Math.PI));

ctx.fill();

var G__100194 = seq__100101_100184;
var G__100195 = chunk__100102_100185;
var G__100196 = count__100103_100186;
var G__100197 = (i__100104_100187 + (1));
seq__100101_100184 = G__100194;
chunk__100102_100185 = G__100195;
count__100103_100186 = G__100196;
i__100104_100187 = G__100197;
continue;
} else {
var temp__4657__auto___100198__$1 = cljs.core.seq.call(null,seq__100101_100184);
if(temp__4657__auto___100198__$1){
var seq__100101_100199__$1 = temp__4657__auto___100198__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100101_100199__$1)){
var c__28828__auto___100200 = cljs.core.chunk_first.call(null,seq__100101_100199__$1);
var G__100201 = cljs.core.chunk_rest.call(null,seq__100101_100199__$1);
var G__100202 = c__28828__auto___100200;
var G__100203 = cljs.core.count.call(null,c__28828__auto___100200);
var G__100204 = (0);
seq__100101_100184 = G__100201;
chunk__100102_100185 = G__100202;
count__100103_100186 = G__100203;
i__100104_100187 = G__100204;
continue;
} else {
var t_100205 = cljs.core.first.call(null,seq__100101_100199__$1);
var x_STAR__100206 = khtut.core.bezier.call(null,t_100205,x1,control1_x_100164,control2_x_100166,x2);
var y_STAR__100207 = khtut.core.bezier.call(null,t_100205,y1,control1_y_100165,control2_y_100167,y2);
var angle_STAR__100208 = khtut.core.lerp.call(null,t_100205,angle1,angle2);
var width_STAR__100209 = khtut.core.lerp.call(null,t_100205,width1,width2);
var thickness_STAR__100210 = (3);
ctx.beginPath();

ctx.ellipse(x_STAR__100206,y_STAR__100207,width_STAR__100209,thickness_STAR__100210,angle_STAR__100208,(0),((2) * Math.PI));

ctx.fill();

var G__100211 = cljs.core.next.call(null,seq__100101_100199__$1);
var G__100212 = null;
var G__100213 = (0);
var G__100214 = (0);
seq__100101_100184 = G__100211;
chunk__100102_100185 = G__100212;
count__100103_100186 = G__100213;
i__100104_100187 = G__100214;
continue;
}
} else {
}
}
break;
}

ctx.strokeStyle = "white";

ctx.beginPath();

ctx.moveTo(x1,y1);

ctx.bezierCurveTo(control1_x_100164,control1_y_100165,control2_x_100166,control2_y_100167,x2,y2);

ctx.stroke();

var G__100215 = cljs.core.next.call(null,seq__100067__$1);
var G__100216 = null;
var G__100217 = (0);
var G__100218 = (0);
seq__100067 = G__100215;
chunk__100068 = G__100216;
count__100069 = G__100217;
i__100070 = G__100218;
continue;
}
} else {
return null;
}
}
break;
}
});
khtut.core.rasterize_segment = (function khtut$core$rasterize_segment(ctx,q,p__100219,p__100220){
var map__100221 = p__100219;
var map__100221__$1 = ((((!((map__100221 == null)))?((((map__100221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100221):map__100221);
var x1 = cljs.core.get.call(null,map__100221__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__100221__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle1 = cljs.core.get.call(null,map__100221__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width1 = cljs.core.get.call(null,map__100221__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tangle1 = cljs.core.get.call(null,map__100221__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tsize1 = cljs.core.get.call(null,map__100221__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var map__100222 = p__100220;
var map__100222__$1 = ((((!((map__100222 == null)))?((((map__100222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100222):map__100222);
var x2 = cljs.core.get.call(null,map__100222__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__100222__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle2 = cljs.core.get.call(null,map__100222__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width2 = cljs.core.get.call(null,map__100222__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tangle2 = cljs.core.get.call(null,map__100222__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tsize2 = cljs.core.get.call(null,map__100222__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var control1_x = (x1 + (tsize1 * khtut.core.cos.call(null,tangle1)));
var control1_y = (y1 + (tsize1 * khtut.core.sin.call(null,tangle1)));
var control2_x = (x2 - (tsize2 * khtut.core.cos.call(null,tangle2)));
var control2_y = (y2 - (tsize2 * khtut.core.sin.call(null,tangle2)));
var seq__100225 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),q,0.005));
var chunk__100226 = null;
var count__100227 = (0);
var i__100228 = (0);
while(true){
if((i__100228 < count__100227)){
var t = cljs.core._nth.call(null,chunk__100226,i__100228);
var x_STAR__100229 = khtut.core.bezier.call(null,t,x1,control1_x,control2_x,x2);
var y_STAR__100230 = khtut.core.bezier.call(null,t,y1,control1_y,control2_y,y2);
var angle_STAR__100231 = khtut.core.lerp.call(null,t,angle1,angle2);
var width_STAR__100232 = khtut.core.lerp.call(null,t,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__100229,y_STAR__100230,width_STAR__100232,(3),angle_STAR__100231,(0),((2) * Math.PI));

ctx.fill();

var G__100233 = seq__100225;
var G__100234 = chunk__100226;
var G__100235 = count__100227;
var G__100236 = (i__100228 + (1));
seq__100225 = G__100233;
chunk__100226 = G__100234;
count__100227 = G__100235;
i__100228 = G__100236;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__100225);
if(temp__4657__auto__){
var seq__100225__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100225__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__100225__$1);
var G__100237 = cljs.core.chunk_rest.call(null,seq__100225__$1);
var G__100238 = c__28828__auto__;
var G__100239 = cljs.core.count.call(null,c__28828__auto__);
var G__100240 = (0);
seq__100225 = G__100237;
chunk__100226 = G__100238;
count__100227 = G__100239;
i__100228 = G__100240;
continue;
} else {
var t = cljs.core.first.call(null,seq__100225__$1);
var x_STAR__100241 = khtut.core.bezier.call(null,t,x1,control1_x,control2_x,x2);
var y_STAR__100242 = khtut.core.bezier.call(null,t,y1,control1_y,control2_y,y2);
var angle_STAR__100243 = khtut.core.lerp.call(null,t,angle1,angle2);
var width_STAR__100244 = khtut.core.lerp.call(null,t,width1,width2);
ctx.beginPath();

ctx.ellipse(x_STAR__100241,y_STAR__100242,width_STAR__100244,(3),angle_STAR__100243,(0),((2) * Math.PI));

ctx.fill();

var G__100245 = cljs.core.next.call(null,seq__100225__$1);
var G__100246 = null;
var G__100247 = (0);
var G__100248 = (0);
seq__100225 = G__100245;
chunk__100226 = G__100246;
count__100227 = G__100247;
i__100228 = G__100248;
continue;
}
} else {
return null;
}
}
break;
}
});
khtut.core.rasterize_stroke_pct = (function khtut$core$rasterize_stroke_pct(ctx,q,s,color){
ctx.fillStyle = color;

var pairs = cljs.core.partition.call(null,(2),(1),s);
var t = (q * cljs.core.count.call(null,pairs));
var complete_pair_count = Math.floor(t);
var last_pair_pct = (t - complete_pair_count);
console.log("rasterize-stroke-pct",q,t,last_pair_pct);

var seq__100249_100262 = cljs.core.seq.call(null,cljs.core.take.call(null,complete_pair_count,pairs));
var chunk__100250_100263 = null;
var count__100251_100264 = (0);
var i__100252_100265 = (0);
while(true){
if((i__100252_100265 < count__100251_100264)){
var vec__100253_100266 = cljs.core._nth.call(null,chunk__100250_100263,i__100252_100265);
var a_100267 = cljs.core.nth.call(null,vec__100253_100266,(0),null);
var b_100268 = cljs.core.nth.call(null,vec__100253_100266,(1),null);
khtut.core.rasterize_segment.call(null,ctx,(1),a_100267,b_100268);

var G__100269 = seq__100249_100262;
var G__100270 = chunk__100250_100263;
var G__100271 = count__100251_100264;
var G__100272 = (i__100252_100265 + (1));
seq__100249_100262 = G__100269;
chunk__100250_100263 = G__100270;
count__100251_100264 = G__100271;
i__100252_100265 = G__100272;
continue;
} else {
var temp__4657__auto___100273 = cljs.core.seq.call(null,seq__100249_100262);
if(temp__4657__auto___100273){
var seq__100249_100274__$1 = temp__4657__auto___100273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100249_100274__$1)){
var c__28828__auto___100275 = cljs.core.chunk_first.call(null,seq__100249_100274__$1);
var G__100276 = cljs.core.chunk_rest.call(null,seq__100249_100274__$1);
var G__100277 = c__28828__auto___100275;
var G__100278 = cljs.core.count.call(null,c__28828__auto___100275);
var G__100279 = (0);
seq__100249_100262 = G__100276;
chunk__100250_100263 = G__100277;
count__100251_100264 = G__100278;
i__100252_100265 = G__100279;
continue;
} else {
var vec__100256_100280 = cljs.core.first.call(null,seq__100249_100274__$1);
var a_100281 = cljs.core.nth.call(null,vec__100256_100280,(0),null);
var b_100282 = cljs.core.nth.call(null,vec__100256_100280,(1),null);
khtut.core.rasterize_segment.call(null,ctx,(1),a_100281,b_100282);

var G__100283 = cljs.core.next.call(null,seq__100249_100274__$1);
var G__100284 = null;
var G__100285 = (0);
var G__100286 = (0);
seq__100249_100262 = G__100283;
chunk__100250_100263 = G__100284;
count__100251_100264 = G__100285;
i__100252_100265 = G__100286;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,(1),q)){
return null;
} else {
var vec__100259 = cljs.core.nth.call(null,pairs,complete_pair_count);
var a = cljs.core.nth.call(null,vec__100259,(0),null);
var b = cljs.core.nth.call(null,vec__100259,(1),null);
return khtut.core.rasterize_segment.call(null,ctx,last_pair_pct,a,b);
}
});
khtut.core.redraw_canvas = (function khtut$core$redraw_canvas(strokes){
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.clearRect((0),(0),canvas.width,canvas.height);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (canvas,ctx){
return (function (p1__100287_SHARP_,p2__100288_SHARP_){
return khtut.core.rasterize_stroke.call(null,ctx,p1__100287_SHARP_,p2__100288_SHARP_);
});})(canvas,ctx))
,strokes,khtut.core.stroke_colors));
});
khtut.core.redraw_canvas_pct = (function khtut$core$redraw_canvas_pct(strokes,t){
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var complete_stroke_count = Math.floor(t);
var last_stroke_pct = (t - complete_stroke_count);
ctx.clearRect((0),(0),canvas.width,canvas.height);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (canvas,ctx,complete_stroke_count,last_stroke_pct){
return (function (p1__100289_SHARP_,p2__100290_SHARP_){
return khtut.core.rasterize_stroke_pct.call(null,ctx,(1),p1__100289_SHARP_,p2__100290_SHARP_);
});})(canvas,ctx,complete_stroke_count,last_stroke_pct))
,cljs.core.take.call(null,complete_stroke_count,strokes),khtut.core.stroke_colors));

return khtut.core.rasterize_stroke_pct.call(null,ctx,last_stroke_pct,cljs.core.nth.call(null,strokes,complete_stroke_count),cljs.core.first.call(null,cljs.core.drop.call(null,complete_stroke_count,khtut.core.stroke_colors)));
});
khtut.core.handle_fn = (function khtut$core$handle_fn(var_args){
var G__100292 = arguments.length;
switch (G__100292) {
case 1:
return khtut.core.handle_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return khtut.core.handle_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

khtut.core.handle_fn.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (e){
var drag_fn = (function (e_STAR_){
f.call(null,e_STAR_);

return khtut.core.redraw_canvas.call(null,cljs.core.deref.call(null,khtut.core.state));
});
window.addEventListener("mousemove",drag_fn);

return window.addEventListener("mouseup",((function (drag_fn){
return (function (){
return window.removeEventListener("mousemove",drag_fn);
});})(drag_fn))
);
});
});

khtut.core.handle_fn.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
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

khtut.core.handle_fn.cljs$lang$maxFixedArity = 2;

khtut.core.cross = (function khtut$core$cross(x,y,class$,size,attrs){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var or__27989__auto__ = attrs;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name.call(null,class$),new cljs.core.Keyword(null,"x1","x1",-1863922247),(size + x),new cljs.core.Keyword(null,"y1","y1",589123466),(size + y),new cljs.core.Keyword(null,"x2","x2",-1362513475),(x - size),new cljs.core.Keyword(null,"y2","y2",-718691301),(y - size)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name.call(null,class$),new cljs.core.Keyword(null,"x1","x1",-1863922247),(x - size),new cljs.core.Keyword(null,"y1","y1",589123466),(size + y),new cljs.core.Keyword(null,"x2","x2",-1362513475),(size + x),new cljs.core.Keyword(null,"y2","y2",-718691301),(y - size)], null)], null)], null);
});
khtut.core.box = (function khtut$core$box(x,y,class$,size,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name.call(null,class$),new cljs.core.Keyword(null,"x","x",2099068185),(x - (size / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (size / (2))),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null),attrs)], null);
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
var map__100294 = cljs.core.deref.call(null,c);
var map__100294__$1 = ((((!((map__100294 == null)))?((((map__100294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100294):map__100294);
var x = cljs.core.get.call(null,map__100294__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__100294__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.box,x,y,new cljs.core.Keyword(null,"handle","handle",1538948854),(6),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),khtut.core.handle_fn.call(null,c,khtut.core.drag_interaction)], null)], null)], null);
});
khtut.core.nib_interaction = (function khtut$core$nib_interaction(cursor){
var origin_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
var origin_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
return ((function (origin_x,origin_y){
return (function (evt_drag){
var ctrl_QMARK_ = evt_drag.ctrlKey;
var shift_QMARK_ = evt_drag.shiftKey;
var p = khtut.core.client_to_page.call(null,evt_drag);
var srad = khtut.core.atan2.call(null,(p.y - origin_y),(p.x - origin_x));
if(cljs.core.truth_(shift_QMARK_)){
return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),khtut.core.distance.call(null,p.x,p.y,origin_x,origin_y));
} else {
return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"angle","angle",1622094254),srad);
}
});
;})(origin_x,origin_y))
});
khtut.core.nib_handle = (function khtut$core$nib_handle(data){
var map__100296 = cljs.core.deref.call(null,data);
var map__100296__$1 = ((((!((map__100296 == null)))?((((map__100296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100296):map__100296);
var x = cljs.core.get.call(null,map__100296__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__100296__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle = cljs.core.get.call(null,map__100296__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width = cljs.core.get.call(null,map__100296__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var x2 = (x - (width * khtut.core.cos.call(null,angle)));
var y2 = (y - (width * khtut.core.sin.call(null,angle)));
var x3 = (x + (width * khtut.core.cos.call(null,angle)));
var y3 = (y + (width * khtut.core.sin.call(null,angle)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.rotate","line.rotate",1942885986),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.rotate","line.rotate",1942885986),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x3,new cljs.core.Keyword(null,"y2","y2",-718691301),y3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.rotate","circle.rotate",-1375397350),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x3,new cljs.core.Keyword(null,"cy","cy",755331060),y3,new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),khtut.core.handle_fn.call(null,data,khtut.core.nib_interaction)], null)], null)], null);
});
khtut.core.tangent_interaction = (function khtut$core$tangent_interaction(cursor){
var origin_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
var origin_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
return ((function (origin_x,origin_y){
return (function (evt_drag){
var p = khtut.core.client_to_page.call(null,evt_drag);
var shift_QMARK_ = evt_drag.shiftKey;
var srad = khtut.core.atan2.call(null,(p.y - origin_y),(p.x - origin_x));
if(cljs.core.truth_(shift_QMARK_)){
return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605),khtut.core.distance.call(null,p.x,p.y,origin_x,origin_y));
} else {
return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855),srad);
}
});
;})(origin_x,origin_y))
});
khtut.core.tangent_handle = (function khtut$core$tangent_handle(data){
var map__100298 = cljs.core.deref.call(null,data);
var map__100298__$1 = ((((!((map__100298 == null)))?((((map__100298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100298):map__100298);
var x = cljs.core.get.call(null,map__100298__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__100298__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tangent_angle = cljs.core.get.call(null,map__100298__$1,new cljs.core.Keyword(null,"tangent-angle","tangent-angle",-272904855));
var tangent_size = cljs.core.get.call(null,map__100298__$1,new cljs.core.Keyword(null,"tangent-size","tangent-size",96575605));
var arrow_degrees = ((180) + (tangent_angle * ((180) / Math.PI)));
var x2 = (x - (tangent_size * khtut.core.cos.call(null,tangent_angle)));
var y2 = (y - (tangent_size * khtut.core.sin.call(null,tangent_angle)));
var x3 = (x + (tangent_size * khtut.core.cos.call(null,tangent_angle)));
var y3 = (y + (tangent_size * khtut.core.sin.call(null,tangent_angle)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.tangent","line.tangent",557124231),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.tangent","line.tangent",557124231),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x3,new cljs.core.Keyword(null,"y2","y2",-718691301),y3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.tangent","circle.tangent",-859513621),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x3,new cljs.core.Keyword(null,"cy","cy",755331060),y3,new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),khtut.core.handle_fn.call(null,data,khtut.core.tangent_interaction)], null)], null)], null);
});
khtut.core.hobby_interaction = (function khtut$core$hobby_interaction(cursor){
var map__100300 = cljs.core.deref.call(null,cursor);
var map__100300__$1 = ((((!((map__100300 == null)))?((((map__100300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100300):map__100300);
var x = cljs.core.get.call(null,map__100300__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__100300__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle = cljs.core.get.call(null,map__100300__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width = cljs.core.get.call(null,map__100300__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tension_top = cljs.core.get.call(null,map__100300__$1,new cljs.core.Keyword(null,"tension-top","tension-top",748997116));
var tension_bottom = cljs.core.get.call(null,map__100300__$1,new cljs.core.Keyword(null,"tension-bottom","tension-bottom",-1048301847));
var base_x_top = (x - (width * khtut.core.cos.call(null,angle)));
var base_y_top = (y - (width * khtut.core.sin.call(null,angle)));
return ((function (map__100300,map__100300__$1,x,y,angle,width,tension_top,tension_bottom,base_x_top,base_y_top){
return (function (evt_drag){
var p = khtut.core.client_to_page.call(null,evt_drag);
var tension = khtut.core.distance.call(null,p.x,p.y,base_x_top,base_y_top);
return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,new cljs.core.Keyword(null,"tension-top","tension-top",748997116),tension);
});
;})(map__100300,map__100300__$1,x,y,angle,width,tension_top,tension_bottom,base_x_top,base_y_top))
});
khtut.core.hobby_handle = (function khtut$core$hobby_handle(data){
var map__100304 = cljs.core.deref.call(null,data);
var map__100304__$1 = ((((!((map__100304 == null)))?((((map__100304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100304):map__100304);
var x = cljs.core.get.call(null,map__100304__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__100304__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var angle = cljs.core.get.call(null,map__100304__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var width = cljs.core.get.call(null,map__100304__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tension_top = cljs.core.get.call(null,map__100304__$1,new cljs.core.Keyword(null,"tension-top","tension-top",748997116));
var tension_bottom = cljs.core.get.call(null,map__100304__$1,new cljs.core.Keyword(null,"tension-bottom","tension-bottom",-1048301847));
var rad = 2.5;
var base_x_top = (x - (width * khtut.core.cos.call(null,angle)));
var base_y_top = (y - (width * khtut.core.sin.call(null,angle)));
var handle_x_top = (base_x_top - (tension_top * khtut.core.cos.call(null,angle)));
var handle_y_top = (base_y_top - (tension_top * khtut.core.sin.call(null,angle)));
var base_x_bot = (x + (width * khtut.core.cos.call(null,angle)));
var base_y_bot = (y + (width * khtut.core.sin.call(null,angle)));
var handle_x_bot = (base_x_bot + (tension_bottom * khtut.core.cos.call(null,angle)));
var handle_y_bot = (base_y_bot + (tension_bottom * khtut.core.sin.call(null,angle)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.cross,handle_x_top,handle_y_top,new cljs.core.Keyword(null,"hobby","hobby",-1117660065),(2)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.cross,handle_x_bot,handle_y_bot,new cljs.core.Keyword(null,"hobby","hobby",-1117660065),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.hobby-line","line.hobby-line",1806786796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),base_x_top,new cljs.core.Keyword(null,"y1","y1",589123466),base_y_top,new cljs.core.Keyword(null,"x2","x2",-1362513475),handle_x_top,new cljs.core.Keyword(null,"y2","y2",-718691301),handle_y_top], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.hobby-line","line.hobby-line",1806786796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),base_x_bot,new cljs.core.Keyword(null,"y1","y1",589123466),base_y_bot,new cljs.core.Keyword(null,"x2","x2",-1362513475),handle_x_bot,new cljs.core.Keyword(null,"y2","y2",-718691301),handle_y_bot], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.drag","circle.drag",-1691262742),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),handle_x_top,new cljs.core.Keyword(null,"cy","cy",755331060),handle_y_top,new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),khtut.core.handle_fn.call(null,((function (map__100304,map__100304__$1,x,y,angle,width,tension_top,tension_bottom,rad,base_x_top,base_y_top,handle_x_top,handle_y_top,base_x_bot,base_y_bot,handle_x_bot,handle_y_bot){
return (function (p1__100302_SHARP_){
var p = khtut.core.client_to_page.call(null,p1__100302_SHARP_);
var tension = khtut.core.distance.call(null,p.x,p.y,base_x_top,base_y_top);
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"tension-top","tension-top",748997116),tension);
});})(map__100304,map__100304__$1,x,y,angle,width,tension_top,tension_bottom,rad,base_x_top,base_y_top,handle_x_top,handle_y_top,base_x_bot,base_y_bot,handle_x_bot,handle_y_bot))
)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.drag","circle.drag",-1691262742),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),handle_x_bot,new cljs.core.Keyword(null,"cy","cy",755331060),handle_y_bot,new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),khtut.core.handle_fn.call(null,((function (map__100304,map__100304__$1,x,y,angle,width,tension_top,tension_bottom,rad,base_x_top,base_y_top,handle_x_top,handle_y_top,base_x_bot,base_y_bot,handle_x_bot,handle_y_bot){
return (function (p1__100303_SHARP_){
var p = khtut.core.client_to_page.call(null,p1__100303_SHARP_);
var tension = khtut.core.distance.call(null,p.x,p.y,base_x_bot,base_y_bot);
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"tension-bottom","tension-bottom",-1048301847),tension);
});})(map__100304,map__100304__$1,x,y,angle,width,tension_top,tension_bottom,rad,base_x_top,base_y_top,handle_x_top,handle_y_top,base_x_bot,base_y_bot,handle_x_bot,handle_y_bot))
)], null)], null)], null);
});
khtut.core.handle = (function khtut$core$handle(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.nib_handle,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.tangent_handle,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.drag_handle,data], null)], null);
});
khtut.core.handles = (function khtut$core$handles(data){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map.call(null,(function (p1__100306_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[khtut.core.handle,reagent.core.cursor.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__100306_SHARP_], null))],null));
}),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,data)))));
});
khtut.core.strokes = (function khtut$core$strokes(data){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map.call(null,(function (p1__100307_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[khtut.core.handles,reagent.core.cursor.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__100307_SHARP_], null))],null));
}),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,data)))));
});
khtut.core.toggle = (function khtut$core$toggle(atm,key){
return (function (e){
return cljs.core.swap_BANG_.call(null,atm,cljs.core.update,key,cljs.core.not);
});
});
khtut.core.app = (function khtut$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u0627\u0644\u062E\u0637\u0627\u0637 \u0627\u0644\u0635\u063A\u064A\u0631"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"\u0631\u0645\u0632\u064A \u0646\u0627\u0635\u0631 - \u0639\u0645\u0644 \u062C\u0627\u0631\u064A"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A=\u0623\u0636\u0641 \u0646\u0642\u0637\u0629 \u062A\u062D\u0643\u0645\u060C D=\u0623\u0632\u0627\u0644 \u0646\u0642\u0637\u0629 \u062A\u062D\u0643\u0645\u060C H=\u0625\u062E\u0641\u0627\u0621/\u0623\u0638\u0647\u0631 \u0627\u0644\u0646\u0642\u0627\u0637"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#drawing","div#drawing",-1528818346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"show-handles?","show-handles?",-1473489390).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,khtut.core.ui_state)))?null:"hidden"),new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 600 600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.strokes,khtut.core.state], null)], null)], null)], null);
});
khtut.core.mount_root = (function khtut$core$mount_root(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [khtut.core.app], null),document.getElementById("app"));

return khtut.core.redraw_canvas.call(null,cljs.core.deref.call(null,khtut.core.state));
});
khtut.core.progress = cljs.core.atom.call(null,(0));
khtut.core.download_canvas = (function khtut$core$download_canvas(canvas,filename){
var link = document.createElement("a");
var data_url = canvas.toDataURL();
link.href = data_url;

link.download = filename;

return link.click();
});
khtut.core.download_animation = (function khtut$core$download_animation(step){
var canvas = document.querySelector("canvas");
var strokes = cljs.core.deref.call(null,khtut.core.state);
var r = cljs.core.range.call(null,(0),cljs.core.count.call(null,strokes),step);
var frame_count = cljs.core.count.call(null,r);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (canvas,strokes,r,frame_count){
return (function (t,i){
khtut.core.redraw_canvas_pct.call(null,strokes,t);

return khtut.core.download_canvas.call(null,canvas,["animation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["000000",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('').slice((-6))),".png"].join(''));
});})(canvas,strokes,r,frame_count))
,r,cljs.core.range.call(null)));
});
document.onkeyup = (function (e){
if(cljs.core._EQ_.call(null,"ArrowRight",e.code)){
cljs.core.swap_BANG_.call(null,khtut.core.progress,cljs.core._PLUS_,0.05);

console.log(cljs.core.deref.call(null,khtut.core.progress));

return khtut.core.redraw_canvas_pct.call(null,cljs.core.deref.call(null,khtut.core.state),cljs.core.deref.call(null,khtut.core.progress));
} else {
if(cljs.core._EQ_.call(null,"ArrowLeft",e.code)){
cljs.core.swap_BANG_.call(null,khtut.core.progress,cljs.core._,0.05);

console.log(cljs.core.deref.call(null,khtut.core.progress));

return khtut.core.redraw_canvas_pct.call(null,cljs.core.deref.call(null,khtut.core.state),cljs.core.deref.call(null,khtut.core.progress));
} else {
if(cljs.core._EQ_.call(null,"KeyR",e.code)){
return khtut.core.redraw_canvas.call(null,cljs.core.deref.call(null,khtut.core.state));
} else {
if(cljs.core._EQ_.call(null,"KeyH",e.code)){
return cljs.core.swap_BANG_.call(null,khtut.core.ui_state,cljs.core.update,new cljs.core.Keyword(null,"show-handles?","show-handles?",-1473489390),cljs.core.not);
} else {
if(cljs.core._EQ_.call(null,"KeyA",e.code)){
return cljs.core.swap_BANG_.call(null,khtut.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.deref.call(null,khtut.core.state)) - (1))], null),cljs.core.conj,cljs.core.last.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,khtut.core.state))));
} else {
if(cljs.core._EQ_.call(null,"KeyD",e.code)){
cljs.core.swap_BANG_.call(null,khtut.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.deref.call(null,khtut.core.state)) - (1))], null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.drop_last));

return khtut.core.redraw_canvas.call(null,cljs.core.deref.call(null,khtut.core.state));
} else {
if(cljs.core._EQ_.call(null,"KeyS",e.code)){
return cljs.core.swap_BANG_.call(null,khtut.core.state,cljs.core.conj,cljs.core.last.call(null,cljs.core.deref.call(null,khtut.core.state)));
} else {
if(cljs.core._EQ_.call(null,"KeyF",e.code)){
return cljs.core.swap_BANG_.call(null,khtut.core.state,cljs.core.comp.call(null,cljs.core.vec,cljs.core.drop_last));
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
});
khtut.core.init_BANG_ = (function khtut$core$init_BANG_(){
return khtut.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1510324448364
