// Compiled by ClojureScript 1.10.773 {}
goog.provide('claimr.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('claimr.logic.parser');
goog.require('claimr.logic.claim');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('claimr.data.reason_codes');
claimr.core.text = reagent.core.atom.call(null,"");
claimr.core.parsed_txt = reagent.core.atom.call(null,"");
claimr.core.selected_record = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
claimr.core.url = "http://localhost:3449/";
claimr.core.parse_input = (function claimr$core$parse_input(txt){
return cljs.core.reset_BANG_.call(null,claimr.core.parsed_txt,claimr.logic.parser.parse835.call(null,cljs.core.deref.call(null,claimr.core.text)));
});
claimr.core.load_sample_data = (function claimr$core$load_sample_data(){
var c__22799__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22800__auto__ = (function (){var switch__22776__auto__ = (function (state_29196){
var state_val_29197 = (state_29196[(1)]);
if((state_val_29197 === (1))){
var inst_29187 = [claimr.core.url,"sample.edi"].join('');
var inst_29188 = cljs_http.client.get.call(null,inst_29187);
var state_29196__$1 = state_29196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29196__$1,(2),inst_29188);
} else {
if((state_val_29197 === (2))){
var inst_29190 = (state_29196[(2)]);
var inst_29191 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29190);
var inst_29192 = cljs.core.reset_BANG_.call(null,claimr.core.text,inst_29191);
var inst_29193 = cljs.core.deref.call(null,claimr.core.text);
var inst_29194 = claimr.core.parse_input.call(null,inst_29193);
var state_29196__$1 = (function (){var statearr_29198 = state_29196;
(statearr_29198[(7)] = inst_29192);

return statearr_29198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29196__$1,inst_29194);
} else {
return null;
}
}
});
return (function() {
var claimr$core$load_sample_data_$_state_machine__22777__auto__ = null;
var claimr$core$load_sample_data_$_state_machine__22777__auto____0 = (function (){
var statearr_29199 = [null,null,null,null,null,null,null,null];
(statearr_29199[(0)] = claimr$core$load_sample_data_$_state_machine__22777__auto__);

(statearr_29199[(1)] = (1));

return statearr_29199;
});
var claimr$core$load_sample_data_$_state_machine__22777__auto____1 = (function (state_29196){
while(true){
var ret_value__22778__auto__ = (function (){try{while(true){
var result__22779__auto__ = switch__22776__auto__.call(null,state_29196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22779__auto__;
}
break;
}
}catch (e29200){if((e29200 instanceof Object)){
var ex__22780__auto__ = e29200;
var statearr_29201_29203 = state_29196;
(statearr_29201_29203[(5)] = ex__22780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29204 = state_29196;
state_29196 = G__29204;
continue;
} else {
return ret_value__22778__auto__;
}
break;
}
});
claimr$core$load_sample_data_$_state_machine__22777__auto__ = function(state_29196){
switch(arguments.length){
case 0:
return claimr$core$load_sample_data_$_state_machine__22777__auto____0.call(this);
case 1:
return claimr$core$load_sample_data_$_state_machine__22777__auto____1.call(this,state_29196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
claimr$core$load_sample_data_$_state_machine__22777__auto__.cljs$core$IFn$_invoke$arity$0 = claimr$core$load_sample_data_$_state_machine__22777__auto____0;
claimr$core$load_sample_data_$_state_machine__22777__auto__.cljs$core$IFn$_invoke$arity$1 = claimr$core$load_sample_data_$_state_machine__22777__auto____1;
return claimr$core$load_sample_data_$_state_machine__22777__auto__;
})()
})();
var state__22801__auto__ = (function (){var statearr_29202 = f__22800__auto__.call(null);
(statearr_29202[(6)] = c__22799__auto__);

return statearr_29202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22801__auto__);
}));

return c__22799__auto__;
});
claimr.core.main2 = (function claimr$core$main2(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__title"], null),"Text Options"], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"heading"], null),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is default text."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"heading"], null),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is default text."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"heading"], null),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is default text."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"heading"], null),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is default text."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"heading"], null),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is default text."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__footer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"#0002134678 TFFC:3 ///////////// "], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__title"], null),"Text Input Styles"], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__body"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput futureinput--text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"example1"], null),"Text input example"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"example1",new cljs.core.Keyword(null,"id","id",-1388402092),"example1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter text here"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__divider"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput futureinput--text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"required",new cljs.core.Keyword(null,"for","for",-1323786319),"example1"], null),"Text input (required)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"example1",new cljs.core.Keyword(null,"id","id",-1388402092),"example1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter text here"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput__help"], null),"Here is some help text!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__divider"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput futureinput--text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"required",new cljs.core.Keyword(null,"for","for",-1323786319),"example1"], null),"Text input (with help text)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"example1",new cljs.core.Keyword(null,"id","id",-1388402092),"example1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter text here"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput__help"], null),"Here is some help text!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__divider"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput futureinput--text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"required",new cljs.core.Keyword(null,"for","for",-1323786319),"example1"], null),"Text input (with validation error)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"example1",new cljs.core.Keyword(null,"id","id",-1388402092),"example1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter text here"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput__error"], null),"\n    [ You have a validation error ]"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__divider"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput futureinput--text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"example1"], null),"Text box req example (disabled)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"example1",new cljs.core.Keyword(null,"id","id",-1388402092),"example1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter text here",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futureinput__help"], null),"Here is some help text!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__divider"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__footer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"#0002134678 TFFC:3 ///////////// "], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__title"], null),"Button Options"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurebutton"], null),"Standard"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurebutton",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Disabled"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurebutton futurebutton--alert"], null),"Alert"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurebutton futurebutton--alert",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Alert"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__footer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"#0002134678 TFFC:3 ///////////// "], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__title"], null),"Metrics"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__body"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric futuremetric--circle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__value"], null),"74"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__label"], null),"tonnes"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric futuremetric--circle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__value futuremetric__value--optimal"], null),"94"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__label"], null),"LBS"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric futuremetric--circle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__value futuremetric__value--warning"], null),"54"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__label"], null),"Hours"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric futuremetric--circle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__value futuremetric__value--alert"], null),"24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__label"], null),"pixels"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__footer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"#0002134678 TFFC:3 ///////////// "], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__title"], null),"Map Grid"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuregrid"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuregrid__row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuregrid__cell"], null),"A1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuregrid__cell"], null),"A2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuregrid__cell"], null),"A3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuregrid__cell"], null),"A4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuregrid__cell"], null),"A5"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__footer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"#0002134678 TFFC:3 ///////////// "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.prn_str.call(null,cljs.core.map.call(null,cljs.core.keys,claimr.logic.parser.extract_claims.call(null,cljs.core.deref.call(null,claimr.core.parsed_txt))))], null)], null)], null);
});
claimr.core.metric = (function claimr$core$metric(value,label,style){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric futuremetric--circle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["futuremetric__value futuremetric__value--",cljs.core.name.call(null,style)].join('')], null),value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futuremetric__label"], null),label], null)], null);
});
claimr.core.sum_totals = (function claimr$core$sum_totals(claims){
return cljs.core.reduce.call(null,(function (totals,claim){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,totals,new cljs.core.Keyword(null,"total-charged","total-charged",677199275),(new cljs.core.Keyword(null,"total-charged","total-charged",677199275).cljs$core$IFn$_invoke$arity$1(totals) + parseFloat(cljs.core.get_in.call(null,claim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Claim Level Data",new cljs.core.Keyword(null,"total-claim-charge-amount","total-claim-charge-amount",-329436183)], null))))),new cljs.core.Keyword(null,"total-paid","total-paid",1797153902),(new cljs.core.Keyword(null,"total-paid","total-paid",1797153902).cljs$core$IFn$_invoke$arity$1(totals) + parseFloat(cljs.core.get_in.call(null,claim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Claim Level Data",new cljs.core.Keyword(null,"claim-payment-amount","claim-payment-amount",-1868785076)], null)))));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total-charged","total-charged",677199275),(0),new cljs.core.Keyword(null,"total-paid","total-paid",1797153902),(0)], null),claims);
});
claimr.core.get_adjustments = (function claimr$core$get_adjustments(claims){
return cljs.core.reduce.call(null,(function (acc,adjustment){
var reasons = (function (){var G__29206 = cljs.core.PersistentVector.EMPTY;
var G__29206__$1 = (((!((new cljs.core.Keyword(null,"adjustment1-reason","adjustment1-reason",23995995).cljs$core$IFn$_invoke$arity$1(adjustment) == null))))?cljs.core.conj.call(null,G__29206,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"adjustment1-reason","adjustment1-reason",23995995).cljs$core$IFn$_invoke$arity$1(adjustment),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.call(null,claimr.data.reason_codes.codes,new cljs.core.Keyword(null,"adjustment1-reason","adjustment1-reason",23995995).cljs$core$IFn$_invoke$arity$1(adjustment)),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"adjustment1-amount","adjustment1-amount",68936795).cljs$core$IFn$_invoke$arity$1(adjustment),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.Keyword(null,"adjustment1-quantity","adjustment1-quantity",-1985346837).cljs$core$IFn$_invoke$arity$1(adjustment)], null)):G__29206);
var G__29206__$2 = (((!((new cljs.core.Keyword(null,"adjustment2-reason","adjustment2-reason",-2079490618).cljs$core$IFn$_invoke$arity$1(adjustment) == null))))?cljs.core.conj.call(null,G__29206__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"adjustment2-reason","adjustment2-reason",-2079490618).cljs$core$IFn$_invoke$arity$1(adjustment),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.call(null,claimr.data.reason_codes.codes,new cljs.core.Keyword(null,"adjustment2-reason","adjustment2-reason",-2079490618).cljs$core$IFn$_invoke$arity$1(adjustment)),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"adjustment2-amount","adjustment2-amount",25699987).cljs$core$IFn$_invoke$arity$1(adjustment),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.Keyword(null,"adjustment2-quantity","adjustment2-quantity",-2085852489).cljs$core$IFn$_invoke$arity$1(adjustment)], null)):G__29206__$1);
var G__29206__$3 = (((!((new cljs.core.Keyword(null,"adjustment3-reason","adjustment3-reason",-596066958).cljs$core$IFn$_invoke$arity$1(adjustment) == null))))?cljs.core.conj.call(null,G__29206__$2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"adjustment3-reason","adjustment3-reason",-596066958).cljs$core$IFn$_invoke$arity$1(adjustment),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.call(null,claimr.data.reason_codes.codes,new cljs.core.Keyword(null,"adjustment3-reason","adjustment3-reason",-596066958).cljs$core$IFn$_invoke$arity$1(adjustment)),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"adjustment3-amount","adjustment3-amount",-1825012863).cljs$core$IFn$_invoke$arity$1(adjustment),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.Keyword(null,"adjustment3-quantity","adjustment3-quantity",42607371).cljs$core$IFn$_invoke$arity$1(adjustment)], null)):G__29206__$2);
if((!((new cljs.core.Keyword(null,"adjustment4-reason","adjustment4-reason",-1786246084).cljs$core$IFn$_invoke$arity$1(adjustment) == null)))){
return cljs.core.conj.call(null,G__29206__$3,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"adjustment4-reason","adjustment4-reason",-1786246084).cljs$core$IFn$_invoke$arity$1(adjustment),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.call(null,claimr.data.reason_codes.codes,new cljs.core.Keyword(null,"adjustment4-reason","adjustment4-reason",-1786246084).cljs$core$IFn$_invoke$arity$1(adjustment)),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"adjustment4-amount","adjustment4-amount",-2132582069).cljs$core$IFn$_invoke$arity$1(adjustment),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.Keyword(null,"adjustment4-quantity","adjustment4-quantity",1142986702).cljs$core$IFn$_invoke$arity$1(adjustment)], null));
} else {
return G__29206__$3;
}
})();
return cljs.core.conj.call(null,acc,cljs.core.assoc.call(null,adjustment,new cljs.core.Keyword(null,"reasons","reasons",572104841),reasons));
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__29205_SHARP_){
return cljs.core.get.call(null,p1__29205_SHARP_,"Claim Adjustments");
}),claims)))));
});
claimr.core.round = (function claimr$core$round(num){
return (Math.floor((num * 100.0)) / 100.0);
});
claimr.core.metrics = (function claimr$core$metrics(claims){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel","div.futurepanel",-134688610),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__header","div.futurepanel__header",-1105493815),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.futurepanel__title","h1.futurepanel__title",-936100986),"Metrics"], null)], null),(function (){var totals = claimr.core.sum_totals.call(null,claims);
var adjustments = claimr.core.get_adjustments.call(null,claims);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__body","div.futurepanel__body",-1723655478),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.heading.title","h3.heading.title",1796217461),"Accepted"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.metric,cljs.core.count.call(null,claims),"Claims",new cljs.core.Keyword(null,"optimal","optimal",-99782576)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.metric,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total-charged","total-charged",677199275).cljs$core$IFn$_invoke$arity$1(totals))].join(''),"Charged",new cljs.core.Keyword(null,"optimal","optimal",-99782576)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.metric,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total-paid","total-paid",1797153902).cljs$core$IFn$_invoke$arity$1(totals))].join(''),"Paid",new cljs.core.Keyword(null,"optimal","optimal",-99782576)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__divider"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.heading.title","h3.heading.title",1796217461),"Denied"], null),(function (){var reasons = cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"reasons","reasons",572104841),adjustments));
var reason_amounts = cljs.core.sort_by.call(null,cljs.core.val,cljs.core._GT_,cljs.core.reduce.call(null,(function (acc,p__29207){
var vec__29208 = p__29207;
var code = cljs.core.nth.call(null,vec__29208,(0),null);
var adjustments__$1 = cljs.core.nth.call(null,vec__29208,(1),null);
return cljs.core.assoc.call(null,acc,code,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,parseFloat,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),adjustments__$1))));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"code","code",1586293142),reasons)));
var max_amount_reason = cljs.core.first.call(null,reason_amounts);
if((!((max_amount_reason == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.metric,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(claimr.core.round.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,reason_amounts))))].join(''),"Total Denials",new cljs.core.Keyword(null,"alert","alert",-571950580)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.metric,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,max_amount_reason))].join(''),["Max Denial Amount Reason: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,max_amount_reason))].join(''),new cljs.core.Keyword(null,"alert","alert",-571950580)], null)], null);
} else {
return null;
}
})()], null);
})()], null);
});
claimr.core.adjustments_view = (function claimr$core$adjustments_view(claims){
var adjustments = claimr.core.get_adjustments.call(null,claims);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel","div.futurepanel",-134688610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__header","div.futurepanel__header",-1105493815),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.futurepanel__title","h1.futurepanel__title",-936100986),"Adjustments"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__body","div.futurepanel__body",-1723655478),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.heading.title","h2.heading.title",-319914375),"Reason Codes"], null),(function (){var reasons = cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"reasons","reasons",572104841),adjustments));
var reason_amounts = cljs.core.sort_by.call(null,cljs.core.val,cljs.core._GT_,cljs.core.reduce.call(null,(function (acc,p__29211){
var vec__29212 = p__29211;
var code = cljs.core.nth.call(null,vec__29212,(0),null);
var adjustments__$1 = cljs.core.nth.call(null,vec__29212,(1),null);
return cljs.core.assoc.call(null,acc,code,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,parseFloat,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),adjustments__$1))));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"code","code",1586293142),reasons)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),claims], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.prn_str.call(null,cljs.core.sort_by.call(null,cljs.core.second,cljs.core._GT_,cljs.core.frequencies.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"code","code",1586293142),reasons))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.prn_str.call(null,reasons)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.prn_str.call(null,reason_amounts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.prn_str.call(null,adjustments)], null)], null);
})()], null)], null);
});
claimr.core.load_panel = (function claimr$core$load_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel","div.futurepanel",-134688610),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(300)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__header","div.futurepanel__header",-1105493815),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.futurepanel__title","h1.futurepanel__title",-936100986),"File Control"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__body","div.futurepanel__body",-1723655478),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.futurebutton","button.futurebutton",-1657918628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(new Audio("retrieve.mp3")).play();

return claimr.core.load_sample_data.call(null);
})], null),"Load Sample Data"], null)], null)], null);
});
claimr.core.edi = (function claimr$core$edi(txt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel","div.futurepanel",-134688610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__header","div.futurepanel__header",-1105493815),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.futurepanel__title","h1.futurepanel__title",-936100986),"Paste 835 Here"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__body","div.futurepanel__body",-1723655478),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futureinput.futureinput--text","div.futureinput.futureinput--text",-979491601),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),txt,new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29215_SHARP_){
cljs.core.reset_BANG_.call(null,claimr.core.text,p1__29215_SHARP_.target.value);

return claimr.core.parse_input.call(null,cljs.core.deref.call(null,claimr.core.text));
})], null)], null)], null)], null)], null);
});
claimr.core.claim_view = (function claimr$core$claim_view(claim){
var patient = cljs.core.get.call(null,claim,"Patient Name");
var expanded = reagent.core.atom.call(null,false);
return (function (claim__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.futurebutton","button.futurebutton",-1657918628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,expanded,cljs.core.not);
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return (new Audio("beep.mp3")).play();
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,patient,new cljs.core.Keyword(null,"last-name","last-name",-1695738974))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,patient,new cljs.core.Keyword(null,"first-name","first-name",-1559982131)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,patient,new cljs.core.Keyword(null,"middle-name","middle-name",-931857342)))].join('')], null),(cljs.core.truth_(cljs.core.deref.call(null,expanded))?(function (){var provider_name = cljs.core.get_in.call(null,claim__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Service Provider Name",new cljs.core.Keyword(null,"org-or-last-name","org-or-last-name",755800017)], null));
var claim_amount = cljs.core.get_in.call(null,claim__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Claim Level Data",new cljs.core.Keyword(null,"total-claim-charge-amount","total-claim-charge-amount",-329436183)], null));
var claim_payment = cljs.core.get_in.call(null,claim__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Claim Level Data",new cljs.core.Keyword(null,"claim-payment-amount","claim-payment-amount",-1868785076)], null));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futuremetric","div.futuremetric",-854132339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),["Provider: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(provider_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Charged: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(claim_amount)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Paid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(claim_payment)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel__divider"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Adjustments"], null),(function (){var iter__4529__auto__ = (function claimr$core$claim_view_$_iter__29217(s__29218){
return (new cljs.core.LazySeq(null,(function (){
var s__29218__$1 = s__29218;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29218__$1);
if(temp__5720__auto__){
var s__29218__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29218__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29218__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29220 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29219 = (0);
while(true){
if((i__29219 < size__4528__auto__)){
var adj = cljs.core._nth.call(null,c__4527__auto__,i__29219);
cljs.core.chunk_append.call(null,b__29220,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.heading.title","span.heading.title",195981145),"Amount: "], null),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(adj)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.heading.title","span.heading.title",195981145),"Reason: "], null),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(adj)," (",new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(adj),")"], null)], null));

var G__29221 = (i__29219 + (1));
i__29219 = G__29221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29220),claimr$core$claim_view_$_iter__29217.call(null,cljs.core.chunk_rest.call(null,s__29218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29220),null);
}
} else {
var adj = cljs.core.first.call(null,s__29218__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.heading.title","span.heading.title",195981145),"Amount: "], null),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(adj)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.heading.title","span.heading.title",195981145),"Reason: "], null),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(adj)," (",new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(adj),")"], null)], null),claimr$core$claim_view_$_iter__29217.call(null,cljs.core.rest.call(null,s__29218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.filter.call(null,(function (p1__29216_SHARP_){
return cljs.core.not_EQ_.call(null,"0",new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__29216_SHARP_));
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"reasons","reasons",572104841),claimr.core.get_adjustments.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [claim__$1], null))))));
})()], null);
})():null)], null);
});
});
claimr.core.claims_bar = (function claimr$core$claims_bar(claims){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel","div.futurepanel",-134688610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__header","div.futurepanel__header",-1105493815),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.futurepanel__title","h1.futurepanel__title",-936100986),"Claims"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.futurepanel__body","div.futurepanel__body",-1723655478),(function (){var iter__4529__auto__ = (function claimr$core$claims_bar_$_iter__29222(s__29223){
return (new cljs.core.LazySeq(null,(function (){
var s__29223__$1 = s__29223;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29223__$1);
if(temp__5720__auto__){
var s__29223__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29223__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29223__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29225 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29224 = (0);
while(true){
if((i__29224 < size__4528__auto__)){
var claim = cljs.core._nth.call(null,c__4527__auto__,i__29224);
cljs.core.chunk_append.call(null,b__29225,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.claim_view,claim], null));

var G__29226 = (i__29224 + (1));
i__29224 = G__29226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29225),claimr$core$claims_bar_$_iter__29222.call(null,cljs.core.chunk_rest.call(null,s__29223__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29225),null);
}
} else {
var claim = cljs.core.first.call(null,s__29223__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.claim_view,claim], null),claimr$core$claims_bar_$_iter__29222.call(null,cljs.core.rest.call(null,s__29223__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,claims);
})()], null)], null);
});
claimr.core.main = (function claimr$core$main(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return (new Audio("retrieve.mp3")).play();
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var parsed = cljs.core.deref.call(null,claimr.core.parsed_txt);
var edi_text = cljs.core.deref.call(null,claimr.core.text);
var claims = claimr.logic.parser.extract_claims.call(null,parsed);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"metrics-panel",new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.metrics,claims], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"claims-panel",new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.claims_bar,claims], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"edi-panel",new cljs.core.Keyword(null,"class","class",-2030961996),"futurepanel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.edi,edi_text], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.load_panel], null)], null);
})], null));
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [claimr.core.main], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1696489864879
