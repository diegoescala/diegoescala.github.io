// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__27016){
var vec__27017 = p__27016;
var k = cljs.core.nth.call(null,vec__27017,(0),null);
var v = cljs.core.nth.call(null,vec__27017,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__27020 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__27020)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__27020)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__27020)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__27020)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__27020)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__27020)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27020)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__27021){
var map__27022 = p__27021;
var map__27022__$1 = (((((!((map__27022 == null))))?(((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var request = map__27022__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__27024 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__27024,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__27024,response_type);

G__27024.setTimeoutInterval(timeout);

G__27024.setWithCredentials(send_credentials);

return G__27024;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__27025){
var map__27026 = p__27025;
var map__27026__$1 = (((((!((map__27026 == null))))?(((((map__27026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27026):map__27026);
var request = map__27026__$1;
var request_method = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_27050 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__27028_27051 = xhr;
G__27028_27051.setProgressEventsEnabled(true);

G__27028_27051.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_27050,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__27028_27051.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_27050,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__25062__auto___27052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_27039){
var state_val_27040 = (state_27039[(1)]);
if((state_val_27040 === (1))){
var state_27039__$1 = state_27039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27039__$1,(2),cancel);
} else {
if((state_val_27040 === (2))){
var inst_27030 = (state_27039[(2)]);
var inst_27031 = xhr.isComplete();
var inst_27032 = cljs.core.not.call(null,inst_27031);
var state_27039__$1 = (function (){var statearr_27041 = state_27039;
(statearr_27041[(7)] = inst_27030);

return statearr_27041;
})();
if(inst_27032){
var statearr_27042_27053 = state_27039__$1;
(statearr_27042_27053[(1)] = (3));

} else {
var statearr_27043_27054 = state_27039__$1;
(statearr_27043_27054[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (3))){
var inst_27034 = xhr.abort();
var state_27039__$1 = state_27039;
var statearr_27044_27055 = state_27039__$1;
(statearr_27044_27055[(2)] = inst_27034);

(statearr_27044_27055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (4))){
var state_27039__$1 = state_27039;
var statearr_27045_27056 = state_27039__$1;
(statearr_27045_27056[(2)] = null);

(statearr_27045_27056[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (5))){
var inst_27037 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27039__$1,inst_27037);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__24968__auto__ = null;
var cljs_http$core$xhr_$_state_machine__24968__auto____0 = (function (){
var statearr_27046 = [null,null,null,null,null,null,null,null];
(statearr_27046[(0)] = cljs_http$core$xhr_$_state_machine__24968__auto__);

(statearr_27046[(1)] = (1));

return statearr_27046;
});
var cljs_http$core$xhr_$_state_machine__24968__auto____1 = (function (state_27039){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_27039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e27047){if((e27047 instanceof Object)){
var ex__24971__auto__ = e27047;
var statearr_27048_27057 = state_27039;
(statearr_27048_27057[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27058 = state_27039;
state_27039 = G__27058;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__24968__auto__ = function(state_27039){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__24968__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__24968__auto____1.call(this,state_27039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__24968__auto____0;
cljs_http$core$xhr_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__24968__auto____1;
return cljs_http$core$xhr_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_27049 = f__25063__auto__.call(null);
(statearr_27049[(6)] = c__25062__auto___27052);

return statearr_27049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__27059){
var map__27060 = p__27059;
var map__27060__$1 = (((((!((map__27060 == null))))?(((((map__27060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27060):map__27060);
var request = map__27060__$1;
var timeout = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_27073 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_27073], null));

if(cljs.core.truth_(cancel)){
var c__25062__auto___27074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25063__auto__ = (function (){var switch__24967__auto__ = (function (state_27066){
var state_val_27067 = (state_27066[(1)]);
if((state_val_27067 === (1))){
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(2),cancel);
} else {
if((state_val_27067 === (2))){
var inst_27063 = (state_27066[(2)]);
var inst_27064 = jsonp.cancel(req_27073);
var state_27066__$1 = (function (){var statearr_27068 = state_27066;
(statearr_27068[(7)] = inst_27063);

return statearr_27068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27066__$1,inst_27064);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__24968__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__24968__auto____0 = (function (){
var statearr_27069 = [null,null,null,null,null,null,null,null];
(statearr_27069[(0)] = cljs_http$core$jsonp_$_state_machine__24968__auto__);

(statearr_27069[(1)] = (1));

return statearr_27069;
});
var cljs_http$core$jsonp_$_state_machine__24968__auto____1 = (function (state_27066){
while(true){
var ret_value__24969__auto__ = (function (){try{while(true){
var result__24970__auto__ = switch__24967__auto__.call(null,state_27066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24970__auto__;
}
break;
}
}catch (e27070){if((e27070 instanceof Object)){
var ex__24971__auto__ = e27070;
var statearr_27071_27075 = state_27066;
(statearr_27071_27075[(5)] = ex__24971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27076 = state_27066;
state_27066 = G__27076;
continue;
} else {
return ret_value__24969__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__24968__auto__ = function(state_27066){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__24968__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__24968__auto____1.call(this,state_27066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__24968__auto____0;
cljs_http$core$jsonp_$_state_machine__24968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__24968__auto____1;
return cljs_http$core$jsonp_$_state_machine__24968__auto__;
})()
})();
var state__25064__auto__ = (function (){var statearr_27072 = f__25063__auto__.call(null);
(statearr_27072[(6)] = c__25062__auto___27074);

return statearr_27072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25064__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__27077){
var map__27078 = p__27077;
var map__27078__$1 = (((((!((map__27078 == null))))?(((((map__27078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27078):map__27078);
var request = map__27078__$1;
var request_method = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1696052574730
