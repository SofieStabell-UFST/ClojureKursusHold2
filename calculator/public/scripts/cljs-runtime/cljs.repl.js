goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34468){
var map__34470 = p__34468;
var map__34470__$1 = (((((!((map__34470 == null))))?(((((map__34470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34470):map__34470);
var m = map__34470__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34470__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34474_34863 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34475_34864 = null;
var count__34476_34865 = (0);
var i__34477_34866 = (0);
while(true){
if((i__34477_34866 < count__34476_34865)){
var f_34867 = chunk__34475_34864.cljs$core$IIndexed$_nth$arity$2(null,i__34477_34866);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34867], 0));


var G__34868 = seq__34474_34863;
var G__34869 = chunk__34475_34864;
var G__34870 = count__34476_34865;
var G__34871 = (i__34477_34866 + (1));
seq__34474_34863 = G__34868;
chunk__34475_34864 = G__34869;
count__34476_34865 = G__34870;
i__34477_34866 = G__34871;
continue;
} else {
var temp__5735__auto___34872 = cljs.core.seq(seq__34474_34863);
if(temp__5735__auto___34872){
var seq__34474_34877__$1 = temp__5735__auto___34872;
if(cljs.core.chunked_seq_QMARK_(seq__34474_34877__$1)){
var c__4556__auto___34878 = cljs.core.chunk_first(seq__34474_34877__$1);
var G__34879 = cljs.core.chunk_rest(seq__34474_34877__$1);
var G__34880 = c__4556__auto___34878;
var G__34881 = cljs.core.count(c__4556__auto___34878);
var G__34882 = (0);
seq__34474_34863 = G__34879;
chunk__34475_34864 = G__34880;
count__34476_34865 = G__34881;
i__34477_34866 = G__34882;
continue;
} else {
var f_34883 = cljs.core.first(seq__34474_34877__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34883], 0));


var G__34884 = cljs.core.next(seq__34474_34877__$1);
var G__34885 = null;
var G__34886 = (0);
var G__34887 = (0);
seq__34474_34863 = G__34884;
chunk__34475_34864 = G__34885;
count__34476_34865 = G__34886;
i__34477_34866 = G__34887;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34889 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34889], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34889)))?cljs.core.second(arglists_34889):arglists_34889)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34503_34893 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34504_34894 = null;
var count__34505_34895 = (0);
var i__34506_34896 = (0);
while(true){
if((i__34506_34896 < count__34505_34895)){
var vec__34543_34898 = chunk__34504_34894.cljs$core$IIndexed$_nth$arity$2(null,i__34506_34896);
var name_34899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34543_34898,(0),null);
var map__34546_34900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34543_34898,(1),null);
var map__34546_34901__$1 = (((((!((map__34546_34900 == null))))?(((((map__34546_34900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34546_34900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34546_34900):map__34546_34900);
var doc_34902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546_34901__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546_34901__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34899], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34903], 0));

if(cljs.core.truth_(doc_34902)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34902], 0));
} else {
}


var G__34904 = seq__34503_34893;
var G__34905 = chunk__34504_34894;
var G__34906 = count__34505_34895;
var G__34907 = (i__34506_34896 + (1));
seq__34503_34893 = G__34904;
chunk__34504_34894 = G__34905;
count__34505_34895 = G__34906;
i__34506_34896 = G__34907;
continue;
} else {
var temp__5735__auto___34910 = cljs.core.seq(seq__34503_34893);
if(temp__5735__auto___34910){
var seq__34503_34912__$1 = temp__5735__auto___34910;
if(cljs.core.chunked_seq_QMARK_(seq__34503_34912__$1)){
var c__4556__auto___34917 = cljs.core.chunk_first(seq__34503_34912__$1);
var G__34918 = cljs.core.chunk_rest(seq__34503_34912__$1);
var G__34919 = c__4556__auto___34917;
var G__34920 = cljs.core.count(c__4556__auto___34917);
var G__34921 = (0);
seq__34503_34893 = G__34918;
chunk__34504_34894 = G__34919;
count__34505_34895 = G__34920;
i__34506_34896 = G__34921;
continue;
} else {
var vec__34565_34922 = cljs.core.first(seq__34503_34912__$1);
var name_34923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34565_34922,(0),null);
var map__34568_34924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34565_34922,(1),null);
var map__34568_34925__$1 = (((((!((map__34568_34924 == null))))?(((((map__34568_34924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34568_34924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34568_34924):map__34568_34924);
var doc_34926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34568_34925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34568_34925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34923], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34927], 0));

if(cljs.core.truth_(doc_34926)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34926], 0));
} else {
}


var G__34931 = cljs.core.next(seq__34503_34912__$1);
var G__34932 = null;
var G__34933 = (0);
var G__34934 = (0);
seq__34503_34893 = G__34931;
chunk__34504_34894 = G__34932;
count__34505_34895 = G__34933;
i__34506_34896 = G__34934;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34579 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34580 = null;
var count__34581 = (0);
var i__34582 = (0);
while(true){
if((i__34582 < count__34581)){
var role = chunk__34580.cljs$core$IIndexed$_nth$arity$2(null,i__34582);
var temp__5735__auto___34944__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34944__$1)){
var spec_34945 = temp__5735__auto___34944__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34945)], 0));
} else {
}


var G__34946 = seq__34579;
var G__34947 = chunk__34580;
var G__34948 = count__34581;
var G__34949 = (i__34582 + (1));
seq__34579 = G__34946;
chunk__34580 = G__34947;
count__34581 = G__34948;
i__34582 = G__34949;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34579);
if(temp__5735__auto____$1){
var seq__34579__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34579__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34579__$1);
var G__34954 = cljs.core.chunk_rest(seq__34579__$1);
var G__34955 = c__4556__auto__;
var G__34956 = cljs.core.count(c__4556__auto__);
var G__34957 = (0);
seq__34579 = G__34954;
chunk__34580 = G__34955;
count__34581 = G__34956;
i__34582 = G__34957;
continue;
} else {
var role = cljs.core.first(seq__34579__$1);
var temp__5735__auto___34960__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34960__$2)){
var spec_34963 = temp__5735__auto___34960__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34963)], 0));
} else {
}


var G__34968 = cljs.core.next(seq__34579__$1);
var G__34969 = null;
var G__34970 = (0);
var G__34971 = (0);
seq__34579 = G__34968;
chunk__34580 = G__34969;
count__34581 = G__34970;
i__34582 = G__34971;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34979 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34980 = cljs.core.ex_cause(t);
via = G__34979;
t = G__34980;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34732 = datafied_throwable;
var map__34732__$1 = (((((!((map__34732 == null))))?(((((map__34732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34732):map__34732);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34732__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34732__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34732__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34733 = cljs.core.last(via);
var map__34733__$1 = (((((!((map__34733 == null))))?(((((map__34733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34733):map__34733);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34734 = data;
var map__34734__$1 = (((((!((map__34734 == null))))?(((((map__34734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34734):map__34734);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34734__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34734__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34734__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34735 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34735__$1 = (((((!((map__34735 == null))))?(((((map__34735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34735):map__34735);
var top_data = map__34735__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34735__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34741 = phase;
var G__34741__$1 = (((G__34741 instanceof cljs.core.Keyword))?G__34741.fqn:null);
switch (G__34741__$1) {
case "read-source":
var map__34742 = data;
var map__34742__$1 = (((((!((map__34742 == null))))?(((((map__34742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34742):map__34742);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34744 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34744__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34744,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34744);
var G__34744__$2 = (cljs.core.truth_((function (){var fexpr__34745 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34745.cljs$core$IFn$_invoke$arity$1 ? fexpr__34745.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34745.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34744__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34744__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34744__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34744__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34749 = top_data;
var G__34749__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34749,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34749);
var G__34749__$2 = (cljs.core.truth_((function (){var fexpr__34752 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34752.cljs$core$IFn$_invoke$arity$1 ? fexpr__34752.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34752.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34749__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34749__$1);
var G__34749__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34749__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34749__$2);
var G__34749__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34749__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34749__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34749__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34749__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34755 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755,(3),null);
var G__34758 = top_data;
var G__34758__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34758,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34758);
var G__34758__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34758__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34758__$1);
var G__34758__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34758__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34758__$2);
var G__34758__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34758__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34758__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34758__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34758__$4;
}

break;
case "execution":
var vec__34765 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34731_SHARP_){
var or__4126__auto__ = (p1__34731_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__34769 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34769.cljs$core$IFn$_invoke$arity$1 ? fexpr__34769.cljs$core$IFn$_invoke$arity$1(p1__34731_SHARP_) : fexpr__34769.call(null,p1__34731_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34770 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34770__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34770);
var G__34770__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34770__$1);
var G__34770__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34770__$2);
var G__34770__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34770__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34770__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34770__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34741__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34779){
var map__34780 = p__34779;
var map__34780__$1 = (((((!((map__34780 == null))))?(((((map__34780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34780):map__34780);
var triage_data = map__34780__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34784 = phase;
var G__34784__$1 = (((G__34784 instanceof cljs.core.Keyword))?G__34784.fqn:null);
switch (G__34784__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34785 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34786 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34787 = loc;
var G__34788 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34793_35081 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34794_35082 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34795_35083 = true;
var _STAR_print_fn_STAR__temp_val__34796_35084 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34795_35083);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34796_35084);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34773_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34773_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34794_35082);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34793_35081);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34785,G__34786,G__34787,G__34788) : format.call(null,G__34785,G__34786,G__34787,G__34788));

break;
case "macroexpansion":
var G__34806 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34807 = cause_type;
var G__34808 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34809 = loc;
var G__34810 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34806,G__34807,G__34808,G__34809,G__34810) : format.call(null,G__34806,G__34807,G__34808,G__34809,G__34810));

break;
case "compile-syntax-check":
var G__34811 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34812 = cause_type;
var G__34813 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34814 = loc;
var G__34815 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34811,G__34812,G__34813,G__34814,G__34815) : format.call(null,G__34811,G__34812,G__34813,G__34814,G__34815));

break;
case "compilation":
var G__34816 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34817 = cause_type;
var G__34818 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34819 = loc;
var G__34820 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34816,G__34817,G__34818,G__34819,G__34820) : format.call(null,G__34816,G__34817,G__34818,G__34819,G__34820));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34825 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34826 = symbol;
var G__34827 = loc;
var G__34828 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34833_35112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34834_35115 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34835_35116 = true;
var _STAR_print_fn_STAR__temp_val__34836_35117 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34835_35116);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34836_35117);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34774_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34774_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34834_35115);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34833_35112);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34825,G__34826,G__34827,G__34828) : format.call(null,G__34825,G__34826,G__34827,G__34828));
} else {
var G__34854 = "Execution error%s at %s(%s).\n%s\n";
var G__34855 = cause_type;
var G__34856 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34857 = loc;
var G__34858 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34854,G__34855,G__34856,G__34857,G__34858) : format.call(null,G__34854,G__34855,G__34856,G__34857,G__34858));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34784__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
