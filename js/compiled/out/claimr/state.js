// Compiled by ClojureScript 1.10.773 {}
goog.provide('claimr.state');
goog.require('cljs.core');
goog.require('re_frame.core');
claimr.state.init = (function claimr$state$init(){
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db,p__40643){
var vec__40644 = p__40643;
var _ = cljs.core.nth.call(null,vec__40644,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40644,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"logged-in","logged-in",627058423),false,new cljs.core.Keyword(null,"test-mode","test-mode",-393027585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null),new cljs.core.Keyword(null,"login-errors","login-errors",-216917895),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"user-token","user-token",-129721708),null,new cljs.core.Keyword(null,"user-type","user-type",738868936),(0));
}));

var fetchers_40671 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authenticate","authenticate",743951231),new cljs.core.Keyword(null,"logout","logout",1418564329),new cljs.core.Keyword(null,"upload-file","upload-file",1968287526)], null);
var seq__40647_40672 = cljs.core.seq.call(null,fetchers_40671);
var chunk__40648_40673 = null;
var count__40649_40674 = (0);
var i__40650_40675 = (0);
while(true){
if((i__40650_40675 < count__40649_40674)){
var fetcher_40676 = cljs.core._nth.call(null,chunk__40648_40673,i__40650_40675);
re_frame.core.reg_event_fx.call(null,fetcher_40676,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,fetcher_40676)], null),((function (seq__40647_40672,chunk__40648_40673,count__40649_40674,i__40650_40675,fetcher_40676,fetchers_40671){
return (function (cofx,event){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)], null);
});})(seq__40647_40672,chunk__40648_40673,count__40649_40674,i__40650_40675,fetcher_40676,fetchers_40671))
);


var G__40677 = seq__40647_40672;
var G__40678 = chunk__40648_40673;
var G__40679 = count__40649_40674;
var G__40680 = (i__40650_40675 + (1));
seq__40647_40672 = G__40677;
chunk__40648_40673 = G__40678;
count__40649_40674 = G__40679;
i__40650_40675 = G__40680;
continue;
} else {
var temp__5720__auto___40681 = cljs.core.seq.call(null,seq__40647_40672);
if(temp__5720__auto___40681){
var seq__40647_40682__$1 = temp__5720__auto___40681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40647_40682__$1)){
var c__4556__auto___40683 = cljs.core.chunk_first.call(null,seq__40647_40682__$1);
var G__40684 = cljs.core.chunk_rest.call(null,seq__40647_40682__$1);
var G__40685 = c__4556__auto___40683;
var G__40686 = cljs.core.count.call(null,c__4556__auto___40683);
var G__40687 = (0);
seq__40647_40672 = G__40684;
chunk__40648_40673 = G__40685;
count__40649_40674 = G__40686;
i__40650_40675 = G__40687;
continue;
} else {
var fetcher_40688 = cljs.core.first.call(null,seq__40647_40682__$1);
re_frame.core.reg_event_fx.call(null,fetcher_40688,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,fetcher_40688)], null),((function (seq__40647_40672,chunk__40648_40673,count__40649_40674,i__40650_40675,fetcher_40688,seq__40647_40682__$1,temp__5720__auto___40681,fetchers_40671){
return (function (cofx,event){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)], null);
});})(seq__40647_40672,chunk__40648_40673,count__40649_40674,i__40650_40675,fetcher_40688,seq__40647_40682__$1,temp__5720__auto___40681,fetchers_40671))
);


var G__40689 = cljs.core.next.call(null,seq__40647_40682__$1);
var G__40690 = null;
var G__40691 = (0);
var G__40692 = (0);
seq__40647_40672 = G__40689;
chunk__40648_40673 = G__40690;
count__40649_40674 = G__40691;
i__40650_40675 = G__40692;
continue;
}
} else {
}
}
break;
}

var states_40693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-level","user-level",460028761)], null);
var seq__40651_40694 = cljs.core.seq.call(null,states_40693);
var chunk__40652_40695 = null;
var count__40653_40696 = (0);
var i__40654_40697 = (0);
while(true){
if((i__40654_40697 < count__40653_40696)){
var e_40698 = cljs.core._nth.call(null,chunk__40652_40695,i__40654_40697);
re_frame.core.reg_event_db.call(null,cljs.core.keyword.call(null,["set-",cljs.core.name.call(null,e_40698)].join('')),((function (seq__40651_40694,chunk__40652_40695,count__40653_40696,i__40654_40697,e_40698,states_40693){
return (function (db,p__40663){
var vec__40664 = p__40663;
var _ = cljs.core.nth.call(null,vec__40664,(0),null);
var param = cljs.core.nth.call(null,vec__40664,(1),null);
return cljs.core.assoc.call(null,db,e_40698,param);
});})(seq__40651_40694,chunk__40652_40695,count__40653_40696,i__40654_40697,e_40698,states_40693))
);

re_frame.core.reg_sub.call(null,e_40698,((function (seq__40651_40694,chunk__40652_40695,count__40653_40696,i__40654_40697,e_40698,states_40693){
return (function (db,_){
return cljs.core.get.call(null,db,e_40698);
});})(seq__40651_40694,chunk__40652_40695,count__40653_40696,i__40654_40697,e_40698,states_40693))
);


var G__40699 = seq__40651_40694;
var G__40700 = chunk__40652_40695;
var G__40701 = count__40653_40696;
var G__40702 = (i__40654_40697 + (1));
seq__40651_40694 = G__40699;
chunk__40652_40695 = G__40700;
count__40653_40696 = G__40701;
i__40654_40697 = G__40702;
continue;
} else {
var temp__5720__auto___40703 = cljs.core.seq.call(null,seq__40651_40694);
if(temp__5720__auto___40703){
var seq__40651_40704__$1 = temp__5720__auto___40703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40651_40704__$1)){
var c__4556__auto___40705 = cljs.core.chunk_first.call(null,seq__40651_40704__$1);
var G__40706 = cljs.core.chunk_rest.call(null,seq__40651_40704__$1);
var G__40707 = c__4556__auto___40705;
var G__40708 = cljs.core.count.call(null,c__4556__auto___40705);
var G__40709 = (0);
seq__40651_40694 = G__40706;
chunk__40652_40695 = G__40707;
count__40653_40696 = G__40708;
i__40654_40697 = G__40709;
continue;
} else {
var e_40710 = cljs.core.first.call(null,seq__40651_40704__$1);
re_frame.core.reg_event_db.call(null,cljs.core.keyword.call(null,["set-",cljs.core.name.call(null,e_40710)].join('')),((function (seq__40651_40694,chunk__40652_40695,count__40653_40696,i__40654_40697,e_40710,seq__40651_40704__$1,temp__5720__auto___40703,states_40693){
return (function (db,p__40667){
var vec__40668 = p__40667;
var _ = cljs.core.nth.call(null,vec__40668,(0),null);
var param = cljs.core.nth.call(null,vec__40668,(1),null);
return cljs.core.assoc.call(null,db,e_40710,param);
});})(seq__40651_40694,chunk__40652_40695,count__40653_40696,i__40654_40697,e_40710,seq__40651_40704__$1,temp__5720__auto___40703,states_40693))
);

re_frame.core.reg_sub.call(null,e_40710,((function (seq__40651_40694,chunk__40652_40695,count__40653_40696,i__40654_40697,e_40710,seq__40651_40704__$1,temp__5720__auto___40703,states_40693){
return (function (db,_){
return cljs.core.get.call(null,db,e_40710);
});})(seq__40651_40694,chunk__40652_40695,count__40653_40696,i__40654_40697,e_40710,seq__40651_40704__$1,temp__5720__auto___40703,states_40693))
);


var G__40711 = cljs.core.next.call(null,seq__40651_40704__$1);
var G__40712 = null;
var G__40713 = (0);
var G__40714 = (0);
seq__40651_40694 = G__40711;
chunk__40652_40695 = G__40712;
count__40653_40696 = G__40713;
i__40654_40697 = G__40714;
continue;
}
} else {
}
}
break;
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434)], null));
});

//# sourceMappingURL=state.js.map?rel=1696187218484
