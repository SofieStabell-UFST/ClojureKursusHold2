goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36052 = arguments.length;
var i__4737__auto___36053 = (0);
while(true){
if((i__4737__auto___36053 < len__4736__auto___36052)){
args__4742__auto__.push((arguments[i__4737__auto___36053]));

var G__36054 = (i__4737__auto___36053 + (1));
i__4737__auto___36053 = G__36054;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35791){
var G__35792 = cljs.core.first(seq35791);
var seq35791__$1 = cljs.core.next(seq35791);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35792,seq35791__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35793 = cljs.core.seq(sources);
var chunk__35794 = null;
var count__35795 = (0);
var i__35796 = (0);
while(true){
if((i__35796 < count__35795)){
var map__35809 = chunk__35794.cljs$core$IIndexed$_nth$arity$2(null,i__35796);
var map__35809__$1 = (((((!((map__35809 == null))))?(((((map__35809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35809):map__35809);
var src = map__35809__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35812){var e_36057 = e35812;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36057);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36057.message)].join('')));
}

var G__36058 = seq__35793;
var G__36059 = chunk__35794;
var G__36060 = count__35795;
var G__36061 = (i__35796 + (1));
seq__35793 = G__36058;
chunk__35794 = G__36059;
count__35795 = G__36060;
i__35796 = G__36061;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35793);
if(temp__5735__auto__){
var seq__35793__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35793__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35793__$1);
var G__36062 = cljs.core.chunk_rest(seq__35793__$1);
var G__36063 = c__4556__auto__;
var G__36064 = cljs.core.count(c__4556__auto__);
var G__36065 = (0);
seq__35793 = G__36062;
chunk__35794 = G__36063;
count__35795 = G__36064;
i__35796 = G__36065;
continue;
} else {
var map__35813 = cljs.core.first(seq__35793__$1);
var map__35813__$1 = (((((!((map__35813 == null))))?(((((map__35813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35813):map__35813);
var src = map__35813__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35815){var e_36066 = e35815;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36066);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36066.message)].join('')));
}

var G__36067 = cljs.core.next(seq__35793__$1);
var G__36068 = null;
var G__36069 = (0);
var G__36070 = (0);
seq__35793 = G__36067;
chunk__35794 = G__36068;
count__35795 = G__36069;
i__35796 = G__36070;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35819 = cljs.core.seq(js_requires);
var chunk__35820 = null;
var count__35821 = (0);
var i__35822 = (0);
while(true){
if((i__35822 < count__35821)){
var js_ns = chunk__35820.cljs$core$IIndexed$_nth$arity$2(null,i__35822);
var require_str_36071 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36071);


var G__36072 = seq__35819;
var G__36073 = chunk__35820;
var G__36074 = count__35821;
var G__36075 = (i__35822 + (1));
seq__35819 = G__36072;
chunk__35820 = G__36073;
count__35821 = G__36074;
i__35822 = G__36075;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35819);
if(temp__5735__auto__){
var seq__35819__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35819__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35819__$1);
var G__36076 = cljs.core.chunk_rest(seq__35819__$1);
var G__36077 = c__4556__auto__;
var G__36078 = cljs.core.count(c__4556__auto__);
var G__36079 = (0);
seq__35819 = G__36076;
chunk__35820 = G__36077;
count__35821 = G__36078;
i__35822 = G__36079;
continue;
} else {
var js_ns = cljs.core.first(seq__35819__$1);
var require_str_36080 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36080);


var G__36081 = cljs.core.next(seq__35819__$1);
var G__36082 = null;
var G__36083 = (0);
var G__36084 = (0);
seq__35819 = G__36081;
chunk__35820 = G__36082;
count__35821 = G__36083;
i__35822 = G__36084;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35824){
var map__35825 = p__35824;
var map__35825__$1 = (((((!((map__35825 == null))))?(((((map__35825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35825):map__35825);
var msg = map__35825__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35825__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35825__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35827(s__35828){
return (new cljs.core.LazySeq(null,(function (){
var s__35828__$1 = s__35828;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35828__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35833 = cljs.core.first(xs__6292__auto__);
var map__35833__$1 = (((((!((map__35833 == null))))?(((((map__35833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35833):map__35833);
var src = map__35833__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35833__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35833__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35828__$1,map__35833,map__35833__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35825,map__35825__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35827_$_iter__35829(s__35830){
return (new cljs.core.LazySeq(null,((function (s__35828__$1,map__35833,map__35833__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35825,map__35825__$1,msg,info,reload_info){
return (function (){
var s__35830__$1 = s__35830;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35830__$1);
if(temp__5735__auto____$1){
var s__35830__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35830__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35830__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35832 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35831 = (0);
while(true){
if((i__35831 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35831);
cljs.core.chunk_append(b__35832,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36085 = (i__35831 + (1));
i__35831 = G__36085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35832),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35827_$_iter__35829(cljs.core.chunk_rest(s__35830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35832),null);
}
} else {
var warning = cljs.core.first(s__35830__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35827_$_iter__35829(cljs.core.rest(s__35830__$2)));
}
} else {
return null;
}
break;
}
});})(s__35828__$1,map__35833,map__35833__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35825,map__35825__$1,msg,info,reload_info))
,null,null));
});})(s__35828__$1,map__35833,map__35833__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35825,map__35825__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35827(cljs.core.rest(s__35828__$1)));
} else {
var G__36086 = cljs.core.rest(s__35828__$1);
s__35828__$1 = G__36086;
continue;
}
} else {
var G__36087 = cljs.core.rest(s__35828__$1);
s__35828__$1 = G__36087;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35835_36088 = cljs.core.seq(warnings);
var chunk__35836_36089 = null;
var count__35837_36090 = (0);
var i__35838_36091 = (0);
while(true){
if((i__35838_36091 < count__35837_36090)){
var map__35843_36092 = chunk__35836_36089.cljs$core$IIndexed$_nth$arity$2(null,i__35838_36091);
var map__35843_36093__$1 = (((((!((map__35843_36092 == null))))?(((((map__35843_36092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35843_36092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35843_36092):map__35843_36092);
var w_36094 = map__35843_36093__$1;
var msg_36095__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843_36093__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843_36093__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843_36093__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843_36093__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36098)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36096),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36097),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36095__$1)].join(''));


var G__36099 = seq__35835_36088;
var G__36100 = chunk__35836_36089;
var G__36101 = count__35837_36090;
var G__36102 = (i__35838_36091 + (1));
seq__35835_36088 = G__36099;
chunk__35836_36089 = G__36100;
count__35837_36090 = G__36101;
i__35838_36091 = G__36102;
continue;
} else {
var temp__5735__auto___36103 = cljs.core.seq(seq__35835_36088);
if(temp__5735__auto___36103){
var seq__35835_36104__$1 = temp__5735__auto___36103;
if(cljs.core.chunked_seq_QMARK_(seq__35835_36104__$1)){
var c__4556__auto___36105 = cljs.core.chunk_first(seq__35835_36104__$1);
var G__36106 = cljs.core.chunk_rest(seq__35835_36104__$1);
var G__36107 = c__4556__auto___36105;
var G__36108 = cljs.core.count(c__4556__auto___36105);
var G__36109 = (0);
seq__35835_36088 = G__36106;
chunk__35836_36089 = G__36107;
count__35837_36090 = G__36108;
i__35838_36091 = G__36109;
continue;
} else {
var map__35847_36110 = cljs.core.first(seq__35835_36104__$1);
var map__35847_36111__$1 = (((((!((map__35847_36110 == null))))?(((((map__35847_36110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35847_36110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35847_36110):map__35847_36110);
var w_36112 = map__35847_36111__$1;
var msg_36113__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847_36111__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847_36111__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847_36111__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847_36111__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36116)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36114),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36115),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36113__$1)].join(''));


var G__36117 = cljs.core.next(seq__35835_36104__$1);
var G__36118 = null;
var G__36119 = (0);
var G__36120 = (0);
seq__35835_36088 = G__36117;
chunk__35836_36089 = G__36118;
count__35837_36090 = G__36119;
i__35838_36091 = G__36120;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35823_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35823_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35866){
var map__35868 = p__35866;
var map__35868__$1 = (((((!((map__35868 == null))))?(((((map__35868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35868):map__35868);
var msg = map__35868__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35883 = cljs.core.seq(updates);
var chunk__35885 = null;
var count__35886 = (0);
var i__35887 = (0);
while(true){
if((i__35887 < count__35886)){
var path = chunk__35885.cljs$core$IIndexed$_nth$arity$2(null,i__35887);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35965_36121 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35969_36122 = null;
var count__35970_36123 = (0);
var i__35971_36124 = (0);
while(true){
if((i__35971_36124 < count__35970_36123)){
var node_36125 = chunk__35969_36122.cljs$core$IIndexed$_nth$arity$2(null,i__35971_36124);
if(cljs.core.not(node_36125.shadow$old)){
var path_match_36126 = shadow.cljs.devtools.client.browser.match_paths(node_36125.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36126)){
var new_link_36129 = (function (){var G__35977 = node_36125.cloneNode(true);
G__35977.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36126),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35977;
})();
(node_36125.shadow$old = true);

(new_link_36129.onload = ((function (seq__35965_36121,chunk__35969_36122,count__35970_36123,i__35971_36124,seq__35883,chunk__35885,count__35886,i__35887,new_link_36129,path_match_36126,node_36125,path,map__35868,map__35868__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36125);
});})(seq__35965_36121,chunk__35969_36122,count__35970_36123,i__35971_36124,seq__35883,chunk__35885,count__35886,i__35887,new_link_36129,path_match_36126,node_36125,path,map__35868,map__35868__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36126], 0));

goog.dom.insertSiblingAfter(new_link_36129,node_36125);


var G__36130 = seq__35965_36121;
var G__36131 = chunk__35969_36122;
var G__36132 = count__35970_36123;
var G__36133 = (i__35971_36124 + (1));
seq__35965_36121 = G__36130;
chunk__35969_36122 = G__36131;
count__35970_36123 = G__36132;
i__35971_36124 = G__36133;
continue;
} else {
var G__36134 = seq__35965_36121;
var G__36135 = chunk__35969_36122;
var G__36136 = count__35970_36123;
var G__36137 = (i__35971_36124 + (1));
seq__35965_36121 = G__36134;
chunk__35969_36122 = G__36135;
count__35970_36123 = G__36136;
i__35971_36124 = G__36137;
continue;
}
} else {
var G__36138 = seq__35965_36121;
var G__36139 = chunk__35969_36122;
var G__36140 = count__35970_36123;
var G__36141 = (i__35971_36124 + (1));
seq__35965_36121 = G__36138;
chunk__35969_36122 = G__36139;
count__35970_36123 = G__36140;
i__35971_36124 = G__36141;
continue;
}
} else {
var temp__5735__auto___36142 = cljs.core.seq(seq__35965_36121);
if(temp__5735__auto___36142){
var seq__35965_36143__$1 = temp__5735__auto___36142;
if(cljs.core.chunked_seq_QMARK_(seq__35965_36143__$1)){
var c__4556__auto___36144 = cljs.core.chunk_first(seq__35965_36143__$1);
var G__36145 = cljs.core.chunk_rest(seq__35965_36143__$1);
var G__36146 = c__4556__auto___36144;
var G__36147 = cljs.core.count(c__4556__auto___36144);
var G__36148 = (0);
seq__35965_36121 = G__36145;
chunk__35969_36122 = G__36146;
count__35970_36123 = G__36147;
i__35971_36124 = G__36148;
continue;
} else {
var node_36149 = cljs.core.first(seq__35965_36143__$1);
if(cljs.core.not(node_36149.shadow$old)){
var path_match_36154 = shadow.cljs.devtools.client.browser.match_paths(node_36149.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36154)){
var new_link_36155 = (function (){var G__35978 = node_36149.cloneNode(true);
G__35978.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36154),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35978;
})();
(node_36149.shadow$old = true);

(new_link_36155.onload = ((function (seq__35965_36121,chunk__35969_36122,count__35970_36123,i__35971_36124,seq__35883,chunk__35885,count__35886,i__35887,new_link_36155,path_match_36154,node_36149,seq__35965_36143__$1,temp__5735__auto___36142,path,map__35868,map__35868__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36149);
});})(seq__35965_36121,chunk__35969_36122,count__35970_36123,i__35971_36124,seq__35883,chunk__35885,count__35886,i__35887,new_link_36155,path_match_36154,node_36149,seq__35965_36143__$1,temp__5735__auto___36142,path,map__35868,map__35868__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36154], 0));

goog.dom.insertSiblingAfter(new_link_36155,node_36149);


var G__36156 = cljs.core.next(seq__35965_36143__$1);
var G__36157 = null;
var G__36158 = (0);
var G__36159 = (0);
seq__35965_36121 = G__36156;
chunk__35969_36122 = G__36157;
count__35970_36123 = G__36158;
i__35971_36124 = G__36159;
continue;
} else {
var G__36160 = cljs.core.next(seq__35965_36143__$1);
var G__36161 = null;
var G__36162 = (0);
var G__36163 = (0);
seq__35965_36121 = G__36160;
chunk__35969_36122 = G__36161;
count__35970_36123 = G__36162;
i__35971_36124 = G__36163;
continue;
}
} else {
var G__36164 = cljs.core.next(seq__35965_36143__$1);
var G__36165 = null;
var G__36166 = (0);
var G__36167 = (0);
seq__35965_36121 = G__36164;
chunk__35969_36122 = G__36165;
count__35970_36123 = G__36166;
i__35971_36124 = G__36167;
continue;
}
}
} else {
}
}
break;
}


var G__36168 = seq__35883;
var G__36169 = chunk__35885;
var G__36170 = count__35886;
var G__36171 = (i__35887 + (1));
seq__35883 = G__36168;
chunk__35885 = G__36169;
count__35886 = G__36170;
i__35887 = G__36171;
continue;
} else {
var G__36172 = seq__35883;
var G__36173 = chunk__35885;
var G__36174 = count__35886;
var G__36175 = (i__35887 + (1));
seq__35883 = G__36172;
chunk__35885 = G__36173;
count__35886 = G__36174;
i__35887 = G__36175;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35883);
if(temp__5735__auto__){
var seq__35883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35883__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35883__$1);
var G__36176 = cljs.core.chunk_rest(seq__35883__$1);
var G__36177 = c__4556__auto__;
var G__36178 = cljs.core.count(c__4556__auto__);
var G__36179 = (0);
seq__35883 = G__36176;
chunk__35885 = G__36177;
count__35886 = G__36178;
i__35887 = G__36179;
continue;
} else {
var path = cljs.core.first(seq__35883__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35979_36180 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35983_36181 = null;
var count__35984_36182 = (0);
var i__35985_36183 = (0);
while(true){
if((i__35985_36183 < count__35984_36182)){
var node_36184 = chunk__35983_36181.cljs$core$IIndexed$_nth$arity$2(null,i__35985_36183);
if(cljs.core.not(node_36184.shadow$old)){
var path_match_36189 = shadow.cljs.devtools.client.browser.match_paths(node_36184.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36189)){
var new_link_36190 = (function (){var G__35998 = node_36184.cloneNode(true);
G__35998.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36189),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35998;
})();
(node_36184.shadow$old = true);

(new_link_36190.onload = ((function (seq__35979_36180,chunk__35983_36181,count__35984_36182,i__35985_36183,seq__35883,chunk__35885,count__35886,i__35887,new_link_36190,path_match_36189,node_36184,path,seq__35883__$1,temp__5735__auto__,map__35868,map__35868__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36184);
});})(seq__35979_36180,chunk__35983_36181,count__35984_36182,i__35985_36183,seq__35883,chunk__35885,count__35886,i__35887,new_link_36190,path_match_36189,node_36184,path,seq__35883__$1,temp__5735__auto__,map__35868,map__35868__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36189], 0));

goog.dom.insertSiblingAfter(new_link_36190,node_36184);


var G__36191 = seq__35979_36180;
var G__36192 = chunk__35983_36181;
var G__36193 = count__35984_36182;
var G__36194 = (i__35985_36183 + (1));
seq__35979_36180 = G__36191;
chunk__35983_36181 = G__36192;
count__35984_36182 = G__36193;
i__35985_36183 = G__36194;
continue;
} else {
var G__36195 = seq__35979_36180;
var G__36196 = chunk__35983_36181;
var G__36197 = count__35984_36182;
var G__36198 = (i__35985_36183 + (1));
seq__35979_36180 = G__36195;
chunk__35983_36181 = G__36196;
count__35984_36182 = G__36197;
i__35985_36183 = G__36198;
continue;
}
} else {
var G__36199 = seq__35979_36180;
var G__36200 = chunk__35983_36181;
var G__36201 = count__35984_36182;
var G__36202 = (i__35985_36183 + (1));
seq__35979_36180 = G__36199;
chunk__35983_36181 = G__36200;
count__35984_36182 = G__36201;
i__35985_36183 = G__36202;
continue;
}
} else {
var temp__5735__auto___36203__$1 = cljs.core.seq(seq__35979_36180);
if(temp__5735__auto___36203__$1){
var seq__35979_36204__$1 = temp__5735__auto___36203__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35979_36204__$1)){
var c__4556__auto___36205 = cljs.core.chunk_first(seq__35979_36204__$1);
var G__36206 = cljs.core.chunk_rest(seq__35979_36204__$1);
var G__36207 = c__4556__auto___36205;
var G__36208 = cljs.core.count(c__4556__auto___36205);
var G__36209 = (0);
seq__35979_36180 = G__36206;
chunk__35983_36181 = G__36207;
count__35984_36182 = G__36208;
i__35985_36183 = G__36209;
continue;
} else {
var node_36210 = cljs.core.first(seq__35979_36204__$1);
if(cljs.core.not(node_36210.shadow$old)){
var path_match_36211 = shadow.cljs.devtools.client.browser.match_paths(node_36210.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36211)){
var new_link_36212 = (function (){var G__35999 = node_36210.cloneNode(true);
G__35999.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36211),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35999;
})();
(node_36210.shadow$old = true);

(new_link_36212.onload = ((function (seq__35979_36180,chunk__35983_36181,count__35984_36182,i__35985_36183,seq__35883,chunk__35885,count__35886,i__35887,new_link_36212,path_match_36211,node_36210,seq__35979_36204__$1,temp__5735__auto___36203__$1,path,seq__35883__$1,temp__5735__auto__,map__35868,map__35868__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36210);
});})(seq__35979_36180,chunk__35983_36181,count__35984_36182,i__35985_36183,seq__35883,chunk__35885,count__35886,i__35887,new_link_36212,path_match_36211,node_36210,seq__35979_36204__$1,temp__5735__auto___36203__$1,path,seq__35883__$1,temp__5735__auto__,map__35868,map__35868__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36211], 0));

goog.dom.insertSiblingAfter(new_link_36212,node_36210);


var G__36213 = cljs.core.next(seq__35979_36204__$1);
var G__36214 = null;
var G__36215 = (0);
var G__36216 = (0);
seq__35979_36180 = G__36213;
chunk__35983_36181 = G__36214;
count__35984_36182 = G__36215;
i__35985_36183 = G__36216;
continue;
} else {
var G__36217 = cljs.core.next(seq__35979_36204__$1);
var G__36218 = null;
var G__36219 = (0);
var G__36220 = (0);
seq__35979_36180 = G__36217;
chunk__35983_36181 = G__36218;
count__35984_36182 = G__36219;
i__35985_36183 = G__36220;
continue;
}
} else {
var G__36221 = cljs.core.next(seq__35979_36204__$1);
var G__36222 = null;
var G__36223 = (0);
var G__36224 = (0);
seq__35979_36180 = G__36221;
chunk__35983_36181 = G__36222;
count__35984_36182 = G__36223;
i__35985_36183 = G__36224;
continue;
}
}
} else {
}
}
break;
}


var G__36225 = cljs.core.next(seq__35883__$1);
var G__36226 = null;
var G__36227 = (0);
var G__36228 = (0);
seq__35883 = G__36225;
chunk__35885 = G__36226;
count__35886 = G__36227;
i__35887 = G__36228;
continue;
} else {
var G__36230 = cljs.core.next(seq__35883__$1);
var G__36231 = null;
var G__36232 = (0);
var G__36233 = (0);
seq__35883 = G__36230;
chunk__35885 = G__36231;
count__35886 = G__36232;
i__35887 = G__36233;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36003){
var map__36004 = p__36003;
var map__36004__$1 = (((((!((map__36004 == null))))?(((((map__36004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36004):map__36004);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36004__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36011){
var map__36012 = p__36011;
var map__36012__$1 = (((((!((map__36012 == null))))?(((((map__36012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36012):map__36012);
var _ = map__36012__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36012__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36014,done,error){
var map__36015 = p__36014;
var map__36015__$1 = (((((!((map__36015 == null))))?(((((map__36015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36015):map__36015);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36015__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36019,done,error){
var map__36020 = p__36019;
var map__36020__$1 = (((((!((map__36020 == null))))?(((((map__36020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36020):map__36020);
var msg = map__36020__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36022){
var map__36023 = p__36022;
var map__36023__$1 = (((((!((map__36023 == null))))?(((((map__36023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36023):map__36023);
var src = map__36023__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36023__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36025 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36025) : done.call(null,G__36025));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36026){
var map__36027 = p__36026;
var map__36027__$1 = (((((!((map__36027 == null))))?(((((map__36027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36027):map__36027);
var msg__$1 = map__36027__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36027__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36031){var ex = e36031;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36032){
var map__36033 = p__36032;
var map__36033__$1 = (((((!((map__36033 == null))))?(((((map__36033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36033):map__36033);
var env = map__36033__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36033__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36036){
var map__36037 = p__36036;
var map__36037__$1 = (((((!((map__36037 == null))))?(((((map__36037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36037):map__36037);
var msg = map__36037__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36045){
var map__36046 = p__36045;
var map__36046__$1 = (((((!((map__36046 == null))))?(((((map__36046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36046):map__36046);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36048){
var map__36049 = p__36048;
var map__36049__$1 = (((((!((map__36049 == null))))?(((((map__36049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36049):map__36049);
var svc = map__36049__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36049__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
