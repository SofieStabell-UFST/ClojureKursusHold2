goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35333,p__35334){
var map__35335 = p__35333;
var map__35335__$1 = (((((!((map__35335 == null))))?(((((map__35335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35335):map__35335);
var svc = map__35335__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35336 = p__35334;
var map__35336__$1 = (((((!((map__35336 == null))))?(((((map__35336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35336):map__35336);
var msg = map__35336__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35336__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35336__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35336__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35336__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35341,p__35342){
var map__35343 = p__35341;
var map__35343__$1 = (((((!((map__35343 == null))))?(((((map__35343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35343):map__35343);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35343__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35344 = p__35342;
var map__35344__$1 = (((((!((map__35344 == null))))?(((((map__35344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35344):map__35344);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35344__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35358,p__35359){
var map__35360 = p__35358;
var map__35360__$1 = (((((!((map__35360 == null))))?(((((map__35360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35360):map__35360);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35360__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35360__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35361 = p__35359;
var map__35361__$1 = (((((!((map__35361 == null))))?(((((map__35361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35361):map__35361);
var msg = map__35361__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35361__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35379,tid){
var map__35380 = p__35379;
var map__35380__$1 = (((((!((map__35380 == null))))?(((((map__35380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35380):map__35380);
var svc = map__35380__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35380__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35388 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35389 = null;
var count__35390 = (0);
var i__35391 = (0);
while(true){
if((i__35391 < count__35390)){
var vec__35425 = chunk__35389.cljs$core$IIndexed$_nth$arity$2(null,i__35391);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35425,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35425,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35463 = seq__35388;
var G__35464 = chunk__35389;
var G__35465 = count__35390;
var G__35466 = (i__35391 + (1));
seq__35388 = G__35463;
chunk__35389 = G__35464;
count__35390 = G__35465;
i__35391 = G__35466;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35388);
if(temp__5735__auto__){
var seq__35388__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35388__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35388__$1);
var G__35467 = cljs.core.chunk_rest(seq__35388__$1);
var G__35468 = c__4556__auto__;
var G__35469 = cljs.core.count(c__4556__auto__);
var G__35470 = (0);
seq__35388 = G__35467;
chunk__35389 = G__35468;
count__35390 = G__35469;
i__35391 = G__35470;
continue;
} else {
var vec__35429 = cljs.core.first(seq__35388__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35429,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35429,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35474 = cljs.core.next(seq__35388__$1);
var G__35475 = null;
var G__35476 = (0);
var G__35477 = (0);
seq__35388 = G__35474;
chunk__35389 = G__35475;
count__35390 = G__35476;
i__35391 = G__35477;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35383_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35383_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35384_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35384_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35385_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35385_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35386_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35386_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35437){
var map__35438 = p__35437;
var map__35438__$1 = (((((!((map__35438 == null))))?(((((map__35438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35438):map__35438);
var svc = map__35438__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35438__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35438__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
