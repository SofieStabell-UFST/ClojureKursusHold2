goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33627 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33627(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33630 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33630(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32363 = coll;
var G__32364 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32363,G__32364) : shadow.dom.lazy_native_coll_seq.call(null,G__32363,G__32364));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32460 = arguments.length;
switch (G__32460) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32480 = arguments.length;
switch (G__32480) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32508 = arguments.length;
switch (G__32508) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32523 = arguments.length;
switch (G__32523) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32547 = arguments.length;
switch (G__32547) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32571 = arguments.length;
switch (G__32571) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32588){if((e32588 instanceof Object)){
var e = e32588;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32588;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32603 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32604 = null;
var count__32605 = (0);
var i__32606 = (0);
while(true){
if((i__32606 < count__32605)){
var el = chunk__32604.cljs$core$IIndexed$_nth$arity$2(null,i__32606);
var handler_33721__$1 = ((function (seq__32603,chunk__32604,count__32605,i__32606,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32603,chunk__32604,count__32605,i__32606,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33721__$1);


var G__33726 = seq__32603;
var G__33727 = chunk__32604;
var G__33728 = count__32605;
var G__33729 = (i__32606 + (1));
seq__32603 = G__33726;
chunk__32604 = G__33727;
count__32605 = G__33728;
i__32606 = G__33729;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32603);
if(temp__5735__auto__){
var seq__32603__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32603__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32603__$1);
var G__33732 = cljs.core.chunk_rest(seq__32603__$1);
var G__33733 = c__4556__auto__;
var G__33734 = cljs.core.count(c__4556__auto__);
var G__33735 = (0);
seq__32603 = G__33732;
chunk__32604 = G__33733;
count__32605 = G__33734;
i__32606 = G__33735;
continue;
} else {
var el = cljs.core.first(seq__32603__$1);
var handler_33736__$1 = ((function (seq__32603,chunk__32604,count__32605,i__32606,el,seq__32603__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32603,chunk__32604,count__32605,i__32606,el,seq__32603__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33736__$1);


var G__33740 = cljs.core.next(seq__32603__$1);
var G__33741 = null;
var G__33742 = (0);
var G__33743 = (0);
seq__32603 = G__33740;
chunk__32604 = G__33741;
count__32605 = G__33742;
i__32606 = G__33743;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32633 = arguments.length;
switch (G__32633) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32663 = cljs.core.seq(events);
var chunk__32664 = null;
var count__32665 = (0);
var i__32666 = (0);
while(true){
if((i__32666 < count__32665)){
var vec__32686 = chunk__32664.cljs$core$IIndexed$_nth$arity$2(null,i__32666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32686,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32686,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33770 = seq__32663;
var G__33771 = chunk__32664;
var G__33772 = count__32665;
var G__33773 = (i__32666 + (1));
seq__32663 = G__33770;
chunk__32664 = G__33771;
count__32665 = G__33772;
i__32666 = G__33773;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32663);
if(temp__5735__auto__){
var seq__32663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32663__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32663__$1);
var G__33777 = cljs.core.chunk_rest(seq__32663__$1);
var G__33778 = c__4556__auto__;
var G__33779 = cljs.core.count(c__4556__auto__);
var G__33780 = (0);
seq__32663 = G__33777;
chunk__32664 = G__33778;
count__32665 = G__33779;
i__32666 = G__33780;
continue;
} else {
var vec__32694 = cljs.core.first(seq__32663__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32694,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32694,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33782 = cljs.core.next(seq__32663__$1);
var G__33783 = null;
var G__33784 = (0);
var G__33785 = (0);
seq__32663 = G__33782;
chunk__32664 = G__33783;
count__32665 = G__33784;
i__32666 = G__33785;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32702 = cljs.core.seq(styles);
var chunk__32703 = null;
var count__32704 = (0);
var i__32705 = (0);
while(true){
if((i__32705 < count__32704)){
var vec__32724 = chunk__32703.cljs$core$IIndexed$_nth$arity$2(null,i__32705);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32724,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32724,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33793 = seq__32702;
var G__33794 = chunk__32703;
var G__33795 = count__32704;
var G__33796 = (i__32705 + (1));
seq__32702 = G__33793;
chunk__32703 = G__33794;
count__32704 = G__33795;
i__32705 = G__33796;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32702);
if(temp__5735__auto__){
var seq__32702__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32702__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32702__$1);
var G__33799 = cljs.core.chunk_rest(seq__32702__$1);
var G__33800 = c__4556__auto__;
var G__33801 = cljs.core.count(c__4556__auto__);
var G__33802 = (0);
seq__32702 = G__33799;
chunk__32703 = G__33800;
count__32704 = G__33801;
i__32705 = G__33802;
continue;
} else {
var vec__32733 = cljs.core.first(seq__32702__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33805 = cljs.core.next(seq__32702__$1);
var G__33806 = null;
var G__33807 = (0);
var G__33808 = (0);
seq__32702 = G__33805;
chunk__32703 = G__33806;
count__32704 = G__33807;
i__32705 = G__33808;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32740_33810 = key;
var G__32740_33811__$1 = (((G__32740_33810 instanceof cljs.core.Keyword))?G__32740_33810.fqn:null);
switch (G__32740_33811__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33817 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33817,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33817,"aria-");
}
})())){
el.setAttribute(ks_33817,value);
} else {
(el[ks_33817] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32793){
var map__32798 = p__32793;
var map__32798__$1 = (((((!((map__32798 == null))))?(((((map__32798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32798):map__32798);
var props = map__32798__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32798__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32808 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32813 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32813,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32813;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32823 = arguments.length;
switch (G__32823) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32835){
var vec__32836 = p__32835;
var seq__32837 = cljs.core.seq(vec__32836);
var first__32838 = cljs.core.first(seq__32837);
var seq__32837__$1 = cljs.core.next(seq__32837);
var nn = first__32838;
var first__32838__$1 = cljs.core.first(seq__32837__$1);
var seq__32837__$2 = cljs.core.next(seq__32837__$1);
var np = first__32838__$1;
var nc = seq__32837__$2;
var node = vec__32836;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32841 = nn;
var G__32842 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32841,G__32842) : create_fn.call(null,G__32841,G__32842));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32843 = nn;
var G__32844 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32843,G__32844) : create_fn.call(null,G__32843,G__32844));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32845 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(1),null);
var seq__32852_33861 = cljs.core.seq(node_children);
var chunk__32853_33862 = null;
var count__32854_33863 = (0);
var i__32855_33864 = (0);
while(true){
if((i__32855_33864 < count__32854_33863)){
var child_struct_33865 = chunk__32853_33862.cljs$core$IIndexed$_nth$arity$2(null,i__32855_33864);
var children_33866 = shadow.dom.dom_node(child_struct_33865);
if(cljs.core.seq_QMARK_(children_33866)){
var seq__32918_33867 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33866));
var chunk__32920_33868 = null;
var count__32921_33869 = (0);
var i__32922_33870 = (0);
while(true){
if((i__32922_33870 < count__32921_33869)){
var child_33874 = chunk__32920_33868.cljs$core$IIndexed$_nth$arity$2(null,i__32922_33870);
if(cljs.core.truth_(child_33874)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33874);


var G__33875 = seq__32918_33867;
var G__33876 = chunk__32920_33868;
var G__33877 = count__32921_33869;
var G__33878 = (i__32922_33870 + (1));
seq__32918_33867 = G__33875;
chunk__32920_33868 = G__33876;
count__32921_33869 = G__33877;
i__32922_33870 = G__33878;
continue;
} else {
var G__33879 = seq__32918_33867;
var G__33880 = chunk__32920_33868;
var G__33881 = count__32921_33869;
var G__33882 = (i__32922_33870 + (1));
seq__32918_33867 = G__33879;
chunk__32920_33868 = G__33880;
count__32921_33869 = G__33881;
i__32922_33870 = G__33882;
continue;
}
} else {
var temp__5735__auto___33883 = cljs.core.seq(seq__32918_33867);
if(temp__5735__auto___33883){
var seq__32918_33884__$1 = temp__5735__auto___33883;
if(cljs.core.chunked_seq_QMARK_(seq__32918_33884__$1)){
var c__4556__auto___33885 = cljs.core.chunk_first(seq__32918_33884__$1);
var G__33886 = cljs.core.chunk_rest(seq__32918_33884__$1);
var G__33887 = c__4556__auto___33885;
var G__33888 = cljs.core.count(c__4556__auto___33885);
var G__33889 = (0);
seq__32918_33867 = G__33886;
chunk__32920_33868 = G__33887;
count__32921_33869 = G__33888;
i__32922_33870 = G__33889;
continue;
} else {
var child_33890 = cljs.core.first(seq__32918_33884__$1);
if(cljs.core.truth_(child_33890)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33890);


var G__33891 = cljs.core.next(seq__32918_33884__$1);
var G__33892 = null;
var G__33893 = (0);
var G__33894 = (0);
seq__32918_33867 = G__33891;
chunk__32920_33868 = G__33892;
count__32921_33869 = G__33893;
i__32922_33870 = G__33894;
continue;
} else {
var G__33895 = cljs.core.next(seq__32918_33884__$1);
var G__33896 = null;
var G__33897 = (0);
var G__33898 = (0);
seq__32918_33867 = G__33895;
chunk__32920_33868 = G__33896;
count__32921_33869 = G__33897;
i__32922_33870 = G__33898;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33866);
}


var G__33919 = seq__32852_33861;
var G__33920 = chunk__32853_33862;
var G__33921 = count__32854_33863;
var G__33922 = (i__32855_33864 + (1));
seq__32852_33861 = G__33919;
chunk__32853_33862 = G__33920;
count__32854_33863 = G__33921;
i__32855_33864 = G__33922;
continue;
} else {
var temp__5735__auto___33925 = cljs.core.seq(seq__32852_33861);
if(temp__5735__auto___33925){
var seq__32852_33928__$1 = temp__5735__auto___33925;
if(cljs.core.chunked_seq_QMARK_(seq__32852_33928__$1)){
var c__4556__auto___33933 = cljs.core.chunk_first(seq__32852_33928__$1);
var G__33936 = cljs.core.chunk_rest(seq__32852_33928__$1);
var G__33937 = c__4556__auto___33933;
var G__33938 = cljs.core.count(c__4556__auto___33933);
var G__33939 = (0);
seq__32852_33861 = G__33936;
chunk__32853_33862 = G__33937;
count__32854_33863 = G__33938;
i__32855_33864 = G__33939;
continue;
} else {
var child_struct_33951 = cljs.core.first(seq__32852_33928__$1);
var children_33952 = shadow.dom.dom_node(child_struct_33951);
if(cljs.core.seq_QMARK_(children_33952)){
var seq__32944_33953 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33952));
var chunk__32946_33954 = null;
var count__32947_33955 = (0);
var i__32948_33956 = (0);
while(true){
if((i__32948_33956 < count__32947_33955)){
var child_33960 = chunk__32946_33954.cljs$core$IIndexed$_nth$arity$2(null,i__32948_33956);
if(cljs.core.truth_(child_33960)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33960);


var G__33962 = seq__32944_33953;
var G__33963 = chunk__32946_33954;
var G__33964 = count__32947_33955;
var G__33965 = (i__32948_33956 + (1));
seq__32944_33953 = G__33962;
chunk__32946_33954 = G__33963;
count__32947_33955 = G__33964;
i__32948_33956 = G__33965;
continue;
} else {
var G__33966 = seq__32944_33953;
var G__33967 = chunk__32946_33954;
var G__33968 = count__32947_33955;
var G__33969 = (i__32948_33956 + (1));
seq__32944_33953 = G__33966;
chunk__32946_33954 = G__33967;
count__32947_33955 = G__33968;
i__32948_33956 = G__33969;
continue;
}
} else {
var temp__5735__auto___33970__$1 = cljs.core.seq(seq__32944_33953);
if(temp__5735__auto___33970__$1){
var seq__32944_33971__$1 = temp__5735__auto___33970__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32944_33971__$1)){
var c__4556__auto___33972 = cljs.core.chunk_first(seq__32944_33971__$1);
var G__33973 = cljs.core.chunk_rest(seq__32944_33971__$1);
var G__33974 = c__4556__auto___33972;
var G__33975 = cljs.core.count(c__4556__auto___33972);
var G__33976 = (0);
seq__32944_33953 = G__33973;
chunk__32946_33954 = G__33974;
count__32947_33955 = G__33975;
i__32948_33956 = G__33976;
continue;
} else {
var child_33977 = cljs.core.first(seq__32944_33971__$1);
if(cljs.core.truth_(child_33977)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33977);


var G__33978 = cljs.core.next(seq__32944_33971__$1);
var G__33979 = null;
var G__33980 = (0);
var G__33981 = (0);
seq__32944_33953 = G__33978;
chunk__32946_33954 = G__33979;
count__32947_33955 = G__33980;
i__32948_33956 = G__33981;
continue;
} else {
var G__33982 = cljs.core.next(seq__32944_33971__$1);
var G__33983 = null;
var G__33984 = (0);
var G__33985 = (0);
seq__32944_33953 = G__33982;
chunk__32946_33954 = G__33983;
count__32947_33955 = G__33984;
i__32948_33956 = G__33985;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33952);
}


var G__33986 = cljs.core.next(seq__32852_33928__$1);
var G__33987 = null;
var G__33988 = (0);
var G__33989 = (0);
seq__32852_33861 = G__33986;
chunk__32853_33862 = G__33987;
count__32854_33863 = G__33988;
i__32855_33864 = G__33989;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32996 = cljs.core.seq(node);
var chunk__32997 = null;
var count__32998 = (0);
var i__32999 = (0);
while(true){
if((i__32999 < count__32998)){
var n = chunk__32997.cljs$core$IIndexed$_nth$arity$2(null,i__32999);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34019 = seq__32996;
var G__34020 = chunk__32997;
var G__34021 = count__32998;
var G__34022 = (i__32999 + (1));
seq__32996 = G__34019;
chunk__32997 = G__34020;
count__32998 = G__34021;
i__32999 = G__34022;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32996);
if(temp__5735__auto__){
var seq__32996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32996__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32996__$1);
var G__34033 = cljs.core.chunk_rest(seq__32996__$1);
var G__34034 = c__4556__auto__;
var G__34035 = cljs.core.count(c__4556__auto__);
var G__34036 = (0);
seq__32996 = G__34033;
chunk__32997 = G__34034;
count__32998 = G__34035;
i__32999 = G__34036;
continue;
} else {
var n = cljs.core.first(seq__32996__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34038 = cljs.core.next(seq__32996__$1);
var G__34039 = null;
var G__34040 = (0);
var G__34041 = (0);
seq__32996 = G__34038;
chunk__32997 = G__34039;
count__32998 = G__34040;
i__32999 = G__34041;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33019 = arguments.length;
switch (G__33019) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33027 = arguments.length;
switch (G__33027) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33039 = arguments.length;
switch (G__33039) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34057 = arguments.length;
var i__4737__auto___34058 = (0);
while(true){
if((i__4737__auto___34058 < len__4736__auto___34057)){
args__4742__auto__.push((arguments[i__4737__auto___34058]));

var G__34059 = (i__4737__auto___34058 + (1));
i__4737__auto___34058 = G__34059;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33052_34066 = cljs.core.seq(nodes);
var chunk__33054_34067 = null;
var count__33055_34068 = (0);
var i__33056_34069 = (0);
while(true){
if((i__33056_34069 < count__33055_34068)){
var node_34070 = chunk__33054_34067.cljs$core$IIndexed$_nth$arity$2(null,i__33056_34069);
fragment.appendChild(shadow.dom._to_dom(node_34070));


var G__34071 = seq__33052_34066;
var G__34072 = chunk__33054_34067;
var G__34073 = count__33055_34068;
var G__34074 = (i__33056_34069 + (1));
seq__33052_34066 = G__34071;
chunk__33054_34067 = G__34072;
count__33055_34068 = G__34073;
i__33056_34069 = G__34074;
continue;
} else {
var temp__5735__auto___34075 = cljs.core.seq(seq__33052_34066);
if(temp__5735__auto___34075){
var seq__33052_34086__$1 = temp__5735__auto___34075;
if(cljs.core.chunked_seq_QMARK_(seq__33052_34086__$1)){
var c__4556__auto___34087 = cljs.core.chunk_first(seq__33052_34086__$1);
var G__34088 = cljs.core.chunk_rest(seq__33052_34086__$1);
var G__34089 = c__4556__auto___34087;
var G__34090 = cljs.core.count(c__4556__auto___34087);
var G__34091 = (0);
seq__33052_34066 = G__34088;
chunk__33054_34067 = G__34089;
count__33055_34068 = G__34090;
i__33056_34069 = G__34091;
continue;
} else {
var node_34092 = cljs.core.first(seq__33052_34086__$1);
fragment.appendChild(shadow.dom._to_dom(node_34092));


var G__34093 = cljs.core.next(seq__33052_34086__$1);
var G__34094 = null;
var G__34095 = (0);
var G__34096 = (0);
seq__33052_34066 = G__34093;
chunk__33054_34067 = G__34094;
count__33055_34068 = G__34095;
i__33056_34069 = G__34096;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33048){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33048));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33114_34097 = cljs.core.seq(scripts);
var chunk__33115_34098 = null;
var count__33116_34099 = (0);
var i__33117_34100 = (0);
while(true){
if((i__33117_34100 < count__33116_34099)){
var vec__33133_34102 = chunk__33115_34098.cljs$core$IIndexed$_nth$arity$2(null,i__33117_34100);
var script_tag_34103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_34102,(0),null);
var script_body_34104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_34102,(1),null);
eval(script_body_34104);


var G__34105 = seq__33114_34097;
var G__34106 = chunk__33115_34098;
var G__34107 = count__33116_34099;
var G__34108 = (i__33117_34100 + (1));
seq__33114_34097 = G__34105;
chunk__33115_34098 = G__34106;
count__33116_34099 = G__34107;
i__33117_34100 = G__34108;
continue;
} else {
var temp__5735__auto___34109 = cljs.core.seq(seq__33114_34097);
if(temp__5735__auto___34109){
var seq__33114_34110__$1 = temp__5735__auto___34109;
if(cljs.core.chunked_seq_QMARK_(seq__33114_34110__$1)){
var c__4556__auto___34111 = cljs.core.chunk_first(seq__33114_34110__$1);
var G__34112 = cljs.core.chunk_rest(seq__33114_34110__$1);
var G__34113 = c__4556__auto___34111;
var G__34114 = cljs.core.count(c__4556__auto___34111);
var G__34115 = (0);
seq__33114_34097 = G__34112;
chunk__33115_34098 = G__34113;
count__33116_34099 = G__34114;
i__33117_34100 = G__34115;
continue;
} else {
var vec__33141_34118 = cljs.core.first(seq__33114_34110__$1);
var script_tag_34119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141_34118,(0),null);
var script_body_34120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141_34118,(1),null);
eval(script_body_34120);


var G__34123 = cljs.core.next(seq__33114_34110__$1);
var G__34124 = null;
var G__34125 = (0);
var G__34126 = (0);
seq__33114_34097 = G__34123;
chunk__33115_34098 = G__34124;
count__33116_34099 = G__34125;
i__33117_34100 = G__34126;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33144){
var vec__33145 = p__33144;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33150 = arguments.length;
switch (G__33150) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33171 = cljs.core.seq(style_keys);
var chunk__33172 = null;
var count__33173 = (0);
var i__33174 = (0);
while(true){
if((i__33174 < count__33173)){
var it = chunk__33172.cljs$core$IIndexed$_nth$arity$2(null,i__33174);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34139 = seq__33171;
var G__34140 = chunk__33172;
var G__34141 = count__33173;
var G__34142 = (i__33174 + (1));
seq__33171 = G__34139;
chunk__33172 = G__34140;
count__33173 = G__34141;
i__33174 = G__34142;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33171);
if(temp__5735__auto__){
var seq__33171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33171__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33171__$1);
var G__34143 = cljs.core.chunk_rest(seq__33171__$1);
var G__34144 = c__4556__auto__;
var G__34145 = cljs.core.count(c__4556__auto__);
var G__34146 = (0);
seq__33171 = G__34143;
chunk__33172 = G__34144;
count__33173 = G__34145;
i__33174 = G__34146;
continue;
} else {
var it = cljs.core.first(seq__33171__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34147 = cljs.core.next(seq__33171__$1);
var G__34148 = null;
var G__34149 = (0);
var G__34150 = (0);
seq__33171 = G__34147;
chunk__33172 = G__34148;
count__33173 = G__34149;
i__33174 = G__34150;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33186,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33209 = k33186;
var G__33209__$1 = (((G__33209 instanceof cljs.core.Keyword))?G__33209.fqn:null);
switch (G__33209__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33186,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33220){
var vec__33222 = p__33220;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33222,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33222,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33185){
var self__ = this;
var G__33185__$1 = this;
return (new cljs.core.RecordIter((0),G__33185__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33188,other33189){
var self__ = this;
var this33188__$1 = this;
return (((!((other33189 == null)))) && ((this33188__$1.constructor === other33189.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33188__$1.x,other33189.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33188__$1.y,other33189.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33188__$1.__extmap,other33189.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33185){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33259 = cljs.core.keyword_identical_QMARK_;
var expr__33260 = k__4388__auto__;
if(cljs.core.truth_((pred__33259.cljs$core$IFn$_invoke$arity$2 ? pred__33259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33260) : pred__33259.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33260)))){
return (new shadow.dom.Coordinate(G__33185,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33259.cljs$core$IFn$_invoke$arity$2 ? pred__33259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33260) : pred__33259.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33260)))){
return (new shadow.dom.Coordinate(self__.x,G__33185,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33185),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33185){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33185,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33191){
var extmap__4419__auto__ = (function (){var G__33270 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33191,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33191)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33270);
} else {
return G__33270;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33191),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33191),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33276,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33286 = k33276;
var G__33286__$1 = (((G__33286 instanceof cljs.core.Keyword))?G__33286.fqn:null);
switch (G__33286__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33276,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33290){
var vec__33291 = p__33290;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33291,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33291,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33275){
var self__ = this;
var G__33275__$1 = this;
return (new cljs.core.RecordIter((0),G__33275__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33277,other33278){
var self__ = this;
var this33277__$1 = this;
return (((!((other33278 == null)))) && ((this33277__$1.constructor === other33278.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33277__$1.w,other33278.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33277__$1.h,other33278.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33277__$1.__extmap,other33278.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33275){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33312 = cljs.core.keyword_identical_QMARK_;
var expr__33313 = k__4388__auto__;
if(cljs.core.truth_((pred__33312.cljs$core$IFn$_invoke$arity$2 ? pred__33312.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33313) : pred__33312.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33313)))){
return (new shadow.dom.Size(G__33275,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33312.cljs$core$IFn$_invoke$arity$2 ? pred__33312.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33313) : pred__33312.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33313)))){
return (new shadow.dom.Size(self__.w,G__33275,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33275),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33275){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33275,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33279){
var extmap__4419__auto__ = (function (){var G__33325 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33279,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33279)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33325);
} else {
return G__33325;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33279),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33279),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34205 = (i + (1));
var G__34206 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34205;
ret = G__34206;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33353){
var vec__33354 = p__33353;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33365 = arguments.length;
switch (G__33365) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34218 = ps;
var G__34219 = (i + (1));
el__$1 = G__34218;
i = G__34219;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33391 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33395_34228 = cljs.core.seq(props);
var chunk__33396_34229 = null;
var count__33398_34230 = (0);
var i__33399_34231 = (0);
while(true){
if((i__33399_34231 < count__33398_34230)){
var vec__33413_34232 = chunk__33396_34229.cljs$core$IIndexed$_nth$arity$2(null,i__33399_34231);
var k_34233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33413_34232,(0),null);
var v_34234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33413_34232,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34233);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34233),v_34234);


var G__34235 = seq__33395_34228;
var G__34236 = chunk__33396_34229;
var G__34237 = count__33398_34230;
var G__34238 = (i__33399_34231 + (1));
seq__33395_34228 = G__34235;
chunk__33396_34229 = G__34236;
count__33398_34230 = G__34237;
i__33399_34231 = G__34238;
continue;
} else {
var temp__5735__auto___34239 = cljs.core.seq(seq__33395_34228);
if(temp__5735__auto___34239){
var seq__33395_34240__$1 = temp__5735__auto___34239;
if(cljs.core.chunked_seq_QMARK_(seq__33395_34240__$1)){
var c__4556__auto___34241 = cljs.core.chunk_first(seq__33395_34240__$1);
var G__34242 = cljs.core.chunk_rest(seq__33395_34240__$1);
var G__34243 = c__4556__auto___34241;
var G__34244 = cljs.core.count(c__4556__auto___34241);
var G__34245 = (0);
seq__33395_34228 = G__34242;
chunk__33396_34229 = G__34243;
count__33398_34230 = G__34244;
i__33399_34231 = G__34245;
continue;
} else {
var vec__33419_34246 = cljs.core.first(seq__33395_34240__$1);
var k_34247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419_34246,(0),null);
var v_34248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419_34246,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34247);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34247),v_34248);


var G__34249 = cljs.core.next(seq__33395_34240__$1);
var G__34250 = null;
var G__34251 = (0);
var G__34252 = (0);
seq__33395_34228 = G__34249;
chunk__33396_34229 = G__34250;
count__33398_34230 = G__34251;
i__33399_34231 = G__34252;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33427 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(1),null);
var seq__33430_34254 = cljs.core.seq(node_children);
var chunk__33432_34255 = null;
var count__33433_34256 = (0);
var i__33434_34257 = (0);
while(true){
if((i__33434_34257 < count__33433_34256)){
var child_struct_34261 = chunk__33432_34255.cljs$core$IIndexed$_nth$arity$2(null,i__33434_34257);
if((!((child_struct_34261 == null)))){
if(typeof child_struct_34261 === 'string'){
var text_34262 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34262),child_struct_34261].join(''));
} else {
var children_34263 = shadow.dom.svg_node(child_struct_34261);
if(cljs.core.seq_QMARK_(children_34263)){
var seq__33473_34264 = cljs.core.seq(children_34263);
var chunk__33475_34265 = null;
var count__33476_34266 = (0);
var i__33477_34267 = (0);
while(true){
if((i__33477_34267 < count__33476_34266)){
var child_34268 = chunk__33475_34265.cljs$core$IIndexed$_nth$arity$2(null,i__33477_34267);
if(cljs.core.truth_(child_34268)){
node.appendChild(child_34268);


var G__34269 = seq__33473_34264;
var G__34270 = chunk__33475_34265;
var G__34271 = count__33476_34266;
var G__34272 = (i__33477_34267 + (1));
seq__33473_34264 = G__34269;
chunk__33475_34265 = G__34270;
count__33476_34266 = G__34271;
i__33477_34267 = G__34272;
continue;
} else {
var G__34273 = seq__33473_34264;
var G__34274 = chunk__33475_34265;
var G__34275 = count__33476_34266;
var G__34276 = (i__33477_34267 + (1));
seq__33473_34264 = G__34273;
chunk__33475_34265 = G__34274;
count__33476_34266 = G__34275;
i__33477_34267 = G__34276;
continue;
}
} else {
var temp__5735__auto___34277 = cljs.core.seq(seq__33473_34264);
if(temp__5735__auto___34277){
var seq__33473_34278__$1 = temp__5735__auto___34277;
if(cljs.core.chunked_seq_QMARK_(seq__33473_34278__$1)){
var c__4556__auto___34279 = cljs.core.chunk_first(seq__33473_34278__$1);
var G__34280 = cljs.core.chunk_rest(seq__33473_34278__$1);
var G__34281 = c__4556__auto___34279;
var G__34282 = cljs.core.count(c__4556__auto___34279);
var G__34283 = (0);
seq__33473_34264 = G__34280;
chunk__33475_34265 = G__34281;
count__33476_34266 = G__34282;
i__33477_34267 = G__34283;
continue;
} else {
var child_34284 = cljs.core.first(seq__33473_34278__$1);
if(cljs.core.truth_(child_34284)){
node.appendChild(child_34284);


var G__34285 = cljs.core.next(seq__33473_34278__$1);
var G__34286 = null;
var G__34287 = (0);
var G__34288 = (0);
seq__33473_34264 = G__34285;
chunk__33475_34265 = G__34286;
count__33476_34266 = G__34287;
i__33477_34267 = G__34288;
continue;
} else {
var G__34289 = cljs.core.next(seq__33473_34278__$1);
var G__34290 = null;
var G__34291 = (0);
var G__34292 = (0);
seq__33473_34264 = G__34289;
chunk__33475_34265 = G__34290;
count__33476_34266 = G__34291;
i__33477_34267 = G__34292;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34263);
}
}


var G__34293 = seq__33430_34254;
var G__34294 = chunk__33432_34255;
var G__34295 = count__33433_34256;
var G__34296 = (i__33434_34257 + (1));
seq__33430_34254 = G__34293;
chunk__33432_34255 = G__34294;
count__33433_34256 = G__34295;
i__33434_34257 = G__34296;
continue;
} else {
var G__34297 = seq__33430_34254;
var G__34298 = chunk__33432_34255;
var G__34299 = count__33433_34256;
var G__34300 = (i__33434_34257 + (1));
seq__33430_34254 = G__34297;
chunk__33432_34255 = G__34298;
count__33433_34256 = G__34299;
i__33434_34257 = G__34300;
continue;
}
} else {
var temp__5735__auto___34305 = cljs.core.seq(seq__33430_34254);
if(temp__5735__auto___34305){
var seq__33430_34306__$1 = temp__5735__auto___34305;
if(cljs.core.chunked_seq_QMARK_(seq__33430_34306__$1)){
var c__4556__auto___34310 = cljs.core.chunk_first(seq__33430_34306__$1);
var G__34311 = cljs.core.chunk_rest(seq__33430_34306__$1);
var G__34312 = c__4556__auto___34310;
var G__34313 = cljs.core.count(c__4556__auto___34310);
var G__34314 = (0);
seq__33430_34254 = G__34311;
chunk__33432_34255 = G__34312;
count__33433_34256 = G__34313;
i__33434_34257 = G__34314;
continue;
} else {
var child_struct_34315 = cljs.core.first(seq__33430_34306__$1);
if((!((child_struct_34315 == null)))){
if(typeof child_struct_34315 === 'string'){
var text_34316 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34316),child_struct_34315].join(''));
} else {
var children_34320 = shadow.dom.svg_node(child_struct_34315);
if(cljs.core.seq_QMARK_(children_34320)){
var seq__33488_34321 = cljs.core.seq(children_34320);
var chunk__33490_34322 = null;
var count__33491_34323 = (0);
var i__33492_34324 = (0);
while(true){
if((i__33492_34324 < count__33491_34323)){
var child_34325 = chunk__33490_34322.cljs$core$IIndexed$_nth$arity$2(null,i__33492_34324);
if(cljs.core.truth_(child_34325)){
node.appendChild(child_34325);


var G__34326 = seq__33488_34321;
var G__34327 = chunk__33490_34322;
var G__34328 = count__33491_34323;
var G__34329 = (i__33492_34324 + (1));
seq__33488_34321 = G__34326;
chunk__33490_34322 = G__34327;
count__33491_34323 = G__34328;
i__33492_34324 = G__34329;
continue;
} else {
var G__34330 = seq__33488_34321;
var G__34331 = chunk__33490_34322;
var G__34332 = count__33491_34323;
var G__34333 = (i__33492_34324 + (1));
seq__33488_34321 = G__34330;
chunk__33490_34322 = G__34331;
count__33491_34323 = G__34332;
i__33492_34324 = G__34333;
continue;
}
} else {
var temp__5735__auto___34334__$1 = cljs.core.seq(seq__33488_34321);
if(temp__5735__auto___34334__$1){
var seq__33488_34335__$1 = temp__5735__auto___34334__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33488_34335__$1)){
var c__4556__auto___34336 = cljs.core.chunk_first(seq__33488_34335__$1);
var G__34337 = cljs.core.chunk_rest(seq__33488_34335__$1);
var G__34338 = c__4556__auto___34336;
var G__34339 = cljs.core.count(c__4556__auto___34336);
var G__34340 = (0);
seq__33488_34321 = G__34337;
chunk__33490_34322 = G__34338;
count__33491_34323 = G__34339;
i__33492_34324 = G__34340;
continue;
} else {
var child_34341 = cljs.core.first(seq__33488_34335__$1);
if(cljs.core.truth_(child_34341)){
node.appendChild(child_34341);


var G__34342 = cljs.core.next(seq__33488_34335__$1);
var G__34343 = null;
var G__34344 = (0);
var G__34345 = (0);
seq__33488_34321 = G__34342;
chunk__33490_34322 = G__34343;
count__33491_34323 = G__34344;
i__33492_34324 = G__34345;
continue;
} else {
var G__34346 = cljs.core.next(seq__33488_34335__$1);
var G__34347 = null;
var G__34348 = (0);
var G__34349 = (0);
seq__33488_34321 = G__34346;
chunk__33490_34322 = G__34347;
count__33491_34323 = G__34348;
i__33492_34324 = G__34349;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34320);
}
}


var G__34350 = cljs.core.next(seq__33430_34306__$1);
var G__34351 = null;
var G__34352 = (0);
var G__34353 = (0);
seq__33430_34254 = G__34350;
chunk__33432_34255 = G__34351;
count__33433_34256 = G__34352;
i__33434_34257 = G__34353;
continue;
} else {
var G__34354 = cljs.core.next(seq__33430_34306__$1);
var G__34355 = null;
var G__34356 = (0);
var G__34357 = (0);
seq__33430_34254 = G__34354;
chunk__33432_34255 = G__34355;
count__33433_34256 = G__34356;
i__33434_34257 = G__34357;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34361 = arguments.length;
var i__4737__auto___34362 = (0);
while(true){
if((i__4737__auto___34362 < len__4736__auto___34361)){
args__4742__auto__.push((arguments[i__4737__auto___34362]));

var G__34363 = (i__4737__auto___34362 + (1));
i__4737__auto___34362 = G__34363;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33544){
var G__33545 = cljs.core.first(seq33544);
var seq33544__$1 = cljs.core.next(seq33544);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33545,seq33544__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33551 = arguments.length;
switch (G__33551) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29083__auto___34371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29084__auto__ = (function (){var switch__28850__auto__ = (function (state_33565){
var state_val_33566 = (state_33565[(1)]);
if((state_val_33566 === (1))){
var state_33565__$1 = state_33565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33565__$1,(2),once_or_cleanup);
} else {
if((state_val_33566 === (2))){
var inst_33562 = (state_33565[(2)]);
var inst_33563 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33565__$1 = (function (){var statearr_33569 = state_33565;
(statearr_33569[(7)] = inst_33562);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33565__$1,inst_33563);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28851__auto__ = null;
var shadow$dom$state_machine__28851__auto____0 = (function (){
var statearr_33570 = [null,null,null,null,null,null,null,null];
(statearr_33570[(0)] = shadow$dom$state_machine__28851__auto__);

(statearr_33570[(1)] = (1));

return statearr_33570;
});
var shadow$dom$state_machine__28851__auto____1 = (function (state_33565){
while(true){
var ret_value__28852__auto__ = (function (){try{while(true){
var result__28853__auto__ = switch__28850__auto__(state_33565);
if(cljs.core.keyword_identical_QMARK_(result__28853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28853__auto__;
}
break;
}
}catch (e33571){var ex__28854__auto__ = e33571;
var statearr_33572_34372 = state_33565;
(statearr_33572_34372[(2)] = ex__28854__auto__);


if(cljs.core.seq((state_33565[(4)]))){
var statearr_33573_34373 = state_33565;
(statearr_33573_34373[(1)] = cljs.core.first((state_33565[(4)])));

} else {
throw ex__28854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34374 = state_33565;
state_33565 = G__34374;
continue;
} else {
return ret_value__28852__auto__;
}
break;
}
});
shadow$dom$state_machine__28851__auto__ = function(state_33565){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28851__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28851__auto____1.call(this,state_33565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28851__auto____0;
shadow$dom$state_machine__28851__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28851__auto____1;
return shadow$dom$state_machine__28851__auto__;
})()
})();
var state__29085__auto__ = (function (){var statearr_33574 = f__29084__auto__();
(statearr_33574[(6)] = c__29083__auto___34371);

return statearr_33574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29085__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
